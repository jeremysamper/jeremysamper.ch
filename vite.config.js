import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('responsive')) {
          // Single WebP output (supporté par 96+% des navigateurs) avec
          // 4 largeurs pour le srcset. On reste sur un <img> classique
          // pour ne pas perturber la mise en page existante.
          return new URLSearchParams({
            w: '640;1024;1600;2400',
            format: 'webp',
            quality: '82',
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
