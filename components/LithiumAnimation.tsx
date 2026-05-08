"use client";

type AnimationVariant =
  | "teknologi"
  | "bruksomrader"
  | "sikkerhet"
  | "marked"
  | "lfp-feature"
  | "bat-feature"
  | "lfp-vs-nmc"
  | "marked-feature"
  | "kalkulator-feature";

type Props = {
  variant: AnimationVariant;
  className?: string;
};

export default function LithiumAnimation({ variant, className = "" }: Props) {
  switch (variant) {
    case "teknologi":
      return <TeknologiAnim className={className} />;
    case "bruksomrader":
      return <BruksomraderAnim className={className} />;
    case "sikkerhet":
      return <SikkerhetAnim className={className} />;
    case "marked":
      return <MarkedAnim className={className} />;
    case "lfp-feature":
      return <LFPFeatureAnim className={className} />;
    case "bat-feature":
      return <BatFeatureAnim className={className} />;
    case "lfp-vs-nmc":
      return <LFPvsNMCAnim className={className} />;
    case "marked-feature":
      return <MarkedFeatureAnim className={className} />;
    case "kalkulator-feature":
      return <KalkulatorAnim className={className} />;
    default:
      return null;
  }
}

/* ============================================================
   TEKNOLOGI: Litium-ion beveger seg mellom anode og katode
   ============================================================ */
function TeknologiAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-teknologi ${className}`}>
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradTek" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <linearGradient id="anodeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
          <linearGradient id="cathodeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <radialGradient id="ionGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FCD34D" stopOpacity="1" />
            <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <filter id="glowTek" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="600" height="400" fill="url(#bgGradTek)" />

        {/* Background grid pattern */}
        <g opacity="0.08" stroke="#fff" strokeWidth="1">
          {[...Array(15)].map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
          ))}
          {[...Array(10)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="600" y2={i * 40} />
          ))}
        </g>

        {/* Anode (left) */}
        <g className="lit-anode">
          <rect x="60" y="80" width="80" height="240" rx="6" fill="url(#anodeGrad)" opacity="0.9" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1="70" y1={100 + i * 38} x2="130" y2={100 + i * 38} stroke="#fff" strokeWidth="1" opacity="0.3" />
          ))}
          <text x="100" y="350" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600" opacity="0.7">
            ANODE
          </text>
        </g>

        {/* Cathode (right) */}
        <g className="lit-cathode">
          <rect x="460" y="80" width="80" height="240" rx="6" fill="url(#cathodeGrad)" opacity="0.9" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1="470" y1={100 + i * 38} x2="530" y2={100 + i * 38} stroke="#fff" strokeWidth="1" opacity="0.3" />
          ))}
          <text x="500" y="350" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600" opacity="0.7">
            KATODE
          </text>
        </g>

        {/* Electrolyte (middle wavy lines) */}
        <g opacity="0.15">
          {[120, 160, 200, 240, 280].map((y, i) => (
            <path
              key={i}
              d={`M 150 ${y} Q 200 ${y - 8} 250 ${y} T 350 ${y} T 450 ${y}`}
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              className={`lit-wave lit-wave-${i}`}
            />
          ))}
        </g>

        {/* Litium ions traveling */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <g key={i} className={`lit-ion lit-ion-${i}`}>
            <circle r="20" fill="url(#ionGlow)" opacity="0.6" />
            <circle r="10" fill="#FCD34D" filter="url(#glowTek)" />
            <text textAnchor="middle" dy="4" fill="#1E1B4B" fontSize="10" fontWeight="700">
              Li⁺
            </text>
          </g>
        ))}

        {/* Title overlay */}
        <g className="lit-title">
          <rect x="0" y="0" width="600" height="400" fill="url(#bgGradTek)" opacity="0" className="lit-title-bg" />
          <text x="300" y="50" textAnchor="middle" fill="#FCD34D" fontSize="14" fontWeight="700" letterSpacing="3">
            KJEMI &amp; CELLER
          </text>
          <text x="300" y="385" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="700" letterSpacing="-1">
            Teknologi
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
   BRUKSOMRADER: Roterende ikoner som orbiterer rundt sentralt batteri
   ============================================================ */
function BruksomraderAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-bruksomrader ${className}`}>
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradBruk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <filter id="iconGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" />
            <feComponentTransfer><feFuncA type="linear" slope="2" /></feComponentTransfer>
          </filter>
        </defs>

        <rect width="600" height="400" fill="url(#bgGradBruk)" />

        {/* Pulsing central glow */}
        <circle cx="300" cy="200" r="180" fill="url(#centerGlow)" className="lit-pulse" />

        {/* Orbital rings */}
        <g fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.3">
          <circle cx="300" cy="200" r="100" strokeDasharray="3 6" className="lit-orbit-slow" />
          <circle cx="300" cy="200" r="140" strokeDasharray="6 12" className="lit-orbit-rev" />
        </g>

        {/* Central battery icon */}
        <g transform="translate(300, 200)" className="lit-center">
          <rect x="-24" y="-14" width="48" height="28" rx="3" fill="#7C3AED" stroke="#A78BFA" strokeWidth="2" />
          <rect x="24" y="-6" width="3" height="12" rx="1" fill="#7C3AED" stroke="#A78BFA" strokeWidth="1" />
          <rect x="-20" y="-10" width="36" height="20" rx="2" fill="#F59E0B" opacity="0.8" />
          <path d="M -2 -6 L -8 4 L 0 4 L -3 12 L 5 0 L -1 0 L 2 -6 Z" fill="#1E1B4B" />
        </g>

        {/* Orbiting use-case icons */}
        <g className="lit-orbit-1">
          <g transform="translate(300, 100)">
            <circle r="22" fill="#fff" opacity="0.95" />
            {/* Car icon */}
            <g transform="translate(-12, -8)" stroke="#5B21B6" strokeWidth="2" fill="none">
              <path d="M 2 10 L 22 10" />
              <path d="M 4 10 L 6 4 L 18 4 L 20 10" />
              <circle cx="7" cy="12" r="2" fill="#5B21B6" />
              <circle cx="17" cy="12" r="2" fill="#5B21B6" />
            </g>
            <text textAnchor="middle" y="38" fill="#fff" fontSize="11" fontWeight="600">Elbil</text>
          </g>
        </g>

        <g className="lit-orbit-2">
          <g transform="translate(400, 200)">
            <circle r="22" fill="#fff" opacity="0.95" />
            {/* Boat */}
            <g transform="translate(-12, -8)" stroke="#5B21B6" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M 2 12 Q 12 18 22 12 L 18 8 L 6 8 Z" fill="#A78BFA" />
              <line x1="12" y1="8" x2="12" y2="2" />
              <path d="M 12 2 L 18 6 L 12 6" fill="#5B21B6" />
            </g>
            <text textAnchor="middle" y="38" fill="#fff" fontSize="11" fontWeight="600">Båt</text>
          </g>
        </g>

        <g className="lit-orbit-3">
          <g transform="translate(300, 300)">
            <circle r="22" fill="#fff" opacity="0.95" />
            {/* Bicycle */}
            <g transform="translate(-12, -8)" stroke="#5B21B6" strokeWidth="2" fill="none">
              <circle cx="6" cy="12" r="4" />
              <circle cx="18" cy="12" r="4" />
              <path d="M 6 12 L 12 6 L 18 12 M 12 6 L 13 4" />
            </g>
            <text textAnchor="middle" y="38" fill="#fff" fontSize="11" fontWeight="600">Sykkel</text>
          </g>
        </g>

        <g className="lit-orbit-4">
          <g transform="translate(200, 200)">
            <circle r="22" fill="#fff" opacity="0.95" />
            {/* House */}
            <g transform="translate(-12, -10)" stroke="#5B21B6" strokeWidth="2" fill="none" strokeLinejoin="round">
              <path d="M 4 10 L 12 2 L 20 10 L 20 18 L 4 18 Z" />
              <path d="M 10 18 L 10 12 L 14 12 L 14 18" fill="#A78BFA" />
            </g>
            <text textAnchor="middle" y="38" fill="#fff" fontSize="11" fontWeight="600">Hjem</text>
          </g>
        </g>

        {/* Sparkle particles */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            r="2"
            fill="#FCD34D"
            className={`lit-sparkle lit-sparkle-${i}`}
          />
        ))}

        <text x="300" y="40" textAnchor="middle" fill="#FCD34D" fontSize="14" fontWeight="700" letterSpacing="3">
          FRA ELBIL TIL HJEM
        </text>
        <text x="300" y="385" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="700" letterSpacing="-1">
          Bruksområder
        </text>
      </svg>
    </div>
  );
}

