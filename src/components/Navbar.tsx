import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo05 from '../assets/JO76logo-05.png';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT', to: '/about' },
    { label: 'HACKATHON', to: '/hackathon' },
    { label: 'BOOTCAMP', to: '/bootcamp' },
    { label: 'CONGRESS', to: '/congress' },
    { label: 'PARTNERS', to: '/partners' },
    { label: 'FAQ', to: '/faq' },
    { label: 'CONTACT', to: '/contact' },
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
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(183, 185, 189, 0.12)',
      }}
    >
      <div
        style={{
          maxWidth: '1350px',
          margin: '0 auto',
          padding: '0.85rem clamp(0.85rem, 4vw, 2rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          minWidth: 0,
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
            minWidth: 0,
          }}
          aria-label="Jordan 76 Home"
        >
          <img
            src={logo05}
            alt="Jordan 76"
            style={{
              height: 'clamp(32px, 8vw, 42px)',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              maxWidth: '140px',
            }}
          />
        </Link>

        <nav
          style={{ alignItems: 'center', gap: 'clamp(1rem, 1.8vw, 2.2rem)' }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                color: isActive ? '#7EF3E8' : '#F5F7F8',
                textDecoration: 'none',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.07em',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
          <button
            onClick={onOpenRegister}
            className="navbar-cta"
            style={{
              background: '#7EF3E8',
              color: '#0A0A0A',
              border: 'none',
              borderRadius: '4px',
              padding: '0.6rem 1.1rem',
              fontFamily: 'var(--font-orbitron)',
              fontWeight: 800,
              fontSize: 'clamp(0.65rem, 1.6vw, 0.78rem)',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(126, 243, 232, 0.35)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              minHeight: '40px',
            }}
          >
            <span className="navbar-cta-full">REGISTER NOW</span>
            <span className="navbar-cta-short">REGISTER</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid #7EF3E8',
              color: '#7EF3E8',
              padding: '0.4rem',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(10, 10, 10, 0.98)',
            borderTop: '1px solid rgba(126,243,232,0.15)',
            borderBottom: '1px solid #7EF3E8',
            padding: '1.25rem clamp(1rem, 4vw, 2rem) 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            maxHeight: 'calc(100dvh - 64px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#7EF3E8' : '#F5F7F8',
                textDecoration: 'none',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.92rem',
                letterSpacing: '0.08em',
                fontWeight: 700,
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'block',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: none; }
        .navbar-cta-short { display: none; }
        .navbar-cta-full { display: inline; }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 380px) {
          .navbar-cta-full { display: none; }
          .navbar-cta-short { display: inline; }
        }
        @media (max-width: 360px) {
          .navbar-cta { padding: 0.55rem 0.75rem !important; }
        }
      `}</style>
    </header>
  );
};