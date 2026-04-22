import type { Metadata } from "next";
import { Coins, Crown, Diamond, Scroll, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger } from "@/components/reveal";
import { MagneticLink } from "@/components/button";
import { ValueCard } from "@/components/value-card";
import {
  goldItems,
  goldPurities,
  silverItems,
  silverPurities,
  platinPurities,
  palladiumPurities,
  gems,
  antiques,
  coins,
} from "@/lib/data";
import { ItemCloud } from "./_item-cloud";
import { PurityBar } from "./_purity-bar";

export const metadata: Metadata = {
  title: "Leistungen – Gold, Silber, Antiquitäten, Münzen",
  description:
    "Wir bewerten und kaufen an: Gold (333–999), Silber (333–999), Platin, Palladium, Edelsteine, Antiquitäten, Tafelsilber und internationale Münzen.",
};

type Category = {
  title: string;
  intro: string;
  items: string[];
  purities?: string[];
  purityLabel?: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    title: "Gold & Goldschmuck",
    intro:
      "Vom klassischen Ehering bis zum Goldbarren – wir bewerten jedes Stück nach Feingehalt und Gewicht, in allen Legierungen von 333er bis 999er Feingold. Auch Bruchgold, Zahngold und Goldschmiedeabfälle.",
    items: goldItems,
    purities: goldPurities,
    purityLabel: "Feingehalte Gold",
    icon: <Crown size={26} strokeWidth={1.8} />,
  },
  {
    title: "Silber & Silberschmuck",
    intro:
      "Tafelsilber, Besteck, Figuren und alter Silberschmuck sind oft mehr wert, als Sie denken. Entscheidend sind Feingehalt und Gewicht – von 333er bis 999er Feinsilber.",
    items: silverItems,
    purities: silverPurities,
    purityLabel: "Feingehalte Silber",
    icon: <Sparkles size={26} strokeWidth={1.8} />,
  },
  {
    title: "Edelsteine",
    intro:
      "Funkelnde Steine gehören zu den wertvollsten Einzelstücken im Schmuckkasten. Wir prüfen Karat, Schliff, Reinheit und Farbe – Zertifikate bringen Sie am besten mit.",
    items: gems,
    icon: <Diamond size={26} strokeWidth={1.8} />,
  },
  {
    title: "Münzen",
    intro:
      "Klassische Goldmünzen und internationale Anlagemünzen – wir kennen die Prägestätten, unterscheiden Serien und Jahrgänge und zahlen zum aktuellen Tageskurs aus.",
    items: coins,
    icon: <Coins size={26} strokeWidth={1.8} />,
  },
  {
    title: "Antiquitäten & Erbschaften",
    intro:
      "Von antiken Taschenuhren bis zu kompletten Nachlässen: Wir schätzen Erbschaften sachkundig, fair und diskret – auch bei Mischbeständen aus Gemälden, Zinn, Büchern und Sammelstücken.",
    items: antiques,
    icon: <Scroll size={26} strokeWidth={1.8} />,
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Unser Angebot"
        title={
          <>
            Diese Schmuck- und Wertgegenstände
            <br />
            <span className="text-gold-shimmer italic">bewerten wir für Sie.</span>
          </>
        }
        lead="Edelmetalle, Edelsteine, Antiquitäten u.v.m. – kostenlose Bewertung an
        unseren Aktionstagen, sofortige Barauszahlung bei Verkauf."
      />

      {/* Precious metals — Platin + Palladium as dark panel with ivory plaques */}
      <section className="relative pt-[20rem] md:pt-[22rem] pb-[20rem] md:pb-[22rem] px-5 sm:px-8 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
        <div className="absolute inset-x-0 top-0 h-2/3 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.22),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_at_15%_95%,rgba(192,136,104,0.2),transparent_55%)]" />
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
          <div className="text-center mb-14">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-6">
                <span className="mr-2">✦</span>Edle Metalle
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[var(--cream-100)] max-w-3xl mx-auto">
                Platin &amp;{" "}
                <span className="text-gold-shimmer italic">Palladium</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-[var(--cream-200)]/80 leading-relaxed">
                Seltener als Gold, unverwechselbar im Glanz. Auch in allen
                Feingehalten bewerten wir diese Edelmetalle fair.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <ValueCard
              index={0}
              icon={<Crown size={24} strokeWidth={1.8} />}
              title="Platin"
              body="Eines der seltensten und härtesten Edelmetalle. Besonders in Hochzeitsschmuck und Investment-Barren beliebt."
            />
            <ValueCard
              index={1}
              icon={<Sparkles size={24} strokeWidth={1.8} />}
              title="Palladium"
              body="Leicht, hell und korrosionsbeständig. In der Schmuckindustrie zunehmend geschätzt – bei uns fair bewertet."
            />
          </Stagger>

          <div className="max-w-5xl mx-auto mt-10 grid gap-6 md:grid-cols-2">
            <PurityRow label="Platin – Feingehalte" purities={platinPurities} />
            <PurityRow
              label="Palladium – Feingehalte"
              purities={palladiumPurities}
            />
          </div>
        </div>
      </section>

      {/* Categories — each one with rich editorial layout */}
      {categories.map((c, i) => (
        <Category key={c.title} index={i} {...c} />
      ))}

      {/* Bringen Sie Unterlagen mit */}
      <section className="relative py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-5xl leading-tight text-[var(--espresso-800)]">
              Bringen Sie{" "}
              <em className="italic text-[var(--gold-600)]">Unterlagen</em> mit
              – sie erhöhen den Wert.
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg text-[var(--espresso-700)]/90 leading-relaxed">
              Originalverpackung, Zertifikate, Kaufquittungen, Zwischenberichte
              – jedes Detail kann entscheidend sein:
            </p>
          </Reveal>

          <Stagger className="mt-10 flex flex-wrap justify-center gap-2.5">
            {[
              "Hersteller",
              "Gehäuse",
              "Kaufjahr",
              "Karat",
              "Diamantenform",
              "Reinheit",
              "Farbe",
              "Schliff",
              "Zertifikat",
            ].map((t) => (
              <PurityBar key={t} label={t} />
            ))}
          </Stagger>

          <Reveal delay={0.35} className="mt-12">
            <MagneticLink href="/kontakt" withArrow>
              Kommen Sie bei uns vorbei oder kontaktieren Sie uns
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PurityRow({ label, purities }: { label: string; purities: string[] }) {
  return (
    <Reveal className="p-6 rounded-2xl bg-[rgba(13,9,5,0.55)] backdrop-blur-md border border-[var(--gold-400)]/35 shadow-[0_20px_50px_-20px_rgba(13,9,5,0.6)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-300)] mb-4">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {purities.map((p) => (
          <PurityBar key={p} label={p} />
        ))}
      </div>
    </Reveal>
  );
}

function Category({
  index,
  title,
  intro,
  items,
  purities,
  purityLabel,
  icon,
}: Category & { index: number }) {
  const alt = index % 2 === 1;
  return (
    <section className="relative py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-b ${
          alt
            ? "from-[var(--cream-50)] via-[var(--cream-100)] to-[var(--cream-50)]"
            : "from-[var(--cream-100)] via-[var(--cream-50)] to-[var(--cream-100)]"
        }`}
      />
      {/* Soft gold radial accent */}
      <div
        className={`absolute ${
          alt ? "top-0 right-0" : "top-0 left-0"
        } w-2/3 h-full -z-10 bg-[radial-gradient(ellipse_at_center,rgba(212,177,119,0.15),transparent_55%)]`}
      />

      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-start">
        {/* Intro column with animated icon medallion */}
        <div className={`lg:col-span-5 ${alt ? "lg:order-2" : ""}`}>
          <Reveal>
            <div className="flex items-center gap-5 mb-6">
              <CategoryMedallion>{icon}</CategoryMedallion>
              <p className="font-display text-sm tracking-[0.3em] text-[var(--gold-600)]">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--espresso-900)]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-[var(--espresso-700)]/90 leading-relaxed">
              {intro}
            </p>
          </Reveal>
        </div>

        {/* Item cloud + optional purity row */}
        <div className={`lg:col-span-7 space-y-10 ${alt ? "lg:order-1" : ""}`}>
          <Reveal delay={0.08}>
            <ItemCloud items={items} />
          </Reveal>
          {purities && (
            <Reveal delay={0.16}>
              <div className="p-6 rounded-2xl bg-[var(--cream-50)] border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-600)] mb-4">
                  {purityLabel}
                </p>
                <Stagger className="flex flex-wrap gap-2">
                  {purities.map((p) => (
                    <PurityBar key={p} label={p} />
                  ))}
                </Stagger>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function CategoryMedallion({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gold-300)]/25 via-[var(--gold-400)]/40 to-[var(--gold-600)]/30 border border-[var(--gold-500)]/40 text-[var(--gold-700)] shadow-[0_10px_20px_-8px_rgba(184,137,74,0.5)]">
      {children}
      <span className="absolute -inset-2 rounded-2xl bg-[var(--gold-400)]/20 blur-xl pointer-events-none" />
    </span>
  );
}

