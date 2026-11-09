"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icon";
import { servicesPromo } from "@/content/navigation";
import { serviceHref, services } from "@/content/services";
import { cn } from "@/lib/utils";

type ServicesMegaMenuProps = {
  id: string;
  /** Called when a destination is chosen, so the menu can close. */
  onNavigate: () => void;
};

/** The six service categories in a grid, with a bespoke-solution panel. */
export const ServicesMegaMenu = forwardRef<HTMLDivElement, ServicesMegaMenuProps>(function ServicesMegaMenu(
  { id, onNavigate },
  ref,
) {
  const pathname = usePathname();

  return (
    <div
      ref={ref}
      id={id}
      className="grid gap-3 rounded-xl bg-white p-3 shadow-lifted ring-1 ring-line lg:grid-cols-[minmax(0,1fr)_17rem] xl:grid-cols-[minmax(0,1fr)_19rem]"
    >
      <div className="flex flex-col">
        <ul className="grid gap-1 p-2 lg:grid-cols-2 xl:grid-cols-3">
          {services.map(({ slug, title, description, icon: Icon }) => {
            const href = serviceHref(slug);
            const active = pathname === href;
            return (
              <li key={slug}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group/item flex h-full gap-4 rounded-lg p-4 transition-colors duration-(--duration-fast) ease-standard hover:bg-ice focus-visible:bg-ice",
                    active && "bg-ice",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-sm bg-mist text-interactive transition-colors duration-(--duration-base) ease-standard group-hover/item:bg-interactive group-hover/item:text-white group-focus-visible/item:bg-interactive group-focus-visible/item:text-white"
                  >
                    <Icon className="size-icon" strokeWidth={1.75} />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-display text-[0.9375rem] leading-snug font-bold text-ink transition-colors duration-(--duration-fast) group-hover/item:text-interactive">
                      {title}
                    </span>
                    <span className="text-body-sm text-slate">{description}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto flex items-center justify-end border-t border-line px-6 pt-4 pb-3">
          <Link
            href="/services/"
            onClick={onNavigate}
            className="group/all inline-flex items-center gap-2 rounded-xs text-button text-interactive hover:text-interactive-hover"
          >
            View all services
            <ArrowRightIcon className="transition-transform duration-(--duration-base) ease-out-expo group-hover/all:translate-x-1" />
          </Link>
        </div>
      </div>

      <aside
        aria-labelledby={`${id}-promo`}
        className="relative isolate flex flex-col overflow-hidden rounded-lg bg-deep p-card text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(22rem_16rem_at_100%_0%,rgb(47_128_237/0.45),transparent_70%)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 invert" />
        <h2 id={`${id}-promo`} className="font-display text-h4 text-white">
          {servicesPromo.title}
        </h2>
        <p className="mt-stack-sm text-body-sm text-white/80">{servicesPromo.description}</p>
        <Button href={servicesPromo.cta.href} variant="inverse" size="sm" arrow onClick={onNavigate} className="mt-stack-lg self-start">
          {servicesPromo.cta.label}
        </Button>
      </aside>
    </div>
  );
});
