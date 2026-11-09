import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Icon sizes, used by any SVG icon (inline or from an icon library). */
export const iconSizes = {
  sm: "size-icon-sm",
  md: "size-icon",
  lg: "size-icon-lg",
  xl: "size-icon-xl",
} as const;

export type IconSize = keyof typeof iconSizes;

type SvgProps = { size?: IconSize } & Omit<ComponentPropsWithoutRef<"svg">, "children">;

/** Right arrow used by text buttons and card links. Decorative by default. */
export function ArrowRightIcon({ size = "sm", className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", iconSizes[size], className)}
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const frames = {
  md: "size-11 rounded-sm [&>svg]:size-icon",
  lg: "size-14 rounded-md [&>svg]:size-icon-lg",
} as const;

const frameTones = {
  ice: "bg-ice text-deep",
  mist: "bg-mist text-interactive",
  deep: "bg-deep text-white",
  outline: "bg-white text-deep shadow-hairline",
} as const;

type IconFrameProps = {
  children: ReactNode;
  size?: keyof typeof frames;
  tone?: keyof typeof frameTones;
  className?: string;
};

/** A consistent square backdrop for feature and service icons. */
export function IconFrame({ children, size = "md", tone = "ice", className }: IconFrameProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-grid shrink-0 place-items-center transition-colors duration-(--duration-base) ease-standard",
        frames[size],
        frameTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
