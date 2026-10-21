import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { naviguer } from '../lib/router'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

/** Lien interne : change de page sans recharger le site. */
export function Lien({ href, onClick, ...props }: Props) {
  function gerer(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    naviguer(href)
  }
  return <a href={href} onClick={gerer} {...props} />
}
