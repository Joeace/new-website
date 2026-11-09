import type { ReactNode } from "react";
import { Card, CardCue, CardDescription, CardFooter, CardTitle, Chip } from "@/components/ui/Card";
import { MediaFrame } from "@/components/ui/Media";

type ArticleCardProps = {
  media?: ReactNode;
  title: string;
  excerpt?: string;
  category?: string;
  /** ISO date, e.g. "2026-11-09". Displayed in UK format. */
  date: string;
  readingTime?: string;
  href: string;
};

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

/** An insight or blog post preview. */
export function ArticleCard({ media, title, excerpt, category, date, readingTime, href }: ArticleCardProps) {
  return (
    <Card surface="raised" padding="none" interactive className="h-full">
      {media && (
        <MediaFrame ratio="wide" radius="none" bordered={false} zoomOnHover>
          {media}
        </MediaFrame>
      )}
      <div className="flex flex-1 flex-col gap-stack-sm p-card">
        <div className="flex flex-wrap items-center gap-3 text-body-sm text-muted">
          {category && <Chip>{category}</Chip>}
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <time dateTime={date}>{dateFormat.format(new Date(date))}</time>
            {readingTime && (
              <>
                <span aria-hidden="true">·</span>
                <span>{readingTime}</span>
              </>
            )}
          </span>
        </div>
        <CardTitle href={href}>{title}</CardTitle>
        {excerpt && <CardDescription className="line-clamp-3">{excerpt}</CardDescription>}
        <CardFooter>
          <CardCue>Read article</CardCue>
        </CardFooter>
      </div>
    </Card>
  );
}
