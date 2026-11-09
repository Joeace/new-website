import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <PageIntro eyebrow="About" title={`About ${site.name}`} description={site.description} inDevelopment />;
}
