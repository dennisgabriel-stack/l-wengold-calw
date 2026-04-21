"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "./logo";

const SESSION_KEY = "loewengold-splash-seen";
const DURATION_MS = 2000;

/**
 * Elegant splash animation shown the first time a visitor opens the site
 * in this tab session. A gold shimmer sweeps across the crest, a thin
 * progress line fills, then the whole overlay fades out.
 */
export function Splash() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once per session. On subsequent navigations the overlay is skipped.
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) return;

    setVisible(true);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, "1");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }, DURATION_MS);

    return () => {
      window.clearTimeout(t);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.85, ease: [0.65, 0, 0.35, 1] as const },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-b from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)] overflow-hidden"
          aria-hidden
        >
          {/* Gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,165,89,0.28),transparent_60%)]" />

          {/* Sparkle drifts */}
          {[
            { l: "18%", t: "24%", s: 8, d: 0.2 },
            { l: "82%", t: "22%", s: 6, d: 0.6 },
            { l: "28%", t: "76%", s: 10, d: 0.4 },
            { l: "78%", t: "72%", s: 7, d: 0.9 },
          ].map((p, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1, 0], scale: [0, 1, 0.85, 1, 0.7] }}
              transition={{ duration: 1.8, delay: p.d, ease: "easeInOut" }}
              style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
              className="absolute"
            >
              <svg viewBox="0 0 20 20" className="w-full h-full text-[var(--gold-400)]">
                <path
                  d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
                  fill="currentColor"
                />
              </svg>
            </motion.span>
          ))}

          <div className="relative flex flex-col items-center">
            {/* Golden orbit rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              }}
              className="absolute -inset-20 rounded-full border border-dashed border-[var(--gold-400)]/40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, rotate: -360 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.1 },
                scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute -inset-36 rounded-full border border-dashed border-[var(--gold-400)]/20"
            />

            {/* Logo with shimmer sweep */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative overflow-hidden rounded-xl"
            >
              <LogoMark className="!h-40 md:!h-52 !w-auto" priority />
              {/* Shimmer */}
              <motion.span
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-14deg] pointer-events-none"
              />
            </motion.div>

            {/* Progress line */}
            <div className="relative mt-10 w-56 h-[2px] overflow-hidden rounded-full bg-[var(--gold-400)]/20">
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: DURATION_MS / 1000 - 0.4, ease: [0.45, 0, 0.2, 1] as const }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[var(--gold-600)] via-[var(--gold-400)] to-[var(--gold-600)]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 text-[11px] uppercase tracking-[0.4em] text-[var(--gold-600)]"
            >
              Gold &amp; Silberankauf
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
