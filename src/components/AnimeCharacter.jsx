import { useRef } from 'react'
import { useEyeTracking } from '../hooks'

// A detailed developer-at-desk illustration. Eyes (irises) and head follow the cursor.
export default function AnimeCharacter() {
  const wrapRef = useRef(null)
  const dir = useEyeTracking(wrapRef)

  const iris = `translate(${(dir.x * 4).toFixed(2)} ${(dir.y * 3).toFixed(2)})`
  const head = `translate(${(dir.x * 4).toFixed(2)} ${(dir.y * 3).toFixed(2)})`

  return (
    <div className="hero-art" ref={wrapRef}>
      <svg
        className="art-svg"
        viewBox="0 0 440 470"
        role="img"
        aria-label="Illustration of a developer working at a desk on a laptop"
      >
        <defs>
          <linearGradient id="skin" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#ffe0c4" />
            <stop offset="0.6" stopColor="#f7c39c" />
            <stop offset="1" stopColor="#e9a97e" />
          </linearGradient>
          <linearGradient id="skinArm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f7c39c" />
            <stop offset="1" stopColor="#e6a074" />
          </linearGradient>
          <linearGradient id="hair" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#3a2f52" />
            <stop offset="1" stopColor="#241c38" />
          </linearGradient>
          <linearGradient id="hairHi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8f78ea" />
            <stop offset="1" stopColor="#5b3fc4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hoodie" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#9a7dff" />
            <stop offset="0.55" stopColor="#7c5cf0" />
            <stop offset="1" stopColor="#5a3fc0" />
          </linearGradient>
          <linearGradient id="hoodieShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4c2fa6" />
            <stop offset="1" stopColor="#3d248a" />
          </linearGradient>
          <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#eceaf1" />
            <stop offset="1" stopColor="#c4c0d6" />
          </linearGradient>
          <linearGradient id="deck" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d7d3e4" />
            <stop offset="1" stopColor="#b3aecb" />
          </linearGradient>
          <linearGradient id="desk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5a5175" />
            <stop offset="1" stopColor="#463d63" />
          </linearGradient>
          <radialGradient id="artglow" cx="0.5" cy="0.42" r="0.6">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="screenlight" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#bfe6ff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#bfe6ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* backing panel + glow */}
        <rect className="art-panel" x="24" y="30" width="392" height="404" rx="44" />
        <ellipse cx="220" cy="200" rx="180" ry="170" fill="url(#artglow)" />

        {/* floating decorations */}
        <g className="deco deco-a"><text x="66" y="92" className="deco-code">&lt;/&gt;</text></g>
        <g className="deco deco-b">
          <rect x="336" y="112" width="32" height="32" rx="9" className="deco-chip" />
          <path d="M345 128h14M352 121v14" className="deco-plus" />
        </g>
        <circle className="deco deco-c" cx="92" cy="300" r="6" />
        <circle className="deco deco-d" cx="356" cy="292" r="5" />

        {/* chair back */}
        <path d="M130 300 Q132 232 220 226 Q308 232 310 300 L310 400 L130 400 Z" fill="#332b4d" opacity="0.55" />

        <g className="character">
          {/* subtle breathing wraps torso + head */}
          <g className="breathe">
            {/* torso / hoodie */}
            <path d="M120 402 Q124 300 168 276 L272 276 Q316 300 320 402 Z" fill="url(#hoodie)" />
            <path d="M168 276 Q220 300 272 276 L272 300 Q220 322 168 300 Z" fill="url(#hoodieShade)" opacity="0.7" />
            {/* hoodie collar */}
            <path d="M196 268 Q220 292 244 268 L244 282 Q220 300 196 282 Z" fill="url(#hoodieShade)" />

            {/* neck + shadow */}
            <path d="M202 236 h36 v26 q-18 16 -36 0 Z" fill="#e6a074" />
            <path d="M202 250 q18 12 36 0 v8 q-18 14 -36 0 Z" fill="#cf8a5f" opacity="0.6" />

            {/* head group (parallax) */}
            <g className="head" transform={head}>
              {/* back hair volume */}
              <path d="M150 150 Q150 250 172 288 L268 288 Q290 250 290 150 Q290 92 220 88 Q150 92 150 150 Z" fill="url(#hair)" />
              {/* ears */}
              <ellipse cx="163" cy="168" rx="11" ry="15" fill="url(#skin)" />
              <ellipse cx="277" cy="168" rx="11" ry="15" fill="url(#skin)" />
              {/* face */}
              <path d="M167 150 Q167 96 220 96 Q273 96 273 150 Q273 196 244 214 Q220 226 196 214 Q167 196 167 150 Z" fill="url(#skin)" />
              {/* cheek + jaw shadow */}
              <path d="M167 150 Q170 192 196 212 Q184 196 179 168 Q172 158 167 150 Z" fill="#e29a6e" opacity="0.35" />
              {/* screen light on face */}
              <ellipse cx="220" cy="186" rx="60" ry="46" fill="url(#screenlight)" />

              {/* eyebrows */}
              <path d="M180 140 q16 -7 32 -1" className="brow" />
              <path d="M228 139 q16 -6 32 1" className="brow" />

              {/* eyes */}
              <g className="eyes">
                {/* eye whites (almond) */}
                <path d="M182 154 q14 -11 30 0 q-14 10 -30 0 Z" fill="#fff" />
                <path d="M228 154 q14 -11 30 0 q-14 10 -30 0 Z" fill="#fff" />
                {/* irises + pupils track cursor */}
                <g className="irises" transform={iris}>
                  <circle cx="197" cy="153" r="7" fill="#5b3fa0" />
                  <circle cx="197" cy="153" r="3.4" fill="#1a1428" />
                  <circle cx="199" cy="150.5" r="1.6" fill="#fff" />
                  <circle cx="243" cy="153" r="7" fill="#5b3fa0" />
                  <circle cx="243" cy="153" r="3.4" fill="#1a1428" />
                  <circle cx="245" cy="150.5" r="1.6" fill="#fff" />
                </g>
                {/* upper lash lines */}
                <path d="M181 152 q16 -11 32 -1" className="lash" />
                <path d="M227 152 q16 -10 32 0" className="lash" />
              </g>

              {/* nose */}
              <path d="M218 158 q-6 16 -8 22 q4 5 12 3" fill="none" stroke="#d68f63" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
              {/* blush */}
              <ellipse cx="184" cy="184" rx="12" ry="7" fill="#ff9db0" opacity="0.4" />
              <ellipse cx="256" cy="184" rx="12" ry="7" fill="#ff9db0" opacity="0.4" />
              {/* lips */}
              <path d="M206 196 q14 6 28 0" fill="none" stroke="#c96a5c" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M208 198 q12 9 24 0 q-12 5 -24 0 Z" fill="#e08a7c" />

              {/* front hair / fringe */}
              <path d="M150 150 Q150 92 220 88 Q290 92 290 150 Q276 118 252 112 Q238 126 220 124 Q196 128 182 116 Q162 122 150 150 Z" fill="url(#hair)" />
              <path d="M220 88 Q168 92 156 140 Q190 108 220 112 Z" fill="url(#hairHi)" opacity="0.5" />
              {/* side strands framing the face */}
              <path d="M158 148 Q150 214 168 262 L180 258 Q166 210 170 150 Z" fill="url(#hair)" />
              <path d="M282 148 Q290 214 272 262 L260 258 Q274 210 270 150 Z" fill="url(#hair)" />
            </g>
          </g>

          {/* arms reaching to the laptop */}
          <path className="arm" d="M150 320 Q120 356 156 388 L182 378 Q158 350 176 322 Z" fill="url(#hoodie)" />
          <path className="arm" d="M290 320 Q320 356 284 388 L258 378 Q282 350 264 322 Z" fill="url(#hoodie)" />

          {/* laptop */}
          <g className="laptop">
            {/* desk */}
            <rect x="70" y="404" width="300" height="20" rx="8" fill="url(#desk)" />
            <rect x="70" y="404" width="300" height="5" rx="2.5" fill="#6f6592" opacity="0.7" />
            {/* screen (lid back) with glow */}
            <rect x="150" y="322" width="140" height="82" rx="10" fill="url(#lid)" stroke="var(--border-strong)" />
            <rect x="160" y="332" width="120" height="60" rx="6" fill="#171226" />
            <g className="codelines">
              <rect x="170" y="342" width="46" height="5" rx="2.5" fill="#7c5cf0" />
              <rect x="222" y="342" width="26" height="5" rx="2.5" fill="#37d4c4" />
              <rect x="180" y="354" width="60" height="5" rx="2.5" fill="#a9a2c8" opacity="0.7" />
              <rect x="180" y="366" width="34" height="5" rx="2.5" fill="#e879f9" />
              <rect x="220" y="366" width="40" height="5" rx="2.5" fill="#a9a2c8" opacity="0.6" />
              <rect x="170" y="378" width="52" height="5" rx="2.5" fill="#37d4c4" opacity="0.8" />
            </g>
            <circle className="logo" cx="220" cy="404" r="5" fill="var(--accent)" />
            {/* keyboard deck sliver in front */}
            <path d="M150 404 L290 404 L316 424 L124 424 Z" fill="url(#deck)" />
            <rect x="196" y="410" width="48" height="9" rx="3" fill="#a49fbb" opacity="0.7" />
            {/* hands with fingers on the deck */}
            <g className="hand hand-left">
              <path d="M150 396 q22 -6 34 4 q-4 12 -20 12 q-16 -2 -14 -16 Z" fill="url(#skinArm)" />
              <path d="M158 404 v8 M166 404 v9 M174 405 v8" stroke="#d68f63" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
            </g>
            <g className="hand hand-right">
              <path d="M290 396 q-22 -6 -34 4 q4 12 20 12 q16 -2 14 -16 Z" fill="url(#skinArm)" />
              <path d="M282 404 v8 M274 404 v9 M266 405 v8" stroke="#d68f63" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
            </g>
          </g>

          {/* coffee mug with steam */}
          <g className="mug">
            <path className="steam" d="M356 372 q6 -8 0 -16 q-6 -8 0 -16" fill="none" stroke="#cbb8ff" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <rect x="342" y="382" width="28" height="24" rx="5" fill="#e879f9" />
            <rect x="342" y="382" width="28" height="7" rx="3" fill="#c94fd6" />
            <path d="M370 388 q10 0 10 9 q0 9 -10 9" fill="none" stroke="#e879f9" strokeWidth="4" />
          </g>
        </g>
      </svg>
    </div>
  )
}
