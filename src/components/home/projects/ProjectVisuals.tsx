import { Heart, MessageCircle, Send } from "lucide-react";
import type { ReactNode } from "react";
import { Photo } from "@/components/media/Photo";
import { VideoPreview } from "@/components/media/VideoPreview";
import { photos, videos } from "@/content/media";

/*
 * Visuals for the six concept projects. Each pairs a photograph or video
 * (real creative-industry imagery) with a mockup of the kind of deliverable
 * the discipline produces: a brand board, a magazine spread, a social post,
 * a dashboard. All mockups are fictional and carry no client names or results.
 * Decorative layers are aria-hidden; the card text describes the project.
 */

const shade = <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_23_48/0.1),rgb(10_23_48/0.55))]" />;

/** Brand identity: designer's desk + a brand board (mark, palette, type). */
export function BrandIdentityVisual() {
  return (
    <>
      <Photo photo={photos.projectBrandDesk} sizes="(min-width: 1024px) 64vw, 100vw" className="absolute inset-0 size-full" />
      {shade}
      <div aria-hidden="true" className="absolute right-[5%] bottom-[8%] w-[46%] max-w-[22rem] rounded-lg bg-white p-[4%] shadow-lifted">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md bg-deep font-display text-xl text-gold italic">B</span>
          <span className="font-display text-lg leading-none text-deep">
            Brand Concept
            <span className="block font-sans text-[0.625rem] tracking-[0.2em] text-muted uppercase">Identity system</span>
          </span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {["bg-deep", "bg-electric", "bg-gold", "bg-champagne"].map((c) => (
            <span key={c} className={`h-8 rounded-sm ${c}`} />
          ))}
        </div>
        <div className="mt-3 flex items-end justify-between border-t border-line pt-3">
          <span className="font-display text-3xl leading-none text-deep">Aa</span>
          <span className="text-right font-sans text-[0.625rem] leading-tight text-muted">
            Playfair Display
            <br />
            Inter
          </span>
        </div>
      </div>
    </>
  );
}

/** Video campaign: click-to-play behind-the-scenes preview. */
export function VideoCampaignVisual() {
  return (
    <VideoPreview
      video={videos.projectVideoCampaign}
      sizes="(min-width: 1024px) 34vw, 100vw"
      overlay={
        <div className="absolute inset-x-[6%] bottom-[6%] flex items-center gap-3 text-[0.6875rem] font-medium text-white/90">
          <span className="rounded-xs bg-gold px-1.5 py-0.5 text-night">REC</span>
          <span className="h-1 flex-1 overflow-hidden rounded-pill bg-white/25">
            <span className="block h-full w-1/3 rounded-pill bg-white" />
          </span>
          0:10
        </div>
      }
    />
  );
}

