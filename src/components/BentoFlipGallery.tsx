import React, { useState, useEffect, useRef } from 'react';
import './BentoFlipGallery.css';

interface BentoTileData {
  id: string;
  title: string;
  image: string;
  isCenter?: boolean;
}

const NINE_TILES_DATA: BentoTileData[] = [
  // ROW 1
  {
    id: 'tile-1',
    title: 'WORKSHOPS',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tile-2',
    title: 'HACKATHON',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tile-3',
    title: 'KEYNOTE SPEAKERS',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
  },
  // ROW 2
  {
    id: 'tile-4',
    title: 'PANEL DISCUSSION',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tile-center',
    title: 'PROJECT 2076',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
    isCenter: true,
  },
  {
    id: 'tile-5',
    title: 'BOOTCAMP',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  // ROW 3
  {
    id: 'tile-6',
    title: 'CONGRESS DAY',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tile-7',
    title: 'INTERACTIVE MISSIONS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tile-8',
    title: 'CHANGING THE FUTURE',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
];

export const BentoFlipGallery: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      const rawProgress = -rect.top / totalScrollable;
      const currentProgress = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic grid track sizing driven by scroll progress
  const sideColFr = Math.max(1.15 * (1 - progress * 0.96), 0.03);
  const centerColFr = 1.7 + progress * 7.5;

  const topRowFr = Math.max(1.0 * (1 - progress * 0.96), 0.03);
  const centerRowFr = 2.4 + progress * 8.5;
  const botRowFr = Math.max(1.0 * (1 - progress * 0.96), 0.03);

  const surroundingOpacity = Math.max(1 - progress * 1.4, 0.12);

  return (
    <div ref={wrapperRef} className="framer-bento-scroll-wrapper">
      <div className="framer-bento-sticky-stage">
        <div
          className="framer-bento-grid-dynamic"
          style={{
            gridTemplateColumns: `${sideColFr}fr ${centerColFr}fr ${sideColFr}fr`,
            gridTemplateRows: `${topRowFr}fr ${centerRowFr}fr ${botRowFr}fr`,
          }}
        >
          {NINE_TILES_DATA.map((tile) => {
            const isCenter = tile.isCenter;

            return (
              <div
                key={tile.id}
                className={`framer-tile ${isCenter ? 'center-hero-tile' : 'surround-tile'}`}
                style={!isCenter ? { opacity: surroundingOpacity } : {}}
              >
                <img src={tile.image} alt={tile.title} className="bento-tile-photo" />
                <div className={`tile-overlay-gradient ${isCenter ? 'center-gradient' : ''}`} />

                {/* Title Overlay on Every Picture */}
                <div className={`tile-title-box ${isCenter ? 'center-title-box' : ''}`}>
                  <h3 className="tile-title-text">{tile.title}</h3>
                  {isCenter && (
                    <span
                      className="tile-scroll-subtext"
                      style={{ opacity: Math.max(1 - progress * 3.5, 0) }}
                    >
                      Scroll
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
