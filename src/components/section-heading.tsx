import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal delay={0} y={10}>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--gold-600)] mb-5">
            <span className="mr-2 text-[var(--gold-500)]">✦</span>
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05} as="h2">
        <span className="block font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-[var(--espresso-800)]">
          {title}
        </span>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <div className="mt-6 text-lg md:text-xl text-[var(--espresso-700)]/90 leading-relaxed">
            {lead}
          </div>
        </Reveal>
      )}
    </div>
  );
}
