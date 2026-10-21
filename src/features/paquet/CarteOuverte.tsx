import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { LIBELLES, QUESTIONS, type CarteDemo } from './cartes'
import { FaceDos } from './FaceDos'

export type Issue = 'collectee' | 'remise'
type Contenu = 'dos' | 'question' | 'explication'

interface Props {
  carte: CarteDemo
  /** Position de la carte dans le paquet, point de départ de l'animation. */
  depuis: DOMRect
  onFermer: (issue: Issue) => void
}

const EASE = 'cubic-bezier(0.22, 0.8, 0.2, 1)'

/** Lance une animation et garde son état final une fois terminée. */
function animer(el: HTMLElement, images: Keyframe[], options: KeyframeAnimationOptions) {
  const animation = el.animate(images, { fill: 'forwards', ...options })
  return animation.finished.then(
    () => {
      animation.commitStyles()
      animation.cancel()
    },
    () => undefined,
  )
}

/*
 * La carte bascule de haut en bas pour se retourner. Elle a deux faces
 * (A devant, B derrière) : à chaque bascule, on change le contenu de la face
 * cachée juste avant de tourner : dos → question → explication → (dos si on la
 * remet dans le paquet).
 */
export function CarteOuverte({ carte, depuis, onFermer }: Props) {
  const voile = useRef<HTMLDivElement>(null)
  const boite = useRef<HTMLDivElement>(null)
  const retourne = useRef<HTMLDivElement>(null)
  const cadre = useRef<HTMLDivElement>(null)
  const angle = useRef(0)
  const depart = useRef('none')
  const lancee = useRef(false)
  const [faces, setFaces] = useState<[Contenu, Contenu]>(['dos', 'question'])
  const [choix, setChoix] = useState<string | null>(null)
  const [occupee, setOccupee] = useState(true)
  const [faceVisible, setFaceVisible] = useState<0 | 1>(0)

  const question = QUESTIONS[carte.type]
  const option = question.options.find((o) => o.id === choix)
  const bonne = question.options.find((o) => o.juste)
  const collectee = carte.type === 'avis' || option?.juste === true

  const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duree = (ms: number) => (reduit ? 1 : ms)
  function retourner() {
    const de = angle.current
    const vers = de + 180
    angle.current = vers
    return animer(retourne.current!, [{ transform: `rotateX(${-de}deg)` }, { transform: `rotateX(${-vers}deg)` }], {
      duration: duree(640),
      easing: EASE,
    })
  }

  function changerFaceCachee(contenu: Contenu) {
    const cachee = (angle.current / 180) % 2 === 0 ? 1 : 0
    flushSync(() =>
      setFaces((avant) => {
        const apres: [Contenu, Contenu] = [...avant]
        apres[cachee] = contenu
        return apres
      }),
    )
  }

  // Le focus va sur la carte elle-même (invisible), pas sur un bouton :
  // au doigt, aucun bouton ne doit paraître présélectionné.
  function liberer() {
    flushSync(() => {
      setOccupee(false)
      setFaceVisible((angle.current / 180) % 2 === 0 ? 0 : 1)
    })
    cadre.current?.focus({ preventScroll: true })
  }

  useLayoutEffect(() => {
    if (lancee.current) return
    lancee.current = true
    const fin = boite.current!.getBoundingClientRect()
    const echelle = depuis.width / fin.width
    const dx = depuis.left + depuis.width / 2 - (fin.left + fin.width / 2)
    const dy = depuis.top + depuis.height / 2 - (fin.top + fin.height / 2)
    depart.current = `translate(${dx}px, ${dy}px) scale(${echelle})`
    void Promise.all([
      animer(boite.current!, [{ transform: depart.current }, { transform: 'none' }], {
        duration: duree(720),
        easing: EASE,
      }),
      animer(voile.current!, [{ opacity: 0 }, { opacity: 1 }], { duration: duree(420), easing: 'ease-out' }),
      retourner(),
    ]).then(liberer)
    // Animation d'entrée : une seule fois, au montage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function repondre(id: string) {
    if (occupee) return
    setOccupee(true)
    setChoix(id)
    changerFaceCachee('explication')
    await retourner()
    liberer()
  }

  async function ranger() {
    if (occupee) return
    setOccupee(true)
    await Promise.all([
      animer(
        boite.current!,
        [
          { transform: 'none', opacity: 1 },
          { transform: `translateY(${Math.round(window.innerHeight * 0.6)}px) scale(0.2)`, opacity: 0 },
        ],
        { duration: duree(520), easing: 'cubic-bezier(0.55, 0, 0.7, 0.2)' },
      ),
      animer(voile.current!, [{ opacity: 1 }, { opacity: 0 }], { duration: duree(520) }),
    ])
    onFermer('collectee')
  }

  async function remettre() {
    if (occupee) return
    setOccupee(true)
    changerFaceCachee('dos')
    await Promise.all([
      animer(boite.current!, [{ transform: 'none' }, { transform: depart.current }], {
        duration: duree(680),
        easing: EASE,
      }),
      animer(voile.current!, [{ opacity: 1 }, { opacity: 0 }], { duration: duree(680) }),
      retourner(),
    ])
    onFermer('remise')
  }

  useEffect(() => {
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && choix === null) void remettre()
    }
    window.addEventListener('keydown', surTouche)
    return () => window.removeEventListener('keydown', surTouche)
  })

  const entete = (
    <span>
      {LIBELLES[carte.type]} · {carte.theme}
    </span>
  )

  function rendre(contenu: Contenu) {
    if (contenu === 'dos') return <FaceDos carte={carte} />

    if (contenu === 'question') {
      return (
        <div className={`surface surface--${carte.type} question`}>
          <div className="surface__entete">
            {entete}
            <button
              type="button"
              className="surface__fermer"
              aria-label="Remettre la carte dans le paquet"
              onClick={remettre}
            >
              ×
            </button>
          </div>
          <p className="question__intitule">{question.intitule}</p>
          <div className="question__options">
            {question.options.map((o) => (
              <button
                key={o.id}
                type="button"
                className="option"
                onClick={() => repondre(o.id)}
              >
                {o.libelle}
              </button>
            ))}
          </div>
          <p className="surface__note">Contenu de démonstration</p>
        </div>
      )
    }

    const verdict = carte.type === 'avis' ? 'Avis noté' : option?.juste ? 'Bonne réponse' : 'Pas tout à fait'
    const suite =
      carte.type === 'avis'
        ? `Tu as répondu « ${option?.libelle} ». La carte rejoint ta collection.`
        : option?.juste
          ? 'La carte rejoint ta collection.'
          : `La bonne réponse : ${bonne?.libelle}. La carte retourne dans le paquet pour plus tard.`

    return (
      <div className={`surface surface--${carte.type} explication`}>
        <div className="surface__entete">{entete}</div>
        <p className="explication__verdict">{verdict}</p>
        <p className="explication__suite">{suite}</p>
        <p className="explication__contexte">{question.contexte}</p>
        <p className="explication__source">Source : {question.source}</p>
        <button
          type="button"
          className="explication__action"
          onClick={collectee ? ranger : remettre}
        >
          {collectee ? 'Ranger dans ma collection' : 'Remettre dans le paquet'}
        </button>
      </div>
    )
  }

  return (
    <div
      className="ouverture"
      role="dialog"
      aria-modal="true"
      aria-label={`Carte ${carte.theme}`}
    >
      <div ref={voile} className="ouverture__voile" />
      <div ref={cadre} className="ouverture__cadre" tabIndex={-1}>
        <div ref={boite} className="ouverture__carte">
          <div ref={retourne} className="ouverture__retourne">
            <div className="ouverture__face ouverture__face--a" inert={faceVisible !== 0}>
              {rendre(faces[0])}
            </div>
            <div className="ouverture__face ouverture__face--b" inert={faceVisible !== 1}>
              {rendre(faces[1])}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
