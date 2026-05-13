/**
 * Wrapper minimal autour de <img> qui consomme la sortie de
 * vite-imagetools (`?responsive` → `{ src, srcset, w, h }`).
 *
 * Rend un <img> classique — sans <picture>, sans wrapper — pour rester
 * 100 % compatible avec les CSS existantes (qui ciblent directement
 * `img` ou une classe sur l'img). Le navigateur choisit la bonne
 * variante via `srcset` + `sizes`.
 */
export default function ResponsiveImage({
  picture,
  alt,
  sizes,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  className,
  style,
}) {
  if (!picture || !picture.src) {
    return null;
  }

  return (
    <img
      src={picture.src}
      srcSet={picture.srcset}
      sizes={sizes}
      width={picture.w}
      height={picture.h}
      alt={alt}
      loading={loading}
      fetchpriority={fetchPriority}
      decoding={decoding}
      className={className}
      style={style}
    />
  );
}