/* ============================================================
   SIKKERHET: Termisk varmegradient som pulserer + skjold
   ============================================================ */
function SikkerhetAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-sikkerhet ${className}`}>
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradSik" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <radialGradient id="heatPulse" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#DC2626" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="shieldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="600" height="400" fill="url(#bgGradSik)" />

        {/* Concentric heat pulses */}
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx="300"
            cy="200"
            r="80"
            fill="url(#heatPulse)"
            className={`lit-heat-pulse lit-heat-pulse-${i}`}
          />
        ))}

        {/* Battery cell with heat indicator */}
        <g transform="translate(300, 200)">
          <rect
            x="-50"
            y="-70"
            width="100"
            height="140"
            rx="8"
            fill="#1E1B4B"
            stroke="#A78BFA"
            strokeWidth="3"
          />
          {/* Temperature bar inside */}
          <rect x="-40" y="-60" width="20" height="120" rx="2" fill="#1E1B4B" stroke="#7C3AED" strokeWidth="1" />
          <rect
            x="-39"
            y="-59"
            width="18"
            height="118"
            rx="2"
            fill="url(#heatPulse)"
            className="lit-heat-bar"
          />

          {/* Cells inside */}
          <g>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x="-10"
                y={-58 + i * 30}
                width="50"
                height="22"
                rx="2"
                fill="#A78BFA"
                opacity="0.6"
                className={`lit-cell-flicker lit-cell-flicker-${i}`}
              />
            ))}
          </g>
        </g>

        {/* Shield around battery (security symbol) */}
        <g transform="translate(300, 200)" className="lit-shield" filter="url(#shieldGlow)">
          <path
            d="M 0 -110 L 80 -85 L 80 30 Q 80 90 0 115 Q -80 90 -80 30 L -80 -85 Z"
            fill="none"
            stroke="url(#shieldGrad)"
            strokeWidth="3"
            opacity="0.6"
          />
        </g>

        {/* Lightning bolts (warning) */}
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d="M 0 -8 L -4 0 L 0 0 L -2 6 L 4 -2 L 0 -2 L 2 -8 Z"
            fill="#FCD34D"
            transform={`translate(${[120, 480, 130, 470][i]}, ${[120, 130, 280, 270][i]})`}
            className={`lit-bolt lit-bolt-${i}`}
          />
        ))}

        {/* Floating "safe" check marks */}
        <g className="lit-safe-1">
          <circle cx="100" cy="100" r="20" fill="#10B981" opacity="0.9" />
          <path d="M 92 100 L 98 106 L 110 92" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="lit-safe-2">
          <circle cx="500" cy="300" r="20" fill="#10B981" opacity="0.9" />
          <path d="M 492 300 L 498 306 L 510 292" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <text x="300" y="40" textAnchor="middle" fill="#FCD34D" fontSize="14" fontWeight="700" letterSpacing="3">
          BRANN &amp; LAGRING
        </text>
        <text x="300" y="385" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="700" letterSpacing="-1">
          Sikkerhet
        </text>
      </svg>
    </div>
  );
}

/* ============================================================
   MARKED: Animert linjegraf som tegner seg + bakgrunn
   ============================================================ */
function MarkedAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-marked ${className}`}>
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradMar" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <rect width="600" height="400" fill="url(#bgGradMar)" />

        {/* Grid background */}
        <g stroke="#A78BFA" strokeWidth="1" opacity="0.08">
          {[100, 150, 200, 250, 300].map((y) => (
            <line key={y} x1="60" y1={y} x2="540" y2={y} />
          ))}
          {[100, 200, 300, 400, 500].map((x) => (
            <line key={x} x1={x} y1="80" x2={x} y2="320" />
          ))}
        </g>

        {/* Y-axis labels */}
        <g fill="#A78BFA" fontSize="11" textAnchor="end" opacity="0.6">
          <text x="55" y="105">600k</text>
          <text x="55" y="155">450k</text>
          <text x="55" y="205">300k</text>
          <text x="55" y="255">150k</text>
          <text x="55" y="305">90k</text>
        </g>

        {/* Animated chart fill */}
        <path
          d="M 80 280 L 130 240 L 180 220 L 230 100 L 280 130 L 330 250 L 380 270 L 430 240 L 480 220 L 530 200 L 530 320 L 80 320 Z"
          fill="url(#fillGrad)"
          className="lit-chart-fill"
        />

        {/* Animated line */}
        <path
          d="M 80 280 L 130 240 L 180 220 L 230 100 L 280 130 L 330 250 L 380 270 L 430 240 L 480 220 L 530 200"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#lineGlow)"
          className="lit-chart-line"
          pathLength="1"
        />

        {/* Data points */}
        {[
          [130, 240], [180, 220], [230, 100], [280, 130],
          [330, 250], [380, 270], [430, 240], [480, 220], [530, 200],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="5"
            fill="#FCD34D"
            stroke="#fff"
            strokeWidth="2"
            className={`lit-data-point lit-data-point-${i}`}
          />
        ))}

        {/* Floating particles representing transactions */}
        {[...Array(10)].map((_, i) => (
          <circle
            key={i}
            r="1.5"
            fill="#A78BFA"
            className={`lit-particle lit-particle-${i}`}
          />
        ))}

        {/* Currency symbol */}
        <g transform="translate(530, 100)" className="lit-currency">
          <circle r="22" fill="#F59E0B" />
          <text textAnchor="middle" dy="6" fill="#1E1B4B" fontSize="22" fontWeight="700">$</text>
        </g>

        <text x="300" y="45" textAnchor="middle" fill="#FCD34D" fontSize="14" fontWeight="700" letterSpacing="3">
          PRIS &amp; INDUSTRI
        </text>
        <text x="300" y="385" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="700" letterSpacing="-1">
          Marked
        </text>
      </svg>
    </div>
  );
}

