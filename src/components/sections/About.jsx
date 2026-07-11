import { Container, FadeIn, Section, SectionTitle, TeamMockup } from "../ui";
import { about as defaultAbout } from "../../data";

export default function About({
  title = defaultAbout.title,
  description = defaultAbout.description,
  body = defaultAbout.body,
  values = defaultAbout.values,
  visual,
}) {
  return (
    <Section id="about">
      <Container>
        <FadeIn>
          <SectionTitle title={title} description={description} />
        </FadeIn>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <p className="text-lg leading-relaxed text-slate-500">{body}</p>

              <div className="mt-10 space-y-6">
                {values.map((value) => (
                  <div key={value.title}>
                    <h3 className="text-base font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left">
            <div>
              {visual || <TeamMockup />}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
