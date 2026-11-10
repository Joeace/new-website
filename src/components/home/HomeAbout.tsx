import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { about } from "@/content/home";
import { AboutVisual } from "./AboutVisual";

/**
 * "Get to know Mota": who we are, how we work, why it matters.
 *
 * Editorial layout that mirrors the hero (visual on the left this time):
 *   phones/tablets: heading, introduction, visual, approach, CTAs
 *   desktop:        heading across the top; sticky visual on the left,
 *                   introduction and approach on the right
 * Entrance and drift use CSS scroll-driven animation (no JavaScript).
 */
export function HomeAbout() {
  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      spacing="none"
      /* Shorter top padding: the hero already ends with its own breathing room. */
      className="overflow-x-clip pt-section-sm pb-section-lg"
    >
      <Container className="grid gap-y-stack-lg lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        {/* Heading */}
        <header className="scroll-reveal lg:col-span-10 lg:col-start-1 lg:row-start-1 lg:pb-section-sm">
          <Eyebrow rule>{about.eyebrow}</Eyebrow>
          <Heading as="h2" size="h1" id="about-heading" className="mt-stack max-w-4xl">
            <span className="md:block">{about.heading.lead} </span>
            <Accent>{about.heading.accent}</Accent>
          </Heading>
        </header>

        {/* Introduction */}
        <div className="scroll-reveal [--reveal-from:6%] [--reveal-to:32%] lg:col-span-6 lg:col-start-7 lg:row-start-2">
          <p className="font-display text-h4 leading-snug font-semibold text-deep md:text-[1.375rem]">{about.lead}</p>
          <Text size="body-lg" className="mt-stack max-w-prose">
            {about.intro}
          </Text>
        </div>

        {/* Visual composition */}
        <div className="relative lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-2">
          <div className="scroll-reveal [--reveal-from:4%] [--reveal-to:36%] lg:sticky lg:top-[calc(var(--spacing-nav)+2rem)]">
            <AboutVisual className="mx-auto max-w-[26rem] sm:max-w-[30rem] md:max-w-[34rem] lg:max-w-none" />
          </div>
        </div>

        {/* Approach, closing statement and actions */}
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-3 lg:pt-stack-lg">
          <div className="scroll-reveal [--reveal-from:4%] [--reveal-to:30%]">
            <div className="flex items-center gap-4">
              <h3 className="shrink-0 font-sans text-label text-interactive uppercase">{about.approachLabel}</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
            <div className="mt-stack flex max-w-prose flex-col gap-stack-sm">
              {about.approach.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </div>
          </div>

          <div className="mt-stack-lg scroll-reveal border-l-[3px] border-electric pl-6 [--reveal-from:6%] [--reveal-to:34%] md:pl-8">
            <p className="font-display text-h3 text-pretty text-ink">{about.closing}</p>
          </div>

          <div className="mt-stack-lg flex scroll-reveal flex-col gap-3 [--reveal-from:8%] [--reveal-to:36%] sm:flex-row sm:items-center">
            <Button href={about.primaryCta.href} size="lg" arrow className="max-sm:w-full">
              {about.primaryCta.label}
            </Button>
            <Button href={about.secondaryCta.href} size="lg" variant="secondary" className="max-sm:w-full">
              {about.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
