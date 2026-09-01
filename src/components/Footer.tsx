import React, { useState } from 'react';
import { Cpu, Send, Globe, Share2, MessageSquare, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(to top, rgba(0, 27, 58, 0.95), rgba(10, 10, 10, 0.98))',
        borderTop: '1px solid rgba(126, 243, 232, 0.3)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        color: '#B7B9BD',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ padding: 0, marginBottom: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: '#001B3A',
                  border: '1px solid #7EF3E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#7EF3E8',
                }}
              >
                <Cpu size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 900, fontSize: '1.2rem', color: '#F5F7F8' }}>
                JORDAN <span style={{ color: '#7EF3E8' }}>2076</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#B7B9BD', marginBottom: '1.5rem' }}>
              The Centennial Sci-Fi & Future Tech Summit celebrating 150 years of innovation, quantum intelligence, and planetary engineering in Amman, Jordan.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {[
                { icon: <Share2 size={18} />, href: '#' },
                { icon: <MessageSquare size={18} />, href: '#' },
                { icon: <Code size={18} />, href: '#' },
                { icon: <Globe size={18} />, href: '#' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '6px',
                    background: 'rgba(0, 27, 58, 0.8)',
                    border: '1px solid rgba(126, 243, 232, 0.3)',
                    color: '#7EF3E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.95rem', color: '#7EF3E8', marginBottom: '1.2rem' }}>
              QUICK NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <a href="#vision" style={{ color: '#B7B9BD', textDecoration: 'none' }}>01. Vision & Pillars</a>
              <a href="#speakers" style={{ color: '#B7B9BD', textDecoration: 'none' }}>02. Keynote Speakers</a>
              <a href="#agenda" style={{ color: '#B7B9BD', textDecoration: 'none' }}>03. Event Schedule</a>
              <a href="#cyber-pass" style={{ color: '#B7B9BD', textDecoration: 'none' }}>04. Cyber-Pass Generator</a>
              <a href="#venue" style={{ color: '#B7B9BD', textDecoration: 'none' }}>05. Amman CyberDome Hub</a>
            </div>
          </div>

          {/* Column 3: Newsletter Telemetry */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.95rem', color: '#7EF3E8', marginBottom: '1.2rem' }}>
              NEURAL TRANSMISSION FEED
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#B7B9BD', marginBottom: '1rem' }}>
              Subscribe to receiving encrypted schedule updates and keynote releases directly.
            </p>
            {subscribed ? (
              <div style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.85rem', padding: '0.8rem', background: 'rgba(0, 27, 58, 0.6)', border: '1px solid #7EF3E8', borderRadius: '6px' }}>
                ✓ SUBSCRIBED TO 2076 TRANSMISSIONS
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter neural email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'rgba(0, 27, 58, 0.7)',
                    border: '1px solid rgba(126, 243, 232, 0.4)',
                    borderRadius: '6px',
                    padding: '0.6rem 0.9rem',
                    color: '#F5F7F8',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                  required
                />
                <button type="submit" className="btn-cyber-primary" style={{ padding: '0.6rem 1rem' }}>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(183, 185, 189, 0.15)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#B7B9BD',
          fontFamily: 'var(--font-rajdhani)',
          letterSpacing: '0.08em',
        }}
      >
        © 2076 JORDAN CENTENNIAL COMMITTEE • AMMAN CYBERDOME • ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};
