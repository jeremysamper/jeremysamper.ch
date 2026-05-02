import Container from '../../components/ui/Container.jsx';
import FadeIn from '../../components/ui/FadeIn.jsx';
import styles from './LegalLayout.module.css';

export default function LegalLayout({ title, lastUpdate, children }) {
  return (
    <Container className={styles.wrapper}>
      <FadeIn className={styles.inner}>
        <header className={styles.head}>
          <span className="eyebrow">Information légale</span>
          <h1 className={styles.title}>{title}</h1>
          {lastUpdate && (
            <p className={styles.update}>Dernière mise à jour&nbsp;: {lastUpdate}</p>
          )}
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
