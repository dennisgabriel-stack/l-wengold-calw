import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger } from "@/components/reveal";
import { MagneticLink } from "@/components/button";
import { ValueCard } from "@/components/value-card";
import {
  Calendar,
  CheckCircle2,
  Clock,
  DoorOpen,
  HandCoins,
  Mail,
  Phone,
  ScanSearch,
} from "lucide-react";
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

      {/* Dates — luxury showcase right below the header */}
      <section className="relative py-16 md:py-24 px-5 sm:px-8 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
        <div className="absolute inset-x-0 top-0 h-2/3 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.28),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_15%_95%,rgba(192,136,104,0.22),transparent_55%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,177,119,0.6) 0 1px, transparent 1px 120px)",
          }}
          aria-hidden
        />
        <div className="panel-fade-top" aria-hidden />
        <div className="panel-fade-bottom" aria-hidden />

        <div className="relative mx-auto max-w-6xl">
          <AktionstageCards />

          <Reveal delay={0.3} className="mt-12">
            <div className="mx-auto max-w-2xl rounded-2xl bg-[rgba(13,9,5,0.55)] backdrop-blur-md border border-[var(--gold-400)]/25 px-6 py-4">
              <p className="text-center text-xs md:text-sm text-[var(--cream-100)]/80 leading-relaxed">
                Die Termine stehen unter dem Vorbehalt von Änderungen. Bitte
                rufen Sie uns vorab an oder schreiben Sie eine kurze E-Mail,
                damit wir Sie aktuell informieren können.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works — dark ink panel with 3 luxury 3D plaques */}
      <section className="relative py-24 md:py-32 px-5 sm:px-8 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
        <div className="absolute inset-x-0 top-0 h-2/3 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.22),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_85%_95%,rgba(192,136,104,0.22),transparent_55%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 -z-10 bg-[radial-gradient(ellipse_at_5%_50%,rgba(37,52,40,0.22),transparent_60%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,177,119,0.6) 0 1px, transparent 1px 120px)",
          }}
          aria-hidden
        />
        <div className="panel-fade-top" aria-hidden />
        <div className="panel-fade-bottom" aria-hidden />

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-6">
                <span className="mr-2">✦</span>So läuft ein Aktionstag ab
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[var(--cream-100)] max-w-3xl mx-auto">
                In drei Schritten zur{" "}
                <span className="text-gold-shimmer italic">Barauszahlung</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-[var(--cream-200)]/80 leading-relaxed">
                Ohne Termin. Ohne Verpflichtung. Mit voller Transparenz.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-3">
            <ValueCard
              index={0}
              icon={<DoorOpen size={24} strokeWidth={1.8} />}
              title="Vorbeikommen"
              body="Bringen Sie Ihre Schmuckstücke, Münzen, Barren, Antiquitäten und – falls vorhanden – Zertifikate oder Originalverpackungen mit."
            />
            <ValueCard
              index={1}
              icon={<ScanSearch size={24} strokeWidth={1.8} />}
              title="Kostenlos bewerten"
              body="Wir analysieren Feingehalt, Gewicht und Marktwert. Sie erfahren sofort, was Ihre Stücke wirklich wert sind."
            />
            <ValueCard
              index={2}
              icon={<HandCoins size={24} strokeWidth={1.8} />}
              title="Sofort in bar"
              body="Entscheiden Sie sich für den Verkauf, zahlen wir den vereinbarten Preis direkt und transparent in bar aus."
            />
          </Stagger>
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
