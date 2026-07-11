import { Card, Container, FadeIn, Section, SectionTitle } from "../ui";
import { services as defaultServicesData } from "../../data";

export default function Services({
  title = defaultServicesData.title,
  description = defaultServicesData.description,
  services = defaultServicesData.items,
}) {
  return (
    <Section id="services">
      <Container>
        <FadeIn>
          <SectionTitle title={title} description={description} />
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <Card>
                  {Icon && (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
