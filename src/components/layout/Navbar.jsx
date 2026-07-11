import { useState } from "react";
import { Button, Container } from "../ui";
import { company, navigationLinks } from "../../data";
import { useActiveSection, useScrolled } from "../../hooks";

const activeStyle = "bg-slate-100 text-gray-900";
const inactiveStyle = "text-slate-600 hover:text-gray-900";
const mobileInactiveStyle = "text-slate-600 hover:bg-slate-50 hover:text-gray-900";

export default function Navbar({ brand = company.brand, links = navigationLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(20);

  const sectionIds = links.map((link) => link.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  const scrollTo = (href) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getLinkClass = (href, isMobile = false) => {
    const id = href.replace("#", "");
    const isActive = activeId === id;
    const base = "text-sm font-medium transition-colors duration-200 rounded-lg";
    const active = isActive ? activeStyle : isMobile ? mobileInactiveStyle : inactiveStyle;
    const padding = isMobile ? "block px-4 py-3" : "px-3 py-1.5";
    return `${base} ${padding} ${active}`;
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "border-gray-200 bg-white/95 shadow-sm backdrop-blur-md lg:h-16"
          : "border-transparent bg-white/80 backdrop-blur-sm lg:h-20"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
          scrolled ? "h-16" : "h-20"
          }`}
        >
          <a href="/" className="text-xl font-bold text-gray-900" onClick={scrollToTop}>
            {brand}
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={getLinkClass(link.href)}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button size="small">Get Started</Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors duration-200 hover:bg-slate-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <Container className="space-y-1 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href, true)}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button className="w-full" size="small">
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </nav>
  );
}
