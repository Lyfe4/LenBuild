import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    // CRA ran autoprefixer against the browserslist in package.json; keep doing so.
    postcss: { plugins: [autoprefixer()] },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    // Keep CRA's output layout: react-snap (postbuild) prerenders from build/.
    outDir: 'build',
    assetsDir: 'static',
    // react-snap drives Puppeteer 1.x (Chromium 78), which can't parse ES2020+
    // syntax such as optional chaining. Without this, prerendering fails silently.
    target: 'es2019',
  },
});
