import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, Target } from 'lucide-react';
import { HACKATHON_TRACKS } from '../data/tracks';
import './InvestigationBoard.css';

interface InvestigationBoardProps {
  onOpenRegister: () => void;
}

interface Point {
  x: number;
  y: number;
}

/** Inline styles that also carry CSS custom properties. */
type BoardStyle = React.CSSProperties & Record<`--${string}`, string>;

/** Hand-pinned scatter: each artefact is nudged off its grid cell by a fixed
 *  offset, so the composition holds together at every width. */
const PHOTO_PLACEMENT: BoardStyle[] = [
  { '--ib-tilt': '-3.2deg', '--ib-dx': '-6px', '--ib-dy': '18px' },
  { '--ib-tilt': '2.4deg', '--ib-dx': '10px', '--ib-dy': '-24px' },
  { '--ib-tilt': '-1.6deg', '--ib-dx': '-4px', '--ib-dy': '36px' },
];

const NOTE_PLACEMENT: BoardStyle[] = [
  {
    '--ib-tilt': '2.6deg',
    '--ib-dx': '14px',
    '--ib-dy': '30px',
    '--ib-w': '94%',
    '--ib-justify': 'start',
    '--ib-lift': '7deg',
    '--ib-curl': '42px',
  },
  {
    '--ib-tilt': '-2.4deg',
    '--ib-dx': '-10px',
    '--ib-dy': '-12px',
    '--ib-w': '100%',
    '--ib-lift': '5deg',
    '--ib-curl': '32px',
  },
  {
    '--ib-tilt': '1.8deg',
    '--ib-dx': '8px',
    '--ib-dy': '46px',
    '--ib-w': '92%',
    '--ib-justify': 'end',
    '--ib-lift': '8deg',
    '--ib-curl': '46px',
  },
];

/** Pins 0-2 are the photographs, 3-5 the notes. Only neighbouring artefacts are
 *  strung together, and no pin takes more than three lengths — otherwise the
 *  runs converge into a starburst instead of a strung board. `slack` varies per
 *  length so no two hang alike. */
const THREADS = [
  { from: 0, to: 1, slack: 0.55 },
  { from: 1, to: 2, slack: 0.7 },
  { from: 3, to: 4, slack: 0.8 },
  { from: 4, to: 5, slack: 0.95 },
];

/** Quadratic curve whose midpoint hangs below the chord, the way thread does. */
function threadPath(a: Point, b: Point, slack: number): string {
  const sag = Math.min(72, 14 + Math.hypot(b.x - a.x, b.y - a.y) * 0.09) * slack;
  return `M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${(a.y + b.y) / 2 + sag * 2} ${b.x} ${b.y}`;
}

