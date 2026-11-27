import { Bookmark, Heart, MessageCircle, Mic, PenLine, Play, Search, Send, Sparkles } from "lucide-react";

/*
 * Miniature interfaces for the Creative Universe. Each one is drawn with
 * HTML and SVG in brand colours so they share one visual language: white
 * surfaces, silver hairlines, deep and electric blue accents.
 * Purely illustrative: no numbers, names or claims.
 */

const surface = "rounded-lg bg-white shadow-soft ring-1 ring-line/80";
const skeleton = "rounded-pill bg-silver";

/** Video production: a player with a play button and progress bar. */
export function VideoFrame() {
  return (
    <div className={`${surface} w-[200px] p-2`}>
      <div className="relative grid aspect-video place-items-center overflow-hidden rounded-md bg-linear-to-br from-midnight via-deep to-interactive">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgb(255_255_255/0.25),transparent_55%)]" />
        <span className="relative grid size-10 place-items-center rounded-pill bg-white/95 text-deep shadow-lifted">
          <Play className="ml-0.5 size-4 fill-current" strokeWidth={0} />
        </span>
        <div className="absolute inset-x-3 bottom-2.5 h-1 rounded-pill bg-white/25">
          <div className="h-full w-2/5 rounded-pill bg-white" />
        </div>
      </div>
    </div>
  );
}

const waveform = [6, 14, 22, 12, 28, 18, 34, 22, 14, 26, 38, 24, 16, 30, 20, 12, 24, 32, 18, 10, 20, 28, 14, 8];

/** Audio production: a waveform track with a record control. */
export function AudioTrack() {
  return (
    <div className={`${surface} flex w-[210px] items-center gap-3 p-3`}>
      <span className="grid size-9 shrink-0 place-items-center rounded-pill bg-deep text-white">
        <Mic className="size-4" strokeWidth={2} />
      </span>
      <svg viewBox="0 0 144 40" className="h-10 flex-1" aria-hidden="true">
        {waveform.map((height, index) => (
          <rect
            key={index}
            x={index * 6}
            y={20 - height / 2}
            width="3"
            height={height}
            rx="1.5"
            className={index < 11 ? "fill-electric" : "fill-silver"}
          />
        ))}
      </svg>
    </div>
  );
}

/** Graphic design: a canvas with shapes, type and a selection frame. */
export function DesignCanvas() {
  return (
    <div className={`${surface} w-[176px] p-2`}>
      <div className="mb-2 flex items-center gap-1 px-1">
        <span className="size-1.5 rounded-pill bg-silver" />
        <span className="size-1.5 rounded-pill bg-silver" />
        <span className="size-1.5 rounded-pill bg-silver" />
        <span className={`${skeleton} ml-auto h-1.5 w-10`} />
      </div>
      <div className="relative h-[116px] overflow-hidden rounded-md bg-ice">
        <span className="absolute top-4 left-4 size-12 rounded-pill bg-electric/90" />
        <span className="absolute top-10 left-11 size-11 rotate-12 rounded-sm bg-deep/90 mix-blend-multiply" />
        <span className="absolute right-4 bottom-3 font-display text-[1.75rem] leading-none font-extrabold text-midnight">
          Aa
        </span>
        {/* Selection frame with handles */}
        <span className="absolute top-[52px] right-3 h-[50px] w-[58px] border border-electric">
          {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-right-1 -bottom-1"].map((corner) => (
            <span key={corner} className={`absolute ${corner} size-1.5 border border-electric bg-white`} />
          ))}
        </span>
      </div>
    </div>
  );
}

