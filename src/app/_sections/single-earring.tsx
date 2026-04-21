"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticLink } from "@/components/button";
import { SmartImage } from "@/components/smart-image";
import { earring } from "@/lib/images";

/**
 * "Sie haben einen einzelnen Ohrring?" – a touching little CTA
 * that invites anyone with a sole unmatched piece to come in. Has
 * a magic-shimmer backdrop with floating sparkles.
 */
export function SingleEarringSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 px-5 sm:px-8 overflow-hidden"
    >
      {/* Shimmering backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--cream-100)] via-[var(--cream-50)] to-[var(--cream-200)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(212,165,89,0.35),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_80%,rgba(184,137,74,0.2),transparent_50%)]" />

      {/* Animated sparkle curtain */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => {
          const left = (i * 53) % 100;
          const top = (i * 37) % 100;
          const size = 4 + ((i * 7) % 10);
          const delay = (i % 7) * 0.35;
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.4, 1, 0],
                scale: [0, 1, 0.8, 1.1, 0.6],
              }}
              transition={{
                duration: 5.5,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
              }}
            >
              <svg viewBox="0 0 20 20" className="w-full h-full text-[var(--gold-500)]">
                <path
                  d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
                  fill="currentColor"
                />
              </svg>
            </motion.span>
          );
        })}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl grid gap-14 lg:grid-cols-12 items-center"
      >
        <div className="lg:col-span-5 flex justify-center">
          <SingleEarringArt />
        </div>

        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.3em] text-[var(--gold-600)]"
          >
            ✦ Einzelstücke willkommen
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-[var(--espresso-900)]"
          >
            Sie haben einen einzelnen{" "}
            <em className="italic text-gold-shimmer">Ohrring?</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-display text-2xl md:text-3xl leading-snug text-[var(--gold-600)]"
          >
            Besuchen Sie uns an den Aktionstagen – Bargeld sofort.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg text-[var(--espresso-700)]/90 leading-relaxed max-w-2xl"
          >
            Tauchen Sie ein in die Welt von Löwengold Calw und entdecken Sie
            exklusive Schmuckstücke und Antiquitäten. Unser Team steht Ihnen mit
            Fachkenntnis und Leidenschaft zur Seite. Erfahren Sie mehr über
            unsere Dienstleistungen und vereinbaren Sie noch heute einen
            Beratungstermin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticLink href="/kontakt" withArrow>
              Jetzt Termin vereinbaren
            </MagneticLink>
            <MagneticLink href="/aktionstage" variant="outline" withArrow>
              Aktionstage ansehen
            </MagneticLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function SingleEarringArt() {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-8 rounded-full border border-dashed border-[var(--gold-500)]/40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-20 rounded-full border border-dashed border-[var(--gold-400)]/30"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative h-[320px] w-[260px] md:h-[420px] md:w-[340px] rounded-[180px] overflow-hidden shadow-[0_40px_60px_-20px_rgba(42,28,16,0.4)]"
      >
        <SmartImage
          src={earring.src}
          alt={earring.alt}
          fill
          sizes="(max-width: 768px) 260px, 340px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold-600)]/15 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}
