import { cn } from "@/lib/utils";

type MediaTextureProps = {
  /** A path from `textures` in content/media.ts. */
  src: string;
  /** "light": multiplied into white or ice. "dark": screened onto blue. */
  tone?: "light" | "dark";
  /** Visible strength, 0–1. Defaults: 0.07 on light, 0.12 on dark. */
  opacity?: number;
  /** Where the photograph sits and how it fades, as utility classes. */
  className?: string;
};

/**
 * A large monochrome photograph used as a watermark-like background texture
 * (about 5–9% visible). Purely decorative: hidden from assistive technology,
 * never intercepts the pointer, and faded at the edges with a mask.
 */
export function MediaTexture({ src, tone = "light", opacity, className }: MediaTextureProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 bg-cover bg-center bg-no-repeat",
        tone === "light" ? "mix-blend-multiply" : "mix-blend-screen",
        className,
      )}
      style={{ backgroundImage: `url(${src})`, opacity: opacity ?? (tone === "light" ? 0.07 : 0.12) }}
    />
  );
}
