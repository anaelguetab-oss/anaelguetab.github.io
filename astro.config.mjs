// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://anaelguetb.github.io
export default defineConfig({
  // site: '#',
  // base: '/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});
