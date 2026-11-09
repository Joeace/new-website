import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/sections/PageIntro";
import { Button } from "@/components/ui/Button";
import { getService, services } from "@/content/services";

// Only the six known services exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.description } : {};
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <PageIntro eyebrow="Services" title={service.title} description={service.description} inDevelopment>
      <Button href="/services/" variant="text">
        All services
      </Button>
    </PageIntro>
  );
}
