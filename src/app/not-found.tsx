import { MagneticLink } from "@/components/button";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-5 sm:px-8 pt-24 text-center">
      <div className="max-w-xl">
        <LogoMark className="!h-auto !w-64 mx-auto opacity-80" />
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[var(--gold-600)]">
          ✦ 404
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-[var(--espresso-800)]">
          Seite nicht gefunden.
        </h1>
        <p className="mt-5 text-lg text-[var(--espresso-700)]/90">
          Vielleicht suchen Sie ja nach unseren Leistungen oder Aktionstagen.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <MagneticLink href="/" withArrow>
            Zur Startseite
          </MagneticLink>
          <MagneticLink href="/leistungen" variant="outline" withArrow>
            Leistungen
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
