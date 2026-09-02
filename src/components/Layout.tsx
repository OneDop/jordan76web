import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { RegistrationModal } from './RegistrationModal';
import { HackathonModal } from './HackathonModal';

export const Layout: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ backgroundColor: 'var(--color-bg-dark)', minHeight: '100vh', position: 'relative' }}>
      <div className="cyber-grid-overlay" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.4 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />
        <main style={{ paddingTop: 'clamp(64px, 12vw, 72px)', minHeight: '60vh' }}>
          <Outlet context={{ openRegister: () => setIsRegisterOpen(true), openMission: () => setIsMissionModalOpen(true) }} />
        </main>
        <Footer onOpenRegister={() => setIsRegisterOpen(true)} />
      </div>
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      <HackathonModal isOpen={isMissionModalOpen} onClose={() => setIsMissionModalOpen(false)} onRegister={() => setIsRegisterOpen(true)} />
    </div>
  );
};
