export function FloatingTag({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span
      style={{ animationDelay: `${delay}s` }}
      className="animate-float inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--cream-50)]/85 backdrop-blur border border-[var(--border)] text-[11px] uppercase tracking-[0.2em] text-[var(--espresso-800)]"
    >
      {children}
    </span>
  );
}
