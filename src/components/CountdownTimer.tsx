import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 18342,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-10T09:30:00+03:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: 'clamp(0.5rem, 2vw, 1rem)',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '2rem 0',
      }}
    >
      {timeBlocks.map((block, i) => (
        <div
          key={block.label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(0, 27, 58, 0.8), rgba(10, 10, 10, 0.9))',
              border: '1px solid rgba(126, 243, 232, 0.4)',
              boxShadow: '0 0 20px rgba(126, 243, 232, 0.2), inset 0 0 10px rgba(0, 27, 58, 0.8)',
              borderRadius: '10px',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(0.85rem, 2vw, 1.4rem)',
              minWidth: 'clamp(72px, 18vw, 100px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                fontWeight: 800,
                color: '#7EF3E8',
                lineHeight: 1,
                textShadow: '0 0 12px rgba(126, 243, 232, 0.5)',
              }}
            >
              {String(block.value).padStart(2, '0')}
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 700,
                color: '#B7B9BD',
                letterSpacing: '0.15em',
                marginTop: '0.4rem',
              }}
            >
              {block.label}
            </div>
          </div>
          {i < timeBlocks.length - 1 && (
            <span
              className="countdown-colon"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                color: '#7EF3E8',
                opacity: 0.6,
                marginBottom: '0.5rem',
              }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
