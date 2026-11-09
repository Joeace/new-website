/**
 * Motion tokens for Motion for React, which needs plain numbers.
 * These mirror the CSS tokens in src/app/globals.css (--duration-*, --ease-*);
 * change both together.
 */
export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.5,
  slower: 0.8,
} as const;

export const ease = {
  standard: [0.2, 0, 0, 1],
  outExpo: [0.16, 1, 0.3, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
} as const;

/** Default entrance: a short rise with a soft fade. */
export const reveal = {
  distance: 24,
  duration: duration.slower,
  ease: ease.outExpo,
  stagger: 0.08,
} as const;
