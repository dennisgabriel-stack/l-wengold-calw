import Link from "next/link";
import { Coins, Gem, Sparkles, BadgeCheck, Clock, MapPin } from "lucide-react";
import { Hero } from "./_sections/hero";
import { MagneticLink } from "@/components/button";
import { Reveal, Stagger } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Marquee } from "@/components/marquee";
import { Divider, Ornament } from "@/components/ornaments";
import { ServiceCard } from "@/components/service-card";
import { FloatingTag } from "@/components/floating-tag";
import { contact, services } from "@/lib/data";
import { ParallaxTiles } from "./_sections/parallax-tiles";
import { SingleEarringSection } from "./_sections/single-earring";
import { SmartImage } from "@/components/smart-image";
import { collage } from "@/lib/images";

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

      <section className="relative py-28 md:py-40 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
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

            <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-4">
              <MagneticLink href="/leistungen" withArrow>
                Jetzt entdecken
              </MagneticLink>
              <MagneticLink href="/kontakt" variant="outline" withArrow>
                Termin vereinbaren
              </MagneticLink>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5 relative" y={40}>
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-soft)] bg-gradient-to-br from-[var(--gold-400)] via-[var(--gold-500)] to-[var(--walnut-800)]">
              <SmartImage
                src={collage.src}
                alt={collage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              {/* Warm overlay to blend with page */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso-900)]/40 via-transparent to-[var(--gold-400)]/10 pointer-events-none" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <FloatingTag delay={0.6}>
                    <Sparkles size={12} /> 999er Feingold
                  </FloatingTag>
                </div>
                <div>
                  <FloatingTag delay={1.2}>
                    <Coins size={12} /> Krügerrand, Maple Leaf, Vreneli…
                  </FloatingTag>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-28 md:py-36 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Unsere Leistungen"
            title={
              <>
                Drei Versprechen –{" "}
                <span className="text-gold-shimmer">ein klares Wort</span>
              </>
            }
            lead="Von der Bewertung bis zur Barauszahlung begleiten wir Sie mit Sachverstand, Diskretion und einer Leidenschaft fürs Detail."
          />

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

      <ParallaxTiles />

      <section className="relative py-28 md:py-36 px-5 sm:px-8 bg-[var(--cream-100)]">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Was wir ankaufen"
              title={
                <>
                  Edelmetalle, Edelsteine,
                  <br />
                  <em className="italic text-[var(--gold-600)]">Antiquitäten</em>{" "}
                  u.v.m.
                </>
              }
              lead="Gold, Silber, Platin, Palladium – in allen Feingehalten. Edelsteine, Münzen, Tafelsilber, Antiquitäten und komplette Erbschaften bewerten wir fair und transparent."
            />
            <Reveal delay={0.25} className="mt-8">
              <MagneticLink href="/leistungen" variant="outline" withArrow>
                Vollständigen Katalog ansehen
              </MagneticLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {[
              {
                icon: Gem,
                title: "Edelmetalle",
                items: "Gold · Silber · Platin · Palladium",
              },
              {
                icon: Sparkles,
                title: "Edelsteine",
                items: "Diamant · Brilliant · Rubin · Saphir · Smaragd",
              },
              {
                icon: Coins,
                title: "Münzen",
                items: "Krügerrand · Maple Leaf · Vreneli · Philharmoniker",
              },
              {
                icon: BadgeCheck,
                title: "Antiquitäten",
                items: "Ölgemälde · Teppiche · Zinn · Schreib- & Nähmaschinen · Briefmarken · Möbel",
              },
            ].map((tile, i) => (
              <Reveal
                key={tile.title}
                delay={i * 0.08}
                className="group p-7 bg-[var(--cream-50)] rounded-2xl border border-[var(--border)] hover:border-[var(--gold-400)] transition-colors"
              >
                <tile.icon
                  size={26}
                  className="text-[var(--gold-600)] transition-transform group-hover:-translate-y-0.5"
                />
                <h3 className="mt-4 font-display text-2xl text-[var(--espresso-800)]">
                  {tile.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--espresso-700)]/80 leading-relaxed">
                  {tile.items}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SingleEarringSection />

      <section className="relative py-28 md:py-36 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--espresso-900)]" />
        <div className="absolute inset-0 bg-paper-dark opacity-95" />
        <Ornament className="absolute -top-6 left-1/2 -translate-x-1/2 w-56 opacity-40" />

        <div className="relative mx-auto max-w-5xl text-center text-[var(--cream-100)]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-6">
              ✦ Aktionstage
            </p>
          </Reveal>
          <Reveal delay={0.1} as="h2">
            <span className="font-display text-5xl md:text-7xl leading-[1.05] text-gold-shimmer block">
              Unsere nächsten Aktionstage
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-[var(--cream-200)]/85 max-w-2xl mx-auto leading-relaxed">
              An unseren Aktionstagen öffnen wir für Sie das Tor zu unserer
              Bewertungsstube. Wir schätzen Ihren Schmuck kostenlos, analysieren
              Feingehalte und zahlen sofort in bar aus.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <MagneticLink
              href="/aktionstage"
              variant="outline"
              className="!border-[var(--gold-400)] !text-[var(--gold-400)] hover:!bg-[var(--gold-400)]/10"
              withArrow
            >
              Termine ansehen
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
