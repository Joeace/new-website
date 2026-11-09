import type { ReactNode } from "react";
import { Card, CardTitle, Chip, cardFocusRing } from "@/components/ui/Card";
import { ArrowRightIcon } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/Media";

type PortfolioCardProps = {
  /** Project image, usually next/image with `fill` and `sizes`. */
  media: ReactNode;
  title: string;
  client?: string;
  category: string;
  href: string;
  ratio?: "landscape" | "portrait" | "square" | "wide";
};

/** A case study tile: image-led, with the category over the image. */
export function PortfolioCard({ media, title, client, category, href, ratio = "landscape" }: PortfolioCardProps) {
  return (
    <Card surface="plain" padding="none" className={`h-full overflow-visible ${cardFocusRing}`}>
      <MediaFrame
        ratio={ratio}
        radius="lg"
        zoomOnHover
        overlay={
          <>
            <Chip tone="glass">{category}</Chip>
            <span
              aria-hidden="true"
              className="surface-glass grid size-10 place-items-center rounded-pill text-deep opacity-0 transition-opacity duration-(--duration-base) group-hover:opacity-100"
            >
              <ArrowRightIcon className="-rotate-45" />
            </span>
          </>
        }
      >
        {media}
      </MediaFrame>
      <div className="flex flex-col gap-1 pt-5">
        {client && <p className="text-body-sm text-muted">{client}</p>}
        <CardTitle href={href} size="h4" className="transition-colors duration-(--duration-base) group-hover:text-interactive">
          {title}
        </CardTitle>
      </div>
    </Card>
  );
}
