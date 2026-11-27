import type { CSSProperties, ReactNode } from "react";
import { Card, CardCue, CardDescription, CardTitle, cardFocusRing } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  /** Artwork or image for the thumbnail, positioned to fill the frame. */
  artwork: ReactNode;
  category: string;
  title: string;
  description: string;
  href: string;
  cue: string;
  /** Shown on the artwork, e.g. "Concept Project". Omit for client work. */
  badge?: string;
  /** "stacked": media above text. "split": media beside text on desktop. */
  layout?: "stacked" | "split";
  /** Aspect-ratio classes for the media frame, per breakpoint. */
  mediaClassName?: string;
  headingLevel?: "h3" | "h4";
  /** Set when the media holds its own control (e.g. a play button): lifts it above the card link. */
  interactiveMedia?: boolean;
  /** "inverse" for night and deep blue sections. */
  tone?: "default" | "inverse";
  className?: string;
  style?: CSSProperties;
};

/**
 * A portfolio entry: artwork, category, title, description and an
 * "Explore Project" cue. The title is a stretched link, so the whole card
 * is a single, keyboard-accessible link with one focus ring.
 */
export function ProjectCard({
  artwork,
  category,
  title,
  description,
  href,
  cue,
  badge,
  layout = "stacked",
  mediaClassName = "aspect-[4/3]",
  headingLevel = "h3",
  tone = "default",
  interactiveMedia = false,
  className,
  style,
}: ProjectCardProps) {
  const split = layout === "split";
  const inverse = tone === "inverse";

  return (
    <Card
      surface="plain"
      padding="none"
      className={cn("h-full overflow-visible", cardFocusRing, split && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8", className)}
      style={style}
    >
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-xl shadow-soft transition-[box-shadow,translate] duration-(--duration-slow) ease-out-expo group-hover:-translate-y-1 group-hover:shadow-lifted",
          inverse ? "bg-midnight ring-1 ring-white/10" : "bg-ice ring-1 ring-line/70",
          interactiveMedia && "z-[2]",
          mediaClassName,
          split && "lg:col-span-8",
        )}
      >
        {/* Artwork zooms gently on hover */}
        <div className="absolute inset-0 transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-[1.035]">
          {artwork}
        </div>
        {badge && (
          <span className="pointer-events-none absolute top-4 left-4 z-30 inline-flex h-7 items-center rounded-pill bg-night/80 px-3 text-body-sm font-medium text-champagne ring-1 ring-gold/50 backdrop-blur-md">
            {badge}
          </span>
        )}
      </div>

      <div className={cn("flex flex-col pt-5", split && "lg:col-span-4 lg:pt-0")}>
        <p className={cn("text-label uppercase", inverse ? "text-gold" : "text-gold-ink")}>{category}</p>
        <CardTitle
          as={headingLevel}
          href={href}
          size={split ? "h3" : "h4"}
          className={cn(
            "mt-2 transition-colors duration-(--duration-base)",
            inverse ? "text-white group-hover:text-champagne" : "text-deep group-hover:text-interactive",
          )}
        >
          {title}
        </CardTitle>
        {inverse ? (
          <p className="mt-2 max-w-prose text-body-sm text-white/75">{description}</p>
        ) : (
          <CardDescription className="mt-2 max-w-prose">{description}</CardDescription>
        )}
        <div className={cn("mt-stack-sm", inverse && "[&>span]:text-gold")}>
          <CardCue>{cue}</CardCue>
        </div>
      </div>
    </Card>
  );
}
