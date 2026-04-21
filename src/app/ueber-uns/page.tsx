import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { MagneticLink } from "@/components/button";
import { Divider } from "@/components/ornaments";
import { LogoMark } from "@/components/logo";
import { BadgeCheck, Heart, HandCoins, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns – Ihr Vertrauen ist unser Antrieb",
  description:
    "Mit jahrelanger Erfahrung im Schätzen, Ankaufen und Handel von Gold- und Silberschmuck sowie Antiquitäten ist Löwengold Calw die erste Adresse für Schmuckliebhaber und Sammler.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über Löwengold Calw"
        title={
          <>
            Ihr <em className="italic text-[var(--gold-600)]">Vertrauen</em> in
            uns
            <br /> ist unser <span className="text-gold-shimmer">Antrieb.</span>
          </>
        }
        lead="Expertise und Leidenschaft spiegeln sich in jedem Schmuckstück wider.
        Lernen Sie unser Haus kennen."
      />

      {/* Story block */}
      <section className="relative py-20 md:py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-32 p-10 rounded-3xl bg-[var(--cream-100)] border border-[var(--border)]">
              <LogoMark className="!h-auto !w-full max-w-xs mx-auto" />
              <div className="gold-divider my-8" />
              <p className="text-center text-sm uppercase tracking-[0.3em] text-[var(--gold-600)]">
                Seit vielen Jahren in Calw
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-[var(--espresso-800)]">
                Wir schätzen und kaufen{" "}
                <em className="italic text-[var(--gold-600)]">Gold, Silber, Schmuck</em>{" "}
                und vieles mehr.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-[var(--espresso-700)]/90">
                Löwengold Calw verfügt über ein Team erfahrener Experten mit
                einem breiten Fachwissen im Schätzen und Ankaufen von Gold-
                und Silberschmuck sowie Antiquitäten. Wir sind stolz darauf,
                unseren Kunden hochwertige Produkte und erstklassigen Service
                zu bieten. Besuchen Sie uns.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-[var(--espresso-700)]/90">
                Mit jahrelanger Erfahrung im Schätzen, Ankaufen und Handel von
                Gold- und Silberschmuck sowie Antiquitäten ist Löwengold Calw die
                erste Adresse für Schmuckliebhaber und Sammler im nördlichen
                Schwarzwald. Unsere Expertise und Leidenschaft spiegeln sich in
                jedem Schmuckstück wider.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-lg leading-relaxed text-[var(--espresso-700)]/90">
                Vertrauen Sie auf unser Fachwissen und lassen Sie sich von unserem
                Service überzeugen. Besuchen Sie uns noch heute und erleben Sie
                exzellente Handwerkskunst und erstklassige Beratung – fair,
                transparent, diskret.
              </p>
            </Reveal>

            <Divider />

            <Reveal delay={0.2}>
              <blockquote className="relative p-10 rounded-3xl bg-[var(--espresso-900)] text-[var(--cream-100)] overflow-hidden">
                <div className="absolute inset-0 bg-paper-dark opacity-90" />
                <span className="absolute -top-6 left-6 font-display text-[140px] leading-none text-[var(--gold-400)]/40">
                  &ldquo;
                </span>
                <p className="relative font-display text-2xl md:text-3xl leading-snug italic">
                  Entscheidend ist nicht das Aussehen – sondern Edelmetall-Gehalt
                  und Gewicht. Oft lohnt sich der Verkauf mehr, als viele denken.
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.3} className="mt-10">
              <MagneticLink href="/aktionstage" withArrow>
                Aktionstage ansehen
              </MagneticLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-28 px-5 sm:px-8 bg-[var(--cream-100)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-600)] mb-5">
              ✦ Unser Versprechen
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--espresso-800)] leading-[1.05] max-w-3xl">
              Vier Werte, die wir jeden Tag leben.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Leidenschaft",
                body: "Jedes Stück erzählt eine Geschichte – und wir hören genau zu.",
              },
              {
                icon: BadgeCheck,
                title: "Expertise",
                body: "Feingehalte, Legierungen, Punzen, Zertifikate – wir kennen die Details.",
              },
              {
                icon: HandCoins,
                title: "Transparenz",
                body: "Klare Bewertung, faire Preise, sofortige Auszahlung in bar.",
              },
              {
                icon: Sparkles,
                title: "Diskretion",
                body: "Ihre Werte und Ihre Privatsphäre bleiben bei uns geschützt.",
              },
            ].map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="p-8 rounded-3xl bg-[var(--cream-50)] border border-[var(--border)] hover:border-[var(--gold-400)] transition-colors"
              >
                <v.icon className="text-[var(--gold-600)]" size={28} />
                <h3 className="mt-5 font-display text-2xl text-[var(--espresso-800)]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[var(--espresso-700)]/85 text-[15px] leading-relaxed">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-5 sm:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[var(--espresso-800)]">
              Erleben Sie uns.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-[var(--espresso-700)]/90">
              Besuchen Sie uns an unseren Aktionstagen oder vereinbaren Sie einen
              persönlichen Termin.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticLink href="/kontakt" withArrow>
              Termin vereinbaren
            </MagneticLink>
            <MagneticLink href="/leistungen" variant="outline" withArrow>
              Leistungen ansehen
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
