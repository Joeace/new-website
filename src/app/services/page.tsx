import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PageIntro } from "@/components/sections/PageIntro";
import { Grid } from "@/components/ui/Grid";
import { serviceHref, services } from "@/content/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PageIntro
      eyebrow="Services"
      title="Our services"
      description="Content, production, design, social media and digital growth, delivered as focused services or combined into one solution."
    >
      <Grid cols={3} className="mt-stack">
        {services.map(({ slug, title, description, icon: Icon }) => (
          <ServiceCard
            key={slug}
            icon={<Icon strokeWidth={1.75} />}
            title={title}
            description={description}
            href={serviceHref(slug)}
          />
        ))}
      </Grid>
    </PageIntro>
  );
}
