"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

/**
 * Placeholder upcoming-dates grid.
 * The live site maintainer should update `dates` whenever new
 * Aktionstage are scheduled.
 */
const dates = [
  {
    month: "Mai",
    day: "15 – 17",
    year: "2026",
    weekday: "Fr – So",
    note: "Frühjahrs-Aktionstage",
  },
  {
    month: "Juli",
    day: "10 – 12",
    year: "2026",
    weekday: "Fr – So",
    note: "Sommer-Edition",
  },
  {
    month: "Oktober",
    day: "23 – 25",
    year: "2026",
    weekday: "Fr – So",
    note: "Herbst-Ankauf",
  },
  {
    month: "Dezember",
    day: "04 – 06",
    year: "2026",
    weekday: "Fr – So",
    note: "Vorweihnachts-Aktionstage",
  },
];

export function AktionstageCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {dates.map((d, i) => (
        <motion.article
          key={`${d.month}-${d.day}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
          whileHover={{ y: -6 }}
          className="relative p-7 rounded-3xl bg-[var(--cream-100)]/5 border border-[var(--cream-100)]/15 hover:border-[var(--gold-400)]/60 hover:bg-[var(--cream-100)]/10 transition-all overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--gold-400)]/10 blur-2xl" />
          <CalendarDays className="text-[var(--gold-400)]" size={20} />
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[var(--gold-400)]">
            {d.weekday}
          </p>
          <p className="mt-2 font-display text-6xl leading-none text-[var(--cream-100)]">
            {d.day}
          </p>
          <p className="mt-2 font-display text-xl text-[var(--cream-200)]/90">
            {d.month} {d.year}
          </p>
          <div className="mt-6 pt-6 border-t border-[var(--cream-200)]/15">
            <p className="text-sm text-[var(--cream-200)]/80">{d.note}</p>
          </div>
          <ArrowUpRight
            size={16}
            className="absolute bottom-6 right-6 text-[var(--gold-400)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </motion.article>
      ))}
    </div>
  );
}
