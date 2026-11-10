import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { Card, Chip } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Grid } from "@/components/ui/Grid";
import { Accent, Eyebrow, Heading } from "@/components/ui/Heading";
import { ArrowRightIcon, IconFrame } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";

/*
 * Internal design system reference, available only in `npm run dev`.
 * The `.dev.tsx` extension keeps it out of production builds entirely
 * (see pageExtensions in next.config.ts); the notFound() guard is a backstop.
 */
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colours = [
  { name: "White", token: "white", hex: "#FFFFFF", note: "Dominant background" },
  { name: "Ice", token: "ice", hex: "#F4F7FB", note: "Alternate sections, fills" },
  { name: "Silver", token: "silver", hex: "#DCE2EA", note: "Borders, dividers (decorative)" },
  { name: "Electric", token: "electric", hex: "#2F80ED", note: "Accents, focus, large text · 3.9:1" },
  { name: "Interactive", token: "interactive", hex: "#1C6AD4", note: "Buttons, links · 5.2:1" },
  { name: "Deep", token: "deep", hex: "#123B70", note: "Emphasis, headings · 11.1:1" },
  { name: "Midnight", token: "midnight", hex: "#17243A", note: "Body text, dark bands · 15.6:1" },
  { name: "Slate", token: "slate", hex: "#4A5872", note: "Secondary text · 7.2:1" },
  { name: "Muted", token: "muted", hex: "#5F6C85", note: "Meta, captions · 5.3:1" },
  { name: "Line strong", token: "line-strong", hex: "#8592A8", note: "Field borders · 3.2:1" },
  { name: "Mist", token: "mist", hex: "#EAF2FD", note: "Faint highlight fill" },
] as const;

const swatchBg: Record<(typeof colours)[number]["token"], string> = {
  white: "bg-white",
  ice: "bg-ice",
  silver: "bg-silver",
  electric: "bg-electric",
  interactive: "bg-interactive",
  deep: "bg-deep",
  midnight: "bg-midnight",
  slate: "bg-slate",
  muted: "bg-muted",
  "line-strong": "bg-line-strong",
  mist: "bg-mist",
};

function SampleIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

const icons = {
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
  play: "M6 4.5v15l13-7.5-13-7.5Z",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
};

