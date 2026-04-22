import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { Hero } from "./_sections/hero";
import { MagneticLink } from "@/components/button";
import { Reveal, Stagger } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Marquee } from "@/components/marquee";
import { Divider, Ornament } from "@/components/ornaments";
import { ServiceCard } from "@/components/service-card";
import { contact, services } from "@/lib/data";
import { SingleEarringSection } from "./_sections/single-earring";
import { EditorialQuote } from "./_sections/editorial-quote";
import { WhatWeBuy } from "./_sections/what-we-buy";
import { SmartImage } from "@/components/smart-image";
import { aktionstageBanner } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        aria-hidden
        className="relative border-y border-[var(--border)] bg-[var(--cream-100)]/70"
      >
        <Marquee
          items={[
            "Goldankauf",
            "Silberankauf",
            "Edelsteine",
            "Antiquitäten",
            "Münzen",
            "Tafelsilber",
            "Bruchgold",
            "Erbschaften",
          ]}
          className="text-[var(--espresso-700)]"
        />
      </section>

      <section className="relative py-24 md:py-32 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Willkommen in Calw"
            title={
              <>
                Eine Welt voller glänzender
                <br />
                <span className="text-gold-shimmer">Schätze</span> und zeitloser
                Eleganz.
              </>
            }
            lead={
              <>
                Löwengold Calw ist Ihre erste Wahl und zuverlässiger Partner für
                den Ankauf von Edelmetallen wie Gold und Silber aller Art sowie
                Antiquitäten. Verkaufen Sie uns Ihren Schmuck, Ihre Münzen und
                vieles mehr – bei sofortiger Barauszahlung.
              </>
            }
          />

          <Reveal delay={0.25} className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticLink href="/leistungen" withArrow>
              Jetzt entdecken
            </MagneticLink>
            <MagneticLink href="/kontakt" variant="outline" withArrow>
              Termin vereinbaren
            </MagneticLink>
          </Reveal>
        </div>
      </section>

      <section className="relative py-28 md:py-40 px-5 sm:px-8 overflow-hidden isolate">
        {/* Luxurious layered background for the 3 service cards */}
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
        {/* Ambient photo-light (top) */}
        <div className="absolute inset-x-0 top-0 h-2/3 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.28),transparent_60%)]" />
        {/* Rose bloom (bottom left) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_15%_95%,rgba(192,136,104,0.22),transparent_55%)]" />
        {/* Forest shadow (right) */}
        <div className="absolute inset-y-0 right-0 w-1/2 -z-10 bg-[radial-gradient(ellipse_at_95%_50%,rgba(37,52,40,0.25),transparent_60%)]" />
        {/* Faint diagonal gold lines */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,177,119,0.6) 0 1px, transparent 1px 120px)",
          }}
          aria-hidden
        />
        {/* Soft top + bottom edge fade so it blends into the cream pages */}
        <div className="panel-fade-top" aria-hidden />
        <div className="panel-fade-bottom" aria-hidden />

        <div className="mx-auto max-w-7xl">
          <div className="text-[var(--cream-100)]">
            <div className="text-center">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--gold-400)] mb-6">
                <span className="mr-2">✦</span>Unsere Leistungen
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-[var(--cream-100)]">
                Drei Versprechen –{" "}
                <span className="text-gold-shimmer italic">
                  ein klares Wort
                </span>
              </h2>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-[var(--cream-200)]/80 leading-relaxed">
                Von der Bewertung bis zur Barauszahlung begleiten wir Sie mit
                Sachverstand, Diskretion und einer Leidenschaft fürs Detail.
              </p>
            </div>
          </div>

          <Divider className="my-16" />

          <Stagger className="grid gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.key}
                index={i}
                title={s.title}
                lead={s.lead}
                body={s.body}
              />
            ))}
          </Stagger>
        </div>
      </section>

      <EditorialQuote />

      <WhatWeBuy />

      <SingleEarringSection />

      <section className="relative py-28 md:py-40 px-5 sm:px-8 overflow-hidden isolate">
        {/* Full-bleed photo background */}
        <SmartImage
          src={aktionstageBanner.src}
          alt={aktionstageBanner.alt}
          fill
          sizes="100vw"
          className="object-cover -z-10"
        />
        {/* Dark overlay + warm gold mix */}
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]/82" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,177,119,0.32),transparent_65%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_85%,rgba(192,136,104,0.18),transparent_55%)]" />
        <Ornament className="absolute -top-6 left-1/2 -translate-x-1/2 w-56 opacity-40" />

        <div className="relative mx-auto max-w-5xl text-center text-[var(--cream-100)]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-6">
              ✦ Aktionstage
            </p>
          </Reveal>
          <Reveal delay={0.1} as="h2">
            <span className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-gold-shimmer block">
              Unsere nächsten Aktionstage
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-[var(--cream-200)]/90 max-w-2xl mx-auto leading-relaxed">
              An unseren Aktionstagen öffnen wir für Sie das Tor zu unserer
              Bewertungsstube. Wir schätzen Ihren Schmuck kostenlos, analysieren
              Feingehalte und zahlen sofort in bar aus.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticLink
              href="/aktionstage"
              className="!bg-[var(--gold-500)] !text-[var(--espresso-900)] hover:!bg-[var(--gold-400)] !border-[var(--gold-500)]"
              withArrow
            >
              Termine ansehen
            </MagneticLink>
            <MagneticLink
              href="/kontakt"
              variant="outline"
              className="!border-[var(--gold-400)] !text-[var(--gold-400)] hover:!bg-[var(--gold-400)]/10"
              withArrow
            >
              Termin anfragen
            </MagneticLink>
          </Reveal>
        </div>
      </section>

      <section className="relative py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-[var(--espresso-800)]">
              Besuchen Sie uns
              <br />
              <span className="text-gold-shimmer">im Herzen von Calw.</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--espresso-700)]/90 max-w-xl leading-relaxed">
              Mitten in der Altstadt von Calw im nördlichen Schwarzwald – ein
              Besuch lohnt sich auch aus Nagold, Bad Wildbad, Pforzheim oder
              Stuttgart.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-[var(--border)] overflow-hidden bg-[var(--cream-50)] shadow-[var(--shadow-soft)]">
              <div className="p-8 space-y-6">
                <InfoRow
                  icon={<MapPin size={18} className="text-[var(--gold-600)]" />}
                  label="Adresse"
                >
                  {contact.street}
                  <br />
                  {contact.zip} {contact.city}
                </InfoRow>
                <InfoRow
                  icon={<Clock size={18} className="text-[var(--gold-600)]" />}
                  label="Öffnungszeiten – an Aktionstagen"
                >
                  <ul className="space-y-1 tabular-nums">
                    {contact.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </InfoRow>
                <div className="flex flex-wrap gap-4 pt-2">
                  <MagneticLink href="/kontakt" withArrow>
                    Kontakt aufnehmen
                  </MagneticLink>
                  <Link
                    href="https://maps.google.com/?q=Altburger+Str.+13+75365+Calw"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[var(--gold-600)] link-underline text-sm self-center"
                  >
                    Route planen →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-600)] mb-1.5">
          {label}
        </p>
        <div className="text-[var(--espresso-800)]">{children}</div>
      </div>
    </div>
  );
}
