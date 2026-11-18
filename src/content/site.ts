/**
 * Core brand facts, used for metadata and shared copy.
 * Only confirmed brand statements belong here: no invented statistics,
 * clients, awards or testimonials.
 */
export const site = {
  name: "Mota Content Media",
  tagline: "Ideas into influence. Content into growth.",
  positioning: "Creative Thinking. Intelligent Technology. Measurable Growth.",
  description:
    "Mota Content Media is a creative technology and digital marketing agency offering bespoke content creation, multimedia production, graphic design, social media management, advertising and digital marketing.",
  locale: "en_GB",
  contact: {
    /* Verified: supplied by Mota Content Media. */
    email: "motacontentmedia@gmail.com",
    /* PLACEHOLDER: replace with the real number. 020 7946 0xxx is reserved by
       Ofcom for fiction, so this cannot connect to anyone. */
    phone: { display: "020 7946 0123", href: "tel:+442079460123" },
    /* PLACEHOLDER: replace with the real business location. */
    location: "London, United Kingdom",
  },
} as const;
