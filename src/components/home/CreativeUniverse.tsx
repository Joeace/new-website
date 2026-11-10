"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { serviceHref } from "@/content/services";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";
import {
  AnalyticsPanel,
  AudioTrack,
  DesignCanvas,
  EditorialPage,
  SearchBar,
  SocialPost,
  VideoFrame,
} from "./universe/Illustrations";

/*
 * THE MOTA CREATIVE UNIVERSE
 *
 * Layers, back to front:
 *   1. glow and tilted orbit rings
 *   2. connection lines from the core to each service object
 *   3. the MCM core: a metallic-rimmed glass disc holding the supplied logo
 *   4. seven floating service objects, each a link to its service page
 *
 * Motion is layered so nothing fights over `transform`:
 *   - entrance and float are CSS keyframes (visible without JavaScript and
 *     stopped automatically by the reduced-motion rule in globals.css)
 *   - pointer parallax and scroll depth are Motion values, enabled only on
 *     desktop with a fine pointer and when reduced motion is not requested
 */

type Tier = "all" | "md" | "wide";

type SatelliteConfig = {
  key: string;
  label: string;
  slug: string;
  /** Centre position in % of the composition: desktop, then phones. */
  x: number;
  y: number;
  mx?: number;
  my?: number;
  /** 0 (far) to 1 (near): drives parallax strength and stacking. */
  depth: number;
  /** Smallest breakpoint at which the object appears. */
  tier: Tier;
  float: { duration: number; delay: number; distance: number };
  enter: number;
  content: ReactNode;
};

const satellites: SatelliteConfig[] = [
  {
    key: "search",
    label: "Search & AI visibility",
    slug: "digital-marketing",
    x: 52, y: 4,
    depth: 0.45, tier: "wide",
    float: { duration: 8.5, delay: -2, distance: -8 },
    enter: 0.55,
    content: <SearchBar />,
  },
  {
    key: "video",
    label: "Video Production & Animation",
    slug: "video-production",
    x: 14, y: 22, mx: 24, my: 13,
    depth: 1, tier: "all",
    float: { duration: 7, delay: -1, distance: -12 },
    enter: 0.35,
    content: <VideoFrame />,
  },
  {
    key: "design",
    label: "Graphic Design & Visual Strategy",
    slug: "graphic-design",
    x: 84, y: 18, mx: 80, my: 16,
    depth: 0.75, tier: "md",
    float: { duration: 9, delay: -4, distance: -10 },
    enter: 0.45,
    content: <DesignCanvas />,
  },
  {
    key: "social",
    label: "Social Media Management & Advertising",
    slug: "social-media",
    x: 89, y: 58, mx: 86, my: 52,
    depth: 0.95, tier: "all",
    float: { duration: 7.5, delay: -3, distance: -12 },
    enter: 0.5,
    content: <SocialPost />,
  },
  {
    key: "analytics",
    label: "Digital Marketing & Growth",
    slug: "digital-marketing",
    x: 70, y: 90, mx: 70, my: 90,
    depth: 0.9, tier: "all",
    float: { duration: 8, delay: -5, distance: -10 },
    enter: 0.6,
    content: <AnalyticsPanel />,
  },
  {
    key: "audio",
    label: "Audio Production & Sound Engineering",
    slug: "audio-production",
    x: 15, y: 71, mx: 18, my: 79,
    depth: 0.7, tier: "all",
    float: { duration: 9.5, delay: -2.5, distance: -9 },
    enter: 0.4,
    content: <AudioTrack />,
  },
  {
    key: "editorial",
    label: "Content Writing & Editorial Strategy",
    slug: "content-writing",
    x: 30, y: 94,
    depth: 0.55, tier: "wide",
    float: { duration: 10, delay: -6, distance: -8 },
    enter: 0.65,
    content: <EditorialPage />,
  },
];

const tierClasses: Record<Tier, string> = {
  all: "block",
  md: "hidden md:block",
  /* 1360px and up, where the composition has room for all seven objects. */
  wide: "hidden min-[85rem]:block",
};

type Motion2D = { x: MotionValue<number>; y: MotionValue<number> };

