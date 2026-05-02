import { Link } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import Button from '../ui/Button.jsx';
import { SERVICES } from '../../data/services.js';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
  return (
    <section className={styles.section} aria-labelledby="services-grid-title">
      <Container>
        <div className={styles.head}>
          <FadeIn>
            <SectionTitle eyebrow="Mes services" size="lg">
              Cinq leviers,<br/>une seule logique&nbsp;: <span className={styles.titleAccent}>votre&nbsp;rentabilité.</span>
            </SectionTitle>
          </FadeIn>
        </div>

        <ul className={styles.grid}>
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.id}
              as="li"
              delay={i * 0.05}
              className={styles.item}
            >
              <Link to="/services" className={styles.card}>
                <div className={styles.imageWrap}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <span className={styles.number}>{service.number}</span>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.short}>{service.short}</p>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className={styles.footer}>
          <Button to="/services">Voir tous les services en détail</Button>
        </FadeIn>
      </Container>
    </section>
  );
}
