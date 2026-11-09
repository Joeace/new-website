import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
} as const;

export type HeadingSize = keyof typeof sizes;
type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  /** The HTML heading level, chosen for the document outline. */
  as?: HeadingLevel;
  /** The visual size, independent of the level. Defaults to match `as`. */
  size?: HeadingSize;
} & ComponentPropsWithoutRef<"h2">;

/** Manrope heading with fluid size, tight tracking and balanced wrapping. */
export function Heading({ as: Tag = "h2", size, className, ...props }: HeadingProps) {
  return <Tag className={cn("font-display text-balance", sizes[size ?? Tag], className)} {...props} />;
}

type AccentProps = {
  /** "gradient" for large headings, "solid" (deep blue) anywhere. */
  variant?: "gradient" | "solid";
} & ComponentPropsWithoutRef<"span">;

/** Highlights a word or phrase inside a heading. */
export function Accent({ variant = "gradient", className, ...props }: AccentProps) {
  return (
    <span
      className={cn(variant === "gradient" ? "text-gradient" : "text-deep", className)}
      {...props}
    />
  );
}

type EyebrowProps = {
  /** Adds a short leading rule for extra emphasis. */
  rule?: boolean;
  tone?: "default" | "inverse";
} & ComponentPropsWithoutRef<"p">;

/** Small uppercase label that introduces a section or card. */
export function Eyebrow({ rule = false, tone = "default", className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 font-sans text-label uppercase",
        tone === "inverse" ? "text-silver" : "text-interactive",
        className,
      )}
      {...props}
    >
      {rule && <span aria-hidden="true" className="h-px w-8 bg-current" />}
      {children}
    </p>
  );
}
