"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "./logo";

const SESSION_KEY = "loewengold-splash-seen";
const DURATION_MS = 2200;

/**
 * Restrained, high-end splash. Dark ink backdrop with a soft gold
 * bloom behind the logo. A single hairline gold rule opens from the
 * centre — that's the entire "progress" vocabulary. The overlay
 * slides up with a long cinematic easing once the timer finishes.
 */
export function Splash() {
  const [visible, setVisible] = useState(false);

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
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.05,
              ease: [0.76, 0, 0.24, 1] as const,
            },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
          aria-hidden
        >
          {/* Dark ink backdrop with gold bloom behind the logo */}
          <div className="absolute inset-0 bg-[var(--ink-900)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(212,177,119,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(13,9,5,0.6)_100%)]" />

          {/* Ambient drift (very subtle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,177,119,0.2),transparent_70%)] pointer-events-none"
          />

          <div className="relative flex flex-col items-center">
            {/* Logo — crisp scale & fade */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(251,241,215,0.35),transparent_55%)] blur-3xl scale-150" />
              <LogoMark
                priority
                className="relative !h-44 md:!h-56 !w-auto"
              />
            </motion.div>

            {/* Hairline gold rule — opens outward from the centre */}
            <div className="relative mt-10 h-px w-56 md:w-72 overflow-hidden">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: (DURATION_MS - 500) / 1000,
                  delay: 0.25,
                  ease: [0.45, 0, 0.18, 1] as const,
                }}
                className="block h-full origin-center bg-gradient-to-r from-transparent via-[var(--gold-400)] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
