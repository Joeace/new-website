import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center py-section">
      <Container width="narrow">
        <Eyebrow>404</Eyebrow>
        <Heading as="h1" size="h1" className="mt-5">
          This page doesn&rsquo;t exist.
        </Heading>
        <p className="mt-6 text-lead text-slate">
          The link may be out of date, or the page may have moved.
        </p>
        <Button href="/" size="lg" className="mt-10">
          Back to home
        </Button>
      </Container>
    </main>
  );
}
