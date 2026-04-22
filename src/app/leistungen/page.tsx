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
import { LionIcon } from "@/components/lion-icon";

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

      {/* All categories in one continuous dark luxury panel */}
      <section className="relative pt-[22rem] pb-[22rem] md:pt-[24rem] md:pb-[24rem] px-5 sm:px-8 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[var(--ink-900)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604] via-[#120b06] to-[#0a0604]" />
        <div className="absolute inset-x-0 top-0 h-[45%] -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,177,119,0.22),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(192,136,104,0.2),transparent_55%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 -z-10 bg-[radial-gradient(ellipse_at_5%_35%,rgba(37,52,40,0.2),transparent_60%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 -z-10 bg-[radial-gradient(ellipse_at_95%_65%,rgba(192,136,104,0.18),transparent_60%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,177,119,0.6) 0 1px, transparent 1px 120px)",
          }}
          aria-hidden
        />

        {/* Giant lion watermarks behind each block (subtle, staggered) */}
        <div
          className="absolute top-[12%] left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none -z-5"
          aria-hidden
        >
          <LionIcon className="w-[80vw] max-w-[720px] h-auto" />
        </div>
        <div
          className="absolute top-[50%] left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none -z-5"
          aria-hidden
        >
          <LionIcon className="w-[80vw] max-w-[720px] h-auto" />
        </div>
        <div
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none -z-5"
          aria-hidden
        >
          <LionIcon className="w-[80vw] max-w-[720px] h-auto" />
        </div>

        <div className="panel-fade-top" aria-hidden />
        <div className="panel-fade-bottom" aria-hidden />

        <div className="relative mx-auto max-w-6xl space-y-28 md:space-y-36">
          {/* 01 — Edle Metalle: Platin & Palladium */}
          <CategoryBlock
            eyebrow="01 · Edle Metalle"
            title={
              <>
                Platin &amp;{" "}
                <span className="text-gold-shimmer italic">Palladium</span>
              </>
            }
            lead="Seltener als Gold, unverwechselbar im Glanz. Auch in allen Feingehalten bewerten wir diese Edelmetalle fair."
          >
            <Stagger className="grid gap-6 md:grid-cols-2">
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

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <PurityRow label="Platin · Feingehalte" purities={platinPurities} />
              <PurityRow
                label="Palladium · Feingehalte"
                purities={palladiumPurities}
              />
            </div>
          </CategoryBlock>

          <GoldDivider />

          {/* 02 — Gold & Goldschmuck */}
          <CategoryBlock
            eyebrow="02 · Feingold"
            title={
              <>
                Gold &amp;{" "}
                <span className="text-gold-shimmer italic">Goldschmuck</span>
              </>
            }
            lead="Vom klassischen Ehering bis zum Goldbarren – wir bewerten jedes Stück nach Feingehalt und Gewicht, in allen Legierungen von 333er bis 999er Feingold. Auch Bruchgold, Zahngold und Goldschmiedeabfälle."
          >
            <Stagger className="grid gap-6 md:grid-cols-2">
              <ValueCard
                index={0}
                icon={<Crown size={24} strokeWidth={1.8} />}
                title="Gold & Goldschmuck"
                body="Ringe, Ketten, Broschen, Altgold, Zahngold, Goldbarren, Goldmünzen und Golduhren – in allen Legierungen."
              />
              <PurityRow
                label="Gold · Feingehalte"
                purities={goldPurities}
                embedded
              />
            </Stagger>

            <ItemSurface>
              <ItemCloud items={goldItems} />
            </ItemSurface>
          </CategoryBlock>

          <GoldDivider />

          {/* 03 — Silber & Silberschmuck */}
          <CategoryBlock
            eyebrow="03 · Silber"
            title={
              <>
                Silber &amp;{" "}
                <span className="text-gold-shimmer italic">Silberschmuck</span>
              </>
            }
            lead="Tafelsilber, Besteck, Figuren und alter Silberschmuck sind oft mehr wert, als Sie denken. Entscheidend sind Feingehalt und Gewicht – von 333er bis 999er Feinsilber."
          >
            <Stagger className="grid gap-6 md:grid-cols-2">
              <ValueCard
                index={0}
                icon={<Sparkles size={24} strokeWidth={1.8} />}
                title="Silber & Silberschmuck"
                body="Silberbarren, Tafelsilber, Besteck, Figuren, Münzen und Alt- wie Bruchsilber – wir analysieren präzise Feingehalt und Gewicht."
              />
              <PurityRow
                label="Silber · Feingehalte"
                purities={silverPurities}
                embedded
              />
            </Stagger>

            <ItemSurface>
              <ItemCloud items={silverItems} />
            </ItemSurface>
          </CategoryBlock>

          <GoldDivider />

          {/* 04 — Edelsteine */}
          <CategoryBlock
            eyebrow="04 · Edelsteine"
            title={
              <>
                Funkelnde{" "}
                <span className="text-gold-shimmer italic">Edelsteine</span>
              </>
            }
            lead="Diamant, Rubin, Saphir, Smaragd – wir prüfen Karat, Schliff, Reinheit und Farbe. Zertifikate und Herkunftsnachweise bringen Sie am besten mit."
          >
            <Stagger className="grid gap-6 md:grid-cols-2">
              <ValueCard
                index={0}
                icon={<Diamond size={24} strokeWidth={1.8} />}
                title="Edelsteine"
                body="Funkelnde Steine gehören zu den wertvollsten Einzelstücken im Schmuckkasten. Wir analysieren die 4C: Carat, Cut, Clarity, Colour."
              />
              <ValueCard
                index={1}
                icon={<Sparkles size={24} strokeWidth={1.8} />}
                title="Zertifikate helfen"
                body="GIA, HRD, IGI oder hauseigene Gutachten erhöhen den Schätzwert. Gern bewerten wir auch unbekannte Steine – Punzen sind keine Voraussetzung."
              />
            </Stagger>

            <ItemSurface>
              <ItemCloud items={gems} />
            </ItemSurface>
          </CategoryBlock>

          <GoldDivider />

          {/* 05 — Münzen */}
          <CategoryBlock
            eyebrow="05 · Münzen"
            title={
              <>
                Internationale{" "}
                <span className="text-gold-shimmer italic">Anlagemünzen</span>
              </>
            }
            lead="Klassische Goldmünzen und internationale Anlagemünzen – wir kennen die Prägestätten, unterscheiden Serien und Jahrgänge und zahlen zum aktuellen Tageskurs aus."
          >
            <Stagger className="grid gap-6 md:grid-cols-2">
              <ValueCard
                index={0}
                icon={<Coins size={24} strokeWidth={1.8} />}
                title="Anlagemünzen"
                body="Krügerrand, Maple Leaf, Wiener Philharmoniker, Panda, Kangaroo Nugget, American Eagle und Buffalo – fair zum Tageskurs."
              />
              <ValueCard
                index={1}
                icon={<Crown size={24} strokeWidth={1.8} />}
                title="Historische Münzen"
                body="Dukat, Vreneli, Sovereign, Libertad, Goldmark, Britannia und Münzen des Deutschen Kaiserreichs – auch seltene Jahrgänge."
              />
            </Stagger>

            <ItemSurface>
              <ItemCloud items={coins} />
            </ItemSurface>
          </CategoryBlock>

          <GoldDivider />

          {/* 06 — Antiquitäten & Erbschaften */}
          <CategoryBlock
            eyebrow="06 · Antiquitäten"
            title={
              <>
                Antiquitäten &{" "}
                <span className="text-gold-shimmer italic">Erbschaften</span>
              </>
            }
            lead="Von antiken Taschenuhren bis zu kompletten Nachlässen: Wir schätzen Erbschaften sachkundig, fair und diskret – auch bei Mischbeständen aus Gemälden, Zinn, Büchern und Sammelstücken."
          >
            <Stagger className="grid gap-6 md:grid-cols-2">
              <ValueCard
                index={0}
                icon={<Scroll size={24} strokeWidth={1.8} />}
                title="Antiquitäten"
                body="Ölgemälde, Teppiche, Zinn, Taschenuhren, Schreib- & Nähmaschinen, antike Geldscheine, Briefmarken und Möbel."
              />
              <ValueCard
                index={1}
                icon={<Sparkles size={24} strokeWidth={1.8} />}
                title="Komplette Erbschaften"
                body="Wir übernehmen die Bewertung ganzer Nachlässe – diskret, sorgsam, in einem Termin. Auch Mischbestände aus Schmuck, Münzen und Kleingeräten."
              />
            </Stagger>

            <ItemSurface>
              <ItemCloud items={antiques} />
            </ItemSurface>
          </CategoryBlock>
        </div>
      </section>

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

