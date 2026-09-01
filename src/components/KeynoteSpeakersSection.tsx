import React, { useEffect, useRef, useState } from 'react';
import { SPEAKERS_DATA } from '../data/speakers';
import './KeynoteSpeakersSection.css';

export const KeynoteSpeakersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [maxTranslate, setMaxTranslate] = useState<number>(0);

  // Filter top 2 keynote speakers
  const keynoteSpeakers = SPEAKERS_DATA.filter(s => s.session === 'keynote' || s.id === 'spk-1' || s.id === 'spk-2').slice(0, 2);
  const spk1 = keynoteSpeakers[0] || SPEAKERS_DATA[0];
  const spk2 = keynoteSpeakers[1] || SPEAKERS_DATA[1];

  useEffect(() => {
    const calculateMaxTranslate = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      // Calculate translate distance so the 4th card stops cleanly in view at the right edge
      const maxScroll = Math.max(0, trackWidth - windowWidth + 100);
      setMaxTranslate(maxScroll);
    };

    calculateMaxTranslate();
    window.addEventListener('resize', calculateMaxTranslate);
    return () => window.removeEventListener('resize', calculateMaxTranslate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = rect.height - windowHeight;

      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / scrollableDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentTranslateX = scrollProgress * maxTranslate;

  return (
    <section className="keynote-scroll-section" ref={sectionRef} id="keynote-speakers">
      <div className="keynote-sticky-container">
        {/* Soft background spotlight */}
        <div className="keynote-bg-ambient">
          <div className="keynote-glow-spot" />
        </div>

        {/* Single Unified Horizontal Track: Title + 4 Cards */}
        <div
          className="keynote-full-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${currentTranslateX}px)`,
          }}
        >
          {/* TITLE BLOCK (First item in horizontal track) */}
          <div className="keynote-title-block">
            <span className="keynote-subtitle-label">STAGE 01 // KEYNOTES</span>
            
            <h2 className="keynote-clean-heading">
              MEET THE<br />
              <span>KEYNOTE</span>
              <span>SPEAKERS</span>
            </h2>

            <p className="keynote-desc-text">
              Pioneering quantum architects and clean energy directors shaping the vision for Jordan 76.
            </p>

            <div className="keynote-progress-wrap">
              <div className="keynote-progress-track">
                <div
                  className="keynote-progress-fill"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
              <span className="keynote-progress-text">SCROLL TO EXPLORE</span>
            </div>
          </div>

          {/* CARD 1: Speaker 1 Image (UP) */}
          <div className="keynote-card keynote-card--image keynote-card--up">
            <img src={spk1.avatar} alt={spk1.name} className="keynote-card-img" />
            <div className="keynote-image-overlay" />
            <div className="keynote-image-footer">
              <h3 className="keynote-image-name">{spk1.name}</h3>
              <div className="keynote-image-role">{spk1.role}</div>
            </div>
          </div>

          {/* CARD 2: Speaker 1 Info (DOWN) */}
          <div className="keynote-card keynote-card--info keynote-card--down">
            <div className="keynote-info-header">
              <span className="keynote-pill">{spk1.track}</span>
              <span className="keynote-info-index">01 / 02</span>
            </div>
            <div>
              <h3 className="keynote-talk-title">{spk1.keynoteTitle}</h3>
              <p className="keynote-talk-bio">{spk1.bio}</p>
            </div>
            <div className="keynote-org-footer">
              {spk1.organization}
            </div>
          </div>

          {/* CARD 3: Speaker 2 Image (UP) */}
          <div className="keynote-card keynote-card--image keynote-card--up">
            <img src={spk2.avatar} alt={spk2.name} className="keynote-card-img" />
            <div className="keynote-image-overlay" />
            <div className="keynote-image-footer">
              <h3 className="keynote-image-name">{spk2.name}</h3>
              <div className="keynote-image-role">{spk2.role}</div>
            </div>
          </div>

          {/* CARD 4: Speaker 2 Info (DOWN) */}
          <div className="keynote-card keynote-card--info keynote-card--down">
            <div className="keynote-info-header">
              <span className="keynote-pill">{spk2.track}</span>
              <span className="keynote-info-index">02 / 02</span>
            </div>
            <div>
              <h3 className="keynote-talk-title">{spk2.keynoteTitle}</h3>
              <p className="keynote-talk-bio">{spk2.bio}</p>
            </div>
            <div className="keynote-org-footer">
              {spk2.organization}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakersSection;
