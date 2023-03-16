import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      // polyfills
      Buffer: 'vite-compatible-readable-buffer',
      stream: 'vite-compatible-readable-stream',
      util: 'rollup-plugin-node-polyfills/polyfills/util',
    },
  },
});
