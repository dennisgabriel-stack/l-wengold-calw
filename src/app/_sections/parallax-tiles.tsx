"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SmartImage } from "@/components/smart-image";
import { tiles } from "@/lib/images";
import {
  GoldBarArt,
  JewelryArt,
  SilverArt,
  AntiqueArt,
  GemArt,
} from "./tile-art";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

type Tile = {
  title: string;
  sub: string;
  image: { src: string; alt: string };
  colspan?: string;
  bg: string;
  art: React.ReactNode;
};

export function ParallaxTiles() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const items: (Tile & { y: typeof y1 })[] = [
    {
      title: "Feingold 999.9",
      sub: "Barren & Münzen",
      image: tiles.goldBars,
      colspan: "md:col-span-4",
      bg: "bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-700)]",
      art: <GoldBarArt />,
      y: y1,
    },
    {
      title: "Schmuck",
      sub: "Ringe · Ketten · Broschen",
      image: tiles.jewelry,
      colspan: "md:col-span-4",
      bg: "bg-gradient-to-br from-[var(--walnut-800)] via-[var(--walnut-700)] to-[var(--espresso-900)]",
      art: <JewelryArt />,
      y: y2,
    },
    {
      title: "Silber",
      sub: "Besteck · Tafelsilber",
      image: tiles.silver,
      colspan: "md:col-span-4",
      bg: "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700",
      art: <SilverArt />,
      y: y3,
    },
    {
      title: "Antiquitäten",
      sub: "Taschenuhren · Gemälde · Zinn",
      image: tiles.antiques,
      colspan: "md:col-span-6",
      bg: "bg-gradient-to-br from-[var(--walnut-700)] to-[var(--espresso-900)]",
      art: <AntiqueArt />,
      y: y4,
    },
    {
      title: "Edelsteine",
      sub: "Diamant · Rubin · Saphir",
      image: tiles.gems,
      colspan: "md:col-span-6",
      bg: "bg-gradient-to-br from-[var(--forest-700)] via-[var(--forest-600)] to-[var(--espresso-900)]",
      art: <GemArt />,
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
          {items.map((t, idx) => (
            <motion.article
              key={t.title}
              style={isDesktop ? { y: t.y } : undefined}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className={`relative overflow-hidden rounded-[28px] aspect-[5/4] ${t.colspan} ${t.bg} group isolate`}
            >
              {/* Themed SVG artwork — always visible as a fallback */}
              <div className="absolute inset-0 opacity-90" aria-hidden>
                {t.art}
              </div>

              {/* Real photograph on top. Renders null on error, letting the SVG art show. */}
              <SmartImage
                src={t.image.src}
                alt={t.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />

              {/* Dark tonal gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
              {/* Subtle gold tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-400)]/0 to-[var(--gold-600)]/0 group-hover:from-[var(--gold-400)]/12 group-hover:to-transparent transition-all duration-700 pointer-events-none" />
              {/* Gold rim */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold-400)]/25 rounded-[28px] pointer-events-none" />

              {/* Corner meta */}
              <div className="absolute inset-x-0 top-0 p-6 md:p-8 flex items-start justify-between z-10">
                <span className="font-display text-sm tracking-[0.3em] text-[var(--gold-400)] drop-shadow">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold-400)]/40 text-[var(--gold-400)] text-lg font-light group-hover:bg-[var(--gold-400)]/15 group-hover:rotate-45 transition-all">
                  +
                </span>
              </div>

              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] drop-shadow">
                  {t.sub}
                </p>
                <h3 className="mt-2 font-display text-3xl md:text-5xl text-white drop-shadow-lg">
                  {t.title}
                </h3>
                <span className="mt-4 h-px w-10 bg-[var(--gold-400)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
