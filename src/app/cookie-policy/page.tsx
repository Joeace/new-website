import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Cookie Policy" };

/* Notice only: the legal document itself is still to be written. */
export default function CookiePolicyPage() {
  return <PageIntro eyebrow="Legal" title="Cookie Policy" description="How this website uses cookies and similar technologies." inDevelopment />;
}
