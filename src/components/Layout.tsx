import { Outlet, useLocation } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
// import { HackathonModal } from './HackathonModal';
import { REGISTRATION_URL } from '../data/registration';
import { useSeo } from '../lib/seo';

export const Layout: React.FC = () => {
  const location = useLocation();
  useSeo();

  const openRegister = useCallback(() => {
    window.open(REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ backgroundColor: 'var(--color-bg-dark)', minHeight: '100vh', position: 'relative' }}>
      <div className="cyber-grid-overlay" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.4 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onOpenRegister={openRegister} />
        <main style={{ paddingTop: 'clamp(64px, 12vw, 72px)', minHeight: '60vh' }}>
          <Outlet context={{ openRegister, openMission: () => {} }} />
        </main>
        <Footer onOpenRegister={openRegister} />
      </div>
      {/* <HackathonModal isOpen={isMissionModalOpen} onClose={() => setIsMissionModalOpen(false)} onRegister={openRegister} /> */}
    </div>
  );
};
