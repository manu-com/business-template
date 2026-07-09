import { Container, SectionTitle } from "../ui";

const defaultValues = [
  {
    title: "Quality first",
    description: "Every project gets our full attention. We don't cut corners.",
  },
  {
    title: "Transparent process",
    description: "No surprises. You see progress in real time and know exactly where things stand.",
  },
  {
    title: "Long-term partnerships",
    description: "We build relationships, not just websites. Your success is our success.",
  },
];

export default function About({
  description = "We're a small team of designers and developers who care about craft. Since 2018, we've helped B2B companies turn their digital presence into a competitive advantage.",
  values = defaultValues,
  visual,
}) {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32" id="about">
      <Container>
        <SectionTitle
          title="About us"
          description="We believe great websites come from deep understanding — of your business, your users, and your goals."
        />

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-slate-500">
              {description}
            </p>

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
    </section>
  );
}
