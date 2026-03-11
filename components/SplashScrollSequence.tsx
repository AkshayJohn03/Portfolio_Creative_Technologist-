import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 192;
const FRAME_PATH = (n: number) =>
  `./Images/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

const SplashScrollSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const loadedRef = useRef(0);
  const isCompleteRef = useRef(false);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWipe, setShowWipe] = useState(false);
  const [textPhase, setTextPhase] = useState(0); // 0 = hey, 1 = name, 2 = title 1, 3 = title 2

  // Preload all images
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        loadedRef.current = loaded;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) setIsLoaded(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Cover fill — maintain aspect ratio, center crop
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const ox = (cw - nw) / 2;
    const oy = (ch - nh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, ox, oy, nw, nh);
  }, []);

  // Resize canvas
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  // Scroll handler
  useEffect(() => {
    if (!isLoaded) return;

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section || isCompleteRef.current) return;

      const scrollTop = window.scrollY;
      const sectionHeight = section.offsetHeight;
      const progress = Math.min(Math.max(scrollTop / (sectionHeight - window.innerHeight), 0), 1);

      const frameIndex = Math.min(
        Math.floor(progress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      if (frameIndex !== currentFrameRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
        currentFrameRef.current = frameIndex;
      }

      // Text phase based on progress
      if (progress < 0.15) setTextPhase(0);
      else if (progress < 0.35) setTextPhase(1);
      else if (progress < 0.60) setTextPhase(2);
      else setTextPhase(3);

      // Trigger wipe-up exit when sequence is 98% done
      if (progress >= 0.98 && !isCompleteRef.current) {
        isCompleteRef.current = true;
        setShowWipe(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    drawFrame(0);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLoaded, drawFrame, onComplete]);

  const textLines = [
    { phase: 0, text: 'Hey 👋', sub: null },
    { phase: 1, text: "I'm Akshay John.", sub: null },
    { phase: 2, text: 'Creative Technologist', sub: 'Engineering AI · Designing Interactions' },
    { phase: 3, text: 'AI Systems Builder', sub: 'Bridging Intelligence & Human Experience' },
  ];

  const active = textLines.find(t => t.phase === textPhase) ?? textLines[0];

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${TOTAL_FRAMES * 5}px` }} // scroll distance = frames × 5px
    >
      {/* Fixed viewport canvas layer */}
      <div
        className={`fixed inset-0 z-[100] transition-transform duration-700 ease-in-out ${showWipe ? '-translate-y-full' : 'translate-y-0'}`}
        style={{ willChange: 'transform' }}
      >
        {/* Loading screen */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black">
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-white/40 text-xs tracking-widest uppercase font-light">
              Loading {loadProgress}%
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />

        {/* Scroll indicator */}
        {isLoaded && !showWipe && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/40 text-[10px] tracking-widest uppercase font-light">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
            </div>
          </div>
        )}

        {/* Text overlay */}
        {isLoaded && (
          <div className="absolute inset-0 flex flex-col items-start justify-end pb-24 sm:pb-32 px-8 sm:px-16 lg:px-24 pointer-events-none">
            <div className="max-w-3xl">
              <p
                key={active.phase + '-main'}
                className="text-4xl sm:text-6xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-2xl transition-all duration-500 ease-out"
                style={{
                  animation: 'fadeSlideUp 0.5s ease-out both',
                }}
              >
                {active.text}
              </p>
              {active.sub && (
                <p
                  key={active.phase + '-sub'}
                  className="mt-3 text-base sm:text-xl text-white/60 font-light tracking-wide"
                  style={{
                    animation: 'fadeSlideUp 0.5s 0.15s ease-out both',
                  }}
                >
                  {active.sub}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SplashScrollSequence;
