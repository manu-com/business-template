import { Button, BrowserMockup, Container, FadeIn, Section } from "../ui";
import { hero as defaultHero } from "../../data";

export default function Hero({
  badge = defaultHero.badge,
  title = defaultHero.title,
  description = defaultHero.description,
  primaryCta = defaultHero.primaryCta,
  secondaryCta = defaultHero.secondaryCta,
  visual,
}) {
  return (
    <Section className="pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn delay={0}>
              {badge && (
                <span className="mb-4 inline-block rounded-full border border-gray-200 bg-slate-50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600">
                  {badge}
                </span>
              )}
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
                {description}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="large" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
                <Button variant="secondary" size="large" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div>
              {visual || <BrowserMockup />}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
