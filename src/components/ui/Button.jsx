import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Bouton dans le style "outline minimaliste" du site Wix actuel :
 * fine bordure, fond transparent, lettres espacées, look discret.
 *
 * Variantes :
 * - primary  : noir sur blanc (par défaut)
 * - light    : blanc sur fond sombre (utilisé sur les hero)
 * - solid    : fond noir plein, texte blanc (CTA forts)
 *
 * Polymorphe : <Button to="/x"> (Link), <Button href="..."> (a), <Button onClick> (button)
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type,
  className = '',
  ...props
}) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        <span className={styles.label}>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        <span className={styles.label}>{children}</span>
      </a>
    );
  }

  return (
    <button type={type || 'button'} className={cls} onClick={onClick} {...props}>
      <span className={styles.label}>{children}</span>
    </button>
  );
}
