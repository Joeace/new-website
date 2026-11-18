import { Ear, Target, Users, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { IconFrame } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { trust } from "@/content/home";

const icons: LucideIcon[] = [Ear, Users, Target];

/**
 * "Trust & partnership": a compact, light band.
 * There are no verified client logos or testimonials yet, so this section
 * deliberately shows neither (no placeholders): only the approved copy, three
 * principles drawn from it, and a statement of who Mota Content Media aims
 * to serve. Add genuine, authorised logos or up to two testimonials here
 * when they exist.
 */
export function HomeTrust() {
  return (
    <Section id="trust" aria-labelledby="trust-heading" spacing="sm">
      <Container className="grid gap-y-stack-lg lg:grid-cols-12 lg:items-center lg:gap-x-8">
        <div className="scroll-reveal lg:col-span-5">
          <Eyebrow rule>{trust.eyebrow}</Eyebrow>
          <Heading as="h2" size="h2" id="trust-heading" className="mt-stack-sm">
            <span className="block">{trust.heading.lead}</span>
            <Accent>{trust.heading.accent}</Accent>
          </Heading>
          <Text className="mt-stack-sm max-w-xl">{trust.body}</Text>
        </div>

        <div className="scroll-reveal [--reveal-from:6%] [--reveal-to:30%] lg:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-line ring-1 ring-line sm:grid-cols-3">
            {trust.principles.map((principle, index) => {
              const Icon = icons[index];
              return (
                <li key={principle} className="flex items-center gap-3 bg-white px-4 py-3.5 sm:flex-col sm:items-start sm:gap-3 sm:py-5">
                  <IconFrame tone="mist">
                    <Icon strokeWidth={1.75} />
                  </IconFrame>
                  <span className="font-display text-body-sm leading-snug font-bold text-deep">{principle}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-stack max-w-[38rem] border-l-[3px] border-electric pl-4 text-body-sm text-slate sm:pl-5">{trust.statement}</p>
        </div>
      </Container>
    </Section>
  );
}
