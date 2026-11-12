import { Bookmark, Heart, MessageCircle, Mic, Pause, Search, Send, SkipBack, SkipForward } from "lucide-react";
import type { ReactNode } from "react";

/*
 * Concept project artwork, drawn in HTML and SVG (no image files).
 * Each piece is a CSS size container and sizes everything in cqw, so it
 * scales crisply with its card at every breakpoint.
 * Purely illustrative: no client names, logos or performance figures.
 */

function Frame({ className, children }: { className: string; children: ReactNode }) {
  return <div aria-hidden="true" className={`@container absolute inset-0 overflow-hidden ${className}`}>{children}</div>;
}

const skeleton = "block rounded-pill";

/** An abstract brand mark used across the identity concept. */
function Mark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute top-0 left-0 size-[64%] rounded-pill bg-electric" />
      <span className="absolute right-0 bottom-0 size-[60%] rotate-12 rounded-[22%] bg-deep mix-blend-multiply" />
    </span>
  );
}

/* 01: Brand identity, stationery and brand applications on deep blue */
export function BrandIdentityArt() {
  return (
    <Frame className="bg-linear-to-br from-deep via-[#163f78] to-midnight">
      <div className="absolute inset-0 bg-grid opacity-25 invert" />
      <div className="absolute -top-[20%] -right-[10%] size-[60%] rounded-pill bg-electric/30 blur-[6cqw]" />

      {/* Letterhead */}
      <div className="absolute top-[12%] left-[7%] aspect-[1/1.32] w-[30%] -rotate-[7deg] rounded-[1.2cqw] bg-white p-[2.4cqw] shadow-[0_3cqw_6cqw_-2cqw_rgb(0_0_0/0.5)]">
        <Mark className="size-[4.5cqw]" />
        <span className={`${skeleton} mt-[3cqw] h-[0.9cqw] w-[60%] bg-midnight/70`} />
        <div className="mt-[2cqw] flex flex-col gap-[1cqw]">
          {["w-full", "w-11/12", "w-full", "w-4/5", "w-full", "w-2/3"].map((w, i) => (
            <span key={i} className={`${skeleton} h-[0.6cqw] ${w} bg-silver`} />
          ))}
        </div>
        <span className="absolute right-[2.4cqw] bottom-[2.4cqw] left-[2.4cqw] h-[0.5cqw] rounded-pill bg-electric/70" />
      </div>

      {/* Business cards, front and back */}
      <div className="absolute top-[16%] right-[8%] aspect-[1.75] w-[36%] rotate-[6deg] rounded-[1.2cqw] bg-electric p-[2.6cqw] shadow-[0_3cqw_6cqw_-2cqw_rgb(0_0_0/0.5)]">
        <div className="grid size-full place-items-center">
          <span className="relative inline-block size-[9cqw]">
            <span className="absolute top-0 left-0 size-[64%] rounded-pill bg-white" />
            <span className="absolute right-0 bottom-0 size-[60%] rotate-12 rounded-[22%] bg-deep/80" />
          </span>
        </div>
      </div>
      <div className="absolute top-[42%] right-[18%] aspect-[1.75] w-[36%] -rotate-[3deg] rounded-[1.2cqw] bg-white p-[2.6cqw] shadow-[0_3cqw_6cqw_-2cqw_rgb(0_0_0/0.5)]">
        <Mark className="size-[5cqw]" />
        <span className={`${skeleton} mt-[2.6cqw] h-[1cqw] w-[45%] bg-midnight/80`} />
        <span className={`${skeleton} mt-[1.2cqw] h-[0.7cqw] w-[30%] bg-silver`} />
        <span className={`${skeleton} absolute right-[2.6cqw] bottom-[2.6cqw] h-[0.7cqw] w-[28%] bg-silver`} />
      </div>

      {/* Colour system */}
      <div className="absolute bottom-[9%] left-[8%] flex items-center gap-[1.2cqw] rounded-pill bg-white/95 p-[1.2cqw] shadow-[0_2cqw_4cqw_-2cqw_rgb(0_0_0/0.4)]">
        {["bg-deep", "bg-electric", "bg-silver", "bg-ice ring-1 ring-line"].map((c) => (
          <span key={c} className={`size-[4cqw] rounded-pill ${c}`} />
        ))}
      </div>

      {/* Typography */}
      <div className="absolute right-[7%] bottom-[8%] rounded-[1.2cqw] bg-white/10 px-[2.4cqw] py-[1.6cqw] ring-1 ring-white/20 backdrop-blur-sm">
        <p className="font-display text-[7cqw] leading-none font-extrabold tracking-[-0.04em] text-white">Aa</p>
      </div>
    </Frame>
  );
}

