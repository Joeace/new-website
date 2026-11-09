"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { reveal } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before animating, for simple staggering. */
  delay?: number;
  /** Distance in pixels the content rises as it appears. */
  y?: number;
  className?: string;
};

/**
 * Fades and lifts content into view once, as it enters the viewport.
 * With reduced motion requested, content renders in place with no animation.
 */
export function Reveal({ children, delay = 0, y = reveal.distance, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: reveal.duration, delay, ease: reveal.ease }}
    >
      {children}
    </motion.div>
  );
}
