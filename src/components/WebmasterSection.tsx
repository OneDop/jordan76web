import React, { useEffect, useRef, useState } from 'react';
import { Code2, Globe, ArrowUpRight, Terminal } from 'lucide-react';
import nimrehImg from '../assets/webmasters/nimreh.png';
import sammarImg from '../assets/webmasters/sammar.jpg';
import './WebmasterSection.css';

const LinkedInIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

interface Webmaster {
  id: string;
  name: string;
  handle: string;
  role: string;
  linkedin: string;
  photo: string;
}

const WEBMASTERS: Webmaster[] = [
  {
    id: 'nimreh',
    name: 'Yousef Abu-Nimreh',
    handle: '@Abu-Nimreh',
    role: 'Lead Webmaster',
    linkedin: 'https://www.linkedin.com/in/yousef-abu-nimreh-04781232b/',
    photo: nimrehImg,
  },
  {
    id: 'sammar',
    name: 'Yousef Sammar',
    handle: '@sammar',
    role: 'Webmaster',
    linkedin: 'https://www.linkedin.com/in/yousef-sammar-7a6967321/',
    photo: sammarImg,
  },
];

const TiltCard: React.FC<{ person: Webmaster; index: number; visible: boolean }> = ({ person, index, visible }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, shine: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - py) * 14,
      ry: (px - 0.5) * 16,
      gx: px * 100,
      gy: py * 100,
      shine: 1,
    });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50, shine: 0 });

  return (
    <div
      className={`wm-tilt-zone ${visible ? 'wm-visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        ref={cardRef}
        className="wm-card"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${tilt.shine ? -6 : 0}px)`,
          ['--wm-gx' as string]: `${tilt.gx}%`,
          ['--wm-gy' as string]: `${tilt.gy}%`,
          ['--wm-op' as string]: tilt.shine,
        }}
      >
        <div className="wm-card-glow" />
        <div className="wm-card-shine" />
        <div className="wm-card-top">
          <div className="wm-avatar">
            <img src={person.photo} alt={person.name} className="wm-avatar-img" />
            <span className="wm-avatar-ring" />
            <span className="wm-status-dot" />
          </div>
          <div className="wm-id">
            <span className="wm-handle">{person.handle}</span>
            <span className="wm-role-badge"><Code2 size={11} /> {person.role}</span>
          </div>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="wm-corner-link"
            aria-label={`${person.name} on LinkedIn`}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <h3 className="wm-name">{person.name}</h3>

        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="wm-linkedin-btn"
        >
          <LinkedInIcon size={16} />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export const WebmasterSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="webmaster" className="wm-section">
      <div className="wm-bg">
        <div className="wm-grid-overlay" />
        <div className="wm-orb wm-orb-a" />
        <div className="wm-orb wm-orb-b" />
      </div>

      <div className="wm-inner">
        <div className={`wm-header ${visible ? 'wm-visible' : ''}`}>
          <div className="cyber-badge font-rajdhani">
            <Terminal size={14} /> SYS.ADMIN // WEBMASTER
          </div>
          <h2 className="wm-title">
            BUILT & MAINTAINED BY <span>WEBMASTERS</span>
          </h2>
          <p className="wm-subtitle">
            <Globe size={14} /> The engineers behind this portal — design, code & uptime.
          </p>
        </div>

        <div className="wm-cards">
          {WEBMASTERS.map((p, i) => (
            <TiltCard key={p.id} person={p} index={i} visible={visible} />
          ))}
        </div>

        <div className={`wm-footer ${visible ? 'wm-visible' : ''}`}>
          <span className="wm-footer-line" />
          <span className="wm-footer-text font-rajdhani">JORDAN 2076 // WEB OPS — v2.0.76 ONLINE</span>
          <span className="wm-footer-line" />
        </div>
      </div>
    </section>
  );
};

export default WebmasterSection;
