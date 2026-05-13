import Hero from '../components/home/Hero.jsx';
import AboutTeaser from '../components/home/AboutTeaser.jsx';
import ServicesGrid from '../components/home/ServicesGrid.jsx';
import Method from '../components/home/Method.jsx';
import ForWho from '../components/home/ForWho.jsx';
import ClientLogos from '../components/home/ClientLogos.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import FinalCta from '../components/home/FinalCta.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function Home() {
  useDocumentTitle(
    "Jérémy Samper — Consultant culinaire | Suisse romande &amp; France",
    "Jérémy Samper, consultant culinaire pour restaurants et hôtels en Suisse romande et en France. Organisation de cuisine, optimisation des coûts, création de cartes, formation des équipes."
  );
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesGrid />
      <Method />
      <ForWho />
      <ClientLogos variant="home" />
      <Testimonials />
      <FinalCta />
    </>
  );
}
