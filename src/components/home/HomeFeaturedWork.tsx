import { Info } from "lucide-react";
import type { CSSProperties } from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { featuredWork } from "@/content/home";
import { projectVisuals } from "./projects/ProjectVisuals";

/*
 * Art-directed grid (12 columns on desktop):
 *   row 1  brand identity (feature, 8)  | video campaign (4, tall)
 *   row 2  editorial (4) | social (4) | audio (4)
 *   row 3  digital marketing (feature, split: artwork 8 + text 4)
 * Tablet: features span both columns, supporting projects pair up.
 * Phone: one column, every artwork at 4:3.
 */
const placement: Record<string, { card: string; media: string; layout?: "split" }> = {
  "brand-identity": { card: "md:col-span-2 lg:col-span-8", media: "aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/10]" },
  "video-campaign": { card: "md:col-span-2 lg:col-span-4", media: "aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/5]" },
  "editorial-content": { card: "lg:col-span-4", media: "aspect-[4/3]" },
  "social-media-campaign": { card: "lg:col-span-4", media: "aspect-[4/3]" },
  "audio-production": { card: "md:col-span-2 lg:col-span-4", media: "aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]" },
  "digital-marketing": { card: "md:col-span-2 lg:col-span-12", media: "aspect-[4/3] md:aspect-[16/9]", layout: "split" },
};

/**
 * "Selected creative work": six concept projects across the disciplines, on
 * the night blue band. Every project has finished visuals: photography or a
 * click-to-play video preview, layered with a deliverable mockup. All are
 * labelled "Concept Project", with a disclosure above the grid.
 */
export function HomeFeaturedWork() {
  return (
    <Section id="work" aria-labelledby="work-heading" tone="night" spacing="none" className="overflow-x-clip pt-section-sm pb-section">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_35%_at_10%_0%,rgb(47_128_237/0.22),transparent_70%),radial-gradient(40%_30%_at_95%_40%,rgb(196_154_80/0.12),transparent_70%)]" />
      <Container>
        {/* Introduction */}
        <div className="grid gap-y-stack lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="scroll-reveal lg:col-span-7">
            <Eyebrow rule tone="inverse">{featuredWork.eyebrow}</Eyebrow>
            <Heading as="h2" size="h1" id="work-heading" tone="inverse" className="mt-stack">
              <span className="block">{featuredWork.heading.lead}</span>
              <Accent variant="gold-inverse">{featuredWork.heading.accent}</Accent>
            </Heading>
          </div>
          <div className="flex scroll-reveal flex-col gap-stack-sm [--reveal-offset:48px] lg:col-span-5">
            {featuredWork.intro.map((paragraph) => (
              <p key={paragraph} className="text-body text-white/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Concept disclosure, visible to everyone */}
        <p className="mt-stack-lg flex scroll-reveal items-start gap-3 rounded-lg bg-white/5 px-4 py-3 text-body-sm text-white/80 ring-1 ring-gold/30 md:items-center">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold md:mt-0" strokeWidth={2} />
          {featuredWork.conceptNote}
        </p>

        {/* Projects */}
        <ul className="mt-stack-lg grid gap-x-layout gap-y-section-sm md:grid-cols-2 md:gap-y-stack-lg lg:grid-cols-12 lg:gap-y-section-sm">
          {featuredWork.projects.map((project, index) => {
            const place = placement[project.slug];
            return (
              <li
                key={project.slug}
                className={`scroll-reveal ${place.card}`}
                style={{ "--reveal-offset": `${((index % 3) * 4) * 8}px` } as CSSProperties}
              >
                <ProjectCard
                  artwork={projectVisuals[project.slug]}
                  tone="inverse"
                  interactiveMedia={project.slug === "video-campaign" || project.slug === "audio-production"}
                  category={project.category}
                  title={project.title}
                  description={project.description}
                  href={`${featuredWork.cta.href}#${project.slug}`}
                  cue={featuredWork.cue}
                  badge={featuredWork.conceptLabel}
                  layout={place.layout}
                  mediaClassName={place.media}
                />
              </li>
            );
          })}
        </ul>

        <div className="mt-section-sm flex scroll-reveal justify-center">
          <Button href={featuredWork.cta.href} size="lg" variant="gold" arrow className="max-sm:w-full">
            {featuredWork.cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
