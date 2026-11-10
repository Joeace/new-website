/** Homepage copy, kept exactly as approved. */
export const hero = {
  eyebrow: "Creative Thinking. Intelligent Technology. Measurable Growth.",
  /* Split into lines for controlled breaks on larger screens. */
  headline: ["We Create Digital", "Experiences That Move", "Businesses Forward."],
  body: "We combine exceptional creativity, intelligent technology and strategic marketing to help brands capture attention, connect with customers and accelerate growth.",
  primaryCta: { label: "Explore Our Services", href: "/services/" },
  secondaryCta: { label: "Start a Project", href: "/contact/" },
  tagline: "Ideas into influence. Content into growth.",
} as const;

/** "Get to know Mota" homepage section. */
export const about = {
  eyebrow: "Get to Know Mota",
  heading: { lead: "Creativity Meets Technology.", accent: "Strategy Drives Growth." },
  lead: "At Mota Content Media, we believe great ideas deserve more than attention\u2014they deserve to make an impact.",
  intro:
    "We are a creative technology and digital marketing agency helping businesses and individuals transform ideas into compelling digital experiences. By bringing together creative expertise, intelligent technology and strategic thinking, we develop tailored solutions that help brands communicate more effectively, connect with their audiences and grow.",
  approachLabel: "Our approach",
  approach: [
    "From the first idea to the final execution, we combine creativity with purpose. Whether developing a brand\u2019s visual identity, producing engaging multimedia content, managing digital campaigns or building intelligent digital solutions, we focus on delivering work that serves a clear objective.",
    "We do not believe in one-size-fits-all solutions. Every business has its own story, audience and ambitions. That is why we take the time to understand each client\u2019s needs and develop solutions around their goals.",
  ],
  closing:
    "We turn imagination into meaningful digital experiences\u2014and meaningful experiences into business opportunities.",
  primaryCta: { label: "Discover More About Us", href: "/about/" },
  secondaryCta: { label: "Explore Our Services", href: "/services/" },
} as const;
