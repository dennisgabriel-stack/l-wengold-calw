"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Tile = {
  title: string;
  sub: string;
  art: React.ReactNode;
  colspan?: string;
  rowspan?: string;
  bg?: string;
};

export function ParallaxTiles() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const tiles: (Tile & { y: typeof y1 })[] = [
    {
      title: "Feingold 999.9",
      sub: "Barren & Münzen",
      art: <BarArt tone="gold" />,
      colspan: "md:col-span-4",
      bg: "bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)]",
      y: y1,
    },
    {
      title: "Schmuck",
      sub: "Ringe · Ketten · Broschen",
      art: <RingArt />,
      colspan: "md:col-span-4",
      bg: "bg-[var(--cream-100)]",
      y: y2,
    },
    {
      title: "Silber",
      sub: "Besteck · Tafelsilber",
      art: <BarArt tone="silver" />,
      colspan: "md:col-span-4",
      bg: "bg-gradient-to-br from-slate-300 to-slate-500",
      y: y3,
    },
    {
      title: "Antiquitäten",
      sub: "Gemälde · Teppiche · Zinn",
      art: <AntiqueArt />,
      colspan: "md:col-span-6",
      bg: "bg-[var(--walnut-800)]",
      y: y4,
    },
    {
      title: "Edelsteine",
      sub: "Diamant · Rubin · Saphir",
      art: <GemArt />,
      colspan: "md:col-span-6",
      bg: "bg-[var(--forest-700)]",
      y: y2,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-5 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-5 md:gap-6">
          {tiles.map((t, i) => (
            <motion.article
              key={t.title}
              style={{ y: t.y }}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className={`relative overflow-hidden rounded-3xl p-8 aspect-[5/4] ${t.colspan} ${t.bg}`}
            >
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.25em] text-white/75">
                  {t.sub}
                </p>
                <h3 className="mt-2 font-display text-3xl md:text-5xl text-white">
                  {t.title}
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-95">
                {t.art}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BarArt({ tone }: { tone: "gold" | "silver" }) {
  const c1 = tone === "gold" ? "var(--gold-200)" : "#f6f6f6";
  const c2 = tone === "gold" ? "var(--gold-600)" : "#8c8c8c";
  const stroke = tone === "gold" ? "var(--gold-700)" : "#3a3a3a";
  return (
    <svg viewBox="0 0 300 300" className="w-[70%] h-[70%]">
      <defs>
        <linearGradient id={`bar-${tone}`} x1="0" x2="1">
          <stop offset="0%" stopColor={c2} />
          <stop offset="50%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <g transform="translate(40 100) rotate(-8)">
        <rect width="220" height="80" rx="6" fill={`url(#bar-${tone})`} stroke={stroke} />
        <text
          x="110"
          y="42"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          letterSpacing="3"
          fill="var(--espresso-900)"
        >
          {tone === "gold" ? "FEINGOLD 999.9" : "FEINSILBER 999"}
        </text>
        <text x="110" y="58" textAnchor="middle" fontSize="9" fill="#1a1a1a" opacity="0.8">
          500 g · Löwengold
        </text>
      </g>
    </svg>
  );
}

function RingArt() {
  return (
    <svg viewBox="0 0 300 300" className="w-[75%] h-[75%]">
      <defs>
        <linearGradient id="ring" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--gold-600)" />
          <stop offset="50%" stopColor="var(--gold-200)" />
          <stop offset="100%" stopColor="var(--gold-600)" />
        </linearGradient>
      </defs>
      <g transform="translate(150 150)">
        <ellipse cx="-30" cy="20" rx="70" ry="20" fill="none" stroke="url(#ring)" strokeWidth="12" />
        <ellipse cx="30" cy="-5" rx="60" ry="16" fill="none" stroke="url(#ring)" strokeWidth="10" />
        <circle cx="20" cy="-28" r="9" fill="var(--gold-200)" stroke="var(--gold-700)" />
      </g>
    </svg>
  );
}

function AntiqueArt() {
  return (
    <svg viewBox="0 0 300 300" className="w-[75%] h-[75%]">
      <g transform="translate(60 60)" fill="none" stroke="var(--cream-100)" strokeWidth="2" opacity="0.9">
        {/* Frame */}
        <rect x="0" y="0" width="180" height="180" rx="4" />
        <rect x="15" y="15" width="150" height="150" />
        {/* Landscape inside */}
        <path d="M20 130 L60 85 L95 115 L135 70 L165 120 L165 160 L20 160 Z" fill="var(--cream-100)" opacity="0.2" />
        <circle cx="135" cy="55" r="10" fill="var(--gold-400)" opacity="0.8" />
      </g>
    </svg>
  );
}

function GemArt() {
  return (
    <svg viewBox="0 0 300 300" className="w-[65%] h-[65%]">
      <defs>
        <linearGradient id="gem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe8a3" />
          <stop offset="60%" stopColor="var(--gold-400)" />
          <stop offset="100%" stopColor="#5e3f12" />
        </linearGradient>
      </defs>
      <g transform="translate(150 150)">
        <path
          d="M0 -80 L70 -30 L60 30 L30 80 L-30 80 L-60 30 L-70 -30 Z"
          fill="url(#gem)"
          stroke="var(--gold-200)"
          strokeWidth="1.5"
        />
        <path
          d="M0 -80 L0 80 M-70 -30 L70 -30 M-60 30 L60 30 M-30 80 L0 -80 L30 80"
          stroke="var(--cream-100)"
          strokeWidth="0.8"
          opacity="0.5"
          fill="none"
        />
      </g>
    </svg>
  );
}
