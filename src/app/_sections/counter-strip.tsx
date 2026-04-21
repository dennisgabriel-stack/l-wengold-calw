"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, BadgeCheck, Coins, HandshakeIcon } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    Math.round(v).toLocaleString("de-DE")
  );

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

const stats = [
  {
    icon: Award,
    n: 25,
    suffix: "+",
    label: "Jahre Erfahrung",
    note: "Seit Jahren Ihr Partner in Calw",
  },
  {
    icon: BadgeCheck,
    n: 9,
    suffix: "",
    label: "Feingehalte Gold",
    note: "Von 333er bis 999er Feingold",
  },
  {
    icon: Coins,
    n: 16,
    suffix: "",
    label: "Münzsorten im Ankauf",
    note: "Krügerrand · Maple Leaf · Vreneli…",
  },
  {
    icon: HandshakeIcon,
    n: 100,
    suffix: "%",
    label: "Transparent & fair",
    note: "Sofortige Barauszahlung",
  },
];

export function CounterStrip() {
  return (
    <section className="relative py-16 md:py-24 px-5 sm:px-8 -mt-8 md:-mt-12 z-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-[var(--cream-50)]/95 backdrop-blur border border-[var(--border)] hover:border-[var(--gold-400)] hover:shadow-[var(--shadow-gold)] transition-all p-6 md:p-8"
            >
              {/* Gold glow on hover */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--gold-400)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-[var(--gold-400)]/15 text-[var(--gold-600)] group-hover:bg-[var(--gold-400)]/25 group-hover:-translate-y-0.5 transition-all">
                  <s.icon size={20} />
                </span>
                <span className="font-display text-xs uppercase tracking-[0.3em] text-[var(--gold-500)]">
                  0{i + 1}
                </span>
              </div>

              {/* Number */}
              <div className="mt-6">
                <div className="font-display text-5xl md:text-6xl leading-none text-gold-shimmer">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
              </div>

              {/* Labels */}
              <p className="mt-4 font-display text-lg md:text-xl text-[var(--espresso-800)]">
                {s.label}
              </p>
              <p className="mt-1.5 text-sm text-[var(--espresso-700)]/75 leading-relaxed">
                {s.note}
              </p>

              {/* Gold underline on hover */}
              <span className="absolute left-6 right-6 bottom-4 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-400)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
