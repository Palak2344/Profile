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
                <div className="skill-bars">
                  {group.items.map((s) => (
                    <div className="skill-row" key={s.name}>
                      <div className="skill-row-top">
                        <span>{s.name}</span>
                        <span className="pct">{s.level}%</span>
                      </div>
                      <div className="bar">
                        <span className="bar-fill" style={{ '--lvl': `${s.level}%` }} />
                      </div>
                    </div>
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
