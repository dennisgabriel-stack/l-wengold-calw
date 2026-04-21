"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, ChevronDown, Coins, Gem, HandshakeIcon } from "lucide-react";
import { MagneticLink } from "@/components/button";
import { LogoMark } from "@/components/logo";

const heroIcons = [
  { Icon: Award, label: "25+ Jahre" },
  { Icon: Gem, label: "Edelmetalle" },
  { Icon: Coins, label: "16 Münzen" },
  { Icon: HandshakeIcon, label: "Sofort bar" },
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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-5 sm:px-8 pt-24 pb-20"
    >
      {/* Warm gradient backdrop */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,165,89,0.22),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_90%,rgba(47,74,53,0.08),transparent_60%)]" />

        {/* Pine tree silhouettes (bottom) - evoke Schwarzwald */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.09]"
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

        {/* Mountain range */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.05]"
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
        className="relative z-10 mx-auto max-w-5xl w-full flex flex-col items-center text-center"
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
            className="!h-64 md:!h-[22rem] lg:!h-[28rem] !w-auto drop-shadow-[0_15px_50px_rgba(184,137,74,0.3)]"
          />
        </motion.div>

        {/* 4 animated icon chips between logo and headline */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
          className="mb-10 md:mb-12 flex items-center justify-center gap-2 md:gap-3 w-full max-w-md md:max-w-none mx-auto"
        >
          {heroIcons.map(({ Icon, label }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.9 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="group relative flex items-center gap-1.5 md:gap-2.5 px-2.5 md:px-5 py-2 md:py-2.5 rounded-full bg-[var(--cream-50)]/85 backdrop-blur border border-[var(--gold-400)]/40 shadow-[0_6px_20px_-10px_rgba(184,137,74,0.35)] shrink-0"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="inline-flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-[var(--gold-400)]/15 text-[var(--gold-600)] group-hover:bg-[var(--gold-400)]/25 transition-colors shrink-0"
              >
                <Icon size={12} className="md:hidden" />
                <Icon size={15} className="hidden md:block" />
              </motion.span>
              <span className="text-[9px] md:text-[13px] uppercase tracking-[0.12em] md:tracking-[0.2em] text-[var(--espresso-800)] whitespace-nowrap">
                {label}
              </span>
              <span className="absolute inset-0 rounded-full ring-0 ring-[var(--gold-400)]/0 group-hover:ring-2 group-hover:ring-[var(--gold-400)]/40 transition-all pointer-events-none" />
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

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--espresso-700)]/60 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]"
      >
        Scrollen
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
}
