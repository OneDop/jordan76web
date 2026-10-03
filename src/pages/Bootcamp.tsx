import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Check,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { Reveal } from '../components/j76/J76';

import abdullahImg from '../assets/Speakers/Bootcamp/abdullah-alghwairi.jpg';
import ahmadNasrallahImg from '../assets/Speakers/Bootcamp/ahmad-nasrallah.jpg';
import ahmadHattabImg from '../assets/Speakers/Bootcamp/ahmad-hattab.jpg';
import lunaImg from '../assets/Speakers/Bootcamp/luna-kawash.png';
import yazanImg from '../assets/Speakers/Bootcamp/yazan-hatamleh.jpg';
import moatazImg from '../assets/Speakers/Bootcamp/moataz-mukhaimer.jpg';
import ahmadMashallehImg from '../assets/Speakers/Bootcamp/ahmad-mashalleh.jpg';

interface BootcampSpeaker {
  id: string;
  day: number;
  dayLabel: string;
  name: string;
  role: string;
  organization: string;
  topic: string;
  bio: string;
  avatar: string;
}

const BOOTCAMP_SPEAKERS: BootcampSpeaker[] = [
  // DAY 1
  {
    id: 'spk-abdullah',
    day: 1,
    dayLabel: 'Day 01 · Sep 27',
    name: 'Eng. Abdullah A. Alghwairi',
    role: 'CEO',
    organization: 'Kernel for AI & Innovation',
    topic: 'AI-Native Product Development & Opportunity Validation',
    bio: 'AI, product, and innovation leader with 10+ years of experience across technology, business strategy, and digital transformation in the MENA region. As CEO of Kernel for AI & Innovation (Falak Holding), he helps organizations transform AI and data into measurable business value. Abdullah has led 30+ AI consulting and product projects, co-founded three AI & EdTech startups, and holds a Master’s degree from The University of Texas at Austin.',
    avatar: abdullahImg,
  },
  {
    id: 'spk-nasrallah',
    day: 1,
    dayLabel: 'Day 01 · Sep 27',
    name: 'Ahmad Nasrallah',
    role: 'Tech & Venture Lead',
    organization: 'mySTARTUPorg · Injaz',
    topic: 'Problem Validation, Ideation & Value Proposition',
    bio: 'Technology and entrepreneurship professional with deep expertise in startup selection, business development, digital transformation, and technical product leadership. Actively working with mySTARTUPorg and Injaz, guiding young founders and early-stage builders in validating real opportunities and turning ideas into sound venture concepts.',
    avatar: ahmadNasrallahImg,
  },

  // DAY 2
  {
    id: 'spk-hattab',
    day: 2,
    dayLabel: 'Day 02 · Sep 28',
    name: 'Ahmad Hattab',
    role: 'Technology Manager & Founder',
    organization: 'Revton Global · JIS',
    topic: 'MVP Architecture, Engineering Leadership & Scalability',
    bio: 'Technology Manager at Revton Global and Founder of Jordan Innovation Startups (JIS) with over 15 years of experience in software engineering and technology leadership. Operates at the intersection of AI, engineering culture, and startup scaling, with a strong focus on turning technology into practical, scalable production architectures.',
    avatar: ahmadHattabImg,
  },
  {
    id: 'spk-luna',
    day: 2,
    dayLabel: 'Day 02 · Sep 28',
    name: 'Luna Kawash',
    role: 'Marketing & Strategy Consultant',
    organization: 'Commercial & Growth Advisory',
    topic: 'Commercial Strategy, Market Fit & Pricing Models',
    bio: 'With 15+ years of experience across Jordan, Egypt, and the MENA region, Luna is a Marketing & Strategy Consultant specializing in growth, pricing, digital strategy, and commercial effectiveness. She combines deep market expertise with a practical, data-driven approach to constructing business models and monetization strategies that generate measurable traction.',
    avatar: lunaImg,
  },

  // DAY 3
  {
    id: 'spk-yazan',
    day: 3,
    dayLabel: 'Day 03 · Sep 29',
    name: 'Dr. Yazan Hatamleh',
    role: 'Serial Entrepreneur & GTM Strategist',
    organization: 'Venture & Growth Advisory',
    topic: 'Go-To-Market Execution & Customer Traction',
    bio: 'Serial entrepreneur, Go-To-Market strategist, CEO, and professor with 30+ years of leadership experience supporting startups and SMEs across Jordan and MENA. He specializes in turning concepts into traction through market validation, customer acquisition, venture building, and high-impact growth frameworks.',
    avatar: yazanImg,
  },
  {
    id: 'spk-moataz',
    day: 3,
    dayLabel: 'Day 03 · Sep 29',
    name: 'Moataz Mukhaimer',
    role: 'Strategy & Finance Advisor',
    organization: 'Strategic Financial Advisory',
    topic: 'Financial Modeling, Valuation & Venture Viability',
    bio: 'Strategy & Finance Advisor helping companies strengthen financial decision-making, secure investment funding, and transform strategic roadmaps into executable financial models. Mentors founders in constructing robust unit economics and investor-ready business cases.',
    avatar: moatazImg,
  },
  {
    id: 'spk-mashalleh',
    day: 3,
    dayLabel: 'Day 03 · Sep 29',
    name: 'Ahmad Al-Mashaleh',
    role: 'Innovation Hub Manager',
    organization: 'Orange Jordan',
    topic: 'Venture Pitching, Growth Scaling & Enterprise Partnerships',
    bio: 'Innovation, entrepreneurship, and digital transformation professional with 18 years of experience. As Innovation Hub Manager at Orange Jordan, he has mentored more than 130 startups and delivered 85+ AI and innovation workshops to over 2,000 learners, empowering teams to pitch their solutions convincingly and scale toward commercial success.',
    avatar: ahmadMashallehImg,
  },
];

