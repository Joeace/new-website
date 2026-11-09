"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { isActivePath } from "@/content/navigation";
import { cn } from "@/lib/utils";

/**
 * Shared visual treatment for desktop navigation items: deep blue text,
 * electric blue on hover and an electric underline for the active page.
 */
export const navItemClasses = (active: boolean) =>
  cn(
    "relative inline-flex h-10 items-center gap-1.5 rounded-sm px-3 font-sans text-nav transition-colors duration-(--duration-fast) ease-standard",
    "after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:rounded-pill after:bg-electric",
    "after:transition-transform after:duration-(--duration-base) after:ease-out-expo",
    active
      ? "font-semibold text-deep after:scale-x-100"
      : "text-ink/80 after:scale-x-0 hover:text-interactive hover:after:scale-x-100 hover:after:bg-electric/40",
  );

type NavigationLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

/** A desktop navigation link that marks itself with aria-current on its page. */
export function NavigationLink({ href, children, onClick, className }: NavigationLinkProps) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={cn(navItemClasses(active), className)}
    >
      {children}
    </Link>
  );
}
