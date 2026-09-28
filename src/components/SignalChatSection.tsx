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

  // The reveal is driven by how far you have scrolled through a 240vh
  // section. On mobile that section collapses to its content height,
  // so `totalScrollable` goes negative, the handler below bails out,
  // and progress is stuck at 0 — which meant the cards sat at opacity
  // 0 and never appeared. Small screens get them already revealed.
  const [staticReveal, setStaticReveal] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px) and (prefers-reduced-motion: no-preference)');
    const sync = () => setStaticReveal(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

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

    if (staticReveal) {
      return {
        opacity: 1,
        transform: 'none',
        pointerEvents: 'auto' as const,
        transition: 'none',
      };
    }

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
        backgroundColor: 'transparent',
      }}
    >
      {/* Sticky Viewport Stage */}
      <div
        className="signal-stage"
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
          paddingTop: 'clamp(4.8rem, 8.5vh, 6.2rem)',
          paddingBottom: 'clamp(3.5rem, 6vh, 5rem)',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Central Chat Container - Stacked Vertically */}
        <div
          className="signal-chat-container"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '860px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(0.65rem, 1.3vh, 1.1rem)',
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
                  maxWidth: 'min(550px, 92%)',
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
                    borderRadius: isLeft ? '14px 14px 14px 2px' : '14px 14px 2px 14px',
                    padding: 'clamp(0.7rem, 1.2vh, 0.95rem) clamp(1.1rem, 1.8vw, 1.45rem)',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.8), 0 0 15px rgba(126, 243, 232, 0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Highly Visible Chat Tail */}
                  {isLeft ? (
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      style={{
                        position: 'absolute',
                        bottom: '-12px',
                        left: '16px',
                        overflow: 'visible',
                        zIndex: 3,
                      }}
                    >
                      <polygon
                        points="0,0 16,0 0,14"
                        fill="rgba(12, 18, 28, 0.95)"
                        stroke="rgba(126, 243, 232, 0.35)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="0"
                        y1="0"
                        x2="16"
                        y2="0"
                        stroke="rgba(12, 18, 28, 0.95)"
                        strokeWidth="3"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      style={{
                        position: 'absolute',
                        bottom: '-12px',
                        right: '16px',
                        overflow: 'visible',
                        zIndex: 3,
                      }}
                    >
                      <polygon
                        points="0,0 16,0 16,14"
                        fill="rgba(12, 18, 28, 0.95)"
                        stroke="rgba(126, 243, 232, 0.35)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="0"
                        y1="0"
                        x2="16"
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
                      marginBottom: '0.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Radio size={13} color="#7EF3E8" />
                      <span
                        style={{
                          fontFamily: 'var(--font-orbitron)',
                          fontSize: '0.72rem',
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
                        fontSize: '0.74rem',
                        color: 'rgba(183, 185, 189, 0.6)',
                        fontFamily: 'var(--font-rajdhani)',
                        fontWeight: 600,
                      }}
                    >
                      {msg.timeAgo}
                    </span>
                  </div>

                  {/* Prominent Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      fontSize: 'clamp(0.96rem, 1.1vw, 1.12rem)',
                      fontWeight: 800,
                      color: '#F5F7F8',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      margin: '0.15rem 0 0.35rem 0',
                      textShadow: '0 0 12px rgba(126, 243, 232, 0.25)',
                      lineHeight: 1.25,
                    }}
                  >
                    {msg.title}
                  </h3>

                  {/* Message Body Text */}
                  <p
                    style={{
                      fontSize: 'clamp(0.8rem, 0.9vw, 0.86rem)',
                      color: '#B7B9BD',
                      fontFamily: 'var(--font-orbitron)',
                      lineHeight: 1.45,
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

        {/* Scroll Prompt — only meaningful while the reveal is scroll-driven */}
        {!staticReveal && (
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(1rem, 2vh, 1.6rem)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              pointerEvents: 'none',
              opacity: scrollProgress > 0.82 ? Math.max(0, 1 - (scrollProgress - 0.82) / 0.12) * 0.75 : 0.75,
              transition: 'opacity 0.25s ease',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#B7B9BD',
                letterSpacing: '0.12em',
              }}
            >
              SCROLL TO DECODE SIGNALS
            </span>
            <ChevronDown
              size={13}
              color="#7EF3E8"
              style={{
                animation: 'bounce-subtle 1.8s ease-in-out infinite',
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @media (max-height: 720px) and (min-width: 769px) {
          .signal-chat-container {
            gap: 0.5rem !important;
          }
          .signal-stage {
            padding-top: 4.5rem !important;
            padding-bottom: 2.6rem !important;
          }
        }
        @media (max-width: 768px) {
          /* height is set inline as 240vh for the scroll-driven
             reveal, so this needs !important or a phone gets 2.5
             screens of empty scroll. */
          .signal-chat-section { height: auto !important; }
          .signal-chat-section > div { position: relative !important; height: auto !important; padding: 2.5rem 1rem !important; }
          .signal-chat-section > div > div { gap: 1rem !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .signal-chat-section { height: auto !important; }
          .signal-chat-section > div { position: relative !important; height: auto !important; }
        }
      `}</style>
    </div>
  );
};


