import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import { TESTIMONIALS } from '../../data/testimonials.js';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  // Affiche uniquement les témoignages validés
  const visible = TESTIMONIALS.filter((t) => t.published);
  if (visible.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <Container>
        <div className={styles.head}>
          <FadeIn>
            <SectionTitle eyebrow="Ils en parlent" size="lg" align="left">
              <span className="editorial">Le terrain</span>, en quelques mots.
            </SectionTitle>
          </FadeIn>
        </div>

        <ul className={styles.grid}>
          {visible.map((t, i) => (
            <FadeIn
              key={t.id}
              as="li"
              delay={i * 0.1}
              className={styles.item}
            >
              <blockquote className={styles.quote}>
                <span className={styles.openQuote} aria-hidden="true">“</span>
                <p>{t.quote}</p>
                <footer className={styles.author}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.meta}>
                    {t.role} — {t.place}
                  </span>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
