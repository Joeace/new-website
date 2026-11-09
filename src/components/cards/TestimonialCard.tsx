import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

type TestimonialCardProps = {
  /** Must be a real, attributable client quote used with permission. */
  quote: string;
  name: string;
  role?: string;
  organisation?: string;
  /** Optional portrait, usually next/image at 48x48. */
  avatar?: ReactNode;
};

/** A client quote with attribution. Only ever use genuine, approved testimonials. */
export function TestimonialCard({ quote, name, role, organisation, avatar }: TestimonialCardProps) {
  const attribution = [role, organisation].filter(Boolean).join(", ");

  return (
    <Card as="figure" surface="raised" padding="lg" className="h-full gap-stack">
      <svg aria-hidden="true" viewBox="0 0 32 24" className="h-6 w-8 fill-electric/80">
        <path d="M0 24V14.4C0 6.4 4.3 1.6 12 0l1.6 3.2C9.2 4.5 7 7.3 6.8 11.2H12V24H0Zm19.2 0V14.4c0-8 4.3-12.8 12-14.4l1.6 3.2c-4.4 1.3-6.6 4.1-6.8 8H31.2V24h-12Z" />
      </svg>
      <blockquote className="font-display text-h4 font-semibold text-ink">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-stack">
        {avatar && <span className="size-12 shrink-0 overflow-hidden rounded-pill bg-ice [&_img]:size-full [&_img]:object-cover">{avatar}</span>}
        <span className="flex flex-col">
          <span className="text-body-sm font-semibold text-ink">{name}</span>
          {attribution && <span className="text-body-sm text-muted">{attribution}</span>}
        </span>
      </figcaption>
    </Card>
  );
}
