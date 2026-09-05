import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onOpenRegister?: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 34,
    hours: 18,
    minutes: 33,
    seconds: 27,
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
    <div style={{ width: '100%', textAlign: 'center' }}>
      {/* Clean Tabular Countdown */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 'clamp(1.2rem, 4.5vw, 3.8rem)',
          flexWrap: 'wrap',
          marginBottom: '1.75rem',
        }}
      >
        {timeBlocks.map((block, i) => (
          <React.Fragment key={block.label}>
            <div style={{ textAlign: 'center', minWidth: 'clamp(75px, 13vw, 130px)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: 'clamp(3.4rem, 7vw, 5.5rem)',
                  fontWeight: 900,
                  color: '#F5F7F8',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {String(block.value).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.92rem)',
                  fontWeight: 700,
                  color: '#7EF3E8',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginTop: '0.75rem',
                }}
              >
                {block.label}
              </div>
            </div>

            {i < timeBlocks.length - 1 && (
              <div
                style={{
                  width: '1px',
                  height: 'clamp(44px, 5.5vw, 70px)',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04))',
                  alignSelf: 'flex-start',
                  marginTop: 'clamp(0.4rem, 0.8vw, 0.75rem)',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Date & Location in Clean Typography Below the Timer */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
          color: '#94A3B8',
          letterSpacing: '0.04em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ color: '#F5F7F8', fontWeight: 600 }}>Saturday, 10 October 2026</span>
        <span style={{ opacity: 0.35 }}>•</span>
        <span>University of Jordan Academy, Amman</span>
      </div>
    </div>
  );
};
