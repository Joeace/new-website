import type { ReactNode } from "react";
import { Card, CardCue, CardDescription, CardFooter, CardTitle } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/Icon";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  cue?: string;
};

/** A service offering that links to its detail page. */
export function ServiceCard({ icon, title, description, href, cue = "Explore service" }: ServiceCardProps) {
  return (
    <Card interactive className="h-full gap-stack-sm">
      <IconFrame size="lg" tone="mist" className="group-hover:bg-interactive group-hover:text-white">
        {icon}
      </IconFrame>
      <CardTitle href={href} size="h3" className="mt-stack-xs">
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardFooter>
        <CardCue>{cue}</CardCue>
      </CardFooter>
    </Card>
  );
}
