import { Card, Container, SectionTitle } from "../ui";

const defaultTestimonials = [
  {
    quote:
      "They redesigned our website and our demo requests doubled within two months. Clear communication throughout.",
    name: "Sarah Chen",
    role: "VP of Marketing, Vertex Software",
  },
  {
    quote:
      "Professional, fast, and easy to work with. They understood our business before writing a single line of code.",
    name: "Marcus Rivera",
    role: "CEO, ClearPath Logistics",
  },
  {
    quote:
      "The new site pays for itself. Our inbound leads are up 40% since launch. Couldn't be happier.",
    name: "Emily Park",
    role: "Founder, Park & Co",
  },
];

export default function Testimonials({ testimonials = defaultTestimonials }) {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32" id="testimonials">
      <Container>
        <SectionTitle
          title="What clients say"
          description="Don't take our word for it — hear from the companies we've worked with."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <blockquote>
                <p className="text-base leading-relaxed text-slate-600">
                  "{testimonial.quote}"
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
          ))}
        </div>
      </Container>
    </section>
  );
}