const DAYS = [
  {
    num: '01',
    title: 'Is this a real opportunity?',
    flag: 'Validate',
    question: 'Day 1 — Is this a real opportunity?',
    sub: 'Who has the problem, how important is it, and does the proposed solution create meaningful value?',
    detail:
      'Teams will focus on validating the problem, understanding their target customers/users, testing key assumptions, and refining their value proposition.',
    sessions: ['Problem validation', 'Customers & users', 'Assumptions', 'Value proposition'],
  },
  {
    num: '02',
    title: 'Can this become a viable venture?',
    flag: 'Model',
    question: 'Day 2 — Can this become a viable venture?',
    sub: 'Is there a meaningful market, how does the solution compete, and can the business model make financial sense?',
    detail:
      'Teams will examine their market opportunity, competitors and alternatives, differentiation, revenue model, pricing, costs, and basic financial viability.',
    sessions: ['Market opportunity', 'Competitors', 'Business model', 'Pricing & costs', 'Financial viability'],
  },
  {
    num: '03',
    title: 'How do we take it to market?',
    flag: 'Launch',
    question: 'Day 3 — How do we take it to market and communicate the case?',
    sub: 'Who do we reach first, how do we reach them, what happens next, and how do we communicate the complete business case?',
    detail:
      'Teams will develop their initial go-to-market approach, identify early adopters and acquisition channels, define their next execution milestones, and bring their work together into a clear and coherent business case.',
    sessions: ['Go-to-market', 'Early adopters', 'Acquisition', 'Milestones', 'Business case'],
  },
];

const MAP = [
  { title: 'Hackathon', sub: 'Ship it', state: 'done' },
  { title: 'Bootcamp', sub: 'Sep 27–29 · You are here', state: 'here' },
  { title: 'Congress', sub: 'Show it · Oct 10', state: 'next' },
];

