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
      className="group relative p-8 rounded-3xl bg-[var(--cream-50)] border border-[var(--border)] hover:-translate-y-1 transition-all duration-500 hover:shadow-[var(--shadow-gold)] overflow-hidden"
    >
      <span className="absolute top-6 right-6 font-display text-6xl text-[var(--gold-400)]/25 leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="font-display text-3xl leading-tight text-[var(--espresso-800)] max-w-[85%]">
        {title}
      </h3>
      <div className="gold-divider my-5" />
      <p className="text-[var(--espresso-700)] font-medium leading-relaxed">
        {lead}
      </p>
      <p className="mt-4 text-[var(--espresso-700)]/75 leading-relaxed text-[15px]">
        {body}
      </p>

      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--gold-400)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.article>
  );
}
