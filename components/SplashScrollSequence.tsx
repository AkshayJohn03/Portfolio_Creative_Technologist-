import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 192;

// Each phase occupies this many viewport-heights of scroll distance
// 4 phases × 2.5vh each = 10 total screen heights of scroll before landing
const VH_PER_PHASE = 2.5;
const TOTAL_VH = VH_PER_PHASE * 4 + 1; // +1vh final buffer

const FRAME_PATH = (n: number) =>
  `./Images/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

// Phase definitions: [startProgress, endProgress]
const PHASES = [
  { id: 0, start: 0.00, end: 0.25, title: 'Hey, I\'m Akshay 👋', sub: null },
  { id: 1, start: 0.25, end: 0.50, title: 'Creative Technologist', sub: 'Engineering AI · Designing Interactions' },
  { id: 2, start: 0.50, end: 0.75, title: 'AI Systems Builder', sub: 'LLMs · Physical AI · Quantitative Systems' },
  { id: 3, start: 0.75, end: 1.00, title: 'Scroll to explore ↓', sub: 'Portfolio · Case Studies · Contact' },
];

const SplashScrollSequence: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const currentFrameRef = useRef(0);
  const snapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSnappingRef = useRef(false);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  // ─── Preload all frames ────────────────────────────────────────────────────
  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = FRAME_PATH(i + 1);
      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) setIsLoaded(true);
      };
      return img;
    });
    imagesRef.current = imgs;
  }, []);

  // ─── Draw a single frame to canvas ────────────────────────────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[Math.max(0, Math.min(index, TOTAL_FRAMES - 1))];
    if (!canvas || !img?.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { width: cw, height: ch } = canvas;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const nw = img.naturalWidth * scale;
    const nh = img.naturalHeight * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - nw) / 2, (ch - nh) / 2, nw, nh);
  }, []);

  // ─── Resize canvas ─────────────────────────────────────────────────────────
  useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  // ─── Scroll handler + Phase snap ──────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded) return;

    const getSectionProgress = (): number => {
      const section = sectionRef.current;
      if (!section) return 0;
      const { top, height } = section.getBoundingClientRect();
      // Progress 0 → 1 as section scrolls past viewport
      const scrollable = height - window.innerHeight;
      const scrolled = -top;
      return Math.min(Math.max(scrolled / scrollable, 0), 1);
    };

    const onScroll = () => {
      const progress = getSectionProgress();

      // Frame rendering
      const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
      if (frameIndex !== currentFrameRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
        currentFrameRef.current = frameIndex;
      }

      // Active phase
      const phase = PHASES.findIndex(p => progress >= p.start && progress < p.end);
      setActivePhase(phase === -1 ? 3 : phase);

      // ── Phase-snap logic ──────────────────────────────────────────────────
      // Debounce: after the user stops scrolling for 250ms, snap to nearest
      // phase boundary so each stop lands cleanly on a text milestone
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
      if (isSnappingRef.current) return;

      snapTimerRef.current = setTimeout(() => {
        const section = sectionRef.current;
        if (!section) return;

        const currentProgress = getSectionProgress();
        // Only snap if inside the section (not past it)
        if (currentProgress >= 1) return;

        // Find nearest phase target (middle of each phase dwell zone)
        const targets = PHASES.map(p => (p.start + p.end) / 2);
        // find nearest target to current progress
        let nearest = targets[0];
        let minDist = Math.abs(currentProgress - targets[0]);
        for (const t of targets) {
          const d = Math.abs(currentProgress - t);
          if (d < minDist) { minDist = d; nearest = t; }
        }

        // Only snap if we're within 0.12 of a target (so rapid scrolling isn't interrupted)
        if (minDist > 0.12) return;

        isSnappingRef.current = true;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const scrollable = section.offsetHeight - window.innerHeight;
        const targetScrollY = sectionTop + nearest * scrollable;

        // Flash text transition
        setTextVisible(false);
        setTimeout(() => setTextVisible(true), 300);

        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
        setTimeout(() => { isSnappingRef.current = false; }, 700);
      }, 250);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    drawFrame(0);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
    };
  }, [isLoaded, drawFrame]);

  const phase = PHASES[activePhase] ?? PHASES[0];

  return (
    <>
      {/* ── Scroll-pinned section ─────────────────────────────────────────── */}
      <div
        ref={sectionRef}
        style={{ height: `${TOTAL_VH * 100}vh` }}
        className="relative"
      >
        {/* Sticky viewport layer */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* Loading overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black">
              <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-white/80 transition-all duration-200"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
                Loading · {loadProgress}%
              </p>
            </div>
          )}

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover' }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* ── Text overlay ─────────────────────────────────────────────── */}
          {isLoaded && (
            <div className="absolute inset-0 flex flex-col justify-end pb-24 sm:pb-32 px-8 sm:px-16 lg:px-24">
              <div className="max-w-3xl">

                {/* Phase dots */}
                <div className="flex gap-2 mb-8">
                  {PHASES.map((p, i) => (
                    <div
                      key={p.id}
                      className="transition-all duration-500"
                      style={{
                        width: i === activePhase ? '2rem' : '0.4rem',
                        height: '0.25rem',
                        borderRadius: '9999px',
                        background: i === activePhase ? 'white' : 'rgba(255,255,255,0.3)',
                      }}
                    />
                  ))}
                </div>

                {/* Title */}
                <div
                  key={`title-${activePhase}`}
                  style={{
                    opacity: textVisible ? 1 : 0,
                    transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
                    transition: 'opacity 0.45s ease, transform 0.45s ease',
                  }}
                >
                  <p className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
                    {phase.title}
                  </p>
                  {phase.sub && (
                    <p
                      className="mt-4 text-sm sm:text-lg text-white/55 font-light tracking-widest uppercase"
                      style={{
                        opacity: textVisible ? 1 : 0,
                        transform: textVisible ? 'translateY(0)' : 'translateY(12px)',
                        transition: 'opacity 0.45s 0.1s ease, transform 0.45s 0.1s ease',
                      }}
                    >
                      {phase.sub}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Scroll indicator (only on first phase) */}
          {isLoaded && activePhase === 0 && (
            <div className="absolute bottom-8 right-8 sm:right-12 flex flex-col items-center gap-2">
              <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
                <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
              </div>
              <span className="text-white/40 text-[9px] tracking-[0.25em] uppercase rotate-90 origin-center mt-4">
                Scroll
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Divider transition into main content ─────────────────────────── */}
      <div className="h-0 relative z-10">
        <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark pointer-events-none" />
      </div>
    </>
  );
};

export default SplashScrollSequence;
