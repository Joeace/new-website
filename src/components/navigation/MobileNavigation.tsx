"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { isActivePath, navActions, primaryNav } from "@/content/navigation";
import { serviceHref, services } from "@/content/services";
import { duration, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Hamburger toggle and a full-height panel below the header (under 1024px).
 * Locks page scroll, keeps keyboard focus inside the header while open,
 * closes on Escape, on choosing a destination, or when resized to desktop.
 */
export function MobileNavigation({ open, onOpenChange }: MobileNavigationProps) {
  const pathname = usePathname();
  const panelId = useId();
  const servicesId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(() => isActivePath(pathname, "/services/"));

  const close = () => onOpenChange(false);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current || !toggleRef.current) return;
      // Cycle focus between the toggle and the panel's controls.
      const focusable = [
        toggleRef.current,
        ...Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (el) => !el.closest("[inert]"),
        ),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 64rem)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) onOpenChange(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open, onOpenChange]);

  const linkClasses = (active: boolean) =>
    cn(
      "flex min-h-14 w-full items-center justify-between rounded-md px-4 font-display text-h4 transition-colors duration-(--duration-fast)",
      active ? "bg-ice text-deep" : "text-ink hover:bg-ice hover:text-interactive",
    );

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => onOpenChange(!open)}
        className="group/toggle relative grid size-11 place-items-center rounded-pill text-deep transition-colors duration-(--duration-fast) hover:bg-ice"
      >
        <span aria-hidden="true" className="relative block h-3.5 w-5">
          {["top-0", "top-1/2 -translate-y-1/2", "bottom-0"].map((position, index) => (
            <span
              key={position}
              className={cn(
                "absolute left-0 block h-0.5 w-full rounded-pill bg-current transition-[transform,opacity] duration-(--duration-base) ease-out-expo",
                position,
                index === 0 && "group-aria-expanded/toggle:translate-y-[6px] group-aria-expanded/toggle:rotate-45",
                index === 1 && "group-aria-expanded/toggle:scale-x-0 group-aria-expanded/toggle:opacity-0",
                index === 2 && "group-aria-expanded/toggle:-translate-y-[6px] group-aria-expanded/toggle:-rotate-45",
              )}
            />
          ))}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id={panelId}
            key="mobile-panel"
            className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain border-t border-line bg-white"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: duration.fast, ease: ease.standard } }}
            transition={{ duration: duration.base, ease: ease.outExpo }}
          >
            <nav aria-label="Main" className="mx-auto flex min-h-full max-w-narrow flex-col px-gutter pt-4 pb-8">
              <ul className="flex flex-col gap-1">
                {primaryNav.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  if (!item.hasServicesMenu) {
                    return (
                      <li key={item.href}>
                        <Link href={item.href} onClick={close} aria-current={active ? "page" : undefined} className={linkClasses(active)}>
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls={servicesId}
                        onClick={() => setServicesOpen((value) => !value)}
                        className={linkClasses(active)}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          strokeWidth={2}
                          className={cn(
                            "size-icon transition-transform duration-(--duration-base) ease-out-expo",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </button>

                      {/* Animated with grid rows so height is never measured in JS. */}
                      <div
                        id={servicesId}
                        inert={!servicesOpen}
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-(--duration-slow) ease-out-expo",
                          servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="flex flex-col gap-1 py-2 pl-2">
                            {services.map(({ slug, title, icon: Icon }) => {
                              const href = serviceHref(slug);
                              const current = pathname === href;
                              return (
                                <li key={slug}>
                                  <Link
                                    href={href}
                                    onClick={close}
                                    aria-current={current ? "page" : undefined}
                                    className={cn(
                                      "flex min-h-12 items-center gap-3 rounded-md px-3 py-2 text-body-sm font-medium transition-colors duration-(--duration-fast)",
                                      current ? "bg-ice text-deep" : "text-ink hover:bg-ice hover:text-interactive",
                                    )}
                                  >
                                    <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-sm bg-mist text-interactive">
                                      <Icon className="size-icon-sm" strokeWidth={1.75} />
                                    </span>
                                    {title}
                                  </Link>
                                </li>
                              );
                            })}
                            <li>
                              <Link
                                href="/services/"
                                onClick={close}
                                className="flex min-h-12 items-center gap-2 rounded-md px-3 text-button text-interactive hover:text-interactive-hover"
                              >
                                View all services
                                <ArrowRight aria-hidden="true" className="size-icon-sm" strokeWidth={2} />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6">
                <Button href={navActions.createService.href} variant="secondary" size="lg" fullWidth onClick={close}>
                  {navActions.createService.label}
                </Button>
                <Button href={navActions.talk.href} size="lg" fullWidth arrow onClick={close}>
                  {navActions.talk.label}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
