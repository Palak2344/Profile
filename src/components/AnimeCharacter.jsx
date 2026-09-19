import { useRef } from 'react'
import { useEyeTracking } from '../hooks'

// Anime-style developer working at a laptop. The eyes and head follow the cursor.
export default function AnimeCharacter() {
  const wrapRef = useRef(null)
  const dir = useEyeTracking(wrapRef)

  const pupils = `translate(${(dir.x * 6).toFixed(2)} ${(dir.y * 5).toFixed(2)})`
  const head = `translate(${(dir.x * 5).toFixed(2)} ${(dir.y * 4).toFixed(2)})`

  return (
    <div className="hero-art" ref={wrapRef}>
      <svg className="art-svg" viewBox="0 0 420 440" role="img" aria-label="Illustration of a developer working on a laptop">
        <defs>
          <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--accent-3)" />
            <stop offset="1" stopColor="var(--accent-2)" />
          </linearGradient>
          <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8f78ea" />
            <stop offset="1" stopColor="#5b3fc4" />
          </linearGradient>
          <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e7e4f2" />
            <stop offset="1" stopColor="#c3bfd8" />
          </linearGradient>
          <radialGradient id="artglow" cx="0.5" cy="0.45" r="0.55">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.28" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* backing panel + glow so the character reads on any background */}
        <rect className="art-panel" x="26" y="34" width="368" height="372" rx="42" />
        <ellipse cx="210" cy="196" rx="168" ry="158" fill="url(#artglow)" />

        {/* floating decorations */}
        <g className="deco deco-a">
          <text x="70" y="98" className="deco-code">&lt;/&gt;</text>
        </g>
        <g className="deco deco-b">
          <rect x="322" y="120" width="34" height="34" rx="9" className="deco-chip" />
          <path d="M332 137h14M339 130v14" className="deco-plus" />
        </g>
        <circle className="deco deco-c" cx="96" cy="300" r="7" />
        <circle className="deco deco-d" cx="342" cy="286" r="5" />

        {/* the character floats gently */}
        <g className="character">
          {/* shoulders / shirt */}
          <path d="M132 372 Q134 268 210 250 Q286 268 288 372 Z" fill="url(#shirt)" />
          {/* arms */}
          <path className="arm" d="M146 300 Q120 330 150 356 L176 348 Q158 322 172 300 Z" fill="url(#shirt)" />
          <path className="arm" d="M274 300 Q300 330 270 356 L244 348 Q262 322 248 300 Z" fill="url(#shirt)" />

          {/* neck */}
          <rect x="194" y="212" width="32" height="34" rx="12" fill="#f6c199" />
          {/* head (parallax with cursor) */}
          <g className="head" transform={head}>
            {/* ears */}
            <circle cx="156" cy="168" r="12" fill="#f6c199" />
            <circle cx="264" cy="168" r="12" fill="#f6c199" />
            {/* face */}
            <circle cx="210" cy="162" r="56" fill="#ffd3ab" />
            {/* blush */}
            <ellipse cx="178" cy="182" rx="12" ry="7" fill="#ff9db0" opacity="0.55" />
            <ellipse cx="242" cy="182" rx="12" ry="7" fill="#ff9db0" opacity="0.55" />
            {/* eyebrows */}
            <path d="M172 138 q16 -8 32 0" className="brow" />
            <path d="M216 138 q16 -8 32 0" className="brow" />
            {/* eyes */}
            <g className="eyes">
              <ellipse cx="188" cy="160" rx="13" ry="16" fill="#fff" />
              <ellipse cx="232" cy="160" rx="13" ry="16" fill="#fff" />
              <g className="pupils" transform={pupils}>
                <circle cx="188" cy="162" r="6.5" fill="#2a2442" />
                <circle cx="232" cy="162" r="6.5" fill="#2a2442" />
                <circle cx="190" cy="159" r="2" fill="#fff" />
                <circle cx="234" cy="159" r="2" fill="#fff" />
              </g>
            </g>
            {/* smile */}
            <path d="M198 190 q12 12 24 0" className="smile" />
            {/* hair */}
            <path
              d="M154 158 Q150 96 210 92 Q270 96 266 158 Q252 128 232 126 Q220 120 210 120 Q200 120 188 126 Q168 128 154 158 Z"
              fill="url(#hair)"
            />
            <path d="M210 92 Q176 96 168 128 Q196 112 210 116 Z" fill="#a48cf2" opacity="0.6" />
          </g>

          {/* laptop */}
          <g className="laptop">
            <path d="M120 380 L300 380 L322 400 L98 400 Z" fill="#b7b3ca" />
            <rect className="lidback" x="150" y="330" width="120" height="58" rx="10" fill="url(#lid)" stroke="var(--border-strong)" />
            <circle className="logo" cx="210" cy="359" r="9" fill="var(--accent)" />
            {/* hands typing on the near edge */}
            <rect className="hand hand-left" x="158" y="372" width="26" height="15" rx="7" fill="#ffd3ab" />
            <rect className="hand hand-right" x="236" y="372" width="26" height="15" rx="7" fill="#ffd3ab" />
          </g>
        </g>
      </svg>
    </div>
  )
}
