import React, { useEffect, useState } from 'react';
import { frameUrls, onFrameProgress, startFramePreload } from '../lib/frames';
import './BootScreen.css';

interface BootScreenProps {
  /** Called once the screen has finished fading out. */
  onDone: () => void;
}

/** Never hold the site hostage to a slow network — release after this even if
 *  frames are still arriving. They keep loading in the background. */
const MAX_WAIT_MS = 15000;
const FADE_MS = 600;

function statusFor(pct: number): string {
  if (pct < 25) return 'INITIALIZING';
  if (pct < 60) return 'DECODING FRAMES';
  if (pct < 92) return 'RECONSTRUCTING 2076';
  return 'SYNC COMPLETE';
}

export const BootScreen: React.FC<BootScreenProps> = ({ onDone }) => {
  const [settled, setSettled] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const total = frameUrls.length;
  const pct = total === 0 ? 100 : Math.round((settled / total) * 100);

  useEffect(() => {
    startFramePreload();
    return onFrameProgress((count) => setSettled(count));
  }, []);

  // Freeze the page behind the overlay.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Let 100% register before dismissing, so the bar never jumps off screen full.
  useEffect(() => {
    if (pct < 100) return;
    const timer = setTimeout(() => setLeaving(true), 450);
    return () => clearTimeout(timer);
  }, [pct]);

  useEffect(() => {
    const timer = setTimeout(() => setLeaving(true), MAX_WAIT_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const timer = setTimeout(onDone, FADE_MS);
    return () => clearTimeout(timer);
  }, [leaving, onDone]);

  return (
    <div className={`boot${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="boot__panel">
        <span className="boot__corner boot__corner--tl" />
        <span className="boot__corner boot__corner--tr" />
        <span className="boot__corner boot__corner--bl" />
        <span className="boot__corner boot__corner--br" />

        {/* Not a heading — Hero owns the page's h1 and this is transient. */}
        <div className="boot__title">PROJECT 2076</div>

        <div className="boot__status">
          <span>{statusFor(pct)}…</span>
          <span className="boot__pct">{pct}%</span>
        </div>

        <div
          className="boot__bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          aria-label="Loading signal frames"
        >
          <span className="boot__fill" style={{ width: `${pct}%` }} />
        </div>

        <div className="boot__meta">
          <span>SIGNAL FRAMES</span>
          <span>
            {settled} / {total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
