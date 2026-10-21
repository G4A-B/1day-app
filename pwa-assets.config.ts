import {
  defineConfig,
  minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

// Génère les icônes PNG de la PWA à partir de public/icon.svg
// Commande : npm run generate-pwa-assets
export default defineConfig({
  headLinkOptions: { preset: '2023' },
  // L'icône est déjà pleine page (fond noir Poléa) : aucune marge ajoutée.
  preset: {
    ...preset,
    transparent: { ...preset.transparent, padding: 0 },
    maskable: { ...preset.maskable, padding: 0, resizeOptions: { background: '#11120f' } },
    apple: { ...preset.apple, padding: 0, resizeOptions: { background: '#11120f' } },
  },
  images: ['public/icon.svg'],
})
