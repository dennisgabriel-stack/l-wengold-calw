"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { contact, nav } from "@/lib/data";
import { LogoMark } from "./logo";

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
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-[var(--border)] text-[var(--espresso-800)] hover:bg-[var(--cream-100)]"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-paper grain"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-col items-center justify-center gap-7 mt-16 px-6"
            >
              {nav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl tracking-wide text-[var(--espresso-800)] hover:text-[var(--gold-600)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                href={`tel:${contact.phoneRaw}`}
                className="mt-6 inline-flex items-center gap-2 text-[var(--gold-600)] tracking-wide"
              >
                <Phone size={16} /> {contact.phone}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
