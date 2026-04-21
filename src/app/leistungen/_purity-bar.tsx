"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/components/reveal";

const percent = (label: string) => {
  const n = parseInt(label, 10);
  if (Number.isNaN(n)) return 58;
  return Math.max(18, Math.min(99, (n / 1000) * 100));
};

export function PurityBar({ label }: { label: string }) {
  const p = percent(label);
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden px-5 py-3 rounded-xl bg-[var(--cream-50)] border border-[var(--border)] hover:border-[var(--gold-500)] transition-colors min-w-[90px] text-center"
    >
      <span className="relative z-10 text-sm font-semibold tracking-wide text-[var(--espresso-800)] group-hover:text-[var(--gold-700)]">
        {label}
      </span>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: `${p}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute left-0 bottom-0 h-[3px] bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-600)]"
      />
    </motion.div>
  );
}
