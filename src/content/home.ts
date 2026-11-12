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

/** "How we work": the five-stage process. */
export const approach = {
  eyebrow: "How We Work",
  heading: { lead: "Great Work Doesn\u2019t Happen by Accident.", accent: "It Happens by Design." },
  intro: [
    "Every successful project begins with understanding. At Mota Content Media, we follow a thoughtful, collaborative process that connects your business objectives with the right creative ideas, technology and marketing solutions.",
    "From the first conversation to final delivery, every stage has a purpose: creating work that makes sense for your business and moves you closer to your goals.",
  ],
  activitiesLabel: "Key activities",
  stages: [
    {
      id: "discover",
      name: "Discover",
      tagline: "Understand Before We Create.",
      description:
        "We begin by learning about your business, your audience, your challenges and what you want to achieve. This discovery stage gives us the insight needed to develop a solution that makes sense for your specific situation.",
      activities: ["Initial consultation", "Business and audience understanding", "Project requirements", "Goals and objectives", "Scope definition"],
    },
    {
      id: "strategise",
      name: "Strategise",
      tagline: "Give Every Idea a Direction.",
      description:
        "With a clear understanding of your needs, we develop a tailored strategy that defines the creative direction, recommended services, priorities, deliverables and execution plan.",
      activities: ["Strategic planning", "Creative direction", "Service recommendations", "Channel and platform selection", "Project roadmap"],
    },
    {
      id: "create",
      name: "Create",
      tagline: "Turn Ideas into Something Tangible.",
      description:
        "This is where strategy becomes creative work. Our team brings together content, design, audio, video and digital expertise to develop solutions that communicate your message and reflect your brand.",
      activities: ["Content development", "Graphic and visual design", "Audio and video production", "Digital asset creation", "Review and refinement"],
    },
    {
      id: "execute",
      name: "Execute",
      tagline: "Bring the Strategy to Life.",
      description:
        "We put the plan into action, coordinating the agreed deliverables and implementing the relevant creative and marketing activities across the selected platforms and channels.",
      activities: ["Project implementation", "Content delivery and publishing", "Campaign execution", "Digital deployment", "Quality assurance"],
    },
    {
      id: "measure-optimise",
      name: "Measure & Optimise",
      tagline: "Learn, Improve and Keep Moving Forward.",
      description:
        "Where performance measurement is relevant to the project, we evaluate results against agreed objectives, identify opportunities for improvement and recommend appropriate next steps.",
      activities: ["Performance evaluation", "Reporting and insights", "Audience and engagement analysis", "Optimisation recommendations", "Future planning"],
      /* Signals that this stage depends on the agreed scope. */
      scopeNote: "Depends on project scope",
    },
  ],
  closing: {
    statement: "Every great project starts with a conversation.",
    body: "Tell us what you want to achieve. We\u2019ll help you identify the right creative and digital solutions to get started.",
    primaryCta: { label: "Start a Conversation", href: "/contact/" },
    secondaryCta: { label: "Create Your Service", href: "/create-your-service/" },
  },
} as const;

/**
 * "Selected creative work". These are self-initiated concept projects that
 * illustrate capabilities, not client commissions: no client names, results
 * or testimonials. Replace with genuine portfolio work when available.
 */
export const featuredWork = {
  eyebrow: "Selected Creative Work",
  heading: { lead: "Ideas Brought to Life.", accent: "Creativity Put into Action." },
  intro: [
    "Explore a selection of creative concepts and digital experiences that demonstrate what is possible when creative thinking, intelligent technology and strategic execution come together.",
    "From compelling visual identities to engaging multimedia content and digital campaigns, every project represents an opportunity to turn an idea into something meaningful.",
  ],
  conceptLabel: "Concept Project",
  conceptNote:
    "The projects shown are self-initiated creative concepts by Mota Content Media. They illustrate our capabilities and are not client commissions.",
  cue: "Explore Project",
  projects: [
    {
      slug: "brand-identity",
      category: "Graphic Design & Branding",
      title: "Building a Distinctive Brand Identity",
      description:
        "A conceptual branding project exploring visual identity, colour systems, typography and brand applications for a modern business.",
    },
    {
      slug: "video-campaign",
      category: "Video Production",
      title: "A Story Worth Watching",
      description:
        "A conceptual promotional video campaign demonstrating visual storytelling, motion graphics and engaging digital video content.",
    },
    {
      slug: "editorial-content",
      category: "Content Writing",
      title: "Ideas That Inform and Inspire",
      description:
        "A conceptual editorial project showcasing professional writing, content structure, visual presentation and audience-focused storytelling.",
    },
    {
      slug: "social-media-campaign",
      category: "Social Media Marketing",
      title: "Creating a Stronger Social Presence",
      description:
        "A conceptual social media campaign demonstrating creative direction, content planning, visual consistency and platform-specific content.",
    },
    {
      slug: "audio-production",
      category: "Audio Production",
      title: "Sound That Makes an Impression",
      description:
        "A conceptual audio production project demonstrating voice recording, sound design, audio editing and professional presentation.",
    },
    {
      slug: "digital-marketing",
      category: "Digital Marketing",
      title: "A Connected Digital Growth Strategy",
      description:
        "A conceptual digital marketing project demonstrating how search visibility, content, paid media and conversion-focused experiences can work together.",
    },
  ],
  cta: { label: "Explore Our Portfolio", href: "/work/" },
} as const;
