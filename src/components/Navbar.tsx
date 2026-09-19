import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo05 from '../assets/JO76logo-05.png';

export const Navbar: React.FC<{ onOpenRegister?: () => void }> = () => {
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
        background: scrolled
          ? 'linear-gradient(180deg, rgba(0,27,58,0.92) 0%, rgba(0,20,38,0.88) 100%)'
          : 'linear-gradient(180deg, rgba(0,27,58,0.55) 0%, rgba(0,20,38,0.22) 100%)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(126, 243, 232, 0.14)',
        boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.35)' : 'none',
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
            minHeight: '44px',
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
            background: 'linear-gradient(180deg, rgba(0,27,58,0.98) 0%, rgba(0,20,38,0.97) 100%)',
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
        @media (min-width: 1024px) {
          .desktop-nav { display: flex; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};