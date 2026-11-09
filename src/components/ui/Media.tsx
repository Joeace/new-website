import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-video",
  cinema: "aspect-[21/9]",
} as const;

const radii = {
  none: "",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
} as const;

type MediaFrameProps = {
  /** An image or video, usually next/image with `fill` and `sizes`. */
  children: ReactNode;
  ratio?: keyof typeof ratios;
  radius?: keyof typeof radii;
  /** Zooms the media gently when an ancestor with the `group` class is hovered. */
  zoomOnHover?: boolean;
  /** Adds a soft bottom gradient so overlaid text stays readable. */
  scrim?: boolean;
  /** Content laid over the media, e.g. a category chip. */
  overlay?: ReactNode;
  /** A hairline edge that separates light images from white backgrounds. */
  bordered?: boolean;
  className?: string;
};

/**
 * The standard image treatment: fixed aspect ratio, rounded corners,
 * cover cropping, a hairline edge and an ice background while loading.
 */
export function MediaFrame({
  children,
  ratio = "landscape",
  radius = "lg",
  zoomOnHover = false,
  scrim = false,
  overlay,
  bordered = true,
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-ice",
        bordered && "shadow-hairline",
        ratios[ratio],
        radii[radius],
        "[&_img]:size-full [&_img]:object-cover [&_video]:size-full [&_video]:object-cover",
        zoomOnHover &&
          "[&_img]:transition-transform [&_img]:duration-(--duration-slower) [&_img]:ease-out-expo group-hover:[&_img]:scale-[1.04]",
        className,
      )}
    >
      {children}
      {scrim && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-midnight/45 to-transparent"
        />
      )}
      {overlay && <div className="absolute inset-0 z-10 flex items-start justify-between p-4">{overlay}</div>}
    </div>
  );
}
