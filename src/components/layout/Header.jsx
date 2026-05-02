import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoSignature from '../../assets/images/logo-jeremy-samper.png';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/realisations', label: 'Réalisations' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="Jérémy Samper, Consultant culinaire">
          <img
            src={logoSignature}
            alt="Jérémy Samper"
            className={styles.logoImage}
            width="180"
            height="100"
          />
          <span className={styles.brandTag}>Consultant culinaire</span>
        </Link>

        <nav className={styles.navDesktop} aria-label="Navigation principale">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mini-CTA Contact (desktop seulement, à droite du menu) */}
        <Link to="/contact" className={styles.miniCta}>
          <span>Réserver un appel</span>
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square"/>
          </svg>
        </Link>

        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Navigation mobile">
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.to} style={{ '--delay': `${0.05 * i}s` }}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li style={{ '--delay': `${0.05 * NAV_ITEMS.length}s` }}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${styles.mobileLink} ${styles.mobileLinkCta} ${isActive ? styles.mobileLinkActive : ''}`
                }
              >
                Réserver un appel
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
