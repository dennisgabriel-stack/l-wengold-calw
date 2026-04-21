import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, nav } from "@/lib/data";
import { LogoMark } from "./logo";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--espresso-900)] text-[var(--cream-100)] overflow-hidden">
      <div className="absolute inset-0 bg-paper-dark opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 gold-divider" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block group">
            <span className="block bg-[var(--cream-100)]/95 rounded-2xl p-4 max-w-[260px]">
              <LogoMark className="!h-20 !w-auto mx-auto" />
            </span>
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-[var(--cream-200)]/75">
            Ihr Experte für den Ankauf von Gold, Silber, Edelsteinen,
            Antiquitäten und Münzen – mitten im Schwarzwald.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl text-[var(--gold-400)] mb-5">
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

        <div>
          <h3 className="font-display text-xl text-[var(--gold-400)] mb-5">
            Kontakt
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="flex items-start gap-3 text-[var(--cream-200)]/80 hover:text-[var(--gold-400)]"
              >
                <Phone size={15} className="mt-0.5 text-[var(--gold-400)]" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.emailRaw}`}
                className="flex items-start gap-3 text-[var(--cream-200)]/80 hover:text-[var(--gold-400)] break-all"
              >
                <Mail size={15} className="mt-0.5 text-[var(--gold-400)]" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Altburger+Str.+13+75365+Calw"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-[var(--cream-200)]/80 hover:text-[var(--gold-400)]"
              >
                <MapPin size={15} className="mt-0.5 text-[var(--gold-400)]" />
                <span>
                  {contact.street}
                  <br />
                  {contact.zip} {contact.city}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-[var(--gold-400)] mb-5">
            Öffnungszeiten
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-400)]/80 mb-3">
            An Aktionstagen
          </p>
          <ul className="space-y-2.5 text-sm">
            {contact.hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between gap-6 text-[var(--cream-200)]/80"
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
            &copy; {new Date().getFullYear()} Löwengold Calw. Alle Rechte
            vorbehalten.
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
