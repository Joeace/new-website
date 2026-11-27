import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { audiences } from "@/content/home";
import { textures } from "@/content/media";
import { MediaTexture } from "@/components/media/MediaTexture";

/**
 * "Who we work with": a deliberately compact band. Heading, a sentence and
 * eight plain labels (types of client, not named clients) in a ruled grid.
 * Labels are not links, so they carry no hover state. No animation beyond the shared reveal.
 */
export function HomeAudiences() {
  return (
    <Section id="who-we-work-with" aria-labelledby="audiences-heading" spacing="sm">
      <MediaTexture src={textures.books} opacity={0.06} className="inset-y-0 right-0 w-full [mask-image:linear-gradient(90deg,transparent,#000_60%)] lg:w-2/3" />
      <Container className="grid gap-y-stack-lg lg:grid-cols-12 lg:items-center lg:gap-x-8">
        <div className="scroll-reveal lg:col-span-5">
          <Eyebrow rule>{audiences.eyebrow}</Eyebrow>
          <Heading as="h2" size="h2" id="audiences-heading" className="mt-stack-sm">
            <span className="block">{audiences.heading.lead}</span>
            <Accent>{audiences.heading.accent}</Accent>
          </Heading>
          <Text className="mt-stack-sm max-w-xl">{audiences.body}</Text>
          <Button href={audiences.link.href} variant="text" className="mt-stack">
            {audiences.link.label}
          </Button>
        </div>

        {/* Compact ruled grid: 4 x 2 on tablets and wide screens; 2 x 4 on phones and small laptops */}
        <ul
          aria-label="Types of clients we work with"
          className="grid scroll-reveal grid-cols-2 gap-px overflow-hidden rounded-lg bg-gold/30 ring-1 ring-gold/30 [--reveal-offset:48px] md:grid-cols-4 lg:col-span-7 lg:grid-cols-2 xl:grid-cols-4"
        >
          {audiences.labels.map((label) => (
            <li
              key={label}
              className="flex items-center gap-2.5 bg-white/95 px-3.5 py-3.5 text-[0.8125rem] leading-snug font-medium text-deep sm:px-4 sm:text-body-sm md:py-5"
            >
              <svg aria-hidden="true" viewBox="0 0 10 10" className="size-2.5 shrink-0 fill-gold">
                <path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" />
              </svg>
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
