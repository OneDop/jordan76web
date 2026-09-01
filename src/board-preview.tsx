// Dev-only isolated preview of the hackathon board (avoids the heavy hero canvas).
// ?open opens the first track dialog on load so it can be captured headlessly.
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { InvestigationBoard } from './components/InvestigationBoard';
import { VenueMap } from './components/VenueMap';

function Preview() {
  useEffect(() => {
    if (!new URLSearchParams(location.search).has('open')) return;
    document.querySelector<HTMLButtonElement>('.ib-evidence')?.click();
  }, []);

  return (
    <div style={{ background: 'var(--color-bg-dark)', minHeight: '100vh' }}>
      <InvestigationBoard onOpenRegister={() => console.log('register')} />
      <VenueMap />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preview />
  </StrictMode>,
);
