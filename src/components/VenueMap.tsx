import React, { useState } from 'react';
import { MapPin, Navigation, ShieldCheck, Calendar, Users } from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  type: string;
  capacity: string;
  description: string;
  coordinates: { x: number; y: number };
}

export const VenueMap: React.FC = () => {
  const zones: Zone[] = [
    { id: 'z-1', name: 'Main Auditorium', type: 'Keynotes & Finals', capacity: '350–400 Delegates', description: 'Main auditorium for opening, keynotes, panels, Hackathon Finals pitching and the Closing Ceremony.', coordinates: { x: 50, y: 35 } },
    { id: 'z-2', name: 'Track Hall A', type: 'Technology Tracks', capacity: '120 Seats', description: 'Artificial Intelligence and Software Engineering sessions (AI Agents 101, Software Engineering Mindset, etc.).', coordinates: { x: 28, y: 60 } },
    { id: 'z-3', name: 'Track Hall B', type: 'Innovation Tracks', capacity: '120 Seats', description: 'Innovation & Entrepreneurship and Emerging Technologies tracks (Design Thinking, Quantum & Digital Twins).', coordinates: { x: 72, y: 60 } },
    { id: 'z-4', name: 'Exhibition & Networking', type: 'Booths & Networking', capacity: 'Open', description: 'Partner booths, networking breaks, lunch and the Time Travel Experience.', coordinates: { x: 50, y: 82 } },
  ];
  const [activeZone, setActiveZone] = useState<Zone>(zones[0]);
  return (
    <section id="venue" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="cyber-badge" style={{ marginBottom: '0.8rem' }}>CONGRESS VENUE</div>
        <h2 className="section-title">UNIVERSITY OF JORDAN ACADEMY</h2>
        <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
          Jordan 2076 Congress Day — Saturday, 10 October 2026 · Expected Attendance 350–400
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem' }}><Calendar size={14} /> 10 OCT 2026</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', fontSize: '0.85rem' }}><Users size={14} /> 350–400</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        <div className="cyber-card" style={{ height: '420px', position: 'relative', background: 'radial-gradient(circle at center, rgba(0, 27, 58, 0.9) 0%, rgba(10, 10, 10, 0.98) 100%)', borderColor: '#7EF3E8', boxShadow: '0 0 30px rgba(126, 243, 232, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(126, 243, 232, 0.15) 1px, transparent 1px)', backgroundSize: '25px 25px', opacity: 0.6 }} />
          <div style={{ position: 'absolute', width: '280px', height: '280px', borderRadius: '50%', border: '1px dashed rgba(126, 243, 232, 0.3)' }} />
          <div style={{ position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', border: '1px solid rgba(126, 243, 232, 0.2)' }} />
          {zones.map((zone) => {
            const isSelected = zone.id === activeZone.id;
            return (
              <button key={zone.id} onClick={() => setActiveZone(zone)} style={{ position: 'absolute', left: `${zone.coordinates.x}%`, top: `${zone.coordinates.y}%`, transform: 'translate(-50%, -50%)', background: isSelected ? '#7EF3E8' : 'rgba(0, 27, 58, 0.9)', color: isSelected ? '#0A0A0A' : '#7EF3E8', border: '2px solid #7EF3E8', borderRadius: '50%', width: isSelected ? '44px' : '36px', height: isSelected ? '44px' : '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: isSelected ? '0 0 25px #7EF3E8' : '0 0 10px rgba(126, 243, 232, 0.4)', transition: 'all 0.25s ease', zIndex: 2 }}>
                <MapPin size={isSelected ? 22 : 18} />
              </button>
            );
          })}
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '0.68rem', fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', background: 'rgba(0, 27, 58, 0.8)', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid rgba(126, 243, 232, 0.3)' }}>
            UNIVERSITY OF JORDAN ACADEMY · AMMAN · 31.98°N 35.85°E
          </div>
        </div>
        <div className="cyber-card" style={{ padding: '2.2rem', background: 'linear-gradient(135deg, rgba(0, 27, 58, 0.85), rgba(10, 10, 10, 0.95))', borderColor: 'rgba(126, 243, 232, 0.4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
            <span className="cyber-badge">{activeZone.type}</span>
            <div style={{ fontSize: '0.8rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)' }}>CAPACITY: {activeZone.capacity}</div>
          </div>
          <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.5rem', color: '#F5F7F8', marginBottom: '1rem' }}>{activeZone.name}</h3>
          <p style={{ color: '#B7B9BD', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.8rem' }}>{activeZone.description}</p>
          <div style={{ background: 'rgba(0, 27, 58, 0.6)', border: '1px solid rgba(126, 243, 232, 0.25)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#F5F7F8' }}><Navigation size={16} color="#7EF3E8" /><span>Google Maps location shared after registration</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#F5F7F8' }}><ShieldCheck size={16} color="#7EF3E8" /><span>350–400 delegates · Full venue support</span></div>
          </div>
          <a href="https://maps.google.com/?q=University+of+Jordan+Academy" target="_blank" rel="noreferrer" className="btn-cyber-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.7rem' }}>Open in Google Maps</a>
        </div>
      </div>
    </section>
  );
};
