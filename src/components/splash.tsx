"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { LogoMark } from "./logo";

const SESSION_KEY = "loewengold-splash-seen";
const DURATION_MS = 2400;

/**
 * Minimal luxury splash. Dark ink backdrop, slow gold bloom behind
 * the logo, drifting gold particles. On exit everything cross-fades
 * gracefully — no slide.
 */
export function Splash() {
  const [visible, setVisible] = useState(false);

  // Deterministic particle positions (avoids hydration mismatch)
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const rand = (k: number) => ((seed * (k + 1)) % 100) / 100;
        return {
          left: `${rand(1) * 100}%`,
          top: `${rand(2) * 100}%`,
          size: 3 + rand(3) * 6,
          delay: rand(4) * 1.6,
          duration: 3 + rand(5) * 3,
          drift: (rand(6) - 0.5) * 80,
        };
      }),
    []
  );

  useEffect(() => {
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
            transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] as const },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
          aria-hidden
        >
          {/* Dark ink backdrop */}
          <div className="absolute inset-0 bg-[var(--ink-900)]" />

          {/* Breathing gold bloom behind the logo */}
          <motion.div
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={{ opacity: [0.35, 0.6, 0.4], scale: [0.95, 1.05, 1] }}
            transition={{ duration: DURATION_MS / 1000, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(212,177,119,0.28),transparent_55%)]"
          />

          {/* Secondary rose-gold radial */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.25] }}
            transition={{ duration: DURATION_MS / 1000, ease: "easeInOut" }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(192,136,104,0.22),transparent_70%)] pointer-events-none"
          />

          {/* Outer vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(13,9,5,0.65)_100%)] pointer-events-none" />

          {/* Drifting gold particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, x: 0, scale: 0.6 }}
                animate={{
                  opacity: [0, 1, 0.6, 1, 0],
                  y: [20, -p.drift, -p.drift * 1.4],
                  x: [0, p.drift * 0.5, p.drift * 0.8],
                  scale: [0.6, 1, 0.9, 1.05, 0.7],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
                className="absolute block"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                }}
              >
                <svg viewBox="0 0 20 20" className="w-full h-full">
                  <defs>
                    <radialGradient id={`g-${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f8e5ad" stopOpacity="1" />
                      <stop offset="60%" stopColor="#d4b177" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#956c34" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="10" cy="10" r="10" fill={`url(#g-${i})`} />
                </svg>
              </motion.span>
            ))}
          </div>

          {/* Four-pointed sparkles near the logo */}
          {[
            { l: "26%", t: "30%", s: 10, d: 0.3 },
            { l: "72%", t: "28%", s: 8, d: 0.7 },
            { l: "32%", t: "72%", s: 12, d: 1.1 },
            { l: "68%", t: "70%", s: 9, d: 0.5 },
          ].map((p, i) => (
            <motion.span
              key={`s-${i}`}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0, 1.1, 0.9, 1.2, 0.8],
                rotate: [0, 35, 70],
              }}
              transition={{ duration: 2.1, delay: p.d, ease: "easeInOut" }}
              style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
              className="absolute pointer-events-none"
            >
              <svg viewBox="0 0 20 20" className="w-full h-full text-[var(--gold-300)]">
                <path
                  d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
                  fill="currentColor"
                />
              </svg>
            </motion.span>
          ))}

          {/* Logo — slow graceful scale & fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(251,241,215,0.4),transparent_55%)] blur-3xl scale-150" />
            <LogoMark
              priority
              className="relative !h-44 md:!h-56 !w-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
