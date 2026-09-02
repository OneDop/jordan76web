import React, { useState, useEffect, useRef } from 'react';
import { Radio, ChevronDown } from 'lucide-react';

interface ChatMessageData {
  id: string;
  sender: string;
  timeAgo: string;
  align: 'left' | 'right';
  title: string;
  text: string;
}

const CHAT_MESSAGES: ChatMessageData[] = [
  { id: 'msg-vision', sender: 'VISION', timeAgo: 'From Foundations', align: 'left', title: 'OUR VISION', text: 'To inspire and enable a generation of builders who can use technology, innovation, and entrepreneurship to contribute to Jordan’s future.' },
  { id: 'msg-mission', sender: 'MISSION', timeAgo: 'To the Future', align: 'right', title: 'OUR MISSION', text: 'To connect young talent with practical challenges, technical knowledge, entrepreneurial thinking, industry expertise, and ecosystem opportunities through an integrated journey.' },
  { id: 'msg-theme', sender: 'THEME', timeAgo: '2076', align: 'left', title: 'FROM FOUNDATIONS TO THE FUTURE', text: 'The future is built on foundations created today: strong technical capabilities, modern engineering, innovative thinking, entrepreneurship, digital infrastructure, and collaboration.' },
];

export const SignalChatSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cumulative card appearance: each card fades in at its scroll threshold and STAYS visible in the frame
  const getCardStyle = (index: number) => {
    const thresholds = [
      { start: 0.05, full: 0.22 },
      { start: 0.30, full: 0.48 },
      { start: 0.58, full: 0.78 },
    ];

    const t = thresholds[index];
    const p = scrollProgress;

    if (p < t.start) {
      return {
        opacity: 0,
        transform: 'translateY(24px) scale(0.97)',
        pointerEvents: 'none' as const,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      };
    }

    if (p >= t.full) {
      return {
        opacity: 1,
        transform: 'translateY(0px) scale(1)',
        pointerEvents: 'auto' as const,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      };
    }

    const ratio = (p - t.start) / (t.full - t.start);
    return {
      opacity: ratio,
      transform: `translateY(${24 * (1 - ratio)}px) scale(${0.97 + 0.03 * ratio})`,
      pointerEvents: ratio > 0.2 ? ('auto' as const) : ('none' as const),
      transition: 'opacity 0.12s ease-out, transform 0.12s ease-out',
    };
  };

  return (
    <div
      ref={sectionRef}
      className="signal-chat-section"
      style={{
        position: 'relative',
        height: '240vh',
        backgroundColor: '#0A0A0A',
      }}
    >
      {/* Sticky Viewport Stage */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '2rem 1.5rem',
        }}
      >
        {/* Central Chat Container - Stacked Vertically */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '820px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            zIndex: 5,
          }}
        >
          {CHAT_MESSAGES.map((msg, index) => {
            const cardStyle = getCardStyle(index);
            const isLeft = msg.align === 'left';

            return (
              <div
                key={msg.id}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  alignSelf: isLeft ? 'flex-start' : 'flex-end',
                  ...cardStyle,
                }}
              >
                {/* Original Chat Bubble Container with Speech Tail */}
                <div
                  style={{
                    position: 'relative',
                    background: 'rgba(12, 18, 28, 0.95)',
                    border: '1px solid rgba(126, 243, 232, 0.28)',
                    borderRadius: isLeft ? '16px 16px 16px 2px' : '16px 16px 2px 16px',
                    padding: '1.1rem 1.5rem 1.2rem 1.5rem',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.8), 0 0 15px rgba(126, 243, 232, 0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Highly Visible Chat Tail */}
                  {isLeft ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      style={{
                        position: 'absolute',
                        bottom: '-14px',
                        left: '18px',
                        overflow: 'visible',
                        zIndex: 3,
                      }}
                    >
                      <polygon
                        points="0,0 18,0 0,18"
                        fill="rgba(12, 18, 28, 0.95)"
                        stroke="rgba(126, 243, 232, 0.35)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="0"
                        y1="0"
                        x2="18"
                        y2="0"
                        stroke="rgba(12, 18, 28, 0.95)"
                        strokeWidth="3"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      style={{
                        position: 'absolute',
                        bottom: '-14px',
                        right: '18px',
                        overflow: 'visible',
                        zIndex: 3,
                      }}
                    >
                      <polygon
                        points="0,0 18,0 18,18"
                        fill="rgba(12, 18, 28, 0.95)"
                        stroke="rgba(126, 243, 232, 0.35)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="0"
                        y1="0"
                        x2="18"
                        y2="0"
                        stroke="rgba(12, 18, 28, 0.95)"
                        strokeWidth="3"
                      />
                    </svg>
                  )}

                  {/* Header Row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Radio size={14} color="#7EF3E8" />
                      <span
                        style={{
                          fontFamily: 'var(--font-orbitron)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#7EF3E8',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {msg.sender}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'rgba(183, 185, 189, 0.6)',
                        fontFamily: 'var(--font-rajdhani)',
                        fontWeight: 600,
                      }}
                    >
                      {msg.timeAgo}
                    </span>
                  </div>

                  {/* Prominent Large Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#F5F7F8',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      margin: '0.3rem 0 0.5rem 0',
                      textShadow: '0 0 12px rgba(126, 243, 232, 0.25)',
                    }}
                  >
                    {msg.title}
                  </h3>

                  {/* Message Body Text */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: '#B7B9BD',
                      fontFamily: 'var(--font-body)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Prompt */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.3rem',
            opacity: scrollProgress > 0.9 ? 0.2 : 0.75,
            transition: 'opacity 0.3s ease',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.62rem',
              fontWeight: 600,
              color: '#B7B9BD',
              letterSpacing: '0.12em',
            }}
          >
            SCROLL TO DECODE SIGNALS
          </span>
          <ChevronDown
            size={14}
            color="#7EF3E8"
            style={{
              animation: 'bounce-subtle 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @media (max-width: 768px) {
          .signal-chat-section { height: auto; }
          .signal-chat-section > div { position: relative !important; height: auto !important; padding: 2.5rem 1rem !important; }
          .signal-chat-section > div > div { gap: 1rem !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .signal-chat-section { height: auto; }
          .signal-chat-section > div { position: relative !important; height: auto !important; }
        }
      `}</style>
    </div>
  );
};


