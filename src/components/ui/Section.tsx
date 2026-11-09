import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/*
 * Backgrounds, in order of preference. White should carry most of the site;
 * ice and fade create rhythm between sections; glow and grid add atmosphere
 * to one or two key sections; midnight is reserved for rare high-contrast moments.
 */
const tones = {
  white: "bg-white text-ink",
  ice: "bg-ice text-ink",
  fade: "bg-fade text-ink",
  glow: "bg-white bg-glow text-ink",
  midnight: "bg-midnight text-white",
} as const;

const spacings = {
  sm: "py-section-sm",
  md: "py-section",
  lg: "py-section-lg",
  none: "",
} as const;

type SectionProps = {
  tone?: keyof typeof tones;
  spacing?: keyof typeof spacings;
  /** Overlays a faint technical grid that fades out towards the edges. */
  grid?: boolean;
} & ComponentPropsWithoutRef<"section">;

/** A full-width band with consistent vertical rhythm and background tone. */
export function Section({
  tone = "white",
  spacing = "md",
  grid = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative isolate", tones[tone], spacings[spacing], className)} {...props}>
      {grid && <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid" />}
      {children}
    </section>
  );
}
