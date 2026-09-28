import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Users,
  Trophy,
  CalendarDays,
  Code2,
  Lightbulb,
  Rocket,
  RotateCw,
  Sparkles,
  Layers,
} from 'lucide-react';
import { HACKATHON_TRACKS } from '../data/tracks';
import type { HackathonTrack } from '../types';
import ammanImg from '../assets/cities/Amman.2076.png';
import irbidImg from '../assets/cities/Irbid2076.png';
import petraImg from '../assets/cities/Petra2076.png';
import aqabaImg from '../assets/cities/Aqaba.2076.png';
import { CountUp, Marquee, Reveal, SectionHead, SplitTitle, Spotlight } from '../components/j76/J76';

const trackImages: Record<string, string | undefined> = {
  'track-amman': ammanImg,
  'track-irbid': irbidImg,
  'track-petra': petraImg,
  'track-aqaba': aqabaImg,
};

const STEPS = [
  {
    icon: Lightbulb,
    title: 'Idea & Proposal',
    text: 'Turn a problem into a clear, viable idea.',
  },
  {
    icon: Code2,
    title: 'MVP Development',
    text: 'Build, test, and prove your solution.',
  },
  {
    icon: Rocket,
    title: 'Pitch & Venture',
    text: 'Present your solution and its business potential.',
  },
];

