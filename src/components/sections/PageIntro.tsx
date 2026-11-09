import type { ReactNode } from "react";
import { Chip } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Marks a planned page whose full content arrives in a later phase. */
  inDevelopment?: boolean;
  children?: ReactNode;
};

/** The opening band of an inner page: eyebrow, H1 and introduction. */
export function PageIntro({ eyebrow, title, description, inDevelopment = false, children }: PageIntroProps) {
  return (
    <Section tone="glow" spacing="md" grid className="flex-1">
      <Container className="flex flex-col gap-stack-lg">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
        {inDevelopment && (
          <p className="flex flex-wrap items-center gap-3 text-body-sm text-muted">
            <Chip tone="outline">In development</Chip>
            This page is being prepared and will be available soon.
          </p>
        )}
        {children}
      </Container>
    </Section>
  );
}
