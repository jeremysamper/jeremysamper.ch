import Container from '../components/ui/Container.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';
import Button from '../components/ui/Button.jsx';
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx';
import portrait from '../assets/images/portrait-jeremy.jpg?responsive';
import action from '../assets/images/assiette-bleue.jpg?responsive';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './About.module.css';

const VALUES = [
  {
    title: 'Terrain avant tout',
    description:
      "Pas de théorie déconnectée. J'observe, j'écoute, je travaille avec les équipes en place avant toute recommandation.",
  },
  {
    title: 'Mesure & résultats',
    description:
      "Chaque action a un objectif chiffré. La rentabilité, la fluidité, la qualité — tout doit pouvoir être suivi dans la durée.",
  },
  {
    title: 'Respect du produit',
    description:
      "Optimiser ne veut jamais dire dégrader. La maîtrise des coûts ne doit pas se faire au détriment de l'identité culinaire.",
  },
  {
    title: 'Autonomie des équipes',
    description:
      "L'objectif n'est pas de me rendre indispensable, mais de transmettre. Que les acquis tiennent quand je ne suis plus là.",
  },
];

export default function About() {
  useDocumentTitle(
    "À propos — Jérémy Samper",
    "Consultant en restauration, Jérémy Samper accompagne les restaurateurs et hôteliers de Suisse romande et de France dans la structuration de leur cuisine."
  );

  return (
    <>
      {/* HERO PORTRAIT */}
      <header className={styles.hero}>
        <div className={styles.heroImage}>
          <ResponsiveImage picture={portrait} alt="Portrait de Jérémy Samper en cuisine, veste de chef sombre, regard intense tourné sur le côté" sizes="100vw" loading="eager" fetchPriority="high" />
          <div className={styles.heroOverlay} aria-hidden="true" />
        </div>
        <Container className={styles.heroContent}>
          <FadeIn>
            <span className={styles.heroEyebrow}>À propos</span>
            <h1 className={styles.heroTitle}>
              Jérémy Samper,<br/>
              <span className="editorial">consultant culinaire.</span>
            </h1>
          </FadeIn>
        </Container>
      </header>

      {/* PARCOURS */}
      <Container as="section" className={styles.parcours}>
        <FadeIn className={styles.parcoursInner}>
          <span className="eyebrow">Parcours</span>
          <h2 className={styles.h2}>
            Plusieurs années sur le terrain, <em>en Suisse romande et en France.</em>
          </h2>

          <div className={styles.body}>
            <p>
              Après plusieurs années passées en cuisine, en Suisse romande et en France,
              j'ai choisi de mettre mon expérience au service des restaurateurs et hôteliers
              qui souhaitent structurer leur établissement et améliorer leurs performances —
              sans renoncer à l'exigence du produit.
            </p>
            <p>
              Mon approche est volontairement concrète et opérationnelle&nbsp;: analyser les
              pratiques existantes, mettre en place des process clairs, accompagner les
              équipes, optimiser les coûts. Chaque mission est pensée sur mesure, en
              fonction de la réalité du terrain et des objectifs du client.
            </p>
            <p>
              Mon objectif est simple&nbsp;: apporter des solutions efficaces, durables et
              mesurables, pour une cuisine plus sereine, mieux organisée et plus rentable
              au quotidien.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* PHOTO ACTION + CITATION ÉDITORIALE */}
      <Container as="section" className={styles.actionSection}>
        <div className={styles.actionGrid}>
          <FadeIn className={styles.actionImageCol}>
            <figure className={styles.actionFigure}>
              <ResponsiveImage picture={action} alt="Création gastronomique vue de dessus : assiette en céramique bleue avec pétales violets, mousse et croûtons sur fond granite" sizes="(min-width: 900px) 50vw, 100vw" loading="lazy" />
              <figcaption className={styles.actionCaption}>
                <span aria-hidden="true">—</span> Sur le terrain, en cuisine
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.actionTextCol}>
            <span className="eyebrow">Approche</span>
            <blockquote className={styles.pullQuote}>
              <p>
                <em>«&nbsp;Pas de théorie déconnectée.</em>
                {' '}
                On observe, on écoute, on travaille avec les équipes en place.
                Ensuite seulement, on structure.&nbsp;»
              </p>
            </blockquote>
            <p className={styles.pullMeta}>
              Jérémy Samper, en mission chez un client.
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* VALEURS */}
      <section className={styles.valuesSection}>
        <Container>
          <div className={styles.valuesHead}>
            <FadeIn>
              <span className="eyebrow">Valeurs</span>
              <h2 className={styles.h2}>
                Quatre repères <em>qui guident chaque mission.</em>
              </h2>
            </FadeIn>
          </div>

          <ul className={styles.valuesList}>
            {VALUES.map((value, i) => (
              <FadeIn
                key={value.title}
                as="li"
                delay={i * 0.06}
                className={styles.valueItem}
              >
                <span className={styles.valueNumber}>0{i + 1}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <Container as="section" className={styles.cta}>
        <FadeIn className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            <em>Travaillons ensemble.</em>
          </h2>
          <p className={styles.ctaText}>
            Le premier échange est gratuit et sans engagement.
          </p>
          <Button to="/contact">Réserver un appel</Button>
        </FadeIn>
      </Container>
    </>
  );
}
