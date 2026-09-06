import { useState } from "react";
import { Button } from "./ui/button";
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Zap, 
  ShoppingCart, 
  Binary, 
  CheckCircle2, 
  Terminal,
  ArrowUpRight,
  Activity,
  Cpu,
  ShieldCheck,
  Flame
} from "lucide-react";
import {
  ReactIcon,
  TypeScriptIcon,
  RustIcon,
  PythonIcon,
  NodeIcon,
  NextJsIcon,
  TailwindIcon,
  PineconeIcon,
  OpenAIIcon,
  MongoDbIcon,
  StripeIcon,
  WasmIcon,
  FirebaseIcon,
  KnolinkIcon,
  ApolemiaIcon,
  EntropyIcon,
  RootsButcheryIcon,
  Dec2BinIcon
} from "./icons/TechIcons";

interface Project {
  id: number;
  title: string;
  category: "AI & Systems" | "E-Commerce" | "Algorithms";
  subtitle: string;
  description: string;
  architectureHighlights: string[];
  techStack: { name: string; icon: React.ComponentType<{ className?: string; size?: number | string }> }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: string;
  telemetry: { label: string; value: string };
  badgeColor: string;
  borderAccent: string;
  systemIcon: React.ComponentType<{ className?: string; size?: number | string }>;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Knolink Machine Intelligence Suite",
      category: "AI & Systems",
      subtitle: "Unified Infrastructure for Deep Thinking & Multi-Agent Inference",
      description: "Independent research & engineering platform developing specialized machine intelligence systems. Coordinates inference runtimes, AST compiler intelligence, and autonomous reinforcement learning execution across specialized compute nodes.",
      architectureHighlights: [
        "Sub-100ms vector retrieval pipeline with Pinecone & OpenAI high-dimensional embeddings",
        "Unified distributed orchestration across Apolemia, Entropy, and Praxis runtimes",
        "High-throughput model serving & context-aware AST compiler integration",
        "Deterministic multi-agent execution workspace for deep scientific research",
      ],
      techStack: [
        { name: "React 18", icon: ReactIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "Pinecone", icon: PineconeIcon },
        { name: "OpenAI", icon: OpenAIIcon },
        { name: "Firebase", icon: FirebaseIcon },
        { name: "Tailwind", icon: TailwindIcon },
      ],
      liveUrl: "https://knolink.co.za",
      featured: true,
      status: "Production • 99.9% Uptime",
      telemetry: { label: "Vector Latency", value: "< 85ms" },
      badgeColor: "text-neutral-300 bg-neutral-900 border-neutral-800",
      borderAccent: "border-neutral-800 hover:border-neutral-600",
      systemIcon: KnolinkIcon,
    },
    {
      id: 2,
      title: "Apolemia — High-Throughput Inference Runtime",
      category: "AI & Systems",
      subtitle: "Ultra-Low Latency Model Serving & Dynamic KV-Cache Sparsity",
      description: "High-throughput inference execution engine built for real-time model serving. Features dynamic KV-cache reuse, activation sparsity routing, enclave memory security, and low-latency streaming token distribution.",
      architectureHighlights: [
        "Dynamic KV-cache reuse pipeline drastically reducing Time-To-First-Token (TTFT)",
        "Activation sparsity routing for compute-efficient tensor execution",
        "Resilient WebSocket and Server-Sent Events (SSE) token streaming dispatch",
        "Hardware-isolated enclave security sandboxing for enterprise workloads",
      ],
      techStack: [
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "Python", icon: PythonIcon },
        { name: "React", icon: ReactIcon },
        { name: "Node.js", icon: NodeIcon },
        { name: "Tailwind", icon: TailwindIcon },
      ],
      liveUrl: "https://apolemia.knolink.co.za",
      featured: true,
      status: "Production Serving",
      telemetry: { label: "TTFT Reduction", value: "3.4x Faster" },
      badgeColor: "text-neutral-300 bg-neutral-900 border-neutral-800",
      borderAccent: "border-neutral-800 hover:border-neutral-600",
      systemIcon: ApolemiaIcon,
    },
    {
      id: 3,
      title: "Entropy — Intelligent Developer IDE & AST Compiler",
      category: "AI & Systems",
      subtitle: "Browser-Native & Desktop IDE with Fine-Grained Static Intelligence",
      description: "High-performance developer IDE and AST compiler environment engineered for deep code intelligence. Built with modular Rust crates and a reactive TypeScript interface for sub-millisecond syntax tokenization and deterministic editing.",
      architectureHighlights: [
        "Modular Rust crate architecture with high-speed AST parsing and analysis",
        "Deterministic multi-pane editing canvas with instant state reconciliation",
        "Integrated static analyzer and intelligent error diagnostic pipeline",
        "Zero-latency syntax highlighting, code folding, and symbol resolution",
      ],
      techStack: [
        { name: "Rust", icon: RustIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "React", icon: ReactIcon },
        { name: "WebAssembly", icon: WasmIcon },
        { name: "Tailwind", icon: TailwindIcon },
      ],
      liveUrl: "https://entropy.knolink.co.za",
      featured: true,
      status: "Active Alpha v0.4",
      telemetry: { label: "AST Parse Time", value: "< 0.8ms" },
      badgeColor: "text-neutral-300 bg-neutral-900 border-neutral-800",
      borderAccent: "border-neutral-800 hover:border-neutral-600",
      systemIcon: EntropyIcon,
    },
    {
      id: 4,
      title: "Roots Online Butchery Platform",
      category: "E-Commerce",
      subtitle: "Full-Stack Commercial Storefront & Automated Payments Pipeline",
      description: "A complete end-to-end e-commerce platform with Stripe payment processing, JWT token-based authentication, real-time inventory management, MongoDB aggregation pipelines, and comprehensive admin dashboard.",
      architectureHighlights: [
        "Stripe Checkout webhook verification & idempotent order lifecycle tracking",
        "Role-based access control (RBAC) for customers and store inventory admins",
        "MongoDB indexing and aggregation pipelines for high-traffic product queries",
        "Reactive cart state management with optimistic local caching",
      ],
      techStack: [
        { name: "React", icon: ReactIcon },
        { name: "Node.js", icon: NodeIcon },
        { name: "MongoDB", icon: MongoDbIcon },
        { name: "Stripe", icon: StripeIcon },
        { name: "Tailwind", icon: TailwindIcon },
      ],
      githubUrl: "https://github.com/Thuso-Ndou/rootsonlinebutchery",
      featured: false,
      status: "Open Source Platform",
      telemetry: { label: "Checkout Engine", value: "Stripe Webhooks" },
      badgeColor: "text-neutral-300 bg-neutral-900 border-neutral-800",
      borderAccent: "border-neutral-800 hover:border-neutral-600",
      systemIcon: RootsButcheryIcon,
    },
    {
      id: 5,
      title: "Decimal to Binary Converter",
      category: "Algorithms",
      subtitle: "Algorithmic Number System Transformation Tool",
      description: "An algorithmic conversion tool designed for computer science students and engineers. Demonstrates step-by-step bit manipulation, remainder calculation visualizers, and responsive interface design.",
      architectureHighlights: [
        "Real-time radix conversion algorithms with zero-latency state updates",
        "Clean mathematical representation of bitwise transformations",
        "Lightweight Next.js deployment on Vercel Edge with zero runtime overhead",
      ],
      techStack: [
        { name: "Next.js", icon: NextJsIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "React", icon: ReactIcon },
        { name: "Tailwind", icon: TailwindIcon },
      ],
      githubUrl: "https://github.com/Thuso-Ndou/dec2bin",
      liveUrl: "https://dec2bin-eight.vercel.app/",
      featured: false,
      status: "Live Utility",
      telemetry: { label: "Execution Target", value: "Vercel Edge" },
      badgeColor: "text-neutral-300 bg-neutral-900 border-neutral-800",
      borderAccent: "border-neutral-800 hover:border-neutral-600",
      systemIcon: Dec2BinIcon,
    },
  ];

  const categories = ["all", "AI & Systems", "E-Commerce", "Algorithms"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>PRODUCTION APPLICATIONS & SYSTEMS</span>
          </div>
          <h2 className="section-title">
            Featured Engineered Projects
          </h2>
          <p className="section-subtitle">
            A curated portfolio of full-stack platforms, machine intelligence runtimes, IDE compilers, and algorithms built with production engineering rigor.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all whitespace-nowrap ${
                  filter === cat
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Systems" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const SystemIcon = project.systemIcon;
            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-5">
                  {/* Top Metadata Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white group-hover:scale-105 transition-transform">
                        <SystemIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-white transition-colors flex items-center gap-2">
                          {project.title}
                          {project.featured && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                              Flagship
                            </span>
                          )}
                        </h3>
                        <p className="text-xs font-mono text-neutral-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border whitespace-nowrap ${project.badgeColor}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Telemetry Metric Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono">
                    <span className="text-neutral-400">{project.telemetry.label}:</span>
                    <span className="text-white font-bold">{project.telemetry.value}</span>
                  </div>

                  {/* Architectural Highlights */}
                  <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-2">
                    <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Engineering Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {project.architectureHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Authentic Tech Stack Badges with Real SVGs */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      Technologies & Runtime
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((techItem) => {
                        const TechIcon = techItem.icon;
                        return (
                          <span
                            key={techItem.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 hover:border-neutral-700 transition-colors"
                          >
                            <TechIcon className="w-3.5 h-3.5" size={14} />
                            <span>{techItem.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-white hover:bg-neutral-200 text-black font-semibold text-xs h-8 px-3.5 rounded-lg shadow-sm"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-1 text-black" />
                          Live Launch
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-white text-xs h-8 px-3.5 rounded-lg hover:border-neutral-700"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-1" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Explore System</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Repository Spotlight Banner */}
        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800 text-center space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-neutral-900 text-white border border-neutral-800">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Explore 30+ Production Builds & Repositories
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto">
            My GitHub archive contains over 30 full-stack applications, data science notebooks, AI vector experiments, and algorithmic utilities.
          </p>
          <div className="pt-2">
            <Button
              asChild
              className="bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs h-10 px-5 rounded-xl border border-neutral-700 hover:border-neutral-500"
            >
              <a href="https://github.com/Thuso-Ndou" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 text-white" />
                github.com/Thuso-Ndou
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
