import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  display: "text-display font-semibold",
  h1: "text-h1 font-semibold",
  h2: "text-h2 font-semibold",
  h3: "text-h3 font-medium",
} as const;

type HeadingProps = {
  /** The HTML heading level, chosen for document outline. */
  as?: "h1" | "h2" | "h3" | "h4";
  /** The visual size, independent of the level. */
  size?: keyof typeof sizes;
} & ComponentPropsWithoutRef<"h2">;

export function Heading({ as: Tag = "h2", size = "h2", className, ...props }: HeadingProps) {
  return <Tag className={cn(sizes[size], "text-balance", className)} {...props} />;
}

/** Editorial serif accent for a word or phrase inside a heading. */
export function Accent({ className, ...props }: ComponentPropsWithoutRef<"em">) {
  return (
    <em
      className={cn("font-serif font-normal tracking-[-0.01em] text-deep italic", className)}
      {...props}
    />
  );
}

/** Small uppercase label that introduces a section. */
export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn("text-eyebrow font-medium text-deep uppercase", className)}
      {...props}
    />
  );
}
