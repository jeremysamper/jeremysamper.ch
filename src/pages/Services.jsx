import Container from '../components/ui/Container.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';
import Button from '../components/ui/Button.jsx';
import { SERVICES } from '../data/services.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Services.module.css';

export default function Services() {
  useDocumentTitle(
    "Services — Jérémy Samper",
    "Cinq leviers concrets pour structurer votre cuisine et améliorer votre rentabilité : organisation, coûts, cartes, formation et consulting."
  );

  return (
    <>
      <header className={styles.pageHead}>
        <Container>
          <FadeIn className={styles.headInner}>
            <span className="eyebrow">Mes services</span>
            <h1 className={styles.pageTitle}>
              Cinq leviers,<br/>
              <span className="editorial">une seule logique.</span>
            </h1>
            <p className={styles.pageLead}>
              Chaque mission est pensée sur mesure, en fonction de la réalité du terrain et
              des objectifs de l'établissement. Voici les cinq angles d'intervention que je
              déploie selon votre besoin.
            </p>
          </FadeIn>
        </Container>
      </header>

      <Container as="section" className={styles.list}>
        {SERVICES.map((service, i) => {
          const reversed = i % 2 === 1;
          return (
            <FadeIn
              key={service.id}
              as="article"
              className={`${styles.row} ${reversed ? styles.reversed : ''}`}
              id={service.id}
            >
              <div className={styles.imageCol}>
                <figure className={styles.figure}>
                  <img src={service.image} alt={service.alt} loading="lazy" />
                </figure>
              </div>

              <div className={styles.textCol}>
                <span className={styles.number}>{service.number}</span>
                <h2 className={styles.title}>{service.title}</h2>
                <span className={styles.rule} aria-hidden="true" />
                <p className={styles.description}>{service.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </Container>

      <Container as="section" className={styles.footerCta}>
        <FadeIn className={styles.ctaInner}>
          <p className={styles.ctaLead}>
            Un besoin spécifique <em>qui ne rentre dans aucune case&nbsp;?</em>
          </p>
          <p className={styles.ctaText}>
            Discutons-en directement. Le premier échange est gratuit et sans engagement.
          </p>
          <Button to="/contact">Me contacter</Button>
        </FadeIn>
      </Container>
    </>
  );
}
