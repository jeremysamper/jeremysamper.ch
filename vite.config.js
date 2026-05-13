import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

/**
 * Pipeline d'images :
 *
 *   ?wide  → 640/1024/1600 — pour hero & sections full-bleed
 *   ?card  → 400/800       — pour vignettes, portraits et mood images
 *                            (max-width ≤ ~440px côté affichage)
 *
 *   ?responsive : alias rétrocompatible vers ?wide tant que les imports
 *                 historiques n'ont pas tous migré. À retirer au commit 9.
 *
 * Toutes les variantes sont émises en WebP (q82 pour wide, q80 pour
 * card — légèrement plus agressif sur les petites tailles, écart visuel
 * imperceptible). Sortie `as=img` → l'import retourne
 * { src, srcset, w, h }, consommé directement par <Image>.
 */
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('wide') || url.searchParams.has('responsive')) {
          return new URLSearchParams({
            w: '640;1024;1600',
            format: 'webp',
            quality: '82',
            as: 'img',
          });
        }
        if (url.searchParams.has('card')) {
          return new URLSearchParams({
            w: '400;800',
            format: 'webp',
            quality: '80',
            as: 'img',
          });
        }
        return new URLSearchParams();
      },
    }),
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
});
