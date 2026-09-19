import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Trophy, CalendarDays, Code2, FlaskConical, Mic } from 'lucide-react';
import { HACKATHON_TRACKS } from '../data/tracks';
import type { HackathonTrack } from '../types';
import ammanImg from '../assets/cities/Amman.2076.png';
import irbidImg from '../assets/cities/Irbid2076.png';
import petraImg from '../assets/cities/Petra2076.png';
import aqabaImg from '../assets/cities/Aqaba.2076.png';
import { CountUp, Marquee, Reveal, SectionHead, SplitTitle, Spotlight, Tilt } from '../components/j76/J76';

const trackImages: Record<string, string | undefined> = {
  'track-amman': ammanImg,
  'track-irbid': irbidImg,
  'track-petra': petraImg,
  'track-aqaba': aqabaImg,
};

const STEPS = [
  { icon: Code2, title: 'Build', text: 'Working prototype. No slideware.' },
  { icon: FlaskConical, title: 'Validate', text: 'Real users. Real evidence.' },
  { icon: Mic, title: 'Pitch', text: 'Live finals. Oct 10, Congress stage.' },
];

export const Hackathon: React.FC = () => {
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
              <Users size={15} /> <b>2–5</b> builders
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

      {/* Bento tracks — bentogrids layout + spotlight + tilt */}
      <section className="j76-sect">
        <SectionHead title={<>Pick your <em>track</em></>} note="1 team · 1 track" />
        <div className="j76-bento">
          {HACKATHON_TRACKS.map((track: HackathonTrack, i: number) => {
            const image = trackImages[track.id];
            return (
              <Reveal key={track.id} delay={i * 70} className="j76-cell">
                <Tilt>
                  <Spotlight className="h-full">
                    <div className="j76-spot">
                      <div className="j76-spot-top">
                        {image && <img src={image} alt="" loading="lazy" />}
                        <div className="j76-spot-tag">
                          <span className="j76-tag">{track.site} 2076</span>
                        </div>
                      </div>
                      <div className="j76-spot-body">
                        <h3 className="j76-spot-title">{track.title.replace('Innovation in ', '')}</h3>
                        <p className="j76-spot-sub">{track.coordinates}</p>
                        <div className="j76-spot-foot">
                          <span className="j76-price">{track.prize.split('+')[0].trim()}</span>
                          <span className="j76-go">{track.signalCode}</span>
                        </div>
                      </div>
                    </div>
                  </Spotlight>
                </Tilt>
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
              <CountUp to={5} />
            </div>
            <div className="j76-stat-unit" aria-hidden="true" />
            <span className="j76-stat-label">max per team</span>
          </div>
          <div className="j76-stat">
            <div className="j76-stat-value">
              <CountUp to={1} />
            </div>
            <div className="j76-stat-unit">stage</div>
            <span className="j76-stat-label">live finals · Oct 10</span>
          </div>
        </div>
      </section>

      {/* 3-step path — minimal text */}
      <section className="j76-sect">
        <SectionHead title={<>Build → <em>pitch</em></>} note="3 moves" />
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
