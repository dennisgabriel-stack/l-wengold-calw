"use client";

import { motion } from "framer-motion";
import { Ornament } from "./ornaments";
import { LogoMark } from "./logo";

export function PageHeader({
  eyebrow,
  title,
  lead,
  showLogo = true,
  padTop = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  showLogo?: boolean;
  padTop?: boolean;
}) {
  return (
    <section
      className={`relative ${
        padTop ? "pt-32 md:pt-40" : "pt-12 md:pt-16"
      } pb-24 md:pb-28 px-5 sm:px-8 overflow-hidden`}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--cream-100)] via-[var(--cream-50)] to-[var(--cream-50)]" />

      {/* Breathing primary gold radial */}
      <motion.div
        animate={{
          opacity: [0.75, 1, 0.85],
          scale: [0.98, 1.04, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_10%,rgba(212,177,119,0.28),transparent_60%)]"
      />
      {/* Secondary rose radial drifting in from the opposite corner */}
      <motion.div
        animate={{
          opacity: [0.35, 0.65, 0.4],
          scale: [1.05, 0.97, 1.02],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_90%,rgba(192,136,104,0.2),transparent_55%)]"
      />

      {/* Drifting gold sparkles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[
          { l: "12%", t: "22%", s: 7, d: 0 },
          { l: "84%", t: "18%", s: 9, d: 1.1 },
          { l: "22%", t: "72%", s: 6, d: 2.2 },
          { l: "78%", t: "66%", s: 8, d: 0.8 },
          { l: "55%", t: "88%", s: 6, d: 1.6 },
        ].map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0.3, 0.9, 0.3],
              scale: [0, 1, 0.85, 1.1, 0.85],
              y: [0, -8, 0, -12, 0],
            }}
            transition={{
              duration: 7,
              delay: p.d,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
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

      <div className="mx-auto max-w-5xl text-center relative">
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <LogoMark
                priority
                className="!h-72 md:!h-[22rem] lg:!h-[26rem] !w-auto drop-shadow-[0_20px_55px_rgba(184,137,74,0.35)]"
              />
            </motion.div>
          </motion.div>
        )}

        <Ornament className="mx-auto w-32 mb-10 opacity-60" />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--gold-600)] mb-6"
        >
          ✦ {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-[var(--espresso-900)]"
        >
          {title}
        </motion.h1>

        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-[var(--espresso-700)]/90 leading-relaxed max-w-3xl mx-auto"
          >
            {lead}
          </motion.p>
        )}

        <div className="gold-divider w-40 mx-auto mt-14" />
      </div>
    </section>
  );
}
