import { Info } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { featuredWork } from "@/content/home";
import {
  AudioSessionArt,
  BrandIdentityArt,
  EditorialArt,
  GrowthDashboardArt,
  SocialCampaignArt,
  VideoCampaignArt,
} from "./projects/ProjectArtwork";

const artwork: Record<string, ReactNode> = {
  "brand-identity": <BrandIdentityArt />,
  "video-campaign": <VideoCampaignArt />,
  "editorial-content": <EditorialArt />,
  "social-media-campaign": <SocialCampaignArt />,
  "audio-production": <AudioSessionArt />,
  "digital-marketing": <GrowthDashboardArt />,
};

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

/** "Selected creative work": six concept projects across the disciplines. */
export function HomeFeaturedWork() {
  return (
    <Section id="work" aria-labelledby="work-heading" spacing="lg" className="overflow-x-clip">
      <Container>
        {/* Introduction */}
        <div className="grid gap-y-stack lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="scroll-reveal lg:col-span-7">
            <Eyebrow rule>{featuredWork.eyebrow}</Eyebrow>
            <Heading as="h2" size="h1" id="work-heading" className="mt-stack">
              <span className="block">{featuredWork.heading.lead}</span>
              <Accent>{featuredWork.heading.accent}</Accent>
            </Heading>
          </div>
          <div className="flex scroll-reveal flex-col gap-stack-sm [--reveal-from:6%] [--reveal-to:32%] lg:col-span-5">
            {featuredWork.intro.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
        </div>

        {/* Concept disclosure, visible to everyone */}
        <p className="mt-stack-lg flex scroll-reveal items-start gap-3 rounded-lg bg-ice px-4 py-3 text-body-sm text-slate ring-1 ring-line md:items-center">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-interactive md:mt-0" strokeWidth={2} />
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
                style={{ "--reveal-from": `${(index % 3) * 4}%`, "--reveal-to": `${24 + (index % 3) * 5}%` } as CSSProperties}
              >
                <ProjectCard
                  artwork={artwork[project.slug]}
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
          <Button href={featuredWork.cta.href} size="lg" variant="secondary" arrow className="max-sm:w-full">
            {featuredWork.cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
