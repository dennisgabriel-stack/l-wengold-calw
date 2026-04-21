import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
  separator = "✦",
}: {
  items: string[];
  className?: string;
  separator?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 select-none",
        className
      )}
    >
      <div className="flex whitespace-nowrap animate-marquee gap-10 will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 font-display text-3xl md:text-4xl tracking-wide"
          >
            <span>{item}</span>
            <span className="text-[var(--gold-500)]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
