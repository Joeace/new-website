/**
 * Site navigation. Every href here has a route in src/app; pages not yet
 * built show an "in development" notice rather than a 404.
 * Hrefs end in a slash to match `trailingSlash: true` in next.config.ts.
 */
export type NavItem = {
  label: string;
  href: string;
  /** Opens the services mega menu (desktop) or accordion (mobile). */
  hasServicesMenu?: boolean;
};

export const primaryNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/", hasServicesMenu: true },
  { label: "Our Work", href: "/work/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

export const navActions = {
  createService: { label: "Create Your Service", href: "/create-your-service/" },
  talk: { label: "Let’s Talk", href: "/contact/" },
} as const;

export const servicesPromo = {
  title: "Your Business. Your Goals. Your Solution.",
  description:
    "Explore our creative and marketing services or build a bespoke solution around your business objectives.",
  cta: navActions.createService,
} as const;

/** True when `href` is the current page, or a parent section of it. */
export function isActivePath(pathname: string, href: string) {
  const normalise = (path: string) => (path.endsWith("/") ? path : `${path}/`);
  const current = normalise(pathname);
  const target = normalise(href);
  return target === "/" ? current === "/" : current.startsWith(target);
}

/**
 * Global footer content. Services are listed from content/services.ts and
 * contact details from content/site.ts.
 * No social profiles have been supplied, so no social links are shown;
 * add verified profile URLs to `social` to display the Follow Us group.
 * Legal routes are planned; the pages are built in a later phase.
 */
export const footer = {
  description:
    "Mota Content Media is a creative technology and digital marketing agency helping businesses and individuals transform ideas into compelling digital experiences through content, design, multimedia production and strategic marketing.",
  cta: navActions.talk,
  explore: {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about/" },
      { label: "Our Services", href: "/services/" },
      { label: "Our Work", href: "/work/" },
      { label: "Insights", href: "/insights/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  services: { title: "Our Services" },
  contact: { title: "Get in Touch", emailLabel: "Email", contactLink: { label: "Contact Us", href: "/contact/" } },
  social: {
    title: "Follow Us",
    /* e.g. { platform: "LinkedIn", href: "https://www.linkedin.com/company/..." } */
    profiles: [] as { platform: string; href: string }[],
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions/" },
    { label: "Cookie Policy", href: "/cookie-policy/" },
  ],
} as const;
