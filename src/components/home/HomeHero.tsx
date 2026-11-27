import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/media/Photo";
import { hero } from "@/content/home";
import { photos, videos } from "@/content/media";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { HeroVideo } from "./hero/HeroVideo";

/**
 * Homepage hero: a cinematic showreel of real creative production (photo and
 * film shoots, a podcast studio, an edit suite, a creator filming, camera and
 * DJ desk close-ups) behind an editorial serif headline.
 *
 * Layers, back to front: poster photograph (server-rendered, high priority),
 * showreel video (added after hydration), deep-blue grade, legibility
 * gradient towards the copy, copy. The video shows at roughly 60%: the blue
 * grade sits over it at 40% and deepens only behind the text.
 */
export function HomeHero() {
  const disciplines = services.map((s) => s.title.split(" & ")[0]);

  return (
    <section aria-labelledby="hero-heading" className="relative isolate flex min-h-[min(calc(100svh-var(--spacing-nav)),56rem)] flex-col overflow-clip bg-night text-white">
      {/* Media */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo photo={photos.heroPoster} alt="" sizes="100vw" priority className="absolute inset-0 size-full" />
        <HeroVideo video={videos.heroShowreel} />
        {/* Blue-led grade over the footage */}
        <div className="absolute inset-0 bg-deep/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(10_23_48/0.92)_0%,rgb(10_23_48/0.72)_38%,rgb(10_23_48/0.25)_72%,rgb(10_23_48/0.1)_100%)] max-lg:bg-[linear-gradient(180deg,rgb(10_23_48/0.55)_0%,rgb(10_23_48/0.85)_55%,rgb(10_23_48/0.95)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-night/80 to-transparent" />
        {/* Warm key light from the right, echoing studio lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_88%_30%,rgb(196_154_80/0.18),transparent_70%)]" />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <Container className="pt-section-sm pb-stack-lg lg:py-stack-lg">
          <div className="max-w-[46rem]">
            <p className="flex animate-rise items-center gap-3 text-label tracking-[0.16em] text-gold uppercase [animation-delay:60ms]">
              <span aria-hidden="true" className="h-px w-10 bg-gold" />
              {hero.eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="mt-stack animate-rise font-display text-[clamp(2.5rem,1.3rem+4.3vw,5rem)] leading-[1.02] font-medium tracking-[-0.02em] text-balance [animation-delay:140ms]"
            >
              {hero.headlineParts.map((part) => (
                <span key={part.text} className={cn("accent" in part && part.accent && "font-normal text-gold italic")}>
                  {part.text}
                </span>
              ))}
            </h1>

            <p className="mt-stack-sm max-w-[36rem] animate-rise text-body-lg text-white/85 [animation-delay:260ms]">{hero.body}</p>

            <div className="mt-stack flex animate-rise flex-col gap-3 [animation-delay:340ms] sm:flex-row sm:items-center">
              <Button href={hero.primaryCta.href} size="xl" variant="gold" arrow className="max-sm:w-full">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="xl" variant="outline-inverse" className="max-sm:w-full">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-stack flex animate-rise items-center gap-3 font-display text-h4 font-normal text-champagne italic [animation-delay:420ms]">
              <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
              {hero.tagline}
            </p>
          </div>
        </Container>
      </div>

      {/* The six disciplines on a deep blue band (decorative; the services are listed below) */}
      <div aria-hidden="true" className="relative overflow-hidden border-t border-gold/25 bg-deep/85 py-4 backdrop-blur-sm md:py-5">
        <div className="flex w-max animate-marquee [--marquee-duration:60s]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {disciplines.map((name) => (
                <span key={`${copy}-${name}`} className="flex items-center font-display text-[clamp(1.125rem,0.85rem+1.2vw,1.875rem)] whitespace-nowrap text-white/80 italic">
                  <span className="px-6 md:px-10">{name}</span>
                  <svg viewBox="0 0 10 10" className="size-2.5 fill-gold md:size-3">
                    <path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
