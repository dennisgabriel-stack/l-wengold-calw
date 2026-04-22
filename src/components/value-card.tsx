"use client";

import { motion, type Variants } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * Ivory plaque on dark panel with live 3D tilt and a gently
 * animating gold icon. Pair with a dark panel section for the
 * strongest contrast.
 */
export function ValueCard({
  index,
  title,
  body,
  icon,
}: {
  index: number;
  title: string;
  body: string;
  icon: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLSpanElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = (y / rect.height - 0.5) * -9;
    const ry = (x / rect.width - 0.5) * 9;

    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    if (glow.current) glow.current.style.opacity = "1";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    if (glow.current) glow.current.style.opacity = "0";
  };

  return (
    <motion.article
      variants={itemVariants}
      style={{ perspective: "1100px" }}
      className="group [transform-style:preserve-3d]"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative h-full p-7 md:p-9 rounded-[28px] overflow-hidden
          bg-gradient-to-br from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)]
          border border-[var(--gold-500)]/45
          shadow-[0_25px_55px_-20px_rgba(13,9,5,0.55),0_6px_20px_-10px_rgba(184,137,74,0.3)]
          transition-all duration-500 ease-out
          [transform:perspective(1100px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))_translateZ(0)]
          group-hover:shadow-[0_40px_85px_-20px_rgba(13,9,5,0.7),0_10px_28px_-8px_rgba(184,137,74,0.5)]"
      >
        {/* Cursor-following warm gold glare */}
        <span
          ref={glow}
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(255,231,170,0.4), transparent 55%)",
          }}
        />

        {/* Top gloss */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 to-transparent"
          aria-hidden
        />

        {/* Animated gold icon medallion */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            delay: index * 0.08 + 0.2,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          style={{ transform: "translateZ(55px)" }}
          className="relative inline-flex"
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
              rotate: [0, 4, 0, -4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[var(--gold-300)]/25 via-[var(--gold-400)]/35 to-[var(--gold-600)]/20 border border-[var(--gold-500)]/35 shadow-[0_10px_20px_-8px_rgba(184,137,74,0.5)] text-[var(--gold-700)]"
          >
            {icon}
            {/* inner shimmer dot */}
            <motion.span
              animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[var(--gold-200)]"
            />
          </motion.span>
          {/* Soft outer halo */}
          <span className="absolute inset-0 rounded-2xl bg-[var(--gold-400)]/25 blur-xl scale-125 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
        </motion.div>

        {/* Title */}
        <h3
          className="relative mt-6 font-display text-2xl md:text-3xl leading-tight text-[var(--espresso-900)]"
          style={{ transform: "translateZ(45px)" }}
        >
          {title}
        </h3>

        {/* Gold rule */}
        <div className="gold-divider my-4" style={{ transform: "translateZ(15px)" }} />

        {/* Body */}
        <p
          className="relative text-[var(--espresso-700)]/85 text-[15px] leading-relaxed"
          style={{ transform: "translateZ(25px)" }}
        >
          {body}
        </p>

        {/* Bottom accent rule */}
        <span className="absolute left-7 md:left-9 right-7 md:right-9 bottom-5 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left pointer-events-none" />
      </div>
    </motion.article>
  );
}
