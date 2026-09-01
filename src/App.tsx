import { useState } from 'react';
import { BootScreen } from './components/BootScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisionPillars } from './components/VisionPillars';
import { SignalChatSection } from './components/SignalChatSection';
import { HackathonSection } from './components/HackathonSection';
import { CongressTitleSection } from './components/CongressTitleSection';
import { KeynoteSpeakersSection } from './components/KeynoteSpeakersSection';
import { FlowingMenu } from './components/FlowingMenu';
import { HackathonModal } from './components/HackathonModal';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { CyberPass } from './components/CyberPass';
import { VenueMap } from './components/VenueMap';
import { FAQ } from './components/FAQ';
import { TeamCredits } from './components/TeamCredits';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  return (
    <div style={{ backgroundColor: 'var(--color-bg-dark)', minHeight: '100vh', position: 'relative' }}>
      {/* Background Cyber Grid overlay */}
      <div
        className="cyber-grid-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      {/* Main App Layout */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* Hero Section with Sticky Scroll-Driven 240 WebP Video Sequence */}
        <Hero />

        <VisionPillars />
        <SignalChatSection />
        <HackathonSection onOpenMission={() => setIsMissionModalOpen(true)} />
        <CongressTitleSection />
        <KeynoteSpeakersSection />
        <FlowingMenu />
        <Speakers />
        <Agenda />
        <CyberPass onOpenRegister={() => setIsRegisterOpen(true)} />
        <VenueMap />
        <FAQ />
        <TeamCredits />
        <Footer />
      </div>

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Hackathon Mission Details Modal */}
      <HackathonModal
        isOpen={isMissionModalOpen}
        onClose={() => setIsMissionModalOpen(false)}
        onRegister={() => setIsRegisterOpen(true)}
      />

      {/* Held over the site until the hero's scroll-video frames are in memory.
          The page renders behind it so layout and fonts settle meanwhile. */}
      {isBooting && <BootScreen onDone={() => setIsBooting(false)} />}
    </div>
  );
}

export default App;
