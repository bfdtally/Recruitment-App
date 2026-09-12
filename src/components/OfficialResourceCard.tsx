import { Icon } from './Icon'

type Props = {
  eyebrow: string
  title: string
  description: string
  href: string
  featured?: boolean
}

export function OfficialResourceCard({ eyebrow, title, description, href, featured = false }: Props) {
  return <a className={featured ? 'official-card featured' : 'official-card'} href={href} target="_blank" rel="noreferrer">
    <span className="official-card-eyebrow">{eyebrow}</span><strong>{title}</strong><p>{description}</p><span className="official-card-link">Open official resource <Icon name="arrow" /></span>
  </a>
}
