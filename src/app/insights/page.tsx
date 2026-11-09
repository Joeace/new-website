import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <PageIntro
      eyebrow="Insights"
      title="Insights"
      description="Articles and perspectives on content, creativity and digital marketing."
      inDevelopment
    />
  );
}
