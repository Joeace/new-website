"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, type CSSProperties, type ReactNode } from "react";
import { serviceHref } from "@/content/services";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";
import { AnalyticsPanel, AudioTrack, DesignCanvas, EditorialPage, SearchBar, SocialPost, VideoFrame } from "./Illustrations";

/*
 * THE MOTA CONTENT MEDIA CREATIVE UNIVERSE
 *
 * A 3D scene without a 3D library: the MCM core turns towards the pointer in
 * real perspective, and depth around it is expressed per panel through scale
 * and parallax (nearer panels are larger and move more). Tilting the whole
 * stage, or giving each panel its own 3D layer, cost 15 to 30 fps because
 * every animated panel then redraws the full tilted scene; so only the small
 * core is rotated in 3D.
 *   - an orbit platform of rings laid flat beneath the core
 *   - the MCM core: the supplied logo on a metallic glass disc, inside the
 *     electric C arc (the monogram's C) with a travelling spark
 *   - seven capability panels at different depths, joined to the core by
 *     flowing signal lines, each a link to its service
 *
 * Motion: CSS entrance, float and the spark (time-based, visible without JS);
 * only transform animations run continuously (plus the one small spark), so
 * the scene stays cheap to render;
 * the stage tilts towards the pointer on desktop (Motion springs). Under
 * reduced motion everything is static, with the stage at its resting tilt.
 */

type Tier = "all" | "md" | "lg" | "xl";

type Panel = {
  key: string;
  label: string;
  slug: string;
  /** Centre in % of the stage, desktop then phone/tablet. */
  x: number;
  y: number;
  mx?: number;
  my?: number;
  /** Depth (towards the viewer is positive): sets size and parallax strength. */
  z: number;
  tier: Tier;
  float: number;
  enter: number;
  content: ReactNode;
};

const panels: Panel[] = [
  { key: "search", label: "Search & AI visibility", slug: "digital-marketing", x: 47, y: 7, z: -120, tier: "lg", float: 9, enter: 0.7, content: <SearchBar /> },
  { key: "video", label: "Video Production & Animation", slug: "video-production", x: 28, y: 24, mx: 24, my: 16, z: 90, tier: "all", float: 7, enter: 0.45, content: <VideoFrame /> },
  { key: "design", label: "Graphic Design & Visual Strategy", slug: "graphic-design", x: 82, y: 19, mx: 80, my: 15, z: 30, tier: "md", float: 8.5, enter: 0.55, content: <DesignCanvas /> },
  { key: "social", label: "Social Media Management & Advertising", slug: "social-media", x: 84, y: 57, mx: 84, my: 54, z: 120, tier: "all", float: 7.5, enter: 0.6, content: <SocialPost /> },
  { key: "analytics", label: "Digital Marketing & Growth", slug: "digital-marketing", x: 70, y: 89, mx: 68, my: 88, z: 70, tier: "all", float: 8, enter: 0.75, content: <AnalyticsPanel /> },
  { key: "audio", label: "Audio Production & Sound Engineering", slug: "audio-production", x: 24, y: 70, mx: 20, my: 76, z: 50, tier: "all", float: 9.5, enter: 0.5, content: <AudioTrack /> },
  { key: "editorial", label: "Content Writing & Editorial Strategy", slug: "content-writing", x: 40, y: 90, z: -40, tier: "xl", float: 10, enter: 0.8, content: <EditorialPage /> },
];

const tierClass: Record<Tier, string> = { all: "block", md: "hidden md:block", lg: "hidden lg:block", xl: "hidden xl:block" };

const CORE = { x: 55, y: 50 };
/* The monogram's C: radius 46 of 100 with a 70 degree opening on the right. */
const R = 46;
const CIRC = 2 * Math.PI * R;
const ARC = CIRC * (290 / 360);

