import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const widths = {
  prose: "max-w-prose",
  narrow: "max-w-narrow",
  content: "max-w-content",
  wide: "max-w-wide",
} as const;

type ContainerProps<T extends ElementType> = {
  as?: T;
  /** prose for long reading, narrow for statements, content (default) for layouts, wide for media. */
  width?: keyof typeof widths;
} & ComponentPropsWithoutRef<T>;

/** Centres content at a fixed maximum width with the responsive page gutter. */
export function Container<T extends ElementType = "div">({
  as,
  width = "content",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return <Component className={cn("mx-auto w-full px-gutter", widths[width], className)} {...props} />;
}