/* 02: Video campaign, a cinematic frame with letterboxing and a filmstrip */
export function VideoCampaignArt() {
  return (
    <Frame className="bg-midnight">
      {/* Scene */}
      <div className="absolute inset-x-0 top-[9%] bottom-[30%] overflow-hidden bg-linear-to-b from-deep via-interactive to-[#9cc4f7]">
        <div className="absolute top-[22%] left-[58%] size-[22cqw] rounded-pill bg-white/85 blur-[0.6cqw]" />
        <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[70%] w-full">
          <path d="M0 40 18 26l14 10 18-18 16 14 12-8 22 16v20H0Z" fill="#123b70" opacity="0.75" />
          <path d="M0 50 22 38l18 9 20-14 18 12 22-10v25H0Z" fill="#17243a" />
        </svg>
        {/* Play */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid size-[16cqw] place-items-center rounded-pill bg-white/20 ring-1 ring-white/50 backdrop-blur-md">
            <span className="ml-[1cqw] size-0 border-y-[3.4cqw] border-l-[5.6cqw] border-y-transparent border-l-white" />
          </span>
        </div>
        {/* Title-safe overlay */}
        <span className="absolute top-[8%] right-[6%] flex items-center gap-[1.4cqw] font-sans text-[3cqw] font-semibold tracking-[0.1em] text-white uppercase">
          <span className="size-[2cqw] rounded-pill bg-electric shadow-[0_0_2cqw_rgb(47_128_237)]" />
          Rec
        </span>
      </div>

      {/* Timeline */}
      <div className="absolute inset-x-[6%] bottom-[7%] flex flex-col gap-[2.4cqw]">
        <div className="grid grid-cols-5 gap-[1.4cqw]">
          {["from-deep to-interactive", "from-interactive to-[#9cc4f7]", "from-midnight to-deep", "from-electric to-deep", "from-[#9cc4f7] to-interactive"].map((g) => (
            <span key={g} className={`aspect-video rounded-[0.8cqw] bg-linear-to-br ${g} ring-1 ring-white/15`} />
          ))}
        </div>
        <div className="relative h-[0.9cqw] rounded-pill bg-white/15">
          <span className="absolute inset-y-0 left-0 w-[46%] rounded-pill bg-electric" />
          <span className="absolute top-1/2 left-[46%] size-[2.8cqw] -translate-x-1/2 -translate-y-1/2 rounded-pill bg-white" />
        </div>
      </div>
    </Frame>
  );
}

/* 03: Editorial content, a magazine spread */
export function EditorialArt() {
  return (
    <Frame className="bg-linear-to-b from-ice to-silver/70">
      <div className="absolute inset-x-[8%] top-[18%] bottom-[9%] flex -rotate-[2deg] shadow-[0_4cqw_8cqw_-3cqw_rgb(23_36_58/0.35)]">
        {/* Left page */}
        <div className="relative flex-1 rounded-l-[1cqw] bg-white p-[4cqw]">
          <span className="text-[2.4cqw] font-semibold tracking-[0.14em] text-interactive uppercase">Feature</span>
          <p className="mt-[2cqw] font-display text-[7.4cqw] leading-[0.98] font-extrabold tracking-[-0.04em] text-ink">
            Ideas that inform.
          </p>
          <div className="mt-[3cqw] flex flex-col gap-[1.2cqw]">
            {["w-full", "w-11/12", "w-full", "w-5/6", "w-full", "w-3/4"].map((w, i) => (
              <span key={i} className={`${skeleton} h-[0.8cqw] ${w} bg-silver`} />
            ))}
          </div>
          <div className="absolute inset-y-0 right-0 w-[6%] bg-linear-to-l from-midnight/10 to-transparent" />
        </div>
        {/* Right page */}
        <div className="relative flex-1 rounded-r-[1cqw] bg-white p-[4cqw]">
          <div className="h-[38%] rounded-[0.8cqw] bg-linear-to-br from-deep via-interactive to-electric" />
          <div className="mt-[3cqw] border-l-[0.6cqw] border-electric pl-[2cqw]">
            <span className={`${skeleton} h-[1.2cqw] w-full bg-deep/80`} />
            <span className={`${skeleton} mt-[1.2cqw] h-[1.2cqw] w-2/3 bg-deep/80`} />
          </div>
          <div className="mt-[3cqw] grid grid-cols-2 gap-[2.4cqw]">
            {[0, 1].map((col) => (
              <div key={col} className="flex flex-col gap-[1.1cqw]">
                {["w-full", "w-5/6", "w-full", "w-2/3"].map((w, i) => (
                  <span key={i} className={`${skeleton} h-[0.7cqw] ${w} bg-silver`} />
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-[6%] bg-linear-to-r from-midnight/10 to-transparent" />
        </div>
      </div>
    </Frame>
  );
}

/* 04: Social media campaign, a coordinated set of posts */
export function SocialCampaignArt() {
  const posts = [
    { rotate: "-rotate-[8deg] translate-y-[4%]", art: "from-electric via-interactive to-deep", shape: "rounded-pill" },
    { rotate: "z-10 -translate-y-[3%]", art: "from-deep via-interactive to-electric", shape: "rounded-[24%] rotate-12" },
    { rotate: "rotate-[8deg] translate-y-[4%]", art: "from-mist via-silver to-electric/60", shape: "rounded-pill" },
  ];
  return (
    <Frame className="bg-linear-to-br from-mist via-ice to-white">
      <div className="absolute -bottom-[25%] left-1/2 size-[90%] -translate-x-1/2 rounded-pill bg-electric/15 blur-[8cqw]" />
      <div className="absolute inset-0 flex items-center justify-center px-[4cqw] pt-[9%]">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`-mx-[2cqw] w-[34%] rounded-[3cqw] bg-white p-[2.4cqw] shadow-[0_3cqw_6cqw_-2cqw_rgb(23_36_58/0.3)] ring-1 ring-line ${post.rotate}`}
          >
            <div className="flex items-center gap-[1.6cqw]">
              <span className="size-[5cqw] rounded-pill bg-linear-to-br from-electric to-deep" />
              <span className={`${skeleton} h-[1.2cqw] w-[45%] bg-midnight/70`} />
            </div>
            <div className={`relative mt-[2.4cqw] grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.6cqw] bg-linear-to-br ${post.art}`}>
              <span className={`size-[11cqw] bg-white/80 ${post.shape}`} />
            </div>
            <div className="mt-[2.4cqw] flex items-center gap-[2cqw] text-deep">
              <Heart className="size-[4cqw] fill-electric text-electric" strokeWidth={2} />
              <MessageCircle className="size-[4cqw]" strokeWidth={2} />
              <Send className="size-[4cqw]" strokeWidth={2} />
              <Bookmark className="ml-auto size-[4cqw]" strokeWidth={2} />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

const lanes = [
  { label: "Voice", clips: [[2, 30], [36, 40]], tone: "bg-electric/25 ring-electric/60", bar: "fill-electric" },
  { label: "Music", clips: [[0, 78]], tone: "bg-deep/60 ring-[#5b8fd6]/50", bar: "fill-[#8db8f2]" },
  { label: "Sound", clips: [[14, 12], [48, 18]], tone: "bg-white/10 ring-white/25", bar: "fill-silver" },
  { label: "Ambience", clips: [[6, 70]], tone: "bg-white/5 ring-white/15", bar: "fill-white/50" },
];

function Waveform({ seed, className }: { seed: number; className: string }) {
  const bars = Array.from({ length: 40 }, (_, i) => 18 + Math.abs(Math.sin(i * 0.9 + seed) * 62 + Math.sin(i * 2.3 + seed) * 18));
  return (
    <svg viewBox="0 0 160 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
      {bars.map((h, i) => (
        <rect key={i} x={i * 4 + 1} y={50 - h / 2} width="2" height={h} rx="1" className={className} />
      ))}
    </svg>
  );
}

/* 05: Audio production, a multitrack session */
export function AudioSessionArt() {
  return (
    <Frame className="bg-midnight">
      {/* Transport */}
      <div className="absolute inset-x-[6%] top-[17%] flex items-center gap-[2.4cqw] rounded-[1.6cqw] bg-white/5 px-[2.4cqw] py-[1.8cqw] ring-1 ring-white/10">
        <span className="grid size-[6cqw] place-items-center rounded-pill bg-electric text-white">
          <Mic className="size-[3cqw]" strokeWidth={2.25} />
        </span>
        <SkipBack className="size-[3.4cqw] text-white/60" strokeWidth={2} />
        <Pause className="size-[3.4cqw] fill-white text-white" strokeWidth={2} />
        <SkipForward className="size-[3.4cqw] text-white/60" strokeWidth={2} />
        <span className="ml-auto font-mono text-[3cqw] tracking-[0.08em] text-white/80">01:24:08</span>
      </div>

      {/* Tracks */}
      <div className="absolute inset-x-[6%] top-[34%] bottom-[7%] flex flex-col gap-[1.5cqw]">
        {lanes.map((lane, index) => (
          <div key={lane.label} className="flex flex-1 items-stretch gap-[1.8cqw]">
            <div className="flex w-[22%] flex-col justify-center gap-[1cqw] rounded-[1cqw] bg-white/5 px-[1.8cqw]">
              <span className="text-[2.4cqw] font-medium text-white/80">{lane.label}</span>
              <span className="relative h-[0.6cqw] rounded-pill bg-white/15">
                <span className="absolute inset-y-0 left-0 rounded-pill bg-electric" style={{ width: `${70 - index * 12}%` }} />
              </span>
            </div>
            <div className="relative flex-1 rounded-[1cqw] bg-white/[0.03]">
              {lane.clips.map(([left, width], clipIndex) => (
                <div
                  key={clipIndex}
                  className={`absolute inset-y-[8%] overflow-hidden rounded-[0.8cqw] ring-1 ${lane.tone}`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                >
                  <Waveform seed={index * 3 + clipIndex} className={lane.bar} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Playhead */}
        <span className="pointer-events-none absolute inset-y-0 left-[58%] w-[0.4cqw] rounded-pill bg-electric shadow-[0_0_2cqw_rgb(47_128_237)]" />
      </div>
    </Frame>
  );
}

/* 06: Digital marketing, a connected growth dashboard */
export function GrowthDashboardArt() {
  return (
    <Frame className="bg-linear-to-br from-ice via-white to-mist">
      <div className="absolute inset-[13%_6%_6%] flex gap-[2cqw] rounded-[2cqw] bg-white p-[2cqw] shadow-[0_3cqw_6cqw_-3cqw_rgb(23_36_58/0.3)] ring-1 ring-line">
        {/* Sidebar */}
        <div className="flex w-[14%] flex-col gap-[1.6cqw] rounded-[1.2cqw] bg-ice p-[1.6cqw]">
          <Mark className="size-[3.4cqw]" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`${skeleton} h-[0.8cqw] ${i === 1 ? "bg-interactive" : "bg-silver"} ${i % 2 ? "w-4/5" : "w-full"}`} />
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-[2cqw]">
          {/* Search visibility */}
          <div className="flex items-center gap-[1.4cqw] rounded-pill bg-ice px-[2cqw] py-[1.2cqw] ring-1 ring-line">
            <Search className="size-[2.6cqw] text-deep" strokeWidth={2.25} />
            <span className={`${skeleton} h-[0.8cqw] w-[38%] bg-slate/40`} />
          </div>

          <div className="grid flex-1 grid-cols-[1.6fr_1fr] gap-[2cqw]">
            {/* Trend */}
            <div className="relative rounded-[1.2cqw] ring-1 ring-line">
              <span className={`${skeleton} absolute top-[8%] left-[5%] h-[0.9cqw] w-[30%] bg-midnight/70`} />
              <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute inset-x-[4%] top-[24%] bottom-[8%] h-[68%] w-[92%]">
                <defs>
                  <linearGradient id="growth-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#2f80ed" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#2f80ed" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[25, 50, 75].map((y) => (
                  <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#dce2ea" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
                ))}
                <path d="M0 86 C30 80 40 70 64 72 S100 52 124 50 S160 30 200 12 V100 H0Z" fill="url(#growth-area)" />
                <path d="M0 86 C30 80 40 70 64 72 S100 52 124 50 S160 30 200 12" fill="none" stroke="#2f80ed" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                <path d="M0 92 C40 90 70 84 100 80 S160 66 200 58" fill="none" stroke="#123b70" strokeWidth="2" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            {/* Funnel */}
            <div className="flex flex-col justify-center gap-[1.4cqw] rounded-[1.2cqw] p-[2cqw] ring-1 ring-line">
              {["w-full bg-deep", "w-[78%] bg-interactive", "w-[56%] bg-electric", "w-[34%] bg-electric/50"].map((bar) => (
                <span key={bar} className={`mx-auto h-[2.6cqw] rounded-[0.6cqw] ${bar}`} />
              ))}
            </div>
          </div>

          {/* Channels */}
          <div className="grid grid-cols-3 gap-[2cqw]">
            {["bg-mist", "bg-ice", "bg-mist"].map((bg, i) => (
              <div key={i} className={`flex items-end gap-[0.8cqw] rounded-[1cqw] ${bg} p-[1.4cqw]`}>
                {[40, 64, 52, 80, 70].map((h, j) => (
                  <span key={j} className="flex-1 rounded-t-[0.4cqw] bg-interactive/70" style={{ height: `${(h / 100) * 5}cqw` }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}