export function CreativeUniverse({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const desktopPointer = useMediaQuery("(min-width: 64rem) and (hover: hover) and (pointer: fine)");
  const enhanced = desktopPointer && !reduceMotion;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 45, damping: 18, mass: 0.9 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  // The core rests turned slightly towards the headline; the pointer adds a few degrees.
  const rotateY = useTransform(sx, (v) => -10 + v * 14);
  const rotateX = useTransform(sy, (v) => 4 - v * 10);

  useEffect(() => {
    if (!enhanced) {
      px.set(0);
      py.set(0);
      return;
    }
    const onMove = (event: PointerEvent) => {
      px.set((event.clientX / window.innerWidth - 0.5) * 2);
      py.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enhanced, px, py]);

  return (
    <div className={cn("relative", className)}>
      {/* Atmosphere sits outside the 3D stage so it never flattens it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[4%_0%_0%_10%] animate-fade-in rounded-pill bg-[radial-gradient(circle_at_55%_50%,rgb(47_128_237/0.26),rgb(18_59_112/0.08)_42%,transparent_68%)] blur-2xl"
      />

      <div className="pointer-events-none relative aspect-[10/9] w-full">
        {/* 1. Orbit platform, laid flat beneath the core */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[74%] left-[55%] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 animate-fade-in [transform:scaleY(0.24)]"
        >
          <div className="absolute inset-0 rounded-pill border border-silver" />
          <div className="absolute inset-[10%] rounded-pill border border-dashed border-electric/35" />
          <div className="absolute inset-[22%] rounded-pill border border-silver/80" />
          <div className="absolute inset-0 rotate-[24deg]">
            <span className="absolute top-1/2 -left-1.5 size-3 rounded-pill bg-electric shadow-glow" />
            <span className="absolute -top-1 left-1/2 size-2 rounded-pill bg-deep" />
          </div>
        </div>

        {/* 2. Signal lines from the core to each capability */}
        <svg aria-hidden="true" viewBox="0 0 100 90" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 size-full overflow-visible">
          {panels.map((p) => (
            <path
              key={p.key}
              d={`M${CORE.x} ${CORE.y * 0.9} Q ${(CORE.x + p.x) / 2 + (p.y < 50 ? -6 : 6)} ${((CORE.y + p.y) / 2) * 0.9} ${p.x} ${p.y * 0.9}`}
              fill="none"
              stroke="#2f80ed"
              strokeOpacity="0.4"
              strokeWidth="1.2"
              strokeDasharray="3 6"
              vectorEffect="non-scaling-stroke"
              className={cn(
                p.tier === "lg" && "max-lg:hidden",
                p.tier === "xl" && "max-xl:hidden",
                p.tier === "md" && "max-md:hidden",
              )}
            />
          ))}
        </svg>

        {/* 3. The MCM core */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-[55%] z-[15] aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 [perspective:1000px] sm:w-[53%]"
        >
          {/* The core turns towards the pointer in real perspective */}
          <motion.div
            style={enhanced ? { rotateX, rotateY } : undefined}
            className="size-full [transform:rotateX(4deg)_rotateY(-10deg)] motion-reduce:[transform:none]"
          >
          <div className="size-full animate-emerge [--from-y:14px] [animation-delay:150ms]">
            <div className="relative size-full animate-float [--float-distance:-10px] [--float-duration:8s]">
              {/* C arc with spark. The core's box contains the whole arc: in a 3D
                  scene, drawing that spills outside a raised layer can be lost. */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
                <defs>
                  <linearGradient id="universe-c" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#123b70" />
                    <stop offset="0.55" stopColor="#1c6ad4" />
                    <stop offset="1" stopColor="#2f80ed" />
                  </linearGradient>
                </defs>
                <g transform="rotate(35 50 50)">
                  <circle cx="50" cy="50" r={R} fill="none" stroke="url(#universe-c)" strokeWidth="2" strokeLinecap="round" strokeDasharray={`${ARC} ${CIRC}`} />
                  <circle
                    cx="50"
                    cy="50"
                    r={R}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`6 ${CIRC}`}
                    className="animate-spark [--spark-duration:6s]"
                    style={{ "--spark-travel": `${-(ARC - 6)}` } as CSSProperties}
                  />
                </g>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#123b70" strokeOpacity="0.3" strokeWidth="0.6" strokeDasharray="1.4 2.6" className="origin-center animate-orbit [animation-direction:reverse] [animation-duration:120s]" />
              </svg>
              {/* Disc */}
              <div className="absolute inset-[12%] rounded-pill bg-[conic-gradient(from_210deg,#dce2ea,#ffffff,#2f80ed_30%,#ffffff_45%,#9aa8bd_60%,#ffffff_75%,#dce2ea)] p-[3px] shadow-[0_50px_90px_-30px_rgb(18_59_112/0.6)]">
                <div className="relative grid size-full place-items-center overflow-hidden rounded-pill bg-[radial-gradient(circle_at_32%_24%,#ffffff_0%,#f4f7fb_55%,#dce2ea_100%)] shadow-[inset_0_2px_10px_rgb(255_255_255),inset_0_-18px_36px_rgb(23_36_58/0.1)]">
                  <div className="absolute -top-1/4 -left-1/4 size-3/4 rounded-pill bg-white/70 blur-2xl" />
                  <div className="absolute inset-x-[18%] bottom-[10%] h-[18%] rounded-pill bg-electric/10 blur-xl" />
                  <Image
                    src="/brand/mcm-logo-hero.webp"
                    alt=""
                    width={559}
                    height={234}
                    preload
                    sizes="(min-width: 1024px) 320px, 200px"
                    className="relative w-[76%] mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>

        {/* 4. Capability panels */}
        {/* The stage and this list ignore the pointer: in a 3D scene their own boxes
            are surfaces that would cover panels set further back. Only the links take it. */}
        <ul aria-label="What Mota Content Media creates" className="pointer-events-none absolute inset-0">
          {panels.map((p, index) => (
            <PanelItem key={p.key} panel={p} pointer={{ x: sx, y: sy }} enhanced={enhanced}>
              <div
                className="animate-emerge"
                style={{ animationDelay: `${p.enter}s`, "--from-x": `${((CORE.x - p.x) * 0.5).toFixed(1)}%`, "--from-y": `${((CORE.y - p.y) * 0.5).toFixed(1)}%` } as CSSProperties}
              >
                <div
                  className="md:animate-float [&:has(a:focus-visible)]:[animation-play-state:paused] [&:has(a:hover)]:[animation-play-state:paused]"
                  style={{ "--float-duration": `${p.float}s`, "--float-distance": "-10px", animationDelay: `${-index * 1.4}s` } as CSSProperties}
                >
                  <Link
                    href={serviceHref(p.slug)}
                    aria-label={`Explore ${p.label}`}
                    className="group/panel pointer-events-auto relative block scale-[0.56] rounded-lg outline-offset-4 sm:scale-[0.68] md:scale-[0.78] lg:scale-[0.74] xl:scale-[0.86] 2xl:scale-95"
                  >
                    <div className="transition-[translate,filter] duration-(--duration-slow) ease-out-expo group-hover/panel:-translate-y-2 group-hover/panel:drop-shadow-[0_22px_30px_rgb(23_36_58/0.2)] group-focus-visible/panel:-translate-y-2">
                      {p.content}
                    </div>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full rounded-pill bg-midnight px-3 py-1.5 text-[0.8125rem] font-medium whitespace-nowrap text-white opacity-0 shadow-lifted transition-[opacity,translate] duration-(--duration-base) ease-out-expo group-hover/panel:-translate-y-[calc(100%+4px)] group-hover/panel:opacity-100 group-focus-visible/panel:-translate-y-[calc(100%+4px)] group-focus-visible/panel:opacity-100"
                    >
                      {p.label}
                    </span>
                  </Link>
                </div>
              </div>
            </PanelItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* A panel's position, depth size and pointer parallax (nearer panels move more). */
function PanelItem({
  panel: p,
  pointer,
  enhanced,
  children,
}: {
  panel: Panel;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  enhanced: boolean;
  children: ReactNode;
}) {
  const strength = 0.6 + (p.z + 140) / 260; // about 0.6 (far) to 1.6 (near)
  const x = useTransform(pointer.x, (v) => v * 14 * strength);
  const y = useTransform(pointer.y, (v) => v * 10 * strength);
  return (
    <motion.li
      style={
        {
          "--x": `${p.x}%`,
          "--y": `${p.y}%`,
          "--mx": `${p.mx ?? p.x}%`,
          "--my": `${p.my ?? p.y}%`,
          zIndex: Math.round(p.z / 10) + 20,
          ...(enhanced ? { x, y } : {}),
        } as CSSProperties
      }
      className={cn(
        "absolute top-(--my) left-(--mx) -translate-x-1/2 -translate-y-1/2 md:top-(--y) md:left-(--x)",
        tierClass[p.tier],
      )}
    >
      {/* Depth as size: far panels slightly smaller, near ones slightly larger */}
      <div style={{ scale: (1 + p.z / 900).toFixed(3) }}>{children}</div>
    </motion.li>
  );
}