function CategoryBlock({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="text-center mb-10 md:mb-14">
        <Reveal>
          <div className="flex justify-center mb-5">
            <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold-300)]/20 via-[var(--gold-400)]/25 to-[var(--gold-700)]/15 border border-[var(--gold-400)]/45 shadow-[0_10px_22px_-6px_rgba(184,137,74,0.5)]">
              <LionIcon className="h-8 w-auto brightness-0 invert opacity-85" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[var(--gold-200)] animate-ambient" />
            </span>
          </div>
        </Reveal>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold-400)] mb-5">
            ✦ {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--cream-100)] max-w-3xl mx-auto">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-[var(--cream-200)]/80 leading-relaxed">
            {lead}
          </p>
        </Reveal>
      </div>
      <div className="space-y-8">{children}</div>
    </div>
  );
}

function PurityRow({
  label,
  purities,
  embedded,
}: {
  label: string;
  purities: string[];
  embedded?: boolean;
}) {
  return (
    <Reveal
      className={
        embedded
          ? "p-8 rounded-[24px] bg-[rgba(13,9,5,0.6)] backdrop-blur-md border border-[var(--gold-400)]/35 shadow-[0_20px_50px_-20px_rgba(13,9,5,0.6)]"
          : "p-6 rounded-2xl bg-[rgba(13,9,5,0.6)] backdrop-blur-md border border-[var(--gold-400)]/35 shadow-[0_20px_50px_-20px_rgba(13,9,5,0.6)]"
      }
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-300)] mb-5">
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

function ItemSurface({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="p-6 md:p-8 rounded-2xl bg-[rgba(13,9,5,0.5)] backdrop-blur-md border border-[var(--gold-400)]/25 shadow-[0_20px_50px_-20px_rgba(13,9,5,0.55)]">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold-400)]/80 mb-5">
        Einzelstücke
      </p>
      {children}
    </Reveal>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center gap-5 max-w-xl mx-auto" aria-hidden>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--gold-400)]/50" />
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold-300)]/20 to-[var(--gold-700)]/15 border border-[var(--gold-400)]/40">
        <LionIcon className="h-6 w-auto brightness-0 invert opacity-80" />
      </span>
      <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--gold-400)]/50" />
    </div>
  );
}
