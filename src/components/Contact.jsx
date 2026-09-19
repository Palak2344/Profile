import { profile } from '../data'
import { useReveal } from '../hooks'
import { IconMail, IconPhone, IconGithub, IconLinkedin } from './Icons'

export default function Contact() {
  const resumeRef = useReveal()
  const contactRef = useReveal()

  return (
    <>
      <section id="resume">
        <div className="wrap reveal" ref={resumeRef}>
          <div className="resume-cta">
            <span className="eyebrow">Résumé</span>
            <h3>Take a look at my full resume</h3>
            <p>Everything about my experience, skills, projects, and education — in one page.</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <IconMail /> Request a copy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap reveal" ref={contactRef}>
          <span className="avail">
            <span className="pulse" /> Available for opportunities
          </span>
          <h2>Let's build something together</h2>
          <p>
            I'm open to full-stack roles, internships, and collaborations. Feel free to reach out —
            I'll get back to you soon.
          </p>
          <div className="contact-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <IconMail /> {profile.email}
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
              <IconPhone /> {profile.phone}
            </a>
          </div>

          <footer className="foot">
            <div>
              <div className="fname">
                {profile.firstName} {profile.lastName}
              </div>
              <div className="fmeta">Full Stack MERN Developer · Bhopal, India</div>
            </div>
            <div className="socials-row" style={{ marginTop: 0 }}>
              <a className="social" href={profile.github} target="_blank" rel="noopener noreferrer">
                <IconGithub /> GitHub
              </a>
              <a className="social" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <IconLinkedin /> LinkedIn
              </a>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
