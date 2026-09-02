import { Link, useOutletContext } from 'react-router-dom';
import { Trophy, Users, Clock, Award, Target, Rocket } from 'lucide-react';
import { HACKATHON_TRACKS } from '../data/tracks';

export const Hackathon: React.FC = () => {
  const { openRegister } = useOutletContext<{ openRegister: () => void }>() as any;
  return (
    <div>
      <section className="section-container" style={{ paddingTop: '4rem' }}>
        <div className="cyber-badge">JORDAN 2076 HACKATHON</div>
        <h1 className="section-title" style={{ marginTop: '0.8rem' }}>FOUR CITIES. FOUR CHALLENGES.<br /><span style={{ color: '#7EF3E8' }}>ONE FUTURE.</span></h1>
        <p style={{ color: '#B7B9BD', maxWidth: '800px', lineHeight: 1.7, marginTop: '1rem' }}>
          A technology-driven innovation challenge inviting teams to develop software-based solutions addressing education, healthcare, tourism & culture, and transportation. Focus is on meaningful problem-solution fit and practical application of technology.
        </p>
        <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
          <button onClick={openRegister} className="btn-cyber-primary"><Rocket size={16} /> Register for Hackathon</button>
          <Link to="/congress" className="btn-cyber-outline">Hackathon Finals at Congress</Link>
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-badge">OBJECTIVES</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 240px),1fr))', gap: '1rem', marginTop: '1.2rem' }}>
          {['Encourage young builders to address real sector challenges', 'Promote practical innovation and problem solving', 'Support collaboration and teamwork', 'Connect participants with mentors, experts, companies & ecosystem', 'Help promising ideas move toward incubation'].map((o) => (
            <div key={o} className="cyber-card" style={{ padding: '1.2rem', display: 'flex', gap: '0.6rem' }}>
              <Target size={16} color="#7EF3E8" style={{ marginTop: '2px' }} /><span style={{ color: '#B7B9BD', fontSize: '0.88rem' }}>{o}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-badge">FOUR TRACKS</div>
        <h2 className="section-title" style={{ fontSize: '1.4rem', marginTop: '0.6rem' }}>CHOOSE YOUR FRONTIER</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          {HACKATHON_TRACKS.map((t) => (
            <div key={t.id} className="cyber-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img src={t.image} alt={t.site} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: (t.focus as any) || 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.85), transparent)' }} />
                <div style={{ position: 'absolute', top: '0.8rem', left: '0.8rem' }}><span className="cyber-badge" style={{ fontSize: '0.65rem' }}>{t.tagline}</span></div>
                <div style={{ position: 'absolute', bottom: '0.8rem', left: '0.8rem', fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontWeight: 900, fontSize: '1.1rem' }}>{t.site}</div>
              </div>
              <div style={{ padding: '1.2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{t.title}</h3>
                <p style={{ color: '#B7B9BD', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.8rem' }}>{t.briefing}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)' }}>
                  <span>{t.prize}</span><span>{t.signalCode}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 300px),1fr))', gap: '1.5rem' }}>
          <div className="cyber-card" style={{ padding: '1.8rem', borderColor: 'rgba(126,243,232,0.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', marginBottom: '0.8rem' }}><Trophy size={18} /> PRIZES & OPPORTUNITIES</div>
            <p style={{ color: '#F5F7F8', fontWeight: 700 }}>Four first-place teams — one per track — receive JOD 750 each.</p>
            <p style={{ color: '#B7B9BD', fontSize: '0.9rem', marginTop: '0.4rem' }}>Total cash prizes: JOD 3,000 + incubation opportunity per winning team. Additional mentorship, networking, industry exposure and ecosystem connections.</p>
            <div style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem' }}><Award size={14} /> AQABA track powered by Petra Ride</div>
          </div>
          <div className="cyber-card" style={{ padding: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', marginBottom: '0.8rem' }}><Users size={18} /> FINALS AT CONGRESS</div>
            <p style={{ color: '#B7B9BD', fontSize: '0.9rem', lineHeight: 1.6 }}>Selected finalist teams advance to the Jordan 2076 Hackathon Finals during Congress Day on 10 Oct 2026. Finalists pitch to a cross-ecosystem judging panel (INJAZ · UJIEC · EY · Replit). Winners announced at the Closing Ceremony.</p>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#B7B9BD' }}><Clock size={12} style={{ display: 'inline', marginRight: '0.3rem' }} /> Finals during Track Sessions I & II · Main Auditorium</div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-card" style={{ padding: '2rem', textAlign: 'center', borderColor: '#7EF3E8' }}>
          <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8' }}>READY TO BUILD?</h3>
          <p style={{ color: '#B7B9BD', margin: '0.6rem 0 1.2rem' }}>Registration: team size 2–5 · Eligibility & submission requirements apply · Deadline announced on registration.</p>
          <button onClick={openRegister} className="btn-cyber-primary">Register for Hackathon</button>
        </div>
      </section>
    </div>
  );
};
