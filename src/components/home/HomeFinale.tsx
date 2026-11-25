import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SignalMark } from "@/components/ui/SignalMark";
import { finale } from "@/content/home";

/**
 * The homepage finale: where the signal line arrives. One electric band with
 * an oversized statement and both actions, flowing into the midnight footer.
 * The gradient runs from deep to electric so white text keeps AA contrast
 * where the copy sits (left), with the brightest blue at the far edge.
 */
export function HomeFinale() {
  return (
    <section
      aria-labelledby="finale-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#123b70_0%,#1c6ad4_58%,#2f80ed_100%)] py-section text-white"
    >
      {/* The C arc, oversized, cropped by the right edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="pointer-events-none absolute top-1/2 -right-[45%] -z-10 size-[min(100vw,48rem)] -translate-y-1/2 opacity-30 md:-right-[16%]"
      >
        <g transform="rotate(35 50 50)">
          <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="0.6" strokeLinecap="round" strokeDasharray="232.8 289" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.3" strokeDasharray="1 2" />
        </g>
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 invert" />

      <Container>
        <SignalMark tone="inverse" />
        <h2
          id="finale-heading"
          className="max-w-5xl scroll-reveal font-display text-[clamp(2.5rem,1rem+5.4vw,6rem)] leading-[0.98] font-extrabold tracking-[-0.045em] text-balance"
        >
          {finale.statement}
        </h2>
        <div className="mt-stack-lg flex scroll-reveal flex-col gap-stack-lg [--reveal-from:6%] [--reveal-to:30%] lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl text-body-lg text-white/90">{finale.body}</p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={finale.primaryCta.href} size="lg" variant="inverse" arrow className="max-sm:w-full">
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
