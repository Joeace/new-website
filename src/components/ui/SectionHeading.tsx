import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, Heading, type HeadingSize } from "./Heading";
import { Text } from "./Text";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Optional action (usually a Button) shown beside the heading on desktop. */
  action?: ReactNode;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  size?: HeadingSize;
  tone?: "default" | "inverse";
  className?: string;
};

/** The standard eyebrow, heading and introduction block that opens a section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "start",
  as = "h2",
  size,
  tone = "default",
  className,
}: SectionHeadingProps) {
  const centred = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-stack",
        Boolean(action) && !centred && "lg:flex-row lg:items-end lg:justify-between lg:gap-layout-lg",
        centred && "items-center text-center",
        className,
      )}
    >
      <div className={cn("flex max-w-3xl flex-col gap-stack-sm", centred && "items-center")}>
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        <Heading as={as} size={size ?? as} className={tone === "inverse" ? "text-white" : "text-ink"}>
          {title}
        </Heading>
        {description && (
          <Text size="body-lg" tone={tone === "inverse" ? "inverse" : "secondary"} className="mt-stack-xs max-w-2xl">
            {description}
          </Text>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
