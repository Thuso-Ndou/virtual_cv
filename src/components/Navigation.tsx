import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Download, Github, Linkedin, Terminal } from "lucide-react";
import { KnolinkIcon } from "./icons/TechIcons";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Console" },
    { id: "knolink", label: "Knolink Spotlight" },
    { id: "about", label: "Engineer Profile" },
    { id: "skills", label: "Tech Matrix" },
    { id: "projects", label: "Systems" },
    { id: "timeline", label: "Credentials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Thuso_Ndou_Resume.pdf";
    link.click();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090e]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Brand Signature with Knolink Otter */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
              <KnolinkIcon size={22} className="w-5 h-auto" />
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Thuso Ndou
                <span className="text-[10px] font-mono font-normal px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 hidden sm:inline-block">
                  SE
                </span>
              </span>
              <span className="block text-[11px] font-mono text-slate-400 -mt-0.5">
                knolink.co.za
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)] font-semibold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Toolbar */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://github.com/Thuso-Ndou"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thuso-ndou-511371251"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-indigo-300 hover:border-indigo-500/40 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <Button
              size="sm"
              onClick={downloadResume}
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 text-xs px-3.5 h-9"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <Button
              size="sm"
              onClick={downloadResume}
              variant="outline"
              className="h-8 px-2.5 text-xs border-slate-700 bg-slate-900 text-cyan-300"
            >
              <Download className="w-3.5 h-3.5" />
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#090d16]/98 border border-slate-800 backdrop-blur-2xl shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/Thuso-Ndou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/thuso-ndou-511371251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <Button
                size="sm"
                onClick={downloadResume}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs"
              >
                <Download className="w-3.5 h-3.5 mr-1" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;