import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { ServiceMotif } from "@/components/home/services/ServiceMotif";
import { Card, CardCue, CardDescription, CardFooter, CardTitle } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/Icon";

type ServicePillarCardProps = {
  number: number;
  slug: string;
  title: string;
  summary: string;
  capabilities: readonly string[];
  icon: LucideIcon;
  href: string;
  capabilitiesLabel: string;
  cue: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * A detailed service card: number, icon, title, summary, capabilities and
 * an "Explore Service" cue. The title is a stretched link, so the whole
 * card is one accessible link; all content is visible without hovering.
 */
export function ServicePillarCard({
  number,
  slug,
  title,
  summary,
  capabilities,
  icon: Icon,
  href,
  capabilitiesLabel,
  cue,
  className,
  style,
}: ServicePillarCardProps) {
  const label = String(number).padStart(2, "0");

  return (
    <Card interactive surface="raised" className={className} style={style}>
      <div className="flex items-center gap-3">
        <IconFrame
          tone="mist"
          className="transition-[background-color,color,rotate] duration-(--duration-base) ease-out-expo group-hover:-rotate-6 group-hover:bg-interactive group-hover:text-white"
        >
          <Icon strokeWidth={1.75} />
        </IconFrame>
        <span className="font-display text-body-sm font-bold tracking-[0.08em] text-interactive">
          <span className="sr-only">Service </span>
          {label}
        </span>
        {/* Service motif, kept within the header row so it never meets the title */}
        <ServiceMotif
          slug={slug}
          className="pointer-events-none -my-4 ml-auto size-20 shrink-0 text-electric/30 transition-[color,translate] duration-(--duration-slower) ease-out-expo group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-electric/55"
        />
      </div>

      <CardTitle href={href} size="h4" className="mt-stack text-deep">
        {title}
      </CardTitle>
      <CardDescription className="mt-stack-sm">{summary}</CardDescription>

      <div className="mt-stack border-t border-line pt-stack-sm">
        <p className="text-label text-muted uppercase">{capabilitiesLabel}</p>
        <ul className="mt-2.5 flex flex-wrap gap-1">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-pill bg-ice px-2 py-0.5 text-[0.75rem] leading-5 font-medium text-deep"
            >
              {capability}
            </li>
          ))}
        </ul>
      </div>

      <CardFooter>
        <CardCue>{cue}</CardCue>
      </CardFooter>
    </Card>
  );
}
