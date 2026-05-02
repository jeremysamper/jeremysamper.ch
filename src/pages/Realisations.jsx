import Container from '../components/ui/Container.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';
import Button from '../components/ui/Button.jsx';
import ClientLogos from '../components/home/ClientLogos.jsx';
import { TESTIMONIALS } from '../data/testimonials.js';
import { CLIENTS } from '../data/clients.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Realisations.module.css';

export default function Realisations() {
  useDocumentTitle(
    "Réalisations — Jérémy Samper",
    "Témoignages et établissements accompagnés par Jérémy Samper, consultant culinaire."
  );

  const visibleTestimonials = TESTIMONIALS.filter((t) => t.published);

  return (
    <>
      <header className={styles.pageHead}>
        <Container>
          <FadeIn className={styles.headInner}>
            <span className="eyebrow">Réalisations</span>
            <h1 className={styles.pageTitle}>
              Le travail <em>parle pour lui-même.</em>
            </h1>
            <p className={styles.pageLead}>
              Une sélection d'établissements accompagnés et ce qu'en disent leurs équipes.
            </p>
          </FadeIn>
        </Container>
      </header>

      {/* LOGOS CLIENTS */}
      {CLIENTS.length > 0 ? (
        <ClientLogos variant="page" />
      ) : (
        <section className={styles.logosPlaceholder}>
          <Container>
            <FadeIn className={styles.placeholderInner}>
              <span className="eyebrow">Ils m'ont fait confiance</span>
              <p className={styles.placeholderText}>
                Les logos des établissements accompagnés seront ajoutés ici prochainement.
              </p>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* TÉMOIGNAGES */}
      {visibleTestimonials.length > 0 ? (
        <section className={styles.testimonialsSection}>
          <Container>
            <FadeIn className={styles.testimonialsHead}>
              <span className="eyebrow">Témoignages</span>
              <h2 className={styles.h2}>
                Ce qu'ils en disent.
              </h2>
            </FadeIn>

            <ul className={styles.testimonialsList}>
              {visibleTestimonials.map((t, i) => (
                <FadeIn
                  key={t.id}
                  as="li"
                  delay={i * 0.08}
                  className={styles.testimonialItem}
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
      ) : (
        <section className={styles.testimonialsPlaceholder}>
          <Container>
            <FadeIn className={styles.placeholderInner}>
              <span className="eyebrow">Témoignages</span>
              <p className={styles.placeholderText}>
                Les témoignages des établissements accompagnés seront publiés prochainement.
              </p>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* CTA */}
      <Container as="section" className={styles.cta}>
        <FadeIn className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            <em>Votre établissement,</em> la prochaine référence&nbsp;?
          </h2>
          <Button to="/contact">Réserver un appel</Button>
        </FadeIn>
      </Container>
    </>
  );
}
