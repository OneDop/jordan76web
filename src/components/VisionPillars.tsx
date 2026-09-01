import React from 'react';
import { Radio } from 'lucide-react';

interface FloatingMessage {
  id: string;
  timeAgo: string;
  text: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay: string;
  blur?: string;
  scale?: number;
  opacity?: number;
}

const FLOATING_MESSAGES: FloatingMessage[] = [
  {
    id: 'msg-1',
    timeAgo: '3m ago',
    text: 'Future contact detected.',
    position: { top: '12%', left: '18%' },
    delay: '0s',
    scale: 0.95,
    opacity: 0.75,
  },
  {
    id: 'msg-2',
    timeAgo: '1m ago',
    text: 'Signal received.',
    position: { top: '18%', right: '15%' },
    delay: '1.5s',
    blur: '1px',
    scale: 0.85,
    opacity: 0.6,
  },
  {
    id: 'msg-3',
    timeAgo: '4m ago',
    text: 'Await further instructions.',
    position: { top: '38%', left: '8%' },
    delay: '2.5s',
    blur: '1.5px',
    scale: 0.8,
    opacity: 0.5,
  },
  {
    id: 'msg-4',
    timeAgo: '2m ago',
    text: 'Mission unavailable.',
    position: { top: '35%', right: '10%' },
    delay: '0.8s',
    scale: 0.9,
    opacity: 0.7,
  },
  {
    id: 'msg-5',
    timeAgo: '2m ago',
    text: 'Connection established.',
    position: { bottom: '28%', left: '12%' },
    delay: '3.2s',
    scale: 0.9,
    opacity: 0.65,
  },
  {
    id: 'msg-6',
    timeAgo: 'just now',
    text: 'Transmission incoming...',
    position: { bottom: '32%', right: '16%' },
    delay: '1.8s',
    blur: '0.5px',
    scale: 0.95,
    opacity: 0.8,
  },
  {
    id: 'msg-7',
    timeAgo: '3m ago',
    text: 'Future contact detected.',
    position: { bottom: '12%', left: '25%' },
    delay: '4s',
    blur: '1px',
    scale: 0.85,
    opacity: 0.6,
  },
  {
    id: 'msg-8',
    timeAgo: '5m ago',
    text: 'Await further instructions.',
    position: { bottom: '10%', right: '22%' },
    delay: '2.2s',
    scale: 0.9,
    opacity: 0.7,
  },
];

export const VisionPillars: React.FC = () => {
  return (
    <section
      id="vision"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '7rem 1.5rem',
      }}
    >
      {/* Dynamic Floating Background Messages */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {FLOATING_MESSAGES.map((msg) => (
          <div
            key={msg.id}
            style={{
              position: 'absolute',
              ...msg.position,
              background: 'rgba(12, 18, 28, 0.75)',
              border: '1px solid rgba(126, 243, 232, 0.18)',
              borderRadius: '10px',
              padding: '0.9rem 1.3rem',
              minWidth: '220px',
              maxWidth: '280px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(12px)',
              filter: msg.blur ? `blur(${msg.blur})` : 'none',
              transform: `scale(${msg.scale || 1})`,
              opacity: msg.opacity || 0.7,
              animation: `float-card 6s ease-in-out infinite alternate`,
              animationDelay: msg.delay,
            }}
          >
            {/* Message Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Radio size={14} color="#7EF3E8" />
                <span
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#B7B9BD',
                    letterSpacing: '0.08em',
                  }}
                >
                  UNKNOWN TRANSMISSION
                </span>
              </div>
              <span style={{ fontSize: '0.65rem', color: 'rgba(183, 185, 189, 0.6)', fontFamily: 'var(--font-rajdhani)' }}>
                {msg.timeAgo}
              </span>
            </div>

            {/* Message Body */}
            <div
              style={{
                fontSize: '0.88rem',
                color: '#F5F7F8',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.4,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Main Center Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Primary Headline with Exactly Matched Width Block Lines */}
        <h2
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontWeight: 900,
            lineHeight: 1.08,
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '1.8rem',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(2.1rem, 5.1vw, 4.1rem)',
              color: '#F5F7F8',
              letterSpacing: '0.025em',
              whiteSpace: 'nowrap',
              textShadow: '0 0 40px rgba(0, 0, 0, 0.9)',
            }}
          >
            DID YOU RECEIVE
          </div>
          <div
            style={{
              fontSize: 'clamp(2.87rem, 6.97vw, 5.6rem)',
              color: '#7EF3E8',
              letterSpacing: '0.025em',
              whiteSpace: 'nowrap',
              textShadow: '0 0 30px rgba(126, 243, 232, 0.7)',
            }}
          >
            THE SIGNAL?
          </div>
        </h2>

        {/* Secondary Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)',
            fontWeight: 700,
            color: '#F5F7F8',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.9,
            margin: 0,
          }}
        >
          NOW YOU ARE PART OF<br />
          <strong style={{ color: '#001B3A', WebkitTextStroke: '1px #7EF3E8', textShadow: '0 0 15px rgba(126, 243, 232, 0.4)' }}>PROJECT 2076.</strong>
        </p>
      </div>

      {/* Floating Keyframe CSS */}
      <style>{`
        @keyframes float-card {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-14px) scale(1.02); }
        }
      `}</style>
    </section>
  );
};
