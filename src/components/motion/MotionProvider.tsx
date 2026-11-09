"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Applies site-wide Motion settings. reducedMotion="user" makes every
 * Motion animation honour the visitor's prefers-reduced-motion setting:
 * movement is removed and only opacity changes remain.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
