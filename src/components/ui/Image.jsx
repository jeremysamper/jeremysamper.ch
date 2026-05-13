/**
 * <Image> — composant image éditorial unique du site.
 *
 * Rend un <img> natif avec :
 *   - src + srcset + sizes pour la responsiveness (sortie vite-imagetools)
 *   - ratio CSS imposé (aspect-ratio) → cadrage prévisible quelle que soit
 *     la source
 *   - width/height HTML calculés depuis `ratio` (anti-CLS) — ce ne sont
 *     pas les dimensions natives de l'image, mais celles qui donnent le
 *     bon rapport au moteur de rendu
 *   - object-fit: cover par défaut, object-position paramétrable
 *   - loading="lazy" par défaut, fetchPriority optionnel pour le hero
 *
 * Le composant ne porte AUCUN wrapper : pas de <picture>, pas de <figure>,
 * pas de span. Une seule balise <img>. Les CSS du parent (figure, wrap,
 * etc.) s'appliquent comme avant.
 *
 * Contrat développeur (throw en dev, silencieux en prod) :
 *   - `alt` doit être DÉFINI (string, vide autorisée pour décoratif)
 *   - `ratio` doit être au format "n/m" (ex "3/4", "1/1", "4/3", "16/9")
 */

function parseRatio(ratio) {
  const m = /^(\d+)\s*\/\s*(\d+)$/.exec(String(ratio || '').trim());
  if (!m) return null;
  const w = Number(m[1]);
  const h = Number(m[2]);
  if (!w || !h) return null;
  return { w, h, css: `${w} / ${h}` };
}

export default function Image({
  src,
  alt,
  ratio,
  fill = false,
  sizes,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  objectPosition,
  className,
  style,
}) {
  // Contrats — visibles en dev, silencieux en prod build.
  if (import.meta.env.DEV) {
    if (typeof alt === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('<Image> : prop `alt` manquante (utiliser alt="" pour décoratif).');
    }
    if (!fill && !parseRatio(ratio)) {
      // eslint-disable-next-line no-console
      console.error(`<Image> : prop \`ratio\` invalide ou manquante (reçu : ${JSON.stringify(ratio)}). Format attendu : "3/4", "1/1", "4/3", etc. Pour un fill complet du parent, utiliser fill.`);
    }
  }

  if (!src || !src.src) return null;

  // Mode `fill` : l'image remplit le parent (qui doit avoir des
  // dimensions connues — Hero, FinalCta). Pas d'aspect-ratio imposé.
  // Le parent porte la responsabilité du CLS via min-height etc.
  if (fill) {
    return (
      <img
        src={src.src}
        srcSet={src.srcset}
        sizes={sizes}
        alt={alt ?? ''}
        loading={loading}
        fetchpriority={fetchPriority}
        decoding={decoding}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: objectPosition || 'center',
          display: 'block',
          ...style,
        }}
      />
    );
  }

  const r = parseRatio(ratio) ?? { w: 1, h: 1, css: '1 / 1' };

  const mergedStyle = {
    width: '100%',
    height: 'auto',
    aspectRatio: r.css,
    objectFit: 'cover',
    objectPosition: objectPosition || 'center',
    display: 'block',
    ...style,
  };

  return (
    <img
      src={src.src}
      srcSet={src.srcset}
      sizes={sizes}
      width={r.w}
      height={r.h}
      alt={alt ?? ''}
      loading={loading}
      fetchpriority={fetchPriority}
      decoding={decoding}
      className={className}
      style={mergedStyle}
    />
  );
}