function SampleMedia({ tone = "a" }: { tone?: "a" | "b" | "c" }) {
  const gradients = {
    a: "from-deep via-interactive to-electric",
    b: "from-midnight via-deep to-interactive",
    c: "from-silver via-ice to-mist",
  };
  return <div className={`absolute inset-0 bg-linear-to-br ${gradients[tone]}`} />;
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-stack">
      <div className="flex items-center gap-4">
        <h3 className="shrink-0 text-label tracking-[0.14em] text-muted uppercase">{title}</h3>
        <Divider className="flex-1" />
      </div>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <>
      <Section tone="glow" spacing="md" grid>
        <Container>
          <SectionHeading
            as="h1"
            size="h1"
            eyebrow="Internal reference"
            title={
              <>
                Mota Content Media design <Accent>system</Accent>
              </>
            }
            description="Tokens and components for every page. All sample copy on this page is illustrative and only visible in local development."
          />
        </Container>
      </Section>

      <Section spacing="sm">
        <Container className="flex flex-col gap-section-sm">
          <Block title="Colour">
            <Grid cols={4} gap="sm">
              {colours.map((c) => (
                <div key={c.token} className="overflow-hidden rounded-md ring-1 ring-line">
                  <div className={`h-20 ${swatchBg[c.token]}`} />
                  <div className="p-4">
                    <p className="text-body-sm font-semibold text-ink">
                      {c.name} <span className="font-normal text-muted">{c.hex}</span>
                    </p>
                    <p className="text-body-sm text-muted">{c.note}</p>
                  </div>
                </div>
              ))}
            </Grid>
          </Block>

          <Block title="Typography">
            <div className="flex flex-col gap-6">
              <Heading as="h2" size="display">
                Display <Accent>heading</Accent>
              </Heading>
              <Heading as="h2" size="h1">Heading one, bold and editorial</Heading>
              <Heading as="h2" size="h2">Heading two for section titles</Heading>
              <Heading as="h3" size="h3">Heading three for sub-sections</Heading>
              <Heading as="h4" size="h4">Heading four for cards and lists</Heading>
              <Text size="body-lg" className="max-w-2xl">
                Body large introduces a section. It is set in Inter with generous line height for comfortable reading on every screen size.
              </Text>
              <Text className="max-w-prose">
                Body regular carries most of the content. Paragraphs stay within a readable measure and wrap evenly to avoid isolated words on the last line.
              </Text>
              <Text size="body-sm" tone="muted">
                Body small for captions, metadata and supporting notes.
              </Text>
              <div className="flex flex-wrap items-center gap-8">
                <Eyebrow>Label / eyebrow</Eyebrow>
                <Eyebrow rule>Eyebrow with rule</Eyebrow>
                <span className="text-button text-ink">Button text</span>
                <span className="text-nav text-ink">Navigation text</span>
              </div>
            </div>
          </Block>

          <Block title="Buttons">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button>Primary</Button>
                <Button arrow>Primary with arrow</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="text">Text button</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg" arrow>
                  Large
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button disabled>Primary disabled</Button>
                <Button variant="secondary" disabled>
                  Secondary disabled
                </Button>
                <Button variant="text" disabled>
                  Text disabled
                </Button>
              </div>
              <div className="max-w-sm">
                <Button fullWidth arrow>
                  Full width (phones)
                </Button>
              </div>
            </div>
          </Block>

          <Block title="Icons and chips">
            <div className="flex flex-wrap items-center gap-4">
              <IconFrame>
                <SampleIcon path={icons.spark} />
              </IconFrame>
              <IconFrame tone="mist">
                <SampleIcon path={icons.play} />
              </IconFrame>
              <IconFrame tone="outline" size="lg">
                <SampleIcon path={icons.layers} />
              </IconFrame>
              <IconFrame tone="deep" size="lg">
                <SampleIcon path={icons.chart} />
              </IconFrame>
              <ArrowRightIcon size="sm" className="text-interactive" />
              <ArrowRightIcon size="md" className="text-interactive" />
              <ArrowRightIcon size="lg" className="text-interactive" />
              <Chip>Ice chip</Chip>
              <Chip tone="outline">Outline chip</Chip>
            </div>
          </Block>

          <Block title="Dividers">
            <div className="flex flex-col gap-6">
              <Divider />
              <Divider variant="fade" />
              <Divider variant="accent" />
            </div>
          </Block>

          <Block title="Card surfaces">
            <Grid cols={4}>
              {(["raised", "outline", "ice", "inverse"] as const).map((surface) => (
                <Card key={surface} surface={surface} className="min-h-36 justify-end">
                  <p className="text-body-sm font-semibold capitalize">{surface}</p>
                </Card>
              ))}
            </Grid>
          </Block>

          <Block title="Service cards">
            <Grid cols={3}>
              <ServiceCard
                icon={<SampleIcon path={icons.spark} />}
                title="Sample service"
                description="A short description of the service and the outcome it creates for the client."
                href="/design-system/"
              />
              <ServiceCard
                icon={<SampleIcon path={icons.play} />}
                title="Second service"
                description="Cards align to the shared grid and grow to equal heights in each row."
                href="/design-system/"
              />
              <ServiceCard
                icon={<SampleIcon path={icons.layers} />}
                title="Third service"
                description="The whole card is a single link, announced once by screen readers."
                href="/design-system/"
              />
            </Grid>
          </Block>

          <Block title="Feature cards">
            <Grid cols={4}>
              {Object.entries(icons).map(([key, path]) => (
                <FeatureCard
                  key={key}
                  icon={<SampleIcon path={path} />}
                  title="Feature title"
                  description="A concise supporting line explaining the benefit."
                />
              ))}
            </Grid>
          </Block>

          <Block title="Portfolio cards">
            <Grid cols={3}>
              <PortfolioCard media={<SampleMedia tone="a" />} title="Sample project title" client="Client name" category="Category" href="/design-system/" />
              <PortfolioCard media={<SampleMedia tone="b" />} title="Image-led tile with zoom" client="Client name" category="Category" href="/design-system/" />
              <PortfolioCard media={<SampleMedia tone="c" />} title="Glass chip over imagery" client="Client name" category="Category" href="/design-system/" />
            </Grid>
          </Block>

          <Block title="Testimonial card">
            <Grid cols={2}>
              <TestimonialCard
                quote="Sample quote text demonstrating the testimonial layout. Only real, approved client quotes are used on the live site."
                name="Full name"
                role="Role"
                organisation="Organisation"
              />
              <TestimonialCard quote="A shorter sample quote." name="Full name" role="Role" />
            </Grid>
          </Block>

          <Block title="Industry cards">
            <Grid cols={3} gap="sm">
              <IndustryCard icon={<SampleIcon path={icons.chart} />} title="Linked industry" description="With a destination page." href="/design-system/" />
              <IndustryCard icon={<SampleIcon path={icons.layers} />} title="Static industry" description="No link, no hover lift." />
              <IndustryCard title="Text only" description="Icon is optional." />
            </Grid>
          </Block>

          <Block title="Article cards">
            <Grid cols={3}>
              <ArticleCard media={<SampleMedia tone="a" />} category="Category" date="2026-11-09" readingTime="5 min read" title="Sample article title that may run across two lines" excerpt="An excerpt summarises the article in two or three lines before it is clamped." href="/design-system/" />
              <ArticleCard media={<SampleMedia tone="c" />} category="Category" date="2026-10-21" title="Without reading time" excerpt="Dates display in UK format." href="/design-system/" />
              <ArticleCard date="2026-10-02" title="Without an image" excerpt="Cards still align when media is absent." href="/design-system/" />
            </Grid>
          </Block>

          <Block title="Media ratios">
            <Grid cols={12} gap="sm">
              <MediaFrame ratio="wide" className="col-span-4 md:col-span-8 lg:col-span-6">
                <SampleMedia tone="b" />
              </MediaFrame>
              <MediaFrame ratio="square" className="col-span-2 md:col-span-4 lg:col-span-3">
                <SampleMedia tone="a" />
              </MediaFrame>
              <MediaFrame ratio="portrait" className="col-span-2 md:col-span-4 lg:col-span-3">
                <SampleMedia tone="c" />
              </MediaFrame>
            </Grid>
          </Block>
        </Container>
      </Section>

      {(["ice", "fade", "glow", "midnight"] as const).map((tone) => (
        <Section key={tone} tone={tone} spacing="sm" grid={tone === "glow"}>
          <Container>
            <SectionHeading
              eyebrow={`Section tone: ${tone}`}
              title="Section heading with an action"
              description="Section headings combine eyebrow, title and introduction, with an optional action aligned on desktop."
              tone={tone === "midnight" ? "inverse" : "default"}
              action={
                <Button variant={tone === "midnight" ? "primary" : "secondary"} arrow>
                  Action
                </Button>
              }
            />
          </Container>
        </Section>
      ))}

      <Section spacing="sm">
        <Container width="narrow">
          <SectionHeading
            align="center"
            eyebrow="Centred"
            title={
              <>
                Centred statement with <Accent variant="solid">solid accent</Accent>
              </>
            }
            description="Narrow container for focused statements."
          />
        </Container>
      </Section>
    </>
  );
}
