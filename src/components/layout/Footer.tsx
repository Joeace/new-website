import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/navigation/Logo";
import { Container } from "@/components/ui/Container";
import { Accent } from "@/components/ui/Heading";
import { footerNav } from "@/content/navigation";
import { serviceHref, services } from "@/content/services";
import { site } from "@/content/site";

/* Shared link treatment: an underline drawn on hover, in the link's colour. */
const linkBase =
  "relative inline-flex rounded-xs py-1 text-body-sm transition-colors duration-(--duration-fast) hover:text-interactive " +
  "after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-(--duration-base) after:ease-out-expo hover:after:scale-x-100";
const linkClass = `${linkBase} text-slate`;

const headingClass = "text-label text-deep uppercase";

/**
 * Site-wide footer. Light, so the supplied logo sits on white exactly as
 * provided. Only links to pages that exist; no social or legal links until
 * those accounts and pages are confirmed.
 * The year is set at build time (static export), so it updates on each deploy.
 */
export function Footer() {
  const year = new Date().getFullYear();
  // "Ideas into influence." / "Content into growth."
  const [taglineLead, taglineAccent] = site.tagline.split(/(?<=\.)\s/);

  return (
    <footer aria-labelledby="footer-heading" className="relative border-t border-line bg-white">
      <h2 id="footer-heading" className="sr-only">
        {site.name}: site information
      </h2>

      <Container className="py-section-sm">
        {/* Brand statement */}
        <div className="flex flex-col gap-stack border-b border-line pb-stack-lg lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo preload={false} />
            <p className="mt-stack max-w-2xl font-display text-h3 text-ink">
              {taglineLead} <Accent>{taglineAccent}</Accent>
            </p>
          </div>
          <a
            href={`mailto:${site.contact.email}`}
            className="group/mail inline-flex items-center gap-3 self-start rounded-pill bg-ice py-2 pr-5 pl-2 text-body-sm font-medium text-deep ring-1 ring-line transition-colors duration-(--duration-base) hover:bg-mist hover:text-interactive lg:self-auto"
          >
            <span className="grid size-9 place-items-center rounded-pill bg-white text-interactive shadow-soft transition-colors duration-(--duration-base) group-hover/mail:bg-interactive group-hover/mail:text-white">
              <Mail aria-hidden="true" className="size-4" strokeWidth={2} />
            </span>
            {site.contact.email}
          </a>
        </div>

        {/* Link groups */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-stack-lg pt-stack-lg md:grid-cols-3 lg:grid-cols-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <p className="text-label text-interactive uppercase">{site.positioning}</p>
            <p className="mt-stack-sm max-w-sm text-body-sm text-slate">{site.description}</p>
          </div>

          <nav aria-labelledby="footer-company" className="lg:col-span-2">
            <h3 id="footer-company" className={headingClass}>
              {footerNav.company.title}
            </h3>
            <ul className="mt-stack-sm flex flex-col gap-1">
              {footerNav.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* On phones, Company and Get started share a row and Services follows. */}
          <nav aria-labelledby="footer-services" className="col-span-2 max-md:order-last md:col-span-1 lg:col-span-3">
            <h3 id="footer-services" className={headingClass}>
              {footerNav.services.title}
            </h3>
            <ul className="mt-stack-sm flex flex-col gap-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={serviceHref(service.slug)} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={footerNav.services.allHref} className={`${linkBase} font-medium text-interactive`}>
                  {footerNav.services.allLabel}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-start" className="lg:col-span-3">
            <h3 id="footer-start" className={headingClass}>
              {footerNav.start.title}
            </h3>
            <ul className="mt-stack-sm flex flex-col gap-1">
              {footerNav.start.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.contact.email}`} className={linkClass}>
                  Email us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Legal line */}
        <div className="mt-stack-lg flex flex-col gap-3 border-t border-line pt-stack text-body-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <a href="#main-content" className={`${linkBase} items-center gap-2 self-start text-muted sm:self-auto`}>
            Back to top
            <ArrowUp aria-hidden="true" className="size-3.5" strokeWidth={2.25} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
