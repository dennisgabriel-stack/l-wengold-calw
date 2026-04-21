import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/data";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "./_form";

export const metadata: Metadata = {
  title: "Kontakt aufnehmen",
  description:
    "Rufen Sie uns an, schreiben Sie uns oder besuchen Sie uns in der Altburger Straße 13 in Calw. Wir freuen uns auf Sie.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={
          <>
            Kontakt <span className="text-gold-shimmer">aufnehmen</span>
          </>
        }
        lead="Schreiben Sie uns, rufen Sie an – oder kommen Sie direkt vorbei. Wir
        freuen uns auf Ihren Besuch in der Altburger Straße 13."
      />

      <section className="relative py-16 md:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
          {/* Info column */}
          <Reveal className="lg:col-span-5 space-y-8">
            <InfoBlock
              icon={<Phone className="text-[var(--gold-600)]" size={20} />}
              label="Telefon"
            >
              <a
                href={`tel:${contact.phoneRaw}`}
                className="font-display text-3xl text-[var(--espresso-800)] hover:text-[var(--gold-600)]"
              >
                {contact.phone}
              </a>
            </InfoBlock>

            <InfoBlock
              icon={<Mail className="text-[var(--gold-600)]" size={20} />}
              label="E-Mail"
            >
              <a
                href={`mailto:${contact.emailRaw}`}
                className="font-display text-2xl md:text-3xl text-[var(--espresso-800)] hover:text-[var(--gold-600)] break-all"
              >
                {contact.email}
              </a>
            </InfoBlock>

            <InfoBlock
              icon={<MapPin className="text-[var(--gold-600)]" size={20} />}
              label="Adresse"
            >
              <a
                href="https://maps.google.com/?q=Altburger+Str.+13+75365+Calw"
                target="_blank"
                rel="noreferrer"
                className="font-display text-3xl text-[var(--espresso-800)] hover:text-[var(--gold-600)] block"
              >
                {contact.street}
                <br />
                {contact.zip} {contact.city}
              </a>
            </InfoBlock>

            <InfoBlock
              icon={<Clock className="text-[var(--gold-600)]" size={20} />}
              label="Öffnungszeiten · An Aktionstagen"
            >
              <ul className="space-y-2 tabular-nums text-[var(--espresso-800)]">
                {contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-8">
                    <span>{h.day}</span>
                    <span className="text-[var(--espresso-700)]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoBlock>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative rounded-[28px] overflow-hidden bg-[var(--espresso-900)] text-[var(--cream-100)] p-8 md:p-12 shadow-[var(--shadow-soft)]">
              <div className="absolute inset-0 bg-paper-dark opacity-95 pointer-events-none" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-4">
                  ✦ Nachricht senden
                </p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight text-gold-shimmer mb-8">
                  Wir freuen uns auf Ihre Nachricht.
                </h2>
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="relative py-16 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-soft)] aspect-[16/9] md:aspect-[21/9] bg-[var(--cream-100)]">
              <iframe
                title="Löwengold Calw auf der Karte"
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.735%2C48.710%2C8.745%2C48.715&amp;layer=mapnik&amp;marker=48.7128%2C8.7398"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 text-sm text-[var(--espresso-700)]/80 text-center">
            <a
              href="https://maps.google.com/?q=Altburger+Str.+13+75365+Calw"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              In Google Maps öffnen →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-7 rounded-2xl bg-[var(--cream-50)] border border-[var(--border)] hover:border-[var(--gold-400)] transition-colors">
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-600)]">
          {label}
        </p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
