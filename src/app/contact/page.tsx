import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <PageIntro eyebrow="Contact" title="Let’s talk" description="Get in touch with our team." inDevelopment />;
}
