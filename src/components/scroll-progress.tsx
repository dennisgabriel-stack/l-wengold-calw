"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin fixed gold line under the header that fills as the user scrolls —
 * a luxury-brand cue without being distracting.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-transparent via-[var(--gold-400)] to-transparent pointer-events-none"
      aria-hidden
    />
  );
}
