"use client";

import { useEffect, useRef, useState } from "react";
import type { Video } from "@/content/media";
import { cn } from "@/lib/utils";

/**
 * The hero showreel. The poster photograph is server-rendered underneath, so
 * the hero paints immediately; this component only adds the video after
 * hydration, and fades it in once it is actually playing.
 *
 * Skipped entirely (poster only) for visitors who prefer reduced motion or
 * have Data Saver on. Muted, looping, inline, no controls, no audio track.
 */
export function HeroVideo({ video, className }: { video: Video; className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    const update = () => {
      const on = !reduce.matches && !saveData;
      setEnabled(on);
      if (!on) setPlaying(false);
    };
    update();
    reduce.addEventListener("change", update);
    return () => reduce.removeEventListener("change", update);
  }, []);

  /* Plays only while the hero is on screen; saves battery and CPU below it. */
  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.play().catch(() => {});
      else element.pause();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      aria-hidden="true"
      tabIndex={-1}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      onPlaying={() => setPlaying(true)}
      className={cn(
        "pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-standard",
        playing ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
