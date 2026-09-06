import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Layers, Code2, Database, ExternalLink, GraduationCap } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { InteractiveTerminal } from "./InteractiveTerminal";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-black cyber-grid"
    >
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-12">
        {/* Split Hero Grid: Left Narrative + Right Live Interactive Terminal */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Core Identity & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-neutral-300">Software Engineer & Systems Architect</span>
              <span className="text-neutral-600">/</span>
              <span className="text-white font-medium">Founder of Knolink</span>
            </div>

            {/* Avatar + Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 sm:gap-5">
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-neutral-800 shadow-2xl shrink-0">
                  <AvatarImage src="/avatar-logo.ico" alt="Thuso Ndou" />
                  <AvatarFallback className="text-lg font-bold bg-neutral-900 text-white">TN</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white">
                    Thuso Ndou
                  </h1>
                  <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-0.5">
                    Systems for Machine Intelligence • Distributed Infrastructure
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-1 max-w-2xl">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  I engineer high-performance inference runtimes (
                  <a
                    href="https://apolemia.knolink.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold underline decoration-neutral-600 hover:decoration-white underline-offset-4 transition-colors"
                  >
                    Apolemia
                  </a>
                  ), context-aware compiler workspaces (
                  <a
                    href="https://entropy.knolink.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold underline decoration-neutral-600 hover:decoration-white underline-offset-4 transition-colors"
                  >
                    Entropy
                  </a>
                  ), and strategic reinforcement learning systems (
                  <a
                    href="https://praxis.knolink.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold underline decoration-neutral-600 hover:decoration-white underline-offset-4 transition-colors"
                  >
                    Praxis
                  </a>
                  ) at{" "}
                  <a
                    href="https://knolink.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold underline decoration-neutral-600 hover:decoration-white underline-offset-4 transition-colors"
                  >
                    Knolink
                  </a>
                  .
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 font-mono">
                  BSc (Hons) in Data Science student at Eduvos • BSc in IT graduate from North-West University.
                </p>
              </div>
            </div>

            {/* CTAs & Social Connections */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="default"
                className="bg-white hover:bg-neutral-200 text-black font-bold text-xs h-10 px-5 rounded-xl shadow-md"
                onClick={() => scrollToSection("knolink")}
              >
                <Layers className="w-3.5 h-3.5 mr-1.5 text-black" />
                Explore Architecture
              </Button>

              <Button
                size="default"
                variant="outline"
                className="bg-neutral-900 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 text-white text-xs h-10 px-4 rounded-xl"
                onClick={() => scrollToSection("projects")}
              >
                <Code2 className="w-3.5 h-3.5 mr-1.5 text-neutral-400" />
                View Shipped Systems
              </Button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/Thuso-Ndou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/thuso-ndou-511371251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://knolink.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                  title="Knolink Production"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Console & Sandbox (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <InteractiveTerminal />
          </div>
        </div>

        {/* Bottom Horizontal Engineering Stat Bar */}
        <div className="pt-8 border-t border-neutral-800 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-colors">
            <div className="flex items-center gap-2 text-white mb-1 font-mono">
              <Code2 className="w-4 h-4 text-neutral-400" />
              <span className="text-xl font-bold text-white">30+</span>
            </div>
            <p className="text-xs font-semibold text-neutral-300">Shipped Projects</p>
            <p className="text-[11px] text-neutral-500 font-mono">React, Node, TypeScript, Rust</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-colors">
            <div className="flex items-center gap-2 text-white mb-1 font-mono">
              <Database className="w-4 h-4 text-neutral-400" />
              <span className="text-xl font-bold text-white">&lt; 85ms</span>
            </div>
            <p className="text-xs font-semibold text-neutral-300">Vector Search Latency</p>
            <p className="text-[11px] text-neutral-500 font-mono">Pinecone & OpenAI Embeddings</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-colors">
            <div className="flex items-center gap-2 text-white mb-1 font-mono">
              <GraduationCap className="w-4 h-4 text-neutral-400" />
              <span className="text-xl font-bold text-white">BSc Hons</span>
            </div>
            <p className="text-xs font-semibold text-neutral-300">Data Science @ Eduvos</p>
            <p className="text-[11px] text-neutral-500 font-mono">Machine Learning & Analytics</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-colors">
            <div className="flex items-center gap-2 text-white mb-1 font-mono">
              <GraduationCap className="w-4 h-4 text-neutral-400" />
              <span className="text-xl font-bold text-white">BSc IT</span>
            </div>
            <p className="text-xs font-semibold text-neutral-300">North-West University</p>
            <p className="text-[11px] text-neutral-500 font-mono">Algorithms, OOP, Cloud Compute</p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center pt-2">
          <button
            onClick={() => scrollToSection("knolink")}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-white transition-colors"
          >
            <span>Explore Architecture</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;