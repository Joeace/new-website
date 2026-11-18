import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/navigation/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footer } from "@/content/navigation";
import { serviceHref, services } from "@/content/services";
import { site } from "@/content/site";
import { CopyrightYear } from "./CopyrightYear";
import { SocialIcon } from "./SocialIcon";

/* Links: silver at rest, white on hover with a short electric underline. */
const linkClass =
  "relative inline-flex rounded-xs py-1 text-body-sm text-silver transition-colors duration-(--duration-fast) hover:text-white " +
  "after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-electric after:transition-transform after:duration-(--duration-base) after:ease-out-expo hover:after:scale-x-100";

const headingClass = "text-label text-white uppercase";

/**
 * Global footer, rendered once in the root layout.
 * Midnight background, white headings, silver secondary text, electric accents.
 * The supplied logo sits on a white nameplate so it appears exactly as
 * provided. Phone, location and social profiles are PLACEHOLDERS (see
 * content/site.ts and content/navigation.ts) until the real details exist.
 */
export function Footer() {
  const { social } = footer;
  const buildYear = new Date().getFullYear();

  return (
    <footer aria-labelledby="footer-heading" className="relative isolate overflow-hidden bg-midnight text-white">
      <h2 id="footer-heading" className="sr-only">
        {site.name}: site information
      </h2>
      {/* Restrained atmosphere: a faint electric glow in one corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(36rem_22rem_at_100%_0%,rgb(47_128_237/0.18),transparent_70%)]"
      />

      <Container className="pt-section-sm pb-stack-lg">
        <div className="grid grid-cols-2 gap-x-8 gap-y-stack-lg md:grid-cols-6 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-6 lg:col-span-12 xl:col-span-4">
            <div className="inline-flex rounded-lg bg-white px-3.5 py-2.5 shadow-soft">
              <Logo preload={false} />
            </div>
            <p className="mt-stack font-display text-h4 text-white">{site.tagline}</p>
            <p className="mt-stack-sm max-w-md text-body-sm text-silver">{footer.description}</p>
            <Button href={footer.cta.href} size="md" arrow className="mt-stack">
              {footer.cta.label}
            </Button>
          </div>

          {/* Explore */}
          <nav aria-labelledby="footer-explore" className="col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-2">
            <h3 id="footer-explore" className={headingClass}>
              {footer.explore.title}
            </h3>
            {/* Two short columns on phones, one list from tablet up */}
            <ul className="mt-stack-sm grid grid-cols-2 gap-x-8 gap-y-0.5 md:flex md:flex-col">
              {footer.explore.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services: the widest link column, so long names stay on one line on desktop */}
          <nav aria-labelledby="footer-services" className="col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-3">
            <h3 id="footer-services" className={headingClass}>
              {footer.services.title}
            </h3>
            <ul className="mt-stack-sm flex flex-col gap-0.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={serviceHref(service.slug)} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get in touch (and Follow Us, once verified profiles exist) */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <h3 id="footer-contact" className={headingClass}>
              {footer.contact.title}
            </h3>
            <ul aria-labelledby="footer-contact" className="mt-stack-sm flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group/mail inline-flex items-center gap-2.5 rounded-xs text-body-sm text-silver transition-colors duration-(--duration-fast) hover:text-white"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-pill bg-white/10 text-white ring-1 ring-white/15 transition-colors duration-(--duration-base) group-hover/mail:bg-electric">
                    <Mail aria-hidden="true" className="size-4" strokeWidth={2} />
                  </span>
                  <span className="min-w-0 [overflow-wrap:anywhere]">
                    <span className="sr-only">{footer.contact.emailLabel}: </span>
                    {site.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phone.href}
                  className="group/phone inline-flex items-center gap-2.5 rounded-xs text-body-sm text-silver transition-colors duration-(--duration-fast) hover:text-white"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-pill bg-white/10 text-white ring-1 ring-white/15 transition-colors duration-(--duration-base) group-hover/phone:bg-electric">
                    <Phone aria-hidden="true" className="size-4" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="sr-only">Telephone: </span>
                    {site.contact.phone.display}
                  </span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-body-sm text-silver">
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-pill bg-white/10 text-white ring-1 ring-white/15">
                  <MapPin className="size-4" strokeWidth={2} />
                </span>
                <span>
                  <span className="sr-only">Location: </span>
                  {site.contact.location}
                </span>
              </li>
              <li>
                <Link href={footer.contact.contactLink.href} className={linkClass}>
                  {footer.contact.contactLink.label}
                </Link>
              </li>
            </ul>

            {social.profiles.length > 0 && (
              <nav aria-labelledby="footer-social" className="mt-stack-lg">
                <h3 id="footer-social" className={headingClass}>
                  {social.title}
                </h3>
                <ul className="mt-stack-sm flex flex-wrap gap-1.5">
                  {social.profiles.map((profile) => (
                    <li key={profile.href}>
                      <a
                        href={profile.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`${site.name} on ${profile.platform} (opens in a new tab)`}
                        className="grid size-9 place-items-center rounded-pill bg-white/10 text-silver ring-1 ring-white/15 transition-[background-color,color,translate] duration-(--duration-base) ease-out-expo hover:-translate-y-0.5 hover:bg-electric hover:text-white"
                      >
                        <SocialIcon platform={profile.platform} className="size-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>

        {/* Legal and copyright */}
        <div className="mt-stack-lg flex flex-col gap-3 border-t border-white/10 pt-stack text-body-sm text-silver/80 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <CopyrightYear buildYear={buildYear} /> {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {footer.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
