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
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { IconFrame } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { whyChoose } from "@/content/home";

/* One icon per advantage, in the same order as the copy. */
const icons: LucideIcon[] = [BrainCircuit, PencilRuler, Target, HeartHandshake, Layers, Zap, Handshake, Sprout];

/**
 * "Why choose Mota Content Media?"
 *
 * Editorial structure on a white band (after the ice Services band):
 *   1. Introduction: heading and three-discipline motif on the left,
 *      the supporting statement and introduction on the right.
 *   2. Eight advantages in a hairline-ruled grid (4 / 2 / 1 columns) with
 *      large outlined numerals; no boxed cards.
 *   3. A midnight closing panel with the statement and two CTAs.
 */
export function HomeWhyChoose() {
  const { closing } = whyChoose;

  return (
    <Section id="why-mota-content-media" aria-labelledby="why-heading" spacing="lg" className="overflow-x-clip">
      <Container>
        {/* 1. Introduction */}
        <div className="grid gap-y-stack-lg lg:grid-cols-12 lg:gap-x-8">
          <div className="scroll-reveal lg:col-span-5">
            <Eyebrow rule>{whyChoose.eyebrow}</Eyebrow>
            <Heading as="h2" size="h1" id="why-heading" className="mt-stack max-w-xl">
              {whyChoose.heading}
            </Heading>
            <PillarsMotif labels={whyChoose.pillars} className="mt-stack-lg hidden md:flex" />
          </div>

          <div className="scroll-reveal [--reveal-from:6%] [--reveal-to:32%] lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="font-display text-h3 text-pretty text-ink">
              <span className="md:block">{whyChoose.statement.lead} </span>
              <Accent variant="solid">{whyChoose.statement.accent}</Accent>
            </p>
            <div className="mt-stack flex max-w-prose flex-col gap-stack-sm">
              {whyChoose.intro.map((paragraph, index) => (
                <Text key={paragraph} size={index === 0 ? "body-lg" : "body"}>
                  {paragraph}
                </Text>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Eight advantages */}
        <ol className="mt-section-sm grid gap-px overflow-hidden rounded-xl bg-line ring-1 ring-line md:grid-cols-2 xl:grid-cols-4">
          {whyChoose.advantages.map((advantage, index) => {
            const Icon = icons[index];
            const number = String(index + 1).padStart(2, "0");
            return (
              <li
                key={advantage.title}
                className="group relative flex scroll-reveal flex-col bg-white p-card-sm transition-colors duration-(--duration-slow) ease-out-expo hover:bg-ice md:p-card xl:px-7"
                style={
                  {
                    "--reveal-from": `${(index % 4) * 4}%`,
                    "--reveal-to": `${22 + (index % 4) * 5}%`,
                  } as CSSProperties
                }
              >
                {/* Accent rule that draws across the top on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.04em] text-transparent transition-[color,-webkit-text-stroke-color] duration-(--duration-slow) ease-out-expo [-webkit-text-stroke:1.5px_var(--color-line-strong)] group-hover:text-electric/10 group-hover:[-webkit-text-stroke-color:var(--color-electric)] md:text-[3.25rem]"
                  >
                    {number}
                  </span>
                  <IconFrame
                    tone="mist"
                    className="transition-[background-color,color,translate] duration-(--duration-base) ease-out-expo group-hover:-translate-y-0.5 group-hover:bg-interactive group-hover:text-white"
                  >
                    <Icon strokeWidth={1.75} />
                  </IconFrame>
                </div>
                <h3 className="mt-stack font-display text-h4 text-deep">{advantage.title}</h3>
                <p className="mt-stack-xs text-body-sm text-slate">{advantage.description}</p>
              </li>
            );
          })}
        </ol>

        {/* 3. Closing statement and actions */}
        <div className="relative isolate mt-section-sm scroll-reveal overflow-hidden rounded-xl bg-midnight p-card-lg text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_24rem_at_100%_0%,rgb(47_128_237/0.35),transparent_70%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50 invert" />
          <span aria-hidden="true" className="block h-[3px] w-12 rounded-pill bg-electric" />
          <p className="mt-stack max-w-4xl font-display text-h2 text-balance text-white">{closing.statement}</p>
          <div className="mt-stack flex flex-col gap-stack-lg lg:flex-row lg:items-end lg:justify-between lg:gap-layout-lg">
            <Text tone="inverse" size="body-lg" className="max-w-2xl">
              {closing.body}
            </Text>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={closing.primaryCta.href} size="lg" arrow className="max-sm:w-full">
                {closing.primaryCta.label}
              </Button>
              <Button href={closing.secondaryCta.href} size="lg" variant="inverse" className="max-sm:w-full">
                {closing.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Three overlapping rings for creative excellence, intelligent technology
 * and strategic execution, meeting at one point. Decorative: the same
 * idea is stated in the introduction text.
 */
function PillarsMotif({ labels, className }: { labels: readonly string[]; className?: string }) {
  const rings = [
    { cx: 60, cy: 48, className: "stroke-electric fill-electric/10" },
    { cx: 100, cy: 48, className: "stroke-deep fill-deep/[0.06]" },
    { cx: 80, cy: 82, className: "stroke-line-strong fill-silver/30" },
  ];
  const dots = ["bg-electric", "bg-deep", "bg-line-strong"];

  return (
    <div aria-hidden="true" className={`items-center gap-6 ${className ?? ""}`}>
      <svg viewBox="0 0 160 130" className="w-36 shrink-0 overflow-visible">
        {rings.map((ring) => (
          <circle key={ring.cx + ring.cy} cx={ring.cx} cy={ring.cy} r="34" strokeWidth="1.5" className={ring.className} />
        ))}
        <circle cx="80" cy="60" r="4" className="fill-deep" />
      </svg>
      <ul className="flex flex-col gap-2">
        {labels.map((label, index) => (
          <li key={label} className="flex items-center gap-2.5 text-body-sm font-medium text-slate">
            <span className={`size-2 rounded-pill ${dots[index]}`} />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
