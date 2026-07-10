import { Container, Section, SectionTitle } from "../ui";
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
        <SectionTitle title={title} description={description} />

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
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
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-slate-50 p-8 sm:p-12 lg:p-16">
            {visual || (
              <div className="flex h-64 w-full items-center justify-center text-sm text-slate-400 sm:h-80">
                Team or office image
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
