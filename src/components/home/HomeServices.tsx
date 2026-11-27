import Link from "next/link";
import type { CSSProperties } from "react";
import { MediaTexture } from "@/components/media/MediaTexture";
import { Photo } from "@/components/media/Photo";
import { Container } from "@/components/ui/Container";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { ArrowRightIcon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { servicesSection } from "@/content/home";
import { type Photo as PhotoAsset, photos, textures } from "@/content/media";
import { type Service, serviceHref, services } from "@/content/services";
import { cn } from "@/lib/utils";

/*
 * Six disciplines, six art-directed cards. Three treatments keep the grid
 * from repeating itself:
 *   "cinema"  photograph fills the card, copy on a night gradient (01, 02)
 *   "print"   photograph above, copy on white (03, 04, 05)
 *   "wide"    photograph beside copy on deep blue, full width (06)
 * Desktop grid (12 columns):  01 (7) | 02 (5)  /  03 | 04 | 05 (4 each)  /  06 (12)
 */
type Treatment = "cinema" | "print" | "wide";

const art: Record<string, { photo: PhotoAsset; treatment: Treatment; span: string; media?: string; position?: string }> = {
  "content-writing": { photo: photos.serviceContentWriting, treatment: "cinema", span: "lg:col-span-7", position: "50% 40%" },
  "audio-production": { photo: photos.serviceAudioProduction, treatment: "cinema", span: "lg:col-span-5", position: "50% 50%" },
  "video-production": { photo: photos.serviceVideoProduction, treatment: "print", span: "lg:col-span-4", position: "50% 35%" },
  "graphic-design": { photo: photos.serviceGraphicDesign, treatment: "print", span: "lg:col-span-4", position: "50% 55%" },
  "social-media": { photo: photos.serviceSocialMedia, treatment: "print", span: "lg:col-span-4", position: "45% 30%" },
  "digital-marketing": { photo: photos.serviceDigitalMarketing, treatment: "wide", span: "md:col-span-2 lg:col-span-12", position: "50% 50%" },
};

/** "What we do": the six service pillars as a studio portfolio of disciplines. */
export function HomeServices() {
  return (
    <Section id="services" aria-labelledby="services-heading" tone="ice" spacing="none" className="overflow-x-clip pt-section-sm pb-section">
      <MediaTexture src={textures.camera} className="inset-x-0 top-0 h-[38rem] [mask-image:linear-gradient(180deg,#000_30%,transparent)]" />

      <Container>
        <div className="grid gap-y-stack lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="scroll-reveal lg:col-span-7">
            <Eyebrow rule>{servicesSection.eyebrow}</Eyebrow>
            <Heading as="h2" size="h1" id="services-heading" className="mt-stack">
              <span className="block">{servicesSection.heading.lead}</span>
              <Accent>{servicesSection.heading.accent}</Accent>
            </Heading>
          </div>
          <Text size="body-lg" className="scroll-reveal [--reveal-offset:48px] lg:col-span-5">
            {servicesSection.intro}
          </Text>
        </div>

        <ul className="mt-stack-lg grid gap-layout md:grid-cols-2 lg:mt-section-sm lg:grid-cols-12">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className={cn("scroll-reveal", art[service.slug].span)}
              style={{ "--reveal-offset": `${(index % 3) * 32}px` } as CSSProperties}
            >
              <ServiceCard service={service} number={index + 1} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function ServiceCard({ service, number }: { service: Service; number: number }) {
  const { photo, treatment, position } = art[service.slug];
  const Icon = service.icon;
  const label = String(number).padStart(2, "0");
  const href = serviceHref(service.slug);

  const numberAndIcon = (inverse: boolean) => (
    <div className="flex items-center gap-3">
      <span className={cn("font-ui text-body-sm font-bold tracking-[0.12em]", inverse ? "text-gold" : "text-gold-ink")}>
        <span className="sr-only">Service </span>
        {label}
      </span>
      <span aria-hidden="true" className={cn("h-px w-8", inverse ? "bg-gold/60" : "bg-gold")} />
      <Icon aria-hidden="true" className={cn("size-5", inverse ? "text-champagne" : "text-deep")} strokeWidth={1.5} />
    </div>
  );

  const cue = (inverse: boolean) => (
    <span
      aria-hidden="true"
      className={cn("inline-flex items-center gap-2 text-button", inverse ? "text-gold" : "text-interactive")}
    >
      {servicesSection.cardCue}
      <ArrowRightIcon className="transition-transform duration-(--duration-base) ease-out-expo group-hover:translate-x-1" />
    </span>
  );

  const title = (inverse: boolean, size: string) => (
    <h3 className={cn("font-display text-pretty", size, inverse ? "text-white" : "text-deep")}>
      <Link href={href} className="stretched-link outline-none">
        {service.title}
      </Link>
    </h3>
  );

  const shell =
    "group relative isolate flex h-full overflow-hidden rounded-xl shadow-soft transition-[translate,box-shadow] duration-(--duration-slow) ease-out-expo hover:-translate-y-1 hover:shadow-lifted has-[.stretched-link:focus-visible]:outline-2 has-[.stretched-link:focus-visible]:outline-offset-4 has-[.stretched-link:focus-visible]:outline-electric";
  const zoom = "transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]";

  if (treatment === "cinema") {
    const wideCinema = art[service.slug].span === "lg:col-span-7";
    return (
      <article className={cn(shell, "min-h-[26rem] flex-col justify-end bg-night text-white md:min-h-[30rem] lg:min-h-[34rem]")}>
        <Photo photo={photo} sizes="(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw" className={cn("absolute inset-0 -z-10 size-full", zoom)} style={{ objectPosition: position }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_23_48/0.25)_0%,rgb(10_23_48/0.72)_38%,rgb(10_23_48/0.95)_100%)] lg:bg-[linear-gradient(180deg,rgb(10_23_48/0.05)_15%,rgb(10_23_48/0.72)_48%,rgb(10_23_48/0.96)_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-x-100" />
        <div className="p-card md:p-card-lg">
          {numberAndIcon(true)}
          <div className="mt-stack">{title(true, wideCinema ? "text-h2" : "text-h3")}</div>
          <p className="mt-stack-sm max-w-xl text-body text-white/85">{service.summary}</p>
          <div className="mt-stack">{cue(true)}</div>
        </div>
      </article>
    );
  }

  if (treatment === "wide") {
    return (
      <article className={cn(shell, "flex-col bg-deep text-white lg:grid lg:grid-cols-12")}>
        <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[24rem]">
          <Photo photo={photo} sizes="(min-width: 1024px) 58vw, 100vw" className={cn("absolute inset-0 size-full", zoom)} style={{ objectPosition: position }} />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,transparent_55%,rgb(18_59_112/0.9))] max-lg:bg-[linear-gradient(180deg,transparent_60%,rgb(18_59_112/0.9))]" />
        </div>
        <div className="flex flex-col justify-center p-card md:p-card-lg lg:col-span-5">
          {numberAndIcon(true)}
          <div className="mt-stack">{title(true, "text-h2")}</div>
          <p className="mt-stack-sm text-body text-white/85">{service.summary}</p>
          <ul className="mt-stack flex flex-wrap gap-2">
            {service.capabilities.slice(0, 4).map((capability) => (
              <li key={capability} className="rounded-pill px-3 py-1 text-body-sm text-champagne ring-1 ring-gold/40">
                {capability}
              </li>
            ))}
          </ul>
          <div className="mt-stack">{cue(true)}</div>
        </div>
      </article>
    );
  }

  return (
    <article className={cn(shell, "flex-col bg-white ring-1 ring-line/70")}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Photo photo={photo} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className={cn("absolute inset-0 size-full", zoom)} style={{ objectPosition: position }} />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-(--duration-slower) ease-out-expo group-hover:scale-x-100" />
      </div>
      <div className="flex flex-1 flex-col p-card">
        {numberAndIcon(false)}
        <div className="mt-stack-sm">{title(false, "text-h3")}</div>
        <p className="mt-stack-sm text-body-sm text-slate">{service.description}</p>
        <div className="mt-auto pt-stack">{cue(false)}</div>
      </div>
    </article>
  );
}
