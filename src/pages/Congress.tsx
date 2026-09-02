import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Mic, Layers, Sparkles, MessageCircle, Award, ArrowRight } from 'lucide-react';
import { AGENDA_DATA } from '../data/agenda';
import { SPEAKERS_DATA } from '../data/speakers';

export const Congress: React.FC = () => {
  const keynotes = SPEAKERS_DATA.filter((s) => s.session === 'keynote');
  const panel1 = SPEAKERS_DATA.filter((s) => ['spk-rami', 'spk-nour', 'spk-hamdi'].includes(s.id));
  const panel2 = SPEAKERS_DATA.filter((s) => ['spk-ibrahim', 'spk-ghaith', 'spk-eyad', 'spk-sinan'].includes(s.id));
  return (
    <div>
      <section className="section-container" style={{ paddingTop: '4rem' }}>
        <div className="cyber-badge">JORDAN 2076 CONGRESS</div>
        <h1 className="section-title" style={{ marginTop: '0.8rem' }}>FROM FOUNDATIONS<br /><span style={{ color: '#7EF3E8' }}>TO THE FUTURE</span></h1>
        <p style={{ color: '#B7B9BD', maxWidth: '800px', lineHeight: 1.7, marginTop: '1rem' }}>
          A national technology congress bringing together students, young professionals, industry experts, innovators, entrepreneurs, companies and ecosystem partners to explore how technology and innovation can shape Jordan's future.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#7EF3E8' }}><Calendar size={14} /> Saturday, 10 October 2026</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#B7B9BD' }}><MapPin size={14} /> University of Jordan Academy</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#B7B9BD' }}><Users size={14} /> 350–400</span>
        </div>
        <div style={{ marginTop: '1.5rem' }}><Link to="/contact" className="btn-cyber-primary">Register for Congress <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 240px),1fr))', gap: '1.2rem' }}>
          {[
            { title: 'THE FOUNDATIONS', items: ['Keynote Speeches', 'Technology & Innovation Tracks', 'Hackathon Finals'], icon: <Layers size={18} /> },
            { title: 'TIME TRAVEL EXPERIENCE', items: ['A vision of Jordan in 2076 · 20 min immersive'], icon: <Sparkles size={18} /> },
            { title: 'A NEW JORDAN', items: ['Future Discussions', 'NeuraChip Debate', 'Closing Ceremony'], icon: <MessageCircle size={18} /> },
          ].map((b) => (
            <div key={b.title} className="cyber-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8', margin: '0 auto 0.8rem' }}>{b.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '0.9rem', marginBottom: '0.6rem' }}>{b.title}</h3>
              {b.items.map((it) => (<div key={it} style={{ color: '#B7B9BD', fontSize: '0.82rem', marginBottom: '0.2rem' }}>{it}</div>))}
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-badge">OFFICIAL AGENDA</div>
        <h2 className="section-title" style={{ fontSize: '1.4rem', marginTop: '0.6rem' }}>CONGRESS DAY TIMELINE — 10 OCT 2026</h2>
        <p style={{ color: '#B7B9BD', fontSize: '0.9rem', marginTop: '0.4rem' }}>08:30 Registration through 17:00 Closing Ceremony. All times AST.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem', maxWidth: '900px', marginInline: 'auto' }}>
          {AGENDA_DATA.map((item) => (
            <div key={item.id} className="cyber-card" style={{ padding: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ minWidth: '110px', background: 'rgba(0,27,58,0.8)', border: '1px solid rgba(126,243,232,0.3)', borderRadius: '8px', padding: '0.6rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.85rem', fontWeight: 700 }}><Clock size={12} />{item.time}</div>
                <div style={{ fontSize: '0.68rem', color: '#B7B9BD', marginTop: '0.2rem' }}>{item.location}</div>
              </div>
              <div style={{ flex: 1, minWidth: '240px' }}>
                <h4 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '0.95rem' }}>{item.title}</h4>
                <p style={{ color: '#B7B9BD', fontSize: '0.85rem', marginTop: '0.2rem' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-badge">THE FOUNDATIONS</div>
        <h2 className="section-title" style={{ fontSize: '1.4rem', marginTop: '0.6rem' }}>KEYNOTES & TRACKS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 260px),1fr))', gap: '1.2rem', marginTop: '1.5rem' }}>
          <div className="cyber-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.75rem', marginBottom: '0.6rem' }}><Mic size={14} /> KEYNOTE SPEECHES</div>
            {keynotes.map((k) => (
              <div key={k.id} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.8rem', alignItems: 'center' }}>
                <img src={k.avatar} alt={k.name} style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover', border: '1px solid rgba(126,243,232,0.3)' }} />
                <div><div style={{ color: '#F5F7F8', fontWeight: 700, fontSize: '0.9rem' }}>{k.name}</div><div style={{ color: '#B7B9BD', fontSize: '0.8rem' }}>{k.role} — {k.organization}</div><div style={{ color: '#7EF3E8', fontSize: '0.75rem', fontStyle: 'italic' }}>"{k.keynoteTitle}"</div></div>
              </div>
            ))}
          </div>
          {[
            { title: 'Artificial Intelligence', focus: 'AI systems, applications & intelligent solutions', sessions: ['AI Agents 101', 'AI Agents for Jordan 2076'] },
            { title: 'Software Engineering', focus: 'Modern development & AI-assisted engineering', sessions: ['The Software Engineering Mindset', 'Agentic Software Engineering'] },
            { title: 'Innovation & Entrepreneurship', focus: 'Innovation, product thinking & startups', sessions: ['Design Thinking Foundations', 'From Idea to Impact'] },
            { title: 'Emerging Technologies & Future Innovation', focus: 'Emerging tech, digital infrastructure & trends', sessions: ['Quantum Computing & AI', 'Digital Twins: Building the Virtual Jordan of 2076'] },
          ].map((t) => (
            <div key={t.title} className="cyber-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t.title}</h4>
              <p style={{ color: '#B7B9BD', fontSize: '0.8rem', marginBottom: '0.6rem' }}>{t.focus}</p>
              {t.sessions.map((s) => (<div key={s} style={{ color: '#7EF3E8', fontSize: '0.8rem', display: 'flex', gap: '0.4rem' }}><span>›</span> {s}</div>))}
            </div>
          ))}
        </div>
        <div className="cyber-card" style={{ padding: '1.5rem', marginTop: '1.2rem', borderColor: 'rgba(126,243,232,0.35)' }}>
          <h4 style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.85rem', marginBottom: '0.4rem' }}>JORDAN 2076 HACKATHON FINALS</h4>
          <p style={{ color: '#B7B9BD', fontSize: '0.85rem', lineHeight: 1.6 }}>During Track Sessions I & II, selected finalist teams pitch in the main auditorium across Amman · Irbid · Petra · Aqaba tracks. Judging by INJAZ · UJIEC · EY · Replit. Winners announced at Closing Ceremony.</p>
        </div>
      </section>

      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 260px),1fr))', gap: '1.2rem' }}>
          <div className="cyber-card" style={{ padding: '1.8rem', textAlign: 'center' }}>
            <Sparkles size={24} color="#7EF3E8" style={{ marginBottom: '0.6rem' }} />
            <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1rem' }}>TIME TRAVEL EXPERIENCE</h3>
            <p style={{ color: '#7EF3E8', fontSize: '0.8rem', fontFamily: 'var(--font-orbitron)', margin: '0.3rem 0' }}>JORDAN 2076 · 20 MIN IMMERSIVE</p>
            <p style={{ color: '#B7B9BD', fontSize: '0.85rem', lineHeight: 1.6 }}>A short immersive experience presenting a vision of how technology, innovation, entrepreneurship, digital transformation and emerging industries could reshape Jordan by 2076.</p>
          </div>
          <div className="cyber-card" style={{ padding: '1.8rem', textAlign: 'center' }}>
            <MessageCircle size={24} color="#7EF3E8" style={{ marginBottom: '0.6rem' }} />
            <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1rem' }}>NEURACHIP DEBATE</h3>
            <p style={{ color: '#7EF3E8', fontSize: '0.8rem', fontFamily: 'var(--font-orbitron)', margin: '0.3rem 0' }}>WHERE DO HUMANS END AND TECHNOLOGY BEGIN? · 20 MIN</p>
            <p style={{ color: '#B7B9BD', fontSize: '0.85rem', lineHeight: 1.6 }}>Two perspectives · Moderated debate · Audience engagement on human-AI boundaries, opportunities and risks.</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-badge">PANELS & CLOSING</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: '1.2rem', marginTop: '1.2rem' }}>
          <div className="cyber-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.85rem', marginBottom: '0.6rem' }}>PANEL I — JORDAN 2076 BUILDERS</h4>
            <p style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 600 }}>Innovation, Startups & Jordan’s Next Economy</p>
            <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {panel1.map((p) => (<div key={p.id} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}><img src={p.avatar} alt={p.name} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} /><div><div style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 600 }}>{p.name}</div><div style={{ color: '#B7B9BD', fontSize: '0.75rem' }}>{p.role} — {p.organization}</div></div></div>))}
            </div>
            <div style={{ marginTop: '0.8rem', fontSize: '0.7rem', color: '#B7B9BD' }}>Themes: Innovation Ecosystem · Startups · Investment · Future Industries · Entrepreneurship</div>
          </div>
          <div className="cyber-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.85rem', marginBottom: '0.6rem' }}>PANEL II — DIGITAL TRANSFORMATION</h4>
            <p style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 600 }}>From Vision to Execution</p>
            <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {panel2.map((p) => (<div key={p.id} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}><img src={p.avatar} alt={p.name} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} /><div><div style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 600 }}>{p.name}</div><div style={{ color: '#B7B9BD', fontSize: '0.75rem' }}>{p.role} — {p.organization}</div></div></div>))}
            </div>
            <div style={{ marginTop: '0.8rem', fontSize: '0.7rem', color: '#B7B9BD' }}>Themes: Digital Transformation · AI · Digital Infrastructure · Strategy · Execution</div>
          </div>
        </div>
        <div className="cyber-card" style={{ padding: '1.5rem', marginTop: '1.2rem', textAlign: 'center', borderColor: '#7EF3E8' }}>
          <Award size={20} color="#7EF3E8" style={{ marginBottom: '0.4rem' }} />
          <h4 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8' }}>CLOSING CEREMONY & APPRECIATION</h4>
          <p style={{ color: '#B7B9BD', fontSize: '0.85rem', marginTop: '0.4rem' }}>Closing Remarks · Speaker & Partner Appreciation · Hackathon Winners Announcement · Awards</p>
          <p style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', marginTop: '0.6rem' }}>The future is not something we wait for. It is something we build.</p>
        </div>
      </section>
    </div>
  );
};
