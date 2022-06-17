import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // },
  plugins: [vue(),
    VitePWA({
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Vite POS',
        short_name: 'VitePOS',
        description: 'Manage your point of sales',
        theme_color: '#0096FF',
        icons: [
          {
            src: './192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './192x192.png',
            sizes: '192x192',
            type: 'image/png',
          }
        ]
      }
    })]
})