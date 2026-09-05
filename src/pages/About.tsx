import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

interface PageContext {
  openRegister: () => void;
}

const PRINCIPLES = [
  {
    term: 'Vision',
    text: 'A generation of builders who use technology, engineering excellence, and entrepreneurship to architect Jordan’s future.',
  },
  {
    term: 'Mission',
    text: 'Connect young talent with real sector challenges, technical mentorship, entrepreneurial frameworks, and industry access through one continuous journey.',
  },
  {
    term: 'Theme',
    text: 'From foundations to the future. What comes next is built on what we lay down today: software architecture, deep-tech skill, venture thinking, and an ecosystem that talks to itself.',
  },
];

const OBJECTIVES = [
  'Enable technology-driven solutions tailored to Jordan’s priority sectors.',
  'Strengthen the bridge between software engineering and viable business models.',
  'Expose young builders to modern engineering standards and AI-assisted workflows.',
  'Foster interaction between academia, startups, and established industry.',
  'Catalyse future-focused dialogue around Jordan’s next knowledge economy.',
];

const PHASES = [
  {
    phase: 'Phase 01',
    name: 'Hackathon',
    to: '/hackathon',
    text: 'Build software solutions across education, healthcare, tourism, and transportation, guided by industry mentors.',
  },
  {
    phase: 'Phase 02',
    name: 'Bootcamp',
    to: '/bootcamp',
    text: 'Validate the business case over four days: customer discovery, unit economics, and go-to-market.',
  },
  {
    phase: 'Phase 03',
    name: 'Congress',
    to: '/congress',
    text: 'Connect builders, experts, companies, and ecosystem partners on the flagship stage in Amman.',
  },
];

export const About: React.FC = () => {
  const { openRegister } = useOutletContext<PageContext>();

  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title doc-title--wide">
          What foundations must we build today to shape Jordan’s future?
        </h1>
        <p className="doc-lead">
          Jordan 2076 connects technology, innovation, entrepreneurship, young talent, and industry
          expertise through one integrated journey: build a solution, validate whether it holds, and
          take it to the people who can carry it further.
        </p>
      </header>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">The initiative</h2>
        </div>

        <div className="rows">
          {PRINCIPLES.map((p) => (
            <div className="row row--pair" key={p.term}>
              <div className="row-kicker">{p.term}</div>
              <p className="row-text" style={{ marginTop: 0 }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">What we aim to achieve</h2>
        </div>

        <div className="rows">
          {OBJECTIVES.map((objective) => (
            <div className="row row--plain" key={objective}>
              {objective}
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">The connected journey</h2>
          <span className="sect-note">Each phase feeds the next</span>
        </div>

        <div className="rows">
          {PHASES.map((phase) => (
            <div className="row" key={phase.name}>
              <div className="row-kicker">{phase.phase}</div>
              <div>
                <div className="row-name">{phase.name}</div>
                <p className="row-text">{phase.text}</p>
              </div>
              <Link to={phase.to} className="textlink">
                Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="band">
        <div>
          <h2 className="band-title">Join us on 10 October 2026</h2>
          <p className="band-text">
            Congress day runs at the University of Jordan Academy in Amman, for 350–400 delegates
            drawn from builders, founders, students, and industry.
          </p>
        </div>
        <button onClick={openRegister} className="btn-cyber-primary">
          Register now
        </button>
      </div>
    </div>
  );
};
