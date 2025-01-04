import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'leaflet': 'leaflet'
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "leaflet/dist/leaflet.css";'
      }
    }
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          leaflet: ['leaflet'],
          vendor: ['vue']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['leaflet']
  }
})
