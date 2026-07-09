import { Container } from "../ui";

const defaultNavigationLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const defaultContactInfo = [
  "hello@company.com",
  "+1 (555) 123-4567",
  "123 Business St\nSan Francisco, CA 94102",
];

const defaultSocialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer({
  brand = "Brand",
  description = "Building modern solutions for today's businesses. Professional, reliable, and results-driven.",
  navigationLinks = defaultNavigationLinks,
  contactInfo = defaultContactInfo,
  socialLinks = defaultSocialLinks,
}) {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="text-xl font-bold text-gray-900">
              {brand}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors duration-200 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              {contactInfo.map((item, index) => (
                <li key={index} className="whitespace-pre-line">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors duration-200 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {brand}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
