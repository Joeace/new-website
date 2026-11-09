import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./Icon";

/*
 * Card foundations shared by every card type.
 *
 * Surfaces:
 *   raised   white with a hairline and soft shadow (default, on white or ice)
 *   outline  white with a silver border, no shadow (dense grids)
 *   ice      filled ice, no border (calm, on white sections)
 *   glass    translucent; only over imagery or the glow background
 *   inverse  midnight, for a single featured card
 *   plain    no surface; image-led cards such as portfolio tiles
 */
const surfaces = {
  raised: "bg-white shadow-soft ring-1 ring-line/70",
  outline: "bg-white ring-1 ring-line",
  ice: "bg-ice",
  glass: "surface-glass",
  inverse: "bg-midnight text-white",
  plain: "",
} as const;

const paddings = {
  none: "",
  sm: "p-card-sm",
  md: "p-card",
  lg: "p-card-lg",
} as const;

/** Shows a focus ring around the whole card when its stretched link has keyboard focus. */
export const cardFocusRing =
  "has-[.stretched-link:focus-visible]:outline-2 has-[.stretched-link:focus-visible]:outline-offset-4 has-[.stretched-link:focus-visible]:outline-electric";

const interactiveStyles =
  "transition-[translate,box-shadow,background-color] duration-(--duration-slow) ease-out-expo " +
  "hover:-translate-y-1 hover:shadow-lifted " +
  cardFocusRing;

export type CardSurface = keyof typeof surfaces;

type CardProps<T extends ElementType> = {
  as?: T;
  surface?: CardSurface;
  padding?: keyof typeof paddings;
  /** Adds hover lift. Use with a CardLink so the whole card is clickable. */
  interactive?: boolean;
} & ComponentPropsWithoutRef<T>;

export function Card<T extends ElementType = "article">({
  as,
  surface = "raised",
  padding = "md",
  interactive = false,
  className,
  ...props
}: CardProps<T>) {
  const Component = as ?? "article";
  return (
    <Component
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg",
        surfaces[surface],
        paddings[padding],
        interactive && interactiveStyles,
        className,
      )}
      {...props}
    />
  );
}

type CardTitleProps = {
  as?: "h2" | "h3" | "h4";
  /** When set, the title becomes a link that covers the whole card. */
  href?: string;
  size?: keyof typeof titleSizes;
  className?: string;
  children: ReactNode;
};

const titleSizes = {
  h3: "text-h3",
  h4: "text-h4",
  body: "text-body font-semibold",
} as const;

/** Card heading. With an href, the entire card becomes one accessible link. */
export function CardTitle({ as: Tag = "h3", href, size = "h4", className, children }: CardTitleProps) {
  return (
    <Tag className={cn("font-display text-pretty", titleSizes[size], className)}>
      {href ? (
        <Link href={href} className="stretched-link outline-none">
          {children}
        </Link>
      ) : (
        children
      )}
    </Tag>
  );
}

export function CardDescription({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-body-sm text-slate", className)} {...props} />;
}

/** Pushes its content to the bottom of the card. */
export function CardFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mt-auto flex items-center gap-3 pt-stack", className)} {...props} />;
}

/**
 * Visual "read more" cue for a card whose title is already the link.
 * Hidden from assistive technology to avoid announcing the link twice.
 */
export function CardCue({ children }: { children: ReactNode }) {
  return (
    <span aria-hidden="true" className="inline-flex items-center gap-2 text-button text-interactive">
      {children}
      <ArrowRightIcon className="transition-transform duration-(--duration-base) ease-out-expo group-hover:translate-x-1" />
    </span>
  );
}

/** Small pill label for categories and tags. */
export function Chip({
  tone = "ice",
  className,
  ...props
}: { tone?: "ice" | "glass" | "outline" } & ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-pill px-3 text-body-sm font-medium text-deep",
        tone === "ice" && "bg-ice",
        tone === "glass" && "surface-glass",
        tone === "outline" && "ring-1 ring-line",
        className,
      )}
      {...props}
    />
  );
}
