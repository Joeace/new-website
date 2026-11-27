import { Photo } from "@/components/media/Photo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { finale } from "@/content/home";
import { photos } from "@/content/media";
import { cn } from "@/lib/utils";

/**
 * The homepage finale: a full-bleed studio photograph under a deep blue
 * grade, with the closing statement in the editorial serif (gold accent)
 * and both actions. Flows into the night blue footer.
 * The grade is darkest behind the copy, so white text keeps AA contrast.
 */
export function HomeFinale() {
  return (
    <section aria-labelledby="finale-heading" className="relative isolate overflow-clip bg-night py-section text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo photo={photos.finaleSoundEngineer} alt="" sizes="100vw" className="absolute inset-0 size-full" style={{ objectPosition: "50% 40%" }} />
        <div className="absolute inset-0 bg-deep/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(10_23_48/0.94)_0%,rgb(18_59_112/0.82)_50%,rgb(18_59_112/0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_100%_100%,rgb(196_154_80/0.22),transparent_70%)]" />
      </div>

      <Container>
        <span aria-hidden="true" className="block h-px w-16 bg-gold" />
        <h2
          id="finale-heading"
          className="mt-stack max-w-5xl scroll-reveal font-display text-[clamp(2.5rem,1.2rem+5vw,5.75rem)] leading-[1.02] font-medium tracking-[-0.02em] text-balance"
        >
          {finale.statementParts.map((part) => (
            <span key={part.text} className={cn("accent" in part && part.accent && "font-normal text-gold italic")}>
              {part.text}
            </span>
          ))}
        </h2>
        <div className="mt-stack-lg flex scroll-reveal flex-col gap-stack-lg [--reveal-offset:48px] lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl text-body-lg text-white/90">{finale.body}</p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={finale.primaryCta.href} size="lg" variant="gold" arrow className="max-sm:w-full">
              {finale.primaryCta.label}
            </Button>
            <Button href={finale.secondaryCta.href} size="lg" variant="outline-inverse" className="max-sm:w-full">
              {finale.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
