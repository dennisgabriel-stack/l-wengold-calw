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
        show: { transition: { staggerChildren: 0.035 } },
      }}
      className="flex flex-wrap gap-2.5"
    >
      {items.map((it) => (
        <motion.li
          key={it}
          variants={{
            hidden: { opacity: 0, y: 14, scale: 0.92, rotateX: -30 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
            },
          }}
          whileHover={{
            y: -4,
            scale: 1.06,
            boxShadow: "0 12px 24px -10px rgba(184,137,74,0.45)",
          }}
          className="group relative px-4 py-2 rounded-full bg-gradient-to-br from-[var(--cream-50)] to-[var(--cream-100)] border border-[var(--gold-400)]/35 text-[var(--espresso-800)] text-sm hover:border-[var(--gold-500)] hover:text-[var(--gold-700)] transition-colors cursor-default overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Gold shimmer on hover */}
          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(110deg,transparent_40%,rgba(255,231,170,0.5)_50%,transparent_60%)]" />
          <span className="relative">{it}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
