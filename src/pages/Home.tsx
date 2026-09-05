import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { VisionPillars } from '../components/VisionPillars';
import { SignalChatSection } from '../components/SignalChatSection';
import { HackathonSection } from '../components/HackathonSection';
import { CongressTitleSection } from '../components/CongressTitleSection';
import { KeynoteSpeakersSection } from '../components/KeynoteSpeakersSection';
import { FlowingMenu } from '../components/FlowingMenu';
import { CountdownTimer } from '../components/CountdownTimer';
import { BootScreen } from '../components/BootScreen';

import { JourneySection } from '../components/JourneySection';
import { PartnersGrid } from '../components/PartnersGrid';

export const Home: React.FC = () => {
  const { openRegister, openMission } = useOutletContext<{ openRegister: () => void; openMission: () => void }>() as any;
  const [booting, setBooting] = useState(true);


  return (
    <>
      <Hero onOpenRegister={openRegister} />
      <VisionPillars />
      <SignalChatSection />

      {/* The Three Experiences (Linear Connected Stepper + ReactBits Spotlight) */}
      <JourneySection />

      {/* Hackathon Preview Section */}
      <HackathonSection onOpenMission={openMission} />

      {/* Congress Section */}
      <CongressTitleSection />

      {/* Countdown Timer: Vertically centered in the middle between Congress Day and Keynotes */}
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: 'clamp(6.5rem, 11vw, 9.5rem) 1.5rem clamp(1.5rem, 2.5vw, 2.5rem)', position: 'relative' }}>
        <CountdownTimer onOpenRegister={openRegister} />
      </section>

      <KeynoteSpeakersSection />
      <FlowingMenu />

      {/* Ecosystem Partners Highlight (Clean Typography Grid, No dashed placeholder boxes) */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.3rem', color: '#F5F7F8', margin: 0, textTransform: 'uppercase' }}>
            Ecosystem Partners
          </h2>
          <Link to="/partners" style={{ color: '#7EF3E8', textDecoration: 'none', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            View All Partners <ArrowRight size={13} />
          </Link>
        </div>

        <PartnersGrid />
      </section>


      {/* Clean Call to Action (Minimal Banner) */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '1rem 1.5rem 5rem' }}>
        <div style={{ border: '1px solid rgba(126, 243, 232, 0.25)', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(15, 20, 30, 0.8), rgba(10, 12, 16, 0.95))', padding: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', lineHeight: 1.2, margin: '0 0 1rem' }}>
            The future is not something we wait for.<br />
            <span style={{ color: '#7EF3E8' }}>It is something we build.</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '580px', margin: '0 auto 2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Join hundreds of young engineers, founders, and industry mentors participating in Jordan 2076.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openRegister} className="btn-cyber-primary" style={{ padding: '0.8rem 2rem' }}>
              Register Now
            </button>
            <Link to="/about" className="btn-cyber-outline" style={{ padding: '0.8rem 2rem' }}>
              About The Initiative
            </Link>
          </div>
        </div>
      </section>

      {booting && <BootScreen onDone={() => setBooting(false)} />}
    </>
  );
};