/* ============================================================
   LFP-FEATURE: LFP-celle-stack som bygger seg opp lag for lag
   ============================================================ */
function LFPFeatureAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-lfp-feat ${className}`}>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradLFP" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <linearGradient id="cellGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
          <filter id="cellShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#7C3AED" floodOpacity="0.4" />
          </filter>
        </defs>

        <rect width="400" height="500" fill="url(#bgGradLFP)" />

        {/* Background atom pattern */}
        {[
          [60, 80, 0.3],
          [320, 120, 0.2],
          [80, 380, 0.25],
          [330, 420, 0.3],
        ].map(([cx, cy, op], i) => (
          <g key={i} opacity={op} transform={`translate(${cx}, ${cy})`}>
            <ellipse cx="0" cy="0" rx="30" ry="13" stroke="#A78BFA" strokeWidth="1.5" fill="none" />
            <ellipse cx="0" cy="0" rx="30" ry="13" stroke="#A78BFA" strokeWidth="1.5" fill="none" transform="rotate(60)" />
            <ellipse cx="0" cy="0" rx="30" ry="13" stroke="#A78BFA" strokeWidth="1.5" fill="none" transform="rotate(-60)" />
            <circle r="4" fill="#F59E0B" />
          </g>
        ))}

        {/* Stacked cells */}
        <g transform="translate(200, 270)">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className={`lit-stack-cell lit-stack-cell-${i}`}>
              <rect
                x="-90"
                y={-30 + i * -28 - 50}
                width="180"
                height="24"
                rx="3"
                fill="url(#cellGrad)"
                stroke="#A78BFA"
                strokeWidth="1"
                filter="url(#cellShadow)"
              />
              {/* Cell text */}
              <text
                x="0"
                y={-30 + i * -28 - 33}
                textAnchor="middle"
                fill="#fff"
                fontSize="10"
                fontWeight="600"
                opacity="0.8"
              >
                LFP-CELLE {5 - i}
              </text>
            </g>
          ))}

          {/* Battery housing outline */}
          <rect
            x="-100"
            y="-200"
            width="200"
            height="200"
            rx="8"
            fill="none"
            stroke="#FCD34D"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="lit-housing"
          />
        </g>

        {/* Energy flow indicator */}
        <g transform="translate(200, 80)" className="lit-energy-pulse">
          <path d="M 0 -20 L -8 0 L 0 0 L -4 14 L 8 -4 L 0 -4 L 4 -20 Z" fill="#FCD34D" />
        </g>

        {/* Spec labels */}
        <g className="lit-spec-1">
          <rect x="20" y="180" width="80" height="32" rx="16" fill="#fff" opacity="0.95" />
          <text x="60" y="195" textAnchor="middle" fill="#7C3AED" fontSize="9" fontWeight="700">3.2V</text>
          <text x="60" y="206" textAnchor="middle" fill="#5B21B6" fontSize="8" opacity="0.7">NOMINELL</text>
        </g>

        <g className="lit-spec-2">
          <rect x="300" y="200" width="80" height="32" rx="16" fill="#fff" opacity="0.95" />
          <text x="340" y="215" textAnchor="middle" fill="#7C3AED" fontSize="9" fontWeight="700">6000+</text>
          <text x="340" y="226" textAnchor="middle" fill="#5B21B6" fontSize="8" opacity="0.7">SYKLUSER</text>
        </g>

        <g className="lit-spec-3">
          <rect x="20" y="320" width="80" height="32" rx="16" fill="#fff" opacity="0.95" />
          <text x="60" y="335" textAnchor="middle" fill="#7C3AED" fontSize="9" fontWeight="700">LiFePO₄</text>
          <text x="60" y="346" textAnchor="middle" fill="#5B21B6" fontSize="8" opacity="0.7">KJEMI</text>
        </g>

        {/* Title */}
        <text x="200" y="55" textAnchor="middle" fill="#FCD34D" fontSize="13" fontWeight="700" letterSpacing="3">
          MEST LEST
        </text>
        <text x="200" y="450" textAnchor="middle" fill="#fff" fontSize="36" fontWeight="700" letterSpacing="-1">
          LFP-celle
        </text>
        <text x="200" y="475" textAnchor="middle" fill="#A78BFA" fontSize="14" opacity="0.8">
          Sikker. Holdbar. Stabil.
        </text>
      </svg>
    </div>
  );
}

/* ============================================================
   BAT-FEATURE: Bølger + LFP-batteri
   ============================================================ */
function BatFeatureAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-bat-feat ${className}`}>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradBat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="60%" stopColor="#5B21B6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill="url(#bgGradBat)" />

        {/* Sun glow at top */}
        <radialGradient id="sunGlow" cx="0.5" cy="0" r="0.6">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
        </radialGradient>
        <rect width="400" height="200" fill="url(#sunGlow)" />

        {/* Multiple wave layers */}
        {[280, 310, 340, 370, 400].map((y, i) => (
          <path
            key={i}
            d={`M 0 ${y} Q 100 ${y - 10} 200 ${y} T 400 ${y} L 400 500 L 0 500 Z`}
            fill="url(#waveGrad)"
            opacity={0.3 + i * 0.1}
            className={`lit-bat-wave lit-bat-wave-${i}`}
          />
        ))}

        {/* Boat silhouette */}
        <g transform="translate(200, 240)" className="lit-boat-bob">
          <path
            d="M -60 0 Q 0 8 60 0 L 50 -10 L -50 -10 Z"
            fill="#1E1B4B"
            stroke="#A78BFA"
            strokeWidth="1.5"
          />
          <line x1="0" y1="-10" x2="0" y2="-50" stroke="#A78BFA" strokeWidth="2" />
          <path d="M 0 -50 L 30 -20 L 0 -20 Z" fill="#FCD34D" />
        </g>

        {/* Battery on boat */}
        <g transform="translate(200, 340)" className="lit-bat-battery">
          <rect x="-35" y="-25" width="70" height="50" rx="4" fill="#7C3AED" stroke="#FCD34D" strokeWidth="2" />
          <rect x="35" y="-12" width="4" height="24" rx="1" fill="#7C3AED" stroke="#FCD34D" strokeWidth="1" />
          <rect x="-30" y="-20" width="60" height="40" rx="2" fill="#A78BFA" opacity="0.5" />
          {/* Battery indicator bars */}
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={-26 + i * 14}
              y="-15"
              width="10"
              height="30"
              rx="1"
              fill="#FCD34D"
              className={`lit-bat-bar lit-bat-bar-${i}`}
            />
          ))}
        </g>

        {/* Floating bubbles */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            r="3"
            fill="#A78BFA"
            opacity="0.6"
            className={`lit-bubble lit-bubble-${i}`}
          />
        ))}

        <text x="200" y="55" textAnchor="middle" fill="#FCD34D" fontSize="13" fontWeight="700" letterSpacing="3">
          VOKSENDE SEGMENT
        </text>
        <text x="200" y="450" textAnchor="middle" fill="#fff" fontSize="36" fontWeight="700" letterSpacing="-1">
          Litium for båt
        </text>
        <text x="200" y="475" textAnchor="middle" fill="#A78BFA" fontSize="14" opacity="0.8">
          Erstatte blybatteri
        </text>
      </svg>
    </div>
  );
}

