import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { NgmiPolyfill } from "vite-plugin-ngmi-polyfill";

export default defineConfig({
  plugins: [vue(), NgmiPolyfill()],
});
