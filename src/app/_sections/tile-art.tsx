/**
 * Themed decorative SVG illustrations used as an always-visible
 * background behind each parallax tile. Real photographs render on
 * top; if a photo fails to load, the tile still feels intentional.
 */

export function GoldBarArt() {
  return (
    <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="ta-gold" x1="0" x2="1">
          <stop offset="0%" stopColor="#ae7f31" />
          <stop offset="50%" stopColor="#ffd786" />
          <stop offset="100%" stopColor="#ae7f31" />
        </linearGradient>
      </defs>
      <g transform="translate(60 100) rotate(-8)">
        <rect width="240" height="70" rx="6" fill="url(#ta-gold)" stroke="#7e5920" />
        <text x="120" y="38" textAnchor="middle" fontSize="14" fontWeight="800" letterSpacing="3" fill="#2b1c0f">FEINGOLD 999.9</text>
        <text x="120" y="54" textAnchor="middle" fontSize="9" fill="#3b2a19" opacity="0.8">500 g · Löwengold</text>
      </g>
      <g transform="translate(100 210) rotate(6)">
        <rect width="200" height="55" rx="5" fill="url(#ta-gold)" stroke="#7e5920" opacity="0.9" />
        <text x="100" y="33" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="2" fill="#2b1c0f">FEINGOLD 250 g</text>
      </g>
    </svg>
  );
}

export function JewelryArt() {
  return (
    <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="ta-ring" x1="0" x2="1">
          <stop offset="0%" stopColor="#a67c2e" />
          <stop offset="50%" stopColor="#ffe5a8" />
          <stop offset="100%" stopColor="#a67c2e" />
        </linearGradient>
      </defs>
      <g transform="translate(200 160)">
        <ellipse cx="-40" cy="25" rx="90" ry="25" fill="none" stroke="url(#ta-ring)" strokeWidth="14" />
        <ellipse cx="40" cy="-5" rx="75" ry="20" fill="none" stroke="url(#ta-ring)" strokeWidth="12" />
        <circle cx="22" cy="-36" r="12" fill="#ffe5a8" stroke="#7e5920" strokeWidth="1.5" />
        <circle cx="22" cy="-36" r="6" fill="#ffffff" opacity="0.7" />
      </g>
    </svg>
  );
}

export function SilverArt() {
  return (
    <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="ta-silver" x1="0" x2="1">
          <stop offset="0%" stopColor="#8a8a8a" />
          <stop offset="50%" stopColor="#f2f2f2" />
          <stop offset="100%" stopColor="#8a8a8a" />
        </linearGradient>
      </defs>
      {/* Spoon */}
      <g transform="translate(60 90) rotate(-18)" stroke="#5a5a5a" strokeWidth="1" fill="url(#ta-silver)">
        <ellipse cx="30" cy="30" rx="30" ry="22" />
        <rect x="55" y="25" width="160" height="10" rx="5" />
      </g>
      {/* Fork */}
      <g transform="translate(90 170) rotate(14)" stroke="#5a5a5a" strokeWidth="1" fill="url(#ta-silver)">
        <rect x="55" y="15" width="160" height="10" rx="5" />
        <path d="M5 0 L5 35 M15 0 L15 35 M25 0 L25 35 M35 0 L35 35" strokeWidth="4" stroke="url(#ta-silver)" />
        <rect x="0" y="0" width="40" height="38" />
      </g>
      <text x="200" y="280" textAnchor="middle" fontSize="10" letterSpacing="4" fill="#3b3b3b" opacity="0.7">FEINSILBER · 925</text>
    </svg>
  );
}

export function AntiqueArt() {
  return (
    <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="ta-pw" x1="0" x2="1">
          <stop offset="0%" stopColor="#a67c2e" />
          <stop offset="50%" stopColor="#ffd786" />
          <stop offset="100%" stopColor="#7e5920" />
        </linearGradient>
      </defs>
      <g transform="translate(200 160)">
        <circle cx="0" cy="0" r="90" fill="url(#ta-pw)" stroke="#5a3e18" strokeWidth="2" />
        <circle cx="0" cy="0" r="72" fill="#f7eed4" stroke="#a67c2e" strokeWidth="1.5" />
        {/* Clock hands */}
        <line x1="0" y1="0" x2="0" y2="-48" stroke="#2b1c0f" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="0" x2="38" y2="10" stroke="#2b1c0f" strokeWidth="2" strokeLinecap="round" />
        <circle cx="0" cy="0" r="4" fill="#2b1c0f" />
        {/* Hour marks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const x1 = Math.cos(a) * 64;
          const y1 = Math.sin(a) * 64;
          const x2 = Math.cos(a) * 58;
          const y2 = Math.sin(a) * 58;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5a3e18" strokeWidth="2" />;
        })}
        {/* Crown / ring */}
        <circle cx="0" cy="-92" r="10" fill="url(#ta-pw)" stroke="#5a3e18" />
        <circle cx="0" cy="-105" r="6" fill="none" stroke="#5a3e18" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function GemArt() {
  return (
    <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="ta-gem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#d4e7ff" />
          <stop offset="100%" stopColor="#7e9dbf" />
        </linearGradient>
      </defs>
      <g transform="translate(200 160)">
        <path d="M0 -90 L78 -30 L66 34 L36 96 L-36 96 L-66 34 L-78 -30 Z" fill="url(#ta-gem)" stroke="#b6d6ff" strokeWidth="1.5" />
        <path d="M0 -90 L0 96 M-78 -30 L78 -30 M-66 34 L66 34 M-36 96 L0 -90 L36 96" stroke="#ffffff" strokeWidth="1" opacity="0.7" fill="none" />
      </g>
    </svg>
  );
}
