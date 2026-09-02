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
          maxWidth: '1150px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
            marginBottom: '4rem',
          }}
        >
          Four Cities. Four Challenges. One Future. Build software-based solutions across education, healthcare, tourism & transport.
        </p>

        {/* Numeric Track Cards Row (Reference Design Layout) */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 2.5rem)',
            flexWrap: 'wrap',
            marginBottom: 'clamp(2rem, 5vw, 4.5rem)',
          }}
        >
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
                  alignItems: 'center',
                  cursor: 'pointer',
                  paddingLeft: 'clamp(0.5rem, 2vw, 3.5rem)',
                }}
              >
                {/* Giant Stylized Background Number overlapping poster card */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: 'clamp(4rem, 11vw, 9.5rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: isHovered ? 'rgba(126, 243, 232, 0.15)' : 'transparent',
                    WebkitTextStroke: isHovered ? '2.5px #7EF3E8' : '2px rgba(126, 243, 232, 0.4)',
                    textShadow: isHovered ? '0 0 30px rgba(126, 243, 232, 0.6)' : 'none',
                    zIndex: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {item.num}
                </div>

                {/* Vertical Poster Card */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: 'min(88vw, clamp(230px, 22vw, 280px))',
                    height: 'clamp(330px, 32vw, 400px)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: 'rgba(12, 18, 28, 0.9)',
                    border: isHovered
                      ? '2px solid #7EF3E8'
                      : '1px solid rgba(126, 243, 232, 0.22)',
                    boxShadow: isHovered
                      ? '0 20px 45px rgba(126, 243, 232, 0.35), 0 0 25px rgba(126, 243, 232, 0.2)'
                      : '0 10px 30px rgba(0, 0, 0, 0.8)',
                    transform: isHovered
                      ? 'translateY(-12px) scale(1.04)'
                      : 'translateY(0) scale(1)',
                    opacity: hoveredIndex !== null && !isHovered ? 0.78 : 1,
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
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
                      transition: 'all 0.35s ease',
                    }}
                  />

                  {/* Dark Vignette & Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `
                        linear-gradient(to top, rgba(10, 15, 25, 0.98) 0%, rgba(10, 15, 25, 0.6) 45%, transparent 100%),
                        linear-gradient(to bottom, rgba(10, 15, 25, 0.3) 0%, transparent 40%)
                      `,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top Track Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: 3,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'rgba(10, 15, 25, 0.75)',
                        border: '1px solid rgba(126, 243, 232, 0.25)',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {item.icon}
                      <span
                        style={{
                          fontFamily: 'var(--font-orbitron)',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: '#7EF3E8',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {item.city}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Overlay */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 3,
                      padding: '1.25rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-rajdhani)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'rgba(126, 243, 232, 0.85)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.subTrack}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'var(--font-orbitron)',
                        fontSize: '1.05rem',
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
                        fontSize: '0.82rem',
                        color: '#B7B9BD',
                        fontFamily: 'var(--font-body)',
                        lineHeight: 1.45,
                        margin: '0.2rem 0 0 0',
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
