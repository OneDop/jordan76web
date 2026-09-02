import { Calendar, Clock, Target, TrendingUp, Megaphone, Presentation } from 'lucide-react';

export const Bootcamp: React.FC = () => {
  return (
    <div>
      <section className="section-container" style={{ paddingTop: '4rem' }}>
        <div className="cyber-badge">JORDAN 2076 BOOTCAMP</div>
        <h1 className="section-title" style={{ marginTop: '0.8rem' }}>FROM SOLUTION<br /><span style={{ color: '#7EF3E8' }}>TO VENTURE</span></h1>
        <p style={{ color: '#B7B9BD', maxWidth: '800px', lineHeight: 1.7, marginTop: '1rem' }}>
          A four-day practical program designed to strengthen the business and entrepreneurial side of participating teams’ solutions. Teams validate assumptions, understand customers and markets, develop their business model, explore financial and go-to-market strategies, and build a clear business case.
        </p>
        <div className="cyber-card" style={{ padding: '1.2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem', justifyContent: 'space-between' }}>
          {[
            { icon: <Calendar size={16} />, label: 'Dates', value: '13–16 September 2026' },
            { icon: <Clock size={16} />, label: 'Daily', value: '10:00 AM – 4:00 PM' },
            { icon: <Target size={16} />, label: 'Focus', value: 'Business & Entrepreneurship' },
            { icon: <TrendingUp size={16} />, label: 'Format', value: 'Sessions + Mentorship + Teamwork' },
          ].map((i) => (
            <div key={i.label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8' }}>{i.icon}</span>
              <div><div style={{ fontSize: '0.7rem', color: '#B7B9BD', fontFamily: 'var(--font-orbitron)', letterSpacing: '0.08em' }}>{i.label}</div><div style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 600 }}>{i.value}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: '1.5rem' }}>
          {[
            { day: 'Day 1', title: 'From Idea to Validated Opportunity', icon: <Target size={18} />, sessions: ['Idea Validation & Entrepreneurship Fundamentals', 'Customer Discovery, Value Proposition & Business Model Development'], outcomes: ['Assumption Map', 'Refined Problem Statement', 'Customer Persona', 'Value Proposition', 'Initial BMC', 'Customer Validation'] },
            { day: 'Day 2', title: 'Understanding Market & Financial Viability', icon: <TrendingUp size={18} />, sessions: ['Opportunity Analysis, Market Research & Competitive Analysis', 'Startup Financial Planning & Unit Economics'], outcomes: ['TAM/SAM/SOM', 'Competitor Analysis', 'Differentiation', 'Revenue Model', 'Pricing & Costs', 'Break-even & 12-Month Projection'] },
            { day: 'Day 3', title: 'Reaching the Market & Funding the Venture', icon: <Megaphone size={18} />, sessions: ['Go-to-Market Strategy & Customer Acquisition', 'Startup Funding & Investment Readiness'], outcomes: ['Early Adopters', 'Acquisition Channels', 'GTM Plan & Experiment', '90-Day Milestones', 'Budget & Funding Needs', 'Use of Funds'] },
            { day: 'Day 4', title: 'Building & Communicating the Investment Case', icon: <Presentation size={18} />, sessions: ['Startup Pitching & Investor Communication', 'Final Startup Pitching & Evaluation'], outcomes: ['Venture Story', 'Final Pitch Deck', 'Pitch Practice', 'Final Feedback', 'Final Business Case'] },
          ].map((d) => (
            <div key={d.day} className="cyber-card" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <span style={{ color: '#7EF3E8', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.3)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{d.icon}</span>
                <span style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{d.day}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '0.95rem', lineHeight: 1.3, marginBottom: '0.8rem' }}>{d.title}</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.7rem', color: '#B7B9BD', fontFamily: 'var(--font-orbitron)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>SESSIONS</div>
                {d.sessions.map((s) => (<div key={s} style={{ color: '#B7B9BD', fontSize: '0.82rem', lineHeight: 1.4, marginBottom: '0.3rem', display: 'flex', gap: '0.4rem' }}><span style={{ color: '#7EF3E8' }}>›</span> {s}</div>))}
              </div>
              <div style={{ marginTop: 'auto', background: 'rgba(0,27,58,0.5)', border: '1px solid rgba(126,243,232,0.15)', borderRadius: '8px', padding: '0.9rem' }}>
                <div style={{ fontSize: '0.7rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>OUTCOMES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {d.outcomes.map((o) => (<span key={o} style={{ fontSize: '0.68rem', color: '#B7B9BD', background: 'rgba(126,243,232,0.08)', border: '1px solid rgba(126,243,232,0.15)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{o}</span>))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="cyber-card" style={{ padding: '1.5rem', textAlign: 'center', borderColor: 'rgba(126,243,232,0.3)' }}>
          <p style={{ color: '#B7B9BD', fontSize: '0.9rem' }}>Bootcamp is for advancing Hackathon teams. Final day delivers a complete venture story, pitch deck and business case evaluated by mentors.</p>
        </div>
      </section>
    </div>
  );
};
