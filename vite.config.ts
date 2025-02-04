import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',  // Chỉ sử dụng esbuild, bỏ lightningcss
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'vue-i18n'],
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
    include: ['vue', 'vue-router', 'vue-i18n'],
  },
  server: {
    port: 3000,
    fs: {
      strict: true,
    },
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  preview: {
    port: 8080,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  }
})
