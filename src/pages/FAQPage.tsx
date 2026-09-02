import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/faqs';

export const FAQPage: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>('All');
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const cats = ['All', 'General', 'Hackathon', 'Bootcamp', 'Congress'];
  const filtered = activeCat === 'All' ? FAQ_DATA : FAQ_DATA.filter((f) => f.category === activeCat);
  return (
    <div>
      <section className="section-container" style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="cyber-badge">FAQ</div>
        <h1 className="section-title" style={{ marginTop: '0.8rem' }}>FREQUENTLY ASKED <span style={{ color: '#7EF3E8' }}>QUESTIONS</span></h1>
        <p style={{ color: '#B7B9BD', maxWidth: '700px', lineHeight: 1.6, marginTop: '0.8rem' }}>General, Hackathon, Bootcamp and Congress — all answers in one place.</p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          {cats.map((c) => (
            <button key={c} onClick={() => { setActiveCat(c); setOpenIdx(0); }} style={{ background: activeCat === c ? 'rgba(126,243,232,0.15)' : 'transparent', color: activeCat === c ? '#7EF3E8' : '#B7B9BD', border: `1px solid ${activeCat === c ? '#7EF3E8' : 'rgba(183,185,189,0.15)'}`, padding: '0.45rem 1rem', borderRadius: '20px', fontFamily: 'var(--font-orbitron)', fontSize: '0.75rem', cursor: 'pointer' }}>{c}</button>
          ))}
        </div>
      </section>

      <section className="section-container" style={{ paddingTop: '1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {filtered.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.question} className="cyber-card" style={{ padding: 0, overflow: 'hidden', borderColor: isOpen ? 'rgba(126,243,232,0.4)' : undefined }}>
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1.1rem 1.2rem', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: isOpen ? '#7EF3E8' : 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isOpen ? '#0A0A0A' : '#7EF3E8', flexShrink: 0 }}><HelpCircle size={16} /></span>
                  <span style={{ flex: 1, color: '#F5F7F8', fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(0.82rem, 2vw, 0.9rem)', fontWeight: 600, minWidth: 0, overflowWrap: 'break-word' }}>{item.question}</span>
                  <span className="cyber-badge" style={{ fontSize: '0.6rem', display: 'none' }}>{item.category}</span>
                  <ChevronDown size={16} color="#7EF3E8" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                </button>
                {isOpen && <div style={{ padding: '0 1.2rem 1.2rem 1.2rem', color: '#B7B9BD', fontSize: '0.88rem', lineHeight: 1.6, overflowWrap: 'break-word' }}>{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
