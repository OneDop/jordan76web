import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const DAYS = [
  {
    num: '01',
    title: 'Validation and customer discovery',
    summary:
      'Test the core assumptions, map the user’s problem space, and write a value proposition that survives real feedback.',
    sessions: [
      'Idea validation and customer discovery frameworks',
      'Value proposition design and problem–solution fit',
      'User interview protocols and rapid feedback synthesis',
    ],
    deliverable:
      'An assumption map, one customer persona, and a first draft of the business model canvas.',
  },
  {
    num: '02',
    title: 'Market architecture and financial logic',
    summary:
      'Size the addressable market, read the competition honestly, and build unit economics that hold up.',
    sessions: [
      'TAM, SAM, SOM sizing and competitive moats',
      'Startup financial planning, pricing, and unit economics',
      'Twelve-month break-even projection and capital logic',
    ],
    deliverable:
      'A market size breakdown, a competitor positioning matrix, and a twelve-month break-even projection.',
  },
  {
    num: '03',
    title: 'Go-to-market and investment readiness',
    summary:
      'Design acquisition channels that scale, run a fast pilot experiment, and work out how much capital the plan actually needs.',
    sessions: [
      'Go-to-market strategy and channel validation',
      'Growth funnel architecture and pilot experiment design',
      'The venture funding landscape and capital structuring',
    ],
    deliverable:
      'A ninety-day execution roadmap, one acquisition funnel experiment, and a use-of-funds breakdown.',
  },
  {
    num: '04',
    title: 'Venture storytelling and pitch showcase',
    summary:
      'Turn the technical architecture into a narrative an investor can follow, then rehearse it in front of mentors.',
    sessions: [
      'Executive storytelling and pitch deck architecture',
      'Live rehearsals, mentor feedback, and Q&A preparation',
      'Congress finalist selection and stage accreditation',
    ],
    deliverable:
      'A final ten-slide venture deck and a place in the congress finals on 10 October.',
  },
];

export const Bootcamp: React.FC = () => {
  const [openDay, setOpenDay] = useState<string | null>('01');

  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title">From solution to venture.</h1>

        <p className="doc-lead">
          A four-day venture development intensive. Qualifying hackathon teams stress-test customer
          demand, structure the business logic behind their build, and sharpen the pitch they will
          give on the congress main stage.
        </p>

        <div className="spec">
          <div className="spec-item">
            <span className="spec-k">Dates</span>
            <span className="spec-v">
              13–16 September 2026
              <small>Four consecutive days</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Daily hours</span>
            <span className="spec-v">
              10:00 – 16:00
              <small>Sessions, mentoring, and studio time</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Venue</span>
            <span className="spec-v">
              University of Jordan
              <small>UJ Academy, Amman</small>
            </span>
          </div>
        </div>
      </header>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">The four days</h2>
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
                        <div className="block-sub">Core sessions</div>
                        <ul className="block-list" style={{ borderTop: 0, paddingTop: 0 }}>
                          {day.sessions.map((session) => (
                            <li key={session}>{session}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="block-sub">What you leave with</div>
                        <p className="block-text">{day.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="band">
        <div>
          <h2 className="band-title">Advancing to the congress stage</h2>
          <p className="band-text">
            Teams that complete day four pitch live in the congress finals on 10 October. Places are
            earned through the hackathon.
          </p>
        </div>
        <Link to="/hackathon" className="btn-cyber-outline">
          View hackathon tracks
        </Link>
      </div>
    </div>
  );
};
