import adapter from '@sveltejs/adapter-netlify';

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: './src/components'
    }
  }
};

export default config;
