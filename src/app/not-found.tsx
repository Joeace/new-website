import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-section">
      <Container width="narrow">
        <Eyebrow>Error 404</Eyebrow>
        <Heading as="h1" className="mt-stack-sm">
          This page doesn&rsquo;t exist.
        </Heading>
        <Text size="body-lg" className="mt-stack">
          The link may be out of date, or the page may have moved.
        </Text>
        <Button href="/" size="lg" className="mt-stack-lg">
          Back to home
        </Button>
      </Container>
    </div>
  );
}
