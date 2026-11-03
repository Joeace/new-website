/**
 * Joins class names, skipping falsy values.
 * Kept dependency-free; swap for clsx + tailwind-merge only if class
 * conflicts between variants ever become a real problem.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