export const InvestigationBoard: React.FC<InvestigationBoardProps> = ({ onOpenRegister }) => {
  const [pins, setPins] = useState<Point[]>([]);
  const [swinging, setSwinging] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const pinRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // The thread is drawn between the pins as they actually land after layout,
  // so it stays attached at any viewport width.
  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const origin = stage.getBoundingClientRect();
    setPins(
      pinRefs.current
        .map((el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { x: r.left - origin.left + r.width / 2, y: r.top - origin.top + r.height / 2 };
        })
        .filter((p): p is Point => p !== null),
    );
  }, []);

  useLayoutEffect(() => {
    measure();
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  // The handwriting face lands after first paint and changes artefact heights.
  useEffect(() => {
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure();
    });
    return () => {
      cancelled = true;
    };
  }, [measure]);

  const pinRef = (i: number) => (el: HTMLSpanElement | null) => {
    pinRefs.current[i] = el;
  };

  const threadsReady = pins.length === 6;

  return (
    <section id="hackathon" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="cyber-badge" style={{ marginBottom: '0.8rem' }}>
          <Target size={13} /> 01 / TIMELINE HACKATHON
        </div>
        <h2 className="section-title">THE INVESTIGATION BOARD</h2>
        <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>
          Three photographs came back through the signal, each from a different site — and the
          notes we pinned beside them.
        </p>
      </div>

      <div className="ib-board">
        <div className="ib-stage" ref={stageRef}>
          <div className="ib-row">
            {HACKATHON_TRACKS.map((track, i) => (
              <div className="ib-cell" key={track.id} style={PHOTO_PLACEMENT[i]}>
                <span className="ib-pin" ref={pinRef(i)} />
                <figure className="ib-evidence" style={{ '--ib-focus': track.focus } as BoardStyle}>
                  <span className="ib-evidence__photo">
                    <img
                      src={track.image}
                      alt={`${track.site} in 2076`}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <figcaption>
                    <span className="ib-evidence__site">{track.site}</span>
                    <span className="ib-evidence__tagline">{track.tagline}</span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>

          <div className="ib-row ib-row--notes">
            <div className="ib-cell" style={NOTE_PLACEMENT[0]}>
              <span className="ib-pin" ref={pinRef(3)} />
              <div className="ib-note ib-note--signal">
                <div className="ib-note__kicker">INTERCEPTED · 2076</div>
                <p className="ib-note__quote">
                  “Change the parameters in Amman, Irbid and Petra and the rest of the century
                  follows. We checked. Twice.”
                </p>
                <div className="ib-note__sign">— receiver 07</div>
                <span className="ib-note__curl" aria-hidden="true" />
              </div>
            </div>

            <div className="ib-cell" style={NOTE_PLACEMENT[1]}>
              <span className="ib-pin" ref={pinRef(4)} />
              <div className="ib-note ib-note--brief">
                <div className="ib-note__kicker">MISSION PARAMETERS</div>
                <h3 className="ib-note__title">48-HOUR BUILD</h3>
                <ul className="ib-note__list">
                  <li>14–16 November · Amman base</li>
                  <li>50,000 JOD across three tracks</li>
                  <li>Open to developers, designers &amp; researchers</li>
                </ul>
                <span className="ib-note__curl" aria-hidden="true" />
              </div>
            </div>

            <div className="ib-cell" style={NOTE_PLACEMENT[2]}>
              <span className="ib-pin" ref={pinRef(5)} />
              {/* Decorative swing — the real control is the button inside, and a
                  keyboard activation bubbles here too. */}
              <div
                className={`ib-note ib-note--apply${swinging ? ' is-swinging' : ''}`}
                onClick={() => setSwinging(true)}
                onAnimationEnd={() => setSwinging(false)}
              >
                <div className="ib-note__kicker">APPLICATIONS OPEN</div>
                <p className="ib-note__lead">Ready to change the present?</p>
                <button type="button" className="ib-apply" onClick={onOpenRegister}>
                  Join the hackathon <ArrowRight size={15} />
                </button>
                <span className="ib-note__curl" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Drawn last and stacked above the artefacts, so the string runs
              across the photographs rather than behind them. */}
          <svg className="ib-threads" aria-hidden="true">
            <defs>
              <radialGradient id="ib-pinhead" cx="34%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#ff9c94" />
                <stop offset="60%" stopColor="#d8332f" />
                <stop offset="100%" stopColor="#8a1a17" />
              </radialGradient>
            </defs>

            {threadsReady && (
              <>
                {THREADS.map(({ from, to, slack }) => {
                  const d = threadPath(pins[from], pins[to], slack);
                  return (
                    <g key={`${from}-${to}`}>
                      <path className="ib-thread ib-thread--cast" d={d} transform="translate(2 3)" />
                      <path className="ib-thread ib-thread--line" d={d} />
                    </g>
                  );
                })}
                {/* Pin heads last so every thread ends underneath one. */}
                {pins.map((p, i) => (
                  <g key={`pin-${i}`}>
                    <circle cx={p.x + 1} cy={p.y + 3} r="8.5" fill="rgba(0,0,0,0.55)" />
                    <circle cx={p.x} cy={p.y} r="8.5" fill="url(#ib-pinhead)" />
                  </g>
                ))}
              </>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default InvestigationBoard;
