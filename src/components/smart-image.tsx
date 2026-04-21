"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type SmartImageProps = Omit<ImageProps, "onError"> & {
  /** Optional ReactNode to render if the image errors. */
  fallback?: React.ReactNode;
  /** Class applied to the wrapping element. */
  wrapperClassName?: string;
};

/**
 * Drop-in replacement for next/image that gracefully falls back when
 * the remote source fails. If no explicit fallback is given, it
 * renders nothing (letting the parent's background show through) —
 * avoids the ugly default broken-image glyph.
 */
export function SmartImage({
  fallback,
  wrapperClassName,
  className,
  alt,
  ...props
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (!fallback) return null;
    return (
      <div className={cn("relative h-full w-full", wrapperClassName)}>
        {fallback}
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
