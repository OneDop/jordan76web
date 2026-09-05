import React, { useState } from 'react';
import { Radio, ArrowRight, Cpu, Activity, Globe, Truck } from 'lucide-react';
import ammanImg from '../assets/hackathon_amman.png';
import irbidImg from '../assets/hackathon_irbid.png';
import petraImg from '../assets/hackathon_petra.png';
import aquaImg from '../assets/hackathon_amman.png';

interface TrackData {
  id: string;
  num: string;
  city: string;
  track: string;
  subTrack: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}

const HACKATHON_TRACKS: TrackData[] = [
  { id: 'track-amman', num: '1', city: 'AMMAN 2076', track: 'EDUCATION SYSTEMS', subTrack: 'Innovation in Education', desc: 'Reimagine how people learn, access education and engage with learning systems.', image: ammanImg, icon: <Cpu size={18} color="#7EF3E8" /> },
  { id: 'track-irbid', num: '2', city: 'IRBID 2076', track: 'HEALTHCARE SYSTEMS', subTrack: 'Innovation in Healthcare', desc: 'Improve healthcare access, patient experiences, processes and outcomes.', image: irbidImg, icon: <Activity size={18} color="#7EF3E8" /> },
  { id: 'track-petra', num: '3', city: 'PETRA 2076', track: 'TOURISM & CULTURE', subTrack: 'Heritage & Visitor Journeys', desc: 'Strengthen tourism, cultural experiences and heritage engagement.', image: petraImg, icon: <Globe size={18} color="#7EF3E8" /> },
  { id: 'track-aqaba', num: '4', city: 'AQABA 2076', track: 'TRANSPORTATION', subTrack: 'Powered by Petra Ride', desc: 'Safer, smarter and more effective transportation systems.', image: aquaImg, icon: <Truck size={18} color="#7EF3E8" /> },
];

interface HackathonSectionProps {
  onOpenMission: () => void;
}

