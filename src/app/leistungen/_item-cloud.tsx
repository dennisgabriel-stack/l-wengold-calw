"use client";

import { motion } from "framer-motion";

export function ItemCloud({ items }: { items: string[] }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.04 } },
      }}
      className="flex flex-wrap gap-2.5"
    >
      {items.map((it) => (
        <motion.li
          key={it}
          variants={{
            hidden: { opacity: 0, y: 12, scale: 0.95 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
            },
          }}
          whileHover={{ y: -3, scale: 1.04 }}
          className="px-4 py-2 rounded-full bg-[var(--cream-50)] border border-[var(--border)] text-[var(--espresso-800)] text-sm hover:border-[var(--gold-500)] hover:text-[var(--gold-700)] transition-colors cursor-default"
        >
          {it}
        </motion.li>
      ))}
    </motion.ul>
  );
}
