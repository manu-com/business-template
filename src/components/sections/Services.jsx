import { Card, Container, Section, SectionTitle } from "../ui";
import { services as defaultServicesData } from "../../data";

export default function Services({
  title = defaultServicesData.title,
  description = defaultServicesData.description,
  services = defaultServicesData.items,
}) {
  return (
    <Section id="services">
      <Container>
        <SectionTitle title={title} description={description} />

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
    </Section>
  );
}
