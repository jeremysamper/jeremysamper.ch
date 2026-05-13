import styles from './Container.module.css';

/**
 * Container — wrapper de largeur maxi pour le contenu éditorial.
 *
 * Par défaut : max-width 1120px (--container-content).
 * Variantes :
 *   variant="wide"     -> 1440px (Hero, FinalCta…)
 *   variant="narrow"   -> 880px  (sections resserrées)
 *   variant="reading"  -> 720px  (texte long, articles)
 *   variant="full"     -> 100%   (full-bleed sans padding)
 *
 * La prop `size` est conservée comme alias rétrocompatible.
 */
export default function Container({
  children,
  variant,
  size,
  as: Tag = 'div',
  className = '',
  ...props
}) {
  const v = variant || size;
  const cls = [styles.container, v && styles[v], className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  );
}
