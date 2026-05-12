import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('responsive')) {
          return new URLSearchParams({
            w: '640;1024;1600;2400',
            format: 'webp;jpg',
            quality: '82',
            as: 'picture',
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
