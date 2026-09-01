import React, { useState } from 'react';
import { AGENDA_DATA } from '../data/agenda';
import { Clock, Bookmark, User } from 'lucide-react';

export const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeTrack, setActiveTrack] = useState<string>('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const tracks = ['All', 'Keynote', 'Quantum Tech', 'Bio-Cybernetics', 'Space & Energy', 'AI & Governance'];

  const filteredAgenda = AGENDA_DATA.filter((item) => {
    const matchDay = item.day === activeDay;
    const matchTrack = activeTrack === 'All' || item.track === activeTrack;
    return matchDay && matchTrack;
  });

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  return (
    <section id="agenda" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="cyber-badge" style={{ marginBottom: '0.8rem' }}>03 / EVENT SCHEDULE</div>
        <h2 className="section-title">THE 3-DAY CYBER PROGRAM</h2>
        <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
          Explore keynotes, interactive panel discussions, live cyber-demos, and executive roundtables.
        </p>

        {/* Day Selector Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { day: 1, title: 'DAY 1: OCT 15', subtitle: 'Quantum Foundations' },
            { day: 2, title: 'DAY 2: OCT 16', subtitle: 'AI & Bio-Synth' },
            { day: 3, title: 'DAY 3: OCT 17', subtitle: 'Galactic Horizon' },
          ].map((d) => {
            const isSelected = activeDay === d.day;
            return (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                style={{
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(0, 27, 58, 0.95), rgba(10, 10, 10, 0.95))'
                    : 'rgba(0, 27, 58, 0.4)',
                  border: '1px solid ' + (isSelected ? '#7EF3E8' : 'rgba(183, 185, 189, 0.2)'),
                  boxShadow: isSelected ? '0 0 20px rgba(126, 243, 232, 0.25)' : 'none',
                  padding: '0.9rem 1.8rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: isSelected ? '#7EF3E8' : '#F5F7F8',
                  }}
                >
                  {d.title}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#B7B9BD',
                    fontFamily: 'var(--font-rajdhani)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {d.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Track Filter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
          }}
        >
          {tracks.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTrack(t)}
              style={{
                background: activeTrack === t ? 'rgba(126, 243, 232, 0.15)' : 'transparent',
                color: activeTrack === t ? '#7EF3E8' : '#B7B9BD',
                border: '1px solid ' + (activeTrack === t ? '#7EF3E8' : 'rgba(183, 185, 189, 0.15)'),
                padding: '0.4rem 1rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Agenda Timeline List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '900px', margin: '0 auto' }}>
        {filteredAgenda.map((item) => {
          const isBookmarked = bookmarkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="cyber-card"
              style={{
                padding: '1.6rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {/* Time Badge */}
              <div
                style={{
                  minWidth: '150px',
                  background: 'rgba(0, 27, 58, 0.8)',
                  border: '1px solid rgba(126, 243, 232, 0.3)',
                  borderRadius: '8px',
                  padding: '0.8rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    color: '#7EF3E8',
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#B7B9BD', marginTop: '0.2rem' }}>
                  {item.location}
                </div>
              </div>

              {/* Main Content */}
              <div style={{ flex: 1, minWidth: '260px' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="cyber-badge">{item.track}</span>
                  {item.speakerName && (
                    <span style={{ fontSize: '0.8rem', color: '#B7B9BD', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <User size={13} color="#7EF3E8" />
                      {item.speakerName}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '1.15rem',
                    color: '#F5F7F8',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#B7B9BD', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>

              {/* Bookmark Action */}
              <button
                onClick={() => toggleBookmark(item.id)}
                style={{
                  background: isBookmarked ? '#7EF3E8' : 'rgba(0, 27, 58, 0.6)',
                  border: '1px solid #7EF3E8',
                  color: isBookmarked ? '#0A0A0A' : '#7EF3E8',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                title={isBookmarked ? 'Remove from My Schedule' : 'Add to My Schedule'}
              >
                <Bookmark size={18} fill={isBookmarked ? '#0A0A0A' : 'none'} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
