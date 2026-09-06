import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import { KnolinkSpotlight } from "../components/KnolinkSpotlight";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import Contact from "../components/Contact";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <KnolinkSpotlight />
        <About />
        <Skills />
        <Projects />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;