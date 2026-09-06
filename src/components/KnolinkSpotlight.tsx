import { useState } from "react";
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Terminal,
  Cpu
} from "lucide-react";
import { Button } from "./ui/button";
import {
  KnolinkIcon,
  ApolemiaIcon,
  EntropyIcon,
  PraxisIcon,
  KnolinkCloudIcon,
  KnolinkChatIcon,
  PachIcon
} from "./icons/TechIcons";

export const KnolinkSpotlight = () => {
  const [activeTab, setActiveTab] = useState<"systems" | "thesis" | "research">("systems");

  const flagshipSystems = [
    {
      id: "apolemia",
      name: "APOLEMIA",
      category: "Inference Runtime",
      tagline: "High-throughput inference runtime with activation sparsity.",
      description: "A distributed execution engine optimized for dynamic KV-cache reuse, activation sparsity parameter routing, and hardware memory enclave containment.",
      url: "https://apolemia.knolink.co.za",
      domain: "apolemia.knolink.co.za",
      icon: ApolemiaIcon,
      color: "border-amber-500/40 text-amber-400 bg-amber-950/20",
      accent: "#FFAF01",
      metrics: "Sparse parameter routing & enclave security",
    },
    {
      id: "entropy",
      name: "ENTROPY",
      category: "Developer Platform / IDE",
      tagline: "Context-aware development workspace with AST intelligence.",
      description: "A browser-native and desktop IDE integrating model intelligence directly into the AST compiler, parsing codebases with deep semantic hierarchy and WebAssembly execution.",
      url: "https://entropy.knolink.co.za",
      domain: "entropy.knolink.co.za",
      icon: EntropyIcon,
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-950/20",
      accent: "#0082E6",
      metrics: "Hierarchical AST memory & Wasm sandboxing",
    },
    {
      id: "praxis",
      name: "PRAXIS",
      category: "Reinforcement Learning",
      tagline: "Strategic intelligence through autonomous self-play.",
      description: "An experimental reinforcement learning environment studying how strategic planning emerges from autonomous feedback, deep Monte Carlo Tree Search (MCTS), and value network convergence.",
      url: "https://praxis.knolink.co.za",
      domain: "praxis.knolink.co.za",
      icon: PraxisIcon,
      color: "border-rose-500/40 text-rose-400 bg-rose-950/20",
      accent: "#ff5229",
      metrics: "MCTS rollouts & self-play convergence",
    },
    {
      id: "cloud",
      name: "KNOLINK CLOUD",
      category: "Distributed Infrastructure",
      tagline: "Programmable cloud infrastructure for machine intelligence.",
      description: "Deploy, evaluate, and scale model inference through unified developer APIs across heterogeneous GPU clusters and edge nodes.",
      url: "https://cloud.knolink.co.za",
      domain: "cloud.knolink.co.za",
      icon: KnolinkCloudIcon,
      color: "border-indigo-500/40 text-indigo-400 bg-indigo-950/20",
      accent: "#6366f1",
      metrics: "Heterogeneous GPU scaling & unified API",
    },
    {
      id: "chat",
      name: "KNOLINK CHAT",
      category: "Multi-Modal Reasoning",
      tagline: "Multi-modal reasoning workspace with contextual AST memory.",
      description: "Direct conversation interface with multi-model intelligence, contextual codebase memory, and autonomous multi-agent tool execution.",
      url: "https://chat.knolink.co.za",
      domain: "chat.knolink.co.za",
      icon: KnolinkChatIcon,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-950/20",
      accent: "#10b981",
      metrics: "Multi-agent autonomous tool execution",
    },
    {
      id: "pach",
      name: "PACH",
      category: "Encrypted Dispatch",
      tagline: "Zero-knowledge encrypted communication & dispatch engine.",
      description: "Encrypted mail, transactional routing, and asynchronous message dispatch built for developers, distributed systems, and autonomous agents.",
      url: "https://pach.knolink.co.za",
      domain: "pach.knolink.co.za",
      icon: PachIcon,
      color: "border-purple-500/40 text-purple-400 bg-purple-950/20",
      accent: "#8b5cf6",
      metrics: "Zero-knowledge cryptographic routing",
    },
  ];

  const thesisLayers = [
    {
      num: "01",
      title: "How They Learn",
      desc: "Active data capture, reinforcement feedback loops, dynamic self-play cycles, and optimized dataset ingestion channels.",
      color: "text-amber-400 border-amber-500/30",
    },
    {
      num: "02",
      title: "How They Reason",
      desc: "Multi-agent orchestration protocols, deep tree search algorithms, memory retrieval mechanisms, and state space planning.",
      color: "text-orange-400 border-orange-500/30",
    },
    {
      num: "03",
      title: "How They Operate",
      desc: "Predictive memory constraints, active inference runtimes (Apolemia), hardware execution bounds, and edge compilation.",
      color: "text-rose-400 border-rose-500/30",
    },
    {
      num: "04",
      title: "How They Reach the World",
      desc: "Programmable endpoints, isolated sandbox runtimes, security gateways, and context-rich developer integrations (Entropy).",
      color: "text-cyan-400 border-cyan-500/30",
    },
  ];

  const researchStreams = [
    {
      code: "PRAXIS RL",
      question: "“How do autonomous agents learn useful strategic behavior?”",
      detail: "Studying self-play loops, deep Monte Carlo Tree Search rollouts, and value network convergence in competitive environments.",
    },
    {
      code: "APOLEMIA RUNTIME",
      question: "“How should inference compute be distributed across sparse hardware?”",
      detail: "Researching dynamic sparse parameter routing, KV-cache retention fabrics, and hardware enclave containment.",
    },
    {
      code: "ENTROPY IDE",
      question: "“How can models maintain deep context across complex codebases?”",
      detail: "Parsing hierarchical abstract syntax trees, synthesizing dependency contracts, and testing patches in WebAssembly sandboxes.",
    },
  ];

  return (
    <section id="knolink" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>RESEARCH & ENGINEERING COMPANY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Knolink: <span className="gradient-text-cyan">Systems Behind Intelligence</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white">“Intelligence is a systems problem.”</strong> At Knolink, Thuso Ndou engineers high-performance inference runtimes, context-aware developer workspaces, reinforcement learning environments, and distributed cloud infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-9 px-4 rounded-xl shadow-lg shadow-cyan-500/20"
            >
              <a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                Visit knolink.co.za
              </a>
            </Button>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1.5 rounded-xl font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              6 Integrated Sub-Systems Live
            </span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab("systems")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "systems"
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Flagship Systems (06)
            </button>
            <button
              onClick={() => setActiveTab("thesis")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "thesis"
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Systems Thesis (4 Layers)
            </button>
            <button
              onClick={() => setActiveTab("research")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "research"
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Research Program
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === "systems" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fadeIn">
            {flagshipSystems.map((sys) => {
              const Icon = sys.icon;
              return (
                <div
                  key={sys.id}
                  className="p-6 rounded-2xl bg-[#090d16] border border-slate-800/90 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-slate-300 uppercase tracking-wider">
                        {sys.category}
                      </span>
                      <div className={`p-2 rounded-lg border ${sys.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {sys.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">
                        {sys.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sys.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-800/60 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">{sys.metrics}</span>
                      <a
                        href={sys.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>{sys.domain}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "thesis" && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-slate-800 space-y-8 animate-fadeIn">
            <div className="max-w-3xl space-y-2 border-b border-slate-800 pb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                02 — CORE ENGINEERING THESIS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                “Intelligence is more than a model.”
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Models don&apos;t exist alone. Intelligence emerges from the interaction between compute, software, and real-world environments. At Knolink, we build across all four foundational layers:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {thesisLayers.map((layer) => (
                <div
                  key={layer.num}
                  className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>LAYER_{layer.num}</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    {layer.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "research" && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-slate-800 space-y-6 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                04 — RESEARCH PROGRAM
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                We Build to Learn
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Using real, production-grade software systems as proving grounds for fundamental questions in machine intelligence.
              </p>
            </div>

            <div className="divide-y divide-slate-800/80">
              {researchStreams.map((stream, idx) => (
                <div key={idx} className="py-4 sm:py-5 grid sm:grid-cols-12 gap-4 items-start">
                  <div className="sm:col-span-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-300">
                      {stream.code}
                    </span>
                  </div>
                  <div className="sm:col-span-5">
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {stream.question}
                    </h4>
                  </div>
                  <div className="sm:col-span-4">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {stream.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
