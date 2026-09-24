import { profile, mailtoHref } from '../data'
import { useTheme, usePrefersDark } from '../hooks'
import { IconSun, IconMoon } from './Icons'

export default function Nav() {
  const { theme, toggle } = useTheme()
  const prefersDark = usePrefersDark()
  const effective = theme || (prefersDark ? 'dark' : 'light')

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="avatar">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </span>{' '}
          {profile.firstName} {profile.lastName}
        </a>
        <nav className="nav-links">
          <a className="nl" href="#about">About</a>
          <a className="nl" href="#skills">Skills</a>
          <a className="nl" href="#experience">Experience</a>
          <a className="nl" href="#projects">Projects</a>
          <a className="nl" href="#education">Education</a>
          <a className="btn-touch" href={mailtoHref} target="_blank" rel="noopener noreferrer">Get in touch</a>
          <button
            className="theme-btn"
            onClick={toggle}
            aria-label="Toggle color theme"
            title="Toggle light / dark"
          >
            {effective === 'dark' ? <IconMoon /> : <IconSun />}
          </button>
        </nav>
      </div>
    </header>
  )
}
