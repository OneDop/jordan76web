import React, { useState, useEffect, useRef } from 'react';
import { SPEAKERS_DATA } from '../data/speakers';
import type { Speaker } from '../types';
import { X, ExternalLink, Download, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import './Speakers.css';

const PANEL_SPEAKERS = SPEAKERS_DATA.filter((s) => s.session === 'panel');

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [deck, setDeck] = useState<Speaker[]>(PANEL_SPEAKERS);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto cycle cards every 4 seconds when not hovered
  useEffect(() => {
    if (isHovered || deck.length <= 1) return;
    const timer = setInterval(() => {
      handleSwapNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [deck, isHovered]);

  const handleSwapNext = () => {
    if (isSwapping || deck.length <= 1) return;
    setIsSwapping(true);
    setTimeout(() => {
      setDeck((prev) => {
        const [top, ...rest] = prev;
        return [...rest, top];
      });
      setIsSwapping(false);
    }, 350);
  };

  const handleSwapPrev = () => {
    if (isSwapping || deck.length <= 1) return;
    setIsSwapping(true);
    setTimeout(() => {
      setDeck((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        return [last, ...rest];
      });
      setIsSwapping(false);
    }, 350);
  };

  const handleGoToSpeaker = (targetIndex: number) => {
    if (isSwapping) return;
    const targetSpeaker = PANEL_SPEAKERS[targetIndex];
    if (!targetSpeaker || deck[0]?.id === targetSpeaker.id) return;

    setIsSwapping(true);
    setTimeout(() => {
      setDeck((prev) => {
        const idx = prev.findIndex((s) => s.id === targetSpeaker.id);
        if (idx === -1) return prev;
        const selected = prev[idx];
        const rest = prev.filter((_, i) => i !== idx);
        return [selected, ...rest];
      });
      setIsSwapping(false);
    }, 300);
  };

  const handleCardClick = (index: number, speaker: Speaker, e: React.MouseEvent) => {
    // If clicking the view bio button or if top card is clicked
    if ((e.target as HTMLElement).closest('.rb-card-view-bio-pill')) {
      setSelectedSpeaker(speaker);
      return;
    }

    if (index === 0) {
      handleSwapNext();
    } else {
      if (isSwapping) return;
      setIsSwapping(true);
      setTimeout(() => {
        setDeck((prev) => {
          const selected = prev[index];
          const rest = prev.filter((_, i) => i !== index);
          return [selected, ...rest];
        });
        setIsSwapping(false);
      }, 300);
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleSwapNext();
      else handleSwapPrev();
    }
    touchStartX.current = null;
  };

  const activeSpeakerIndex = PANEL_SPEAKERS.findIndex((s) => s.id === deck[0]?.id);

  return (
    <section id="speakers" className="rb-reactbits-section">
      <div className="rb-reactbits-bg-glow" />

      <div className="rb-reactbits-container">
        {/* Left Side Text & Controls */}
        <div className="rb-reactbits-left">
          <div className="rb-panel-badge">
            <span className="rb-badge-dot" />
            <span>CONGRESS 2076 // PANEL STAGE</span>
          </div>

          <h2 className="rb-reactbits-title">
            Meet the Panel <br />
            Discussion Speakers
          </h2>

          <p className="rb-reactbits-subtitle">
            <strong>The Ethics of Neurochips:</strong> Neural Sovereignty, Cognitive Privacy & Autonomous Bio-Cybernetics in 2076.
          </p>

          <div className="rb-reactbits-controls">
            <button
              className="rb-reactbits-icon-btn"
              onClick={handleSwapPrev}
              title="Previous Speaker"
              aria-label="Previous Speaker"
            >
              <ChevronLeft size={18} />
            </button>

            <button className="rb-reactbits-swap-btn" onClick={handleSwapNext}>
              <RefreshCw size={14} className={isSwapping ? 'spin-anim' : ''} />
              <span>SWAP CARD</span>
            </button>

            <button
              className="rb-reactbits-icon-btn"
              onClick={handleSwapNext}
              title="Next Speaker"
              aria-label="Next Speaker"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side: Modern Card Stack */}
        <div
          className="rb-reactbits-right"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="rb-stack-stage-box">
            {deck.map((speaker, index) => {
              const isTop = index === 0;
              const isAnimatingTop = isTop && isSwapping;

              const offsetX = index * 36;
              const offsetY = -index * 30;
              const scale = 1 - index * 0.04;
              const opacity = index > 3 ? 0 : 1 - index * 0.16;

              return (
                <div
                  key={speaker.id}
                  className={`rb-reactbits-card ${isTop ? 'rb-card-active' : ''} ${
                    isAnimatingTop ? 'rb-card-swapping' : ''
                  }`}
                  style={{
                    zIndex: deck.length - index,
                    transform: isAnimatingTop
                      ? 'translate3d(125%, -30px, 80px)'
                      : `translate3d(${offsetX}px, ${offsetY}px, -${index * 35}px) scale(${scale})`,
                    opacity: isAnimatingTop ? 0.25 : opacity,
                  }}
                  onClick={(e) => handleCardClick(index, speaker, e)}
                >
                  {/* Floating Minimalist Tag */}
                  <div className="rb-modern-badge-row">
                    <span className="rb-modern-pill">
                      <span className="rb-pill-indicator" />
                      {speaker.track}
                    </span>
                  </div>

                  {/* Speaker Card Body */}
                  <div className="rb-card-window-body">
                    <img src={speaker.avatar} alt={speaker.name} className="rb-speaker-img" />
                    <div className="rb-speaker-gradient" />

                    <div className="rb-speaker-overlay-info">
                      <div className="rb-speaker-name">{speaker.name}</div>
                      <div className="rb-speaker-role">{speaker.role}</div>
                      <div className="rb-speaker-org">{speaker.organization}</div>

                      <button
                        type="button"
                        className="rb-card-view-bio-pill"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSpeaker(speaker);
                        }}
                      >
                        <span>VIEW BIO</span>
                        <ExternalLink size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Dots Indicator */}
          <div className="rb-reactbits-dots">
            {PANEL_SPEAKERS.map((speaker, i) => (
              <button
                key={speaker.id}
                type="button"
                className={`rb-reactbits-dot-item ${i === activeSpeakerIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleGoToSpeaker(i);
                }}
                title={`View ${speaker.name}`}
                aria-label={`View ${speaker.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Profile Dossier Modal */}
      {selectedSpeaker && (
        <div className="rb-modal-backdrop" onClick={() => setSelectedSpeaker(null)}>
          <div className="rb-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="rb-modal-header">
              <div className="rb-modal-tag">
                PANEL SPEAKER // {selectedSpeaker.track.toUpperCase()}
              </div>
              <button className="rb-modal-close" onClick={() => setSelectedSpeaker(null)}>
                <X size={16} />
              </button>
            </div>

            <div className="rb-modal-body">
              <div className="rb-modal-hero">
                <img
                  src={selectedSpeaker.avatar}
                  alt={selectedSpeaker.name}
                  className="rb-modal-avatar"
                />
                <div className="rb-modal-hero-info">
                  <h3 className="rb-modal-name">{selectedSpeaker.name}</h3>
                  <div className="rb-modal-role">{selectedSpeaker.role}</div>
                  <div className="rb-modal-org">{selectedSpeaker.organization}</div>
                  <div className="rb-modal-session-type">
                    <span className="rb-session-pill">
                      PANEL DISCUSSION // ETHICS OF NEUROCHIPS
                    </span>
                  </div>
                </div>
              </div>

              <div className="rb-modal-section">
                <div className="rb-modal-label">BIOGRAPHY</div>
                <p className="rb-modal-bio">{selectedSpeaker.bio}</p>
              </div>

              {selectedSpeaker.keynoteTitle && (
                <div className="rb-modal-topic-box">
                  <div className="rb-modal-label">PANEL TOPIC FOCUS</div>
                  <div className="rb-modal-topic">"{selectedSpeaker.keynoteTitle}"</div>
                </div>
              )}

              <div className="rb-modal-footer">
                <div className="rb-modal-socials">
                  {selectedSpeaker.socials?.twitter && (
                    <a
                      href={selectedSpeaker.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rb-social-link"
                    >
                      TWITTER <ExternalLink size={11} />
                    </a>
                  )}
                  {selectedSpeaker.socials?.linkedin && (
                    <a
                      href={selectedSpeaker.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rb-social-link"
                    >
                      LINKEDIN <ExternalLink size={11} />
                    </a>
                  )}
                </div>

                <button
                  className="rb-modal-download-btn"
                  onClick={() => setSelectedSpeaker(null)}
                >
                  <Download size={13} /> CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
