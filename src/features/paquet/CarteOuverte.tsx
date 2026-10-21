import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { LIBELLES_CARTE } from '../../data/contenu'
import { THEMES } from '../../data/themes'
import type { Carte, IdFiche } from '../../data/types'
import { LiensFiches } from '../fiches/LiensFiches'
import { PlusLoin } from '../fiches/PlusLoin'
import { JE_NE_SAIS_PAS } from '../position/position'
import { FaceRecto } from './FaceRecto'

/**
 * Comment la carte a été fermée :
 * annulee (pas de réponse, ou relecture), collectee (Savoir réussie, ajoutée à la collection),
 * reportee (Savoir à revoir plus tard), repondue (Avis donné).
 */
export type Issue = 'annulee' | 'collectee' | 'reportee' | 'repondue'
type Contenu = 'recto' | 'question' | 'reponse'

interface Props {
  carte: Carte
  /** Position de la carte d'origine, point de départ (et de retour) de l'animation. */
  depuis: DOMRect
  /** jeu : on répond. revision : carte Savoir déjà collectée, on relit la réponse. */
  mode?: 'jeu' | 'revision'
  /** Où la carte s'envole quand on l'ajoute à la collection. */
  cible?: () => DOMRect | undefined
  /** Appelé dès qu'on choisit une réponse. */
  onReponse?: (option: string) => void
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
 * Recto : la question (les réponses apparaissent à l'ouverture). Verso : la réponse.
 * La carte bascule de haut en bas pour passer de l'un à l'autre. Elle a deux faces
 * (A devant, B derrière) : avant chaque bascule, on change le contenu de la face cachée.
 */
export function CarteOuverte({ carte, depuis, mode = 'jeu', cible, onReponse, onFermer }: Props) {
  const voile = useRef<HTMLDivElement>(null)
  const boite = useRef<HTMLDivElement>(null)
  const retourne = useRef<HTMLDivElement>(null)
  const cadre = useRef<HTMLDivElement>(null)
  const depart = useRef('none')
  const lancee = useRef(false)

  const bonne = carte.type === 'savoir' ? carte.options.find((o) => o.juste) : undefined
  // Jeu : la carte s'ouvre sur sa question (recto) et bascule sur la réponse.
  // Révision : elle s'ouvre sur le recto puis bascule tout de suite sur la réponse.
  const [faces, setFaces] = useState<[Contenu, Contenu]>(mode === 'revision' ? ['recto', 'reponse'] : ['question', 'reponse'])
  const [choix, setChoix] = useState<string | null>(mode === 'revision' ? (bonne?.id ?? null) : null)
  const [occupee, setOccupee] = useState(true)
  /** Au repos (entre deux animations), la carte est « à plat » : aucune 3D, face cachée masquée. */
  const [auRepos, setAuRepos] = useState(false)

  const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duree = (ms: number) => (reduit ? 1 : ms)

  /*
   * Bascule de 180°. Une fois finie, on remet la carte à 0° en plaçant le contenu visible
   * sur la face A : au repos, la face visible est toujours A, sans aucune rotation.
   * (Sur iPhone, Safari touche et fait défiler mal le contenu d'un élément retourné en 3D.)
   */
  async function retourner() {
    flushSync(() => setAuRepos(false))
    await animer(retourne.current!, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], {
      duration: duree(640),
      easing: EASE,
    })
    flushSync(() => setFaces(([a, b]) => [b, a]))
    retourne.current!.style.transform = 'rotateX(0deg)'
  }

  /** Change le contenu de la face cachée (B) juste avant une bascule. */
  function changerFaceCachee(contenu: Contenu) {
    flushSync(() => setFaces(([a]) => [a, contenu]))
  }

  // Le focus va sur la carte elle-même (invisible), pas sur un bouton :
  // au doigt, aucun bouton ne doit paraître présélectionné.
  function liberer() {
    flushSync(() => {
      setOccupee(false)
      setAuRepos(true)
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
      mode === 'revision' ? retourner() : Promise.resolve(),
    ]).then(liberer)
    // Animation d'entrée : une seule fois, au montage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function repondre(id: string) {
    if (occupee) return
    setOccupee(true)
    setChoix(id)
    onReponse?.(id)
    changerFaceCachee('reponse')
    await retourner()
    liberer()
  }

  /** Retour à la place d'origine ; depuis la réponse, la carte rebascule sur son recto. */
  async function fermer() {
    if (occupee) return
    setOccupee(true)
    const surLaReponse = faces[0] === 'reponse'
    if (surLaReponse) changerFaceCachee('recto')
    await Promise.all([
      animer(boite.current!, [{ transform: 'none' }, { transform: depart.current }], {
        duration: duree(680),
        easing: EASE,
      }),
      animer(voile.current!, [{ opacity: 1 }, { opacity: 0 }], { duration: duree(680) }),
      surLaReponse ? retourner() : Promise.resolve(),
    ])
    if (mode === 'revision' || choix === null) onFermer('annulee')
    else onFermer(carte.type === 'avis' ? 'repondue' : 'reportee')
  }

  /** Savoir réussie : la carte s'envole vers la collection (icône en haut à droite). */
  async function ajouter() {
    if (occupee) return
    setOccupee(true)
    const b = boite.current!
    const ici = b.getBoundingClientRect()
    const la = cible?.()
    const vers = la
      ? `translate(${la.left + la.width / 2 - (ici.left + ici.width / 2)}px, ${la.top + la.height / 2 - (ici.top + ici.height / 2)}px) scale(${Math.max(la.width, 24) / ici.width})`
      : `translateY(${Math.round(-window.innerHeight * 0.6)}px) scale(0.2)`
    await Promise.all([
      animer(b, [{ transform: 'none', opacity: 1 }, { transform: vers, opacity: 0 }], {
        duration: duree(560),
        easing: 'cubic-bezier(0.55, 0, 0.7, 0.2)',
      }),
      animer(voile.current!, [{ opacity: 1 }, { opacity: 0 }], { duration: duree(560) }),
    ])
    onFermer('collectee')
  }

  useEffect(() => {
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === 'Escape') void fermer()
    }
    window.addEventListener('keydown', surTouche)
    return () => window.removeEventListener('keydown', surTouche)
  })

  const entete = (
    <div className="surface__entete">
      <span>
        {LIBELLES_CARTE[carte.type]} · {THEMES[carte.theme].libelle}
      </span>
      <button type="button" className="surface__fermer" aria-label="Fermer la carte" onClick={fermer}>
        ×
      </button>
    </div>
  )

  /** Face d'une carte ouverte : en-tête fixe (croix), corps qui défile, bouton fixe en bas. */
  function face(classe: string, corps: ReactNode, pied?: ReactNode) {
    return (
      <div className={`surface surface--${carte.type} face ${classe}`}>
        {entete}
        <div className="face__corps">{corps}</div>
        {pied && <div className="face__pied">{pied}</div>}
      </div>
    )
  }

  function rendreQuestion() {
    const options =
      carte.type === 'avis' ? [...carte.options, { id: JE_NE_SAIS_PAS, libelle: 'Je ne sais pas' }] : carte.options
    return face(
      'question',
      <>
        <p className="question__intitule">{carte.question}</p>
        <div className="question__options question__options--entree">
          {options.map((o) => (
            <button key={o.id} type="button" className="option" onClick={() => repondre(o.id)}>
              {o.libelle}
            </button>
          ))}
        </div>
      </>,
    )
  }

  function rendreReponse() {
    if (carte.type === 'savoir') {
      const choisie = carte.options.find((o) => o.id === choix)
      const juste = choisie?.juste === true
      return face(
        'reponse',
        <>
          {mode === 'revision' ? (
            <p className="reponse__question">{carte.question}</p>
          ) : (
            <p className={`reponse__verdict reponse--${juste ? 'succes' : 'erreur'}`}>{juste ? 'Bien vu !' : 'Raté !'}</p>
          )}
          {juste || mode === 'revision' ? (
            <>
              <p className={`reponse__ligne${mode === 'jeu' ? ' reponse--succes' : ''}`}>
                Réponse : <strong>{bonne?.libelle}</strong>
              </p>
              <p className="reponse__texte">{carte.explication}</p>
            </>
          ) : (
            // Raté : on ne donne pas la réponse, la carte reviendra plus tard dans le paquet.
            <>
              <p className="reponse__ligne reponse--erreur">
                Tu as répondu : <strong>{choisie?.libelle}</strong>
              </p>
              <p className="reponse__texte">
                Cette carte reviendra un peu plus tard dans le paquet. D’ici là, les fiches et les sources ci-dessous
                peuvent t’aider.
              </p>
            </>
          )}
          <PlusLoin fiches={carte.fiches} sources={carte.sources} />
        </>,
        mode === 'jeu' && juste && (
          <button type="button" className="reponse__action" onClick={ajouter}>
            Ajouter à ma collection
          </button>
        ),
      )
    }

    const choisie = carte.options.find((o) => o.id === choix)
    const fichesPartis = (choisie?.partis ?? []).map((p): IdFiche => `parti-${p}`)
    return face(
      'reponse',
      <>
        <p className="reponse__verdict">Avis noté</p>
        <p className="reponse__ligne">
          Ta réponse : <strong>{choisie ? `« ${choisie.libelle} »` : 'Je ne sais pas'}</strong>
        </p>
        {!choisie ? (
          <p className="reponse__ligne">Pas de souci : cette carte ne compte pas dans ta position.</p>
        ) : fichesPartis.length > 0 ? (
          <>
            <p className="reponse__ligne">Elle rejoint le programme de :</p>
            <LiensFiches ids={fichesPartis} />
          </>
        ) : (
          <p className="reponse__ligne">Aucun parti ne porte exactement cette position dans nos sources.</p>
        )}
        <p className="reponse__texte">{carte.contexte}</p>
        <PlusLoin fiches={carte.fiches} sources={carte.sources} />
        <p className="surface__note">Ta position évolue dans ta collection, onglet « Mes avis ».</p>
      </>,
    )
  }

  function rendre(contenu: Contenu) {
    if (contenu === 'recto') return <FaceRecto carte={carte} />
    return contenu === 'question' ? rendreQuestion() : rendreReponse()
  }

  return (
    <div
      className={`ouverture${auRepos ? ' ouverture--repos' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`Carte ${THEMES[carte.theme].libelle}`}
    >
      <div ref={voile} className="ouverture__voile" onClick={fermer} />
      <div ref={cadre} className="ouverture__cadre" tabIndex={-1}>
        <div ref={boite} className="ouverture__carte">
          <div ref={retourne} className="ouverture__retourne">
            <div className="ouverture__face ouverture__face--a" inert={!auRepos}>
              {rendre(faces[0])}
            </div>
            <div className="ouverture__face ouverture__face--b" inert>
              {rendre(faces[1])}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
