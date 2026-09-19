import { projects } from '../data'
import { useReveal } from '../hooks'
import { projectIcons } from './Icons'

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="eyebrow">Selected work</span>
          <h2>Projects</h2>
        </div>
        <div className="proj-grid">
          {projects.map((p) => {
            const Icon = projectIcons[p.icon]
            return (
              <div className="proj" key={p.title}>
                <div className="p-ico">{Icon && <Icon />}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
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
