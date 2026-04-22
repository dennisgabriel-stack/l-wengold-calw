"use client";

import { motion } from "framer-motion";
import { MouseEvent, useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLSpanElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Rotation: -7° … +7°, intensity scales with distance from the center.
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 10;

    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    if (glow.current) {
      glow.current.style.opacity = "1";
    }
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
      variants={staggerItem}
      style={{ perspective: "1100px" }}
      className="group [transform-style:preserve-3d]"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative h-full p-8 md:p-10 rounded-[28px] overflow-hidden
          bg-gradient-to-br from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)]
          border border-[var(--gold-500)]/45
          shadow-[0_30px_60px_-20px_rgba(13,9,5,0.6),0_8px_24px_-12px_rgba(184,137,74,0.35)]
          transition-all duration-500 ease-out
          [transform:perspective(1100px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))_translateZ(0)]
          group-hover:shadow-[0_45px_90px_-20px_rgba(13,9,5,0.75),0_12px_32px_-10px_rgba(184,137,74,0.55)]"
      >
        {/* Cursor-following gold glare */}
        <span
          ref={glow}
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(255,231,170,0.35), transparent 55%)",
          }}
        />

        {/* Inner top gloss */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent" aria-hidden />

        {/* Outlined numeral watermark */}
        <span
          className="absolute -top-4 -right-2 font-display text-[180px] leading-none text-stroke-gold opacity-[0.22] group-hover:opacity-40 transition-opacity duration-700 pointer-events-none select-none"
          aria-hidden
          style={{ transform: "translateZ(30px)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Eyebrow */}
        <div
          className="relative flex items-center gap-3 mb-6"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="h-px w-10 bg-[var(--gold-500)]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold-700)]">
            Leistung {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3
          className="relative font-display text-3xl md:text-4xl leading-tight text-[var(--espresso-900)] max-w-[90%]"
          style={{ transform: "translateZ(50px)" }}
        >
          {title}
        </h3>

        {/* Gold rule */}
        <div
          className="gold-divider my-6"
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Lead */}
        <p
          className="relative text-[var(--espresso-800)] font-medium leading-relaxed"
          style={{ transform: "translateZ(30px)" }}
        >
          {lead}
        </p>

        {/* Body */}
        <p
          className="relative mt-4 text-[var(--espresso-700)]/80 leading-relaxed text-[15px]"
          style={{ transform: "translateZ(20px)" }}
        >
          {body}
        </p>

        {/* Bottom accent rule */}
        <span className="absolute left-8 md:left-10 right-8 md:right-10 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left pointer-events-none" />
      </div>
    </motion.article>
  );
}
