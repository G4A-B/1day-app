import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { CARTES, CARTES_PAR_ID, LIBELLES_CARTE } from '../../data/contenu'
import { THEMES } from '../../data/themes'
import { naviguer } from '../../lib/router'
import {
  collecterSavoir,
  repondreAvis,
  reporter,
  retirerDuPaquet,
  useProgression,
} from '../collection/progression'
import { CarteOuverte, type Issue } from './CarteOuverte'
import { FaceDos } from './FaceDos'
import './paquet.css'

/** Nombre de cartes visibles sur la table (les suivantes sont masquées). */
const VISIBLES = 8

/** Distance de défilement (px) pour passer d'une carte à la suivante. */
function calculerPas() {
  return Math.round(Math.min(220, Math.max(110, window.innerHeight * 0.22)))
}

/** Nombre pseudo-aléatoire entre 0 et 1, toujours le même pour une graine donnée. */
function hasard(graine: number) {
  const x = Math.sin(graine * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

// Par groupe de 3 cartes : une part à gauche (-1), une à droite (1), une au milieu (0),
// dans un ordre qui change d'un groupe à l'autre.
const ORDRES = [
  [-1, 0, 1],
  [-1, 1, 0],
  [0, -1, 1],
  [0, 1, -1],
  [1, -1, 0],
  [1, 0, -1],
]

/** Petit décalage propre à chaque carte sur la table (--px, --pr) : il la suit partout. */
const DECALAGES: Record<string, CSSProperties> = Object.fromEntries(
  CARTES.map((carte, n) => [
    carte.id,
    { '--px': `${(hasard(n + 303) - 0.5) * 12}px`, '--pr': `${(hasard(n + 404) - 0.5) * 6}deg` } as CSSProperties,
  ]),
)

/**
 * Trajectoire de sortie selon la place dans le paquet (--sx, --sr) : à gauche, à droite
 * ou au milieu, jamais exactement pareil. --rang : ordre de distribution à l'arrivée.
 */
function trajectoire(i: number): CSSProperties {
  const direction = ORDRES[Math.floor(hasard(Math.floor(i / 3) + 1) * ORDRES.length)][i % 3]
  const [a, b] = [101, 202].map((n) => hasard(i + n))
  return {
    '--sx': `${direction === 0 ? (a - 0.5) * 16 : direction * (48 + a * 26)}vw`,
    '--sr': `${direction === 0 ? (b - 0.5) * 12 : direction * (12 + b * 16)}deg`,
    '--rang': `${Math.max(0, VISIBLES - i)}`,
  } as CSSProperties
}

/** Défilement animé, résolu une fois arrivé (ou au bout d'une seconde). */
function defilerVers(el: HTMLElement, top: number) {
  return new Promise<void>((resolve) => {
    el.scrollTo({ top, behavior: 'smooth' })
    const debut = performance.now()
    const verifier = () => {
      if (Math.abs(el.scrollTop - top) < 2 || performance.now() - debut > 1000) resolve()
      else requestAnimationFrame(verifier)
    }
    requestAnimationFrame(verifier)
  })
}

/*
 * Paquet posé sur la table : la carte du dessus se redresse, on glisse vers le haut
 * pour qu'elle s'envole et que la suivante se redresse. Une carte jouée quitte la table
 * (Savoir ratée : elle revient quelques cartes plus loin).
 *
 * Le défilement est natif (doigt, inertie, aimantation gérés par le navigateur).
 * À chaque image, on calcule pour chaque carte son écart --o avec la carte
 * courante (0 = redressée, 1 = la suivante, -1 = la précédente) ;
 * paquet.css transforme cet écart en position 3D.
 */
export function Paquet() {
  const progression = useProgression()
  const liste = useMemo(() => progression.ordre.map((id) => CARTES_PAR_ID[id]).filter(Boolean), [progression.ordre])
  const nbCollectees = Object.keys(progression.savoir).length + Object.keys(progression.avis).length

  const defilement = useRef<HTMLDivElement>(null)
  const icone = useRef<HTMLButtonElement>(null)
  const cartes = useRef<(HTMLButtonElement | null)[]>([])
  const courante = useRef(0)
  const [index, setIndex] = useState(0)
  const [pas, setPas] = useState(calculerPas)
  const [ouverte, setOuverte] = useState<{ id: string; depuis: DOMRect } | null>(null)
  const [masquee, setMasquee] = useState<string | null>(null)

  useEffect(() => {
    const surResize = () => setPas(calculerPas())
    window.addEventListener('resize', surResize)
    return () => window.removeEventListener('resize', surResize)
  }, [])

  // Relancé aussi quand le paquet change : la carte courante reste à sa place.
  useLayoutEffect(() => {
    const el = defilement.current
    if (!el) return
    cartes.current.length = liste.length
    const derniere = Math.max(0, liste.length - 1)
    courante.current = Math.min(courante.current, derniere)
    el.scrollTop = courante.current * pas

    let image = 0
    const maj = () => {
      image = 0
      const p = el.scrollTop / pas
      cartes.current.forEach((carte, i) => {
        if (!carte) return
        const o = i - p
        // Sans transparence, une carte passée doit être sortie de l'écran avant d'être masquée.
        const visible = o > -2.4 && o < VISIBLES
        carte.style.visibility = visible ? '' : 'hidden'
        if (!visible) return
        carte.style.setProperty('--o', o.toFixed(4))
        // Les cartes passées s'envolent par-dessus le paquet.
        carte.style.zIndex = String(o < 0 ? 2000 + Math.round(-o * 100) : 1000 - Math.round(o * 100))
      })
      const i = Math.min(derniere, Math.max(0, Math.round(p)))
      if (i !== courante.current) {
        courante.current = i
        // Petite vibration (Android), seulement après un premier toucher.
        if ('vibrate' in navigator && navigator.userActivation?.hasBeenActive) navigator.vibrate(6)
      }
      setIndex(i)
    }
    const surDefilement = () => {
      if (!image) image = requestAnimationFrame(maj)
    }
    maj()
    el.addEventListener('scroll', surDefilement, { passive: true })
    return () => {
      el.removeEventListener('scroll', surDefilement)
      cancelAnimationFrame(image)
    }
  }, [pas, liste])

  function toucher(i: number) {
    if (ouverte) return
    if (i !== courante.current) {
      defilement.current?.scrollTo({ top: i * pas, behavior: 'smooth' })
      return
    }
    const carte = cartes.current[i]
    if (carte) setOuverte({ id: liste[i].id, depuis: carte.getBoundingClientRect() })
  }

  async function fermer(issue: Issue) {
    if (!ouverte) return
    const { id } = ouverte
    const i = liste.findIndex((c) => c.id === id)
    // Ajoutée à la collection : la carte s'est envolée, sa place reste vide le temps du défilement.
    if (issue === 'collectee') setMasquee(id)
    setOuverte(null)
    if (issue === 'annulee') return

    // La carte jouée s'envole de la table, la suivante se redresse…
    const el = defilement.current
    if (el && i < liste.length - 1) await defilerVers(el, (i + 1) * pas)
    // … puis on la retire du paquet : la suivante prend sa place, sans que rien ne bouge à l'écran.
    courante.current = i
    setMasquee(null)
    if (issue === 'collectee') collecterSavoir(id)
    else if (issue === 'reportee') reporter(id)
    else retirerDuPaquet(id)
  }

  const carteOuverte = ouverte ? CARTES_PAR_ID[ouverte.id] : null

  return (
    <div className="paquet">
      <header className="paquet__entete">
        <img className="paquet__logo" src="/logo.svg" alt="Poléa" width="426" height="152" />
        <button
          ref={icone}
          type="button"
          className="paquet__collection"
          aria-label={`Ma collection (${nbCollectees} cartes)`}
          onClick={() => naviguer('/collection')}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <rect x="7" y="3" width="13" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M4.5 6.5v12A2.5 2.5 0 0 0 7 21h9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {nbCollectees > 0 && <span className="paquet__compteur">{nbCollectees}</span>}
        </button>
      </header>

      <div
        ref={defilement}
        className="paquet__defilement"
        role="region"
        aria-label="Paquet de cartes : fais défiler pour changer de carte"
        tabIndex={0}
      >
        <div className="paquet__scene">
          {liste.map((carte, i) => (
            <button
              key={carte.id}
              ref={(el) => {
                cartes.current[i] = el
              }}
              type="button"
              className={`carte${ouverte?.id === carte.id || masquee === carte.id ? ' is-ouverte' : ''}`}
              style={{ ...DECALAGES[carte.id], ...trajectoire(i) }}
              tabIndex={i === index ? 0 : -1}
              aria-label={`${THEMES[carte.theme].libelle}, carte ${LIBELLES_CARTE[carte.type]}. Ouvrir`}
              onClick={() => toucher(i)}
            >
              <FaceDos carte={carte} />
            </button>
          ))}
          {liste.length === 0 && (
            <div className="paquet__fin">
              <p>Tu as fait le tour du paquet !</p>
              <button type="button" className="paquet__fin-bouton" onClick={() => naviguer('/collection')}>
                Voir ma collection
              </button>
            </div>
          )}
        </div>
        <div className="paquet__piste" style={{ height: Math.max(0, liste.length - 1) * pas }} aria-hidden="true" />
        {liste.map((carte, i) => (
          <span key={carte.id} className="paquet__cran" style={{ top: i * pas }} aria-hidden="true" />
        ))}
      </div>

      {carteOuverte && ouverte && (
        <CarteOuverte
          key={carteOuverte.id}
          carte={carteOuverte}
          depuis={ouverte.depuis}
          cible={() => icone.current?.getBoundingClientRect()}
          onReponse={(option) => carteOuverte.type === 'avis' && repondreAvis(carteOuverte.id, option)}
          onFermer={fermer}
        />
      )}
    </div>
  )
}
