import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Terms & Conditions" };

/* Notice only: the legal document itself is still to be written. */
export default function TermsConditionsPage() {
  return <PageIntro eyebrow="Legal" title="Terms & Conditions" description="The terms that apply to using this website and working with Mota Content Media." inDevelopment />;
}
