import type { CSSProperties } from "react";
import { ServicePillarCard } from "@/components/cards/ServicePillarCard";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Accent } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignalMark } from "@/components/ui/SignalMark";
import { servicesSection } from "@/content/home";
import { serviceHref, services } from "@/content/services";

/**
 * "What we do": the six service pillars. (The tailored-solution CTA now
 * lives in the homepage finale.)
 * An ice band separates it from the white About section; white cards sit on it.
 * Cards rise in with the CSS scroll-reveal utility, staggered across each row.
 */
export function HomeServices() {
  return (
    <Section id="services" aria-labelledby="services-heading" tone="ice" spacing="none" className="overflow-x-clip pt-section-sm pb-section">
      <Container>
        <SignalMark />
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
              style={{ "--reveal-offset": `${((index % 3) * 5) * 8}px` } as CSSProperties}
            />
          ))}
        </Grid>

      </Container>
    </Section>
  );
}
