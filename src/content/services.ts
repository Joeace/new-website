import { AudioLines, Clapperboard, Megaphone, Palette, PenLine, TrendingUp, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  /** One-line summary for compact spaces (mega menu, mobile menu). */
  description: string;
  /** Fuller introduction for the homepage services section. */
  summary: string;
  capabilities: readonly string[];
  icon: LucideIcon;
};

/** The six service pillars. Order is the order shown across the site. */
export const services: readonly Service[] = [
  {
    slug: "content-writing",
    title: "Content Writing & Editorial Strategy",
    description:
      "Strategic content, business communications, copywriting, editorial development and publishing solutions.",
    summary:
      "We transform ideas into compelling content that informs, engages and inspires action. From strategic storytelling to professional business communication, we create content that strengthens brands and connects with the right audiences.",
    capabilities: [
      "B2B and B2C Content Writing",
      "Website Copywriting",
      "Blog Posts and Articles",
      "Email and Newsletter Writing",
      "Whitepapers and Business Content",
      "Book Writing, Editing and Publishing",
      "Editorial Strategy and Content Planning",
    ],
    icon: PenLine,
  },
  {
    slug: "audio-production",
    title: "Audio Production & Sound Engineering",
    description:
      "Professional audio recording, music production, sound design, podcast production and audio engineering.",
    summary:
      "We bring ideas to life through professional audio production. From clear, engaging voice recordings to immersive sound experiences, we create audio that communicates with impact.",
    capabilities: [
      "Podcast Production",
      "Voiceovers and Narration",
      "Audio Editing and Mixing",
      "Sound Design",
      "Music Production",
      "Audio Branding",
      "Audio Post-Production",
    ],
    icon: AudioLines,
  },
  {
    slug: "video-production",
    title: "Video Production & Animation",
    description:
      "Creative video production, AI-assisted video, 2D and 3D animation, editing and visual storytelling.",
    summary:
      "We turn stories and concepts into engaging visual experiences. From promotional videos to animation and digital storytelling, we help brands capture attention and communicate effectively.",
    capabilities: [
      "Promotional and Marketing Videos",
      "Explainer Videos",
      "Social Media Videos",
      "Motion Graphics",
      "2D Animation",
      "Video Editing and Post-Production",
      "AI-Assisted Video Production",
    ],
    icon: Clapperboard,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Visual Strategy",
    description: "Brand identity, visual communication, marketing creatives and digital design.",
    summary:
      "We create purposeful visual identities and communication materials that help brands stand out, express their personality and build recognition.",
    capabilities: [
      "Brand Identity Design",
      "Logo and Visual Identity",
      "Marketing Graphics",
      "Social Media Design",
      "Digital and Print Design",
      "Presentation Design",
      "Creative Direction",
    ],
    icon: Palette,
  },
  {
    slug: "social-media",
    title: "Social Media Management & Advertising",
    description:
      "Social media strategy, content management, community engagement and paid advertising campaigns.",
    summary:
      "We help brands build meaningful digital communities and turn social media attention into business opportunities through strategic content, consistent management and targeted advertising.",
    capabilities: [
      "Social Media Strategy",
      "Social Media Management",
      "Content Planning and Scheduling",
      "Community Management",
      "Paid Social Advertising",
      "Campaign Development",
      "Performance Reporting",
    ],
    icon: Megaphone,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    description:
      "SEO, AI search optimisation, performance marketing, conversion optimisation and marketing automation.",
    summary:
      "We develop integrated digital marketing strategies that improve visibility, attract qualified audiences and support sustainable business growth across digital channels.",
    capabilities: [
      "Search Engine Optimisation (SEO)",
      "Generative Engine Optimisation (GEO)",
      "Answer Engine Optimisation (AEO)",
      "Google and PPC Advertising",
      "Digital PR and Influencer Marketing",
      "Email and Lifecycle Marketing",
      "Conversion Rate Optimisation",
      "Marketing Automation and Analytics",
    ],
    icon: TrendingUp,
  },
];

export const serviceHref = (slug: string) => `/services/${slug}/`;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
