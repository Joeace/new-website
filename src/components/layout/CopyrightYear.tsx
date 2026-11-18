"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The current year. The static export renders the build year; in the
 * browser it switches to the visitor's current year, so the copyright line
 * stays correct even if the site is not rebuilt for a while.
 */
export function CopyrightYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => buildYear,
  );
  return <>{year}</>;
}
