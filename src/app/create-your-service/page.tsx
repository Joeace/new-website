import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { navActions, servicesPromo } from "@/content/navigation";

export const metadata: Metadata = { title: navActions.createService.label };

export default function CreateYourServicePage() {
  return (
    <PageIntro
      eyebrow={navActions.createService.label}
      title={servicesPromo.title}
      description={servicesPromo.description}
      inDevelopment
    />
  );
}
