import { cn } from "@/lib/utils";

/**
 * The site's signal motif: a short electric line that draws itself downward
 * as a section's heading comes onto the screen, as if the line
 * leaving the hero monogram enters each chapter. Decorative.
 */
export function SignalMark({ tone = "default", className }: { tone?: "default" | "inverse"; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "mb-stack block h-14 w-0.5 scroll-draw rounded-pill bg-linear-to-b from-transparent md:h-20",
        tone === "inverse" ? "to-white/80" : "to-electric",
        className,
      )}
    />
  );
}
