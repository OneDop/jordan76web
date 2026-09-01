import React, { useEffect, useRef } from 'react';
import { frameImages, frameUrls, startFramePreload } from '../lib/frames';

export const ScrollVideoCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  // The boot screen normally kicks this off and reports progress; calling again
  // is a no-op and keeps the canvas working if it mounts on its own.
  useEffect(() => {
    startFramePreload();
  }, []);

  // Canvas drawing & Scroll Lerp Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
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
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrollFraction = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      targetFrameRef.current = Math.min(
        frameUrls.length - 1,
        Math.floor(scrollFraction * frameUrls.length)
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Smooth animation loop using lerp (Linear Interpolation)
    const render = () => {
      // Lerp smoothing factor (0.12 gives ultra-smooth video scrubbing)
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.12;

      const frameIndex = Math.min(
        frameUrls.length - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      const img = frameImages[frameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        const cWidth = canvas.width;
        const cHeight = canvas.height;
        const iWidth = img.naturalWidth;
        const iHeight = img.naturalHeight;

        // Calculate aspect fill / cover scaling
        const scale = Math.max(cWidth / iWidth, cHeight / iHeight);
        const drawWidth = iWidth * scale;
        const drawHeight = iHeight * scale;
        const offsetX = (cWidth - drawWidth) / 2;
        const offsetY = (cHeight - drawHeight) / 2;

        ctx.clearRect(0, 0, cWidth, cHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        // Cyber Overlay Tint
        ctx.fillStyle = 'rgba(10, 10, 10, 0.45)';
        ctx.fillRect(0, 0, cWidth, cHeight);
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

  return (
    <>
      {/* Background Video Frame Canvas. Preload progress is reported by the
          boot screen, so no in-page loading chip is needed here. */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          objectFit: 'cover',
          filter: 'contrast(1.08) brightness(0.9)',
        }}
      />
    </>
  );
};
