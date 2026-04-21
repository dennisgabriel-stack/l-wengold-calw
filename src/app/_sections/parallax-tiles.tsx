"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SmartImage } from "@/components/smart-image";
import { tiles } from "@/lib/images";

type Tile = {
  title: string;
  sub: string;
  image: { src: string; alt: string };
  colspan?: string;
  /** Gradient-only fallback if remote image fails */
  fallbackBg: string;
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

  const items: (Tile & { y: typeof y1 })[] = [
    {
      title: "Feingold 999.9",
      sub: "Barren & Münzen",
      image: tiles.goldBars,
      colspan: "md:col-span-4",
      fallbackBg: "bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)]",
      y: y1,
    },
    {
      title: "Schmuck",
      sub: "Ringe · Ketten · Broschen",
      image: tiles.jewelry,
      colspan: "md:col-span-4",
      fallbackBg: "bg-gradient-to-br from-[var(--gold-500)] to-[var(--walnut-800)]",
      y: y2,
    },
    {
      title: "Silber",
      sub: "Besteck · Tafelsilber",
      image: tiles.silver,
      colspan: "md:col-span-4",
      fallbackBg: "bg-gradient-to-br from-slate-300 to-slate-500",
      y: y3,
    },
    {
      title: "Antiquitäten",
      sub: "Gemälde · Teppiche · Zinn",
      image: tiles.antiques,
      colspan: "md:col-span-6",
      fallbackBg: "bg-[var(--walnut-800)]",
      y: y4,
    },
    {
      title: "Edelsteine",
      sub: "Diamant · Rubin · Saphir",
      image: tiles.gems,
      colspan: "md:col-span-6",
      fallbackBg: "bg-[var(--forest-700)]",
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
          {items.map((t) => (
            <motion.article
              key={t.title}
              style={{ y: t.y }}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className={`relative overflow-hidden rounded-3xl aspect-[5/4] ${t.colspan} ${t.fallbackBg} group`}
            >
              <SmartImage
                src={t.image.src}
                alt={t.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              {/* Dark gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 pointer-events-none" />
              {/* Gold rim */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold-400)]/20 rounded-3xl pointer-events-none" />

              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-400)] drop-shadow">
                  {t.sub}
                </p>
                <h3 className="mt-2 font-display text-3xl md:text-5xl text-white drop-shadow-lg">
                  {t.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
