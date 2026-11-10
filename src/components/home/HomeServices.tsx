import type { CSSProperties } from "react";
import { ServicePillarCard } from "@/components/cards/ServicePillarCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Accent, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { servicesSection } from "@/content/home";
import { serviceHref, services } from "@/content/services";

/**
 * "What we do": the six service pillars and a tailored-solution CTA.
 * An ice band separates it from the white About section; white cards sit on it.
 * Cards rise in with the CSS scroll-reveal utility, staggered across each row.
 */
export function HomeServices() {
  const { cta } = servicesSection;

  return (
    <Section id="services" aria-labelledby="services-heading" tone="ice" spacing="lg" className="overflow-x-clip">
      <Container>
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={
            <span id="services-heading">
              <span className="lg:block">{servicesSection.heading.lead} </span>
              <Accent>{servicesSection.heading.accent}</Accent>
            </span>
          }
          description={servicesSection.intro}
          className="scroll-reveal [&>div]:max-w-none [&_h2]:max-w-5xl [&_p]:max-w-2xl"
        />

        <Grid cols={3} gap="md" className="mt-stack-lg lg:mt-section-sm">
          {services.map((service, index) => (
            <ServicePillarCard
              key={service.slug}
              number={index + 1}
              slug={service.slug}
              title={service.title}
              summary={service.summary}
              capabilities={service.capabilities}
              icon={service.icon}
              href={serviceHref(service.slug)}
              capabilitiesLabel={servicesSection.capabilitiesLabel}
              cue={servicesSection.cardCue}
              className="h-full scroll-reveal"
              style={{ "--reveal-from": `${(index % 3) * 5}%`, "--reveal-to": `${24 + (index % 3) * 6}%` } as CSSProperties}
            />
          ))}
        </Grid>

        {/* Closing CTA: restrained, distinct from the cards */}
        <div className="relative isolate mt-section-sm scroll-reveal overflow-hidden rounded-xl bg-white p-card-lg shadow-soft ring-1 ring-line/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-glow" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-grid opacity-80" />
          <div className="flex flex-col gap-stack lg:flex-row lg:items-center lg:justify-between lg:gap-layout-lg">
            <div className="max-w-2xl">
              <span aria-hidden="true" className="block h-[3px] w-12 rounded-pill bg-electric" />
              <Heading as="h3" size="h2" className="mt-stack text-deep">
                {cta.heading}
              </Heading>
              <Text size="body-lg" className="mt-stack-sm">
                {cta.body}
              </Text>
            </div>
            <Button href={cta.button.href} size="lg" arrow className="shrink-0 max-sm:w-full">
              {cta.button.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
