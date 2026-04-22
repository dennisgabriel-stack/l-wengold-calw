"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { MagneticLink } from "@/components/button";
import { LionIcon } from "@/components/lion-icon";
import { SmartImage } from "@/components/smart-image";
import { aktionstageBanner } from "@/lib/images";

/**
 * Update this to the next real Aktionstag. Same source of truth as the
 * full dates page, but we only need the first one here.
 */
const NEXT_EVENT = {
  start: "2026-05-15",
  month: "Mai",
  day: "15 – 17",
  label: "Frühjahrs-Aktionstage",
};

function daysUntil(iso: string) {
  const target = new Date(iso + "T10:00:00");
  const now = new Date();
  const ms = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function AktionstageCTA() {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    setCountdown(daysUntil(NEXT_EVENT.start));
    const id = window.setInterval(
      () => setCountdown(daysUntil(NEXT_EVENT.start)),
      60_000
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative py-32 md:py-40 px-5 sm:px-8 overflow-hidden isolate">
      {/* Full-bleed photo + deep overlays */}
      <SmartImage
        src={aktionstageBanner.src}
        alt={aktionstageBanner.alt}
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]/88" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,177,119,0.3),transparent_65%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_90%,rgba(192,136,104,0.22),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_10%,rgba(37,52,40,0.22),transparent_55%)]" />

      {/* Drifting sparkles */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        {[
          { l: "8%", t: "22%", s: 8, d: 0 },
          { l: "88%", t: "28%", s: 6, d: 1.4 },
          { l: "16%", t: "78%", s: 10, d: 0.6 },
          { l: "82%", t: "72%", s: 7, d: 1.8 },
          { l: "50%", t: "14%", s: 6, d: 1 },
        ].map((p, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: [0, 1, 0.4, 1, 0.4],
              scale: [0, 1, 0.85, 1.1, 0.9],
              y: [0, -8, 0, -10, 0],
            }}
            transition={{
              duration: 5,
              delay: p.d,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
          >
            <svg
              viewBox="0 0 20 20"
              className="w-full h-full text-[var(--gold-400)]"
            >
              <path
                d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
                fill="currentColor"
              />
            </svg>
          </motion.span>
        ))}
      </div>

      {/* Smooth fades into the cream page above/below */}
      <div className="panel-fade-top" aria-hidden />
      <div className="panel-fade-bottom" aria-hidden />

      {/* Decorative gold frame with ornate corners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative mx-auto max-w-3xl"
      >
        <div className="relative p-8 md:p-14 rounded-[32px] border border-[var(--gold-400)]/35 bg-[rgba(13,9,5,0.25)] backdrop-blur-sm text-center text-[var(--cream-100)]">
          {/* Ornate corners */}
          {(
            [
              "top-0 left-0",
              "top-0 right-0 rotate-90",
              "bottom-0 right-0 rotate-180",
              "bottom-0 left-0 -rotate-90",
            ] as const
          ).map((pos, i) => (
            <span
              key={i}
              aria-hidden
              className={`absolute ${pos} w-6 h-6 pointer-events-none`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-[var(--gold-400)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M2 2 L12 2 M2 2 L2 12" />
                <circle cx="2" cy="2" r="2" fill="currentColor" stroke="none" />
              </svg>
            </span>
          ))}

          {/* Animated gold lion medallion */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <motion.span
              animate={{ y: [0, -4, 0], rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold-300)]/30 via-[var(--gold-400)]/40 to-[var(--gold-700)]/25 border border-[var(--gold-400)]/55 shadow-[0_15px_30px_-10px_rgba(184,137,74,0.6)]"
            >
              <LionIcon className="h-10 w-auto brightness-0 invert opacity-95" />
              <motion.span
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[var(--gold-200)]"
              />
            </motion.span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.4em] text-[var(--gold-400)]"
          >
            ✦ Aktionstage
          </motion.p>

          {/* Gold ornamental rule */}
          <div className="mt-5 mb-7 flex items-center gap-3 justify-center">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold-400)]" />
            <span
              aria-hidden
              className="h-1.5 w-1.5 rotate-45 bg-[var(--gold-400)]"
            />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold-400)]" />
          </div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02]"
          >
            Unsere nächsten{" "}
            <span className="text-gold-shimmer italic">Aktionstage</span>
          </motion.h2>

          {/* Live countdown pill */}
          {countdown !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full pl-2 pr-5 py-2 bg-[rgba(13,9,5,0.7)] backdrop-blur border border-[var(--gold-400)]/40"
            >
              <span className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-[var(--gold-500)] text-[var(--espresso-900)] text-[11px] uppercase tracking-[0.2em] font-medium">
                <CalendarDays size={12} strokeWidth={2.2} />
                {NEXT_EVENT.day} {NEXT_EVENT.month}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-[var(--gold-300)] tracking-wide">
                <Clock size={13} strokeWidth={2} />
                {countdown === 0 ? "Heute geöffnet" : `Noch ${countdown} Tage`}
              </span>
            </motion.div>
          )}

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-7 text-base md:text-lg text-[var(--cream-200)]/90 max-w-xl mx-auto leading-relaxed"
          >
            An unseren Aktionstagen öffnen wir für Sie das Tor zu unserer
            Bewertungsstube. Wir schätzen Ihren Schmuck kostenlos, analysieren
            Feingehalte und zahlen sofort in bar aus.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <MagneticLink
              href="/aktionstage"
              className="!bg-[var(--gold-500)] !text-[var(--espresso-900)] hover:!bg-[var(--gold-400)] !border-[var(--gold-500)] shadow-[0_20px_45px_-10px_rgba(184,137,74,0.6)]"
              withArrow
            >
              Alle Termine ansehen
            </MagneticLink>
            <MagneticLink
              href="/kontakt"
              variant="outline"
              className="!border-[var(--gold-400)] !text-[var(--gold-400)] hover:!bg-[var(--gold-400)]/10"
              withArrow
            >
              Termin anfragen
            </MagneticLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
