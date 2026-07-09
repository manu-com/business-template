import { Navbar } from "./components/layout";
import { Footer } from "./components/layout";
import { Hero } from "./components/sections";

function App() {
  return (
    <>
      <Navbar brand="Brand" />

      <Hero
        badge="Digital Agency"
        title="Websites that drive revenue"
        description="We design and build high-performing websites for B2B companies. Strategy, design, and development — all under one roof."
        primaryCta={{ label: "Start a project", href: "#contact" }}
        secondaryCta={{ label: "View our work", href: "#about" }}
        visual={
          <div className="flex h-64 w-full items-center justify-center rounded-xl border border-gray-200 bg-white sm:h-80">
            <span className="text-sm text-slate-400">Project showcase</span>
          </div>
        }
      />

      <Footer />
    </>
  );
}

export default App;
