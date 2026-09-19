import { education, certifications } from '../data'
import { useReveal } from '../hooks'

export default function Education() {
  const ref = useReveal()
  return (
    <section id="education">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="eyebrow">Academics</span>
          <h2>Education &amp; certifications</h2>
        </div>
        <div className="two-col">
          <div className="panel">
            <span className="p-eyebrow">Education</span>
            {education.map((e) => (
              <div className="edu-item" key={e.deg}>
                <span className="e-ico">🎓</span>
                <div>
                  <div className="deg">{e.deg}</div>
                  <div className="school">{e.school}</div>
                  <div className="meta">{e.meta}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="panel">
            <span className="p-eyebrow">Certifications &amp; Achievements</span>
            {certifications.map((c) => (
              <div className="cert" key={c.name}>
                <span className="star">{c.star}</span>
                <div>
                  <div className="c-name">{c.name}</div>
                  <div className="c-meta">{c.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
