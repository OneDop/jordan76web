import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Link2, Compass, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/j76/J76';

const PRINCIPLES = [
  { icon: Eye, term: 'Vision', text: 'Builders architecting Jordan\u2019s future.' },
  { icon: Link2, term: 'Mission', text: 'Talent meets real challenges, mentors, industry.' },
  { icon: Compass, term: 'Theme', text: 'What comes next is built today.' },
];

const OBJECTIVES = [
  'Solutions for Jordan\u2019s priority sectors.',
  'Engineering tied to viable business models.',
  'Modern standards + AI-assisted workflows.',
  'Academia, startups, and industry in one loop.',
  'Dialogue on the next knowledge economy.',
];

const PHASES = [
  { num: '01', name: 'Hackathon', to: '/hackathon', text: 'Build across 4 sector tracks.' },
  { num: '02', name: 'Bootcamp', to: '/bootcamp', text: 'Validate the business case.' },
  { num: '03', name: 'Congress', to: '/congress', text: 'Take it to the flagship stage.' },
];

const TITLE_WORDS = ['What', 'foundations', 'shape', '2076?'];

export const About: React.FC = () => {
  return (
    <div className="j76-page">
      {/* Monument hero — About only */}
      <header className="ab-hero">
        <span className="ab-mark" aria-hidden="true">2076</span>
        <div className="ab-hero-inner">
          <span className="ab-eye">Jordan 2076 · The initiative</span>
          <h1 className="ab-title">
            {TITLE_WORDS.map((w, i) => (
              <span key={w} className="ab-w">
                <span style={{ ['--i' as string]: i }} className={w === '2076?' ? 'hl' : undefined}>
                  {w}
                </span>
                {i < TITLE_WORDS.length - 1 ? '\u00A0' : null}
              </span>
            ))}
          </h1>
          <p className="ab-lead">Build a solution. Prove it holds. Carry it further.</p>
          <div className="ab-facts">
            <div className="ab-fact">
              <b>Hackathon</b>
              <span>4 tracks · 4 cities</span>
            </div>
            <div className="ab-fact">
              <b>Bootcamp</b>
              <span>Sep 27–29 · Venture sprint</span>
            </div>
            <div className="ab-fact">
              <b>Congress</b>
              <span>Oct 10 · UJ Academy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Principles — prism panels */}
      <section className="ab-sect">
        <div className="ab-over">Why we exist</div>
        <h2 className="ab-h">The initiative</h2>
        <div className="ab-rule" aria-hidden="true" />
        <div className="ab-prisms">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.term} delay={i * 70}>
              <div className="ab-prism">
                <span className="ab-medal">
                  <p.icon size={18} />
                </span>
                <h3>{p.term}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Objectives — index rows */}
      <section className="ab-sect">
        <div className="ab-over">What changes</div>
        <h2 className="ab-h">5 aims</h2>
        <div className="ab-rule" aria-hidden="true" />
        <div className="ab-aims">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o} delay={i * 40}>
              <div className="ab-aim">
                <span className="ab-aim-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{o}</p>
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey — linked path */}
      <section className="ab-sect">
        <div className="ab-over">How it flows</div>
        <h2 className="ab-h">One journey</h2>
        <div className="ab-rule" aria-hidden="true" />
        <Reveal>
          <div className="ab-path">
            {PHASES.map((ph) => (
              <Link key={ph.name} to={ph.to} className="ab-stop">
                <span className="ab-stop-num" aria-hidden="true">{ph.num}</span>
                <b>
                  {ph.name} <ArrowUpRight size={15} />
                </b>
                <span>{ph.text}</span>
                <small>Details</small>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Sign-off — centered */}
      <div className="ab-sign">
        <h2>
          The future is <span>built.</span>
        </h2>
        <p>Oct 10 · University of Jordan Academy · 350–400 delegates.</p>
        <Link to="/congress">
          See the congress <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};
