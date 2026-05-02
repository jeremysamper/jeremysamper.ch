import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsappFloat from './components/layout/WhatsappFloat.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Realisations from './pages/Realisations.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

import Mentions from './pages/legal/Mentions.jsx';
import Conditions from './pages/legal/Conditions.jsx';
import Cookies from './pages/legal/Cookies.jsx';
import Confidentialite from './pages/legal/Confidentialite.jsx';

// Remet le scroll en haut à chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Aller au contenu</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/mentions-legales" element={<Mentions />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/confidentialite" element={<Confidentialite />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
