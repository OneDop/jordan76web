import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Send, Globe, Share2, MessageSquare, Code } from 'lucide-react';

export const Footer: React.FC<{ onOpenRegister?: () => void }> = ({ onOpenRegister }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => { e.preventDefault(); if (email) setSubscribed(true); };
  return (
    <footer style={{ background: 'linear-gradient(to top, rgba(0, 27, 58, 0.95), rgba(10, 10, 10, 0.98))', borderTop: '1px solid rgba(126, 243, 232, 0.3)', paddingTop: 'clamp(2.5rem, 6vw, 4rem)', paddingBottom: '2.5rem', color: '#B7B9BD', position: 'relative' }}>
      <div className="section-container" style={{ paddingTop: 0, paddingBottom: 0, marginBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#001B3A', border: '1px solid #7EF3E8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8' }}><Cpu size={20} /></div>
              <span style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 900, fontSize: '1.2rem', color: '#F5F7F8' }}>JORDAN <span style={{ color: '#7EF3E8' }}>2076</span></span>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '0.6rem', fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', letterSpacing: '0.08em', fontWeight: 700 }}>FROM FOUNDATIONS TO THE FUTURE</p>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#B7B9BD', marginBottom: '1rem' }}>A national technology and innovation initiative bringing together young builders, industry experts, innovators, companies and ecosystem partners to shape Jordan's future.</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(126,243,232,0.7)', fontFamily: 'var(--font-rajdhani)', marginBottom: '1.2rem' }}>IEEE Computer Society — University of Jordan Student Branch Chapter</p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {[{ icon: <Share2 size={18} /> }, { icon: <MessageSquare size={18} /> }, { icon: <Code size={18} /> }, { icon: <Globe size={18} /> }].map((s, idx) => (
                <a key={idx} href="#" style={{ width: '36px', height: '36px', borderRadius: '6px', background: 'rgba(0, 27, 58, 0.8)', border: '1px solid rgba(126, 243, 232, 0.3)', color: '#7EF3E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.95rem', color: '#7EF3E8', marginBottom: '1.2rem' }}>QUICK LINKS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
              <Link to="/about" style={{ color: '#B7B9BD', textDecoration: 'none' }}>About Jordan 2076</Link>
              <Link to="/hackathon" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Hackathon</Link>
              <Link to="/bootcamp" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Bootcamp</Link>
              <Link to="/congress" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Congress</Link>
              <Link to="/partners" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Partners</Link>
              <Link to="/faq" style={{ color: '#B7B9BD', textDecoration: 'none' }}>FAQ</Link>
              <Link to="/contact" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Contact</Link>
              {onOpenRegister && <button onClick={onOpenRegister} style={{ background: 'none', border: 'none', color: '#7EF3E8', textAlign: 'left', cursor: 'pointer', fontSize: '0.88rem', padding: 0, fontFamily: 'var(--font-orbitron)', fontWeight: 700, marginTop: '0.4rem' }}>→ Register Now</button>}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.95rem', color: '#7EF3E8', marginBottom: '1.2rem' }}>CONTACT & TRANSMISSION</h4>
            <p style={{ fontSize: '0.85rem', color: '#B7B9BD', marginBottom: '1rem' }}>Get Congress updates, speaker releases and hackathon announcements.</p>
            <div style={{ fontSize: '0.83rem', color: '#B7B9BD', marginBottom: '1rem', lineHeight: 1.7 }}>
              <div>info@jordan2076.jo</div>
              <div>Saturday, 10 October 2026 · University of Jordan Academy</div>
            </div>
            {subscribed ? (
              <div style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.85rem', padding: '0.8rem', background: 'rgba(0, 27, 58, 0.6)', border: '1px solid #7EF3E8', borderRadius: '6px' }}>✓ SUBSCRIBED</div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input type="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: '1 1 160px', minWidth: 0, background: 'rgba(0, 27, 58, 0.7)', border: '1px solid rgba(126, 243, 232, 0.4)', borderRadius: '6px', padding: '0.6rem 0.9rem', color: '#F5F7F8', fontSize: '0.85rem', outline: 'none' }} required />
                <button type="submit" className="btn-cyber-primary" style={{ padding: '0.6rem 1rem', flexShrink: 0 }}><Send size={16} /></button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(183, 185, 189, 0.15)', paddingTop: '1.5rem', paddingInline: '1rem', textAlign: 'center', fontSize: 'clamp(0.65rem, 1.6vw, 0.78rem)', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', letterSpacing: '0.06em', lineHeight: 1.6, overflowWrap: 'break-word' }}>
        © 2026 JORDAN 2076 — FROM FOUNDATIONS TO THE FUTURE · IEEE COMPUTER SOCIETY — UNIVERSITY OF JORDAN · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};
