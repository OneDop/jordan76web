import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Check, User } from 'lucide-react';
import { Reveal } from '../components/j76/J76';

const DAYS = [
  {
    num: '01',
    title: 'Real opportunity?',
    flag: 'Validate',
    sessions: ['Problem validation', 'Discovery', 'Value prop', 'Assumptions'],
  },
  {
    num: '02',
    title: 'Viable venture?',
    flag: 'Model',
    sessions: ['Market', 'Competitors', 'Business model', 'Pricing', 'Financials'],
  },
  {
    num: '03',
    title: 'Take it to market?',
    flag: 'Launch',
    sessions: ['Go-to-market', 'Acquisition', 'Early adopters', 'Roadmap', 'Business case'],
  },
];

const MAP = [
  { title: 'Hackathon', sub: 'Ship it', state: 'done' },
  { title: 'Bootcamp', sub: 'Sep 27–29 · You are here', state: 'here' },
  { title: 'Congress', sub: 'Show it · Oct 10', state: 'next' },
];

export const Bootcamp: React.FC = () => {
  const [openDay, setOpenDay] = useState<string | null>('01');

  return (
    <div className="j76-page">
      {/* Blueprint hero — Bootcamp only */}
      <header className="bc-hero">
        <svg className="bc-route-svg" viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true">
          <path d="M -20 260 C 180 250 240 120 400 140 S 640 60 830 90" />
        </svg>
        <div className="bc-hero-inner">
          <span className="bc-badge">Bootcamp · Sep 27–29</span>
          <h1 className="bc-title">
            <span className="stroke">Idea</span> → <span className="bc-u">venture.</span>
          </h1>
          <p className="bc-lead">3 days. Turn prototypes into ventures.</p>
          <div className="bc-pins">
            <span className="bc-pin"><i>01</i> Validate</span>
            <span className="bc-pin"><i>02</i> Model</span>
            <span className="bc-pin"><i>03</i> Launch</span>
          </div>
        </div>
      </header>

      {/* Checkpoints — dashed route accordion */}
      <section className="bc-sect">
        <div className="bc-label">
          <h2>Checkpoints</h2>
          <span>Tap to open</span>
        </div>
        <div className="bc-route">
          {DAYS.map((day) => {
            const isOpen = openDay === day.num;
            return (
              <Reveal key={day.num}>
                <div className="bc-check" data-open={isOpen}>
                  <span className="bc-node" aria-hidden="true">{day.num}</span>
                  <div className="bc-card">
                    <button
                      type="button"
                      className="bc-card-btn"
                      aria-expanded={isOpen}
                      onClick={() => setOpenDay(isOpen ? null : day.num)}
                    >
                      <span className="bc-flag">{day.flag}</span>
                      <span>
                        <b>{day.title}</b>
                        <small>{day.sessions.length} stops</small>
                      </span>
                      <ChevronDown size={18} className="bc-chev" aria-hidden="true" />
                    </button>
                    <div className="bc-drop">
                      <div>
                        <div className="bc-stops">
                          {day.sessions.map((s) => (
                            <span key={s} className="bc-stop">
                              <Check size={13} /> {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* TBA dossiers — shimmer file cards */}
      <section className="bc-sect">
        <div className="bc-label">
          <h2>Guides</h2>
          <span>7 · TBA</span>
        </div>
        <div className="bc-grid">
          {Array.from({ length: 7 }, (_, i) => (
            <Reveal key={i} delay={i * 45}>
              <div className="bc-file" data-tab={`D0${(i % 3) + 1}`}>
                <div className="bc-file-ring" aria-hidden="true">
                  <User size={24} />
                </div>
                <b>SEALED</b>
                <span>Guide {(i % 3) + 1} · Day {(i % 3) + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Route map — waypoints */}
      <section className="bc-sect">
        <div className="bc-label">
          <h2>Route</h2>
          <span>Where it leads</span>
        </div>
        <Reveal>
          <div className="bc-map">
            {MAP.map((w) => (
              <div key={w.title} className={`bc-way bc-way--${w.state}`}>
                <div className="bc-way-dot" aria-hidden="true" />
                <b>{w.title}</b>
                <span>{w.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Rule CTA — minimal */}
      <div className="bc-cta">
        <div>
          <h2>Earned at the <span>hackathon.</span></h2>
          <p>Shown on the Congress stage · Oct 10.</p>
        </div>
        <Link to="/hackathon" className="j76-btn j76-btn--ghost">
          View tracks <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
};
