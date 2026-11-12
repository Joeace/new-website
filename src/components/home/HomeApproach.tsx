import { ChartLine, Check, Compass, PenTool, Rocket, Search, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { approach } from "@/content/home";
import { cn } from "@/lib/utils";

/* Discover, Strategise, Create, Execute, Measure & Optimise */
const icons: LucideIcon[] = [Search, Compass, PenTool, Rocket, ChartLine];

const stageNumber = (index: number) => String(index + 1).padStart(2, "0");
const stageAnchor = (id: string) => `approach-${id}`;

/**
 * "How we work": the five-stage process, on an ice band after the white
 * Why Choose section.
 *
 *   1. Introduction.
 *   2. Journey overview (tablet and up): five connected steps in a row,
 *      each linking to its stage below.
 *   3. Vertical timeline: a connecting line that fills with electric blue
 *      as you scroll, and a node per stage that lights up while centred.
 *      Every stage shows all of its content; nothing needs a click.
 *   4. Closing message and CTAs.
 *
 * All motion is CSS scroll-driven (no JavaScript) and is switched off for
 * reduced motion and in browsers without support.
 */
export function HomeApproach() {
  const { closing } = approach;

  return (
    <Section id="approach" aria-labelledby="approach-heading" tone="ice" spacing="lg" className="overflow-x-clip">
      <Container>
        {/* 1. Introduction */}
        <div className="grid gap-y-stack lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="scroll-reveal lg:col-span-7">
            <Eyebrow rule>{approach.eyebrow}</Eyebrow>
            <Heading as="h2" size="h1" id="approach-heading" className="mt-stack">
              <span className="block">{approach.heading.lead}</span>
              <Accent>{approach.heading.accent}</Accent>
            </Heading>
          </div>
          <div className="flex scroll-reveal flex-col gap-stack-sm [--reveal-from:6%] [--reveal-to:32%] lg:col-span-5 lg:col-start-8">
            {approach.intro.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
        </div>

        {/* 2. Journey overview */}
        <nav aria-label="Process stages" className="mt-section-sm hidden scroll-reveal md:block">
          <ol className="relative grid grid-cols-5">
            <span aria-hidden="true" className="absolute top-7 right-[10%] left-[10%] h-px bg-line-strong/50" />
            <span aria-hidden="true" className="absolute top-7 right-[10%] left-[10%] h-px scroll-grow-x bg-electric" />
            {approach.stages.map((stage, index) => {
              const Icon = icons[index];
              return (
                <li key={stage.id} className="relative flex justify-center">
                  <a
                    href={`#${stageAnchor(stage.id)}`}
                    className="group/step flex flex-col items-center gap-3 rounded-lg px-2 pb-1 text-center"
                  >
                    <span className="grid size-14 place-items-center rounded-pill bg-white text-interactive shadow-soft ring-1 ring-line transition-[background-color,color,translate] duration-(--duration-base) ease-out-expo group-hover/step:-translate-y-0.5 group-hover/step:bg-interactive group-hover/step:text-white">
                      <Icon aria-hidden="true" className="size-icon-lg" strokeWidth={1.75} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-label text-muted">{stageNumber(index)}</span>
                      <span className="font-display text-body font-bold text-deep transition-colors group-hover/step:text-interactive">
                        {stage.name}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* 3. Timeline */}
        <ol className="relative mt-section-sm md:mt-stack-lg">
          {/* Connecting line through the node centres, with a scroll-driven fill */}
          <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-px -translate-x-1/2 bg-line-strong/50 sm:top-7 sm:bottom-7 sm:left-7" />
          <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-0.5 -translate-x-1/2 scroll-grow-y rounded-pill bg-electric sm:top-7 sm:bottom-7 sm:left-7" />

          {approach.stages.map((stage, index) => {
            const Icon = icons[index];
            const number = stageNumber(index);
            const scopeNote = "scopeNote" in stage ? stage.scopeNote : undefined;
            return (
              <li
                key={stage.id}
                id={stageAnchor(stage.id)}
                className="relative grid scroll-mt-28 grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 pb-stack last:pb-0 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-6 md:gap-x-8"
              >
                {/* Node: lights up while its stage is centred in view */}
                <div className="relative z-10">
                  <span className="grid size-10 scroll-spotlight place-items-center rounded-pill bg-white text-interactive shadow-soft ring-4 ring-ice sm:size-14">
                    <Icon aria-hidden="true" className="size-icon sm:size-icon-lg" strokeWidth={1.75} />
                  </span>
                </div>

                <div className="scroll-reveal rounded-xl bg-white p-card-sm shadow-soft ring-1 ring-line/70 transition-[translate,box-shadow] duration-(--duration-slow) ease-out-expo hover:-translate-y-0.5 hover:shadow-lifted md:p-card">
                  <div className="grid gap-x-8 gap-y-stack md:grid-cols-2 lg:grid-cols-12">
                    <div className="md:col-span-2 lg:col-span-4">
                      <p className="text-label text-interactive uppercase">Stage {number}</p>
                      <h3 className="mt-2 font-display text-h3 text-deep">{stage.name}</h3>
                      <p className="mt-1.5 font-display text-body-lg leading-snug font-semibold text-ink">{stage.tagline}</p>
                      {scopeNote && (
                        <p className="mt-3 inline-flex rounded-pill bg-mist px-3 py-1 text-body-sm font-medium text-deep">
                          {scopeNote}
                        </p>
                      )}
                    </div>

                    <Text className="lg:col-span-5">{stage.description}</Text>

                    <div className="lg:col-span-3">
                      <p className="text-label text-muted uppercase">{approach.activitiesLabel}</p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {stage.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2.5 text-body-sm text-ink">
                            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-electric" strokeWidth={2.5} />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* 4. Closing message */}
        <div className={cn("mt-section-sm flex scroll-reveal flex-col items-center text-center")}>
          <Divider variant="accent" />
          <p className="mt-stack max-w-3xl font-display text-h2 text-balance text-ink">{closing.statement}</p>
          <Text size="body-lg" className="mt-stack-sm max-w-2xl">
            {closing.body}
          </Text>
          <div className="mt-stack-lg flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button href={closing.primaryCta.href} size="lg" arrow className="max-sm:w-full">
              {closing.primaryCta.label}
            </Button>
            <Button href={closing.secondaryCta.href} size="lg" variant="secondary" className="max-sm:w-full">
              {closing.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
