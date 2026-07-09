import { Card, Container, SectionTitle } from "../ui";

const defaultServices = [
  {
    title: "Web Design",
    description:
      "Custom websites built to convert visitors into customers. Clean layouts, clear messaging, and modern aesthetics.",
  },
  {
    title: "Development",
    description:
      "Fast, scalable web applications built with modern frameworks. Performance and reliability from day one.",
  },
  {
    title: "Brand Strategy",
    description:
      "Position your business with clarity. We define your voice, visuals, and market approach.",
  },
];

export default function Services({ services = defaultServices }) {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32" id="services">
      <Container>
        <SectionTitle
          title="What we do"
          description="We deliver end-to-end digital solutions for companies ready to grow."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              {service.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-slate-600">
                  {service.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
