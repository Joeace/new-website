import {
  BrainCircuit,
  Handshake,
  HeartHandshake,
  Layers,
  PencilRuler,
  Sprout,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { MediaTexture } from "@/components/media/MediaTexture";
import { Photo } from "@/components/media/Photo";
import { whyChoose } from "@/content/home";
import { photos, textures } from "@/content/media";

/* One icon per advantage, in the same order as the copy. */
const icons: LucideIcon[] = [BrainCircuit, PencilRuler, Target, HeartHandshake, Layers, Zap, Handshake, Sprout];

/**
 * "Why choose Mota Content Media?"
 *
 * A deep blue band (blue leads) after the ice Services band:
 *   1. Introduction: heading, the three pillars and a photograph on the left;
 *      the statement and introduction on the right. A faint studio-console
 *      photograph textures the background.
 *   2. Eight advantages in a hairline-ruled grid (4 / 2 / 1 columns) with
 *      gold outlined numerals.
 */
export function HomeWhyChoose() {
  return (
    <Section id="why-mota-content-media" aria-labelledby="why-heading" tone="deep" spacing="none" className="overflow-x-clip pt-section-sm pb-section">
      <MediaTexture src={textures.mixingConsole} tone="dark" className="inset-0 [mask-image:linear-gradient(180deg,#000,transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_85%_10%,rgb(196_154_80/0.14),transparent_70%),radial-gradient(60%_50%_at_0%_100%,rgb(10_23_48/0.6),transparent_70%)]" />

      <Container>
        {/* 1. Introduction */}
        <div className="grid gap-y-stack-lg lg:grid-cols-12 lg:gap-x-8">
          <div className="scroll-reveal lg:col-span-5">
            <Eyebrow rule tone="inverse">{whyChoose.eyebrow}</Eyebrow>
            <Heading as="h2" size="h1" id="why-heading" tone="inverse" className="mt-stack max-w-xl">
              {whyChoose.heading}
            </Heading>
            <ul className="mt-stack-lg flex flex-col gap-2.5">
              {whyChoose.pillars.map((pillar) => (
                <li key={pillar} className="flex items-center gap-3 font-display text-body-lg text-white italic">
                  <span aria-hidden="true" className="h-px w-6 bg-gold" />
                  {pillar}
                </li>
              ))}
            </ul>
            <div className="relative mt-stack-lg aspect-[16/10] overflow-hidden rounded-xl shadow-lifted ring-1 ring-gold/40">
              <Photo photo={photos.whyCameraInHand} sizes="(min-width: 1024px) 38vw, 100vw" className="size-full" />
              <div aria-hidden="true" className="absolute inset-0 bg-deep/15 mix-blend-multiply" />
            </div>
          </div>

          <div className="scroll-reveal [--reveal-offset:48px] lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="font-display text-h2 text-pretty text-white">
              <span className="md:block">{whyChoose.statement.lead} </span>
              <Accent variant="gold-inverse">{whyChoose.statement.accent}</Accent>
            </p>
            <div className="mt-stack flex max-w-prose flex-col gap-stack-sm">
              {whyChoose.intro.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-body-lg text-white/90" : "text-body text-white/80"}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Eight advantages */}
        <ol className="mt-section-sm grid gap-px overflow-clip rounded-xl bg-white/12 ring-1 ring-white/12 md:grid-cols-2 xl:grid-cols-4">
          {whyChoose.advantages.map((advantage, index) => {
            const Icon = icons[index];
            const number = String(index + 1).padStart(2, "0");
            return (
              <li
                key={advantage.title}
                className="group relative flex scroll-reveal flex-col bg-deep p-card-sm transition-colors duration-(--duration-slow) ease-out-expo hover:bg-night md:p-card xl:px-7"
                style={{ "--reveal-offset": `${(index % 4) * 32}px` } as CSSProperties}
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-[2.75rem] leading-none font-medium text-transparent italic transition-colors duration-(--duration-slow) [-webkit-text-stroke:1.2px_var(--color-gold)] group-hover:text-gold/20 md:text-[3.5rem]"
                  >
                    {number}
                  </span>
                  <span className="grid size-11 place-items-center rounded-pill text-champagne ring-1 ring-gold/40 transition-colors duration-(--duration-base) group-hover:bg-gold group-hover:text-night">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="mt-stack font-display text-h4 text-white">{advantage.title}</h3>
                <p className="mt-stack-xs text-body-sm text-white/75">{advantage.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
