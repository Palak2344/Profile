import { about } from '../data'
import { useReveal } from '../hooks'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head" style={{ marginBottom: '28px' }}>
          <span className="eyebrow">About</span>
          <h2>A bit about me</h2>
        </div>
        <div className="quote-card">
          <span className="mark">&ldquo;</span>
          <p className="big">
            Full Stack <b>MERN Developer</b> skilled in React frontends and Node/Express backends,
            with hands-on experience in database design and API integration. Currently building{' '}
            <b>CRM systems, dashboards, and an AI chatbot in production</b> — focused on clean,
            maintainable code for real-world applications.
          </p>
          <div className="chip-row">
            {about.chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
