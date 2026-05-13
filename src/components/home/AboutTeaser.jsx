import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import Image from '../ui/Image.jsx';
import portrait from '../../assets/images/portrait-jeremy-souriant.jpg?card';
import styles from './AboutTeaser.module.css';

export default function AboutTeaser() {
  return (
    <section className={styles.section} aria-labelledby="about-teaser-title">
      <Container>
        <div className={styles.grid}>
          <FadeIn className={styles.textCol}>
            <span className="eyebrow">À propos</span>
            <h2 id="about-teaser-title" className={styles.title}>
              Jérémy Samper,<br/>
              <span className="editorial">consultant en restauration.</span>
            </h2>

            <div className={styles.body}>
              <p className={styles.lead}>
                Spécialisé dans l'organisation des cuisines et l'optimisation
                de la rentabilité, j'interviens auprès des restaurateurs et
                hôteliers en Suisse romande et en France.
              </p>
              <p>
                Mon approche est volontairement concrète et opérationnelle :
                analyser les pratiques existantes, mettre en place des process
                clairs, accompagner les équipes et optimiser les coûts. Chaque
                mission est pensée sur mesure, en fonction de la réalité du
                terrain et des objectifs du client.
              </p>
            </div>

            <div className={styles.cta}>
              <Button to="/a-propos">En savoir plus sur mon parcours</Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className={styles.imageCol}>
            <figure className={styles.figure}>
              <Image
                src={portrait}
                alt="Portrait de Jérémy Samper en cuisine, veste de chef sombre, sourire et bras croisés"
                ratio="4/5"
                sizes="(min-width: 880px) 400px, 100vw"
                objectPosition="center 30%"
                loading="lazy"
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionMark} aria-hidden="true">—</span>
                Sur le terrain, en cuisine
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
