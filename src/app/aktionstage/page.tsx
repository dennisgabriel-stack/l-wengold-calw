import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger } from "@/components/reveal";
import { MagneticLink } from "@/components/button";
import { Divider } from "@/components/ornaments";
import { Calendar, CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";
import { AktionstageCards } from "./_cards";

export const metadata: Metadata = {
  title: "Aktionstage – kostenlose Bewertung und Barauszahlung",
  description:
    "An unseren Aktionstagen bewerten wir Ihren Schmuck, Ihre Antiquitäten und Edelmetalle kostenlos und zahlen Sie bei Verkauf sofort in bar aus.",
};

export default function AktionstagePage() {
  return (
    <>
      <PageHeader
        eyebrow="Aktionstage"
        title={
          <>
            Unsere nächsten <span className="text-gold-shimmer">Aktionstage</span>
          </>
        }
        lead="An unseren Aktionstagen öffnen wir für Sie das Tor zur Bewertungsstube.
        Wir schätzen Ihren Schmuck, Ihre Münzen und Antiquitäten kostenlos –
        ganz ohne Termin."
      />

      {/* How it works */}
      <section className="relative py-20 md:py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-600)] mb-5">
              ✦ So läuft ein Aktionstag ab
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--espresso-800)] leading-[1.05] max-w-3xl">
              In drei Schritten zur <em className="italic text-[var(--gold-600)]">Barauszahlung</em>.
            </h2>
          </Reveal>

          <Divider className="my-14" />

          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "Vorbeikommen",
                body: "Bringen Sie Ihre Schmuckstücke, Münzen, Barren, Antiquitäten und – falls vorhanden – Zertifikate oder Originalverpackungen mit.",
              },
              {
                n: 2,
                title: "Kostenlos bewerten",
                body: "Wir analysieren Feingehalt, Gewicht und Marktwert. Sie erfahren sofort, was Ihre Stücke wirklich wert sind.",
              },
              {
                n: 3,
                title: "Sofort in bar",
                body: "Entscheiden Sie sich für den Verkauf, zahlen wir den vereinbarten Preis direkt und transparent in bar aus.",
              },
            ].map((s) => (
              <Reveal
                key={s.n}
                className="relative p-8 rounded-3xl bg-[var(--cream-50)] border border-[var(--border)] hover:shadow-[var(--shadow-gold)] transition-shadow"
              >
                <span className="absolute top-6 right-6 font-display text-6xl text-[var(--gold-400)]/25 leading-none">
                  0{s.n}
                </span>
                <h3 className="font-display text-3xl text-[var(--espresso-800)]">
                  {s.title}
                </h3>
                <div className="gold-divider my-4" />
                <p className="text-[var(--espresso-700)]/85 leading-relaxed">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Dates */}
      <section className="relative py-20 md:py-28 px-5 sm:px-8 bg-[var(--espresso-900)] text-[var(--cream-100)] overflow-hidden">
        <div className="absolute inset-0 bg-paper-dark opacity-95" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-5">
              ✦ Kommende Termine
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-gold-shimmer max-w-3xl">
              Notieren Sie sich diese Daten.
            </h2>
          </Reveal>

          <div className="mt-14">
            <AktionstageCards />
          </div>

          <Reveal delay={0.2} className="mt-10">
            <p className="text-sm text-[var(--cream-200)]/65 max-w-2xl">
              Die Termine stehen unter dem Vorbehalt von Änderungen. Bitte rufen
              Sie uns vorab an oder schreiben Sie eine kurze E-Mail, damit wir
              Sie aktuell informieren können.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hours + contact */}
      <section className="relative py-20 md:py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">
          <Reveal className="p-10 rounded-3xl bg-[var(--cream-50)] border border-[var(--border)]">
            <div className="flex items-center gap-3 text-[var(--gold-600)]">
              <Clock size={20} />
              <p className="text-xs uppercase tracking-[0.3em]">
                Öffnungszeiten – an Aktionstagen
              </p>
            </div>
            <h3 className="mt-4 font-display text-3xl text-[var(--espresso-800)]">
              So finden Sie zu uns
            </h3>
            <ul className="mt-6 space-y-3 text-lg tabular-nums">
              {contact.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 border-b border-[var(--border)] pb-3"
                >
                  <span className="text-[var(--espresso-800)]">{h.day}</span>
                  <span className="text-[var(--espresso-700)]">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="p-10 rounded-3xl bg-[var(--cream-100)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 text-[var(--gold-600)]">
              <Calendar size={20} />
              <p className="text-xs uppercase tracking-[0.3em]">
                Bringen Sie mit
              </p>
            </div>
            <h3 className="mt-4 font-display text-3xl text-[var(--espresso-800)]">
              Checkliste
            </h3>
            <ul className="mt-6 space-y-3">
              {[
                "Ihre Schmuckstücke, Münzen oder Antiquitäten",
                "Originalverpackung (falls vorhanden)",
                "Zertifikate, Kaufquittungen, Zwischenberichte",
                "Einen amtlichen Ausweis (für die Barauszahlung)",
              ].map((i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[var(--espresso-800)]/95"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[var(--gold-600)] mt-0.5 shrink-0"
                  />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mx-auto max-w-5xl mt-16 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl text-[var(--espresso-800)]">
              Fragen vorab?
            </h3>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] hover:border-[var(--gold-500)] text-[var(--espresso-800)]"
            >
              <Phone size={16} /> {contact.phone}
            </a>
            <a
              href={`mailto:${contact.emailRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] hover:border-[var(--gold-500)] text-[var(--espresso-800)]"
            >
              <Mail size={16} /> {contact.email}
            </a>
            <MagneticLink href="/kontakt" withArrow>
              Nachricht senden
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
