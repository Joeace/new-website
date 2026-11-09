import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { site } from "@/content/site";

/*
 * Temporary holding page while the site is built phase by phase.
 * It shows only confirmed brand statements and has no links or buttons.
 * Replaced by the real home page in the home page phase.
 */
export default function HomePage() {
  return (
    <main className="relative isolate flex flex-1 items-center overflow-hidden bg-glow py-section">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <Container>
        <Reveal>
          <Eyebrow rule>{site.name}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <Heading as="h1" size="display" className="mt-stack max-w-5xl">
            Ideas into <Accent>influence.</Accent>
            <br />
            Content into <Accent>growth.</Accent>
          </Heading>
        </Reveal>
        <Reveal delay={0.16}>
          <Divider variant="accent" className="mt-stack-lg" />
          <Text size="body-lg" className="mt-stack max-w-2xl">
            {site.positioning}
          </Text>
          <Text size="body-sm" tone="muted" className="mt-stack-xs">
            Our new website is in development.
          </Text>
        </Reveal>
      </Container>
    </main>
  );
}
