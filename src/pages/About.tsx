import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Link2,
  Compass,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  X,
  Radio,
  Quote,
} from 'lucide-react';
import { Reveal } from '../components/j76/J76';

interface PrincipleItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  term: 'Vision' | 'Mission' | 'Theme';
  text: string;
  subtitle: string;
  metaPill: string;
  paragraphs: string[];
  keyHighlight?: {
    label: string;
    text: string;
  };
  journeyFlow?: string[];
  subCards?: {
    title: string;
    description: string;
  }[];
}

const PRINCIPLES: PrincipleItem[] = [
  {
    icon: Eye,
    term: 'Vision',
    text: 'Builders architecting Jordan\u2019s future.',
    subtitle: 'The Jordan We Are Building',
    metaPill: 'Pillar 01 · The Jordan We Are Building',
    paragraphs: [
      'Jordan 2076 imagines a future where Jordan is not simply adapting to technological change, but actively shaping what comes next. A future where the country\u2019s greatest asset is not only its resources or infrastructure, but the people capable of imagining, building, and leading what comes after them. The vision is to create a Jordan where technology, innovation, entrepreneurship, and human potential come together to solve real challenges and open new possibilities across every sector.',
      'But this future does not begin in 2076. It begins with the foundations we build today: the ideas we choose to explore, the problems we choose to solve, the skills we develop, and the communities we create around them. Jordan 2076 therefore looks beyond a single event or competition. It asks a larger question: What can Jordan become if we start building that future now?',
    ],
    keyHighlight: {
      label: 'The Larger Question',
      text: 'What can Jordan become if we start building that future now?',
    },
  },
  {
    icon: Link2,
    term: 'Mission',
    text: 'Talent meets real challenges, mentors, industry.',
    subtitle: 'From Ideas to Foundations',
    metaPill: 'Pillar 02 · From Ideas to Foundations',
    paragraphs: [
      'Jordan 2076 exists to turn that question into action.',
      'Its mission is to bring together students, young innovators, builders, entrepreneurs, industry leaders, and the wider technology community in one journey where ideas are not only imagined, but challenged, developed, tested, and connected to real-world needs.',
      'Through the Hackathon, participants explore the future of Jordan through real sectors and real problems. Through the Bootcamp, they learn how to validate opportunities, understand users, build viable ventures, and communicate their ideas. Through the Congress, they meet the people already shaping technology, business, and innovation in Jordan and beyond.',
      'The goal is not simply to produce a winning project. It is to create a generation that understands that building the future requires more than an idea. It requires foundations: knowledge, collaboration, experimentation, resilience, and the courage to turn possibilities into something real.',
    ],
    subCards: [
      {
        title: 'The Hackathon',
        description: 'Explore the future of Jordan through real sectors and real problems.',
      },
      {
        title: 'The Bootcamp',
        description: 'Validate opportunities, understand users, build viable ventures, and communicate ideas.',
      },
      {
        title: 'The Congress',
        description: 'Meet the people already shaping technology, business, and innovation in Jordan and beyond.',
      },
    ],
    keyHighlight: {
      label: 'The Mission Mandate',
      text: 'Building the future requires more than an idea. It requires foundations: knowledge, collaboration, experimentation, resilience, and the courage to turn possibilities into something real.',
    },
  },
  {
    icon: Compass,
    term: 'Theme',
    text: 'What comes next is built today.',
    subtitle: 'From Foundations to the Future',
    metaPill: 'Pillar 03 · From Foundations to the Future',
    paragraphs: [
      'The story begins in 2076. Jordan has reached a future that once seemed impossible to imagine. A highly advanced Jordan looks back at the year 2026 and sends a signal across time. But the message is not a celebration. It is a question: Who built this future?',
      'The signal travels backward, searching for the people who could have created the foundations of that future. It reaches universities, communities, cities, industries, and most importantly, young people who are still standing at the beginning of their journey. That is where Jordan 2076 begins.',
      'The participants are not simply attending a Hackathon. They are responding to a message from the future. Every challenge becomes a piece of the timeline. Every idea becomes a possible branch of what Jordan could become. Every prototype is an attempt to turn a possibility into evidence that this future can actually exist.',
      'The Hackathon asks participants to imagine and build. The Bootcamp gives them the tools to strengthen what they have built. The Congress brings the wider ecosystem together to question, discuss, connect, and look ahead.',
      'And by the end, the question is no longer \u201cWhat will Jordan look like in 2076?\u201d It becomes: \u201cWhat are we building today that will make that future possible?\u201d',
    ],
    journeyFlow: ['Foundation', 'Exploration', 'Building', 'Connection', 'Future'],
    keyHighlight: {
      label: 'The Core Premise',
      text: 'Because 2076 is not the destination. It is the future we are building from the foundations we create today.',
    },
  },
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
  const [selectedPrinciple, setSelectedPrinciple] = useState<'Vision' | 'Mission' | 'Theme' | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const activePrinciple = PRINCIPLES.find((p) => p.term === selectedPrinciple);

  const handleTogglePrinciple = (term: 'Vision' | 'Mission' | 'Theme') => {
    if (selectedPrinciple === term) {
      setSelectedPrinciple(null);
    } else {
      setSelectedPrinciple(term);
    }
  };

  useEffect(() => {
    if (selectedPrinciple && detailRef.current) {
      const timer = setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [selectedPrinciple]);

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

        <div className="ab-prisms" role="tablist" aria-label="The Initiative Pillars">
          {PRINCIPLES.map((p, i) => {
            const isActive = selectedPrinciple === p.term;
            return (
              <Reveal key={p.term} delay={i * 70}>
                <button
                  type="button"
                  className={`ab-prism ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleTogglePrinciple(p.term)}
                  aria-expanded={isActive}
                  aria-controls="ab-detail-panel"
                  id={`ab-tab-${p.term.toLowerCase()}`}
                >
                  <span className="ab-medal">
                    <p.icon size={18} />
                  </span>
                  <h3>{p.term}</h3>
                  <p>{p.text}</p>
                  <div className="ab-prism-action">
                    <span>{isActive ? 'Hide details' : 'Explore details'}</span>
                    <ChevronDown size={14} />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Expandable Details Drawer */}
        <AnimatePresence mode="wait">
          {activePrinciple && (
            <motion.div
              key={activePrinciple.term}
              ref={detailRef}
              initial={{ opacity: 0, y: 14, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="ab-detail-wrapper"
            >
              <div className="ab-detail-panel" id="ab-detail-panel" role="region" aria-labelledby={`ab-tab-${activePrinciple.term.toLowerCase()}`}>
                {/* Header */}
                <div className="ab-detail-header">
                  <div className="ab-detail-meta">
                    <span className="ab-detail-pill">{activePrinciple.metaPill}</span>
                    <h3 className="ab-detail-title">
                      <span>{activePrinciple.term}</span> — {activePrinciple.subtitle}
                    </h3>
                  </div>

                  <div className="ab-detail-ctrls">
                    <div className="ab-detail-tabs" role="tablist">
                      {PRINCIPLES.map((p) => (
                        <button
                          key={p.term}
                          type="button"
                          onClick={() => setSelectedPrinciple(p.term)}
                          className={`ab-detail-tab ${p.term === selectedPrinciple ? 'is-active' : ''}`}
                        >
                          <p.icon size={13} />
                          <span>{p.term}</span>
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="ab-detail-close"
                      onClick={() => setSelectedPrinciple(null)}
                      aria-label="Close details"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="ab-detail-content">
                  {/* Theme specific signal transmission header */}
                  {activePrinciple.term === 'Theme' && (
                    <div className="ab-signal-box">
                      <div className="ab-signal-icon">
                        <Radio size={22} />
                      </div>
                      <div className="ab-signal-body">
                        <div className="ab-signal-meta">Incoming Transmission · Year 2076 → 2026</div>
                        <div className="ab-signal-msg">“Who built this future?”</div>
                      </div>
                    </div>
                  )}

                  {/* Paragraphs */}
                  {activePrinciple.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="ab-detail-p">
                      {p}
                    </p>
                  ))}

                  {/* Mission specific subcards for Hackathon, Bootcamp, Congress */}
                  {activePrinciple.subCards && (
                    <div className="ab-subgrid">
                      {activePrinciple.subCards.map((card) => (
                        <div key={card.title} className="ab-subcard">
                          <h4>{card.title}</h4>
                          <p>{card.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Theme specific Journey flow */}
                  {activePrinciple.journeyFlow && (
                    <div className="ab-flow-wrap">
                      <div className="ab-flow-label">The Evolutionary Trajectory</div>
                      <div className="ab-flow-steps">
                        {activePrinciple.journeyFlow.map((step, sIdx, arr) => (
                          <React.Fragment key={step}>
                            <div className="ab-flow-step">
                              <span className="ab-flow-step-num">0{sIdx + 1}</span>
                              <span>{step}</span>
                            </div>
                            {sIdx < arr.length - 1 && (
                              <ArrowRight size={14} className="ab-flow-arrow" aria-hidden="true" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key highlight quote block */}
                  {activePrinciple.keyHighlight && (
                    <div className="ab-detail-callout">
                      <div className="ab-callout-tag">
                        <Quote size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: '-1px' }} />
                        {activePrinciple.keyHighlight.label}
                      </div>
                      <div className="ab-callout-text">
                        “{activePrinciple.keyHighlight.text}”
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
