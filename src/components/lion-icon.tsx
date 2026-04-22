"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Subtle decorative lion crest (just the heraldic head, no wordmark).
 * Used as a luxury brand-mark watermark behind content or in corners.
 */
export function LionIcon({
  className,
  priority = false,
  alt = "",
}: {
  className?: string;
  priority?: boolean;
  /** Keep empty for decorative use so screen readers skip it. */
  alt?: string;
}) {
  return (
    <Image
      src="/LoewenIcon.png"
      alt={alt}
      width={1024}
      height={1024}
      priority={priority}
      aria-hidden={alt === "" ? true : undefined}
      className={cn("block select-none pointer-events-none", className)}
    />
  );
}
