import { experience } from '../data'
import { useReveal } from '../hooks'

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="eyebrow">Career</span>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((xp) => (
            <div className="xp" key={xp.role + xp.when}>
              <div className="xp-top">
                <h3>{xp.role}</h3>
                <span className="when">{xp.when}</span>
              </div>
              <div className="org">
                <b>{xp.org}</b>
                {xp.orgMeta ? ` · ${xp.orgMeta}` : ''}
              </div>
              {xp.points && (
                <ul>
                  {xp.points.map((p, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </ul>
              )}
              {xp.note && <p className="note">{xp.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
