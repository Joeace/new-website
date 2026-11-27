"use client";

import { Play } from "lucide-react";
import { type ReactNode, useState } from "react";
import type { Video } from "@/content/media";
import { cn } from "@/lib/utils";
import { Photo } from "./Photo";

type VideoPreviewProps = {
  video: Video;
  sizes: string;
  /** Decorative layer over the poster (hidden once the video plays). */
  overlay?: ReactNode;
  className?: string;
};

/**
 * Click-to-play video: shows the poster with a play button and only
 * downloads the clip when asked. The clips are silent, so nothing ever
 * plays with sound. Native controls appear once playing.
 * Without JavaScript the poster remains, as a finished still.
 */
export function VideoPreview({ video, sizes, overlay, className }: VideoPreviewProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("absolute inset-0 z-20", className)}>
      {playing ? (
        <video
          src={video.src}
          poster={`${video.poster.src}-${video.poster.widths[video.poster.widths.length - 1]}.webp`}
          className="size-full bg-night object-cover"
          controls
          autoPlay
          muted
          playsInline
          loop
          aria-label={video.label}
        />
      ) : (
        <>
          <Photo photo={video.poster} sizes={sizes} className="size-full" />
          {overlay && (
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              {overlay}
            </div>
          )}
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group/play absolute inset-0 grid place-items-center bg-night/10 transition-colors duration-(--duration-base) hover:bg-night/25"
          >
            <span className="sr-only">Play {video.label}</span>
            <span
              aria-hidden="true"
              className="grid size-16 place-items-center rounded-pill bg-white/95 text-deep shadow-lifted ring-4 ring-gold/60 transition-transform duration-(--duration-base) ease-out-expo group-hover/play:scale-110 md:size-20"
            >
              <Play className="ml-1 size-6 fill-current md:size-7" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
