import React, { useState } from 'react';
import { TICKET_TIERS } from '../data/tickets';
import confetti from 'canvas-confetti';
import { ShieldCheck, Check, Sparkles, QrCode, Cpu, Ticket } from 'lucide-react';

interface CyberPassProps {
  onOpenRegister: () => void;
}

export const CyberPass: React.FC<CyberPassProps> = ({ onOpenRegister }) => {
  const [userName, setUserName] = useState('Dr. Alex Mercer');
  const [userHandle, setUserHandle] = useState('@alex_cyber2076');
  const [selectedTierId, setSelectedTierId] = useState('tier-delegate');
  const [isMinted, setIsMinted] = useState(false);

  const selectedTier = TICKET_TIERS.find((t) => t.id === selectedTierId) || TICKET_TIERS[1];

  const handleMint = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMinted(true);

    // Trigger Cyber Confetti Celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7EF3E8', '#001B3A', '#FFFFFF', '#60e3d7'],
    });
  };

  return (
    <section id="cyber-pass" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="cyber-badge" style={{ marginBottom: '0.8rem' }}>04 / REGISTRATION & BADGES</div>
        <h2 className="section-title">CHOOSE YOUR CYBER-PASS</h2>
        <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
          Select an access tier or build and preview your customized 2076 encrypted holographic event badge below.
        </p>
      </div>

      {/* Ticket Pricing Tiers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem',
        }}
      >
        {TICKET_TIERS.map((tier) => (
          <div
            key={tier.id}
            className="cyber-card"
            style={{
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderColor: tier.popular ? '#7EF3E8' : 'rgba(126, 243, 232, 0.2)',
              boxShadow: tier.popular ? '0 0 25px rgba(126, 243, 232, 0.25)' : 'none',
            }}
          >
            {tier.popular && (
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#7EF3E8',
                  color: '#0A0A0A',
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                }}
              >
                MOST POPULAR
              </div>
            )}

            <div>
              <div className="cyber-badge" style={{ marginBottom: '1rem' }}>{tier.badgeType}</div>
              <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.4rem', color: '#F5F7F8', marginBottom: '0.5rem' }}>
                {tier.name}
              </h3>
              <div style={{ fontFamily: 'var(--font-orbitron)', fontSize: '2.2rem', fontWeight: 900, color: '#7EF3E8', marginBottom: '1.5rem' }}>
                {tier.price}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                {tier.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#B7B9BD' }}>
                    <Check size={16} color="#7EF3E8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedTierId(tier.id);
                onOpenRegister();
              }}
              className={tier.popular ? 'btn-cyber-primary' : 'btn-cyber-outline'}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Ticket size={16} />
              <span>Select {tier.badgeType}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Cyber-Pass Preview & Customizer */}
      <div
        className="cyber-card"
        style={{
          padding: '2.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(0, 27, 58, 0.9), rgba(10, 10, 10, 0.95))',
          border: '1px solid #7EF3E8',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="cyber-badge" style={{ marginBottom: '0.5rem' }}>INTERACTIVE HOLOGRAPHIC PASS GENERATOR</span>
          <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.6rem', color: '#F5F7F8' }}>
            CUSTOMIZE YOUR 2076 DIGITAL BADGE
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Customization Form */}
          <form onSubmit={handleMint} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', color: '#7EF3E8', marginBottom: '0.4rem' }}>
                FULL NAME
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(0, 27, 58, 0.6)',
                  border: '1px solid rgba(126, 243, 232, 0.4)',
                  borderRadius: '6px',
                  padding: '0.8rem 1rem',
                  color: '#F5F7F8',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', color: '#7EF3E8', marginBottom: '0.4rem' }}>
                CYBER CALLSIGN / HANDLE
              </label>
              <input
                type="text"
                value={userHandle}
                onChange={(e) => setUserHandle(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(0, 27, 58, 0.6)',
                  border: '1px solid rgba(126, 243, 232, 0.4)',
                  borderRadius: '6px',
                  padding: '0.8rem 1rem',
                  color: '#F5F7F8',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', color: '#7EF3E8', marginBottom: '0.4rem' }}>
                SELECT ACCESS LEVEL
              </label>
              <select
                value={selectedTierId}
                onChange={(e) => setSelectedTierId(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(0, 27, 58, 0.6)',
                  border: '1px solid rgba(126, 243, 232, 0.4)',
                  borderRadius: '6px',
                  padding: '0.8rem 1rem',
                  color: '#F5F7F8',
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              >
                {TICKET_TIERS.map((t) => (
                  <option key={t.id} value={t.id} style={{ background: '#0A0A0A' }}>
                    {t.name} ({t.badgeType})
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-cyber-primary" style={{ marginTop: '0.8rem', justifyContent: 'center' }}>
              <Sparkles size={18} />
              <span>{isMinted ? 'Regenerate Cyber Badge' : 'Mint Encrypted Badge'}</span>
            </button>
          </form>

          {/* Holographic Badge Card Visualizer */}
          <div
            style={{
              background: 'linear-gradient(135deg, #001B3A 0%, #0A0A0A 100%)',
              border: '2px solid #7EF3E8',
              boxShadow: '0 0 35px rgba(126, 243, 232, 0.35)',
              borderRadius: '16px',
              padding: '1.8rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Holographic Shimmer Line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #7EF3E8, #FFFFFF, #7EF3E8)',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={20} color="#7EF3E8" />
                <span style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 800, fontSize: '0.9rem', color: '#F5F7F8' }}>
                  JORDAN 2076
                </span>
              </div>
              <div className="cyber-badge" style={{ fontSize: '0.65rem' }}>
                {selectedTier.badgeType}
              </div>
            </div>

            <div style={{ margin: '1.5rem 0' }}>
              <div style={{ fontSize: '0.72rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', letterSpacing: '0.15em' }}>
                DELEGATE NAME
              </div>
              <div style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.35rem', fontWeight: 800, color: '#F5F7F8' }}>
                {userName || 'ATTENDEE NAME'}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#7EF3E8', fontFamily: 'var(--font-rajdhani)' }}>
                {userHandle || '@callsign'}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '1rem', borderTop: '1px dashed rgba(126, 243, 232, 0.3)' }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)' }}>
                  ENCRYPTED PASS ID
                </div>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-orbitron)', color: '#F5F7F8' }}>
                  J76-{selectedTier.badgeType.substring(0, 3)}-8849
                </div>
                <div style={{ fontSize: '0.65rem', color: '#7EF3E8', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                  <ShieldCheck size={12} />
                  STATUS: VERIFIED
                </div>
              </div>

              <div
                style={{
                  background: '#F5F7F8',
                  padding: '0.4rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <QrCode size={42} color="#0A0A0A" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
