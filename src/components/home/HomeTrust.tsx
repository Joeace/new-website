import { Ear, Target, Users, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { trust } from "@/content/home";
import { textures } from "@/content/media";
import { MediaTexture } from "@/components/media/MediaTexture";

const icons: LucideIcon[] = [Ear, Users, Target];

/**
 * "Trust & partnership": a compact, light band.
 * Left: approved copy and three principles drawn from it.
 * Right: up to two genuine, approved client testimonials (organisation and
 * engagement only; no invented people, roles, photos or logos).
 */
export function HomeTrust() {
  return (
    <Section id="trust" aria-labelledby="trust-heading" tone="ice" spacing="sm">
      <MediaTexture src={textures.microphone} opacity={0.08} className="inset-y-0 left-0 w-full [mask-image:linear-gradient(90deg,#000,transparent_70%)] lg:w-1/2" />
      <Container className="grid gap-y-stack-lg lg:grid-cols-12 lg:items-center lg:gap-x-8">
        <div className="scroll-reveal lg:col-span-5">
          <Eyebrow rule>{trust.eyebrow}</Eyebrow>
          <Heading as="h2" size="h2" id="trust-heading" className="mt-stack-sm">
            <span className="block">{trust.heading.lead}</span>
            <Accent>{trust.heading.accent}</Accent>
          </Heading>
          <Text className="mt-stack-sm max-w-xl">{trust.body}</Text>
          <ul className="mt-stack flex flex-col gap-2.5">
            {trust.principles.map((principle, index) => {
              const Icon = icons[index];
              return (
                <li key={principle} className="flex items-center gap-3 text-body-sm font-semibold text-deep">
                  <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-pill bg-white text-gold-ink ring-1 ring-gold/50">
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  {principle}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <h3 className="sr-only">{trust.testimonialsLabel}</h3>
          <ul className="grid gap-layout md:grid-cols-2">
            {trust.testimonials.map((testimonial, index) => (
              <li
                key={testimonial.organisation}
                className="scroll-reveal"
                style={{ "--reveal-offset": `${(4 + index * 5) * 8}px` } as CSSProperties}
              >
                <TestimonialCard
                  size="compact"
                  quote={testimonial.quote}
                  name={testimonial.organisation}
                  role={testimonial.context}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
