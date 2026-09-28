import React, { useState } from 'react';
import { MapPin, CalendarDays, Users, Check, Flag, Eye, ArrowUpRight } from 'lucide-react';
import { SPEAKERS_DATA } from '../data/speakers';
import { AGENDA_DATA } from '../data/agenda';
import { CONGRESS_REGISTRATION_URL } from '../data/registration';
import type { Speaker, AgendaItem } from '../types';
import { CountUp, Reveal, useInView } from '../components/j76/J76';
import { SpeakerBioModal } from '../components/SpeakerBioModal';

type PhaseId = 'foundation' | 'transformation' | 'future';

const PHASES: {
  id: PhaseId;
  num: string;
  title: string;
  span: string;
  itemIds: string[];
  consequence: string;
}[] = [
    {
      id: 'foundation',
      num: '01',
      title: 'The Foundation',
      span: '08:30 – 15:10',
      itemIds: ['ag-0830', 'ag-0930', 'ag-1030', 'ag-1100', 'ag-1130', 'ag-1230', 'ag-1330', 'ag-1430'],
      consequence: 'From morning registration to keynotes, parallel tracks, and digital transformation.',
    },
    {
      id: 'transformation',
      num: '02',
      title: 'The Transformation',
      span: '15:10 – 15:30',
      itemIds: ['ag-1510'],
      consequence: 'Time travel experience connecting foundations, present transformation, and future vision.',
    },
    {
      id: 'future',
      num: '03',
      title: 'The Future',
      span: '15:30 – 18:10',
      itemIds: ['ag-1530', 'ag-1610', 'ag-1710', 'ag-1730'],
      consequence: 'Next economy builders, high-stakes debate, and hackathon winners revealed.',
    },
  ];

const CONGRESS_TRACKS = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    partner: 'EY',
    session1: 'AI Agents 101',
    session2: 'AI Agents for Jordan 2076',
  },
  {
    id: 'eng',
    title: 'Software Engineering',
    partner: 'Estarta',
    session1: 'The Software Engineering Mindset',
    session2: 'Agentic Software Engineering',
  },
  {
    id: 'semi',
    title: 'Semiconductors',
    partner: 'Fifth',
    session1: 'Sessions to be announced',
    session2: 'Sessions to be announced',
  },
  {
    id: 'innov',
    title: 'Innovation & Entrepreneurship',
    partner: 'UJIEC / INJAZ',
    session1: 'Design Thinking Foundations',
    session2: 'From Idea to Impact',
  },
];

const PANELS = [
  {
    id: 'P1',
    title: 'Jordan 2076 Digital Transformation',
    sub: 'From Vision to Execution',
    ids: ['spk-ibrahim', 'spk-ghaith', 'spk-damati'],
    moderator: 'Eng. Lana Al-Adaileh',
    moderatorId: 'spk-lana',
  },
  {
    id: 'P2',
    title: 'Jordan 2076 Builders',
    sub: 'Innovation, Startups & Jordan’s Next Economy',
    ids: ['spk-rami', 'spk-nour', 'spk-hamdi', 'spk-alsaif'],
    moderator: 'Hana Ziyad',
    moderatorId: 'spk-hana',
  },
];

/* Programme journey stop — ReactBits-style scroll trigger + cursor spotlight.
   Each stop lights up once when scrolled into view; a glow follows the pointer. */
