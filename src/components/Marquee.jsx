import { marquee } from '../data'

// Infinite horizontal scroll of the tech stack. Content is duplicated so the
// loop is seamless; pauses on hover and for reduced-motion users.
export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
