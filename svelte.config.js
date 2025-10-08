import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',        // output folder for hosting
      assets: 'build',       // same folder for static files
      fallback: 'index.html',// enables SPA-style routing
      precompress: false
    }),
    prerender: {
      handleHttpError: 'warn' // ignore 404s while building
    }
  }
};

export default config;
