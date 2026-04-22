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
      className="group relative p-8 md:p-10 rounded-[28px] bg-[rgba(26,18,11,0.55)] backdrop-blur-md border border-[var(--gold-400)]/20 text-[var(--cream-100)] overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:border-[var(--gold-400)]/55 hover:shadow-[var(--shadow-gold-xl)]"
    >
      {/* Inner luxurious gold bloom on hover */}
      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[var(--gold-400)]/18 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-[var(--rose-500)]/14 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Outlined large number watermark */}
      <span
        className="absolute -top-4 -right-2 font-display text-[180px] leading-none text-stroke-gold opacity-[0.20] group-hover:opacity-40 transition-opacity duration-700 pointer-events-none select-none"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Eyebrow */}
      <div className="relative flex items-center gap-3 mb-6">
        <span className="h-px w-10 bg-[var(--gold-400)]" />
        <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold-400)]">
          Leistung {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative font-display text-3xl md:text-4xl leading-tight text-white max-w-[90%]">
        {title}
      </h3>

      {/* Gold rule */}
      <div className="gold-divider my-6" />

      {/* Lead */}
      <p className="relative text-[var(--cream-100)] font-medium leading-relaxed">
        {lead}
      </p>

      {/* Body */}
      <p className="relative mt-4 text-[var(--cream-200)]/80 leading-relaxed text-[15px]">
        {body}
      </p>

      {/* Bottom hover underline */}
      <span className="absolute left-8 md:left-10 right-8 md:right-10 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-400)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left pointer-events-none" />
    </motion.article>
  );
}
