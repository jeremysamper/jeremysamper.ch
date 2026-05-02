import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import { CLIENTS } from '../../data/clients.js';
import styles from './ClientLogos.module.css';

/**
 * Affiche les logos des établissements clients en blanc sur fond sombre.
 *
 * Props :
 * - variant: 'home' (compact, en sandwich entre 2 sections claires)
 *          | 'page' (plus aéré, sur la page Réalisations)
 */
export default function ClientLogos({ variant = 'home' }) {
  if (CLIENTS.length === 0) return null;

  return (
    <section
      className={`${styles.section} ${styles[variant]}`}
      aria-labelledby="clients-title"
    >
      <Container>
        <FadeIn className={styles.head}>
          <SectionTitle
            eyebrow="Ils m'ont fait confiance"
            size="md"
            align="left"
          >
            Des établissements <span className="editorial">qui ont passé un cap.</span>
          </SectionTitle>
        </FadeIn>

        <ul className={styles.grid}>
          {CLIENTS.map((client, i) => (
            <FadeIn
              key={client.name}
              as="li"
              delay={i * 0.08}
              className={styles.card}
            >
              <div className={styles.logoWrap}>
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className={styles.logo}
                />
              </div>
              <span className={styles.cardName}>{client.name}</span>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
