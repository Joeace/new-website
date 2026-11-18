import type { ReactNode } from "react";
import type { SocialPlatform } from "@/content/navigation";

/*
 * Simplified platform marks for social links (Lucide no longer ships brand
 * logos). 24x24, drawn in currentColor. Decorative: the link carries the
 * accessible name.
 */
const paths: Record<SocialPlatform, ReactNode> = {
  LinkedIn: (
    <path d="M4.5 9h3v10.5h-3V9Zm1.5-5a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 6 4Zm4 5h2.9v1.45h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.62v5.99h-3v-5.31c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81v5.4H10V9Z" />
  ),
  Instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" />
    </>
  ),
  Facebook: (
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.55V4.47A20.6 20.6 0 0 0 14.3 4.3c-2.24 0-3.8 1.37-3.8 3.88v2.32H8v3h2.5V21h3Z" />
  ),
  X: <path d="M17.6 3.5h2.95l-6.44 7.36 7.58 10.02h-5.93l-4.65-6.08-5.31 6.08H2.85l6.89-7.88L2.47 3.5h6.08l4.2 5.56 4.85-5.56Zm-1.03 15.6h1.63L7.66 5.17H5.9l10.67 13.93Z" />,
  TikTok: (
    <path d="M16.6 3.5h-3.1v11.7a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V9.55a5.7 5.7 0 1 0 4.92 5.65V9.2a7.3 7.3 0 0 0 4.1 1.27V7.38A4.1 4.1 0 0 1 16.6 3.5Z" />
  ),
  YouTube: (
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  ),
};

export function SocialIcon({ platform, className }: { platform: SocialPlatform; className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className={className}>
      {paths[platform]}
    </svg>
  );
}
