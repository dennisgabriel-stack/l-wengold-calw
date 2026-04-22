import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger } from "@/components/reveal";
import { MagneticLink } from "@/components/button";
import { Divider } from "@/components/ornaments";
import { LogoMark } from "@/components/logo";
import { ValueCard } from "@/components/value-card";
import { BadgeCheck, Heart, HandCoins, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns – Ihr Vertrauen ist unser Antrieb",
  description:
    "Mit jahrelanger Erfahrung im Schätzen, Ankaufen und Handel von Gold- und Silberschmuck sowie Antiquitäten ist Löwengold Calw die erste Adresse für Schmuckliebhaber und Sammler.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Logo plaque on deep ink panel — first element, maximum contrast */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-5 sm:px-8 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
        <div className="absolute inset-x-0 top-0 h-2/3 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.3),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(192,136,104,0.18),transparent_55%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,177,119,0.6) 0 1px, transparent 1px 120px)",
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="relative p-10 md:p-14 rounded-[32px] bg-gradient-to-br from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-200)] border border-[var(--gold-500)]/45 shadow-[0_40px_80px_-20px_rgba(13,9,5,0.7),0_10px_30px_-10px_rgba(184,137,74,0.5)]">
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent rounded-t-[32px]"
                aria-hidden
              />
              <LogoMark className="!h-auto !w-full max-w-sm mx-auto" priority />
              <div className="gold-divider my-8" />
              <p className="text-center text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--gold-700)]">
                Seit vielen Jahren in Calw
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageHeader
        eyebrow="Über Löwengold Calw"
        showLogo={false}
        padTop={false}
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

      {/* Story block — single centred column since the plaque moved up */}
      <section className="relative py-16 md:py-20 px-5 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-[var(--espresso-800)]">
              Wir schätzen und kaufen{" "}
              <em className="italic text-[var(--gold-600)]">
                Gold, Silber, Schmuck
              </em>{" "}
              und vieles mehr.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-[var(--espresso-700)]/90">
              Löwengold Calw verfügt über ein Team erfahrener Experten mit
              einem breiten Fachwissen im Schätzen und Ankaufen von Gold- und
              Silberschmuck sowie Antiquitäten. Wir sind stolz darauf, unseren
              Kunden hochwertige Produkte und erstklassigen Service zu bieten.
              Besuchen Sie uns.
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
      </section>

      {/* Values — ivory plaques on deep ink panel with 3D tilt + animated icons */}
      <section className="relative py-24 md:py-32 px-5 sm:px-8 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
        <div className="absolute inset-x-0 top-0 h-2/3 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.22),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_15%_95%,rgba(192,136,104,0.2),transparent_55%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 -z-10 bg-[radial-gradient(ellipse_at_95%_50%,rgba(37,52,40,0.22),transparent_60%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,177,119,0.6) 0 1px, transparent 1px 120px)",
          }}
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-28 -z-10 bg-gradient-to-b from-[var(--cream-50)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 -z-10 bg-gradient-to-t from-[var(--cream-50)] to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-6">
                <span className="mr-2">✦</span>Unser Versprechen
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[var(--cream-100)] max-w-3xl mx-auto">
                Vier Werte, die wir{" "}
                <span className="text-gold-shimmer italic">jeden Tag leben</span>.
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart size={24} strokeWidth={1.8} />,
                title: "Leidenschaft",
                body: "Jedes Stück erzählt eine Geschichte – und wir hören genau zu.",
              },
              {
                icon: <BadgeCheck size={24} strokeWidth={1.8} />,
                title: "Expertise",
                body: "Feingehalte, Legierungen, Punzen, Zertifikate – wir kennen die Details.",
              },
              {
                icon: <HandCoins size={24} strokeWidth={1.8} />,
                title: "Transparenz",
                body: "Klare Bewertung, faire Preise, sofortige Auszahlung in bar.",
              },
              {
                icon: <Sparkles size={24} strokeWidth={1.8} />,
                title: "Diskretion",
                body: "Ihre Werte und Ihre Privatsphäre bleiben bei uns geschützt.",
              },
            ].map((v, i) => (
              <ValueCard
                key={v.title}
                index={i}
                title={v.title}
                body={v.body}
                icon={v.icon}
              />
            ))}
          </Stagger>
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
