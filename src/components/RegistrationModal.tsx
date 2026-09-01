import React, { useState } from 'react';
import { TICKET_TIERS } from '../data/tickets';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    selectedTier: 'tier-delegate',
    attendanceType: 'In-Person',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#7EF3E8', '#001B3A', '#FFFFFF'],
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        background: 'rgba(10, 10, 10, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={resetAndClose}
    >
      <div
        className="cyber-card"
        style={{
          maxWidth: '600px',
          width: '100%',
          padding: '2.5rem',
          borderColor: '#7EF3E8',
          boxShadow: '0 0 45px rgba(126, 243, 232, 0.35)',
          position: 'relative',
          background: 'linear-gradient(145deg, rgba(0, 27, 58, 0.95), rgba(10, 10, 10, 0.98))',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(0, 27, 58, 0.8)',
            border: '1px solid #7EF3E8',
            color: '#7EF3E8',
            borderRadius: '6px',
            padding: '0.4rem',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle2 size={64} color="#7EF3E8" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.8rem', color: '#F5F7F8', marginBottom: '0.5rem' }}>
              PASS RESERVATION CONFIRMED
            </h3>
            <p style={{ color: '#B7B9BD', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#7EF3E8' }}>{formData.name}</strong>. Your encrypted registration pass for <strong>Jordan 2076</strong> has been transmitted to <code>{formData.email}</code>.
            </p>
            <div style={{ background: 'rgba(0, 27, 58, 0.7)', border: '1px solid #7EF3E8', padding: '1.2rem', borderRadius: '10px', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)' }}>
                REGISTRATION REF: J76-CONF-99204
              </div>
              <div style={{ fontSize: '0.88rem', color: '#F5F7F8', marginTop: '0.3rem' }}>
                Amman CyberDome • Oct 15-17, 2076
              </div>
            </div>
            <button onClick={resetAndClose} className="btn-cyber-primary" style={{ margin: '0 auto' }}>
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.8rem' }}>
              <div className="cyber-badge" style={{ marginBottom: '0.4rem' }}>OFFICIAL REGISTRATION</div>
              <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.6rem', color: '#F5F7F8' }}>
                RESERVE YOUR CYBER-PASS
              </h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', color: '#7EF3E8', marginBottom: '0.3rem' }}>
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Tariq Al-Mansoor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(0, 27, 58, 0.6)',
                    border: '1px solid rgba(126, 243, 232, 0.4)',
                    borderRadius: '6px',
                    padding: '0.75rem 1rem',
                    color: '#F5F7F8',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', color: '#7EF3E8', marginBottom: '0.3rem' }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. delegate@jordan2076.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(0, 27, 58, 0.6)',
                    border: '1px solid rgba(126, 243, 232, 0.4)',
                    borderRadius: '6px',
                    padding: '0.75rem 1rem',
                    color: '#F5F7F8',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', color: '#7EF3E8', marginBottom: '0.3rem' }}>
                  ORGANIZATION / INSTITUTION
                </label>
                <input
                  type="text"
                  placeholder="e.g. Levantine Tech Institute"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(0, 27, 58, 0.6)',
                    border: '1px solid rgba(126, 243, 232, 0.4)',
                    borderRadius: '6px',
                    padding: '0.75rem 1rem',
                    color: '#F5F7F8',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', color: '#7EF3E8', marginBottom: '0.3rem' }}>
                  PASS TIER SELECTION
                </label>
                <select
                  value={formData.selectedTier}
                  onChange={(e) => setFormData({ ...formData, selectedTier: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(0, 27, 58, 0.6)',
                    border: '1px solid rgba(126, 243, 232, 0.4)',
                    borderRadius: '6px',
                    padding: '0.75rem 1rem',
                    color: '#F5F7F8',
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                >
                  {TICKET_TIERS.map((tier) => (
                    <option key={tier.id} value={tier.id} style={{ background: '#0A0A0A' }}>
                      {tier.name} — {tier.price} ({tier.badgeType})
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-cyber-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                <Sparkles size={18} />
                <span>Confirm Pass Reservation</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
