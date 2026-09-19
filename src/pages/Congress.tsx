import React, { useState } from 'react';
import { MapPin, CalendarDays, Users, Cpu, Wrench, Rocket, Atom, Check, Flag } from 'lucide-react';
import { SPEAKERS_DATA } from '../data/speakers';
import { AGENDA_DATA } from '../data/agenda';
import type { Speaker, AgendaItem } from '../types';
import { CountUp, Reveal, useInView } from '../components/j76/J76';

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
    span: '08:30 – 11:30',
    itemIds: ['ag-0830', 'ag-0930', 'ag-1030', 'ag-1130'],
    consequence: 'One room, one baseline — the day\u2019s story is set.',
  },
  {
    id: 'transformation',
    num: '02',
    title: 'The Transformation',
    span: '12:30 – 15:00',
    itemIds: ['ag-1230', 'ag-1310', 'ag-1320', 'ag-1400', 'ag-1440', 'ag-1500'],
    consequence: 'Tracks closed, finalists judged — the shortlist is ready.',
  },
  {
    id: 'future',
    num: '03',
    title: 'The Future',
    span: '15:40 – 17:00',
    itemIds: ['ag-1540', 'ag-1640', 'ag-1700'],
    consequence: 'Winners on stage — next steps leave the building.',
  },
];

const TRACK_TABS = [
  { id: 'ai', icon: Cpu, title: 'AI', text: 'Agents & sovereign systems.', slot: '12:30', sessions: ['AI agents 101', 'AI agents for Jordan 2076'] },
  { id: 'eng', icon: Wrench, title: 'Engineering', text: 'Systems + agentic workflows.', slot: '12:30', sessions: ['Engineering mindset', 'Agentic engineering'] },
  { id: 'start', icon: Rocket, title: 'Startups', text: 'Prototype → venture.', slot: '13:20', sessions: ['Design thinking', 'Idea to impact'] },
  { id: 'emerge', icon: Atom, title: 'Emerging', text: 'Quantum · twins · infra.', slot: '13:20', sessions: ['Quantum + AI', 'Digital twins'] },
];

const PANELS = [
  { id: 'P1', title: 'Builders panel', sub: 'Next economy', ids: ['spk-rami', 'spk-nour', 'spk-hamdi'] },
  { id: 'P2', title: 'Execution panel', sub: 'Vision → execution', ids: ['spk-ibrahim', 'spk-ghaith', 'spk-eyad', 'spk-sinan'] },
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
  const [tab, setTab] = useState('ai');

  const keynotes = SPEAKERS_DATA.filter((s: Speaker) => s.session === 'keynote');
  const active = TRACK_TABS.find((t) => t.id === tab) ?? TRACK_TABS[0];

  const byId = new Map(AGENDA_DATA.map((item: AgendaItem) => [item.id, item]));
  const activePhase = PHASES.find((p) => p.id === phase) ?? PHASES[0];
  const phaseItems = activePhase.itemIds
    .map((id) => byId.get(id))
    .filter((item): item is (typeof AGENDA_DATA)[number] => Boolean(item));

  return (
    <div className="j76-page">
      {/* Stage-light hero — Congress only */}
      <header className="cg-hero">
        <span className="cg-beam cg-beam--l" aria-hidden="true" />
        <span className="cg-beam cg-beam--r" aria-hidden="true" />
        <span className="cg-floor" aria-hidden="true" />
        <span className="cg-truss" aria-hidden="true" />
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
            <span className="cg-stub"><CalendarDays size={14} /> <b>Oct 10</b>&nbsp;08:30–17:30</span>
            <span className="cg-stub"><MapPin size={14} /> UJ Academy</span>
            <span className="cg-stub"><Users size={14} /> <b>400</b>&nbsp;seats</span>
          </div>
        </div>
      </header>

      {/* Keynotes — editorial feature rows */}
      <section className="cg-sect">
        <div className="cg-mast">
          <span className="cg-mast-num">01</span>
          <h2>Keynotes</h2>
          <span className="cg-mast-note">Main stage · 10:30</span>
        </div>
        {keynotes.map((s: Speaker, i: number) => (
          <Reveal key={s.id}>
            <article className="cg-feature">
              <span className="cg-index" aria-hidden="true">0{i + 1}</span>
              <div className="cg-photo">
                <img src={s.avatar} alt="" loading="lazy" />
                <span className="cg-live">10:30 · Live</span>
              </div>
              <div className="cg-who">
                <b>{s.name}</b>
                <span>{s.role} · {s.organization}</span>
                <p className="cg-talk">{s.keynoteTitle}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Tracks — tab switcher */}
      <section className="cg-sect">
        <div className="cg-mast">
          <span className="cg-mast-num">02</span>
          <h2>Tracks</h2>
          <span className="cg-mast-note">Pick a room</span>
        </div>
        <div className="cg-tabs" role="tablist" aria-label="Congress tracks">
          {TRACK_TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className="cg-tab"
              onClick={() => setTab(t.id)}
            >
              <t.icon size={15} /> {t.title}
            </button>
          ))}
        </div>
        <div className="cg-panel" key={active.id}>
          <div>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
            <div className="cg-sessions">
              {active.sessions.map((s: string) => (
                <span key={s} className="cg-session">{s}</span>
              ))}
            </div>
          </div>
          <div className="cg-slot">{active.slot}<small>Block</small></div>
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
              <span className="cg-ghost" aria-hidden="true">14:40</span>
              <h3>Time travel — Jordan 2076</h3>
              <p>20-minute jump to 2076.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="cg-moment">
              <span className="cg-live">Debate</span>
              <span className="cg-ghost" aria-hidden="true">16:40</span>
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
            return (
              <div className="cg-row" key={panel.id}>
                <span className="cg-row-id">{panel.id}</span>
                <div>
                  <h3>{panel.title}</h3>
                  <small>{panel.sub} · {people.map((p: Speaker) => p.name).join(' · ')}</small>
                </div>
                <div className="cg-faces">
                  {people.map((p: Speaker) => (
                    <img key={p.id} src={p.avatar} alt={p.name} title={`${p.name} · ${p.organization}`} loading="lazy" />
                  ))}
                  <span>{people.length} voices</span>
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

      {/* Ticket — Congress only */}
      <div className="cg-ticket">
        <div className="cg-ticket-main">
          <h2>One day. One stage.</h2>
          <p>400 seats. Builders, students, founders.</p>
        </div>
        <div className="cg-perf" aria-hidden="true" />
        <div className="cg-stub-part">
          <span>Admit</span>
          <b>OCT 10</b>
          <span>UJA · Amman</span>
        </div>
      </div>
    </div>
  );
};
