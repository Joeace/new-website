import type { ReactNode } from "react";

/*
 * A restrained line illustration per service, drawn in one shared style
 * (electric blue hairlines with a single deep-blue focal mark) so each card
 * has its own identity while the set stays coherent. Decorative only.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

const motifs: Record<string, ReactNode> = {
  /* Editorial: a page of text lines with a highlighted heading */
  "content-writing": (
    <>
      <rect x="18" y="14" width="96" height="112" rx="8" {...stroke} />
      <path d="M32 34h54" {...stroke} strokeWidth={4} className="text-deep" />
      <path d="M32 50h68M32 62h60M32 74h68M32 86h44M32 98h56" {...stroke} />
      <path d="m96 92 22-22 8 8-22 22-11 3z" {...stroke} />
    </>
  ),
  /* Audio: a waveform with one emphasised peak */
  "audio-production": (
    <>
      {[10, 26, 44, 30, 58, 40, 76, 52, 34, 62, 24, 44, 16].map((h, i) => (
        <path key={i} d={`M${14 + i * 9} ${70 - h / 2}v${h}`} {...stroke} strokeWidth={i === 6 ? 4 : 2} className={i === 6 ? "text-deep" : undefined} />
      ))}
      <path d="M8 118h120" {...stroke} strokeDasharray="2 5" />
    </>
  ),
  /* Video: a film frame with sprockets and a play mark */
  "video-production": (
    <>
      <rect x="10" y="26" width="116" height="84" rx="8" {...stroke} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={20 + i * 22} y="32" width="10" height="6" rx="1.5" {...stroke} />
          <rect x={20 + i * 22} y="98" width="10" height="6" rx="1.5" {...stroke} />
        </g>
      ))}
      <path d="m60 54 22 14-22 14z" {...stroke} strokeWidth={3} className="text-deep" />
    </>
  ),
  /* Design: construction shapes with a bezier curve and handles */
  "graphic-design": (
    <>
      <circle cx="54" cy="56" r="32" {...stroke} />
      <rect x="62" y="50" width="56" height="56" rx="6" {...stroke} />
      <path d="M14 118C40 70 86 128 124 22" {...stroke} strokeWidth={3} className="text-deep" />
      <path d="M14 118 40 82M124 22 104 52" {...stroke} strokeDasharray="2 4" />
      <rect x="10" y="114" width="8" height="8" rx="1.5" {...stroke} />
      <rect x="120" y="18" width="8" height="8" rx="1.5" {...stroke} />
    </>
  ),
  /* Social: a connected community of nodes around one voice */
  "social-media": (
    <>
      <path d="M68 68 28 30M68 68l46-30M68 68l-42 40M68 68l50 38M68 68V16" {...stroke} />
      <circle cx="68" cy="68" r="16" {...stroke} strokeWidth={3} className="text-deep" />
      {[
        [28, 30, 9],
        [114, 38, 11],
        [26, 108, 10],
        [118, 106, 8],
        [68, 16, 7],
      ].map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} {...stroke} />
      ))}
    </>
  ),
  /* Growth: a rising trend line over a baseline grid */
  "digital-marketing": (
    <>
      <path d="M12 120h116M12 92h116M12 64h116M12 36h116" {...stroke} strokeDasharray="2 6" />
      <path d="M14 108 44 84l22 10 30-36 28-30" {...stroke} strokeWidth={3} className="text-deep" />
      <path d="M108 26h18v18" {...stroke} strokeWidth={3} className="text-deep" />
      <circle cx="66" cy="94" r="4" {...stroke} />
      <circle cx="96" cy="58" r="4" {...stroke} />
    </>
  ),
};

export function ServiceMotif({ slug, className }: { slug: string; className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 136 136" className={className}>
      {motifs[slug]}
    </svg>
  );
}
