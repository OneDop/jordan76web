import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface JourneyCardProps {
  to: string;
  step: string;
  action: string;
  name: string;
  description: string;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ to, step, action, name, description }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      ref={cardRef}
      to={to}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        background: 'rgba(14, 16, 22, 0.6)',
        border: '1px solid ' + (isHovered ? 'rgba(126, 243, 232, 0.3)' : 'rgba(255, 255, 255, 0.07)'),
        backdropFilter: 'blur(12px)',
        minHeight: '280px',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {/* Subtle cursor spotlight - very soft and clean */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(126, 243, 232, 0.08), transparent 70%)`,
        }}
      />

      {/* Top: Step Number + Action */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '1.25rem', fontWeight: 700, color: isHovered ? '#7EF3E8' : '#64748B', transition: 'color 0.2s ease' }}>
            {step}
          </span>
          <span style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#7EF3E8', textTransform: 'uppercase' }}>
            {name}
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.8rem', letterSpacing: '0.02em' }}>
          {action}
        </h3>

        <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>

      {/* Bottom: Minimal interactive explore indicator */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.2rem' }}>
        <span style={{ color: isHovered ? '#F5F7F8' : '#64748B', fontSize: '0.82rem', fontFamily: 'var(--font-orbitron)', fontWeight: 600, transition: 'color 0.2s ease' }}>
          Explore Phase
        </span>
        <ArrowUpRight
          size={16}
          color={isHovered ? '#7EF3E8' : '#64748B'}
          style={{
            transition: 'transform 0.2s ease, color 0.2s ease',
            transform: isHovered ? 'translate(2px, -2px)' : 'none',
          }}
        />
      </div>
    </Link>
  );
};

export const JourneySection: React.FC = () => {
  const PHASES = [
    {
      step: '01',
      action: 'Build',
      name: 'Hackathon',
      to: '/hackathon',
      description: 'Four sector challenges across Jordan. Teams engineer functional software solutions with industry mentors.',
    },
    {
      step: '02',
      action: 'Validate',
      name: 'Bootcamp',
      to: '/bootcamp',
      description: 'A 4-day intensive refining market demand, customer discovery, unit economics, and investor narrative.',
    },
    {
      step: '03',
      action: 'Connect',
      name: 'Congress',
      to: '/congress',
      description: 'The flagship stage uniting 350+ builders and leaders for keynotes, future debates, and live finals.',
    },
  ];

  return (
    <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '6rem 1.5rem 5rem' }}>
      {/* Editorial Header - Clean, Bold, Minimal */}
      <div style={{ marginBottom: '3.5rem', maxWidth: '720px' }}>
        <span style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          The Journey
        </span>
        <h2 style={{ fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: '#F5F7F8', lineHeight: 1.1, margin: '0.8rem 0 1rem', textTransform: 'uppercase' }}>
          Build. Validate. Connect.
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
          An integrated progression taking ideas from initial challenge prototype to validated venture on the national stage.
        </p>
      </div>

      {/* Clean 3-Card Grid: Spacious, no busy micro-boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.75rem' }}>
        {PHASES.map((p) => (
          <JourneyCard key={p.step} {...p} />
        ))}
      </div>
    </section>
  );
};
