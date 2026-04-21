import { cn } from "@/lib/cn";

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-4 my-10", className)}
      aria-hidden
    >
      <span className="flex-1 gold-divider" />
      <svg width="18" height="18" viewBox="0 0 20 20" className="text-[var(--gold-500)]">
        <path
          d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z"
          fill="currentColor"
        />
      </svg>
      <span className="flex-1 gold-divider" />
    </div>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={cn("text-[var(--gold-500)]", className)}
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M10 30 Q50 10 100 30 Q150 50 190 30" />
        <path d="M10 30 Q50 50 100 30 Q150 10 190 30" opacity="0.5" />
        <circle cx="100" cy="30" r="4" fill="currentColor" />
        <circle cx="40" cy="30" r="1.5" fill="currentColor" />
        <circle cx="160" cy="30" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}
