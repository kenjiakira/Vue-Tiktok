import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    vue(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          utils: ['axios'],
          icons: ['@heroicons/vue']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name) {
            if (/\.(woff2?|ttf|eot)$/.test(assetInfo.name)) {
              return 'assets/fonts/[name]-[hash][extname]'
            }
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name)) {
              return 'assets/images/[name]-[hash][extname]'
            }
          }
          return 'assets/[name]-[hash][extname]'
        },
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
  server: {
    port: 3000,
    fs: {
      strict: true,
    },
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
    hmr: { overlay: false },
    cors: true
  },
  preview: {
    port: 8080,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  css: {
    devSourcemap: true
  }
})
