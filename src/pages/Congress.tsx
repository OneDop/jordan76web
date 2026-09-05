import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SPEAKERS_DATA } from '../data/speakers';
import { AGENDA_DATA } from '../data/agenda';

interface PageContext {
  openRegister: () => void;
}

type Filter = 'all' | 'stage' | 'tracks' | 'signature';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Full day' },
  { id: 'stage', label: 'Keynotes and panels' },
  { id: 'tracks', label: 'Tracks and finals' },
  { id: 'signature', label: 'Signature moments' },
];

const TRACKS = [
  {
    title: 'Artificial intelligence',
    text: 'Agent systems, multi-agent frameworks, and what sovereign intelligent infrastructure would take.',
    sessions: ['AI agents 101', 'AI agents for Jordan 2076'],
  },
  {
    title: 'Software engineering',
    text: 'Modern practice, a systems mindset, and how agentic workflows change the day job.',
    sessions: ['The software engineering mindset', 'Agentic software engineering'],
  },
  {
    title: 'Innovation and startups',
    text: 'Product thinking and the awkward crossing from prototype to venture.',
    sessions: ['Design thinking foundations', 'From idea to impact'],
  },
  {
    title: 'Emerging technologies',
    text: 'Quantum computing fundamentals, digital twins, and municipal infrastructure.',
    sessions: ['Quantum computing and AI', 'Digital twins: Jordan 2076'],
  },
];

const PANELS = [
  {
    title: 'Panel I — Jordan 2076 builders',
    subtitle: 'Innovation, startups, and Jordan’s next economy',
    ids: ['spk-rami', 'spk-nour', 'spk-hamdi'],
  },
  {
    title: 'Panel II — Digital transformation',
    subtitle: 'From vision to execution',
    ids: ['spk-ibrahim', 'spk-ghaith', 'spk-eyad', 'spk-sinan'],
  },
];

export const Congress: React.FC = () => {
  const { openRegister } = useOutletContext<PageContext>();
  const [filter, setFilter] = useState<Filter>('all');

  const keynotes = SPEAKERS_DATA.filter((s) => s.session === 'keynote');

  const agenda = AGENDA_DATA.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'stage')
      return /Keynote|Panel|Ceremony/.test(item.title);
    if (filter === 'tracks') return /Track|Finals/.test(item.title);
    return /Time Travel|Debate/.test(item.title);
  });

  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title">From foundations to the future.</h1>

        <p className="doc-lead">
          The national flagship gathering: one day that puts students, researchers, engineers,
          founders, and the people who fund and govern them in the same building.
        </p>

        <div className="spec">
          <div className="spec-item">
            <span className="spec-k">Date</span>
            <span className="spec-v">
              Saturday, 10 October 2026
              <small>08:30 – 17:30 AST</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Venue</span>
            <span className="spec-v">
              University of Jordan Academy
              <small>Amman, Jordan</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Delegates</span>
            <span className="spec-v">
              350–400
              <small>Registration required</small>
            </span>
          </div>
        </div>
      </header>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Keynotes</h2>
          <span className="sect-note">Main auditorium, 10:30</span>
        </div>

        <div className="rows">
          {keynotes.map((speaker) => (
            <div className="person" key={speaker.id}>
              <img className="person-photo" src={speaker.avatar} alt="" />
              <div>
                <div className="person-name">{speaker.name}</div>
                <div className="person-role">
                  {speaker.role}, {speaker.organization}
                </div>
                <p className="person-talk">{speaker.keynoteTitle}</p>
                <p className="person-bio">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Leadership panels</h2>
        </div>

        <div className="blocks">
          {PANELS.map((panel) => (
            <div key={panel.title}>
              <h3 className="block-title">{panel.title}</h3>
              <div className="block-sub">{panel.subtitle}</div>
              <div style={{ marginTop: '1.1rem' }}>
                {SPEAKERS_DATA.filter((s) => panel.ids.includes(s.id)).map((person) => (
                  <div className="person person--compact" key={person.id}>
                    <img className="person-photo" src={person.avatar} alt="" />
                    <div>
                      <div className="person-name">{person.name}</div>
                      <div className="person-role">{person.organization}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Track sessions</h2>
          <span className="sect-note">Two parallel blocks, 12:30 and 13:20</span>
        </div>

        <div className="blocks blocks--pair">
          {TRACKS.map((track) => (
            <div key={track.title}>
              <h3 className="block-title">{track.title}</h3>
              <p className="block-text">{track.text}</p>
              <ul className="block-list">
                {track.sessions.map((session) => (
                  <li key={session}>{session}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Signature moments</h2>
        </div>

        <div className="blocks">
          <div>
            <h3 className="block-title">Time travel experience</h3>
            <div className="block-sub">Twenty minutes, main auditorium</div>
            <p className="block-text">
              A curated audio-visual journey through Jordan in 2076: digital corridors, clean energy
              networks, and the industries that grow around them.
            </p>
          </div>

          <div>
            <h3 className="block-title">The NeuraChip debate</h3>
            <div className="block-sub">Moderated, two perspectives</div>
            <p className="block-text">
              Where do humans end and technology begin? An argument about the opportunities, the
              ethics, and the boundaries of human augmentation, with the audience in it.
            </p>
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Programme</h2>
          <div className="tabs">
            {FILTERS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className="tab"
                aria-pressed={filter === tab.id}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="timetable">
          {agenda.map((item) => (
            <div className="slot" key={item.id}>
              <div className="slot-time">{item.time}</div>
              <div>
                <div className="slot-title">{item.title}</div>
                <p className="slot-text">{item.description}</p>
                {item.location !== '—' && <div className="slot-where">{item.location}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="band">
        <div>
          <h2 className="band-title">Reserve your congress pass</h2>
          <p className="band-text">
            The room holds 350–400 people across builders, founders, students, and industry. Passes
            are released until it fills.
          </p>
        </div>
        <button onClick={openRegister} className="btn-cyber-primary">
          Register now
        </button>
      </div>
    </div>
  );
};
