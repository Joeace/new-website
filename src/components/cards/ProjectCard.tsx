import type { CSSProperties, ReactNode } from "react";
import { Card, CardCue, CardDescription, CardTitle, Chip, cardFocusRing } from "@/components/ui/Card";
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
  className,
  style,
}: ProjectCardProps) {
  const split = layout === "split";

  return (
    <Card
      surface="plain"
      padding="none"
      className={cn("h-full overflow-visible", cardFocusRing, split && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8", className)}
      style={style}
    >
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-xl bg-ice shadow-soft ring-1 ring-line/70 transition-[box-shadow,translate] duration-(--duration-slow) ease-out-expo group-hover:-translate-y-1 group-hover:shadow-lifted",
          mediaClassName,
          split && "lg:col-span-8",
        )}
      >
        {/* Artwork zooms gently on hover */}
        <div className="absolute inset-0 transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-[1.035]">
          {artwork}
        </div>
        {badge && (
          <Chip tone="glass" className="absolute top-4 left-4 z-10">
            {badge}
          </Chip>
        )}
      </div>

      <div className={cn("flex flex-col pt-5", split && "lg:col-span-4 lg:pt-0")}>
        <p className="text-label text-interactive uppercase">{category}</p>
        <CardTitle
          as={headingLevel}
          href={href}
          size={split ? "h3" : "h4"}
          className="mt-2 text-deep transition-colors duration-(--duration-base) group-hover:text-interactive"
        >
          {title}
        </CardTitle>
        <CardDescription className="mt-2 max-w-prose">{description}</CardDescription>
        <div className="mt-stack-sm">
          <CardCue>{cue}</CardCue>
        </div>
      </div>
    </Card>
  );
}
