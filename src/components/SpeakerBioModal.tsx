import React, { useEffect, useState } from 'react';
import type { Speaker } from '../types';
import { X, ExternalLink, Calendar, MapPin, Sparkles } from 'lucide-react';
import './SpeakerBioModal.css';

interface SpeakerBioModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export const SpeakerBioModal: React.FC<SpeakerBioModalProps> = ({ speaker, onClose }) => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  // Close on ESC key and prevent body scroll
  useEffect(() => {
    if (!speaker) return;

    setLang('en'); // default to English on open

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [speaker, onClose]);

  if (!speaker) return null;

  const hasArabic = Boolean(speaker.arabicBio);
  const displayBio = (lang === 'ar' && speaker.arabicBio)
    ? speaker.arabicBio
    : (speaker.fullBio || speaker.bio);

  const paragraphs = displayBio.split('\n\n').filter(Boolean);

  return (
    <div className="sbm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="sbm-modal" onClick={(e) => e.stopPropagation()}>
        {/* Futuristic HUD Corners */}
        <span className="sbm-corner sbm-corner--tl" aria-hidden="true" />
        <span className="sbm-corner sbm-corner--tr" aria-hidden="true" />
        <span className="sbm-corner sbm-corner--bl" aria-hidden="true" />
        <span className="sbm-corner sbm-corner--br" aria-hidden="true" />

        {/* Modal Header Bar */}
        <div className="sbm-header">
          <div className="sbm-header-pill">
            <span className="sbm-pulse-dot" />
            <span>
              {speaker.session.toUpperCase()} // {speaker.track.toUpperCase()}
            </span>
          </div>

          <div className="sbm-header-actions">
            {hasArabic && (
              <div className="sbm-lang-switch">
                <button
                  type="button"
                  className={`sbm-lang-btn ${lang === 'en' ? 'sbm-lang-btn--active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={`sbm-lang-btn ${lang === 'ar' ? 'sbm-lang-btn--active' : ''}`}
                  onClick={() => setLang('ar')}
                >
                  عربي
                </button>
              </div>
            )}
            <button
              type="button"
              className="sbm-close-btn"
              onClick={onClose}
              aria-label="Close biography modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="sbm-body">
          {/* Profile Card Hero */}
          <div className="sbm-hero">
            <div className="sbm-avatar-wrap">
              <img src={speaker.avatar} alt={speaker.name} className="sbm-avatar" />
              <div className="sbm-avatar-glow" />
              <span className="sbm-avatar-badge">
                {speaker.session === 'keynote' ? 'KEYNOTE' : speaker.session === 'moderator' ? 'MODERATOR' : 'PANELIST'}
              </span>
            </div>

            <div className="sbm-hero-info">
              <h2 className="sbm-name">{speaker.name}</h2>
              <div className="sbm-role">{speaker.role}</div>
              <div className="sbm-org">{speaker.organization}</div>

              {speaker.timeSlot && (
                <div className="sbm-meta-chip">
                  <Calendar size={13} />
                  <span>Main Stage · {speaker.timeSlot}</span>
                </div>
              )}
            </div>
          </div>

          {/* Session / Talk Highlight */}
          {speaker.keynoteTitle && (
            <div className="sbm-talk-box">
              <div className="sbm-talk-tag">
                <Sparkles size={13} />
                <span>{speaker.session === 'keynote' ? 'KEYNOTE TOPIC' : 'PANEL SESSION'}</span>
              </div>
              <p className="sbm-talk-title">"{speaker.keynoteTitle}"</p>
            </div>
          )}

          {/* Biography Content */}
          <div className="sbm-bio-section">
            <div className="sbm-section-label">
              <span>BIOGRAPHY</span>
              <i className="sbm-line" />
            </div>

            <div
              className={`sbm-bio-text ${lang === 'ar' ? 'sbm-bio-text--rtl' : ''}`}
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sbm-footer">
          <div className="sbm-socials">
            {speaker.socials?.linkedin && (
              <a
                href={speaker.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sbm-btn-social"
              >
                <span>LinkedIn</span>
                <ExternalLink size={13} />
              </a>
            )}
            <span className="sbm-venue-pill">
              <MapPin size={13} /> UJ Academy · Congress 2076
            </span>
          </div>

          <button type="button" className="sbm-btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerBioModal;
