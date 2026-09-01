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

  // Preload all 240 WebP frames into memory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      loadedImages[index] = img;
    });
    imagesRef.current = loadedImages;
  }, []);

  // Canvas Drawing & Scroll Frame Scrubbing Loop
  useEffect(() => {
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
  }, []);

  // Calculate Opacity transitions between State 1 and State 2
  const state1Opacity = Math.max(0, Math.min(1, (0.45 - scrollProgress) / 0.15));
  const state2Opacity = Math.max(0, Math.min(1, (scrollProgress - 0.45) / 0.2));

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '300vh', // Hero scroll track
        backgroundColor: '#0A0A0A',
      }}
    >
      {/* Sticky Fullscreen Container */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#0A0A0A',
        }}
      >
        {/* Crisp Video Frame Canvas */}
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

        {/* --- STATE 1: INITIAL TRANSMISSION (Left Aligned) --- */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 5vw',
            opacity: state1Opacity,
            pointerEvents: state1Opacity > 0.1 ? 'auto' : 'none',
            transition: 'opacity 0.2s linear',
            maxWidth: '1350px',
            margin: '0 auto',
            left: 0,
            right: 0,
          }}
        >
          {/* Top Pill Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#7EF3E8',
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', backgroundColor: '#7EF3E8', display: 'inline-block' }} />
            <span>SIGNAL RECEIVED · 31.9539°N 35.9106°E</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(2.8rem, 6.5vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#F5F7F8',
              letterSpacing: '0.04em',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
            }}
          >
            CHANGE THE<br />PRESENT
          </h1>

          {/* Subtitle Paragraph */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
              color: '#7EF3E8',
              maxWidth: '520px',
              lineHeight: 1.6,
              marginBottom: '2.2rem',
              fontFamily: 'var(--font-body)',
            }}
          >
            A signal reached Jordan from 2076. It was not addressed to everyone — only to the people who can still change what happens next.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenRegister}
              style={{
                background: '#7EF3E8',
                color: '#0A0A0A',
                border: 'none',
                padding: '0.9rem 2.2rem',
                fontFamily: 'var(--font-orbitron)',
                fontWeight: 800,
                fontSize: '0.88rem',
                letterSpacing: '0.08em',
                borderRadius: '4px',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(126, 243, 232, 0.4)',
              }}
            >
              BECOME A RECEIVER
            </button>

            <a
              href="#agenda"
              style={{
                background: 'rgba(0, 27, 58, 0.4)',
                color: '#7EF3E8',
                border: '1px solid rgba(126, 243, 232, 0.5)',
                padding: '0.9rem 2.2rem',
                fontFamily: 'var(--font-orbitron)',
                fontWeight: 700,
                fontSize: '0.88rem',
                letterSpacing: '0.08em',
                borderRadius: '4px',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}
            >
              DECODE THE PROGRAMME
            </a>
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
          {/* Transmission Decoded Pill */}
          <div
            style={{
              color: '#7EF3E8',
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              marginBottom: '1.2rem',
              textTransform: 'uppercase',
            }}
          >
            TRANSMISSION DECODED
          </div>

          {/* Large Title */}
          <h1
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(2.5rem, 6.8vw, 5.6rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#F5F7F8',
              letterSpacing: '0.06em',
              marginBottom: '1.8rem',
              textTransform: 'uppercase',
              textShadow: '0 0 35px rgba(126, 243, 232, 0.6), 0 0 60px rgba(0, 27, 58, 0.9), 0 4px 20px rgba(0, 0, 0, 0.95)',
            }}
          >
            THE SIGNAL<br />FOUND YOU
          </h1>

          {/* English Subtitle */}
          <p
            style={{
              fontSize: '1.15rem',
              color: '#B7B9BD',
              fontFamily: 'var(--font-body)',
              marginBottom: '0.8rem',
            }}
          >
            You cannot change 2076 from 2076.
          </p>

          {/* Arabic Subtitle */}
          <p
            style={{
              fontSize: '1.25rem',
              color: '#7EF3E8',
              fontFamily: 'sans-serif',
              fontWeight: 600,
              direction: 'rtl',
            }}
          >
            إشارات من المستقبل
          </p>
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
