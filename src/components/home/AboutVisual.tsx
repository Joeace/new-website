import { Clapperboard, Lightbulb, Megaphone, TrendingUp } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/*
 * "Creative workspace" composition for the About section.
 *
 * One art-directed scene rather than scattered objects:
 *   - a tablet showing a brand layout (creative thinking, digital media)
 *   - the real brand palette and typefaces (design and identity)
 *   - a four-step process card, idea to growth (strategy and growth)
 *   - quiet geometric forms in electric blue and silver (technology)
 *
 * Server-rendered, no JavaScript. Layers drift at different rates with
 * CSS scroll-driven animation where supported (see scroll-drift).
 */

const palette = [
  { name: "Deep", className: "bg-deep" },
  { name: "Electric", className: "bg-electric" },
  { name: "Silver", className: "bg-silver" },
  { name: "Ice", className: "bg-ice ring-1 ring-line" },
];

const process = [
  { label: "Idea", icon: Lightbulb },
  { label: "Create", icon: Clapperboard },
  { label: "Launch", icon: Megaphone },
  { label: "Grow", icon: TrendingUp },
];

const layer = (drift: string) => ({ "--drift": drift }) as CSSProperties;
const card = "rounded-lg bg-white shadow-lifted ring-1 ring-line/70";

export function AboutVisual({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Illustration of a creative workspace: a tablet showing a brand layout, the Mota colour palette and typefaces, and a four-step process from idea to growth."
      className={cn("relative isolate aspect-[5/6] w-full", className)}
    >
      <div aria-hidden="true" className="absolute inset-0">
        {/* Stage: an ice panel with a fading grid */}
        <div className="absolute inset-[6%_4%_4%_8%] overflow-hidden rounded-xl bg-ice">
          <div className="absolute inset-0 bg-grid opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_10%,rgb(47_128_237/0.12),transparent_70%)]" />
        </div>

        {/* Geometric forms (furthest layer) */}
        <div className="absolute inset-0 scroll-drift" style={layer("28px")}>
          <div className="absolute top-[1%] right-[6%] size-[30%] rounded-pill bg-linear-to-br from-electric to-deep opacity-90" />
          <div className="absolute top-[3%] right-[2%] size-[30%] rounded-pill border border-electric/30" />
          <div className="absolute bottom-[10%] left-[2%] size-[18%] rounded-pill border-[1.5px] border-silver" />
          <div className="absolute bottom-[30%] left-[4%] size-[7%] rotate-12 rounded-sm bg-deep" />
        </div>

        {/* Tablet with a brand layout (middle layer) */}
        <div className="absolute inset-[16%_12%_20%_16%] scroll-drift" style={layer("10px")}>
          <div className="size-full -rotate-[4deg] rounded-[1.75rem] bg-midnight p-[3.2%] shadow-[0_40px_70px_-28px_rgb(23_36_58/0.45)]">
            <div className="relative flex size-full flex-col overflow-hidden rounded-[1.25rem] bg-white">
              {/* Screen: navigation bar */}
              <div className="flex items-center gap-2 px-[7%] pt-[7%]">
                <span className="size-2.5 rounded-pill bg-deep" />
                <span className="h-1.5 w-[18%] rounded-pill bg-midnight/70" />
                <span className="ml-auto h-1.5 w-[10%] rounded-pill bg-silver" />
                <span className="h-1.5 w-[10%] rounded-pill bg-silver" />
                <span className="h-3 w-[16%] rounded-pill bg-interactive" />
              </div>
              {/* Screen: headline built from the brand tagline */}
              <div className="px-[7%] pt-[9%]">
                <span className="block h-1.5 w-[22%] rounded-pill bg-electric/60" />
                <p className="mt-3 font-display text-[clamp(1.05rem,3.6vw,1.6rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink lg:text-[clamp(1rem,1.6vw,1.6rem)]">
                  Ideas into <span className="text-gradient">influence.</span>
                </p>
                <span className="mt-3 block h-1.5 w-[70%] rounded-pill bg-silver" />
                <span className="mt-1.5 block h-1.5 w-[52%] rounded-pill bg-silver" />
              </div>
              {/* Screen: media tiles */}
              <div className="mt-auto grid grid-cols-5 gap-[3%] p-[7%]">
                <div className="col-span-3 aspect-[4/3] rounded-md bg-linear-to-br from-deep via-interactive to-electric" />
                <div className="col-span-2 grid gap-[8%]">
                  <div className="rounded-md bg-mist" />
                  <div className="rounded-md bg-ice ring-1 ring-line" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating detail cards (nearest layer) */}
        <div className="absolute inset-0 scroll-drift" style={layer("-22px")}>
          {/* Palette */}
          <div className={cn(card, "absolute top-[8%] left-0 w-[40%] p-[3.5%]")}>
            <p className="text-[0.625rem] font-semibold tracking-[0.14em] text-muted uppercase">Palette</p>
            <div className="mt-2 flex gap-1.5">
              {palette.map((swatch) => (
                <span key={swatch.name} className={cn("aspect-square flex-1 rounded-pill", swatch.className)} />
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className={cn(card, "absolute bottom-[14%] left-[1%] w-[34%] p-[3.5%]")}>
            <p className="font-display text-[clamp(1.75rem,6vw,2.5rem)] leading-none font-extrabold tracking-[-0.04em] text-deep lg:text-[clamp(1.5rem,2.6vw,2.5rem)]">
              Aa
            </p>
            <p className="mt-1.5 text-[0.5625rem] font-semibold tracking-[0.06em] whitespace-nowrap text-muted uppercase sm:text-[0.625rem] sm:tracking-[0.12em]">
              Manrope · Inter
            </p>
          </div>

          {/* Process: idea to growth */}
          <div className={cn(card, "absolute right-0 bottom-[3%] w-[56%] p-[4%]")}>
            <div className="flex items-center justify-between">
              <span className="h-1.5 w-[34%] rounded-pill bg-midnight/70" />
              <span className="h-1.5 w-[14%] rounded-pill bg-silver" />
            </div>
            <ol className="relative mt-4 grid grid-cols-4">
              <span className="absolute top-[0.95rem] right-[12%] left-[12%] h-px bg-silver" />
              <span className="absolute top-[0.95rem] right-[12%] left-[12%] h-px scroll-grow-x bg-electric" />
              {process.map(({ label, icon: Icon }, index) => (
                <li key={label} className="relative flex flex-col items-center gap-1.5">
                  <span
                    className={cn(
                      "grid size-8 place-items-center rounded-pill ring-4 ring-white",
                      index === process.length - 1 ? "bg-interactive text-white" : "bg-mist text-interactive",
                    )}
                  >
                    <Icon className="size-3.5" strokeWidth={2} />
                  </span>
                  <span className="text-[0.6875rem] font-medium text-slate">{label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
