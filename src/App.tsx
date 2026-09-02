import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Hackathon } from './pages/Hackathon';
import { Bootcamp } from './pages/Bootcamp';
import { Congress } from './pages/Congress';
import { Partners } from './pages/Partners';
import { FAQPage } from './pages/FAQPage';
import { Contact } from './pages/Contact';

export function App() {
  return (
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
  );
}

export default App;
