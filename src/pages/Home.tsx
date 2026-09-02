import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Trophy, Lightbulb, Rocket, Zap } from 'lucide-react';
import { Hero } from '../components/Hero';
import { VisionPillars } from '../components/VisionPillars';
import { SignalChatSection } from '../components/SignalChatSection';
import { HackathonSection } from '../components/HackathonSection';
import { CongressTitleSection } from '../components/CongressTitleSection';
import { KeynoteSpeakersSection } from '../components/KeynoteSpeakersSection';
import { FlowingMenu } from '../components/FlowingMenu';
import { CountdownTimer } from '../components/CountdownTimer';
import { BootScreen } from '../components/BootScreen';

export const Home: React.FC = () => {
  const { openRegister, openMission } = useOutletContext<{ openRegister: () => void; openMission: () => void }>() as any;
  const [booting, setBooting] = useState(true);
  return (
    <>
      <Hero onOpenRegister={openRegister} />
      <VisionPillars />
      <SignalChatSection />

      <section className="section-container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="cyber-badge">JORDAN 2076 JOURNEY</div>
          <h2 className="section-title" style={{ marginTop: '0.8rem' }}>THREE CONNECTED EXPERIENCES</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>Build · Validate · Connect — one integrated journey from idea to impact.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: '1.5rem' }}>
          {[
            { icon: <Zap size={22} />, title: 'HACKATHON — Build', desc: 'Four cities. Four challenges. Develop software solutions across education, healthcare, tourism & transportation.', to: '/hackathon', accent: '01' },
            { icon: <Lightbulb size={22} />, title: 'BOOTCAMP — Validate', desc: '4-day venture program. Validate, model, go-to-market and pitch your solution.', to: '/bootcamp', accent: '02' },
            { icon: <Rocket size={22} />, title: 'CONGRESS — Connect', desc: 'Flagship day with keynotes, tracks, panels, Time Travel and Finals at UJ Academy.', to: '/congress', accent: '03' },
          ].map((c) => (
            <Link key={c.title} to={c.to} style={{ textDecoration: 'none' }} className="cyber-card" >
              <div style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ color: '#7EF3E8', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.3)', borderRadius: '8px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</span>
                  <span style={{ fontFamily: 'var(--font-orbitron)', color: 'rgba(126,243,232,0.35)', fontWeight: 900, fontSize: '1.6rem' }}>{c.accent}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1.05rem', marginBottom: '0.6rem' }}>{c.title}</h3>
                <p style={{ color: '#B7B9BD', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{c.desc}</p>
                <span style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>Explore <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <HackathonSection onOpenMission={openMission} />

      <section className="section-container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="cyber-badge">THE FOUNDATIONS</div>
          <h3 className="section-title" style={{ fontSize: '1.6rem' }}>PILLARS OF THE CONGRESS</h3>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', fontSize: '0.95rem' }}>Artificial Intelligence · Software Engineering · Innovation & Entrepreneurship · Emerging Technologies — each with two focused sessions.</p>
          <Link to="/congress" className="btn-cyber-outline" style={{ marginTop: '1.2rem' }}>View Congress</Link>
        </div>
      </section>

      <CongressTitleSection />
      <KeynoteSpeakersSection />
      <FlowingMenu />

      <section className="section-container" style={{ textAlign: 'center' }}>
        <div className="cyber-badge">COUNTDOWN</div>
        <h2 className="section-title">CONGRESS DAY — 10 OCT 2026</h2>
        <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>University of Jordan Academy · Expected 350–400 delegates</p>
        <CountdownTimer />
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem', color: '#B7B9BD', fontFamily: 'var(--font-rajdhani)', fontSize: '0.9rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} color="#7EF3E8" /> Saturday, 10 October 2026</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} color="#7EF3E8" /> University of Jordan Academy</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><Users size={14} color="#7EF3E8" /> 350–400</span>
        </div>
      </section>

      <section className="section-container" style={{ paddingTop: '1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="cyber-badge">PARTNERS PREVIEW</div>
          <h3 className="section-title" style={{ fontSize: '1.5rem' }}>BUILT WITH THE ECOSYSTEM</h3>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', fontSize: '0.95rem' }}>Strategic, Platinum and ecosystem partners powering Jordan 2076.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 140px),1fr))', gap: '1rem', opacity: 0.9 }}>
          {['PLATINUM', 'GOLD', 'SILVER', 'ECOSYSTEM'].map((t) => (
            <div key={t} className="cyber-card" style={{ padding: '1.4rem', textAlign: 'center', borderStyle: 'dashed' }}>
              <div style={{ fontFamily: 'var(--font-orbitron)', color: 'rgba(126,243,232,0.5)', fontSize: '0.75rem', letterSpacing: '0.12em' }}>{t}</div>
              <div style={{ marginTop: '0.6rem', height: '36px', borderRadius: '6px', background: 'rgba(126,243,232,0.06)', border: '1px solid rgba(126,243,232,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B7B9BD', fontSize: '0.8rem' }}>Logo</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}><Link to="/partners" className="btn-cyber-outline">View All Partners</Link></div>
      </section>

      <section className="section-container" style={{ paddingTop: '1rem' }}>
        <div className="cyber-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,27,58,0.85), rgba(10,10,10,0.9))', borderColor: '#7EF3E8' }}>
          <div style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>FINAL TRANSMISSION</div>
          <h2 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: 'clamp(1.4rem,3.5vw,2rem)', marginBottom: '0.8rem' }}>The future is not something we wait for.<br /><span style={{ color: '#7EF3E8' }}>It is something we build.</span></h2>
          <p style={{ color: '#B7B9BD', marginBottom: '1.5rem' }}>Join Hackathon, Bootcamp and Congress — From Foundations to the Future.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openRegister} className="btn-cyber-primary">Register Now <ArrowRight size={16} /></button>
            <Link to="/about" className="btn-cyber-outline">About Jordan 2076</Link>
          </div>
        </div>
      </section>

      <section className="section-container" style={{ paddingTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1.1rem' }}>LATEST ANNOUNCEMENTS</h3>
          <span style={{ color: '#B7B9BD', fontSize: '0.85rem' }}>Registration · Speakers · Partners · Hackathon updates</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 260px),1fr))', gap: '1rem', marginTop: '1.2rem' }}>
          {[
            { tag: 'REGISTRATION', title: 'Congress Registration is Open', desc: 'Secure your pass for 10 Oct 2026 at UJ Academy. 350–400 seats.' },
            { tag: 'SPEAKERS', title: 'Keynotes: Amjad Masad & Yazid Hijazeen', desc: 'Future of Software Development and Leading Through Technology.' },
            { tag: 'HACKATHON', title: 'Four Tracks: Amman · Irbid · Petra · Aqaba', desc: 'JOD 750 per winning team + incubation. Powered by Petra Ride (Aqaba).' },
          ].map((n) => (
            <div key={n.title} className="cyber-card" style={{ padding: '1.4rem' }}>
              <span className="cyber-badge" style={{ fontSize: '0.65rem' }}>{n.tag}</span>
              <h4 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '0.95rem', margin: '0.8rem 0 0.4rem' }}>{n.title}</h4>
              <p style={{ color: '#B7B9BD', fontSize: '0.85rem', lineHeight: 1.5 }}>{n.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '1rem' }}>
        <Link to="/hackathon" className="btn-cyber-outline"><Trophy size={16} /> Explore Hackathon</Link>
        <Link to="/congress" className="btn-cyber-outline">View Congress</Link>
        <Link to="/partners" className="btn-cyber-outline">View All Partners</Link>
      </section>

      {booting && <BootScreen onDone={() => setBooting(false)} />}
    </>
  );
};
