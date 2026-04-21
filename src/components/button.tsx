"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef, useRef, MouseEvent, ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--espresso-900)] text-[var(--cream-100)] hover:bg-[var(--espresso-800)] border border-[var(--espresso-900)]",
  ghost:
    "bg-transparent text-[var(--espresso-800)] hover:bg-[var(--cream-100)] border border-[var(--border)]",
  outline:
    "bg-transparent text-[var(--gold-600)] hover:bg-[var(--gold-50)] border border-[var(--gold-500)]",
};

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
};

type LinkProps = BaseProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;

type ButtonProps = BaseProps &
  Omit<ComponentProps<"button">, "children" | "className">;

export const MagneticLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = "primary", className, withArrow, href, ...rest }, ref) => {
    const inner = useRef<HTMLSpanElement>(null);
    const reduce = useReducedMotion();

    const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
      if (reduce || !inner.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      inner.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    };

    const handleLeave = () => {
      if (inner.current) inner.current.style.transform = "";
    };

    return (
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors",
          variants[variant],
          className
        )}
        {...rest}
      >
        <motion.span
          ref={inner}
          className="inline-flex items-center gap-2 transition-transform duration-500 ease-out"
        >
          {children}
          {withArrow && (
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </motion.span>
      </Link>
    );
  }
);
MagneticLink.displayName = "MagneticLink";

export const MagneticButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className, withArrow, ...rest }, ref) => {
    const inner = useRef<HTMLSpanElement>(null);
    const reduce = useReducedMotion();

    const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
      if (reduce || !inner.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      inner.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    };

    const handleLeave = () => {
      if (inner.current) inner.current.style.transform = "";
    };

    return (
      <button
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors",
          variants[variant],
          className
        )}
        {...rest}
      >
        <motion.span
          ref={inner}
          className="inline-flex items-center gap-2 transition-transform duration-500 ease-out"
        >
          {children}
          {withArrow && (
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </motion.span>
      </button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
