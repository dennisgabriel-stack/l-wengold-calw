import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/data";
import { MapPin, Clock, BookOpen } from "lucide-react";
import { MagneticLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Wegbeschreibung – so finden Sie uns in Calw",
  description:
    "Löwengold Calw liegt mitten in der Altstadt von Calw im nördlichen Schwarzwald – in der Altburger Str. 13, 75365 Calw.",
};

export default function WegbeschreibungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wegbeschreibung"
        title={
          <>
            So finden Sie uns <br />
            <span className="text-gold-shimmer">im Herzen von Calw.</span>
          </>
        }
        lead="Altburger Str. 13 · 75365 Calw – mitten in der Altstadt im nördlichen Schwarzwald."
      />

      {/* Map */}
      <section className="relative py-12 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-soft)] aspect-[21/9] bg-[var(--cream-100)]">
              <iframe
                title="Karte Löwengold Calw"
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.735%2C48.710%2C8.745%2C48.715&amp;layer=mapnik&amp;marker=48.7128%2C8.7398"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Calw */}
      <section className="relative py-16 md:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[var(--gold-600)] mb-4">
              <MapPin size={18} />
              <p className="text-xs uppercase tracking-[0.3em]">Adresse</p>
            </div>
            <h2 className="font-display text-4xl text-[var(--espresso-800)]">
              {contact.street}
              <br />
              {contact.zip} {contact.city}
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticLink
                href="https://maps.google.com/?q=Altburger+Str.+13+75365+Calw"
                withArrow
              >
                Route planen
              </MagneticLink>
              <MagneticLink href="/kontakt" variant="outline" withArrow>
                Kontakt
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-[var(--gold-600)]">
              <BookOpen size={18} />
              <p className="text-xs uppercase tracking-[0.3em]">Über Calw</p>
            </div>
            <p className="text-lg leading-relaxed text-[var(--espresso-700)]">
              Calw ist eine Stadt in Baden-Württemberg im nördlichen Schwarzwald
              – reich an Fachwerkromantik, verwinkelten Gassen und einer tiefen
              literarischen Tradition. Die Stadt ist die Geburtsstadt des
              Literaturnobelpreisträgers <em>Hermann Hesse</em> (1877–1962), der
              Calw in zahlreichen seiner Werke verewigt hat.
            </p>
            <p className="text-lg leading-relaxed text-[var(--espresso-700)]">
              Ein Besuch lohnt sich – auch wenn Sie aus den umliegenden Städten{" "}
              {contact.catchment
                .filter((c) => c !== contact.city)
                .join(", ")}{" "}
              anreisen. Unser Geschäft liegt zentral in der Innenstadt, fußläufig
              zum Marktplatz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hours */}
      <section className="relative py-16 md:py-24 px-5 sm:px-8 bg-[var(--cream-100)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 text-[var(--gold-600)] mb-4">
              <Clock size={18} />
              <p className="text-xs uppercase tracking-[0.3em]">
                Öffnungszeiten · An Aktionstagen
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--espresso-800)] mb-10">
              Wir öffnen an unseren Aktionstagen.
            </h2>
            <ul className="divide-y divide-[var(--border)]">
              {contact.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-5 text-lg tabular-nums"
                >
                  <span className="text-[var(--espresso-800)] font-medium">
                    {h.day}
                  </span>
                  <span className="text-[var(--espresso-700)]">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
