import { useState } from "react";
import { Button, Card, Container, Section, SectionTitle } from "../ui";
import {
  contact as defaultContactData,
  contactInfo as defaultContactInfo,
} from "../../data";

export default function Contact({
  title = defaultContactData.title,
  description = defaultContactData.description,
  body = defaultContactData.body,
  successTitle = defaultContactData.successTitle,
  successMessage = defaultContactData.successMessage,
  submitLabel = defaultContactData.submitLabel,
  resetLabel = defaultContactData.resetLabel,
  contactInfo = defaultContactInfo,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact">
      <Container>
        <SectionTitle title={title} description={description} />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-slate-500">{body}</p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  Email
                </h3>
                <p className="mt-1 text-slate-500">{contactInfo.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  Phone
                </h3>
                <p className="mt-1 text-slate-500">{contactInfo.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  Location
                </h3>
                <p className="mt-1 text-slate-500">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <Card>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {successTitle}
                </h3>
                <p className="mt-2 text-slate-500">{successMessage}</p>
                <Button
                  className="mt-6"
                  variant="secondary"
                  size="small"
                  onClick={() => setSubmitted(false)}
                >
                  {resetLabel}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1.5 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1.5 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1.5 block w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {submitLabel}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </Section>
  );
}
