import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { hero } from "@/content/home";
import { CreativeUniverse } from "./CreativeUniverse";

/**
 * Homepage hero: "The Mota Creative Universe".
 * Copy is server-rendered and appears with CSS-only entrance animations, so
 * the headline paints immediately; the composition enhances progressively.
 */
export function HomeHero() {
  const [lineOne, lineTwo, lineThree] = hero.headline;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-var(--spacing-nav))] items-center overflow-x-clip bg-white pt-8 pb-section-sm lg:py-section-sm"
    >
      {/* Atmosphere: faint grid and soft light, kept quiet so white dominates */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-glow" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-b from-transparent to-white" />

      <Container className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="relative z-20 lg:col-span-7">
          <Eyebrow className="animate-rise tracking-[0.12em] [animation-delay:50ms] max-sm:text-[0.6875rem]">
            {hero.eyebrow}
          </Eyebrow>

          <h1
            id="hero-heading"
            className="mt-stack animate-rise font-display text-[clamp(2.5rem,1.15rem+4.6vw,4.5rem)] leading-[1.04] font-extrabold tracking-[-0.04em] text-balance text-ink [animation-delay:120ms] lg:text-[clamp(2.75rem,0.9rem+3.3vw,4.25rem)]"
          >
            {/* Explicit lines from 640px up; natural balanced wrapping on phones. */}
            <span className="sm:block">{lineOne} </span>
            <span className="sm:block">{lineTwo} </span>
            <span className="text-gradient sm:block">{lineThree}</span>
          </h1>

          <p className="mt-stack max-w-[36rem] animate-rise text-body-lg text-slate [animation-delay:220ms]">
            {hero.body}
          </p>

          <div className="mt-stack-lg flex animate-rise flex-col gap-3 [animation-delay:320ms] sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} size="lg" arrow className="max-sm:w-full">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary" className="max-sm:w-full">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="mt-stack-lg flex animate-rise items-center gap-3 font-display text-body-sm font-semibold text-deep [animation-delay:420ms]">
            <span aria-hidden="true" className="h-px w-10 bg-electric" />
            {hero.tagline}
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <CreativeUniverse className="mx-auto w-full max-w-[24rem] sm:max-w-[30rem] md:max-w-[36rem] lg:max-w-none min-[85rem]:w-[114%]" />
        </div>
      </Container>
    </section>
  );
}
