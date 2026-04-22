import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, nav } from "@/lib/data";
import { LogoMark } from "./logo";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-[var(--cream-100)] overflow-hidden">
      {/* Top gold rule */}
      <div className="gold-rule absolute inset-x-0 top-0" />

      {/* Decorative radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.15),transparent_60%)] pointer-events-none" />

      {/* Huge watermark wordmark */}
      <div
        className="absolute inset-x-0 bottom-[-30px] text-center select-none pointer-events-none opacity-[0.06]"
        aria-hidden
      >
        <span className="font-display text-[clamp(6rem,18vw,17rem)] tracking-[0.15em] text-[var(--gold-400)]">
          LÖWENGOLD
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-14 grid gap-14 lg:grid-cols-12">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block group">
            <span className="block rounded-3xl p-5 max-w-[260px] bg-[var(--cream-100)]/96 shadow-[var(--shadow-gold)]">
              <LogoMark className="!h-20 !w-auto mx-auto" />
            </span>
          </Link>
          <p className="mt-8 text-sm leading-relaxed text-[var(--cream-200)]/75 max-w-sm">
            Ihr Experte für den Ankauf von Gold, Silber, Edelsteinen,
            Antiquitäten und Münzen – mitten im Schwarzwald.
            Kostenlose Schätzung, sofortige Barauszahlung, diskrete Abwicklung.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full glass-dark">
            <span className="h-2 w-2 rounded-full bg-[var(--gold-400)] animate-ambient" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold-400)]">
              Calw · Baden-Württemberg
            </span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-xl text-[var(--gold-400)] mb-5 tracking-wide">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-[var(--cream-200)]/80 hover:text-[var(--gold-400)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/wegbeschreibung"
                className="link-underline text-[var(--cream-200)]/80 hover:text-[var(--gold-400)]"
              >
                Wegbeschreibung
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-xl text-[var(--gold-400)] mb-5 tracking-wide">
            Kontakt
          </h3>
          <ul className="space-y-5 text-sm">
            <li>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="group flex items-start gap-3 text-[var(--cream-200)]/80 hover:text-[var(--gold-400)]"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold-400)]/12 group-hover:bg-[var(--gold-400)]/25 transition-colors">
                  <Phone size={13} className="text-[var(--gold-400)]" />
                </span>
                <span className="mt-1">{contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.emailRaw}`}
                className="group flex items-start gap-3 text-[var(--cream-200)]/80 hover:text-[var(--gold-400)] break-all"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold-400)]/12 group-hover:bg-[var(--gold-400)]/25 transition-colors">
                  <Mail size={13} className="text-[var(--gold-400)]" />
                </span>
                <span className="mt-1">{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Altburger+Str.+13+75365+Calw"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-[var(--cream-200)]/80 hover:text-[var(--gold-400)]"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold-400)]/12 group-hover:bg-[var(--gold-400)]/25 transition-colors">
                  <MapPin size={13} className="text-[var(--gold-400)]" />
                </span>
                <span className="mt-1">
                  {contact.street}
                  <br />
                  {contact.zip} {contact.city}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-xl text-[var(--gold-400)] mb-5 tracking-wide">
            Öffnungszeiten
          </h3>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)]/80 mb-4">
            An Aktionstagen
          </p>
          <ul className="space-y-3 text-sm">
            {contact.hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between gap-6 text-[var(--cream-200)]/80 border-b border-[var(--cream-200)]/8 pb-2 last:border-0"
              >
                <span>{h.day}</span>
                <span className="tabular-nums">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-[var(--cream-200)]/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--cream-200)]/60">
          <p>
            &copy; {new Date().getFullYear()} Löwengold Calw &middot; Alle
            Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-[var(--gold-400)]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[var(--gold-400)]">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
