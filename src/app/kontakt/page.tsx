import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ContactCard } from "@/components/contact-card";
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

      <section className="relative py-20 md:py-28 px-5 sm:px-8 overflow-hidden isolate">
        {/* Dark ink backdrop with gold+rose ambient glow */}
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

        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-12">
          {/* Info column — luxurious 3D ivory plaques */}
          <div className="lg:col-span-5 space-y-5">
            <ContactCard index={0} label="Telefon" icon={<Phone size={18} strokeWidth={1.9} />}>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="font-display text-3xl text-[var(--espresso-900)] hover:text-[var(--gold-700)] transition-colors"
              >
                {contact.phone}
              </a>
            </ContactCard>

            <ContactCard index={1} label="E-Mail" icon={<Mail size={18} strokeWidth={1.9} />}>
              <a
                href={`mailto:${contact.emailRaw}`}
                className="font-display text-2xl md:text-3xl text-[var(--espresso-900)] hover:text-[var(--gold-700)] break-all transition-colors"
              >
                {contact.email}
              </a>
            </ContactCard>

            <ContactCard index={2} label="Adresse" icon={<MapPin size={18} strokeWidth={1.9} />}>
              <a
                href="https://maps.google.com/?q=Altburger+Str.+13+75365+Calw"
                target="_blank"
                rel="noreferrer"
                className="font-display text-3xl text-[var(--espresso-900)] hover:text-[var(--gold-700)] block transition-colors"
              >
                {contact.street}
                <br />
                {contact.zip} {contact.city}
              </a>
            </ContactCard>

            <ContactCard
              index={3}
              label="Öffnungszeiten · An Aktionstagen"
              icon={<Clock size={18} strokeWidth={1.9} />}
            >
              <ul className="space-y-2.5 tabular-nums text-[var(--espresso-900)]">
                {contact.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-8 border-b border-[var(--gold-500)]/20 pb-2 last:border-0"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span className="text-[var(--espresso-700)]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </ContactCard>
          </div>

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
