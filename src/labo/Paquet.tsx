import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { CARTES, LIBELLES } from './cartes'
import { CarteOuverte, type Issue } from './CarteOuverte'
import { EnteteLabo } from './EnteteLabo'
import { FaceDos } from './FaceDos'
import type { Variante } from './variantes'

const DERNIERE = CARTES.length - 1

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

/**
 * Trajectoire propre à chaque carte : direction et angle de sortie (--sx, --sr),
 * petit décalage dans le paquet (--px, --pr). Jamais deux fois exactement pareil.
 */
const TRAJECTOIRES = CARTES.map((_, i) => {
  const direction = ORDRES[Math.floor(hasard(Math.floor(i / 3) + 1) * ORDRES.length)][i % 3]
  const [a, b, c, d] = [101, 202, 303, 404].map((n) => hasard(i + n))
  return {
    '--sx': `${direction === 0 ? (a - 0.5) * 16 : direction * (48 + a * 26)}vw`,
    '--sr': `${direction === 0 ? (b - 0.5) * 12 : direction * (12 + b * 16)}deg`,
    '--px': `${(c - 0.5) * 12}px`,
    '--pr': `${(d - 0.5) * 6}deg`,
  } as CSSProperties
})

/*
 * Le défilement est natif (doigt, inertie, aimantation gérés par le navigateur).
 * À chaque image, on calcule pour chaque carte son écart --o avec la carte
 * courante (0 = au centre, 1 = la suivante, -1 = la précédente) ;
 * le CSS de chaque variante transforme cet écart en position 3D.
 */
export function Paquet({ variante }: { variante: Variante }) {
  const defilement = useRef<HTMLDivElement>(null)
  const cartes = useRef<(HTMLButtonElement | null)[]>([])
  const courante = useRef(0)
  const [index, setIndex] = useState(0)
  const [pas, setPas] = useState(calculerPas)
  const [ouverte, setOuverte] = useState<{ index: number; depuis: DOMRect } | null>(null)
  const [collectees, setCollectees] = useState<ReadonlySet<number>>(() => new Set())

  useEffect(() => {
    const surResize = () => setPas(calculerPas())
    window.addEventListener('resize', surResize)
    return () => window.removeEventListener('resize', surResize)
  }, [])

  useLayoutEffect(() => {
    const el = defilement.current
    if (!el) return
    el.scrollTop = courante.current * pas

    let image = 0
    const maj = () => {
      image = 0
      const p = el.scrollTop / pas
      cartes.current.forEach((carte, i) => {
        if (!carte) return
        const o = i - p
        // Sans transparence, une carte passée doit être sortie de l'écran avant d'être masquée.
        const visible = o > -2.4 && o < 8
        carte.style.visibility = visible ? '' : 'hidden'
        if (!visible) return
        carte.style.setProperty('--o', o.toFixed(4))
        carte.style.setProperty('--a', Math.abs(o).toFixed(4))
        // Les cartes passées s'envolent par-dessus le paquet.
        carte.style.zIndex = String(o < 0 ? 2000 + Math.round(-o * 100) : 1000 - Math.round(o * 100))
      })
      const i = Math.min(DERNIERE, Math.max(0, Math.round(p)))
      if (i !== courante.current) {
        courante.current = i
        setIndex(i)
        if ('vibrate' in navigator) navigator.vibrate(6)
      }
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
  }, [pas])

  function toucher(i: number) {
    if (ouverte) return
    if (i !== courante.current) {
      defilement.current?.scrollTo({ top: i * pas, behavior: 'smooth' })
      return
    }
    const carte = cartes.current[i]
    if (carte) setOuverte({ index: i, depuis: carte.getBoundingClientRect() })
  }

  function fermer(issue: Issue) {
    if (issue === 'collectee' && ouverte) {
      const id = CARTES[ouverte.index].id
      setCollectees((avant) => new Set(avant).add(id))
    }
    setOuverte(null)
  }

  return (
    <div className={`labo-page labo-paquet labo-paquet--${variante.id}`}>
      <div
        ref={defilement}
        className="paquet__defilement"
        role="region"
        aria-label="Paquet de cartes : fais défiler pour changer de carte"
        tabIndex={0}
      >
        <div className="paquet__scene">
          {CARTES.map((carte, i) => (
            <button
              key={carte.id}
              ref={(el) => {
                cartes.current[i] = el
              }}
              type="button"
              className={`carte${ouverte?.index === i ? ' is-ouverte' : ''}`}
              style={TRAJECTOIRES[i]}
              tabIndex={i === index ? 0 : -1}
              aria-label={`${carte.theme}, carte ${LIBELLES[carte.type]}. Ouvrir`}
              onClick={() => toucher(i)}
            >
              <FaceDos carte={carte} collectee={collectees.has(carte.id)} />
            </button>
          ))}
        </div>
        <div className="paquet__piste" style={{ height: DERNIERE * pas }} aria-hidden="true" />
        {CARTES.map((carte, i) => (
          <span key={carte.id} className="paquet__cran" style={{ top: i * pas }} aria-hidden="true" />
        ))}
      </div>

      <EnteteLabo titre={variante.titre} droite={`${index + 1} / ${CARTES.length}`} />

      {ouverte && <CarteOuverte carte={CARTES[ouverte.index]} depuis={ouverte.depuis} onFermer={fermer} />}
    </div>
  )
}
