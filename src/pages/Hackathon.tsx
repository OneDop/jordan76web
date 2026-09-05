import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { HACKATHON_TRACKS } from '../data/tracks';
import ammanImg from '../assets/hackathon_amman.png';
import irbidImg from '../assets/hackathon_irbid.png';
import petraImg from '../assets/hackathon_petra.png';

interface PageContext {
  openRegister: () => void;
  openMission: () => void;
}

// No Aqaba artwork exists yet. Rather than label another city's
// photograph "Aqaba", that tile falls back to the grid texture.
const trackImages: Record<string, string | undefined> = {
  'track-amman': ammanImg,
  'track-irbid': irbidImg,
  'track-petra': petraImg,
};

export const Hackathon: React.FC = () => {
  const { openRegister, openMission } = useOutletContext<PageContext>();

  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title">Four cities. Four challenges. One future.</h1>

        <p className="doc-lead">
          An innovation challenge for young builders and engineers, running across four national
          sectors: education, healthcare, tourism and culture, and transportation. Teams ship working
          software, not slideware.
        </p>

        <div className="doc-actions">
          <button onClick={openRegister} className="btn-cyber-primary">
            Register your team
          </button>
          <button onClick={openMission} className="btn-cyber-outline">
            Read the briefing
          </button>
        </div>

        <div className="spec">
          <div className="spec-item">
            <span className="spec-k">Team size</span>
            <span className="spec-v">
              2–5 members
              <small>Interdisciplinary teams encouraged</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Prize per track</span>
            <span className="spec-v">
              JOD 750
              <small>JOD 3,000 across four tracks</small>
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-k">Finals</span>
            <span className="spec-v">
              10 October 2026
              <small>Live pitching at Congress day</small>
            </span>
          </div>
        </div>
      </header>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">The four sector tracks</h2>
          <span className="sect-note">Pick one track per team</span>
        </div>

        <div className="tiles">
          {HACKATHON_TRACKS.map((track) => {
            const image = trackImages[track.id];
            return (
            <button
              key={track.id}
              type="button"
              className="tile"
              onClick={openMission}
              aria-label={`Open the briefing for ${track.site}: ${track.title}`}
            >
              <div className={image ? 'tile-figure' : 'tile-figure tile-figure--blank'}>
                {image && <img src={image} alt="" />}
                <span className="tile-place">{track.site}</span>
              </div>

              <div className="tile-body">
                <h3 className="tile-title">{track.title}</h3>
                <p className="tile-text">{track.briefing}</p>
                <div className="tile-foot">
                  <span>{track.prize.split('+')[0].trim()}</span>
                  <span>Open briefing</span>
                </div>
              </div>
            </button>
            );
          })}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Awards and finals</h2>
        </div>

        <div className="blocks">
          <div>
            <h3 className="block-title">JOD 3,000 in prizes, plus incubation</h3>
            <p className="block-text">
              Four first-place teams — one per track — take JOD 750 each. Winning teams also receive
              incubation support, continued mentorship, and introductions across the ecosystem to
              turn a prototype into something that survives contact with the market.
            </p>
          </div>

          <div>
            <h3 className="block-title">Pitching live at Congress day</h3>
            <p className="block-text">
              Finalists pitch in the main auditorium at the University of Jordan Academy on Saturday,
              10 October 2026. Judges come from INJAZ, UJIEC, EY, and Replit. Winners are announced
              at the closing ceremony.
            </p>
            <ul className="block-list">
              <li>
                <Link to="/congress" className="textlink textlink--quiet">
                  See the congress programme
                </Link>
              </li>
              <li>
                <Link to="/bootcamp" className="textlink textlink--quiet">
                  How teams prepare in the bootcamp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="band">
        <div>
          <h2 className="band-title">Ready to build?</h2>
          <p className="band-text">
            Registration is open to interdisciplinary teams of 2–5. Individuals can register alone
            and be matched into a team.
          </p>
        </div>
        <button onClick={openRegister} className="btn-cyber-primary">
          Register your team
        </button>
      </div>
    </div>
  );
};