/** Social media: a post card with media and engagement actions (no counts). */
export function SocialPost() {
  return (
    <div className={`${surface} w-[164px] p-3`}>
      <div className="flex items-center gap-2">
        <span className="size-7 rounded-pill bg-linear-to-br from-electric to-deep ring-2 ring-mist" />
        <div className="flex flex-1 flex-col gap-1">
          <span className={`${skeleton} h-1.5 w-16 bg-midnight/70`} />
          <span className={`${skeleton} h-1.5 w-10`} />
        </div>
      </div>
      <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-md bg-linear-to-br from-mist via-ice to-silver">
        <span className="absolute -right-4 -bottom-5 size-20 rounded-pill bg-electric/25" />
        <span className="absolute top-3 left-3 size-8 rounded-pill bg-white/80" />
      </div>
      <div className="mt-3 flex items-center gap-3 text-deep">
        <Heart className="size-4 fill-electric text-electric" strokeWidth={2} />
        <MessageCircle className="size-4" strokeWidth={2} />
        <Send className="size-4" strokeWidth={2} />
        <Bookmark className="ml-auto size-4" strokeWidth={2} />
      </div>
    </div>
  );
}

/** Digital marketing: a dashboard with a rising area chart. */
export function AnalyticsPanel() {
  return (
    <div className={`${surface} w-[236px] p-3`}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className={`${skeleton} h-1.5 w-14 bg-midnight/70`} />
          <span className={`${skeleton} h-1.5 w-9`} />
        </div>
        <div className="flex gap-1">
          <span className="h-4 w-7 rounded-pill bg-mist" />
          <span className="h-4 w-7 rounded-pill bg-deep" />
        </div>
      </div>
      <svg viewBox="0 0 212 84" className="mt-3 h-[84px] w-full" aria-hidden="true">
        <defs>
          <linearGradient id="universe-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2f80ed" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#2f80ed" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 42, 64].map((y) => (
          <line key={y} x1="0" x2="212" y1={y} y2={y} stroke="#dce2ea" strokeDasharray="2 4" />
        ))}
        <path
          d="M0 70 C 22 66, 30 58, 50 60 S 84 44, 104 46 S 138 30, 158 26 S 196 10, 212 6 L212 84 L0 84 Z"
          fill="url(#universe-area)"
        />
        <path
          d="M0 70 C 22 66, 30 58, 50 60 S 84 44, 104 46 S 138 30, 158 26 S 196 10, 212 6"
          fill="none"
          stroke="#2f80ed"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="158" cy="26" r="4.5" fill="#fff" stroke="#123b70" strokeWidth="2" />
      </svg>
    </div>
  );
}

/** Search and visibility: a search bar with an AI suggestion. */
export function SearchBar() {
  return (
    <div className="flex w-[204px] items-center gap-2.5 rounded-pill bg-white py-2 pr-2 pl-4 shadow-soft ring-1 ring-line/80">
      <Search className="size-4 shrink-0 text-deep" strokeWidth={2.25} />
      <span className="flex-1 truncate text-[0.8125rem] font-medium text-slate">content strategy</span>
      <span className="grid size-7 shrink-0 place-items-center rounded-pill bg-mist text-interactive">
        <Sparkles className="size-3.5" strokeWidth={2} />
      </span>
    </div>
  );
}

/** Content creation: an editorial page layout with a pen. */
export function EditorialPage() {
  return (
    <div className={`${surface} relative w-[148px] p-3.5`}>
      <span className={`${skeleton} block h-2.5 w-4/5 bg-midnight/80`} />
      <span className={`${skeleton} mt-1.5 block h-2.5 w-1/2 bg-midnight/80`} />
      <div className="mt-3 h-10 rounded-sm bg-linear-to-r from-mist to-ice" />
      <div className="mt-3 flex flex-col gap-1.5">
        {["w-full", "w-11/12", "w-full", "w-3/4"].map((width, index) => (
          <span key={index} className={`${skeleton} h-1.5 ${width}`} />
        ))}
      </div>
      <span className="absolute -right-3 -bottom-3 grid size-9 place-items-center rounded-pill bg-interactive text-white shadow-glow">
        <PenLine className="size-4" strokeWidth={2} />
      </span>
    </div>
  );
}
