import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  /** "content" for standard layouts, "narrow" for long-form reading. */
  width?: "content" | "narrow";
} & ComponentPropsWithoutRef<T>;

export function Container<T extends ElementType = "div">({
  as,
  width = "content",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-gutter",
        width === "narrow" ? "max-w-narrow" : "max-w-content",
        className,
      )}
      {...props}
    />
  );
}
