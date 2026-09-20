import { useRef } from 'react'
import { useEyeTracking } from '../hooks'

// Chibi "kawaii developer": brown bob + round glasses, red hoodie, coffee and
// a laptop, with server racks and floating tech nodes behind. Eyes track the cursor.
export default function AnimeCharacter() {
  const wrapRef = useRef(null)
  const dir = useEyeTracking(wrapRef)

  const iris = `translate(${(dir.x * 5).toFixed(2)} ${(dir.y * 4).toFixed(2)})`
  const head = `translate(${(dir.x * 3.5).toFixed(2)} ${(dir.y * 3).toFixed(2)})`

  return (
    <div className="hero-art" ref={wrapRef}>
      <svg
        className="art-svg"
        viewBox="0 0 460 470"
        role="img"
        aria-label="Illustration of a developer with glasses holding coffee and a laptop, in front of server racks"
      >
        <defs>
          <linearGradient id="skin" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#ffe1c6" />
            <stop offset="1" stopColor="#f4bd97" />
          </linearGradient>
          <linearGradient id="hair" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#8a4f2c" />
            <stop offset="1" stopColor="#5f3620" />
          </linearGradient>
          <linearGradient id="hairHi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#b57a45" />
            <stop offset="1" stopColor="#8a4f2c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hoodie" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#f0584a" />
            <stop offset="1" stopColor="#cf3a2c" />
          </linearGradient>
          <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d3d6dd" />
            <stop offset="1" stopColor="#b0b4be" />
          </linearGradient>
          <radialGradient id="backdrop" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#37d4c4" stopOpacity="0.32" />
            <stop offset="0.7" stopColor="#37d4c4" stopOpacity="0.12" />
            <stop offset="1" stopColor="#37d4c4" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect className="art-panel" x="20" y="26" width="420" height="418" rx="46" />

        {/* server racks behind */}
        <g className="racks" opacity="0.9">
          <rect x="70" y="120" width="62" height="210" rx="8" fill="#2b3244" />
          <rect x="328" y="120" width="62" height="210" rx="8" fill="#2b3244" />
          <g fill="#1f2635">
            <rect x="78" y="132" width="46" height="18" rx="3" />
            <rect x="78" y="156" width="46" height="18" rx="3" />
            <rect x="78" y="180" width="46" height="18" rx="3" />
            <rect x="78" y="204" width="46" height="18" rx="3" />
            <rect x="78" y="228" width="46" height="18" rx="3" />
            <rect x="78" y="252" width="46" height="18" rx="3" />
            <rect x="336" y="132" width="46" height="18" rx="3" />
            <rect x="336" y="156" width="46" height="18" rx="3" />
            <rect x="336" y="180" width="46" height="18" rx="3" />
            <rect x="336" y="204" width="46" height="18" rx="3" />
            <rect x="336" y="228" width="46" height="18" rx="3" />
            <rect x="336" y="252" width="46" height="18" rx="3" />
          </g>
          <g className="leds">
            <circle cx="86" cy="141" r="2.6" fill="#37d4c4" /><circle cx="94" cy="141" r="2.6" fill="#ff6a5a" />
            <circle cx="86" cy="189" r="2.6" fill="#ff6a5a" /><circle cx="94" cy="189" r="2.6" fill="#37d4c4" />
            <circle cx="86" cy="237" r="2.6" fill="#37d4c4" />
            <circle cx="344" cy="141" r="2.6" fill="#ff6a5a" /><circle cx="352" cy="141" r="2.6" fill="#37d4c4" />
            <circle cx="344" cy="213" r="2.6" fill="#37d4c4" /><circle cx="352" cy="213" r="2.6" fill="#ff6a5a" />
          </g>
        </g>

        {/* floating tech nodes + data flow */}
        <g className="nodes" fill="none" stroke="#37d4c4" strokeWidth="2">
          <g className="node node-a">
            <rect x="150" y="66" width="58" height="30" rx="6" />
            <g stroke="none" fill="#37d4c4">
              <circle cx="160" cy="76" r="1.8" /><circle cx="170" cy="76" r="1.8" /><circle cx="180" cy="76" r="1.8" /><circle cx="190" cy="76" r="1.8" /><circle cx="200" cy="76" r="1.8" />
              <circle cx="160" cy="86" r="1.8" /><circle cx="170" cy="86" r="1.8" /><circle cx="180" cy="86" r="1.8" /><circle cx="190" cy="86" r="1.8" /><circle cx="200" cy="86" r="1.8" />
            </g>
          </g>
          <g className="node node-b">
            <rect x="272" y="58" width="40" height="40" rx="6" />
            <path d="M280 66h24v24h-24z" strokeWidth="1.6" />
            <path d="M286 58v-6M296 58v-6M280 98v6M292 98v6M272 72h-6M272 84h-6M312 72h6M312 84h6" strokeWidth="1.6" />
          </g>
          <g className="node node-c">
            <rect x="96" y="150" width="34" height="24" rx="5" />
            <circle cx="113" cy="162" r="4" stroke="none" fill="#37d4c4" />
          </g>
          <g className="lines" strokeWidth="1.6" opacity="0.6">
            <path d="M208 84 H250 a8 8 0 0 1 8 8 V150" />
            <path d="M272 78 H236 a8 8 0 0 0 -8 8 V132" />
            <path d="M130 162 H150 a8 8 0 0 1 8 8 V206" />
          </g>
          <g stroke="none" fill="#5eead4">
            <circle className="flow flow-a" cx="0" cy="0" r="3" />
            <circle className="flow flow-b" cx="0" cy="0" r="3" />
            <circle className="flow flow-c" cx="0" cy="0" r="3" />
          </g>
        </g>

        {/* teal circular backdrop */}
        <ellipse cx="230" cy="266" rx="150" ry="150" fill="url(#backdrop)" />

        <g className="character">
          <g className="breathe">
            {/* crossed legs / jeans */}
            <path d="M150 402 Q230 372 310 402 L318 432 Q230 452 142 432 Z" fill="#3f6ea8" />
            <path d="M150 402 Q230 372 310 402 L306 414 Q230 392 154 414 Z" fill="#345c8e" />

            {/* hood behind shoulders */}
            <path d="M172 300 Q160 256 200 250 L260 250 Q300 256 288 300 Z" fill="#c2352a" />
            {/* hoodie body */}
            <path d="M164 408 Q158 300 208 280 L252 280 Q302 300 296 408 Z" fill="url(#hoodie)" />
            {/* inner dark shirt with code symbol */}
            <path d="M208 282 Q230 306 252 282 L252 340 Q230 356 208 340 Z" fill="#262b36" />
            <text x="230" y="322" className="chest-code" textAnchor="middle">&lt;/&gt;</text>
            {/* hoodie zipper + pocket */}
            <line x1="230" y1="300" x2="230" y2="404" stroke="#a82c22" strokeWidth="3" />
            <path d="M186 356 h88 l-10 30 h-68 Z" fill="#d8habe" opacity="0" />
            <path d="M188 360 q42 14 84 0 l-8 26 q-34 12 -68 0 Z" fill="#d94436" />

            {/* neck */}
            <path d="M214 236 h32 v22 q-16 12 -32 0 Z" fill="#f0b58e" />

            {/* head */}
            <g className="head" transform={head}>
              {/* back hair */}
              <path d="M158 176 Q150 262 186 292 L274 292 Q310 262 302 176 Q302 104 230 100 Q158 104 158 176 Z" fill="url(#hair)" />
              {/* face */}
              <path d="M170 176 Q170 108 230 108 Q290 108 290 176 Q290 224 254 240 Q230 250 206 240 Q170 224 170 176 Z" fill="url(#skin)" />
              {/* blush */}
              <ellipse cx="190" cy="204" rx="15" ry="9" fill="#ff9d8f" opacity="0.55" />
              <ellipse cx="270" cy="204" rx="15" ry="9" fill="#ff9d8f" opacity="0.55" />

              {/* eyebrows */}
              <path d="M184 148 q18 -7 34 -1" className="brow" />
              <path d="M242 147 q18 -6 34 1" className="brow" />

              {/* big kawaii eyes */}
              <g className="eyes">
                <ellipse cx="205" cy="183" rx="18" ry="21" fill="#fff" />
                <ellipse cx="255" cy="183" rx="18" ry="21" fill="#fff" />
                <g className="irises" transform={iris}>
                  {/* left */}
                  <circle cx="205" cy="184" r="14.5" fill="#5c3a20" />
                  <circle cx="205" cy="185" r="11" fill="#3a2312" />
                  <circle cx="205" cy="186" r="6" fill="#170f08" />
                  <ellipse cx="199" cy="178" rx="5" ry="6" fill="#fff" />
                  <circle cx="210" cy="190" r="2.4" fill="#fff" opacity="0.85" />
                  {/* right */}
                  <circle cx="255" cy="184" r="14.5" fill="#5c3a20" />
                  <circle cx="255" cy="185" r="11" fill="#3a2312" />
                  <circle cx="255" cy="186" r="6" fill="#170f08" />
                  <ellipse cx="249" cy="178" rx="5" ry="6" fill="#fff" />
                  <circle cx="260" cy="190" r="2.4" fill="#fff" opacity="0.85" />
                </g>
              </g>

              {/* round glasses */}
              <g className="glasses" fill="none" stroke="#20242e" strokeWidth="4">
                <circle cx="205" cy="183" r="26" />
                <circle cx="255" cy="183" r="26" />
                <path d="M231 180 q-1 -4 -2 0" strokeWidth="3.5" />
                <path d="M179 178 l-13 -6M281 178 l13 -6" strokeWidth="3.5" strokeLinecap="round" />
              </g>

              {/* nose + gentle smile */}
              <path d="M227 198 q3 4 5 6 q-3 2 -6 0" fill="none" stroke="#e0a074" strokeWidth="2" strokeLinecap="round" />
              <path d="M214 216 q16 13 32 0" fill="none" stroke="#a85742" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M220 219 q10 6 20 0" fill="#e0806e" opacity="0.6" />

              {/* bangs / fringe */}
              <path d="M158 176 Q152 108 230 100 Q308 108 302 176 Q292 140 262 132 Q250 150 230 148 Q206 152 196 132 Q168 140 158 176 Z" fill="url(#hair)" />
              <path d="M230 100 Q176 106 164 160 Q200 120 232 126 Z" fill="url(#hairHi)" opacity="0.6" />
              {/* side locks */}
              <path d="M164 172 Q156 244 190 288 L202 282 Q176 240 178 176 Z" fill="url(#hair)" />
              <path d="M296 172 Q304 244 270 288 L258 282 Q284 240 282 176 Z" fill="url(#hair)" />
            </g>
          </g>

          {/* left arm holding mug */}
          <path className="arm" d="M180 316 Q150 346 168 384 L206 372 Q190 340 214 320 Z" fill="url(#hoodie)" />
          <g className="mug">
            <path className="steam" d="M188 316 q6 -8 0 -16 q-6 -8 0 -16" fill="none" stroke="#e7cfb0" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <rect x="170" y="322" width="34" height="30" rx="5" fill="#eef0f2" />
            <rect x="170" y="322" width="34" height="7" rx="3" fill="#6b4a30" />
            <path d="M204 328 q11 0 11 10 q0 10 -11 10" fill="none" stroke="#eef0f2" strokeWidth="4" />
            <rect x="176" y="336" width="22" height="12" rx="3" fill="#f4b57a" />
          </g>

          {/* right arm to laptop */}
          <path className="arm" d="M280 316 Q312 344 300 384 L262 374 Q284 344 266 320 Z" fill="url(#hoodie)" />

          {/* laptop on lap */}
          <g className="laptop">
            <path d="M166 402 L294 402 L322 430 L138 430 Z" fill="#9a9ea8" />
            <rect x="176" y="352" width="112" height="54" rx="8" fill="url(#lid)" stroke="#8f939d" />
            <circle className="logo" cx="232" cy="379" r="8" fill="#37d4c4" />
            {/* hands on laptop */}
            <ellipse className="hand hand-left" cx="182" cy="408" rx="15" ry="9" fill="#f4bd97" />
            <ellipse className="hand hand-right" cx="286" cy="408" rx="15" ry="9" fill="#f4bd97" />
          </g>
        </g>
      </svg>
    </div>
  )
}