export function CreativeUniverse({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const desktopPointer = useMediaQuery("(min-width: 64rem) and (hover: hover) and (pointer: fine)");
  const enhanced = desktopPointer && !reduceMotion;

  // Pointer position from -1 to 1 across the viewport, smoothed by a spring.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 50, damping: 20, mass: 0.8 };
  const pointer: Motion2D = { x: useSpring(pointerX, spring), y: useSpring(pointerY, spring) };

  // 0 while the composition is centred in view, 1 once it has scrolled away.
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["center center", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const coreScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  useEffect(() => {
    if (!enhanced) {
      pointerX.set(0);
      pointerY.set(0);
      return;
    }
    const onMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enhanced, pointerX, pointerY]);

  const coreX = useTransform(pointer.x, (v) => v * -6);
  const coreY = useTransform(pointer.y, (v) => v * -5);

  return (
    <motion.div
      ref={rootRef}
      style={enhanced ? { y: stageY } : undefined}
      className={cn("relative aspect-square [perspective:1200px]", className)}
    >
      {/* 1. Glow and orbits */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 animate-fade-in">
        <div className="absolute inset-[18%] rounded-pill bg-[radial-gradient(circle,rgb(47_128_237/0.28),rgb(47_128_237/0.08)_45%,transparent_70%)] blur-2xl" />
        <div className="absolute inset-[-6%] [transform:rotateX(66deg)_rotateZ(-18deg)] [transform-style:preserve-3d]">
          <div className="absolute inset-0 rounded-pill border border-silver" />
          <div className="absolute inset-[14%] rounded-pill border border-dashed border-electric/35" />
          <div className="absolute inset-[28%] rounded-pill border border-silver/80" />
          {/* Slow orbiting markers */}
          <div className="absolute inset-0 animate-orbit">
            <span className="absolute top-1/2 -left-1.5 size-3 rounded-pill bg-electric shadow-glow" />
            <span className="absolute -top-1 left-1/2 size-2 rounded-pill bg-deep" />
          </div>
          <div className="absolute inset-[14%] animate-orbit [animation-direction:reverse] [animation-duration:180s]">
            <span className="absolute -right-1 bottom-1/3 size-2.5 rounded-pill bg-silver ring-2 ring-white" />
          </div>
        </div>
      </div>

      {/* 2. Connection lines: one creative universe, not scattered cards */}
      <svg aria-hidden="true" viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 size-full animate-fade-in overflow-visible [animation-delay:400ms]">
        {satellites.map((s) => (
          <line
            key={s.key}
            x1="50"
            y1="50"
            x2={s.x}
            y2={s.y}
            vectorEffect="non-scaling-stroke"
            strokeDasharray="2 5"
            className={cn(
              "stroke-electric/30",
              s.tier === "wide" && "max-[85rem]:hidden",
              s.tier === "md" && "max-md:hidden",
              "max-md:hidden",
            )}
          />
        ))}
      </svg>

      {/* 3. The MCM core */}
      <motion.div
        aria-hidden="true"
        style={enhanced ? { x: coreX, y: coreY, scale: coreScale } : undefined}
        className="absolute inset-[28%] z-10"
      >
        <div className="size-full animate-emerge [--from-y:12px] [animation-delay:150ms]">
          <div className="size-full animate-float [--float-distance:-10px] [--float-duration:8s]">
            <CoreObject />
          </div>
        </div>
      </motion.div>

      {/* 4. Service objects */}
      <ul aria-label="Explore our services" className="absolute inset-0">
        {satellites.map((s) => (
          <Satellite key={s.key} config={s} pointer={pointer} enhanced={enhanced} />
        ))}
      </ul>
    </motion.div>
  );
}

function CoreObject() {
  return (
    <div className="relative size-full">
      {/* Layered geometric facets behind the disc */}
      <div className="absolute inset-[-10%] rotate-45 rounded-[22%] border border-electric/25 bg-white/30" />
      <div className="absolute inset-[-2%] rotate-[22deg] rounded-[24%] bg-linear-to-br from-electric/15 via-transparent to-deep/15" />
      {/* Contact shadow for a sense of weight */}
      <div className="absolute inset-x-[14%] -bottom-[16%] h-[10%] rounded-pill bg-deep/25 blur-xl" />
      {/* Metallic rim */}
      <div className="absolute inset-0 rounded-pill bg-[conic-gradient(from_210deg,#dce2ea,#ffffff,#2f80ed_30%,#ffffff_45%,#9aa8bd_60%,#ffffff_75%,#dce2ea)] p-[3px] shadow-lifted">
        {/* Glass face */}
        <div className="relative grid size-full place-items-center overflow-hidden rounded-pill bg-[radial-gradient(circle_at_32%_24%,#ffffff_0%,#f4f7fb_55%,#dce2ea_100%)] shadow-[inset_0_2px_8px_rgb(255_255_255),inset_0_-14px_30px_rgb(23_36_58/0.08)]">
          <div className="absolute -top-1/4 -left-1/4 size-3/4 rounded-pill bg-white/70 blur-2xl" />
          <Image
            src="/brand/mcm-logo-hero.webp"
            alt=""
            width={559}
            height={234}
            preload
            sizes="(min-width: 1024px) 220px, 160px"
            className="relative w-[74%] mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
}

function Satellite({
  config,
  pointer,
  enhanced,
}: {
  config: SatelliteConfig;
  pointer: Motion2D;
  enhanced: boolean;
}) {
  const { x, y, mx = x, my = y, depth, tier, float, enter, label, slug, content } = config;
  const px = useTransform(pointer.x, (v) => v * 22 * depth);
  const py = useTransform(pointer.y, (v) => v * 16 * depth);

  // Emerge from the direction of the core, so objects appear to spread outwards.
  const fromX = `${(50 - x) * 0.6}%`;
  const fromY = `${(50 - y) * 0.6}%`;

  return (
    <motion.li
      style={
        {
          "--x": `${x}%`,
          "--y": `${y}%`,
          "--mx": `${mx}%`,
          "--my": `${my}%`,
          zIndex: Math.round(depth * 10) + 10,
          ...(enhanced ? { x: px, y: py } : {}),
        } as CSSProperties
      }
      className={cn(
        "absolute top-(--my) left-(--mx) -translate-x-1/2 -translate-y-1/2 md:top-(--y) md:left-(--x)",
        tierClasses[tier],
      )}
    >
      <div
        className="animate-emerge"
        style={{ "--from-x": fromX, "--from-y": fromY, animationDelay: `${enter}s` } as CSSProperties}
      >
        <div
          className="md:animate-float [&:has(a:focus-visible)]:[animation-play-state:paused] [&:has(a:hover)]:[animation-play-state:paused]"
          style={
            {
              "--float-duration": `${float.duration}s`,
              "--float-distance": `${float.distance}px`,
              animationDelay: `${float.delay}s`,
            } as CSSProperties
          }
        >
          <Link
            href={serviceHref(slug)}
            aria-label={`Explore ${label}`}
            className={cn(
              "group/sat relative block rounded-lg outline-offset-4",
              "scale-[0.56] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.62] xl:scale-[0.74] min-[85rem]:scale-[0.82] 2xl:scale-90",
              depth < 0.6 && "opacity-90",
            )}
          >
            <div className="transition-[translate,filter] duration-(--duration-slow) ease-out-expo group-hover/sat:-translate-y-1.5 group-hover/sat:drop-shadow-[0_18px_28px_rgb(23_36_58/0.16)] group-focus-visible/sat:-translate-y-1.5">
              {content}
            </div>
            {/* Service label: revealed on hover and on keyboard focus */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full rounded-pill bg-midnight px-3 py-1.5 text-[0.8125rem] font-medium whitespace-nowrap text-white opacity-0 shadow-lifted transition-[opacity,translate] duration-(--duration-base) ease-out-expo group-hover/sat:-translate-y-[calc(100%+4px)] group-hover/sat:opacity-100 group-focus-visible/sat:-translate-y-[calc(100%+4px)] group-focus-visible/sat:opacity-100"
            >
              {label}
            </span>
          </Link>
        </div>
      </div>
    </motion.li>
  );
}
