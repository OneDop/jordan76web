import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo05 from '../assets/JO76logo-05.png';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'AR' ? 'الرؤية' : 'VISION', href: '#vision' },
    { label: lang === 'AR' ? 'الهاكاثون' : 'HACKATHON', href: '#hackathon' },
    { label: lang === 'AR' ? 'المتحدثون' : 'SPEAKERS', href: '#keynote-speakers' },
    { label: lang === 'AR' ? 'البرنامج' : 'AGENDA', href: '#agenda' },
    { label: lang === 'AR' ? 'الموقع' : 'VENUE', href: '#venue' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(183, 185, 189, 0.12)',
      }}
    >
      <div
        style={{
          maxWidth: '1350px',
          margin: '0 auto',
          padding: '1.1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
          aria-label="Jordan 76 Home"
        >
          <img
            src={logo05}
            alt="Jordan 76"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </a>

        {/* Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#F5F7F8',
                textDecoration: 'none',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#7EF3E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#F5F7F8')}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#B7B9BD',
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ color: lang === 'EN' ? '#F5F7F8' : '#B7B9BD' }}>EN</span> / <span style={{ color: lang === 'AR' ? '#7EF3E8' : '#B7B9BD' }}>ع</span>
          </button>
        </nav>

        {/* Get a Pass Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenRegister}
            style={{
              background: '#7EF3E8',
              color: '#0A0A0A',
              border: 'none',
              borderRadius: '4px',
              padding: '0.65rem 1.4rem',
              fontFamily: 'var(--font-orbitron)',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(126, 243, 232, 0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#60e3d7';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#7EF3E8';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {lang === 'AR' ? 'احجز تذكرتك' : 'GET A PASS'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid #7EF3E8',
              color: '#7EF3E8',
              padding: '0.4rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(10, 10, 10, 0.98)',
            borderBottom: '1px solid #7EF3E8',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#F5F7F8',
                textDecoration: 'none',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.95rem',
                letterSpacing: '0.1em',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 868px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
