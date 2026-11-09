"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, type KeyboardEvent, type PointerEvent } from "react";
import { Container } from "@/components/ui/Container";
import { isActivePath, primaryNav } from "@/content/navigation";
import { duration, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { NavigationLink, navItemClasses } from "./NavigationLink";
import { ServicesMegaMenu } from "./ServicesMegaMenu";

type OpenReason = "hover" | "click";

type DesktopNavigationProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const HOVER_OPEN_DELAY = 90;
const HOVER_CLOSE_DELAY = 200;

/**
 * Centre links plus the Services mega menu (a disclosure, not an ARIA menu).
 * Opens on click, Enter, Space or ArrowDown; also on mouse hover with intent
 * delays. Closes on outside click, Escape, focus leaving, or choosing a link.
 */
export function DesktopNavigation({ open, onOpenChange }: DesktopNavigationProps) {
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reasonRef = useRef<OpenReason>("click");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const close = useCallback(
    (returnFocus = false) => {
      clearTimer();
      onOpenChange(false);
      if (returnFocus) triggerRef.current?.focus();
    },
    [onOpenChange],
  );

  // Outside click and Escape, only while open.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close(rootRef.current?.contains(document.activeElement) ?? false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  useEffect(() => clearTimer, []);

  const handleTriggerClick = () => {
    clearTimer();
    // A click while hover has just opened the menu pins it open instead of closing it.
    if (open && reasonRef.current === "hover") {
      reasonRef.current = "click";
      return;
    }
    reasonRef.current = "click";
    onOpenChange(!open);
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      reasonRef.current = "click";
      onOpenChange(true);
      requestAnimationFrame(() => panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
    }
  };

  const handlePointerEnter = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    clearTimer();
    if (open) return;
    timerRef.current = setTimeout(() => {
      reasonRef.current = "hover";
      onOpenChange(true);
    }, HOVER_OPEN_DELAY);
  };

  const handlePointerLeave = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    clearTimer();
    if (open && reasonRef.current === "hover") {
      timerRef.current = setTimeout(() => onOpenChange(false), HOVER_CLOSE_DELAY);
    }
  };

  const servicesActive = isActivePath(pathname, "/services/");

  return (
    <div
      ref={rootRef}
      className="hidden lg:flex lg:flex-1 lg:justify-center"
      onBlur={(event) => {
        // Close when keyboard focus moves to an element outside the navigation.
        // Pointer clicks outside are handled by the pointerdown listener.
        const next = event.relatedTarget as Node | null;
        if (open && next && !rootRef.current?.contains(next)) close();
      }}
    >
      <nav aria-label="Main">
        <ul className="flex items-center gap-1 xl:gap-2">
          {primaryNav.map((item) =>
            item.hasServicesMenu ? (
              <li key={item.href} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
                <button
                  ref={triggerRef}
                  type="button"
                  aria-expanded={open}
                  aria-controls={open ? menuId : undefined}
                  onClick={handleTriggerClick}
                  onKeyDown={handleTriggerKeyDown}
                  className={cn(navItemClasses(servicesActive), open && !servicesActive && "text-interactive")}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    strokeWidth={2}
                    className={cn(
                      "size-icon-sm transition-transform duration-(--duration-base) ease-out-expo",
                      open && "rotate-180",
                    )}
                  />
                </button>
              </li>
            ) : (
              <li key={item.href}>
                <NavigationLink href={item.href} onClick={() => close()}>
                  {item.label}
                </NavigationLink>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* Positioned against the fixed header, directly below the bar. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="services-menu"
            className="absolute inset-x-0 top-full pt-2"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: duration.fast, ease: ease.standard } }}
            transition={{ duration: duration.base, ease: ease.outExpo }}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
          >
            <Container>
              <ServicesMegaMenu ref={panelRef} id={menuId} onNavigate={() => close()} />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
