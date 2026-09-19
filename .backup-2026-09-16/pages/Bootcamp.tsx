import React, { useState } from 'react';
import { ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const DAYS = [
  {
    num: '01',
    title: 'Is this a real opportunity?',
    summary:
      'Teams will explore problem validation, customer and user understanding, key assumptions, and value proposition.',
    sessions: [
      'Problem & Opportunity Validation',
      'Customer Discovery',
      'Value Proposition',
      'Testing Assumptions',
    ],
  },
  {
    num: '02',
    title: 'Can this become a viable venture?',
    summary:
      'Teams will examine the market opportunity, competitive landscape, business model, pricing, costs, and financial viability of their solutions.',
    sessions: [
      'Market Opportunity',
      'Competitor Analysis',
      'Business Models',
      'Pricing & Revenue',
      'Financial Viability',
    ],
  },
  {
    num: '03',
    title: 'How do we take it to market?',
    summary:
      'Teams will define their initial go-to-market approach, identify early adopters and acquisition channels, and bring their business case together.',
    sessions: [
      'Go-to-Market Strategy',
      'Customer Acquisition',
      'Early Adopters & Channels',
      'Execution Roadmap',
      'Business Case',
    ],
  },
];

// Placeholder slots — replace with confirmed speaker photo, name, role and bio.
const BOOTCAMP_SPEAKERS = Array.from({ length: 7 }, (_, i) => ({
  id: `bootcamp-speaker-${i + 1}`,
  name: 'To be announced',
  role: 'Bootcamp speaker',
  bio: 'Photo and bio will be published once the speaker is confirmed.',
}));

export const Bootcamp: React.FC = () => {
  const [openDay, setOpenDay] = useState<string | null>('01');

  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title">Jordan 2076 Bootcamp</h1>

        <p className="doc-lead">
          27–29 September 2026 · Business · Entrepreneurship · Innovation — Turning Solutions into
          Opportunities.
        </p>
        <p className="block-text" style={{ marginTop: '1rem' }}>
          Across three days, teams will explore the business, entrepreneurial, and market
          dimensions of their Hackathon solutions through expert-led sessions, practical guidance,
          and applied challenges.
        </p>

        <div className="spec">
          <div className="spec-item">
            <span className="spec-k">Dates</span>
            <span className="spec-v">
              27–29 September 2026
              <small>Three days</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Focus</span>
            <span className="spec-v">
              Business · Entrepreneurship · Innovation
              <small>Expert-led sessions</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Format</span>
            <span className="spec-v">
              Practical guidance
              <small>Applied challenges</small>
            </span>
          </div>
        </div>
      </header>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Three Days. Three Key Questions.</h2>
          <span className="sect-note">Select a day to see its sessions</span>
        </div>

        <div className="rows">
          {DAYS.map((day) => {
            const isOpen = openDay === day.num;
            return (
              <div className="step" key={day.num} data-open={isOpen}>
                <button
                  type="button"
                  className="step-btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDay(isOpen ? null : day.num)}
                >
                  <span className="step-num">{day.num}</span>
                  <span>
                    <span className="step-title">{day.title}</span>
                    <span className="step-summary" style={{ display: 'block' }}>
                      {day.summary}
                    </span>
                  </span>
                  <ChevronDown size={18} className="step-chev" aria-hidden="true" />
                </button>

                <div className="step-panel">
                  <div>
                    <div className="step-panel-inner">
                      <div>
                        <div className="block-sub">Sessions</div>
                        <ul className="block-list" style={{ borderTop: 0, paddingTop: 0 }}>
                          {day.sessions.map((session) => (
                            <li key={session}>{session}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Bootcamp speakers</h2>
          <span className="sect-note">~7 speakers · To be announced</span>
        </div>

        <p className="block-text" style={{ marginBottom: '1.5rem' }}>
          Approximately 7 speakers are expected to participate in the Bootcamp. Photos and bios
          will be published here once the speakers are confirmed.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {BOOTCAMP_SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              style={{
                background: 'rgba(0, 27, 58, 0.6)',
                border: '1px solid rgba(126, 243, 232, 0.22)',
                borderRadius: '12px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.6rem',
              }}
            >
              <div
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  background: 'rgba(126, 243, 232, 0.08)',
                  border: '1px dashed rgba(126, 243, 232, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                <User size={32} color="#7EF3E8" />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  color: '#F5F7F8',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {speaker.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#7EF3E8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {speaker.role}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#B7B9BD', lineHeight: 1.55, margin: 0 }}>
                {speaker.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="band">
        <div>
          <h2 className="band-title">Advancing to the congress stage</h2>
          <p className="band-text">
            Teams that complete the three-day bootcamp carry their business case forward to the
            congress on 10 October. Places are earned through the hackathon.
          </p>
        </div>
        <Link to="/hackathon" className="btn-cyber-outline">
          View hackathon tracks
        </Link>
      </div>
    </div>
  );
};
