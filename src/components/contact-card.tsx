"use client";

import { motion } from "framer-motion";
import {
  createElement,
  MouseEvent,
  ReactNode,
  useRef,
  type CSSProperties,
} from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Ivory plaque with a 3D cursor tilt, animated gold icon medallion
 * and a cursor-following warm glare. Used for contact info blocks.
 *
 * If `href` is provided the whole card becomes tappable: use `tel:…`
 * for the phone, `mailto:…` for the mail client, a maps URL with
 * `external` for the address card.
 */
export function ContactCard({
  index,
  label,
  icon,
  href,
  external,
  children,
}: {
  index: number;
  label: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const glow = useRef<HTMLSpanElement>(null);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = (y / rect.height - 0.5) * -7;
    const ry = (x / rect.width - 0.5) * 7;

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

  const className =
    "group/card relative block p-7 rounded-[24px] overflow-hidden " +
    "bg-gradient-to-br from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)] " +
    "border border-[var(--gold-500)]/45 " +
    "shadow-[0_25px_55px_-20px_rgba(13,9,5,0.55),0_6px_20px_-10px_rgba(184,137,74,0.3)] " +
    "transition-all duration-500 ease-out " +
    "[transform:perspective(1100px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))_translateZ(0)] " +
    "hover:shadow-[0_40px_85px_-20px_rgba(13,9,5,0.7),0_10px_28px_-8px_rgba(184,137,74,0.5)] " +
    (href ? "cursor-pointer" : "");

  const innerContent = (
    <>
      {/* Cursor-following warm gold glare */}
      <span
        ref={glow}
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(255,231,170,0.4), transparent 55%)",
        }}
      />

      {/* Top gloss */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent"
        aria-hidden
      />

      {/* Icon + label row */}
      <div
        className="relative flex items-center gap-3"
        style={{ transform: "translateZ(40px)" } as CSSProperties}
      >
        <motion.span
          animate={{ y: [0, -3, 0], rotate: [0, 4, 0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--gold-300)]/25 via-[var(--gold-400)]/35 to-[var(--gold-600)]/20 border border-[var(--gold-500)]/35 shadow-[0_6px_14px_-4px_rgba(184,137,74,0.5)] shrink-0 text-[var(--gold-700)]"
        >
          {icon}
          <motion.span
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1 right-1 h-1 w-1 rounded-full bg-[var(--gold-200)]"
          />
        </motion.span>
        <p className="flex-1 text-[11px] uppercase tracking-[0.3em] text-[var(--gold-700)]">
          {label}
        </p>
        {href && (
          <motion.span
            animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--gold-500)]/35 text-[var(--gold-700)] group-hover/card:bg-[var(--gold-400)]/15 transition-colors"
          >
            <ArrowUpRight size={15} strokeWidth={2} />
          </motion.span>
        )}
      </div>

      {/* Content */}
      <div
        className="relative mt-5 font-display text-2xl md:text-3xl text-[var(--espresso-900)] leading-tight break-words"
        style={{ transform: "translateZ(30px)" } as CSSProperties}
      >
        {children}
      </div>

      {/* Bottom accent rule */}
      <span className="absolute left-7 right-7 bottom-4 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-left pointer-events-none" />
    </>
  );

  const commonProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      style={{ perspective: "1100px" }}
      className="[transform-style:preserve-3d]"
    >
      {href
        ? createElement(
            "a",
            {
              ...commonProps,
              href,
              ...(external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {}),
              "aria-label": label,
            },
            innerContent
          )
        : createElement("div", commonProps, innerContent)}
    </motion.div>
  );
}
