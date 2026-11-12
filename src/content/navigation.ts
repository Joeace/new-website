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

/** Footer link groups. Services are listed from content/services.ts. */
export const footerNav = {
  company: {
    title: "Company",
    links: primaryNav.filter((item) => !item.hasServicesMenu),
  },
  services: { title: "Services", allLabel: "All services", allHref: "/services/" },
  start: {
    title: "Get started",
    links: [navActions.createService, navActions.talk],
  },
} as const;
