import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const tones = {
  white: "bg-white text-midnight",
  ice: "bg-ice text-midnight",
  midnight: "bg-midnight text-white",
} as const;

const spacings = {
  default: "py-section",
  compact: "py-section-sm",
  none: "",
} as const;

type SectionProps = {
  tone?: keyof typeof tones;
  spacing?: keyof typeof spacings;
} & ComponentPropsWithoutRef<"section">;

/** A full-width band with consistent vertical rhythm and background tone. */
export function Section({
  tone = "white",
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return <section className={cn(tones[tone], spacings[spacing], className)} {...props} />;
}
