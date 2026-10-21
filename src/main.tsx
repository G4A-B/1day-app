import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './styles/global.css'
import './styles/splash.css'
import App from './App.tsx'

// Service worker : la page se recharge toute seule quand une nouvelle version
// est déployée. On vérifie aussi à chaque retour sur l'app (PWA mise en arrière-plan).
registerSW({
  immediate: true,
  onRegisteredSW(_url, registration) {
    if (!registration) return
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') void registration.update()
    })
  },
})

// L'app a démarré : le filet de sécurité de index.html pourra resservir plus tard.
try {
  sessionStorage.removeItem('rechargement-pwa')
} catch {
  // stockage indisponible (navigation privée) : rien à faire
}

// Splash screen (index.html) : retiré du DOM une fois son animation de sortie terminée.
const splash = document.getElementById('splash')
splash?.addEventListener('animationend', (e) => {
  if (e.target === splash) splash.remove()
})
try {
  sessionStorage.setItem('splash-vu', '1')
} catch {
  // stockage indisponible : le splash se rejouera, sans conséquence
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
