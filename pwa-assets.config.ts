import {
  defineConfig,
  minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

// Génère les icônes PNG de la PWA à partir de public/icon.svg
// Commande : npm run generate-pwa-assets
export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset: {
    ...preset,
    maskable: { ...preset.maskable, padding: 0, resizeOptions: { background: '#111111' } },
    apple: { ...preset.apple, padding: 0, resizeOptions: { background: '#111111' } },
  },
  images: ['public/icon.svg'],
})
