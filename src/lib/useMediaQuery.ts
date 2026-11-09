"use client";

import { useSyncExternalStore } from "react";

/**
 * Subscribes to a CSS media query. Returns false during server rendering,
 * so anything gated on it is a progressive enhancement.
 */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
