import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

/*
 * Temporary holding page while the site is built phase by phase.
 * It shows only confirmed brand statements and has no links or buttons.
 * Replaced by the real home page in the home page phase.
 */
export default function HomePage() {
  return (
    <main className="relative isolate flex flex-1 items-center overflow-hidden py-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_85%_-10%,var(--color-ice),transparent_70%),radial-gradient(40rem_30rem_at_-10%_110%,rgb(47_128_237/0.07),transparent_70%)]"
      />
      <Container>
        <Reveal>
          <Eyebrow>{site.name}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <Heading as="h1" size="display" className="mt-6 max-w-5xl">
            Ideas into <Accent>influence.</Accent>
            <br />
            Content into <Accent>growth.</Accent>
          </Heading>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 h-px w-24 bg-silver" />
          <p className="mt-8 max-w-2xl text-lead text-pretty text-slate">{site.positioning}</p>
          <p className="mt-3 text-sm text-slate">Our new website is in development.</p>
        </Reveal>
      </Container>
    </main>
  );
}
