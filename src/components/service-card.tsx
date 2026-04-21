"use client";

import { motion } from "framer-motion";
import { staggerItem } from "./reveal";

export function ServiceCard({
  title,
  lead,
  body,
  index,
}: {
  title: string;
  lead: string;
  body: string;
  index: number;
}) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative p-8 md:p-10 rounded-[28px] bg-[var(--cream-50)] border border-[var(--border)] overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[var(--shadow-gold-xl)]"
    >
      {/* Decorative gold glow on hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[var(--gold-400)]/12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Corner number — outlined for luxury feel */}
      <span
        className="absolute -top-3 -right-2 font-display text-[180px] leading-none text-stroke-gold opacity-[0.18] group-hover:opacity-30 transition-opacity duration-700 pointer-events-none select-none"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Top row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-10 bg-[var(--gold-500)]" />
        <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold-600)]">
          Leistung {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative font-display text-3xl md:text-4xl leading-tight text-[var(--espresso-900)] max-w-[85%]">
        {title}
      </h3>

      {/* Gold rule */}
      <div className="gold-divider my-6" />

      {/* Lead */}
      <p className="relative text-[var(--espresso-800)] font-medium leading-relaxed">
        {lead}
      </p>

      {/* Body */}
      <p className="relative mt-4 text-[var(--espresso-700)]/80 leading-relaxed text-[15px]">
        {body}
      </p>

      {/* Bottom hover underline */}
      <span className="absolute left-8 md:left-10 right-8 md:right-10 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-400)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left pointer-events-none" />
    </motion.article>
  );
}
