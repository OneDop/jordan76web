import { Link } from 'react-router-dom';
// import { Send } from 'lucide-react';
import logo05 from '../assets/JO76logo-03.svg';

const socialIconStyle: React.CSSProperties = { width: '44px', height: '44px', borderRadius: '6px', background: 'rgba(0, 27, 58, 0.8)', border: '1px solid rgba(126, 243, 232, 0.3)', color: '#7EF3E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 };

export const Footer: React.FC<{ onOpenRegister?: () => void }> = ({ onOpenRegister }) => {
  // const [email, setEmail] = useState('');
  // const [subscribed, setSubscribed] = useState(false);
  // const handleSubscribe = (e: React.FormEvent) => { e.preventDefault(); if (email) setSubscribed(true); };
  return (
    <>
    <style>{`
      /* 23px rows are not a touch target. Padding gets each link to
         ~44px without spreading the column out. */
      .footer-links > a,
      .footer-links > button {
        padding: 0.75rem 0;
        line-height: 1.35;
      }
      .footer-quick-links { justify-self: center; width: fit-content; max-width: 100%; }
      @media (max-width: 830px) {
        .footer-quick-links { justify-self: start; width: auto; }
        /* On a phone the credit line wraps mid-phrase, so the
           separators become line breaks instead. */
        .footer-credit-break { display: block; height: 0; overflow: hidden; }
      }
    `}</style>
    <footer style={{ background: 'linear-gradient(to top, rgba(0, 27, 58, 0.95), rgba(10, 10, 10, 0.98))', borderTop: '1px solid rgba(126, 243, 232, 0.3)', paddingTop: 'clamp(2.5rem, 6vw, 4rem)', paddingBottom: '2.5rem', color: '#B7B9BD', position: 'relative' }}>
      <div className="section-container" style={{ paddingTop: 0, paddingBottom: 0, marginBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', minHeight: '48px' }}>
              <img src={logo05} alt="Jordan 2076 logo" style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 900, fontSize: '1.2rem', color: '#F5F7F8' }}>JORDAN <span style={{ color: '#7EF3E8' }}>2076</span></span>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '0.6rem', fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', letterSpacing: '0.08em', fontWeight: 700 }}>FROM FOUNDATIONS TO THE FUTURE</p>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#B7B9BD', marginBottom: '1rem' }}>A national technology and innovation initiative bringing together young builders, industry experts, innovators, companies and ecosystem partners to shape Jordan's future.</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(126,243,232,0.7)', fontFamily: 'var(--font-rajdhani)', marginBottom: '1.2rem' }}>IEEE Computer Society — University of Jordan Student Branch Chapter</p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a href="https://www.instagram.com/jordan__2076/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialIconStyle}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
              <a href="https://www.linkedin.com/company/jordan-2076/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialIconStyle}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
            </div>
          </div>
          <div className="footer-quick-links">
            <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.95rem', color: '#7EF3E8', margin: 0, marginBottom: '1rem', minHeight: '48px', display: 'flex', alignItems: 'center' }}>QUICK LINKS</h4>
            <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', fontSize: '0.88rem' }}>
              <Link to="/about" style={{ color: '#B7B9BD', textDecoration: 'none' }}>About Jordan 2076</Link>
              <Link to="/hackathon" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Hackathon</Link>
              <Link to="/bootcamp" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Bootcamp</Link>
              <Link to="/congress" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Congress</Link>
              <Link to="/partners" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Partners</Link>
              <Link to="/faq" style={{ color: '#B7B9BD', textDecoration: 'none' }}>FAQ</Link>
              <Link to="/contact" style={{ color: '#B7B9BD', textDecoration: 'none' }}>Contact</Link>
              {onOpenRegister && <button onClick={onOpenRegister} style={{ background: 'none', border: 'none', color: '#7EF3E8', textAlign: 'left', cursor: 'pointer', fontSize: '0.88rem', fontFamily: 'var(--font-orbitron)', fontWeight: 700 }}>Register Now</button>}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.95rem', color: '#7EF3E8', margin: 0, marginBottom: '1rem', minHeight: '48px', display: 'flex', alignItems: 'center' }}>CONTACT & TRANSMISSION</h4>
            <p style={{ fontSize: '0.85rem', color: '#B7B9BD', marginBottom: '1rem' }}>Get Congress updates, speaker releases and hackathon announcements.</p>
            <div style={{ fontSize: '0.83rem', color: '#B7B9BD', marginBottom: '1rem', lineHeight: 1.7 }}>
              <div>Saturday, 10 October 2026 · University of Jordan Academy</div>
            </div>
            {/* {subscribed ? (
              <div style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.85rem', padding: '0.8rem', background: 'rgba(0, 27, 58, 0.6)', border: '1px solid #7EF3E8', borderRadius: '6px' }}>✓ SUBSCRIBED</div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input type="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: '1 1 160px', minWidth: 0, background: 'rgba(0, 27, 58, 0.7)', border: '1px solid rgba(126, 243, 232, 0.4)', borderRadius: '6px', padding: '0.6rem 0.9rem', color: '#F5F7F8', fontSize: '0.85rem', outline: 'none', minHeight: '44px' }} required />
                <button type="submit" className="btn-cyber-primary" style={{ padding: '0.6rem 1rem', flexShrink: 0, minHeight: '44px', minWidth: '44px' }} aria-label="Subscribe"><Send size={16} /></button>
              </form>
            )} */}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(183, 185, 189, 0.15)', paddingTop: '1.5rem', paddingInline: '1rem', textAlign: 'center', fontSize: 'clamp(0.75rem, 1.6vw, 0.82rem)', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', letterSpacing: '0.06em', lineHeight: 1.6, overflowWrap: 'break-word' }}>
        © 2026 JORDAN 2076 — FROM FOUNDATIONS TO THE FUTURE
        <span className="footer-credit-break"> · </span>
        IEEE COMPUTER SOCIETY — UNIVERSITY OF JORDAN
        <span className="footer-credit-break"> · </span>
        ALL RIGHTS RESERVED
      </div>
    </footer>
    </>
  );
};
