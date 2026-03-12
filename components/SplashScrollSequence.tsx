import React, { useEffect, useRef, useState, useCallback } from 'react';

// Unified configuration for all devices
const TOTAL_FRAMES = 480;
const VH_PER_PHASE = 0.5;
const TOTAL_VH = VH_PER_PHASE * 4 + 1;

const FRAME_PATH = (n: number) => 
  `./AnimatedImages/Sequence 0${String(n + 999).padStart(4, '0').slice(-4)}.jpg`;

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

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  // ─── Parallel Preloading ──────────────────────────────────────────────────
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        
        // Once all frames are ready, show the page
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }
    
    imagesRef.current = imgs;
    
    return () => {
      imagesRef.current = [];
    };
  }, []);

  // ─── Draw a single frame to canvas ────────────────────────────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current.length) return;
    
    const safeIndex = Math.max(0, Math.min(index, TOTAL_FRAMES - 1));
    const img = imagesRef.current[safeIndex];

    if (!img?.complete || !img.naturalWidth) return;
    
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

  // ─── Scroll handler ──────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded) return;

    // Draw initial frame immediately
    drawFrame(0);

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const { top, height } = section.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const scrolled = -top;
      const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);

      const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
      if (frameIndex !== currentFrameRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
        currentFrameRef.current = frameIndex;
      }

      const phase = PHASES.findIndex(p => progress >= p.start && progress < p.end);
      const newPhase = phase === -1 ? 3 : phase;
      
      if (newPhase !== activePhase) {
        setTextVisible(false);
        setActivePhase(newPhase);
        setTimeout(() => setTextVisible(true), 200);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame, activePhase]);

  const phase = PHASES[activePhase] ?? PHASES[0];

  return (
    <>
      <div ref={sectionRef} style={{ height: `${TOTAL_VH * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          {!isLoaded && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black">
              <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-white/80 transition-all duration-200" style={{ width: `${loadProgress}%` }} />
              </div>
              <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Loading Visuals · {loadProgress}%</p>
            </div>
          )}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ objectFit: 'cover' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
          {isLoaded && (
            <div className="absolute inset-0 flex flex-col justify-end pb-24 sm:pb-32 px-8 sm:px-16 lg:px-24">
              <div className="max-w-3xl">
                <div className="flex gap-2 mb-8">
                  {PHASES.map((p, i) => (
                    <div key={p.id} className="transition-all duration-500" style={{ width: i === activePhase ? '2rem' : '0.4rem', height: '0.25rem', borderRadius: '9999px', background: i === activePhase ? 'white' : 'rgba(255,255,255,0.3)' }} />
                  ))}
                </div>
                <div key={`title-${activePhase}`} style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.45s ease, transform 0.45s ease' }}>
                  <p className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-2xl">{phase.title}</p>
                  {phase.sub && <p className="mt-4 text-sm sm:text-lg text-white/55 font-light tracking-widest uppercase" style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.45s 0.1s ease, transform 0.45s 0.1s ease' }}>{phase.sub}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-0 relative z-10">
        <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark pointer-events-none" />
      </div>
    </>
  );
};

export default SplashScrollSequence;
