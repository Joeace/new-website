import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap " +
  "transition-[background-color,color,box-shadow,transform] duration-(--duration-base) ease-out-expo " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

/*
 * Primary uses deep blue: white on electric blue is only 3.9:1, which fails
 * WCAG AA for button-sized text. Electric blue appears as the hover glow.
 */
const variants = {
  primary: "bg-deep text-white shadow-soft hover:bg-deep-hover hover:shadow-glow",
  secondary: "bg-white text-midnight shadow-hairline hover:bg-ice hover:shadow-soft",
  inverse: "bg-white text-deep hover:bg-ice",
  ghost: "text-deep hover:bg-ice",
} as const;

const sizes = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
} as const;

type StyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = StyleProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, keyof StyleProps | "href">;
type ButtonAsButton = StyleProps & { href?: never } & Omit<ComponentPropsWithoutRef<"button">, keyof StyleProps>;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/** Renders a Next.js Link when given an href, otherwise a native button. */
export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    return <Link {...(props as ButtonAsLink)} className={classes} />;
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return <button type={type} {...rest} className={classes} />;
}
