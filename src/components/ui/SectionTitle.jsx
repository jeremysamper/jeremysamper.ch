import styles from './SectionTitle.module.css';

/**
 * Titre de section avec eyebrow optionnel + filet + heading.
 * Reproduit le pattern récurrent du site Wix actuel.
 */
export default function SectionTitle({
  eyebrow,
  children,
  level = 'h2',
  align = 'left',
  size = 'md',
  withRule = true,
  className = '',
}) {
  const Tag = level;
  const cls = [
    styles.wrapper,
    styles[`align-${align}`],
    styles[`size-${size}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {withRule && <span className={styles.rule} aria-hidden="true" />}
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <Tag className={styles.heading}>{children}</Tag>
    </div>
  );
}
