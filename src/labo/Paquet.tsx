import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
  const [uneParGeste, setUneParGeste] = useState(true)
  const { sens, ordre } = variante

  const position = (i: number) => (sens > 0 ? i : DERNIERE - i) * pas

  useEffect(() => {
    const surResize = () => setPas(calculerPas())
    window.addEventListener('resize', surResize)
    return () => window.removeEventListener('resize', surResize)
  }, [])

  useLayoutEffect(() => {
    const el = defilement.current
    if (!el) return
    el.scrollTop = (sens > 0 ? courante.current : DERNIERE - courante.current) * pas

    let image = 0
    const maj = () => {
      image = 0
      const brut = el.scrollTop / pas
      const p = sens > 0 ? brut : DERNIERE - brut
      cartes.current.forEach((carte, i) => {
        if (!carte) return
        const o = i - p
        const visible = o > -1.6 && o < 8
        carte.style.visibility = visible ? '' : 'hidden'
        if (!visible) return
        carte.style.setProperty('--o', o.toFixed(4))
        carte.style.setProperty('--a', Math.abs(o).toFixed(4))
        carte.style.zIndex = String(
          ordre === 'devant' && o < 0 ? 2000 + Math.round(-o * 100) : 1000 - Math.round(Math.abs(o) * 100),
        )
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
  }, [pas, sens, ordre])

  function toucher(i: number) {
    if (ouverte) return
    if (i !== courante.current) {
      defilement.current?.scrollTo({ top: position(i), behavior: 'smooth' })
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
        className={`paquet__defilement${uneParGeste ? ' paquet__defilement--cran' : ''}`}
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

      <div className="paquet__pied">
        <p>{variante.consigne} · touche-la pour l’ouvrir</p>
        <label className="interrupteur">
          <input type="checkbox" checked={uneParGeste} onChange={(e) => setUneParGeste(e.target.checked)} />
          Une carte par geste
        </label>
      </div>

      {ouverte && <CarteOuverte carte={CARTES[ouverte.index]} depuis={ouverte.depuis} onFermer={fermer} />}
    </div>
  )
}
