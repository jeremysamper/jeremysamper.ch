import { motion, useReducedMotion } from 'framer-motion';

/**
 * Wrapper d'animation : fade-in + translate Y léger au scroll.
 * Respecte prefers-reduced-motion (accessibilité).
 *
 * Usage :
 * <FadeIn>contenu</FadeIn>
 * <FadeIn delay={0.2}>contenu</FadeIn>
 * <FadeIn as="section" y={24}>contenu</FadeIn>
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 16,
  as = 'div',
  className = '',
  once = true,
  amount = 0.2,
  ...props
}) {
  const reduceMotion = useReducedMotion();

  const Tag = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className} {...props}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
