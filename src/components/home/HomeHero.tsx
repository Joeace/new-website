import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { hero } from "@/content/home";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { CreativeUniverse } from "./hero/CreativeUniverse";

/**
 * Homepage hero: "The Mota Content Media Creative Universe".
 *
 * Desktop: an expressive headline (small lead-in lines alternating with
 * giant words, sized to the text column with container query units) beside
 * a 3D creative universe in the right half of the centred content box. Tablet and phone: headline first, then the universe below.
 * Copy is server-rendered with CSS-only entrances, so it paints immediately.
 */
export function HomeHero() {
  const disciplines = services.map((s) => s.title.split(" & ")[0]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate -mt-nav flex min-h-[min(100svh,64rem)] flex-col overflow-x-clip bg-white pt-nav"
    >
      {/* Atmosphere: white and ice, with blue light gathered behind the universe */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_45%_at_50%_75%,rgb(47_128_237/0.14),transparent_70%)] lg:bg-[radial-gradient(38%_60%_at_70%_50%,rgb(47_128_237/0.15),transparent_72%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-ice/80" />

      <div className="relative flex flex-1 flex-col lg:justify-center">
        {/* On desktop this container spans the full width above the universe, so it
            lets pointer events through; only the text block itself takes them. */}
        <Container className="pointer-events-none relative z-20 py-stack-lg lg:py-stack-sm">
          <div className="pointer-events-auto @container lg:w-[50%] xl:w-[48%]">
            <Eyebrow className="animate-rise tracking-[0.12em] [animation-delay:50ms] max-sm:text-[0.6875rem]">{hero.eyebrow}</Eyebrow>

            <h1 id="hero-heading" aria-label={hero.headline} className="mt-stack-sm font-display text-ink">
              {hero.headlineLines.map((line, index) => (
                <span
                  key={line.text}
                  aria-hidden="true"
                  className={cn(
                    "block animate-rise whitespace-nowrap",
                    line.size === "lead"
                      ? "text-[min(5.6cqw,2.25rem)] leading-[1.15] font-bold tracking-[-0.02em] text-slate"
                      : "text-[min(14.6cqw,6.75rem)] leading-[0.9] font-extrabold tracking-[-0.05em]",
                    "accent" in line && line.accent && "text-gradient pb-[0.06em]",
                  )}
                  style={{ animationDelay: `${100 + index * 70}ms` }}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="mt-stack-sm max-w-[38rem] animate-rise text-body-lg text-slate [animation-delay:560ms]">{hero.body}</p>

            <div className="mt-stack flex animate-rise flex-col gap-3 [animation-delay:640ms] sm:flex-row sm:items-center">
              <Button href={hero.primaryCta.href} size="xl" arrow className="max-sm:w-full">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="xl" variant="secondary" className="max-sm:w-full">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-stack flex animate-rise items-center gap-3 font-display text-body-sm font-semibold text-deep [animation-delay:720ms]">
              <span aria-hidden="true" className="h-px w-10 bg-electric" />
              {hero.tagline}
            </p>
          </div>
        </Container>

        {/* The universe: in the flow below the text on smaller screens. On desktop it is
            the right half of the same centred content box as the text, so the pair stays
            balanced at every screen width instead of drifting to the viewport edge. */}
        <div className="relative z-10 px-gutter pb-stack-lg lg:pointer-events-none lg:absolute lg:inset-0 lg:px-0 lg:pb-0">
          <div className="lg:mx-auto lg:flex lg:h-full lg:max-w-content lg:items-center lg:justify-end lg:px-gutter">
            <div className="lg:w-[52%] xl:w-[54%]">
              <CreativeUniverse className="mx-auto w-full max-w-[28rem] sm:max-w-[34rem] md:max-w-[40rem] lg:max-w-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker of the six disciplines (decorative; the services are listed below) */}
      <div aria-hidden="true" className="relative z-20 overflow-hidden border-t border-line bg-white/70 py-4 backdrop-blur-sm md:py-5">
        <div className="flex w-max animate-marquee [--marquee-duration:60s] hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {disciplines.map((name) => (
                <span key={`${copy}-${name}`} className="flex items-center font-display text-[clamp(1.25rem,0.9rem+1.6vw,2.25rem)] font-extrabold tracking-[-0.03em] whitespace-nowrap text-silver">
                  <span className="px-6 md:px-10">{name}</span>
                  <span className="size-2 rounded-pill bg-electric md:size-2.5" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
