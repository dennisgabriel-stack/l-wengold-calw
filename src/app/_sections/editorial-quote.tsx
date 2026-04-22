"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SmartImage } from "@/components/smart-image";
import { LionIcon } from "@/components/lion-icon";
import { editorial } from "@/lib/images";

/**
 * Editorial half-photo / half-quote layout. Dark panel with a
 * cinematic image on the left and a large serif pull-quote on the
 * right. Parallaxes subtly on scroll.
 */
export function EditorialQuote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink text-[var(--cream-100)]"
    >
      <div className="panel-fade-top" aria-hidden />
      <div className="panel-fade-bottom" aria-hidden />
      <div className="relative mx-auto grid lg:grid-cols-12 min-h-[520px]">
        {/* Photo */}
        <motion.div
          style={{ scale }}
          className="lg:col-span-7 relative h-[280px] sm:h-[420px] lg:h-auto"
        >
          <SmartImage
            src={editorial.watch.src}
            alt={editorial.watch.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          {/* Desktop: photo fades to ink on the right so the quote panel is fully dark */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(13,9,5,0.15)] to-[var(--ink-900)]" />
          {/* Mobile: strong bottom scrim so the text below sits on near-solid ink */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[rgba(13,9,5,0.15)] via-[rgba(13,9,5,0.55)] to-[var(--ink-900)]" />
        </motion.div>

        {/* Quote */}
        <motion.div
          style={{ y }}
          className="lg:col-span-5 relative flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-24 bg-[var(--ink-900)] lg:bg-transparent"
        >
          {/* Mobile-only soft radial so the copy has an even richer backdrop */}
          <div className="lg:hidden absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_30%,rgba(212,177,119,0.1),transparent_60%)] pointer-events-none" />

          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.35em] text-[var(--gold-400)]"
            >
              ✦ Unsere Haltung
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mt-6 font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-[var(--cream-50)]"
            >
              <span className="text-gold-shimmer italic mr-1">
                Jedes Erbstück
              </span>{" "}
              erzählt eine Geschichte &ndash; wir hören&nbsp;zu.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-6 text-base md:text-lg text-[var(--cream-100)]/95 leading-relaxed max-w-lg"
            >
              Entscheidend ist nicht das Aussehen &ndash; sondern
              Edelmetall-Gehalt und Gewicht. Oft lohnt sich der Verkauf mehr,
              als viele denken. Vertrauen Sie auf unser Fachwissen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[var(--gold-400)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)]/85">
                Löwengold Calw &middot; Gold &amp; Silberankauf
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
