"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { MagneticLink } from "@/components/button";
import { LogoMark } from "@/components/logo";

const heroStats = [
  { n: "25+", label: "Jahre Erfahrung" },
  { n: "9", label: "Feingehalte Gold" },
  { n: "100%", label: "Transparent & fair" },
  { n: "16", label: "Münzsorten im Ankauf" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col overflow-hidden px-5 sm:px-8 pt-28 pb-40 md:pb-32"
    >
      {/* Warm gradient backdrop with richer luxury tones */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)]" />
        {/* Central gold spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,177,119,0.32),transparent_55%)]" />
        {/* Rose accent bottom-right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_85%,rgba(192,136,104,0.15),transparent_55%)]" />
        {/* Deep corner tint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,rgba(37,52,40,0.10),transparent_50%)]" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(26,18,11,0.18))]" />

        {/* Pine tree silhouettes — hidden on mobile where they crowd the content */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.07] hidden md:block"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden
        >
          {Array.from({ length: 18 }).map((_, i) => {
            const x = (i / 17) * 1200;
            const h = 80 + ((i * 37) % 100);
            return (
              <g key={i} transform={`translate(${x} ${220 - h}) scale(1 ${h / 120})`}>
                <path
                  d="M0 120 L-18 80 L-7 80 L-22 45 L-9 45 L-25 8 L0 -12 L25 8 L9 45 L22 45 L7 80 L18 80 Z"
                  fill="var(--espresso-900)"
                />
              </g>
            );
          })}
        </svg>

        {/* Mountain range — hidden on mobile for clarity */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.05] hidden md:block"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 300 L0 180 L150 90 L300 160 L450 60 L600 140 L750 70 L900 150 L1050 80 L1200 170 L1200 300 Z"
            fill="var(--espresso-900)"
          />
        </svg>
      </motion.div>

      {/* Drifting sparkles */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        {[
          { x: "12%", y: "22%", s: 8, d: 0 },
          { x: "82%", y: "18%", s: 6, d: 1 },
          { x: "18%", y: "72%", s: 10, d: 2 },
          { x: "88%", y: "68%", s: 7, d: 1.5 },
          { x: "52%", y: "8%", s: 5, d: 0.7 },
          { x: "70%", y: "85%", s: 7, d: 2.3 },
        ].map((s, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1, 0.5], scale: [0, 1, 0.85, 1, 0.8] }}
            transition={{
              duration: 4.5,
              delay: s.d,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute block"
            style={{ left: s.x, top: s.y, width: s.s, height: s.s }}
          >
            <svg viewBox="0 0 20 20" className="w-full h-full text-[var(--gold-400)]">
              <path
                d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
                fill="currentColor"
              />
            </svg>
          </motion.span>
        ))}
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 mx-auto max-w-5xl w-full flex flex-col items-center text-center flex-1 justify-center"
      >
        {/* Logo — first, centered, large */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-10 md:mb-14"
        >
          <LogoMark
            priority
            className="!h-72 md:!h-[26rem] lg:!h-[32rem] !w-auto drop-shadow-[0_20px_55px_rgba(184,137,74,0.3)]"
          />
        </motion.div>

        {/* Stats — minimal numeric row directly below the logo */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
          }}
          className="mb-12 md:mb-14 w-full max-w-3xl grid grid-cols-4 gap-0 divide-x divide-[var(--gold-400)]/25"
        >
          {heroStats.map((s) => (
            <motion.li
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className="flex flex-col items-center gap-1 px-2 sm:px-4"
            >
              <span className="font-display text-3xl sm:text-4xl md:text-5xl leading-none text-gold-rich">
                {s.n}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.22em] text-[var(--espresso-700)]/75 text-center leading-tight">
                {s.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.95] tracking-tight text-[var(--espresso-900)]">
          {"Löwen".split("").map((c, i) => (
            <motion.span
              key={`a${i}`}
              initial={{ opacity: 0, y: 60, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 0.5 + i * 0.05,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
          {"gold".split("").map((c, i) => (
            <motion.span
              key={`b${i}`}
              initial={{ opacity: 0, y: 60, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 0.5 + (i + 5) * 0.05,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="inline-block italic font-normal text-gold-shimmer"
            >
              {c}
            </motion.span>
          ))}
        </h1>

        {/* Eyebrow — now BELOW the headline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-8 flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--gold-600)]"
        >
          <span className="h-px w-10 bg-[var(--gold-500)]" />
          Seit Jahren Ihr Partner in Calw
          <span className="h-px w-10 bg-[var(--gold-500)]" />
        </motion.p>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9 }}
          className="mt-8 text-lg md:text-2xl max-w-3xl text-[var(--espresso-700)]/90 leading-relaxed font-light"
        >
          Ihr Experte für den Ankauf von{" "}
          <em className="not-italic text-[var(--gold-600)] font-medium">Gold, Schmuck</em>{" "}
          und{" "}
          <em className="not-italic text-[var(--gold-600)] font-medium">Antiquitäten</em>{" "}
          — mitten im Schwarzwald.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticLink href="/leistungen" withArrow>
            Jetzt entdecken
          </MagneticLink>
          <MagneticLink href="/aktionstage" variant="ghost" withArrow>
            Aktionstage
          </MagneticLink>
        </motion.div>

      </motion.div>

      {/* Scroll hint — now in the natural flow at the bottom of the hero */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mt-12 md:mt-16 mx-auto flex flex-col items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.35em] text-[var(--espresso-700)]/55"
        aria-hidden
      >
        <span>Scrollen</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--gold-400)]/35 text-[var(--gold-600)]"
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
