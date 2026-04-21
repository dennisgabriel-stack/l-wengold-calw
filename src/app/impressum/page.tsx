import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Löwengold Calw.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Impressum"
        lead="Angaben gemäß § 5 TMG."
      />

      <section className="relative py-16 md:py-20 px-5 sm:px-8">
        <div className="mx-auto max-w-3xl prose prose-stone">
          <Reveal>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Anbieter
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              <strong>{contact.name}</strong>
              <br />
              {contact.street}
              <br />
              {contact.zip} {contact.city}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Kontakt
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Telefon: {contact.phone}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${contact.emailRaw}`}
                className="link-underline text-[var(--gold-600)]"
              >
                {contact.email}
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Inhaber/in von Löwengold Calw
              <br />
              {contact.street}, {contact.zip} {contact.city}
            </p>
            <p className="mt-4 text-sm text-[var(--espresso-700)]/70">
              Hinweis: Bitte ergänzen Sie hier den vollständigen Namen und die
              Rechtsform (Einzelunternehmen, GbR, GmbH …) sowie ggf. USt-ID,
              Handelsregisternummer und zuständige Aufsichtsbehörde.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Streitbeilegung
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[var(--gold-600)]"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an einem
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Urheberrecht
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
              Vervielfältigungen, Bearbeitungen, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
