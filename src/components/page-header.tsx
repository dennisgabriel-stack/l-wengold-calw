"use client";

import { motion } from "framer-motion";
import { Ornament } from "./ornaments";
import { LogoMark } from "./logo";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-28 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--cream-100)] via-[var(--cream-50)] to-[var(--cream-50)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(212,165,89,0.22),transparent_60%)]" />

      <div className="mx-auto max-w-5xl text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex justify-center mb-6"
        >
          <LogoMark
            priority
            className="!h-36 md:!h-48 !w-auto drop-shadow-[0_10px_30px_rgba(184,137,74,0.25)]"
          />
        </motion.div>

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