export const HackathonSection: React.FC<HackathonSectionProps> = ({ onOpenMission }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default center card focused

  return (
    <section
      id="hackathon"
      style={{
        position: 'relative',
        backgroundColor: '#0A0A0A',
        padding: 'clamp(3rem, 8vw, 7rem) 1rem clamp(3rem, 8vw, 8rem)',
        overflow: 'hidden',
      }}
    >
      {/* Background Cyber Grid Accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(126, 243, 232, 0.05) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1380px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1rem, 2.5vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <style>{`
          .netflix-track-row {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: clamp(0.5rem, 1.8vw, 1.8rem);
            margin-bottom: clamp(2.5rem, 5vw, 4.5rem);
            flex-wrap: nowrap;
          }
          @media (max-width: 960px) {
            .netflix-track-row {
              flex-wrap: wrap !important;
              gap: 2.5rem 1.5rem !important;
            }
          }
        `}</style>

        {/* Sub-Header Phrase */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(126, 243, 232, 0.08)',
            border: '1px solid rgba(126, 243, 232, 0.22)',
            borderRadius: '20px',
            padding: '0.4rem 1.1rem',
            marginBottom: '1rem',
          }}
        >
          <Radio size={14} color="#7EF3E8" className="animate-pulse" />
          <span
            style={{
              fontFamily: 'var(--font-rajdhani)',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#7EF3E8',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            YOUR NEXT MISSION HAS ARRIVED
          </span>
        </div>

        {/* Primary Title */}
        <h2
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            color: '#F5F7F8',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '0.8rem',
            textShadow: '0 0 30px rgba(0, 0, 0, 0.9)',
          }}
        >
          JORDAN 2076 <span style={{ color: '#7EF3E8' }}>HACKATHON</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1rem',
            color: '#B7B9BD',
            fontFamily: 'var(--font-body)',
            textAlign: 'center',
            maxWidth: '640px',
            lineHeight: 1.6,
            marginBottom: '3.5rem',
          }}
        >
          Four Cities. Four Challenges. One Future. Build software-based solutions across education, healthcare, tourism & transport.
        </p>

        {/* Numeric Track Cards: Exact Netflix/HBO Reference Layout (All 4 in 1 Line) */}
        <div className="netflix-track-row">
          {HACKATHON_TRACKS.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => { setHoveredIndex(index); onOpenMission(); }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onOpenMission(); }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  cursor: 'pointer',
                  paddingLeft: 'clamp(36px, 3.8vw, 64px)',
                  flexShrink: 0,
                }}
              >
                {/* Giant Stylized Ranking Number (Netflix/HBO Style) */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 'clamp(0.4rem, 1.2vw, 1.2rem)',
                    fontFamily: '"Montserrat", "Arial Black", "Impact", "Helvetica Neue", sans-serif',
                    fontSize: 'clamp(6rem, 8.5vw, 10rem)',
                    fontWeight: 900,
                    lineHeight: 0.8,
                    letterSpacing: '-0.06em',
                    color: isHovered ? '#7EF3E8' : 'transparent',
                    WebkitTextStroke: isHovered ? 'none' : '3px #7EF3E8',
                    textShadow: isHovered
                      ? '0 0 35px rgba(126, 243, 232, 0.85), 0 0 15px #7EF3E8'
                      : '0 0 15px rgba(126, 243, 232, 0.3)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {item.num}
                </div>

                {/* Vertical Poster Card Overlapping the Number */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: 'clamp(165px, 16vw, 235px)',
                    height: 'clamp(265px, 25vw, 365px)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#0B0F19',
                    border: isHovered
                      ? '2px solid #7EF3E8'
                      : '1px solid rgba(126, 243, 232, 0.22)',
                    boxShadow: isHovered
                      ? '0 25px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(126, 243, 232, 0.45)'
                      : '0 10px 25px rgba(0, 0, 0, 0.75)',
                    transform: isHovered
                      ? 'translateY(-12px) scale(1.03)'
                      : 'translateY(0) scale(1)',
                    opacity: hoveredIndex !== null && !isHovered ? 0.82 : 1,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  {/* Poster Image */}
                  <img
                    src={item.image}
                    alt={`${item.city} - ${item.track}`}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: isHovered
                        ? 'brightness(1.05) contrast(1.05)'
                        : 'brightness(0.85) contrast(1)',
                      transition: 'all 0.3s ease',
                    }}
                  />

                  {/* Dark Vignette & Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `
                        linear-gradient(to top, rgba(10, 15, 25, 0.98) 0%, rgba(10, 15, 25, 0.6) 45%, transparent 100%),
                        linear-gradient(to bottom, rgba(10, 15, 25, 0.4) 0%, transparent 40%)
                      `,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top City Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(10, 15, 25, 0.82)',
                      border: '1px solid rgba(126, 243, 232, 0.28)',
                      padding: '0.28rem 0.55rem',
                      borderRadius: '6px',
                      backdropFilter: 'blur(8px)',
                      zIndex: 3,
                    }}
                  >
                    {item.icon}
                    <span
                      style={{
                        fontFamily: 'var(--font-orbitron)',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        color: '#7EF3E8',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {item.city}
                    </span>
                  </div>

                  {/* Card Content Overlay */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 3,
                      padding: '1.1rem 1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-rajdhani)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'rgba(126, 243, 232, 0.9)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.subTrack}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'var(--font-orbitron)',
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: '#F5F7F8',
                        lineHeight: 1.25,
                        textTransform: 'uppercase',
                        margin: 0,
                      }}
                    >
                      {item.track}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: '#94A3B8',
                        fontFamily: 'var(--font-body)',
                        lineHeight: 1.45,
                        margin: '0.15rem 0 0 0',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button: START YOUR MISSION */}
        <button
          onClick={onOpenMission}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: '#7EF3E8',
            color: '#001B3A',
            border: 'none',
            borderRadius: '12px',
            padding: '1.1rem 2.5rem',
            fontFamily: 'var(--font-orbitron)',
            fontSize: '1rem',
            fontWeight: 900,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(126, 243, 232, 0.45)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={(e) => {
            if (window.matchMedia('(hover: hover)').matches) {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 0 45px rgba(126, 243, 232, 0.7)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(126, 243, 232, 0.45)';
          }}
        >
          <span>Explore Hackathon</span>
          <ArrowRight size={20} strokeWidth={2.5} color="#001B3A" />
        </button>
      </div>
    </section>
  );
};
