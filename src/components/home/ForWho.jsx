import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import { AUDIENCES } from '../../data/audiences.js';
import styles from './ForWho.module.css';

export default function ForWho() {
  return (
    <section className={styles.section} aria-labelledby="forwho-title">
      <Container>
        <div className={styles.head}>
          <FadeIn>
            <SectionTitle eyebrow="Pour qui ?" size="lg" align="left">
              Des établissements <span className="editorial">qui veulent passer un cap.</span>
            </SectionTitle>
          </FadeIn>
        </div>

        <ul className={styles.list}>
          {AUDIENCES.map((aud, i) => (
            <FadeIn
              key={aud.title}
              as="li"
              delay={i * 0.06}
              className={styles.item}
            >
              <span className={styles.itemNumber}>0{i + 1}</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{aud.title}</h3>
                <p className={styles.itemDesc}>{aud.description}</p>
              </div>
              <span className={styles.itemArrow} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square"/>
                </svg>
              </span>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
