import { cn } from "@/lib/utils";

type DividerProps = {
  /** line: full-width hairline. fade: hairline that fades at both ends. accent: short blue rule. */
  variant?: "line" | "fade" | "accent";
  tone?: "default" | "inverse";
  className?: string;
};

export function Divider({ variant = "line", tone = "default", className }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0",
        variant === "line" && (tone === "inverse" ? "h-px bg-white/15" : "h-px bg-line"),
        variant === "fade" &&
          (tone === "inverse"
            ? "h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
            : "h-px bg-linear-to-r from-transparent via-line to-transparent"),
        variant === "accent" && "h-[3px] w-12 rounded-pill bg-electric",
        className,
      )}
      aria-hidden={variant === "accent" ? true : undefined}
    />
  );
}
