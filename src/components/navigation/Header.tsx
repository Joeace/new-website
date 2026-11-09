"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navActions } from "@/content/navigation";
import { duration } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { DesktopNavigation } from "./DesktopNavigation";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";

/**
 * Fixed global header. A spacer of the full header height sits in the page
 * flow, so compacting the bar on scroll never moves the content below.
 */
export function Header() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // An observer on a marker near the top avoids running code on every scroll event.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setCompact(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const menuOpen = megaOpen || mobileOpen;
  const height = compact ? "4rem" : "var(--spacing-nav)";

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-pill bg-deep px-5 py-3 text-button text-white shadow-lifted transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      {/* Reserves the header's full height in the page flow. */}
      <div aria-hidden="true" className="relative h-nav shrink-0">
        <div ref={sentinelRef} className="absolute top-2 h-px w-px" />
      </div>

      <AnimatePresence>
        {megaOpen && (
          <motion.div
            key="backdrop"
            aria-hidden="true"
            className="fixed inset-0 z-40 hidden bg-midnight/15 lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.base }}
          />
        )}
      </AnimatePresence>

      <header
        data-compact={compact}
        style={{ "--header-height": height } as CSSProperties}
        className={cn(
          "group/header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-(--duration-base) ease-standard",
          menuOpen && "border-line bg-white",
          !menuOpen &&
            compact &&
            "border-line bg-white/95 shadow-[0_8px_24px_-16px_rgb(23_36_58/0.18)] supports-[backdrop-filter]:bg-white/85 supports-[backdrop-filter]:backdrop-blur-xl",
          !menuOpen && !compact && "border-transparent bg-white",
        )}
      >
        <Container
          className="flex h-(--header-height) items-center justify-between gap-6 transition-[height] duration-(--duration-base) ease-standard"
        >
          <Logo onClick={closeMobile} nameClassName="max-[22rem]:hidden lg:max-xl:hidden" />

          <DesktopNavigation open={megaOpen} onOpenChange={setMegaOpen} />

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Button href={navActions.createService.href} variant="secondary" size="sm">
              {navActions.createService.label}
            </Button>
            <Button href={navActions.talk.href} size="sm" arrow>
              {navActions.talk.label}
            </Button>
          </div>

          <MobileNavigation open={mobileOpen} onOpenChange={setMobileOpen} />
        </Container>
      </header>
    </>
  );
}
