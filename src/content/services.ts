import { AudioLines, Clapperboard, Megaphone, Palette, PenLine, TrendingUp, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/** The six service categories. Order is the order shown across the site. */
export const services: readonly Service[] = [
  {
    slug: "content-writing-editorial-strategy",
    title: "Content Writing & Editorial Strategy",
    description:
      "Strategic content, business communications, copywriting, editorial development and publishing solutions.",
    icon: PenLine,
  },
  {
    slug: "audio-production-sound-engineering",
    title: "Audio Production & Sound Engineering",
    description:
      "Professional audio recording, music production, sound design, podcast production and audio engineering.",
    icon: AudioLines,
  },
  {
    slug: "video-production-animation",
    title: "Video Production & Animation",
    description:
      "Creative video production, AI-assisted video, 2D and 3D animation, editing and visual storytelling.",
    icon: Clapperboard,
  },
  {
    slug: "graphic-design-visual-strategy",
    title: "Graphic Design & Visual Strategy",
    description: "Brand identity, visual communication, marketing creatives and digital design.",
    icon: Palette,
  },
  {
    slug: "social-media-management-advertising",
    title: "Social Media Management & Advertising",
    description:
      "Social media strategy, content management, community engagement and paid advertising campaigns.",
    icon: Megaphone,
  },
  {
    slug: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    description:
      "SEO, AI search optimisation, performance marketing, conversion optimisation and marketing automation.",
    icon: TrendingUp,
  },
];

export const serviceHref = (slug: string) => `/services/${slug}/`;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
