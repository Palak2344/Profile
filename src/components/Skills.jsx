import { skills } from '../data'
import { useReveal } from '../hooks'
import { skillIcons } from './Icons'

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="eyebrow">Toolbox</span>
          <h2>Skills &amp; Technologies</h2>
          <p className="sub">
            The stack I reach for to design, build, and ship full-stack applications.
          </p>
        </div>
        <div className="skill-grid">
          {skills.map((group) => {
            const Icon = skillIcons[group.icon]
            return (
              <div className="skill-card" key={group.title}>
                <div className="sc-top">
                  <span className="sc-ico">{Icon && <Icon />}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="tags">
                  {group.items.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
