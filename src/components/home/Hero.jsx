import { motion, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button.jsx';
import Image from '../ui/Image.jsx';
import heroImage from '../../assets/images/hero-dressage.jpg?wide';
import styles from './Hero.module.css';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.25 + i * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className={styles.hero} aria-label="Présentation">
      {/* Image de fond avec effet Ken Burns subtil */}
      <div className={styles.imageWrap}>
        <Image
          src={heroImage}
          alt="Dressage d'un gravlax en cuisine : main gantée disposant délicatement les éléments sur l'assiette"
          fill
          className={styles.image}
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.vignette} aria-hidden="true" />
      </div>

      {/* Watermark numéro grande taille */}
      <span className={styles.watermark} aria-hidden="true">01</span>

      <div className={styles.content}>
        <motion.span
          className={styles.eyebrow}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
        >
          <span className={styles.eyebrowDot} aria-hidden="true" />
          Consultant culinaire — Suisse romande &amp; France
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <span className={styles.titleLine1}>Optimisez</span>
          <span className={styles.titleLine2}>
            votre <em>cuisine.</em>
          </span>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          J'aide les restaurateurs et hôteliers à structurer leur cuisine et à
          améliorer leur rentabilité — <em>sans renoncer à l'exigence du produit.</em>
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <Button to="/contact" variant="light">Réserver un appel</Button>
          <Button to="/services" variant="ghost-light">Découvrir mes services</Button>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLabel}>Découvrir</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
