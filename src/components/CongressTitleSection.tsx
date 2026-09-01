import React, { useEffect, useRef, useState } from 'react';
import joLogo from '../assets/JO76logo-03.svg';
import './CongressTitleSection.css';

export const CongressTitleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 when section enters bottom, 1 when section reaches middle/top)
      const startTrigger = windowHeight * 0.95;
      const endTrigger = windowHeight * 0.35;
      
      const current = rect.top;
      const rawProgress = (startTrigger - current) / (startTrigger - endTrigger);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Distance multiplier for offset (starts at 1 when progress = 0, decreases to 0 when progress = 1)
  const offsetMultiplier = 1 - scrollProgress;

  // Fly in from completely OUT OF FRAME (outside viewport boundaries)
  // "CONGRESS" moves from far left (-85vw) to center (0)
  const congressX = -offsetMultiplier * 85;
  
  // "DAY" moves from far right (+85vw) to center (0)
  const dayX = offsetMultiplier * 85;

  // Opacity fades in as words enter the visible frame
  const textOpacity = Math.min(1, scrollProgress * 1.8);
  const logoScale = 0.85 + scrollProgress * 0.15;

  return (
    <section className="congress-title-section" ref={sectionRef} id="congress-title">
      {/* Clean ambient radial spotlight */}
      <div className="congress-spotlight" />

      {/* Minimalist Pill Badge */}
      <div className="congress-sub-badge">
        <span className="congress-badge-dot" />
        <span>JORDAN 76 STAGE // MAIN EVENT</span>
      </div>

      {/* Main Title Container */}
      <div className="congress-title-wrapper">
        {/* CONGRESS: Starts completely OUT OF FRAME on the left (-85vw) and glides into center */}
        <h2
          className="congress-text congress-text-left"
          style={{
            transform: `translateX(${congressX}vw)`,
            opacity: textOpacity,
          }}
        >
          CONGRESS
        </h2>

        {/* Central Logo: Clean logo without circle */}
        <div
          className="congress-logo-container"
          style={{
            transform: `scale(${logoScale})`,
          }}
        >
          <img src={joLogo} alt="JO76 Logo" className="congress-logo-img" />
        </div>

        {/* DAY: Starts completely OUT OF FRAME on the right (+85vw) and glides into center */}
        <h2
          className="congress-text congress-text-right"
          style={{
            transform: `translateX(${dayX}vw)`,
            opacity: textOpacity,
          }}
        >
          DAY
        </h2>
      </div>

      {/* Clean Sub-tagline */}
      <div className="congress-footer-line">
        <div className="congress-line-accent" />
        <span className="congress-tagline">THE ULTIMATE TECH EXPERIENCE</span>
        <div className="congress-line-accent right" />
      </div>
    </section>
  );
};

export default CongressTitleSection;
