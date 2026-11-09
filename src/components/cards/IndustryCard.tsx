import type { ReactNode } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { ArrowRightIcon, IconFrame } from "@/components/ui/Icon";

type IndustryCardProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  /** Optional: links to an industry page when one exists. */
  href?: string;
};

/** A compact sector tile, clickable only when an industry page exists. */
export function IndustryCard({ icon, title, description, href }: IndustryCardProps) {
  return (
    <Card surface="outline" padding="sm" interactive={Boolean(href)} className="h-full flex-row items-start gap-4">
      {icon && <IconFrame tone="ice">{icon}</IconFrame>}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <CardTitle href={href} as="h3" size="body">
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </div>
      {href && (
        <ArrowRightIcon className="mt-1 text-muted transition-[translate,color] duration-(--duration-base) ease-out-expo group-hover:translate-x-1 group-hover:text-interactive" />
      )}
    </Card>
  );
}
