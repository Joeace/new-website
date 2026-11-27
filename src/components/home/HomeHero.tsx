import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { hero } from "@/content/home";
import { services } from "@/content/services";
import { SignalSignature } from "./SignalSignature";

/**
 * Homepage hero: "The Signal".
 * Poster-scale headline beside the MCM signature, closing on a slow ticker
 * of the six disciplines. The section slides under the transparent header
 * (negative top margin equal to the header spacer). Copy is server-rendered
 * with CSS-only entrances, so the headline paints immediately.
 */
export function HomeHero() {
  const [lineOne, lineTwo, lineThree] = hero.headline;
  const disciplines = services.map((s) => s.title.split(" & ")[0]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate -mt-nav flex min-h-[min(100svh,60rem)] flex-col overflow-x-clip bg-white pt-nav"
    >
      {/* Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-glow" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] -right-[18%] -z-10 size-[min(70vw,58rem)] rounded-pill bg-[radial-gradient(circle,rgb(47_128_237/0.14),transparent_62%)]"
      />

      <Container className="grid flex-1 items-center gap-y-12 py-stack-lg lg:grid-cols-12 lg:gap-x-8 lg:py-stack">
        <div className="relative z-20 lg:col-span-8">
          <Eyebrow className="animate-rise tracking-[0.12em] [animation-delay:50ms] max-sm:text-[0.6875rem]">{hero.eyebrow}</Eyebrow>

          <h1
            id="hero-heading"
            className="mt-stack animate-rise font-display text-[clamp(2.5rem,1.2rem+4.6vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.045em] text-balance text-ink [animation-delay:120ms]"
          >
            {lineOne} {lineTwo} <span className="text-gradient">{lineThree}</span>
          </h1>

          <p className="mt-stack max-w-[34rem] animate-rise text-body-lg text-slate [animation-delay:220ms]">{hero.body}</p>

          <div className="mt-stack flex animate-rise flex-col gap-3 [animation-delay:320ms] lg:mt-stack-lg sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} size="lg" arrow className="max-sm:w-full">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary" className="max-sm:w-full">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="mt-stack flex animate-rise items-center gap-3 font-display text-body-sm font-semibold text-deep [animation-delay:420ms]">
            <span aria-hidden="true" className="h-px w-10 bg-electric" />
            {hero.tagline}
          </p>
        </div>

        <div className="relative lg:col-span-4">
          <SignalSignature className="mx-auto w-full max-w-[21rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-none" />
        </div>
      </Container>

      {/* Ticker of the six disciplines (decorative; the services are listed below) */}
      <div aria-hidden="true" className="relative overflow-hidden border-t border-line bg-white/60 py-4 backdrop-blur-sm md:py-5">
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
