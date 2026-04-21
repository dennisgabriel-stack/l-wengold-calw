import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger } from "@/components/reveal";
import { MagneticLink } from "@/components/button";
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

      {/* Gold block */}
      <Category
        accent="gold"
        title="Gold & Goldschmuck"
        intro="Goldringe, Trauringe, Goldketten, Panzerketten, Anhänger, Goldarmbänder, Armreifen, Fußketten, Ohrringe, Creolen, Ohrstecker, Broschen, Manschettenknöpfe · Altgold, Bruchgold, Zahngold, Goldbarren, Goldmünzen, Altschmuck, Golduhren, Goldschmiedeabfälle."
        items={goldItems}
        purities={goldPurities}
        purityLabel="Feingehalte Gold"
      />

      {/* Silver block */}
      <Category
        accent="silver"
        title="Silber & Silberschmuck"
        intro="Silberschmuck, Altsilber, Bruchsilber, Silberfiguren, Silberbarren, Silbermünzen, Silberuhren, Tafelsilber, Silberbesteck, Silbertablett."
        items={silverItems}
        purities={silverPurities}
        purityLabel="Feingehalte Silber"
      />

      {/* Platin / Palladium */}
      <section className="relative py-24 md:py-28 px-5 sm:px-8 bg-[var(--cream-100)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl grid gap-16 md:grid-cols-2">
          <MetalCard
            title="Platin"
            description="Eines der seltensten und härtesten Edelmetalle. Besonders in Hochzeitsschmuck und Investment-Barren beliebt."
            purities={platinPurities}
          />
          <MetalCard
            title="Palladium"
            description="Leicht, hell und korrosionsbeständig. In der Schmuckindustrie zunehmend geschätzt – bei uns fair bewertet."
            purities={palladiumPurities}
          />
        </div>
      </section>

      {/* Gems */}
      <Category
        accent="gem"
        title="Edelsteine"
        intro="Diamant, Brilliant, Opal, Aquamarin, Granat, Rubin, Saphir, Smaragd, u.v.m."
        items={gems}
      />

      {/* Coins */}
      <Category
        accent="coins"
        title="Münzen"
        intro="Klassische Goldmünzen und internationale Anlagemünzen – wir kennen die Prägestätten und zahlen zum Tageskurs."
        items={coins}
      />

      {/* Antiques */}
      <Category
        accent="wood"
        title="Antiquitäten & Erbschaften"
        intro="Modeschmuck, Erbschaften aller Art und Antiquitäten wie Ölgemälde, Teppiche, Zinn, Schreibmaschinen, antike Geldscheine, Briefmarken und Möbel."
        items={antiques}
      />

      {/* Documents hint */}
      <section className="relative py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-5xl leading-tight text-[var(--espresso-800)]">
              Bringen Sie <em className="italic text-[var(--gold-600)]">Unterlagen</em>{" "}
              mit – sie erhöhen den Wert.
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg text-[var(--espresso-700)]/90 leading-relaxed">
              Originalverpackung, Zertifikate, Kaufquittungen, Zwischenberichte –
              jedes Detail kann entscheidend sein:
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 text-[var(--espresso-700)] italic max-w-xl mx-auto">
              Hersteller · Gehäuse · Kaufjahr · Karat · Diamantenform · Reinheit ·
              Farbe · Schliff · Zertifikat
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-10">
            <MagneticLink href="/kontakt" withArrow>
              Kommen Sie bei uns vorbei oder kontaktieren Sie uns
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Category({
  title,
  intro,
  items,
  purities,
  purityLabel,
  accent,
}: {
  title: string;
  intro: string;
  items: string[];
  purities?: string[];
  purityLabel?: string;
  accent: "gold" | "silver" | "gem" | "coins" | "wood";
}) {
  const accents = {
    gold: "from-[var(--gold-400)]/20 to-transparent",
    silver: "from-slate-300/30 to-transparent",
    gem: "from-[var(--forest-600)]/15 to-transparent",
    coins: "from-[var(--gold-600)]/15 to-transparent",
    wood: "from-[var(--walnut-700)]/15 to-transparent",
  } as const;

  return (
    <section className="relative py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-b ${accents[accent]}`}
      />
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[var(--espresso-900)]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--espresso-700)]/90 leading-relaxed">
              {intro}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8 space-y-10">
          <ItemCloud items={items} />
          {purities && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-600)] mb-4">
                {purityLabel}
              </p>
              <Stagger className="flex flex-wrap gap-2">
                {purities.map((p) => (
                  <PurityBar key={p} label={p} />
                ))}
              </Stagger>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function MetalCard({
  title,
  description,
  purities,
}: {
  title: string;
  description: string;
  purities: string[];
}) {
  return (
    <Reveal className="p-10 rounded-3xl bg-[var(--cream-50)] border border-[var(--border)] shadow-[var(--shadow-soft)]">
      <h3 className="font-display text-4xl text-[var(--espresso-800)]">
        {title}
      </h3>
      <p className="mt-4 text-[var(--espresso-700)]/90 leading-relaxed">
        {description}
      </p>
      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-600)] mb-4">
          Feingehalte
        </p>
        <div className="flex flex-wrap gap-2">
          {purities.map((p) => (
            <PurityBar key={p} label={p} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
