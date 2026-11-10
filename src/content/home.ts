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

/** "What we do" homepage section. Service details live in content/services.ts. */
export const servicesSection = {
  eyebrow: "What We Do",
  heading: { lead: "Creative Expertise. Intelligent Solutions.", accent: "One Connected Agency." },
  intro:
    "From compelling content and powerful visuals to strategic marketing and intelligent digital solutions, we bring the expertise businesses need to build their presence, connect with audiences and grow.",
  capabilitiesLabel: "Key capabilities",
  cardCue: "Explore Service",
  cta: {
    heading: "Not Sure Which Service Is Right for You?",
    body: "Every business is different. Tell us what you\u2019re trying to achieve and we\u2019ll help you build a solution around your goals.",
    button: { label: "Create Your Service", href: "/create-your-service/" },
  },
} as const;

/** "Why choose Mota Content Media?" homepage section. */
export const whyChoose = {
  eyebrow: "The Mota Content Media Difference",
  heading: "Why Choose Mota Content Media?",
  statement: {
    lead: "More Than Creative. More Than Marketing.",
    accent: "A Smarter Way to Move Your Business Forward.",
  },
  intro: [
    "The right creative partner does more than deliver individual services. It understands your objectives, connects the dots and brings the right expertise together to move your business forward.",
    "At Mota Content Media, we combine creative excellence, intelligent technology and strategic execution to develop tailored solutions that help businesses communicate, compete and grow in an increasingly digital world.",
  ],
  /* The three disciplines the introduction brings together. */
  pillars: ["Creative excellence", "Intelligent technology", "Strategic execution"],
  advantages: [
    {
      title: "Intelligent Innovation",
      description:
        "We embrace emerging technologies and AI-assisted tools to expand creative possibilities, streamline processes and develop smarter solutions. Technology supports our creativity; it does not replace thoughtful human direction.",
    },
    {
      title: "Bespoke Strategies",
      description:
        "No two businesses are identical. We take the time to understand your goals, audience and challenges before developing creative and marketing solutions tailored to your needs.",
    },
    {
      title: "Results-Driven Thinking",
      description:
        "Every creative and marketing decision should have a purpose. We focus on aligning content, campaigns and digital experiences with meaningful business objectives.",
    },
    {
      title: "Customer-Centric Delivery",
      description:
        "Your goals shape our approach. We value clear communication, collaboration and solutions that reflect your priorities, expectations and business ambitions.",
    },
    {
      title: "Integrated Expertise",
      description:
        "Content, design, audio, video and marketing work better when they work together. Our connected service capabilities help create a consistent and cohesive brand experience across digital channels.",
    },
    {
      title: "Efficient Execution",
      description:
        "We use organised workflows, modern tools and intelligent processes to support efficient project delivery while maintaining attention to quality, creativity and detail.",
    },
    {
      title: "Collaborative Partnership",
      description:
        "We believe the best work comes from productive collaboration. We work alongside our clients to understand their vision, exchange ideas and develop solutions together.",
    },
    {
      title: "Long-Term Growth",
      description:
        "We look beyond individual deliverables. Our aim is to help businesses build stronger digital foundations, develop lasting relationships with their audiences and create opportunities for continued growth.",
    },
  ],
  closing: {
    statement: "Your ambitions deserve more than ordinary solutions. Let\u2019s create something meaningful together.",
    body: "Whether you need creative content, a stronger digital presence or an integrated marketing strategy, Mota Content Media is ready to help you take the next step.",
    primaryCta: { label: "Let\u2019s Work Together", href: "/contact/" },
    secondaryCta: { label: "Create Your Service", href: "/create-your-service/" },
  },
} as const;
