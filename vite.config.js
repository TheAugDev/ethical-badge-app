import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ethical-badge-app/', // Set to your repo name for GitHub Pages
  css: {
    postcss: './postcss.config.js',
  },
});
