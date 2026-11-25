"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import { serviceHref, services } from "@/content/services";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

/*
 * THE SIGNAL: the hero's brand signature.
 *
 * The blue C of the MCM monogram becomes an electric arc, open on the right
 * like the letter, with a spark of light travelling along it. The supplied
 * logo sits at its centre on a glass disc (unchanged). Six discipline chips
 * orbit the disc, each a labelled link to its service. From the bottom of the
 * C, the signal line drops away down the page.
 *
 * Motion layers (no element animates the same property twice):
 *   CSS: entrance, chip float, arc spark, inner ring rotation, line draw
 *   Motion: pointer parallax and scroll depth, desktop with a fine pointer only
 * All of it stops under prefers-reduced-motion.
 */

const chips = [
  { slug: "content-writing", label: "Content", angle: -128, depth: 0.7 },
  { slug: "video-production", label: "Video", angle: -58, depth: 1 },
  { slug: "graphic-design", label: "Design", angle: -4, depth: 0.85 },
  { slug: "digital-marketing", label: "Growth", angle: 52, depth: 0.95 },
  { slug: "social-media", label: "Social", angle: 128, depth: 0.8 },
  { slug: "audio-production", label: "Audio", angle: 184, depth: 0.75 },
];

/* The C: radius 46 of a 100 box, with a 70 degree opening centred on the right. */
const R = 46;
const CIRC = 2 * Math.PI * R;
const ARC = CIRC * (290 / 360);

