import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Le service worker se met à jour tout seul quand une nouvelle version est déployée
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'icon.svg', 'apple-touch-icon-180x180.png'],
      manifest: {
        name: '1day-app - G4A',
        short_name: '1day-app',
        description:
          'Comprendre les enjeux des prochaines élections françaises pour faire des choix éclairés.',
        lang: 'fr',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        theme_color: '#ffd6e7',
        background_color: '#ffd6e7',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Uniquement les fichiers statiques de l'app (pas les données de public/data)
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
        globIgnores: ['data/**'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/data\//],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
