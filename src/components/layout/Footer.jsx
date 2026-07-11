import { Container } from "../ui";
import {
  company,
  contactInfo as defaultContactInfo,
  navigationLinks,
  socialLinks,
} from "../../data";

export default function Footer({
  brand = company.brand,
  description = company.description,
  navigationLinks: navLinks = navigationLinks,
  contactInfo = defaultContactInfo,
  socialLinks: social = socialLinks,
}) {
  const contactItems = [
    contactInfo.email,
    contactInfo.phone,
    contactInfo.location,
  ];

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              {brand}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500 dark:text-gray-400">
              {contactItems.map((item, index) => (
                <li key={index} className="whitespace-pre-line">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-3">
              {social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center text-sm text-slate-500 dark:border-gray-800 dark:text-gray-400">
          © {new Date().getFullYear()} {brand}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
