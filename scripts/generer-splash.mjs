// Génère les écrans de démarrage iOS (fond uni, couleur de lancement.json, un par taille
// d'iPhone) et insère les balises <link> correspondantes dans index.html.
// Commande : npm run generate-splash (à relancer si la couleur de lancement change)
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { appleSplashScreenSizes } from '@vite-pwa/assets-generator/config'
import sharp from 'sharp'

const { fond: FOND } = JSON.parse(await readFile('lancement.json', 'utf8'))
const DOSSIER = 'public/splash'
const DEBUT = '<!-- splash:debut -->'
const FIN = '<!-- splash:fin -->'

const tailles = new Map()
for (const [nom, taille] of Object.entries(appleSplashScreenSizes)) {
  if (!nom.startsWith('iPhone')) continue
  const largeur = Math.min(taille.width, taille.height)
  const hauteur = Math.max(taille.width, taille.height)
  tailles.set(`${largeur}x${hauteur}@${taille.scaleFactor}`, { largeur, hauteur, echelle: taille.scaleFactor })
}

await mkdir(DOSSIER, { recursive: true })
const liens = []
for (const { largeur, hauteur, echelle } of tailles.values()) {
  const fichier = `apple-splash-${largeur}x${hauteur}.png`
  await sharp({ create: { width: largeur, height: hauteur, channels: 3, background: FOND } })
    .png({ compressionLevel: 9, palette: true })
    .toFile(`${DOSSIER}/${fichier}`)
  const media = `screen and (device-width: ${largeur / echelle}px) and (device-height: ${hauteur / echelle}px) and (-webkit-device-pixel-ratio: ${echelle}) and (orientation: portrait)`
  liens.push(`    <link rel="apple-touch-startup-image" media="${media}" href="/splash/${fichier}" />`)
}

const html = await readFile('index.html', 'utf8')
const debut = html.indexOf(DEBUT)
const fin = html.indexOf(FIN)
if (debut < 0 || fin < 0) throw new Error(`Marqueurs ${DEBUT} / ${FIN} introuvables dans index.html`)
await writeFile('index.html', `${html.slice(0, debut + DEBUT.length)}\n${liens.join('\n')}\n    ${html.slice(fin)}`)
console.log(`${liens.length} écrans de démarrage générés dans ${DOSSIER}`)
