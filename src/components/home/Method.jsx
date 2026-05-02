import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import { METHOD_STEPS } from '../../data/method.js';
import styles from './Method.module.css';

export default function Method() {
  return (
    <section className={styles.section} aria-labelledby="method-title">
      <Container>
        <div className={styles.head}>
          <FadeIn>
            <SectionTitle eyebrow="Méthode" size="lg" align="left">
              Quatre étapes,<br/>
              <span className="editorial">un cap clair.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.headLead}>
              Chaque mission suit une trame éprouvée, ajustée au contexte et aux enjeux
              de votre établissement.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineRule} aria-hidden="true" />
          <ol className={styles.steps}>
            {METHOD_STEPS.map((step, i) => (
              <FadeIn
                key={step.number}
                as="li"
                delay={i * 0.1}
                className={styles.step}
              >
                <div className={styles.stepMarker}>
                  <span className={styles.stepDot} aria-hidden="true" />
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </FadeIn>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
