import { Navbar } from "./components/layout";
import { Footer } from "./components/layout";
import { About, Contact, Hero, Services, Testimonials } from "./components/sections";
import { ThemeProvider } from "./components/ui";

const projectShowcaseVisual = (
  <div
    role="img"
    aria-label="Project showcase illustration"
    className="flex h-64 w-full items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 sm:h-80"
  >
    <span className="text-sm text-slate-400">Project showcase</span>
  </div>
);

const teamPhotoVisual = (
  <div
    role="img"
    aria-label="Team photo illustration"
    className="flex h-64 w-full items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 sm:h-80"
  >
    <span className="text-sm text-slate-400">Team photo</span>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <a
        href="#main-content"
        className="absolute left-0 top-0 z-[100] -translate-x-full rounded-br-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform duration-200 focus:translate-x-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to content
      </a>

      <Navbar brand="Brand" />

      <main id="main-content">
        <Hero
          badge="Digital Agency"
          title="Websites that drive revenue"
          description="We design and build high-performing websites for B2B companies. Strategy, design, and development — all under one roof."
          primaryCta={{ label: "Start a project", href: "#contact" }}
          secondaryCta={{ label: "View our work", href: "#about" }}
          visual={projectShowcaseVisual}
        />

        <Services />

        <About visual={teamPhotoVisual} />

        <Testimonials />

        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
