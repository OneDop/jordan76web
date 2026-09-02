import { ExternalLink, Star, Shield, Award, Users, Globe } from 'lucide-react';

const Tier: React.FC<{ badge: string; title: string; desc: string; icon: React.ReactNode; children?: React.ReactNode }> = ({ badge, title, desc, icon, children }) => (
  <div className="cyber-card" style={{ padding: '1.8rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <span className="cyber-badge">{badge}</span><span style={{ color: '#7EF3E8' }}>{icon}</span>
    </div>
    <h3 style={{ fontFamily: 'var(--font-orbitron)', color: '#F5F7F8', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h3>
    <p style={{ color: '#B7B9BD', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1rem' }}>{desc}</p>
    {children}
  </div>
);

export const Partners: React.FC = () => {
  return (
    <div>
      <section className="section-container" style={{ paddingTop: '4rem' }}>
        <div className="cyber-badge">PARTNERS</div>
        <h1 className="section-title" style={{ marginTop: '0.8rem' }}>ORGANIZATIONS <span style={{ color: '#7EF3E8' }}>POWERING JORDAN 2076</span></h1>
        <p style={{ color: '#B7B9BD', maxWidth: '750px', lineHeight: 1.7, marginTop: '1rem' }}>Strategic, sponsorship and ecosystem partners supporting the Hackathon, Bootcamp and Congress. Recognition by tier — logos, overviews and links per partner.</p>
      </section>

      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 300px),1fr))', gap: '1.2rem' }}>
          <Tier badge="STRATEGIC / INSTITUTIONAL" title="Strategic Partners" desc="Major institutional relationships. Large logo, organization overview, website and role in Jordan 2076." icon={<Shield size={18} color="#7EF3E8" />}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
              {[1, 2].map((i) => (<div key={i} style={{ height: '90px', borderRadius: '10px', background: 'rgba(126,243,232,0.06)', border: '1px dashed rgba(126,243,232,0.25)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}><div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(0,27,58,0.8)', border: '1px solid rgba(126,243,232,0.2)' }} /><span style={{ fontSize: '0.7rem', color: '#B7B9BD' }}>Partner Logo</span></div>))}
            </div>
          </Tier>
          <Tier badge="PLATINUM SPONSOR" title="Platinum" desc="Highest visibility. Large logo, overview, website and promotional video if provided." icon={<Star size={18} color="#7EF3E8" />}>
            <div style={{ height: '110px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(126,243,232,0.08), rgba(0,27,58,0.6))', border: '1px solid rgba(126,243,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B7B9BD', fontSize: '0.85rem' }}>Platinum Sponsor Showcase</div>
            <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.6rem' }}><span style={{ fontSize: '0.75rem', color: '#7EF3E8', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><ExternalLink size={12} /> Website</span><span style={{ fontSize: '0.75rem', color: '#B7B9BD' }}>• Video</span></div>
          </Tier>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 240px),1fr))', gap: '1.2rem', marginTop: '1.2rem' }}>
          <Tier badge="GOLD" title="Gold Sponsors" desc="Logo, name, short description and website." icon={<Award size={18} color="#7EF3E8" />}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>{[1, 2, 3, 4].map((i) => (<div key={i} style={{ height: '70px', borderRadius: '8px', background: 'rgba(0,27,58,0.6)', border: '1px solid rgba(126,243,232,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B7B9BD', fontSize: '0.7rem' }}>Gold {i}</div>))}</div>
          </Tier>
          <Tier badge="SILVER" title="Silver Sponsors" desc="Logo, name and website." icon={<Award size={18} color="#7EF3E8" />}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem' }}>{[1, 2, 3, 4, 5, 6].map((i) => (<div key={i} style={{ height: '60px', borderRadius: '8px', background: 'rgba(0,27,58,0.5)', border: '1px solid rgba(126,243,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B7B9BD', fontSize: '0.68rem' }}>Silver</div>))}</div>
          </Tier>
          <Tier badge="BRONZE" title="Bronze Sponsors" desc="Logo and name." icon={<Users size={18} color="#7EF3E8" />}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>{[1, 2, 3, 4, 5].map((i) => (<div key={i} style={{ width: '70px', height: '70px', borderRadius: '8px', background: 'rgba(0,27,58,0.45)', border: '1px solid rgba(126,243,232,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B7B9BD', fontSize: '0.65rem' }}>Bronze</div>))}</div>
          </Tier>
        </div>

        <div className="cyber-card" style={{ padding: '1.8rem', marginTop: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#7EF3E8', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', marginBottom: '0.8rem' }}><Globe size={16} /> COMMUNITY / MEDIA / ECOSYSTEM PARTNERS</div>
          <p style={{ color: '#B7B9BD', fontSize: '0.85rem', marginBottom: '1rem' }}>Supporting ecosystem orgs — Track Partner, Powered By (e.g., Petra Ride for Aqaba), Hackathon Judge, Incubation Partner, Ecosystem Partner.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 130px),1fr))', gap: '0.8rem' }}>
            {['Track Partner', 'Powered by Petra Ride', 'Hackathon Judge', 'Incubation Partner', 'Ecosystem Partner', 'Media Partner'].map((r) => (
              <div key={r} style={{ padding: '0.9rem', borderRadius: '8px', background: 'rgba(0,27,58,0.6)', border: '1px solid rgba(126,243,232,0.15)', textAlign: 'center' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(126,243,232,0.08)', margin: '0 auto 0.5rem', border: '1px dashed rgba(126,243,232,0.25)' }} />
                <div style={{ fontSize: '0.75rem', color: '#B7B9BD' }}>{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