export const Hackathon: React.FC = () => {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedId((curr) => (curr === id ? null : id));
  };

  return (
    <div className="j76-page">
      {/* Aurora hero — aceternity aurora + reactbits split text */}
      <header className="j76-hero">
        <span className="j76-orb j76-orb--a" aria-hidden="true" />
        <span className="j76-orb j76-orb--b" aria-hidden="true" />
        <span className="j76-orb j76-orb--c" aria-hidden="true" />
        <div className="j76-hero-inner">
          <span className="j76-badge">
            <i /> Hackathon · 4 tracks · Live build
          </span>
          <h1 className="j76-title">
            <SplitTitle text="4 CITIES." />
            <br />
            <SplitTitle text="1 FUTURE." accentLast />
          </h1>
          <p className="j76-lead">Ship working software for education, health, culture & mobility.</p>
          <div className="j76-meta">
            <span className="j76-pill">
              <Users size={15} /> <b>2–4</b> builders
            </span>
            <span className="j76-pill">
              <Trophy size={15} /> <b>JOD 3,000</b> pool
            </span>
            <span className="j76-pill">
              <CalendarDays size={15} /> Finals <b>Oct 10</b>
            </span>
          </div>
        </div>
      </header>

      <Marquee items={['Amman', 'Irbid', 'Petra', 'Aqaba', 'Build', 'Ship', 'Pitch']} />

      {/* Bento tracks — 3D flipping cards */}
      <section className="j76-sect">
        <SectionHead title={<>Pick your <em>track</em></>} note="Hover / Tap to flip for details" />
        <div className="j76-bento">
          {HACKATHON_TRACKS.map((track: HackathonTrack, i: number) => {
            const image = trackImages[track.id];
            const isFlipped = flippedId === track.id;

            return (
              <Reveal key={track.id} delay={i * 70} className="j76-cell">
                <Spotlight className="h-full">
                  <div
                    className={`j76-flip-card ${isFlipped ? 'is-flipped' : ''}`}
                    onClick={() => toggleFlip(track.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFlip(track.id);
                      }
                    }}
                    aria-label={`${track.site} 2076 track card, hover or press to flip for description`}
                  >
                    <div className="j76-flip-inner">
                      {/* FRONT FACE */}
                      <div className="j76-flip-front">
                        <div className="j76-spot">
                          <div className="j76-spot-top">
                            {image && <img src={image} alt={track.site} loading="lazy" />}
                            <div className="j76-spot-tag">
                              <span className="j76-tag">{track.site} 2076</span>
                            </div>
                          </div>
                          <div className="j76-spot-body">
                            <h3 className="j76-spot-title">{track.title.replace('Innovation in ', '')}</h3>
                            <p className="j76-spot-sub">{track.coordinates}</p>
                            <div className="j76-spot-foot">
                              <span className="j76-price">{track.prize.split('+')[0].trim()}</span>
                              <span className="j76-go">
                                {track.signalCode}
                                <RotateCw size={12} style={{ marginLeft: 4, opacity: 0.8 }} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div className="j76-flip-back">
                        <div className="j76-back-top">
                          <span className="j76-back-tag">{track.site} 2076</span>
                          <span className="j76-back-code">{track.signalCode}</span>
                        </div>

                        <h3 className="j76-back-title">{track.fullTitle || track.title}</h3>
                        {track.poweredBy && (
                          <span className="j76-back-powered">{track.poweredBy}</span>
                        )}

                        <p className="j76-back-desc">{track.description || track.briefing}</p>

                        {/* Exploration Areas (Amman, Irbid, Petra) */}
                        {track.explorationAreas && (
                          <div className="j76-back-section">
                            <div className="j76-back-subhead">
                              <Sparkles size={12} />
                              <span>Key Exploration Areas</span>
                            </div>
                            <div className="j76-back-chips">
                              {track.explorationAreas.map((area) => (
                                <span key={area} className="j76-back-chip">
                                  {area}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Sub-Tracks (Aqaba) */}
                        {track.subTracks && (
                          <div className="j76-back-section">
                            <div className="j76-back-subhead">
                              <Layers size={12} />
                              <span>3 Core Sub-Tracks</span>
                            </div>
                            <div className="j76-back-subtracks">
                              {track.subTracks.map((sub, sIdx) => (
                                <div key={sub.name} className="j76-subtrack-item">
                                  <div className="j76-subtrack-name">
                                    <span className="j76-subtrack-num">0{sIdx + 1}</span>
                                    <span>{sub.name}</span>
                                  </div>
                                  <p className="j76-subtrack-focus">{sub.focus}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="j76-back-foot">
                          <span className="j76-back-prize">
                            {track.prize.split('+')[0].trim()}
                          </span>
                          <span className="j76-back-action">
                            <RotateCw size={12} /> Flip Back
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Count-up stats — reactbits count-up */}
      <section className="j76-sect">
        <SectionHead title={<>At a <em>glance</em></>} note="4 facts" />
        <div className="j76-stats">
          <div className="j76-stat">
            <div className="j76-stat-value">
              <CountUp to={4} />
            </div>
            <div className="j76-stat-unit" aria-hidden="true" />
            <span className="j76-stat-label">sector tracks</span>
          </div>
          <div className="j76-stat">
            <div className="j76-stat-value">
              <CountUp to={3000} />
            </div>
            <div className="j76-stat-unit">JOD</div>
            <span className="j76-stat-label">prize pool + incubation</span>
          </div>
          <div className="j76-stat">
            <div className="j76-stat-value">
              <CountUp to={4} />
            </div>
            <div className="j76-stat-unit" aria-hidden="true" />
            <span className="j76-stat-label">max per team</span>
          </div>
          <div className="j76-stat">
            <div className="j76-stat-value">
              <CountUp to={3} />
            </div>
            <div className="j76-stat-unit">stages</div>
            <span className="j76-stat-label">live finals · Oct 10</span>
          </div>
        </div>
      </section>

      {/* 3-step path — The Journey */}
      <section className="j76-sect">
        <div style={{ marginBottom: '0.35rem' }}>
          <span style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--j76-cyan)' }}>
            The Journey
          </span>
        </div>
        <SectionHead title={<>Idea → Build → <em>Pitch</em></>} note="3 phases" />
        <div className="j76-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="j76-step" data-n={`0${i + 1}`}>
                <span className="j76-step-icon">
                  <s.icon size={18} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.1rem', flexWrap: 'wrap' }}>
            <Link to="/congress" className="j76-go">
              Congress programme <ArrowUpRight size={15} />
            </Link>
            <Link to="/bootcamp" className="j76-go">
              Bootcamp prep <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

    </div>
  );
};
