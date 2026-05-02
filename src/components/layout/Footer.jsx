import { Link } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import { CONTACT, SOCIALS, LEGAL_LINKS } from '../../data/contact.jsx';
import logoSignature from '../../assets/images/logo-jeremy-samper.png';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        {/* CTA bandeau (en haut du footer, pleine largeur) */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <p className={styles.bannerLead}>
              Une question, un projet, <em>un audit ?</em>
            </p>
            <p className={styles.bannerText}>
              Le premier échange est gratuit et sans engagement.
              Réponse sous 48 h ouvrées.
            </p>
          </div>
          <Link to="/contact" className={styles.bannerCta}>
            Réserver un appel
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square"/>
            </svg>
          </Link>
        </div>

        {/* Grille principale 4 colonnes */}
        <div className={styles.grid}>
          {/* Colonne 1 — Marque */}
          <div className={styles.colBrand}>
            <img
              src={logoSignature}
              alt="Jérémy Samper"
              className={styles.brandLogo}
              width="160"
              height="90"
            />
            <p className={styles.brandTag}>
              Consultant culinaire — Suisse romande &amp; France
            </p>
            <ul className={styles.socials} aria-label="Réseaux sociaux">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className={styles.socialLink}
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className={styles.col}>
            <span className={styles.colTitle}>Navigation</span>
            <ul className={styles.colLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact direct */}
          <div className={styles.col}>
            <span className={styles.colTitle}>Contact</span>
            <ul className={styles.colLinks}>
              {CONTACT.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className={styles.phoneLink}>
                    <span className={styles.phoneFlag}>{p.country}</span>
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT.email}`} className={styles.emailLink}>
                  {CONTACT.email}
                </a>
              </li>
              <li className={styles.address}>
                {CONTACT.address.line1}<br/>
                {CONTACT.address.line2}
              </li>
            </ul>
          </div>

          {/* Colonne 4 — Légal */}
          <div className={styles.col}>
            <span className={styles.colTitle}>Légal</span>
            <ul className={styles.colLinks}>
              {LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {year} Jérémy Samper. Tous droits réservés.
          </p>
          <p className={styles.craft}>
            <span aria-hidden="true">—</span> Site conçu avec soin.
          </p>
        </div>
      </Container>
    </footer>
  );
}