const JStop: React.FC<{ item: AgendaItem; index: number }> = ({ item, index }) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const glow = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={glow}
      style={{ ['--s' as string]: `${Math.min(index, 7) * 80}ms` }}
      className={`cg-jstop${inView ? ' is-on' : ''}`}
    >
      <span className="cg-jpin" aria-hidden="true"><i /></span>
      <div className="cg-jcard">
        <time>{item.time}</time>
        <div className="cg-jbody">
          <b>{item.title}</b>
          <p>{item.description}</p>
          {item.location !== '—' && <span className="cg-jwhere">{item.location}</span>}
        </div>
        <span className="cg-jseq" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export const Congress: React.FC = () => {
  const [phase, setPhase] = useState<PhaseId>('foundation');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const keynotes = SPEAKERS_DATA.filter((s: Speaker) => s.session === 'keynote');

  const byId = new Map(AGENDA_DATA.map((item: AgendaItem) => [item.id, item]));
  const activePhase = PHASES.find((p) => p.id === phase) ?? PHASES[0];
  const phaseItems = activePhase.itemIds
    .map((id) => byId.get(id))
    .filter((item): item is (typeof AGENDA_DATA)[number] => Boolean(item));

  return (
    <div className="j76-page">
      {/* Cyber HUD Hero — Jordan 2076 Theme */}
      <header className="cg-hero">
        <div className="cg-hero-grid" aria-hidden="true" />
        <div className="cg-hero-glow" aria-hidden="true" />
        <span className="cg-corner cg-corner--tl" aria-hidden="true" />
        <span className="cg-corner cg-corner--tr" aria-hidden="true" />
        <span className="cg-corner cg-corner--bl" aria-hidden="true" />
        <span className="cg-corner cg-corner--br" aria-hidden="true" />
        <div className="cg-hero-inner">
          <span className="cg-kicker">
            <i /> Congress · One day · One stage
          </span>
          <h1 className="cg-title">
            <span className="cg-line"><span style={{ ['--i' as string]: 0 }}>From foundations</span></span>
            <span className="cg-line"><span style={{ ['--i' as string]: 1 }}>to the future.</span></span>
          </h1>
          <p className="cg-sub">Builders, founders & funders — same room.</p>
          <div className="cg-stubs">
            <span className="cg-stub"><CalendarDays size={15} /> <b>Oct 10</b>&nbsp;·&nbsp;08:30–18:10</span>
            <span className="cg-stub"><MapPin size={15} /> UJ Academy</span>
            <span className="cg-stub"><Users size={15} /> <b>400</b>&nbsp;seats</span>
          </div>
          <div className="cg-hero-cta">
            <a
              href={CONGRESS_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cg-btn-apply"
            >
              <span>Apply for Congress Pass</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Keynotes — editorial feature rows */}
      <section className="cg-sect">
        <div className="cg-mast">
          <span className="cg-mast-num">01</span>
          <h2>Keynotes</h2>
          <span className="cg-mast-note">Main stage · 10:30 &amp; 11:00</span>
        </div>
        {keynotes.map((s: Speaker, i: number) => (
          <Reveal key={s.id}>
            <article className="cg-feature">
              <span className="cg-index" aria-hidden="true">0{i + 1}</span>
              <div
                className="cg-photo cg-photo--clickable"
                onClick={() => setSelectedSpeaker(s)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedSpeaker(s); }}
                title={`Click to view ${s.name}'s biography`}
              >
                <img src={s.avatar} alt={s.name} loading="lazy" />
                <span className="cg-live">{s.timeSlot ?? (i === 0 ? '10:30 · Live' : '11:00 · Live')}</span>
                <span className="cg-bio-hint">
                  <Eye size={13} /> View Bio
                </span>
              </div>
              <div className="cg-who">
                <b
                  className="cg-who-name-clickable"
                  onClick={() => setSelectedSpeaker(s)}
                  title={`Click to view ${s.name}'s biography`}
                >
                  {s.name}
                </b>
                <span>{s.role} · {s.organization}</span>
                <p className="cg-talk">{s.keynoteTitle}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Tracks — Modern Timetable Grid with glowing corners */}
      <section className="cg-sect">
        <div className="cg-mast">
          <span className="cg-mast-num">02</span>
          <h2>Tracks</h2>
          <span className="cg-mast-note">Parallel sessions · Simultaneous tracks</span>
        </div>

        <div className="cg-timetable-wrapper">
          <div className="cg-timetable-scroll">
            <table className="cg-timetable">
              <thead>
                <tr>
                  <th className="cg-th-slot">
                    <span className="cg-slot-head">Timeline</span>
                  </th>
                  {CONGRESS_TRACKS.map((t) => (
                    <th key={t.id} className="cg-th-track">
                      <div className="cg-track-col-header">
                        <span className="cg-track-partner">
                          <span className="cg-partner-by">Partner</span>
                          <b className="cg-partner-name">{t.partner}</b>
                        </span>
                        <h4 className="cg-track-col-title">{t.title}</h4>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Session 01 (Simultaneous) */}
                <tr className="cg-tr-session">
                  <td className="cg-td-slot">
                    <span className="cg-slot-ghost" aria-hidden="true">01</span>
                    <div className="cg-slot-content">
                      <span className="cg-slot-name">
                        <span className="cg-slot-dot" aria-hidden="true" />
                        Session 01
                      </span>
                      <span className="cg-slot-desc">Concurrent</span>
                    </div>
                  </td>
                  {CONGRESS_TRACKS.map((t) => {
                    const isTba = t.session1.toLowerCase().includes('announced');
                    return (
                      <td key={`${t.id}-s1`} className={`cg-td-session${isTba ? ' is-tba' : ''}`}>
                        <span className="cg-session-title">{t.session1}</span>
                      </td>
                    );
                  })}
                </tr>

                {/* Break Row (10 minutes) */}
                <tr className="cg-tr-break">
                  <td colSpan={5}>
                    <div className="cg-break-row">
                      <span className="cg-break-line" aria-hidden="true" />
                      <div className="cg-break-pill">
                        <span className="cg-break-pulse" aria-hidden="true" />
                        <span className="cg-break-text">10-Minute Transition &amp; Hall Change</span>
                      </div>
                      <span className="cg-break-line" aria-hidden="true" />
                    </div>
                  </td>
                </tr>

                {/* Row 2: Session 02 (Simultaneous) */}
                <tr className="cg-tr-session">
                  <td className="cg-td-slot">
                    <span className="cg-slot-ghost" aria-hidden="true">02</span>
                    <div className="cg-slot-content">
                      <span className="cg-slot-name">
                        <span className="cg-slot-dot" aria-hidden="true" />
                        Session 02
                      </span>
                      <span className="cg-slot-desc">Concurrent</span>
                    </div>
                  </td>
                  {CONGRESS_TRACKS.map((t) => {
                    const isTba = t.session2.toLowerCase().includes('announced');
                    return (
                      <td key={`${t.id}-s2`} className={`cg-td-session${isTba ? ' is-tba' : ''}`}>
                        <span className="cg-session-title">{t.session2}</span>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Signature moments — ghost-time duo */}
      <section className="cg-sect">
        <div className="cg-mast">
          <span className="cg-mast-num">03</span>
          <h2>Moments</h2>
          <span className="cg-mast-note">Don&apos;t blink</span>
        </div>
        <div className="cg-duo">
          <Reveal>
            <div className="cg-moment">
              <span className="cg-live">Main stage</span>
              <span className="cg-ghost" aria-hidden="true">15:10</span>
              <h3>Time travel — Jordan 2076</h3>
              <p>20-minute jump to 2076.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="cg-moment">
              <span className="cg-live">Debate</span>
              <span className="cg-ghost" aria-hidden="true">17:10</span>
              <h3>NeuraChip — human vs machine?</h3>
              <p>Two views. Audience in.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Panels — roster rows */}
      <section className="cg-sect">
        <div className="cg-mast">
          <span className="cg-mast-num">04</span>
          <h2>Panels</h2>
          <span className="cg-mast-note">2 panels</span>
        </div>
        <div className="cg-roster">
          {PANELS.map((panel) => {
            const people = SPEAKERS_DATA.filter((s: Speaker) => panel.ids.includes(s.id));
            const mod = SPEAKERS_DATA.find((s: Speaker) => s.id === panel.moderatorId);
            return (
              <div className="cg-row" key={panel.id}>
                <span className="cg-row-id">{panel.id}</span>
                <div>
                  <h3>{panel.title}</h3>
                  <small>
                    <b>{panel.sub}</b> · {people.map((p: Speaker) => p.name).join(' · ')}
                    {panel.moderator && <> · <span style={{ color: 'var(--color-neon-cyan)' }}>Mod: {panel.moderator}</span></>}
                  </small>
                </div>
                <div className="cg-faces">
                  {people.map((p: Speaker) => (
                    <img
                      key={p.id}
                      src={p.avatar}
                      alt={p.name}
                      title={`${p.name} · ${p.organization} (Click for Bio)`}
                      className="cg-face-clickable"
                      onClick={() => setSelectedSpeaker(p)}
                      loading="lazy"
                    />
                  ))}
                  {mod && (
                    <img
                      key={mod.id}
                      src={mod.avatar}
                      alt={mod.name}
                      title={`Moderator: ${mod.name} (Click for Bio)`}
                      className="cg-face-clickable cg-face-mod"
                      onClick={() => setSelectedSpeaker(mod)}
                      style={{ outline: '2px solid var(--color-neon-cyan)', outlineOffset: '1px' }}
                      loading="lazy"
                    />
                  )}
                  <span>{people.length + (mod ? 1 : 0)} voices</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Programme — animated journey */}
      <section className="cg-sect">
        <div className="cg-mast">
          <span className="cg-mast-num">05</span>
          <h2>Programme</h2>
          <span className="cg-mast-note">1 route · 3 phases</span>
        </div>

        {/* Journey map — phase checkpoints */}
        <div className="cg-jmap" role="group" aria-label="Programme phases">
          {PHASES.map((p, pi) => {
            const activeIdx = PHASES.findIndex((x) => x.id === phase);
            const done = pi < activeIdx;
            const current = pi === activeIdx;
            return (
              <React.Fragment key={p.id}>
                {pi > 0 && <span className="cg-jlink" data-on={pi <= activeIdx} aria-hidden="true" />}
                <button
                  type="button"
                  className="cg-jnode"
                  aria-pressed={current}
                  data-done={done}
                  onClick={() => setPhase(p.id)}
                >
                  <span className="cg-jdot" aria-hidden="true">
                    {done ? <Check size={14} strokeWidth={3} /> : p.num}
                  </span>
                  <span className="cg-jlabel">
                    <b>Phase {p.num} · {p.title}</b>
                    <small>{p.span} · {p.itemIds.length} stops</small>
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Journey path — stops light up on scroll, signal flows down the rail */}
        <div className="cg-jpath" key={activePhase.id}>
          <span className="cg-jrail" aria-hidden="true"><span className="cg-jsignal" /></span>
          {phaseItems.map((item: AgendaItem, i: number) => (
            <JStop key={item.id} item={item} index={i} />
          ))}
          <div className="cg-jdest">
            <span className="cg-jflag" aria-hidden="true"><Flag size={15} /></span>
            <div>
              <b>Destination — {activePhase.title}</b>
              <p>{activePhase.consequence}</p>
            </div>
            <span className="cg-jcount"><CountUp to={phaseItems.length} /><small>stops</small></span>
          </div>
        </div>
      </section>

      {/* Ticket — Congress Registration */}
      <a
        href={CONGRESS_REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cg-ticket"
        title="Apply for Congress Day Pass"
      >
        <div className="cg-ticket-main">
          <h2>One day. One stage.</h2>
          <p>400 seats. Builders, students, founders — Apply for your pass.</p>
          <span className="cg-ticket-cta">
            Apply Now <ArrowUpRight size={14} />
          </span>
        </div>
        <div className="cg-perf" aria-hidden="true" />
        <div className="cg-stub-part">
          <span>Apply</span>
          <b>OCT 10</b>
          <span>UJA · Amman</span>
        </div>
      </a>

      {/* Speaker Biography Popup Modal */}
      <SpeakerBioModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  );
};