export function SignalSignature({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const desktopPointer = useMediaQuery("(min-width: 64rem) and (hover: hover) and (pointer: fine)");
  const enhanced = desktopPointer && !reduceMotion;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 50, damping: 20, mass: 0.8 };
  const pointer = { x: useSpring(pointerX, spring), y: useSpring(pointerY, spring) };

  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["center center", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const discX = useTransform(pointer.x, (v) => v * -7);
  const discY = useTransform(pointer.y, (v) => v * -6);
  const ringRotate = useTransform(pointer.x, (v) => v * 6);

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

  return (
    <motion.div
      ref={rootRef}
      style={enhanced ? { y: stageY } : undefined}
      className={cn("relative aspect-square [--orbit:37%] md:[--orbit:41%] lg:[--orbit:43%]", className)}
    >
      {/* Light behind the signature */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] animate-fade-in rounded-pill bg-[radial-gradient(circle,rgb(47_128_237/0.32),rgb(18_59_112/0.1)_45%,transparent_70%)] blur-2xl"
      />

      {/* The C arc, its spark, and the inner rings */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        style={enhanced ? { rotate: ringRotate } : undefined}
        className="absolute inset-0 size-full animate-fade-in overflow-visible"
      >
        <defs>
          <linearGradient id="signal-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#123b70" />
            <stop offset="0.55" stopColor="#1c6ad4" />
            <stop offset="1" stopColor="#2f80ed" />
          </linearGradient>
        </defs>
        {/* Outer C, rotated so its opening faces right */}
        <g transform="rotate(35 50 50)">
          <circle cx="50" cy="50" r={R} fill="none" stroke="url(#signal-arc)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray={`${ARC} ${CIRC}`} />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray={`5 ${CIRC}`}
            className="animate-spark [--spark-duration:7s] drop-shadow-[0_0_3px_rgb(47_128_237)]"
            style={{ "--spark-travel": `${-(ARC - 5)}` } as CSSProperties}
          />
        </g>
        {/* Inner rings */}
        <g className="origin-center animate-orbit [animation-duration:120s] [animation-direction:reverse]">
          <circle cx="50" cy="50" r="38" fill="none" stroke="#123b70" strokeOpacity="0.35" strokeWidth="0.5" strokeDasharray="1.2 2.4" />
        </g>
        <circle cx="50" cy="50" r="31" fill="none" stroke="#dce2ea" strokeWidth="0.5" />
      </motion.svg>

      {/* The MCM disc */}
      <motion.div aria-hidden="true" style={enhanced ? { x: discX, y: discY } : undefined} className="absolute inset-[27%] z-10">
        <div className="size-full animate-emerge [--from-y:12px] [animation-delay:150ms]">
          <div className="size-full animate-float [--float-distance:-8px] [--float-duration:8s]">
            <div className="relative size-full rounded-pill bg-[conic-gradient(from_210deg,#dce2ea,#ffffff,#2f80ed_30%,#ffffff_45%,#9aa8bd_60%,#ffffff_75%,#dce2ea)] p-[3px] shadow-[0_34px_70px_-24px_rgb(18_59_112/0.55)]">
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
        </div>
      </motion.div>

      {/* The signal line leaving the bottom of the C */}
      <span
        aria-hidden="true"
        className="absolute top-[97%] left-1/2 hidden h-[clamp(4rem,12vh,9rem)] w-0.5 -translate-x-1/2 origin-top animate-draw-down rounded-pill bg-linear-to-b from-electric to-transparent [animation-delay:900ms] lg:block"
      />

      {/* Discipline chips, each a link to its service */}
      <ul aria-label="Our disciplines" className="absolute inset-0 z-20">
        {chips.map((chip, index) => (
          <Chip key={chip.slug} chip={chip} index={index} pointer={pointer} enhanced={enhanced} />
        ))}
      </ul>
    </motion.div>
  );
}

function Chip({
  chip,
  index,
  pointer,
  enhanced,
}: {
  chip: (typeof chips)[number];
  index: number;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  enhanced: boolean;
}) {
  const service = services.find((s) => s.slug === chip.slug);
  const px = useTransform(pointer.x, (v) => v * 16 * chip.depth);
  const py = useTransform(pointer.y, (v) => v * 12 * chip.depth);
  if (!service) return null;
  const Icon = service.icon;
  const rad = (chip.angle * Math.PI) / 180;

  return (
    <motion.li
      style={
        {
          left: `calc(50% + ${Math.cos(rad).toFixed(4)} * var(--orbit))`,
          top: `calc(50% + ${Math.sin(rad).toFixed(4)} * var(--orbit))`,
          ...(enhanced ? { x: px, y: py } : {}),
        } as CSSProperties
      }
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <div className="animate-emerge" style={{ animationDelay: `${0.45 + index * 0.08}s`, "--from-x": `${-Math.cos(rad) * 40}%`, "--from-y": `${-Math.sin(rad) * 40}%` } as CSSProperties}>
        <div
          className="md:animate-float [&:has(a:focus-visible)]:[animation-play-state:paused] [&:has(a:hover)]:[animation-play-state:paused]"
          style={{ "--float-duration": `${7 + index * 0.7}s`, "--float-distance": "-7px", animationDelay: `${-index * 1.3}s` } as CSSProperties}
        >
          <Link
            href={serviceHref(service.slug)}
            aria-label={service.title}
            className="group/chip flex items-center gap-1.5 rounded-pill bg-white/90 py-1.5 pr-3 pl-1.5 text-[0.75rem] font-semibold whitespace-nowrap text-deep shadow-[0_10px_24px_-12px_rgb(23_36_58/0.45)] ring-1 ring-line backdrop-blur-sm transition-[background-color,color,box-shadow] duration-(--duration-base) ease-out-expo hover:bg-interactive hover:text-white hover:shadow-glow sm:gap-2 sm:py-2 sm:pr-4 sm:pl-2 sm:text-body-sm"
          >
            <span className="grid size-6 place-items-center rounded-pill bg-mist text-interactive transition-colors duration-(--duration-base) group-hover/chip:bg-white/20 group-hover/chip:text-white sm:size-7">
              <Icon aria-hidden="true" className="size-3.5" strokeWidth={2} />
            </span>
            {chip.label}
          </Link>
        </div>
      </div>
    </motion.li>
  );
}
