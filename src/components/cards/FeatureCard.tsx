import type { ReactNode } from "react";
import { Card, CardDescription, CardTitle, type CardSurface } from "@/components/ui/Card";
import { IconFrame } from "@/components/ui/Icon";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  surface?: CardSurface;
};

/** A non-clickable benefit or capability, usually in a grid of three or four. */
export function FeatureCard({ icon, title, description, surface = "ice" }: FeatureCardProps) {
  return (
    <Card surface={surface} className="h-full gap-stack-sm">
      {icon && (
        <IconFrame tone={surface === "ice" ? "outline" : "ice"} className="mb-stack-xs">
          {icon}
        </IconFrame>
      )}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
