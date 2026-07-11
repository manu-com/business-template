import { useState } from "react";
import { Button, Card, Container, FadeIn, Section, SectionTitle } from "../ui";
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
        <FadeIn>
          <SectionTitle title={title} description={description} />
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div>
              <p className="text-lg leading-relaxed text-slate-500 dark:text-gray-400">{body}</p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                    Email
                  </p>
                  <p className="mt-1 text-slate-500 dark:text-gray-400">{contactInfo.email}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <p className="mt-1 text-slate-500 dark:text-gray-400">{contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="mt-1 text-slate-500 dark:text-gray-400">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <Card>
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex h-full flex-col items-center justify-center py-8 text-center"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {successTitle}
                  </h3>
                  <p className="mt-2 text-slate-500 dark:text-gray-400">{successMessage}</p>
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
                      className="block text-sm font-medium text-gray-900 dark:text-white"
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
                      aria-required="true"
                      className="mt-1.5 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
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
                      aria-required="true"
                      className="mt-1.5 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
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
                      aria-required="true"
                      className="mt-1.5 block w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {submitLabel}
                  </Button>
                </form>
              )}
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
