import { MediaTexture } from "@/components/media/MediaTexture";
import { Photo } from "@/components/media/Photo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { about } from "@/content/home";
import { photos, textures } from "@/content/media";

/**
 * "Get to know Mota Content Media": who we are, how we work, why it matters.
 *
 * Desktop: heading across the top; a photographic composition on the left
 * (collaboration, a podcast session and an edit desk, framed in gold),
 * introduction and approach on the right. Phones: heading, introduction,
 * photographs, approach, actions. The photographs are illustrative
 * creative-industry images, not Mota Content Media staff.
 */
export function HomeAbout() {
  return (
    <Section id="about" aria-labelledby="about-heading" spacing="none" className="overflow-x-clip pt-section-sm pb-section">
      <MediaTexture src={textures.books} className="right-0 bottom-0 h-[70%] w-full [mask-image:linear-gradient(0deg,#000_20%,transparent),linear-gradient(90deg,transparent,#000_50%)] [mask-composite:intersect] lg:w-[60%]" />

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
        <div className="scroll-reveal [--reveal-offset:48px] lg:col-span-6 lg:col-start-7 lg:row-start-2">
          <p className="font-display text-h3 leading-snug font-normal text-deep italic">{about.lead}</p>
          <Text size="body-lg" className="mt-stack max-w-prose">
            {about.intro}
          </Text>
        </div>

        {/* Photographic composition */}
        <div className="lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:self-center">
          <div className="relative mx-auto max-w-[34rem] scroll-reveal pr-[12%] pb-[16%] [--reveal-offset:32px] lg:max-w-none">
            {/* Gold frame, offset behind the main photograph */}
            <div aria-hidden="true" className="absolute top-6 right-[6%] bottom-[10%] left-6 rounded-xl ring-1 ring-gold" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lifted">
              <Photo photo={photos.aboutCollaboration} sizes="(min-width: 1024px) 36vw, 90vw" className="size-full" style={{ objectPosition: "38% 50%" }} />
            </div>
            <div className="absolute right-0 bottom-0 aspect-[4/3] w-[58%] overflow-hidden rounded-lg shadow-lifted ring-[6px] ring-white">
              <Photo photo={photos.aboutPodcastSession} sizes="(min-width: 1024px) 22vw, 52vw" className="size-full" />
            </div>
            <div className="absolute top-[8%] -left-3 hidden aspect-square w-[30%] overflow-hidden rounded-lg shadow-lifted ring-[5px] ring-white sm:block md:-left-6">
              <Photo photo={photos.aboutEditingDesk} sizes="(min-width: 1024px) 12vw, 28vw" className="size-full" style={{ objectPosition: "35% 50%" }} />
            </div>
          </div>
        </div>

        {/* Approach, closing statement and actions */}
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-3 lg:pt-stack-lg">
          <div className="scroll-reveal [--reveal-offset:32px]">
            <div className="flex items-center gap-4">
              <h3 className="shrink-0 font-sans text-label text-gold-ink uppercase">{about.approachLabel}</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-gold/40" />
            </div>
            <div className="mt-stack flex max-w-prose flex-col gap-stack-sm">
              {about.approach.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </div>
          </div>

          <div className="mt-stack-lg scroll-reveal border-l-[3px] border-gold pl-6 [--reveal-offset:48px] md:pl-8">
            <p className="font-display text-h3 text-pretty text-deep">{about.closing}</p>
          </div>

          <div className="mt-stack-lg flex scroll-reveal flex-col gap-3 [--reveal-offset:64px] sm:flex-row sm:items-center">
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
