"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("de-DE"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1] as const,
    });
    return () => controls.stop();
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function CounterStrip() {
  return (
    <section className="relative py-20 px-5 sm:px-8 border-y border-[var(--border)] bg-[var(--cream-100)]">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { n: 25, suffix: "+", label: "Jahre Erfahrung" },
          { n: 9, suffix: "", label: "Feingehalte Gold" },
          { n: 16, suffix: "", label: "Münzsorten im Ankauf" },
          { n: 100, suffix: "%", label: "Transparent & fair" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="text-center md:text-left"
          >
            <div className="font-display text-5xl md:text-6xl text-[var(--gold-600)]">
              <Counter to={s.n} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm tracking-wide text-[var(--espresso-700)]/80">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
