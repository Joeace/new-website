import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Our Work" };

export default function WorkPage() {
  return <PageIntro eyebrow="Our Work" title="Our work" description="Selected projects and case studies from our team." inDevelopment />;
}
