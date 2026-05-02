import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './NotFound.module.css';

export default function NotFound() {
  useDocumentTitle("Page introuvable — Jérémy Samper");
  return (
    <Container className={styles.wrapper}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>
          Cette page <em>n'existe pas.</em>
        </h1>
        <p className={styles.text}>
          Le lien que vous avez suivi est incorrect ou la page a été déplacée.
        </p>
        <div className={styles.actions}>
          <Button to="/">Retour à l'accueil</Button>
          <Button to="/contact" variant="primary">Me contacter</Button>
        </div>
      </div>
    </Container>
  );
}