/** Editorial: printing press + a magazine spread. */
export function EditorialVisual() {
  return (
    <>
      <Photo photo={photos.projectEditorialPress} sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw" className="absolute inset-0 size-full" />
      {shade}
      <div aria-hidden="true" className="absolute inset-x-[10%] bottom-[9%] grid grid-cols-2 gap-px overflow-hidden rounded-md bg-line shadow-lifted">
        <div className="bg-white p-[6%]">
          <p className="font-sans text-[0.5rem] tracking-[0.2em] text-gold-ink uppercase">Feature</p>
          <p className="mt-1 font-display text-[clamp(0.8rem,1.6vw,1.05rem)] leading-tight text-deep">
            Ideas that <span className="text-accent">inform</span>
          </p>
          <div className="mt-2 space-y-1">
            {[100, 92, 96, 70].map((w) => (
              <span key={w} className="block h-1 rounded-pill bg-silver" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
        <div className="bg-ice p-[6%]">
          <span className="block aspect-[4/3] rounded-sm bg-[linear-gradient(135deg,var(--color-deep),var(--color-electric))]" />
          <div className="mt-2 space-y-1">
            {[96, 88, 60].map((w) => (
              <span key={w} className="block h-1 rounded-pill bg-silver" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/** Social campaign: creators filming + a phone showing a campaign post. */
export function SocialCampaignVisual() {
  return (
    <>
      <Photo photo={photos.projectSocialCreators} sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw" className="absolute inset-0 size-full" style={{ objectPosition: "35% 50%" }} />
      {shade}
      <div aria-hidden="true" className="absolute right-[7%] bottom-[-12%] w-[38%] max-w-[11rem] rounded-[1.4rem] bg-night p-1.5 shadow-lifted ring-1 ring-white/20">
        <div className="overflow-hidden rounded-[1.1rem] bg-white">
          <div className="flex items-center gap-1.5 px-2 py-1.5">
            <span className="size-4 rounded-pill bg-gold" />
            <span className="h-1 w-10 rounded-pill bg-silver" />
          </div>
          <div className="relative aspect-square bg-[linear-gradient(160deg,var(--color-deep),var(--color-electric))]">
            <span className="absolute inset-x-2 bottom-2 font-display text-[0.7rem] leading-tight text-white italic">Made to be shared.</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 text-deep">
            <Heart className="size-3 fill-electric text-electric" />
            <MessageCircle className="size-3" />
            <Send className="size-3" />
          </div>
        </div>
      </div>
    </>
  );
}

/** Audio: click-to-play podcast session with a waveform strip. */
export function AudioSessionVisual() {
  const bars = [30, 55, 40, 75, 50, 90, 65, 45, 80, 35, 60, 95, 55, 40, 70, 50, 85, 45, 30, 60, 40, 75, 55, 35];
  return (
    <VideoPreview
      video={videos.projectAudioSession}
      sizes="(min-width: 1024px) 34vw, 100vw"
      overlay={
        <div className="absolute inset-x-[6%] bottom-[6%] flex h-10 items-center gap-[3px] rounded-md bg-night/70 px-3 backdrop-blur-sm">
          {bars.map((h, i) => (
            <span key={i} className={`flex-1 rounded-pill ${i < 9 ? "bg-gold" : "bg-white/50"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      }
    />
  );
}

/** Digital marketing: analytics laptop + a growth dashboard card. */
export function GrowthVisual() {
  return (
    <>
      <Photo photo={photos.projectGrowthLaptop} sizes="(min-width: 1024px) 64vw, 100vw" className="absolute inset-0 size-full" />
      {shade}
      <div aria-hidden="true" className="absolute top-[10%] right-[5%] w-[44%] max-w-[20rem] rounded-lg bg-white p-[3.5%] shadow-lifted">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[0.625rem] font-semibold tracking-[0.16em] text-muted uppercase">Campaign view</span>
          <span className="rounded-pill bg-mist px-2 py-0.5 text-[0.625rem] font-semibold text-deep">Illustrative</span>
        </div>
        <svg viewBox="0 0 200 70" className="mt-3 w-full">
          <path d="M0 60 C30 55 40 40 70 42 S110 30 130 24 170 12 200 6 V70 H0Z" className="fill-electric/15" />
          <path d="M0 60 C30 55 40 40 70 42 S110 30 130 24 170 12 200 6" className="fill-none stroke-electric" strokeWidth="2.5" />
          <circle cx="130" cy="24" r="4" className="fill-gold stroke-white" strokeWidth="1.5" />
        </svg>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {["Search", "Social", "Email"].map((c, i) => (
            <span key={c} className="rounded-sm bg-ice px-1.5 py-1 text-[0.5625rem] font-medium text-deep">
              <span className={`mb-1 block h-1 rounded-pill ${["bg-deep", "bg-electric", "bg-gold"][i]}`} />
              {c}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export const projectVisuals: Record<string, ReactNode> = {
  "brand-identity": <BrandIdentityVisual />,
  "video-campaign": <VideoCampaignVisual />,
  "editorial-content": <EditorialVisual />,
  "social-media-campaign": <SocialCampaignVisual />,
  "audio-production": <AudioSessionVisual />,
  "digital-marketing": <GrowthVisual />,
};
