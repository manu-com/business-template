import { Navbar } from "./components/layout";
import { Footer } from "./components/layout";
import { Hero } from "./components/sections";

function App() {
  return (
    <>
      <Navbar brand="Brand" />

      <Hero
        badge="Welcome"
        title="Build something great"
        description="We help businesses grow with modern solutions. Professional, reliable, and results-driven."
        primaryCta={{ label: "Get Started", href: "#contact" }}
        secondaryCta={{ label: "Learn More", href: "#about" }}
      />

      <Footer />
    </>
  );
}

export default App;
