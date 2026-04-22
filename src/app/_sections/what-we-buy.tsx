"use client";

import { motion } from "framer-motion";
import { MagneticLink } from "@/components/button";
import { SmartImage } from "@/components/smart-image";
import { editorial } from "@/lib/images";

type Category = {
  n: string;
  title: string;
  lead: string;
  image: { src: string; alt: string };
  accent: string;
};

const cats: Category[] = [
  {
    n: "01",
    title: "Gold & Edelmetalle",
    lead: "333er – 999er Feingold, Platin, Palladium, Barren & Münzen, Bruchgold, Zahngold.",
    image: editorial.gold,
    accent: "from-[rgba(212,177,119,0.22)] to-transparent",
  },
  {
    n: "02",
    title: "Schmuck",
    lead: "Goldringe, Trauringe, Ketten, Panzerketten, Anhänger, Broschen, Manschettenknöpfe.",
    image: editorial.jewelry,
    accent: "from-[rgba(192,136,104,0.22)] to-transparent",
  },
  {
    n: "03",
    title: "Antiquitäten",
    lead: "Ölgemälde, Teppiche, Zinn, Taschenuhren, Schreib- & Nähmaschinen, Briefmarken.",
    image: editorial.watch,
    accent: "from-[rgba(37,52,40,0.22)] to-transparent",
  },
  {
    n: "04",
    title: "Edelsteine",
    lead: "Diamant, Brilliant, Opal, Aquamarin, Granat, Rubin, Saphir, Smaragd.",
    image: editorial.diamond,
    accent: "from-[rgba(91,26,34,0.22)] to-transparent",
  },
];

export function WhatWeBuy() {
  return (
    <section className="relative py-28 md:py-36 px-5 sm:px-8 bg-luxe-cream overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.35em] text-[var(--gold-600)]"
          >
            ✦ Was wir ankaufen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-[var(--espresso-900)]"
          >
            Edelmetalle, Edelsteine,
            <br />
            <em className="italic text-gold-shimmer">Antiquitäten</em> u.v.m.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-[var(--espresso-700)]/85 leading-relaxed"
          >
            Gold, Silber, Platin, Palladium – in allen Feingehalten. Edelsteine,
            Münzen, Tafelsilber, Antiquitäten und komplette Erbschaften bewerten
            wir fair und transparent.
          </motion.p>
        </div>

        {/* 4 categories in a balanced 2×2 grid on desktop */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
          {cats.map((c, i) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative group overflow-hidden rounded-[28px] bg-[var(--ink-900)] text-[var(--cream-100)] aspect-[5/4]"
            >
              <div className="absolute inset-0">
                <SmartImage
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                {/* Rich tonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)] via-[rgba(13,9,5,0.35)] to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${c.accent}`} />
                {/* Gold border ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold-400)]/20 rounded-[28px]" />
              </div>

              {/* Copy overlay */}
              <div className="absolute inset-0 p-6 md:p-9 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm tracking-[0.3em] text-[var(--gold-400)]">
                    {c.n}
                  </span>
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                    className="h-9 w-9 rounded-full border border-[var(--gold-400)]/40 flex items-center justify-center text-[var(--gold-400)] text-lg font-light group-hover:bg-[var(--gold-400)]/15 group-hover:rotate-45 transition-all"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </div>

                <div className="max-w-md">
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white drop-shadow-md">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-[15px] text-[var(--cream-200)]/85 leading-relaxed">
                    {c.lead}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <MagneticLink href="/leistungen" variant="outline" withArrow>
            Vollständigen Katalog ansehen
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