export const Bootcamp: React.FC = () => {
  const [openDay, setOpenDay] = useState<string | null>('01');
  const [selectedDayFilter, setSelectedDayFilter] = useState<number | 'all'>('all');
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredSpeakers =
    selectedDayFilter === 'all'
      ? BOOTCAMP_SPEAKERS
      : BOOTCAMP_SPEAKERS.filter((s) => s.day === selectedDayFilter);

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
          <p className="bc-lead">A three-day practical program to build the business case behind your Hackathon solution.</p>
          <div className="bc-pins">
            <span className="bc-pin"><i>01</i> Validate</span>
            <span className="bc-pin"><i>02</i> Model</span>
            <span className="bc-pin"><i>03</i> Launch</span>
          </div>
        </div>
      </header>

      {/* Bootcamp Overview */}
      <section className="bc-sect">
        <div className="bc-label">
          <h2>Bootcamp Overview</h2>
          <span>Sep 27–29 · 3 days</span>
        </div>
        <div className="bc-overview">
          <p>
            The Jordan 2076 Bootcamp is a three-day practical program designed to help participating teams
            develop the business and entrepreneurial side of their Hackathon solutions.
          </p>
          <p>
            Through focused learning sessions, expert guidance, and applied tasks, teams will move beyond the
            technical development of their solutions to validate the opportunity behind them, assess their market
            and business viability, and define how they could take their solutions to market.
          </p>
          <p>
            Each day focuses on a key stage of this journey, with teams applying what they learn through a
            structured post-day task. By the end of the Bootcamp, teams should be able to build a clearer,
            evidence-based business case around their solution.
          </p>
        </div>
      </section>

      {/* The Bootcamp Journey — dashed route accordion */}
      <section className="bc-sect">
        <div className="bc-label">
          <h2>The Bootcamp Journey</h2>
          <span>Tap to open</span>
        </div>
        <p className="bc-journey-intro">
          Across the three days, teams will work toward answering three key questions:
        </p>
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
                        <b>{day.question}</b>
                        <small>{day.sessions.length} stops</small>
                      </span>
                      <ChevronDown size={18} className="bc-chev" aria-hidden="true" />
                    </button>
                    <div className="bc-drop">
                      <div>
                        <div className="bc-day-detail">
                          <p className="bc-day-sub">{day.sub}</p>
                          <p className="bc-day-text">{day.detail}</p>
                        </div>
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

      {/* Guides — Mentors & Speakers Directory */}
      <section className="bc-sect">
        <div className="bc-label">
          <h2>Guides</h2>
          <span>7 Experts · 3 Days</span>
        </div>

        {/* Day Filter Tabs */}
        <div className="bc-filters">
          <button
            type="button"
            className={`bc-filter-btn ${selectedDayFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setSelectedDayFilter('all')}
          >
            All Guides (7)
          </button>
          <button
            type="button"
            className={`bc-filter-btn ${selectedDayFilter === 1 ? 'is-active' : ''}`}
            onClick={() => setSelectedDayFilter(1)}
          >
            Day 01 · Validate (2)
          </button>
          <button
            type="button"
            className={`bc-filter-btn ${selectedDayFilter === 2 ? 'is-active' : ''}`}
            onClick={() => setSelectedDayFilter(2)}
          >
            Day 02 · Model (2)
          </button>
          <button
            type="button"
            className={`bc-filter-btn ${selectedDayFilter === 3 ? 'is-active' : ''}`}
            onClick={() => setSelectedDayFilter(3)}
          >
            Day 03 · Launch (3)
          </button>
        </div>

        {/* Guides Grid */}
        <div className="bc-grid">
          {filteredSpeakers.map((spk, i) => {
            const isBioExpanded = !!expandedBios[spk.id];

            return (
              <Reveal key={spk.id} delay={i * 50}>
                <div className="bc-guide-card">
                  {/* Speaker Header with Photo */}
                  <div className="bc-guide-header">
                    <div className="bc-guide-avatar-wrap">
                      <img
                        src={spk.avatar}
                        alt={spk.name}
                        className="bc-guide-avatar"
                        loading="lazy"
                      />
                    </div>
                    <div className="bc-guide-meta">
                      <span className="bc-guide-badge">
                        <Calendar size={11} /> {spk.dayLabel}
                      </span>
                      <h3 className="bc-guide-name">{spk.name}</h3>
                      <div className="bc-guide-role">
                        <b>{spk.role}</b> · {spk.organization}
                      </div>
                    </div>
                  </div>

                  {/* Topic Callout Box */}
                  <div className="bc-guide-topic">
                    <div className="bc-guide-topic-tag">
                      <Sparkles size={11} /> Session Topic
                    </div>
                    <div className="bc-guide-topic-title">{spk.topic}</div>
                  </div>

                  {/* Bio & Read More */}
                  <p className={`bc-guide-bio ${isBioExpanded ? 'is-expanded' : ''}`}>
                    {spk.bio}
                  </p>

                  <button
                    type="button"
                    className="bc-guide-expand-btn"
                    onClick={() => toggleBio(spk.id)}
                  >
                    {isBioExpanded ? (
                      <>
                        <span>Show Less</span> <ChevronUp size={13} />
                      </>
                    ) : (
                      <>
                        <span>Read Bio</span> <ChevronDown size={13} />
                      </>
                    )}
                  </button>
                </div>
              </Reveal>
            );
          })}
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
