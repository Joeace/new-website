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
  /** "default": deep blue on light backgrounds; "inverse": white on dark ones. */
  tone?: "default" | "inverse";
} & ComponentPropsWithoutRef<"h2">;

/** Editorial serif heading (Playfair Display) in deep blue, with fluid size and balanced wrapping. */
export function Heading({ as: Tag = "h2", size, tone = "default", className, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn("font-display text-balance", tone === "inverse" ? "text-white" : "text-deep", sizes[size ?? Tag], className)}
      {...props}
    />
  );
}

type AccentProps = {
  /**
   * "gold": serif italic in gold, for light backgrounds (default).
   * "gold-inverse": the same on dark blue or night backgrounds.
   * "solid": plain deep blue, for small text.
   */
  variant?: "gold" | "gold-inverse" | "solid";
} & ComponentPropsWithoutRef<"span">;

const accents = {
  gold: "text-accent",
  "gold-inverse": "text-accent-inverse",
  solid: "text-deep",
} as const;

/** Highlights a word or phrase inside a heading. */
export function Accent({ variant = "gold", className, ...props }: AccentProps) {
  return <span className={cn(accents[variant], className)} {...props} />;
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
        tone === "inverse" ? "text-champagne" : "text-gold-ink",
        className,
      )}
      {...props}
    >
      {rule && <span aria-hidden="true" className="h-px w-8 bg-gold" />}
      {children}
    </p>
  );
}
