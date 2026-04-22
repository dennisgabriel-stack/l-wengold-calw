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
        Mobile overlay — sibling of header so backdrop-filter on header
        doesn't break its position:fixed. Rich luxury menu with animated
        gold icon medallions per entry.
      */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-[55] overflow-y-auto"
          >
            {/* Dark ink backdrop with layered glow */}
            <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{
                opacity: [0.4, 0.65, 0.45],
                scale: [0.97, 1.03, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 top-0 h-3/4 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.3),transparent_60%)]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(192,136,104,0.2),transparent_55%)]" />
            <div
              className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(212,177,119,0.6) 0 1px, transparent 1px 120px)",
              }}
              aria-hidden
            />

            {/* Drifting sparkles */}
            <div className="absolute inset-0 -z-5 pointer-events-none">
              {[
                { l: "12%", t: "18%", s: 8, d: 0 },
                { l: "86%", t: "24%", s: 6, d: 1.2 },
                { l: "18%", t: "78%", s: 9, d: 0.5 },
                { l: "82%", t: "72%", s: 7, d: 1.8 },
              ].map((p, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0.4, 1, 0.4],
                    scale: [0, 1, 0.85, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 4.5,
                    delay: p.d,
                    repeat: Infinity,
                    repeatType: "reverse",
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
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
              }}
              className="relative flex flex-col min-h-full py-8 px-6 max-w-md mx-auto"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-center text-[10px] uppercase tracking-[0.4em] text-[var(--gold-400)]/75 mb-6"
              >
                ✦ Navigation
              </motion.p>

              <ul className="flex flex-col gap-3">
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
                        hidden: { opacity: 0, y: 24 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1] as const,
                          },
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group relative flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all overflow-hidden",
                          active
                            ? "bg-gradient-to-br from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)] border-[var(--gold-500)]/60 shadow-[0_20px_50px_-20px_rgba(184,137,74,0.6)]"
                            : "bg-[rgba(251,241,215,0.06)] backdrop-blur border-[var(--gold-400)]/15 hover:border-[var(--gold-400)]/50 hover:bg-[rgba(251,241,215,0.12)]"
                        )}
                      >
                        {/* Animated gold icon medallion */}
                        <motion.span
                          animate={{
                            y: [0, -3, 0],
                            rotate: [0, 4, 0, -4, 0],
                          }}
                          transition={{
                            duration: 5 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={cn(
                            "relative inline-flex items-center justify-center h-11 w-11 rounded-xl border shrink-0",
                            active
                              ? "bg-gradient-to-br from-[var(--gold-300)]/30 via-[var(--gold-400)]/40 to-[var(--gold-600)]/25 border-[var(--gold-500)]/45"
                              : "bg-[var(--gold-400)]/12 border-[var(--gold-400)]/25 group-hover:bg-[var(--gold-400)]/22"
                          )}
                        >
                          <Icon
                            size={19}
                            strokeWidth={1.8}
                            className={
                              active
                                ? "text-[var(--gold-700)]"
                                : "text-[var(--gold-400)] group-hover:text-[var(--gold-300)]"
                            }
                          />
                          <motion.span
                            animate={{
                              opacity: [0.3, 0.9, 0.3],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute top-1 right-1 h-1 w-1 rounded-full bg-[var(--gold-200)]"
                          />
                        </motion.span>

                        <div className="flex-1 min-w-0">
                          <span
                            className={cn(
                              "block font-display text-2xl leading-none tracking-wide",
                              active
                                ? "text-[var(--espresso-900)]"
                                : "text-[var(--cream-100)]"
                            )}
                          >
                            {item.label}
                          </span>
                          <span
                            className={cn(
                              "mt-1.5 block text-[10px] uppercase tracking-[0.3em]",
                              active
                                ? "text-[var(--gold-700)]"
                                : "text-[var(--gold-400)]/60"
                            )}
                          >
                            0{i + 1}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={16}
                          className={cn(
                            "shrink-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                            active
                              ? "text-[var(--gold-700)]"
                              : "text-[var(--gold-400)]/70"
                          )}
                        />

                        {/* Active accent stripe */}
                        {active && (
                          <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[var(--gold-300)] via-[var(--gold-500)] to-[var(--gold-700)]" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Divider */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  show: { opacity: 1, scaleX: 1 },
                }}
                className="my-8 gold-rule"
              />

              {/* Phone CTA */}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                href={`tel:${contact.phoneRaw}`}
                className="group relative flex items-center gap-3 justify-center rounded-full px-6 py-4 bg-gradient-to-r from-[var(--gold-500)] via-[var(--gold-400)] to-[var(--gold-500)] text-[var(--espresso-900)] font-medium tracking-wide shadow-[0_20px_40px_-12px_rgba(184,137,74,0.6)]"
              >
                <Phone size={16} />
                <span className="tracking-wide">{contact.phone}</span>
              </motion.a>

              {/* Tagline */}
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="mt-6 text-center text-[10px] uppercase tracking-[0.35em] text-[var(--cream-200)]/55"
              >
                Löwengold Calw &middot; Gold &amp; Silberankauf
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
