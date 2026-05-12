/**
 * Picture wrapper consuming the `?responsive` query from vite-imagetools.
 * The import returns `{ sources: { webp, jpg, ... }, img: { src, w, h } }`.
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
  if (!picture || !picture.img) {
    return null;
  }

  return (
    <picture style={{ display: 'contents' }}>
      {Object.entries(picture.sources).map(([format, srcset]) => (
        <source
          key={format}
          type={`image/${format === 'jpg' ? 'jpeg' : format}`}
          srcSet={srcset}
          sizes={sizes}
        />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={loading}
        fetchpriority={fetchPriority}
        decoding={decoding}
        className={className}
        style={style}
      />
    </picture>
  );
}
