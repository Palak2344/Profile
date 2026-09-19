import { profile, mailtoHref } from '../data'
import { useTypewriter } from '../hooks'
import { IconGithub, IconLinkedin, IconMail, IconPin } from './Icons'
import AnimeCharacter from './AnimeCharacter'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-content">
        <span className="hi">👋 Hi, I'm</span>
        <h1>
          {profile.firstName} <span className="last">{profile.lastName}</span>
        </h1>
        <div className="typed-wrap">
          <span>{typed}</span>
          <span className="caret" />
        </div>
        <p className="lede">{profile.lede}</p>

        <div className="badges">
          {profile.badges.map((b) => (
            <span className="badge" key={b.label}>
              {b.icon} {b.label}
            </span>
          ))}
        </div>

        <div className="socials-row">
          <a className="social" href={profile.github} target="_blank" rel="noopener noreferrer">
            <IconGithub /> GitHub
          </a>
          <a className="social" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <IconLinkedin /> LinkedIn
          </a>
          <a className="social" href={mailtoHref}>
            <IconMail /> Email
          </a>
        </div>

        <div>
          <span className="loc">
            <IconPin /> {profile.location}
          </span>
        </div>

        <div className="scroll-ind">
          <div className="mouse" />
          <span>SCROLL</span>
        </div>
        </div>

        <AnimeCharacter />
      </div>
    </section>
  )
}
