import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/Icon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} by email at ${site.contact.email}.`,
};

export default function ContactPage() {
  const { email } = site.contact;

  return (
    <PageIntro eyebrow="Contact" title="Let’s talk" description="Tell us about your business and what you want to achieve. We’ll get back to you by email.">
      <Card surface="raised" padding="lg" className="mt-stack max-w-3xl gap-stack sm:flex-row sm:items-center">
        <IconFrame size="lg" tone="mist">
          <Mail strokeWidth={1.75} />
        </IconFrame>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-label text-muted uppercase">Email</p>
          <a
            href={`mailto:${email}`}
            className="font-display text-h4 [overflow-wrap:anywhere] text-deep underline-offset-4 transition-colors duration-(--duration-fast) hover:text-interactive hover:underline"
          >
            {email}
          </a>
        </div>
        <Button href={`mailto:${email}`} arrow className="shrink-0 self-start sm:self-auto">
          Send an email
        </Button>
      </Card>
    </PageIntro>
  );
}