/* ============================================================
   LFP-VS-NMC: To celler side ved side med ulik kjemi
   ============================================================ */
function LFPvsNMCAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-lfp-nmc ${className}`}>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradVs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <radialGradient id="lfpGlow" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nmcGlow" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="500" fill="url(#bgGradVs)" />

        {/* Versus separator */}
        <line x1="200" y1="100" x2="200" y2="380" stroke="#FCD34D" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
        <g transform="translate(200, 240)">
          <circle r="22" fill="#1E1B4B" stroke="#FCD34D" strokeWidth="2" className="lit-vs-pulse" />
          <text textAnchor="middle" dy="6" fill="#FCD34D" fontSize="14" fontWeight="700">VS</text>
        </g>

        {/* LFP side (left) */}
        <g transform="translate(100, 240)">
          <circle r="80" fill="url(#lfpGlow)" className="lit-lfp-glow" />
          <g className="lit-lfp-cell">
            <rect x="-32" y="-50" width="64" height="100" rx="4" fill="#10B981" stroke="#fff" strokeWidth="2" />
            {/* Olivine structure (LFP) - hexagonal */}
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(0, ${-30 + i * 20})`} className={`lit-lfp-atom lit-lfp-atom-${i}`}>
                <polygon
                  points="0,-6 5,-3 5,3 0,6 -5,3 -5,-3"
                  fill="#fff"
                  opacity="0.8"
                />
              </g>
            ))}
          </g>
          <text x="0" y="80" textAnchor="middle" fill="#10B981" fontSize="20" fontWeight="700">LFP</text>
          <text x="0" y="100" textAnchor="middle" fill="#fff" fontSize="11" opacity="0.7">Sikkerhet</text>
        </g>

        {/* NMC side (right) */}
        <g transform="translate(300, 240)">
          <circle r="80" fill="url(#nmcGlow)" className="lit-nmc-glow" />
          <g className="lit-nmc-cell">
            <rect x="-32" y="-50" width="64" height="100" rx="4" fill="#F59E0B" stroke="#fff" strokeWidth="2" />
            {/* Layered structure (NMC) */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={i}
                x1="-26"
                y1={-40 + i * 16}
                x2="26"
                y2={-40 + i * 16}
                stroke="#fff"
                strokeWidth="2"
                opacity="0.8"
                className={`lit-nmc-layer lit-nmc-layer-${i}`}
              />
            ))}
          </g>
          <text x="0" y="80" textAnchor="middle" fill="#F59E0B" fontSize="20" fontWeight="700">NMC</text>
          <text x="0" y="100" textAnchor="middle" fill="#fff" fontSize="11" opacity="0.7">Energitetthet</text>
        </g>

        {/* Comparison stats */}
        <g transform="translate(50, 370)" className="lit-stat-1">
          <text fill="#10B981" fontSize="20" fontWeight="700">6000</text>
          <text y="14" fill="#fff" fontSize="9" opacity="0.6">SYKLUSER</text>
        </g>
        <g transform="translate(310, 370)" className="lit-stat-2">
          <text fill="#F59E0B" fontSize="20" fontWeight="700">270</text>
          <text y="14" fill="#fff" fontSize="9" opacity="0.6">Wh/kg</text>
        </g>

        <text x="200" y="55" textAnchor="middle" fill="#FCD34D" fontSize="13" fontWeight="700" letterSpacing="3">
          SAMMENLIGNING
        </text>
        <text x="200" y="450" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="700" letterSpacing="-1">
          LFP vs NMC
        </text>
        <text x="200" y="475" textAnchor="middle" fill="#A78BFA" fontSize="14" opacity="0.8">
          To kjemier sammenlignet
        </text>
      </svg>
    </div>
  );
}

