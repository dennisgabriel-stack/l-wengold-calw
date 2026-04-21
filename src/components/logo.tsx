"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Löwengold Calw logo.
 * Renders `/logo.png` (the original brand asset — drop it into /public).
 * If the PNG is missing, transparently falls back to the SVG reproduction.
 */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
  /** Kept for API compatibility — the raster logo already has the wordmark. */
  withText?: boolean;
  tone?: "gold" | "cream" | "dark";
}) {
  const [src, setSrc] = useState<"/logo.png" | "/logo.svg">("/logo.png");

  return (
    <Image
      src={src}
      alt="Löwengold Calw – Gold & Silberankauf"
      width={900}
      height={720}
      priority={priority}
      onError={() => setSrc("/logo.svg")}
      className={cn("block h-auto w-auto select-none", className)}
    />
  );
}

/**
 * Square-ish variant. Uses the same asset; CSS handles scaling.
 * Ideal for avatars / compact header usage.
 */
export function LogoMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
  tone?: "gold" | "cream" | "dark";
}) {
  const [src, setSrc] = useState<"/logo.png" | "/logo.svg">("/logo.png");

  return (
    <Image
      src={src}
      alt="Löwengold Calw"
      width={900}
      height={720}
      priority={priority}
      onError={() => setSrc("/logo.svg")}
      className={cn("block h-auto w-auto select-none object-contain", className)}
    />
  );
}
