import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Löwengold Calw gemäß DSGVO und BDSG.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutz"
        lead="Der Schutz Ihrer persönlichen Daten ist uns wichtig."
      />

      <section className="relative py-16 md:py-20 px-5 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          <Reveal>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              1. Verantwortlicher
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <strong>{contact.name}</strong>, {contact.street},{" "}
              {contact.zip} {contact.city}. Telefon: {contact.phone}, E-Mail:{" "}
              <a
                href={`mailto:${contact.emailRaw}`}
                className="link-underline text-[var(--gold-600)]"
              >
                {contact.email}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Beim Aufruf unserer Website werden durch den von Ihnen verwendeten
              Browser automatisch Informationen an den Server unserer Website
              gesendet. Diese Informationen werden temporär in einem sogenannten
              Logfile gespeichert: IP-Adresse (gekürzt), Datum und Uhrzeit der
              Anfrage, Inhalt der Anforderung, Zugriffsstatus, verwendeter
              Browser sowie Betriebssystem.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              3. Kontaktformular
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
              lassen, werden Ihre Angaben zum Zwecke der Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert. Diese
              Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              4. Hosting
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Unsere Website wird bei einem externen Dienstleister gehostet.
              Personenbezogene Daten, die auf dieser Website erfasst werden,
              werden auf dessen Servern gespeichert. Der Hoster verarbeitet die
              Daten im Rahmen eines Auftragsverarbeitungsvertrages ausschließlich
              auf unsere Weisung hin.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              5. Ihre Rechte
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
              und Einschränkung der Verarbeitung Ihrer gespeicherten
              personenbezogenen Daten (Art. 15 bis 18 DSGVO) sowie das Recht auf
              Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21
              DSGVO). Wenden Sie sich hierfür an die oben genannten
              Kontaktdaten.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="font-display text-3xl text-[var(--espresso-800)] mb-4">
              6. SSL-Verschlüsselung
            </h2>
            <p className="text-[var(--espresso-700)] leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
