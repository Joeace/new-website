import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  "body-lg": "text-body-lg",
  body: "text-body",
  "body-sm": "text-body-sm",
  label: "text-label uppercase",
} as const;

const tones = {
  default: "text-ink",
  secondary: "text-slate",
  muted: "text-muted",
  inverse: "text-white/80",
} as const;

type TextProps<T extends ElementType> = {
  as?: T;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
} & ComponentPropsWithoutRef<T>;

/** Body and supporting text in Inter, on the shared type scale. */
export function Text<T extends ElementType = "p">({
  as,
  size = "body",
  tone = "secondary",
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";
  return <Component className={cn("font-sans", sizes[size], tones[tone], className)} {...props} />;
}
