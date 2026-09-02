import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onOpenRegister?: () => void;
}

// Import all 240 webp video frames eagerly
const frameModules = import.meta.glob<{ default: string }>('../assets/frames/*.webp', { eager: true });

// Sort frame URLs in strict numerical order
const frameUrls: string[] = Object.keys(frameModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((key) => frameModules[key].default);

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 768px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setIsMobile(mqMobile.matches || mqReduce.matches);
    mqMobile.addEventListener('change', onChange);
    mqReduce.addEventListener('change', onChange);
    return () => {
      mqMobile.removeEventListener('change', onChange);
      mqReduce.removeEventListener('change', onChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const loadedImages: HTMLImageElement[] = [];
    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      loadedImages[index] = img;
    });
    imagesRef.current = loadedImages;
  }, [isMobile]);

  // Canvas Drawing & Scroll Frame Scrubbing Loop
  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableHeight));
      setScrollProgress(progress);
      targetFrameRef.current = Math.min(
        frameUrls.length - 1,
        Math.floor(progress * frameUrls.length)
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Render loop with lerp (Linear Interpolation) for ultra-smooth video scrubbing
    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.18; // Smooth factor

      const frameIndex = Math.min(
        frameUrls.length - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      const img = imagesRef.current[frameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        const cWidth = canvas.width;
        const cHeight = canvas.height;
        const iWidth = img.naturalWidth;
        const iHeight = img.naturalHeight;

        const scale = Math.max(cWidth / iWidth, cHeight / iHeight);
        const drawWidth = iWidth * scale;
        const drawHeight = iHeight * scale;
        const offsetX = (cWidth - drawWidth) / 2;
        const offsetY = (cHeight - drawHeight) / 2;

        ctx.clearRect(0, 0, cWidth, cHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isMobile]);

  // Calculate Opacity transitions between State 1 and State 2
  const state1Opacity = Math.max(0, Math.min(1, (0.45 - scrollProgress) / 0.15));
  const state2Opacity = Math.max(0, Math.min(1, (scrollProgress - 0.45) / 0.2));

  const staticFallback = frameUrls[frameUrls.length - 1] || '';

  if (isMobile) {
    return (
      <div
        style={{
          position: 'relative',
          minHeight: '100dvh',
          backgroundColor: '#0A0A0A',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '6rem 1.25rem 3rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: staticFallback ? `url(${staticFallback})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.45,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.85) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', width: '100%', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1rem' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#7EF3E8', display: 'inline-block', borderRadius: '50%' }} />
            <span>JORDAN 2076 — FROM FOUNDATIONS TO THE FUTURE</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(1.9rem, 8vw, 2.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#F5F7F8', letterSpacing: '0.03em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            FROM FOUNDATIONS<br /><span style={{ color: '#7EF3E8' }}>TO THE FUTURE</span>
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#B7B9BD', lineHeight: 1.6, marginBottom: '0.5rem' }}>What foundations must we build today to shape Jordan's future?</p>
          <p style={{ fontSize: '0.88rem', color: 'rgba(183,185,189,0.9)', lineHeight: 1.6, marginBottom: '1.5rem' }}>A national technology and innovation initiative bringing together young builders, industry experts, innovators, companies and ecosystem partners.</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenRegister} style={{ background: '#7EF3E8', color: '#0A0A0A', border: 'none', padding: '0.85rem 1.6rem', fontFamily: 'var(--font-orbitron)', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 0 20px rgba(126, 243, 232, 0.35)', flex: '1 1 160px' }}>Register Now</button>
            <a href="/about" style={{ background: 'rgba(0, 27, 58, 0.5)', color: '#7EF3E8', border: '1px solid rgba(126, 243, 232, 0.5)', padding: '0.85rem 1.6rem', fontFamily: 'var(--font-orbitron)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.06em', borderRadius: '4px', textDecoration: 'none', backdropFilter: 'blur(8px)', textAlign: 'center', flex: '1 1 160px' }}>Explore Jordan 2076</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '300vh',
        backgroundColor: '#0A0A0A',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100dvh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#0A0A0A',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 clamp(1rem, 5vw, 5vw)',
            opacity: state1Opacity,
            pointerEvents: state1Opacity > 0.1 ? 'auto' : 'none',
            transition: 'opacity 0.2s linear',
            maxWidth: '1350px',
            margin: '0 auto',
            left: 0,
            right: 0,
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '1.2rem' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#7EF3E8', display: 'inline-block' }} />
            <span>JORDAN 2076 — FROM FOUNDATIONS TO THE FUTURE</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(1.9rem, 5.8vw, 5rem)', fontWeight: 900, lineHeight: 1.05, color: '#F5F7F8', letterSpacing: '0.03em', marginBottom: '1.2rem', textTransform: 'uppercase', textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)', overflowWrap: 'break-word' }}>
            FROM FOUNDATIONS<br /><span style={{ color: '#7EF3E8' }}>TO THE FUTURE</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)', color: '#B7B9BD', maxWidth: '620px', lineHeight: 1.6, marginBottom: '0.6rem', fontFamily: 'var(--font-body)' }}>
            What foundations must we build today to shape Jordan's future?
          </p>
          <p style={{ fontSize: '0.92rem', color: 'rgba(183,185,189,0.9)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2rem' }}>
            A national technology and innovation initiative bringing together young builders, industry experts, innovators, companies and ecosystem partners.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenRegister} style={{ background: '#7EF3E8', color: '#0A0A0A', border: 'none', padding: '0.9rem 2.2rem', fontFamily: 'var(--font-orbitron)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.08em', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 0 20px rgba(126, 243, 232, 0.4)' }}>Register Now</button>
            <a href="/about" style={{ background: 'rgba(0, 27, 58, 0.4)', color: '#7EF3E8', border: '1px solid rgba(126, 243, 232, 0.5)', padding: '0.9rem 2.2rem', fontFamily: 'var(--font-orbitron)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.08em', borderRadius: '4px', textDecoration: 'none', backdropFilter: 'blur(8px)' }}>Explore Jordan 2076</a>
          </div>

          {/* Bottom Scroll Hint */}
          <div
            style={{
              marginTop: '3.5rem',
              color: '#B7B9BD',
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>↓ SCROLL TO DECODE</span>
          </div>
        </div>

        {/* --- STATE 2: TRANSMISSION DECODED (Centered) --- */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 1.5rem',
            opacity: state2Opacity,
            pointerEvents: state2Opacity > 0.1 ? 'auto' : 'none',
            transition: 'opacity 0.2s linear',
          }}
        >
          <div style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>THE FUTURE IS BUILT TODAY</div>
          <h1 style={{ fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(2.5rem, 6.8vw, 5.2rem)', fontWeight: 900, lineHeight: 1.05, color: '#F5F7F8', letterSpacing: '0.04em', marginBottom: '1.2rem', textTransform: 'uppercase', textShadow: '0 0 35px rgba(126, 243, 232, 0.6), 0 0 60px rgba(0, 27, 58, 0.9), 0 4px 20px rgba(0, 0, 0, 0.95)' }}>
            THE SIGNAL<br /><span style={{ color: '#7EF3E8' }}>FOUND YOU</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#B7B9BD', fontFamily: 'var(--font-body)', marginBottom: '0.6rem' }}>The future is not something we wait for. It is something we build.</p>
          <p style={{ fontSize: '1.15rem', color: '#7EF3E8', fontFamily: 'sans-serif', fontWeight: 600, direction: 'rtl' }}>إشارات من المستقبل</p>
        </div>
      </div>

      {/* Seamless Transition Divider BELOW Hero (Fades from video background to #0A0A0A) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent 0%, #0A0A0A 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </div>
  );
};
