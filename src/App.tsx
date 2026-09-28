import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Route-level code splitting: each page (and its unique deps, e.g.
// framer-motion on Partners) ships in its own chunk instead of one
// ~700 kB initial bundle. Pages use named exports, hence the mapping.
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Hackathon = lazy(() => import('./pages/Hackathon').then((m) => ({ default: m.Hackathon })));
const Bootcamp = lazy(() => import('./pages/Bootcamp').then((m) => ({ default: m.Bootcamp })));
const Congress = lazy(() => import('./pages/Congress').then((m) => ({ default: m.Congress })));
const Partners = lazy(() => import('./pages/Partners').then((m) => ({ default: m.Partners })));
const FAQPage = lazy(() => import('./pages/FAQPage').then((m) => ({ default: m.FAQPage })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));

const RouteFallback: React.FC = () => (
  <div
    aria-hidden="true"
    style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#7EF3E8',
      fontFamily: 'Orbitron, sans-serif',
      fontSize: '0.8rem',
      letterSpacing: '0.2em',
    }}
  >
    LOADING…
  </div>
);

export function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/congress" element={<Congress />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
