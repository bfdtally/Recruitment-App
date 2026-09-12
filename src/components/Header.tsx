import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { officialLinks } from '../data/officialLinks'
import { Icon } from './Icon'

const navigation = [
  ['Home', '/'], ['Why FAMU COE', '/why-famu-coe'], ['Explore Programs', '/programs'],
  ['Admissions', '/admissions'], ['Scholarships & Financial Aid', '/financial-aid'],
  ['Counselor Resources', '/resources'], ['Visit & Connect', '/visit'], ['Contact', '/contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to main content</a>
    <div className="brand-row shell">
      <Link className="brand" to="/" aria-label="Counselor Resource Center home">
        <img src="/assets/coe-logo-sharp.png" alt="Florida Agricultural and Mechanical University College of Education" />
      </Link>
      <a className="button button-orange desktop-apply" href={officialLinks.apply.url} target="_blank" rel="noreferrer">Apply to FAMU <Icon name="arrow" /></a>
      <button className="menu-button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? 'Close' : 'Open'} navigation</span><Icon name={open ? 'close' : 'menu'} />
      </button>
    </div>
    <nav id="primary-navigation" className={open ? 'nav-row open' : 'nav-row'} aria-label="Primary navigation">
      <div className="shell nav-inner">
        {navigation.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <a className="button button-orange mobile-apply" href={officialLinks.apply.url} target="_blank" rel="noreferrer">Apply to FAMU <Icon name="arrow" /></a>
      </div>
    </nav>
  </header>
}
