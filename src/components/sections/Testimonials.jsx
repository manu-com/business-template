import { Card, Container, FadeIn, Section, SectionTitle } from "../ui";
import { testimonials as defaultTestimonialsData } from "../../data";

export default function Testimonials({
  title = defaultTestimonialsData.title,
  description = defaultTestimonialsData.description,
  testimonials = defaultTestimonialsData.items,
}) {
  return (
    <Section id="testimonials">
      <Container>
        <FadeIn>
          <SectionTitle title={title} description={description} />
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <Card>
                <blockquote>
                  <p className="text-base leading-relaxed text-slate-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
