import React from 'react';
import { X, Cpu, Activity, Globe, Award, Calendar, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import ammanImg from '../assets/hackathon_amman.png';
import irbidImg from '../assets/hackathon_irbid.png';
import petraImg from '../assets/hackathon_petra.png';

interface HackathonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
}

export const HackathonModal: React.FC<HackathonModalProps> = ({
  isOpen,
  onClose,
  onRegister,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(5, 8, 14, 0.94)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 3vw, 1.5rem)',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Modal Dialog Content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          maxHeight: 'none',
          backgroundColor: '#0C121C',
          border: '1px solid rgba(126, 243, 232, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(126, 243, 232, 0.15)',
          overflowY: 'visible',
          color: '#F5F7F8',
          padding: 'clamp(1.25rem, 4vw, 2.5rem)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(126, 243, 232, 0.1)',
            border: '1px solid rgba(126, 243, 232, 0.3)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7EF3E8',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#7EF3E8';
            e.currentTarget.style.color = '#001B3A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(126, 243, 232, 0.1)';
            e.currentTarget.style.color = '#7EF3E8';
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(126, 243, 232, 0.1)',
              border: '1px solid rgba(126, 243, 232, 0.25)',
              padding: '0.3rem 0.9rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-orbitron)',
              fontWeight: 700,
              color: '#7EF3E8',
              letterSpacing: '0.12em',
              marginBottom: '0.8rem',
            }}
          >
            <Shield size={14} color="#7EF3E8" />
            MISSION DIRECTIVE // HACKATHON 2076
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 900,
              color: '#F5F7F8',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: '0 0 0.5rem 0',
            }}
          >
            JORDAN 2076 <span style={{ color: '#7EF3E8' }}>HACKATHON DETAILS</span>
          </h2>
          <p style={{ color: '#B7B9BD', fontSize: '0.98rem', margin: 0, lineHeight: 1.5 }}>
            Welcome operative. You have been selected to decipher tomorrow's challenges. Review the track specifications below and initialize your mission registration.
          </p>
        </div>

        {/* Prize & Info Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '1.2rem',
            marginBottom: '3rem',
            background: 'rgba(0, 27, 58, 0.4)',
            border: '1px solid rgba(126, 243, 232, 0.2)',
            borderRadius: '14px',
            padding: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(126, 243, 232, 0.12)', padding: '0.75rem', borderRadius: '10px' }}>
              <Award size={24} color="#7EF3E8" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>TOTAL PRIZE POOL</div>
              <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-orbitron)', fontWeight: 800, color: '#7EF3E8' }}>$10,000 USD</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(126, 243, 232, 0.12)', padding: '0.75rem', borderRadius: '10px' }}>
              <Calendar size={24} color="#7EF3E8" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>TIMELINE</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-orbitron)', fontWeight: 700, color: '#F5F7F8' }}>48 HOUR SPRINT</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(126, 243, 232, 0.12)', padding: '0.75rem', borderRadius: '10px' }}>
              <CheckCircle2 size={24} color="#7EF3E8" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>TEAM SIZE</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-orbitron)', fontWeight: 700, color: '#F5F7F8' }}>2 - 5 OPERATIVES</div>
            </div>
          </div>
        </div>

        {/* Detailed Tracks Section */}
        <h3
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#7EF3E8',
            marginBottom: '1.5rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          CHOOSE YOUR MISSION TRACK
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {/* Track 1: Amman */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              background: 'rgba(10, 15, 25, 0.7)',
              border: '1px solid rgba(126, 243, 232, 0.2)',
              borderRadius: '14px',
              padding: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <img
              src={ammanImg}
              alt="Amman Educational Track"
              style={{ width: '120px', height: '140px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Cpu size={16} color="#7EF3E8" />
                <span style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.75rem', fontWeight: 700, color: '#7EF3E8' }}>
                  TRACK 01 // AMMAN
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.4rem 0' }}>
                EDUCATIONAL SYSTEMS
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#B7B9BD', lineHeight: 1.5, margin: 0 }}>
                Develop AI-powered adaptive learning grids, decentralized micro-credentialing protocols, and automated tutoring systems tailored for metropolitan educational infrastructure.
              </p>
            </div>
          </div>

          {/* Track 2: Irbid */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              background: 'rgba(10, 15, 25, 0.7)',
              border: '1px solid rgba(126, 243, 232, 0.2)',
              borderRadius: '14px',
              padding: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <img
              src={irbidImg}
              alt="Irbid Healthcare Track"
              style={{ width: '120px', height: '140px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Activity size={16} color="#7EF3E8" />
                <span style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.75rem', fontWeight: 700, color: '#7EF3E8' }}>
                  TRACK 02 // IRBID
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.4rem 0' }}>
                HEALTHCARE SYSTEMS
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#B7B9BD', lineHeight: 1.5, margin: 0 }}>
                Build bio-cybernetic telemetry networks, emergency response micro-drone algorithms, and privacy-preserving medical AI for regional healthcare facilities.
              </p>
            </div>
          </div>

          {/* Track 3: Petra */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              background: 'rgba(10, 15, 25, 0.7)',
              border: '1px solid rgba(126, 243, 232, 0.2)',
              borderRadius: '14px',
              padding: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <img
              src={petraImg}
              alt="Petra Tourism Track"
              style={{ width: '120px', height: '140px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Globe size={16} color="#7EF3E8" />
                <span style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.75rem', fontWeight: 700, color: '#7EF3E8' }}>
                  TRACK 03 // PETRA
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.4rem 0' }}>
                TOURISM TECHNOLOGY
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#B7B9BD', lineHeight: 1.5, margin: 0 }}>
                Engineer augmented reality historical portals, autonomous eco-tourism guides, and smart conservation monitoring systems for world heritage sites.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button
            onClick={onClose}
            style={{
              padding: '0.85rem 1.8rem',
              borderRadius: '10px',
              background: 'transparent',
              border: '1px solid rgba(183, 185, 189, 0.3)',
              color: '#B7B9BD',
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            CLOSE BRIEFING
          </button>

          <button
            onClick={() => {
              onClose();
              onRegister();
            }}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '10px',
              background: '#7EF3E8',
              color: '#001B3A',
              border: 'none',
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.88rem',
              fontWeight: 900,
              letterSpacing: '0.06em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 25px rgba(126, 243, 232, 0.4)',
            }}
          >
            <span>REGISTER TEAM NOW</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
