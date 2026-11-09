import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./Icon";

/*
 * Primary uses interactive blue (#1C6AD4), the brand electric blue deepened
 * just enough for white label text to pass WCAG AA (5.2:1 vs 3.9:1).
 * The brand electric blue appears in the hover glow and focus ring.
 */
const base =
  "group/button relative inline-flex items-center justify-center gap-2 font-sans text-button whitespace-nowrap select-none " +
  "transition-[background-color,border-color,color,box-shadow,translate] duration-(--duration-base) ease-standard " +
  "disabled:cursor-not-allowed aria-disabled:cursor-not-allowed";

const variants = {
  primary:
    "rounded-pill bg-interactive text-white shadow-soft " +
    "hover:-translate-y-px hover:bg-interactive-hover hover:shadow-glow " +
    "active:translate-y-0 active:bg-interactive-active active:shadow-none " +
    "disabled:translate-y-0 disabled:bg-silver disabled:text-muted disabled:shadow-none",
  secondary:
    "rounded-pill border-[1.5px] border-interactive bg-white text-interactive " +
    "hover:-translate-y-px hover:border-interactive-hover hover:bg-mist hover:text-interactive-hover " +
    "active:translate-y-0 active:border-interactive-active active:text-interactive-active " +
    "disabled:translate-y-0 disabled:border-silver disabled:bg-white disabled:text-muted",
  /* For dark surfaces such as deep blue panels and midnight sections. */
  inverse:
    "rounded-pill bg-white text-deep shadow-soft " +
    "hover:-translate-y-px hover:bg-ice " +
    "active:translate-y-0 active:bg-silver " +
    "disabled:translate-y-0 disabled:bg-white/40 disabled:text-deep/60",
  text:
    "rounded-xs text-interactive underline-offset-[6px] decoration-[1.5px] " +
    "hover:text-interactive-hover hover:underline active:text-interactive-active " +
    "disabled:text-muted disabled:no-underline",
} as const;

const sizes = {
  sm: "h-10 px-4 text-body-sm",
  md: "h-12 px-6",
  lg: "h-14 px-8 text-body",
} as const;

type StyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Shows a trailing arrow that slides on hover. Always on for text buttons. */
  arrow?: boolean;
  /** Stretches to the full width of its container, e.g. on phones. */
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = StyleProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    keyof StyleProps | "href"
  >;
type ButtonAsButton = StyleProps & { href?: never } & Omit<
    ComponentPropsWithoutRef<"button">,
    keyof StyleProps
  >;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: Pick<StyleProps, "variant" | "size" | "fullWidth" | "className">) {
  return cn(base, variants[variant], variant !== "text" && sizes[size], fullWidth && "w-full", className);
}

/**
 * Renders a Next.js Link when given an href, otherwise a native button.
 * Links cannot be disabled: render a disabled button instead.
 */
export function Button({
  variant = "primary",
  size = "md",
  arrow,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = buttonClasses({ variant, size, fullWidth, className });
  const showArrow = arrow ?? variant === "text";
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRightIcon className="transition-transform duration-(--duration-base) ease-out-expo group-hover/button:translate-x-1 group-disabled/button:translate-x-0" />
      )}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link {...(props as ButtonAsLink)} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} {...rest} className={classes}>
      {content}
    </button>
  );
}
