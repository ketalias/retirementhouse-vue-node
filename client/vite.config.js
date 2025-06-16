import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { cpSync } from 'fs'

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    {
      name: 'copy-redirects',
      writeBundle() {
        cpSync('_redirects', 'dist/_redirects')
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})