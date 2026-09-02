import { Link } from 'react-router-dom';
import { Target, Compass, Lightbulb, Users, Rocket, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div>
      <section className="section-container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="cyber-badge">ABOUT JORDAN 2076</div>
        <h1 className="section-title" style={{ marginTop: '0.8rem', fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>WHAT FOUNDATIONS MUST WE BUILD TODAY<br /><span style={{ color: '#7EF3E8' }}>TO SHAPE JORDAN'S FUTURE?</span></h1>
        <p style={{ color: '#B7B9BD', maxWidth: '800px', lineHeight: 1.7, marginTop: '1rem' }}>
          Jordan 2076 is a future-focused technology and innovation initiative built around one question: What foundations must we build today to shape Jordan's future? The initiative brings together technology, innovation, entrepreneurship, young talent, industry expertise, and ecosystem collaboration through an integrated journey of building, validation, learning, and connection.
        </p>
      </section>

      <section className="section-container" style={{ paddingTop: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: '1.5rem' }}>
          {[
            { icon: <Target size={20} />, title: 'Vision', text: 'To inspire and enable a generation of builders who can use technology, innovation, and entrepreneurship to contribute to Jordan’s future.' },
            { icon: <Compass size={20} />, title: 'Mission', text: 'To connect young talent with practical challenges, technical knowledge, entrepreneurial thinking, industry expertise, and ecosystem opportunities through an integrated journey of building, validation, learning, and collaboration.' },
            { icon: <Lightbulb size={20} />, title: 'Theme — From Foundations to the Future', text: 'The future is built on foundations created today: strong technical capabilities, modern engineering practices, innovative thinking, entrepreneurship, digital infrastructure, and collaboration across the ecosystem.' },
          ].map((c) => (
            <div key={c.title} className="cyber-card" style={{ padding: '1.8rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8', marginBottom: '1rem' }}>{c.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1rem', marginBottom: '0.6rem' }}>{c.title}</h3>
              <p style={{ color: '#B7B9BD', fontSize: '0.9rem', lineHeight: 1.6 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-badge">OBJECTIVES</div>
        <h2 className="section-title" style={{ fontSize: '1.4rem', marginTop: '0.6rem' }}>WHAT WE AIM TO ACHIEVE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 240px),1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          {[
            'Enable technology-driven solutions connected to Jordanian sectors',
            'Strengthen the link between technical development and business viability',
            'Expose participants to current and emerging technology practices',
            'Create meaningful ecosystem interaction',
            'Encourage future-focused discussion around digital transformation, innovation, and Jordan’s next economy',
          ].map((o) => (
            <div key={o} className="cyber-card" style={{ padding: '1.2rem', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} color="#7EF3E8" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span style={{ color: '#B7B9BD', fontSize: '0.9rem', lineHeight: 1.5 }}>{o}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-badge">THE JOURNEY</div>
        <h2 className="section-title" style={{ fontSize: '1.4rem', marginTop: '0.6rem' }}>HACKATHON — BOOTCAMP — CONGRESS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 200px),1fr))', gap: '1.2rem', marginTop: '1.5rem' }}>
          {[
            { k: 'BUILD', t: 'Hackathon', d: 'Develop technology-driven solutions across four sector challenges.', to: '/hackathon' },
            { k: 'VALIDATE', t: 'Bootcamp', d: 'Strengthen the business case: customers, market, model & GTM.', to: '/bootcamp' },
            { k: 'CONNECT', t: 'Congress', d: 'Bring together builders, experts and partners around the future.', to: '/congress' },
          ].map((s) => (
            <Link key={s.t} to={s.to} style={{ textDecoration: 'none' }} className="cyber-card">
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.75rem', letterSpacing: '0.12em' }}>{s.k}</div>
                <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', margin: '0.4rem 0' }}>{s.t}</h3>
                <p style={{ color: '#B7B9BD', fontSize: '0.85rem' }}>{s.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-card" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: 'clamp(1.25rem, 3vw, 2rem)', alignItems: 'center', borderColor: 'rgba(126,243,232,0.35)' }}>
          <div>
            <div className="cyber-badge">CONGRESS DATE & VENUE</div>
            <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1.3rem', marginTop: '0.6rem' }}>SATURDAY, 10 OCTOBER 2026</h3>
            <p style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.9rem', marginTop: '0.4rem' }}>University of Jordan Academy · Expected 350–400</p>
            <p style={{ color: '#B7B9BD', fontSize: '0.9rem', marginTop: '0.6rem', lineHeight: 1.6 }}>Flagship Congress Day with keynotes, tracks, panels, Time Travel Experience, NeuraChip Debate and Closing Ceremony.</p>
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
              <Link to="/congress" className="btn-cyber-primary"><Rocket size={16} /> View Congress</Link>
              <a href="https://maps.google.com/?q=University+of+Jordan+Academy" target="_blank" rel="noreferrer" className="btn-cyber-outline">Google Maps</a>
            </div>
          </div>
          <div style={{ background: 'rgba(0,27,58,0.5)', border: '1px solid rgba(126,243,232,0.2)', borderRadius: '12px', padding: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', marginBottom: '0.8rem' }}><Users size={14} /> 350–400 EXPECTED</div>
            <div style={{ height: '160px', borderRadius: '8px', background: 'linear-gradient(135deg, rgba(126,243,232,0.08), rgba(0,27,58,0.6))', border: '1px dashed rgba(126,243,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B7B9BD', fontSize: '0.85rem' }}>UoJ Academy Map Preview</div>
            <div style={{ marginTop: '0.8rem', fontSize: '0.8rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)' }}>31.98°N 35.85°E · Amman, Jordan</div>
          </div>
        </div>
      </section>
    </div>
  );
};
