import { Github, Linkedin, ExternalLink, Heart, Terminal, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070b] border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold font-display text-base">
              <span>Thuso Ndou</span>
              <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                Software Engineer
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Architect & Founder of <a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Knolink</a>. BSc (Hons) Data Science @ Eduvos | BSc IT @ NWU.
            </p>
          </div>

          {/* System Health / Status Beacon */}
          <div className="flex items-center gap-4 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 text-[11px]">Knolink Ecosystem: Online</span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400 text-[11px]">Build: Production</span>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Thuso-Ndou"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thuso-ndou-511371251"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} Thuso Ndou. Engineered with React, TypeScript & Tailwind CSS.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              knolink.co.za
            </a>
            <span>•</span>
            <a href="mailto:thuso@knolink.co.za" className="text-cyan-400 hover:underline transition-colors">
              thuso@knolink.co.za
            </a>
            <span>•</span>
            <a href="mailto:thusondou30@gmail.com" className="hover:text-cyan-400 transition-colors">
              thusondou30@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
