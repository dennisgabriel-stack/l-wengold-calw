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
        <div className="mx-auto max-w-3xl space-y-12">
          <Reveal>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Anbieter
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              <strong>{contact.owner}</strong>
              <br />
              {contact.street}
              <br />
              {contact.zip} {contact.city}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Kontakt
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Telefon:{" "}
              <a
                href={`tel:${contact.phoneRaw}`}
                className="link-underline text-[var(--gold-600)]"
              >
                {contact.phone}
              </a>
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

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Name des Unternehmens
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              {contact.name}, {contact.owner}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Eingetragener Firmensitz
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              {contact.street}, {contact.zip} {contact.city}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: <em className="text-[var(--espresso-700)]/70">wird auf Anfrage mitgeteilt.</em>
            </p>
          </Reveal>

          <Reveal delay={0.16}>
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

          <Reveal delay={0.2}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
              ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
              werden wir diese Inhalte umgehend entfernen.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Haftung für Links
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              Urheberrecht
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
              dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
            <p className="mt-4 text-sm text-[var(--espresso-700)]/60">
              Quelle: eRecht24
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
