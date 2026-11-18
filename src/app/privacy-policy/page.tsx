import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Privacy Policy" };

/* Notice only: the legal document itself is still to be written. */
export default function PrivacyPolicyPage() {
  return <PageIntro eyebrow="Legal" title="Privacy Policy" description="How Mota Content Media collects, uses and protects personal information." inDevelopment />;
}
