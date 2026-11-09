import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/*
 * Responsive column presets. Every layout snaps to these so cards and
 * sections share the same alignment across the site.
 */
const columns = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  /* 12-column editorial grid: children set their own col-span. */
  12: "grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
} as const;

const gaps = {
  sm: "gap-layout-sm",
  md: "gap-layout",
  lg: "gap-layout-lg",
} as const;

type GridProps = {
  cols?: keyof typeof columns;
  gap?: keyof typeof gaps;
} & ComponentPropsWithoutRef<"div">;

export function Grid({ cols = 3, gap = "md", className, ...props }: GridProps) {
  return <div className={cn("grid", columns[cols], gaps[gap], className)} {...props} />;
}
