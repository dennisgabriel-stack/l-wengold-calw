"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Home,
  Gem,
  Heart,
  CalendarDays,
  Mail,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { contact, nav } from "@/lib/data";
import { LogoMark } from "./logo";

const navIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/leistungen": Gem,
  "/ueber-uns": Heart,
  "/aktionstage": CalendarDays,
  "/kontakt": Mail,
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[var(--cream-50)]/85 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
          <Link
            href="/"
            aria-label="Löwengold Calw – Startseite"
            className="flex items-center group"
          >
            <LogoMark
              priority
              className="!h-14 md:!h-16 !w-auto -my-1 transition-transform group-hover:scale-[1.04] duration-500"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[13px] uppercase tracking-[0.24em] font-medium transition-colors",
                    active
                      ? "text-[var(--gold-600)]"
                      : "text-[var(--espresso-700)] hover:text-[var(--gold-600)]"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-[var(--gold-500)]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--espresso-700)] hover:text-[var(--gold-600)] transition-colors"
            >
              <Phone size={15} />
              <span className="tracking-wide">{contact.phone}</span>
            </a>

            <button
              aria-label="Menü"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-[var(--border)] text-[var(--espresso-800)] hover:bg-[var(--cream-100)] bg-[var(--cream-50)]/85 backdrop-blur-sm"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/*
        Mobile overlay — editorial 'grand-hotel reception' treatment:
        serif labels, hairline gold rules, ornate medallions, ornament
        divider, polished gold phone token.
      */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-[55] overflow-y-auto"
          >
            {/* Deep layered backdrop */}
            <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#09060a] via-[#0f0a05] to-[#06040a]" />
            <motion.div
              animate={{
                opacity: [0.45, 0.75, 0.5],
                scale: [0.95, 1.04, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 top-0 h-3/4 -z-10 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(212,177,119,0.32),transparent_60%)]"
            />
            <motion.div
              animate={{
                opacity: [0.3, 0.55, 0.35],
                scale: [1.05, 0.98, 1.02],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_50%_110%,rgba(192,136,104,0.24),transparent_55%)]"
            />
            {/* Thin diagonal gold thread pattern */}
            <div
              className="absolute inset-0 -z-10 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(212,177,119,0.7) 0 1px, transparent 1px 60px), repeating-linear-gradient(-45deg, rgba(212,177,119,0.35) 0 1px, transparent 1px 120px)",
              }}
              aria-hidden
            />

            {/* Drifting gold sparkles */}
            <div className="absolute inset-0 -z-5 pointer-events-none">
              {[
                { l: "10%", t: "14%", s: 8, d: 0 },
                { l: "88%", t: "20%", s: 6, d: 1.3 },
                { l: "16%", t: "76%", s: 9, d: 0.6 },
                { l: "84%", t: "70%", s: 7, d: 2 },
                { l: "52%", t: "48%", s: 5, d: 1 },
              ].map((p, i) => (
                <motion.span
                  key={i}
                  animate={{
                    opacity: [0, 0.9, 0.3, 1, 0.3],
                    scale: [0, 1, 0.8, 1.15, 0.85],
                    y: [0, -8, -2, -10, 0],
                  }}
                  transition={{
                    duration: 7,
                    delay: p.d,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute"
                  style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="w-full h-full text-[var(--gold-400)]"
                  >
                    <path
                      d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.span>
              ))}
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
              }}
              className="relative flex flex-col min-h-full py-10 px-6 max-w-md mx-auto"
            >
              {/* Ornate header */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-center mb-10"
              >
                <svg
                  viewBox="0 0 120 20"
                  className="mx-auto h-5 w-32 text-[var(--gold-400)]"
                  aria-hidden
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M5 10 Q30 2 60 10 Q90 18 115 10" />
                    <circle cx="60" cy="10" r="2.2" fill="currentColor" />
                    <circle cx="20" cy="10" r="1" fill="currentColor" />
                    <circle cx="100" cy="10" r="1" fill="currentColor" />
                  </g>
                </svg>
                <p className="mt-3 text-[10px] uppercase tracking-[0.5em] text-[var(--gold-400)]/80">
                  Navigation
                </p>
              </motion.div>

              {/* Menu list */}
              <ul className="flex flex-col">
                {nav.map((item, i) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  const Icon = navIcons[item.href] ?? Home;
                  return (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1] as const,
                          },
                        },
                      }}
                      className="relative"
                    >
                      {/* Hairline divider before each item */}
                      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-400)]/25 to-transparent" />

                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group relative flex items-center gap-5 py-5 pl-2 pr-3 transition-all",
                          active && "bg-[radial-gradient(ellipse_at_left,rgba(212,177,119,0.12),transparent_70%)]"
                        )}
                      >
                        {/* Active left accent bar */}
                        {active && (
                          <motion.span
                            layoutId="menu-active-stripe"
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] rounded-full bg-gradient-to-b from-[var(--gold-300)] via-[var(--gold-500)] to-[var(--gold-700)]"
                          />
                        )}

                        {/* Page number in serif italic */}
                        <span
                          className={cn(
                            "font-display italic text-sm tracking-[0.25em] w-7 shrink-0 text-center",
                            active
                              ? "text-[var(--gold-300)]"
                              : "text-[var(--gold-400)]/50"
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Ornate circular medallion */}
                        <motion.span
                          animate={{
                            y: [0, -3, 0],
                            rotate: [0, 3, 0, -3, 0],
                          }}
                          transition={{
                            duration: 5 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={cn(
                            "relative inline-flex items-center justify-center h-11 w-11 rounded-full shrink-0 transition-all",
                            active
                              ? "bg-gradient-to-br from-[var(--gold-300)]/30 via-[var(--gold-400)]/40 to-[var(--gold-700)]/30"
                              : "bg-[rgba(212,177,119,0.08)] group-hover:bg-[rgba(212,177,119,0.18)]"
                          )}
                        >
                          {/* Double-rim */}
                          <span
                            className={cn(
                              "absolute inset-0 rounded-full border",
                              active
                                ? "border-[var(--gold-400)]/60"
                                : "border-[var(--gold-400)]/30 group-hover:border-[var(--gold-400)]/55"
                            )}
                          />
                          <span
                            className={cn(
                              "absolute inset-1 rounded-full border",
                              active
                                ? "border-[var(--gold-400)]/40"
                                : "border-[var(--gold-400)]/15"
                            )}
                          />
                          <Icon
                            size={16}
                            strokeWidth={1.7}
                            className={
                              active
                                ? "text-[var(--gold-200)]"
                                : "text-[var(--gold-400)] group-hover:text-[var(--gold-300)]"
                            }
                          />
                          {/* Shimmer dot */}
                          <motion.span
                            animate={{
                              opacity: [0.25, 0.9, 0.25],
                              scale: [0.6, 1.1, 0.6],
                            }}
                            transition={{
                              duration: 4 + i * 0.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-[var(--gold-200)]"
                          />
                        </motion.span>

                        {/* Label — big serif, italic when active */}
                        <span
                          className={cn(
                            "flex-1 font-display leading-none transition-transform duration-500 group-hover:translate-x-1",
                            active
                              ? "text-[var(--cream-50)] text-[30px] italic"
                              : "text-[var(--cream-100)]/95 text-[28px]"
                          )}
                        >
                          {item.label}
                        </span>

                        {/* Right: gold flourish that slides in on hover */}
                        <span
                          className={cn(
                            "relative h-px w-8 shrink-0 transition-all duration-500",
                            active
                              ? "bg-[var(--gold-400)] w-10"
                              : "bg-[var(--gold-400)]/30 group-hover:bg-[var(--gold-400)]/70 group-hover:w-10"
                          )}
                        />
                        <ArrowUpRight
                          size={14}
                          className={cn(
                            "shrink-0 transition-all duration-500",
                            active
                              ? "text-[var(--gold-300)] -translate-y-0.5 translate-x-0.5"
                              : "text-[var(--gold-400)]/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          )}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
                {/* closing hairline */}
                <span className="h-px bg-gradient-to-r from-transparent via-[var(--gold-400)]/25 to-transparent" />
              </ul>

              {/* Ornament divider */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="my-10 flex items-center gap-4"
              >
                <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--gold-400)]/50" />
                <svg
                  viewBox="0 0 20 20"
                  className="w-4 h-4 text-[var(--gold-400)]"
                  aria-hidden
                >
                  <path
                    d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--gold-400)]/50" />
              </motion.div>

              {/* Polished gold phone token */}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                href={`tel:${contact.phoneRaw}`}
                className="group relative block rounded-full p-px bg-gradient-to-r from-[var(--gold-700)] via-[var(--gold-300)] to-[var(--gold-700)] shadow-[0_20px_45px_-10px_rgba(184,137,74,0.55)]"
              >
                <span className="relative flex items-center justify-center gap-3 rounded-full px-6 py-4 bg-gradient-to-b from-[var(--gold-400)] to-[var(--gold-600)] text-[var(--espresso-900)]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--espresso-900)]/85 text-[var(--gold-300)] shadow-inner">
                    <Phone size={13} strokeWidth={2.2} />
                  </span>
                  <span className="font-medium tracking-[0.1em]">
                    {contact.phone}
                  </span>
                </span>
              </motion.a>

              {/* Bottom tagline with flourish */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="mt-8 text-center"
              >
                <p className="font-display text-xl tracking-[0.22em] text-[var(--gold-400)]/80">
                  LÖWENGOLD
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.35em] text-[var(--cream-200)]/45">
                  Gold &amp; Silberankauf · Calw
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
