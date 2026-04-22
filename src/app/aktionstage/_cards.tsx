"use client";

import { motion } from "framer-motion";
import {
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CalendarDays, Clock, Sparkles } from "lucide-react";

type EventData = {
  start: string; // ISO date
  end: string; // ISO date
  label: string;
  day: string;
  weekday: string;
  month: string;
  year: string;
};

const events: EventData[] = [
  {
    start: "2026-05-15",
    end: "2026-05-17",
    label: "Frühjahrs-Aktionstage",
    day: "15 – 17",
    weekday: "Fr – So",
    month: "Mai",
    year: "2026",
  },
  {
    start: "2026-07-10",
    end: "2026-07-12",
    label: "Sommer-Edition",
    day: "10 – 12",
    weekday: "Fr – So",
    month: "Juli",
    year: "2026",
  },
  {
    start: "2026-10-23",
    end: "2026-10-25",
    label: "Herbst-Ankauf",
    day: "23 – 25",
    weekday: "Fr – So",
    month: "Oktober",
    year: "2026",
  },
  {
    start: "2026-12-04",
    end: "2026-12-06",
    label: "Vorweihnachts-Edition",
    day: "04 – 06",
    weekday: "Fr – So",
    month: "Dezember",
    year: "2026",
  },
];

function daysUntil(iso: string) {
  const target = new Date(iso + "T10:00:00");
  const now = new Date();
  const ms = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function AktionstageCards() {
  const [featured, ...rest] = events;
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    setCountdown(daysUntil(featured.start));
    const id = window.setInterval(() => {
      setCountdown(daysUntil(featured.start));
    }, 60_000);
    return () => window.clearInterval(id);
  }, [featured.start]);

  return (
    <div className="space-y-8">
      <FeaturedCard event={featured} countdown={countdown} />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-[11px] uppercase tracking-[0.4em] text-[var(--gold-400)]/70"
      >
        ✦ Weitere Termine
      </motion.p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((e, i) => (
          <SmallCard key={e.start} event={e} index={i} />
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({
  event,
  countdown,
}: {
  event: EventData;
  countdown: number | null;
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
    const rx = (y / rect.height - 0.5) * -6;
    const ry = (x / rect.width - 0.5) * 6;
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

  const ics = useMemo(() => buildIcs(event), [event]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
      style={{ perspective: "1200px" }}
      className="group [transform-style:preserve-3d]"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative overflow-hidden rounded-[32px] p-px shadow-[0_40px_90px_-30px_rgba(184,137,74,0.55),0_12px_30px_-10px_rgba(13,9,5,0.5)] transition-all duration-500
          [transform:perspective(1200px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))]"
      >
        {/* Animated gold gradient border */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-[32px] bg-[conic-gradient(from_0deg,var(--gold-700),var(--gold-400),#f8e5ad,var(--gold-400),var(--gold-700),var(--gold-600),var(--gold-700))] animate-slow-spin"
        />

        <div className="relative rounded-[31px] bg-gradient-to-br from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)] p-8 md:p-12 overflow-hidden">
          {/* Cursor glare */}
          <span
            ref={glow}
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-[31px] opacity-0 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(350px circle at var(--mx, 50%) var(--my, 50%), rgba(255,231,170,0.5), transparent 55%)",
            }}
          />

          {/* Decorative gold radial */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(212,177,119,0.3),transparent_65%)] pointer-events-none" />

          {/* Top inner gloss */}
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/50 to-transparent rounded-t-[31px]"
            aria-hidden
          />

          {/* Next-event badge */}
          <div className="relative flex items-center justify-between" style={{ transform: "translateZ(40px)" }}>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[var(--ink-900)] text-[var(--gold-400)] text-[10px] uppercase tracking-[0.3em]">
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-[var(--gold-400)]"
              />
              Nächster Termin
            </span>
            {countdown !== null && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.3em] text-[var(--gold-700)]"
              >
                <Clock size={13} strokeWidth={1.9} />
                {countdown === 0 ? "Heute" : `In ${countdown} Tagen`}
              </motion.span>
            )}
          </div>

          {/* Main date readout */}
          <div
            className="relative mt-8 grid gap-6 md:grid-cols-[auto,1fr] items-end"
            style={{ transform: "translateZ(60px)" }}
          >
            <div>
              <p className="font-display italic text-lg tracking-[0.2em] text-[var(--gold-700)]">
                {event.weekday}
              </p>
              <div className="font-display text-[clamp(6rem,18vw,10rem)] leading-[0.9] tracking-tight text-[var(--espresso-900)] flex items-baseline">
                <span className="text-gold-rich">{event.day}</span>
              </div>
              <p className="mt-2 font-display text-2xl md:text-3xl leading-none text-[var(--espresso-800)]">
                {event.month} <span className="text-[var(--gold-700)]">{event.year}</span>
              </p>
            </div>

            <div className="md:justify-self-end md:text-right">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold-700)]/75">
                Edition
              </p>
              <p className="mt-2 font-display italic text-2xl md:text-3xl text-[var(--espresso-900)]">
                {event.label}
              </p>
              <div className="gold-divider my-5 max-w-xs md:ml-auto" />
              <p className="text-sm text-[var(--espresso-700)]/85 max-w-xs md:ml-auto leading-relaxed">
                Kostenlose Bewertung. Sofortige Barauszahlung. Ganz ohne Termin.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div
            className="relative mt-8 flex flex-wrap gap-3"
            style={{ transform: "translateZ(50px)" }}
          >
            <a
              href={ics}
              download={`loewengold-${event.start}.ics`}
              className="group/btn inline-flex items-center gap-2 rounded-full px-5 py-3 bg-[var(--ink-900)] text-[var(--cream-100)] text-sm tracking-wide transition-colors hover:bg-[var(--espresso-800)]"
            >
              <CalendarDays size={15} strokeWidth={2} />
              Zum Kalender hinzufügen
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-[var(--gold-500)]/70 text-[var(--gold-700)] text-sm tracking-wide hover:bg-[var(--gold-500)]/10 transition-colors"
            >
              <Sparkles size={15} strokeWidth={2} />
              Vorab anfragen
            </a>
          </div>

          {/* Bottom shimmer rule on hover */}
          <span className="absolute left-8 md:left-12 right-8 md:right-12 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({ event, index }: { event: EventData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLSpanElement>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    setCountdown(daysUntil(event.start));
  }, [event.start]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = (y / rect.height - 0.5) * -8;
    const ry = (x / rect.width - 0.5) * 8;
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

  const ics = useMemo(() => buildIcs(event), [event]);

  return (
    <motion.a
      href={ics}
      download={`loewengold-${event.start}.ics`}
      aria-label={`Termin ${event.label} in Kalender speichern`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: 0.12 + index * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      style={{ perspective: "1100px" }}
      className="group relative block [transform-style:preserve-3d]"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative h-full p-6 rounded-[22px] overflow-hidden
          bg-[rgba(13,9,5,0.6)] backdrop-blur-md
          border border-[var(--gold-400)]/40
          shadow-[0_25px_60px_-20px_rgba(13,9,5,0.65),0_8px_20px_-8px_rgba(184,137,74,0.2)]
          transition-all duration-500 ease-out
          [transform:perspective(1100px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))]
          group-hover:border-[var(--gold-400)]/70 group-hover:bg-[rgba(13,9,5,0.72)]
          group-hover:shadow-[0_35px_70px_-20px_rgba(13,9,5,0.75),0_12px_28px_-8px_rgba(184,137,74,0.45)]"
      >
        {/* Cursor glare */}
        <span
          ref={glow}
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(212,177,119,0.35), transparent 55%)",
          }}
        />
        {/* Gold corner bloom */}
        <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[var(--gold-400)]/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative flex items-start justify-between" style={{ transform: "translateZ(30px)" }}>
          <CalendarDays className="text-[var(--gold-400)]" size={18} strokeWidth={1.9} />
          {countdown !== null && (
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-400)]/75">
              {countdown === 0 ? "heute" : `in ${countdown}d`}
            </span>
          )}
        </div>

        <p
          className="relative mt-4 text-[10px] uppercase tracking-[0.28em] text-[var(--gold-400)]/80"
          style={{ transform: "translateZ(20px)" }}
        >
          {event.weekday}
        </p>

        <p
          className="relative mt-2 font-display text-5xl leading-none text-[var(--cream-50)]"
          style={{ transform: "translateZ(45px)" }}
        >
          {event.day}
        </p>
        <p
          className="relative mt-2 font-display text-xl text-[var(--cream-200)]/90"
          style={{ transform: "translateZ(30px)" }}
        >
          {event.month} {event.year}
        </p>

        <div
          className="relative mt-5 pt-5 border-t border-[var(--gold-400)]/15"
          style={{ transform: "translateZ(20px)" }}
        >
          <p className="text-[13px] text-[var(--cream-200)]/80 italic font-display">
            {event.label}
          </p>
        </div>

        {/* hover underline */}
        <span className="absolute left-6 right-6 bottom-4 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-400)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left pointer-events-none" />
      </div>
    </motion.a>
  );
}

function buildIcs(event: EventData) {
  const dtStart = event.start.replaceAll("-", "") + "T100000";
  const dtEnd = event.end.replaceAll("-", "") + "T180000";
  const uid = `loewengold-${event.start}@löwengold-calw.de`;
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Löwengold Calw//Aktionstage//DE",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStart}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:Löwengold Calw – ${event.label}`,
    "LOCATION:Altburger Str. 13, 75365 Calw",
    "DESCRIPTION:Kostenlose Schätzung · Sofortige Barauszahlung · Ganz ohne Termin.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(body);
}
