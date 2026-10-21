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
      // Enregistré dans src/main.tsx (rechargement automatique à chaque nouvelle version)
      injectRegister: false,
      includeAssets: ['favicon.ico', 'icon.svg', 'logo.svg', 'apple-touch-icon-180x180.png'],
      manifest: {
        name: 'Poléa',
        short_name: 'Poléa',
        description: 'Comprendre les enjeux de l’élection présidentielle pour faire des choix éclairés.',
        lang: 'fr',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        // Noir Poléa : écran de lancement Android et barre d'état
        theme_color: '#11120f',
        background_color: '#11120f',
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
        globIgnores: ['data/**', 'splash/**'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/data\//],
        cleanupOutdatedCaches: true,
        // La nouvelle version prend la main tout de suite (la page se recharge, cf. main.tsx)
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
})
