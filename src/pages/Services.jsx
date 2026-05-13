import Container from '../components/ui/Container.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';
import Button from '../components/ui/Button.jsx';
import Image from '../components/ui/Image.jsx';
import { SERVICES } from '../data/services.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Services.module.css';

/**
 * Bloc d'accent — rendu d'une "colonne" différenciée par service selon
 * service.accent.type : image avec ratio dédié, mot-signature en gros
 * corps italique, ou pull-quote bordée à gauche.
 */
function ServiceAccent({ service }) {
  const { accent, image, alt } = service;

  if (accent?.type === 'text') {
    return (
      <div className={styles.accentText} aria-hidden="true">
        {accent.value}
      </div>
    );
  }

  if (accent?.type === 'quote') {
    const lines = Array.isArray(accent.value) ? accent.value : [accent.value];
    return (
      <blockquote className={styles.pullQuote}>
        {lines.map((line, i) => (
          <p key={i} className={styles.pullQuoteLine}>{line}</p>
        ))}
      </blockquote>
    );
  }

  // type === 'image' (par défaut)
  const ratio = accent?.ratio || '3/4';
  return (
    <figure className={styles.figure}>
      <Image
        src={image}
        alt={alt}
        ratio={ratio}
        sizes="(min-width: 880px) 400px, 100vw"
        objectPosition="center 35%"
        loading="lazy"
      />
    </figure>
  );
}

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
            <p className={`${styles.pageLead} measure`}>
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
              <div className={styles.accentCol}>
                <ServiceAccent service={service} />
              </div>

              <div className={styles.textCol}>
                <span className={styles.number}>{service.number}</span>
                <h2 className={styles.title}>{service.title}</h2>
                <span className={styles.rule} aria-hidden="true" />
                <p className={`${styles.description} measure`}>{service.description}</p>
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
