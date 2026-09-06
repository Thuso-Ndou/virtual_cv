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
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
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