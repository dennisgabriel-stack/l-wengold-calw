"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { MagneticLink } from "@/components/button";
import { LogoMark } from "@/components/logo";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-5 sm:px-8 pt-24"
    >
      {/* Warm gradient backdrop */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)]" />
        {/* Radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,165,89,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(47,74,53,0.08),transparent_60%)]" />

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
          { x: "22%", y: "72%", s: 10, d: 2 },
          { x: "88%", y: "68%", s: 7, d: 1.5 },
          { x: "52%", y: "14%", s: 5, d: 0.7 },
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

      {/* Huge faint ornament */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-48 top-20 opacity-[0.1] -z-5 pointer-events-none"
        aria-hidden
      >
        <LogoMark className="!h-[620px] !w-auto" />
      </motion.div>

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--gold-600)]"
          >
            <span className="h-px w-10 bg-[var(--gold-500)]" />
            Seit Jahren Ihr Partner in Calw
          </motion.p>

          <h1 className="mt-7 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-[var(--espresso-900)]">
            {"Löwengold".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.3 + i * 0.05,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="italic font-normal text-gold-shimmer"
            >
              Calw
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="mt-8 text-lg md:text-2xl max-w-2xl text-[var(--espresso-700)]/90 leading-relaxed font-light"
          >
            Ihr Experte für den Ankauf von{" "}
            <em className="italic text-[var(--gold-600)] not-italic font-medium">
              Gold, Schmuck
            </em>{" "}
            und{" "}
            <em className="italic text-[var(--gold-600)] not-italic font-medium">
              Antiquitäten
            </em>{" "}
            — mitten im Schwarzwald.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticLink href="/leistungen" withArrow>
              Jetzt entdecken
            </MagneticLink>
            <MagneticLink href="/aktionstage" variant="ghost" withArrow>
              Aktionstage
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-16 flex items-center gap-8 flex-wrap"
          >
            {[
              { label: "Gold · Silber · Platin · Palladium" },
              { label: "Kostenlose Schätzung" },
              { label: "Sofortige Barauszahlung" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 text-sm text-[var(--espresso-700)]/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-500)]" />
                {t.label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Golden orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-[var(--gold-400)]/60"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-14 rounded-full border border-dashed border-[var(--gold-400)]/30"
            />
            <div className="relative h-[260px] w-[260px] md:h-[340px] md:w-[340px] rounded-full bg-[radial-gradient(circle,var(--cream-50),var(--cream-200)_80%)] shadow-[var(--shadow-gold)] flex items-center justify-center p-8 border border-[var(--gold-400)]/40">
              <LogoMark className="!h-auto !w-[85%]" priority />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--espresso-700)]/60 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]"
      >
        Scrollen
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
}
