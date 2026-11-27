import type { CSSProperties } from "react";
import type { Photo as PhotoAsset } from "@/content/media";
import { cn } from "@/lib/utils";

type PhotoProps = {
  photo: PhotoAsset;
  /** The `sizes` attribute: how wide the image is shown at each breakpoint. */
  sizes: string;
  /** Above-the-fold images load eagerly with high priority. */
  priority?: boolean;
  /** Overrides the registry alt text; pass "" for a decorative image. */
  alt?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * A responsive photograph from the media registry: WebP at several widths,
 * lazy-loaded below the fold, with intrinsic dimensions so the layout never
 * shifts. Static export serves the files as they are (no image optimiser).
 */
export function Photo({ photo, sizes, priority = false, alt, className, style }: PhotoProps) {
  const largest = photo.widths[photo.widths.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export: pre-sized WebP files
    <img
      src={`${photo.src}-${largest}.webp`}
      srcSet={photo.widths.map((w) => `${photo.src}-${w}.webp ${w}w`).join(", ")}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={alt ?? photo.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={cn("object-cover", className)}
      style={style}
    />
  );
}
