import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Shows the company name beside the monogram. */
  showName?: boolean;
  /** Tailwind classes that hide the name at certain widths, e.g. "lg:max-xl:hidden". */
  nameClassName?: string;
  className?: string;
  onClick?: () => void;
  /** Preload the image (header only; it is above the fold on every page). */
  preload?: boolean;
};

/**
 * The MCM monogram, used exactly as supplied (trimmed and resized only).
 * mix-blend-multiply lets its white background disappear on light surfaces.
 */
export function Logo({ showName = true, nameClassName, className, onClick, preload = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      onClick={onClick}
      className={cn("group/logo flex shrink-0 items-center gap-3 rounded-sm", className)}
    >
      <Image
        src="/brand/mcm-logo.webp"
        alt=""
        width={315}
        height={132}
        preload={preload}
        className="h-9 w-auto mix-blend-multiply transition-[height] duration-(--duration-base) ease-standard group-data-[compact=true]/header:h-8"
      />
      {showName && (
        <span
          aria-hidden="true"
          className={cn(
            "font-display text-[0.9375rem] leading-tight font-bold tracking-[-0.01em] whitespace-nowrap text-deep",
            nameClassName,
          )}
        >
          {site.name}
        </span>
      )}
    </Link>
  );
}
