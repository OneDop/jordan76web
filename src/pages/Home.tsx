import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, Crown } from 'lucide-react';
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
import { PLATINUM_SPONSOR } from '../data/sponsors';
import { WebmasterSection } from '../components/WebmasterSection';

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
      <section style={{ maxWidth: '1040px', margin: '0 auto', padding: 'clamp(2.5rem, 11vw, 9.5rem) 1.5rem clamp(1.5rem, 2.5vw, 2.5rem)', position: 'relative' }}>
        <CountdownTimer onOpenRegister={openRegister} />
      </section>

      <KeynoteSpeakersSection />
      <FlowingMenu />

      {/* Exclusive Platinum Sponsor & Official Patronage */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        {/* Platinum Sponsor Highlight */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Crown size={18} color="#FFD97A" />
              <h2 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.25rem', color: '#FFD97A', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Exclusive Platinum Sponsor
              </h2>
            </div>
            <span style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
              Title Summit Sponsor
            </span>
          </div>

          <div
            style={{
              background: 'linear-gradient(145deg, rgba(20, 26, 40, 0.85), rgba(10, 14, 22, 0.95))',
              border: '1px solid rgba(255, 193, 60, 0.4)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
              boxShadow: '0 14px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 193, 60, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '220px',
                  height: '110px',
                  background: 'rgba(12, 16, 26, 0.8)',
                  border: '1px solid rgba(255, 193, 60, 0.35)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 18px',
                  boxShadow: '0 0 25px rgba(255, 193, 60, 0.15)',
                }}
              >
                <img
                  src={PLATINUM_SPONSOR.logo}
                  alt={PLATINUM_SPONSOR.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ maxWidth: '480px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-rajdhani)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#FFD97A',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.3rem',
                  }}
                >
                  Petra Ride · Smart Mobility
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#F5F7F8',
                    margin: '0 0 0.4rem',
                  }}
                >
                  {PLATINUM_SPONSOR.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    color: '#94A3B8',
                    margin: 0,
                  }}
                >
                  {PLATINUM_SPONSOR.blurb}
                </p>
              </div>
            </div>

            <a
              href={PLATINUM_SPONSOR.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#06121a',
                background: 'linear-gradient(180deg, #FFD97A, #F5C518)',
                padding: '0.8rem 1.4rem',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 0 22px rgba(255, 193, 60, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              <span>Visit Website</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Patronage */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.25rem', color: '#F5F7F8', margin: 0, textTransform: 'uppercase' }}>
            Patronage
          </h2>
          <Link to="/partners" style={{ color: '#7EF3E8', textDecoration: 'none', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', minHeight: '44px' }}>
            View All Partners &amp; Sponsors <ArrowRight size={13} />
          </Link>
        </div>

        <PartnersGrid />
      </section>


      {/* Clean Call to Action (Minimal Banner) */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '1rem 1.5rem 5rem' }}>
        <div style={{ border: '1px solid rgba(126, 243, 232, 0.25)', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(15, 20, 30, 0.8), rgba(10, 12, 16, 0.95))', padding: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: 'clamp(1.25rem, 4vw, 2.5rem)', lineHeight: 1.25, margin: '0 0 1rem', textWrap: 'balance' }}>
            The future is not something we wait for.<br />
            <span style={{ color: '#7EF3E8' }}>It is something we build.</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '580px', margin: '0 auto 2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Join hundreds of young engineers, founders, and industry mentors participating in Jordan 2076.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn-cyber-outline" style={{ padding: '0.8rem 2rem' }}>
              About The Initiative
            </Link>
          </div>
        </div>
      </section>

      <WebmasterSection />

      {booting && <BootScreen onDone={() => setBooting(false)} />}
    </>
  );
};
