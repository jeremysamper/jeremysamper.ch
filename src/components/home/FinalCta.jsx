import Button from '../ui/Button.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import { CONTACT } from '../../data/contact.jsx';
import ctaImage from '../../assets/images/cta-final.jpg';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <div className={styles.imageWrap}>
        <img
          src={ctaImage}
          alt=""
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <FadeIn className={styles.inner}>
          <span className={styles.eyebrow}>Travaillons ensemble</span>

          <h2 id="final-cta-title" className={styles.title}>
            Parlons de <em>votre établissement.</em>
          </h2>

          <p className={styles.lead}>
            Un audit, un projet d'ouverture, une équipe à structurer&nbsp;? Le premier
            échange est gratuit et sans engagement.
          </p>

          <div className={styles.actions}>
            <Button to="/contact" variant="light">Réserver un appel</Button>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              className={styles.ghostLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={`tel:${CONTACT.phones[0].tel}`}
              className={styles.ghostLink}
            >
              {CONTACT.phones[0].display}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