/* ============================================================
   MARKED-FEATURE: Roterende globus med litium-saltsjøer
   ============================================================ */
function MarkedFeatureAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-marked-feat ${className}`}>
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradGlob" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <radialGradient id="globeGrad" cx="0.4" cy="0.4" r="0.6">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="60%" stopColor="#5B21B6" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </radialGradient>
          <filter id="globeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect width="800" height="500" fill="url(#bgGradGlob)" />

        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <circle
            key={i}
            r={Math.random() > 0.5 ? 1 : 1.5}
            fill="#fff"
            opacity={0.3 + Math.random() * 0.5}
            cx={Math.random() * 800}
            cy={Math.random() * 500}
            className={`lit-twinkle lit-twinkle-${i % 5}`}
          />
        ))}

        {/* Globe halo */}
        <circle cx="400" cy="250" r="180" fill="#7C3AED" opacity="0.3" filter="url(#globeGlow)" className="lit-globe-halo" />

        {/* Globe sphere */}
        <circle cx="400" cy="250" r="140" fill="url(#globeGrad)" />

        {/* Lat/long lines */}
        <g fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.5">
          <ellipse cx="400" cy="250" rx="140" ry="40" />
          <ellipse cx="400" cy="250" rx="140" ry="80" />
          <ellipse cx="400" cy="250" rx="140" ry="120" />
          <ellipse cx="400" cy="250" rx="40" ry="140" />
          <ellipse cx="400" cy="250" rx="80" ry="140" />
          <ellipse cx="400" cy="250" rx="120" ry="140" />
        </g>

        {/* Litium-trekanten markers */}
        {[
          { x: 360, y: 310, label: "Chile", delay: 0 },
          { x: 380, y: 330, label: "Argentina", delay: 0.6 },
          { x: 350, y: 290, label: "Bolivia", delay: 1.2 },
          { x: 470, y: 240, label: "Australia", delay: 1.8 },
          { x: 460, y: 210, label: "Kina", delay: 2.4 },
        ].map((m, i) => (
          <g key={i} className={`lit-marker lit-marker-${i}`}>
            <circle cx={m.x} cy={m.y} r="20" fill="#F59E0B" opacity="0.3" className="lit-marker-pulse" />
            <circle cx={m.x} cy={m.y} r="6" fill="#FCD34D" stroke="#fff" strokeWidth="2" />
          </g>
        ))}

        {/* Floating data labels */}
        <g className="lit-data-label-1">
          <rect x="80" y="120" width="180" height="50" rx="8" fill="#fff" opacity="0.95" />
          <text x="100" y="140" fill="#5B21B6" fontSize="10" fontWeight="700" letterSpacing="1">SPOTPRIS</text>
          <text x="100" y="160" fill="#7C3AED" fontSize="20" fontWeight="700">110 000</text>
          <text x="200" y="160" fill="#5B21B6" fontSize="11" opacity="0.6">kr/tonn</text>
        </g>

        <g className="lit-data-label-2">
          <rect x="540" y="350" width="180" height="50" rx="8" fill="#fff" opacity="0.95" />
          <text x="560" y="370" fill="#5B21B6" fontSize="10" fontWeight="700" letterSpacing="1">VEKST 2030</text>
          <text x="560" y="390" fill="#F59E0B" fontSize="20" fontWeight="700">+400%</text>
          <text x="650" y="390" fill="#5B21B6" fontSize="11" opacity="0.6">forventet</text>
        </g>

        <g className="lit-data-label-3">
          <rect x="540" y="100" width="180" height="50" rx="8" fill="#fff" opacity="0.95" />
          <text x="560" y="120" fill="#5B21B6" fontSize="10" fontWeight="700" letterSpacing="1">RAFFINERING</text>
          <text x="560" y="140" fill="#7C3AED" fontSize="20" fontWeight="700">60-70%</text>
          <text x="650" y="140" fill="#5B21B6" fontSize="11" opacity="0.6">i Kina</text>
        </g>

        <text x="400" y="50" textAnchor="middle" fill="#FCD34D" fontSize="14" fontWeight="700" letterSpacing="3">
          GLOBALT MARKED
        </text>
        <text x="400" y="460" textAnchor="middle" fill="#fff" fontSize="36" fontWeight="700" letterSpacing="-1">
          Litium-økonomien
        </text>
      </svg>
    </div>
  );
}

/* ============================================================
   KALKULATOR: Tall som teller opp + søyler
   ============================================================ */
function KalkulatorAnim({ className }: { className: string }) {
  return (
    <div className={`lit-anim lit-anim-kalk ${className}`}>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="lit-anim-svg">
        <defs>
          <linearGradient id="bgGradKalk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill="url(#bgGradKalk)" />

        {/* Bars */}
        {[
          { x: 80, h: 200, color: "#7C3AED", delay: 0 },
          { x: 150, h: 280, color: "#A78BFA", delay: 0.2 },
          { x: 220, h: 160, color: "#7C3AED", delay: 0.4 },
          { x: 290, h: 240, color: "#F59E0B", delay: 0.6 },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={350 - b.h}
            width="50"
            height={b.h}
            rx="4"
            fill={b.color}
            className={`lit-kalk-bar lit-kalk-bar-${i}`}
          />
        ))}

        <line x1="60" y1="350" x2="350" y2="350" stroke="#A78BFA" strokeWidth="2" />

        <text x="200" y="55" textAnchor="middle" fill="#FCD34D" fontSize="13" fontWeight="700" letterSpacing="3">
          VERKTØY
        </text>
        <text x="200" y="450" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="700">Kalkulator</text>
      </svg>
    </div>
  );
}
