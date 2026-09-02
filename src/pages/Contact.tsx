import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, Share2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); setForm({ name: '', email: '', subject: '', message: '' }); };
  return (
    <div>
      <section className="section-container" style={{ paddingTop: '4rem' }}>
        <div className="cyber-badge">CONTACT</div>
        <h1 className="section-title" style={{ marginTop: '0.8rem' }}>REACH THE <span style={{ color: '#7EF3E8' }}>JORDAN 2076 TEAM</span></h1>
        <p style={{ color: '#B7B9BD', maxWidth: '700px', lineHeight: 1.7, marginTop: '1rem' }}>Questions about registration, Hackathon, Bootcamp or Congress? Contact the organizing team — IEEE Computer Society, University of Jordan.</p>
      </section>

      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 300px),1fr))', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="cyber-card" style={{ padding: '1.6rem' }}>
              <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.08em' }}>CONTACT INFORMATION</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><span style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8' }}><Mail size={16} /></span><div><div style={{ color: '#B7B9BD', fontSize: '0.75rem', fontFamily: 'var(--font-orbitron)' }}>EMAIL</div><div style={{ color: '#F5F7F8', fontSize: '0.9rem' }}>info@jordan2076.jo</div></div></div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><span style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8' }}><Phone size={16} /></span><div><div style={{ color: '#B7B9BD', fontSize: '0.75rem', fontFamily: 'var(--font-orbitron)' }}>PHONE</div><div style={{ color: '#F5F7F8', fontSize: '0.9rem' }}>+962 6 XXX XXXX</div></div></div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><span style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(126,243,232,0.12)', border: '1px solid rgba(126,243,232,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8' }}><MapPin size={16} /></span><div><div style={{ color: '#B7B9BD', fontSize: '0.75rem', fontFamily: 'var(--font-orbitron)' }}>VENUE</div><div style={{ color: '#F5F7F8', fontSize: '0.9rem' }}>University of Jordan Academy — Amman</div></div></div>
              </div>
              <div style={{ marginTop: '1.2rem', padding: '0.9rem', borderRadius: '8px', background: 'rgba(0,27,58,0.5)', border: '1px solid rgba(126,243,232,0.15)' }}>
                <div style={{ color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.75rem', marginBottom: '0.4rem' }}>ORGANIZED BY</div>
                <div style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 600 }}>IEEE Computer Society — University of Jordan Student Branch Chapter</div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem' }}>
                {[{ icon: <Globe size={16} /> }, { icon: <Share2 size={16} /> }, { icon: <Send size={16} /> }].map((s, i) => (<a key={i} href="#" style={{ width: '36px', height: '36px', borderRadius: '6px', background: 'rgba(0,27,58,0.8)', border: '1px solid rgba(126,243,232,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7EF3E8' }}>{s.icon}</a>))}
              </div>
            </div>
            <div className="cyber-card" style={{ padding: '1.2rem', background: 'rgba(0,27,58,0.4)' }}>
              <div style={{ fontFamily: 'var(--font-orbitron)', color: '#7EF3E8', fontSize: '0.75rem', marginBottom: '0.6rem' }}>FIND US</div>
              <div style={{ height: '180px', borderRadius: '8px', background: 'linear-gradient(135deg, rgba(126,243,232,0.06), rgba(0,27,58,0.6))', border: '1px dashed rgba(126,243,232,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B7B9BD', fontSize: '0.85rem', flexDirection: 'column', gap: '0.6rem' }}>
                <MapPin size={20} color="#7EF3E8" />
                University of Jordan Academy
                <a href="https://maps.google.com/?q=University+of+Jordan+Academy" target="_blank" rel="noreferrer" className="btn-cyber-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.7rem' }}>Open Google Maps</a>
              </div>
            </div>
          </div>

          <div className="cyber-card" style={{ padding: '1.8rem', borderColor: 'rgba(126,243,232,0.3)' }}>
            <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1rem', marginBottom: '0.4rem' }}>SEND A MESSAGE</h3>
            <p style={{ color: '#B7B9BD', fontSize: '0.85rem', marginBottom: '1.2rem' }}>We typically respond within 24–48 hours.</p>
            {sent && <div style={{ background: 'rgba(126,243,232,0.12)', border: '1px solid #7EF3E8', borderRadius: '8px', padding: '0.8rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', marginBottom: '1rem', textAlign: 'center' }}>✓ MESSAGE SENT — WE'LL BE IN TOUCH</div>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required style={{ background: 'rgba(0,27,58,0.6)', border: '1px solid rgba(126,243,232,0.25)', borderRadius: '8px', padding: '0.8rem 1rem', color: '#F5F7F8', outline: 'none', fontSize: '0.9rem' }} />
              <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required style={{ background: 'rgba(0,27,58,0.6)', border: '1px solid rgba(126,243,232,0.25)', borderRadius: '8px', padding: '0.8rem 1rem', color: '#F5F7F8', outline: 'none', fontSize: '0.9rem' }} />
              <input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required style={{ background: 'rgba(0,27,58,0.6)', border: '1px solid rgba(126,243,232,0.25)', borderRadius: '8px', padding: '0.8rem 1rem', color: '#F5F7F8', outline: 'none', fontSize: '0.9rem' }} />
              <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} style={{ background: 'rgba(0,27,58,0.6)', border: '1px solid rgba(126,243,232,0.25)', borderRadius: '8px', padding: '0.8rem 1rem', color: '#F5F7F8', outline: 'none', fontSize: '0.9rem', resize: 'vertical' }} />
              <button type="submit" className="btn-cyber-primary" style={{ justifyContent: 'center' }}><Send size={16} /> Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
