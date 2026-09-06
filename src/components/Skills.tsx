import { useState } from "react";
import { 
  Code2, 
  Server, 
  Cpu, 
  Database, 
  Cloud, 
  Wrench, 
  Layers, 
  Search, 
  ExternalLink,
  Terminal
} from "lucide-react";
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  RustIcon,
  PythonIcon,
  NodeIcon,
  NextJsIcon,
  TailwindIcon,
  DockerIcon,
  PineconeIcon,
  OpenAIIcon,
  FirebaseIcon,
  MongoDbIcon,
  AzureIcon,
  SqlIcon,
  GitIcon,
  StripeIcon,
  LinuxIcon,
  CSharpIcon,
  JavaIcon,
  WasmIcon
} from "./icons/TechIcons";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "cloud" | "tools";
  level: "Expert" | "Advanced" | "Proficient";
  context: string;
  badge: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  brandColor: string;
  brandBg: string;
  brandBorder: string;
}

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const skills: SkillItem[] = [
    // Frontend
    { 
      name: "React 18", 
      category: "frontend", 
      level: "Expert", 
      context: "Component composition, custom hooks, state optimization & concurrency", 
      badge: "Apolemia / Entropy / Knolink",
      icon: ReactIcon,
      brandColor: "text-[#61DAFB]",
      brandBg: "bg-[#61DAFB]/10",
      brandBorder: "border-[#61DAFB]/30 hover:border-[#61DAFB]/60"
    },
    { 
      name: "TypeScript", 
      category: "frontend", 
      level: "Expert", 
      context: "Strict static typing, interfaces, generics, async pipeline safety", 
      badge: "Core Language",
      icon: TypeScriptIcon,
      brandColor: "text-[#3178C6]",
      brandBg: "bg-[#3178C6]/10",
      brandBorder: "border-[#3178C6]/30 hover:border-[#3178C6]/60"
    },
    { 
      name: "Next.js", 
      category: "frontend", 
      level: "Advanced", 
      context: "App router, SSR/SSG rendering, Edge deployment & route handlers", 
      badge: "Production Apps",
      icon: NextJsIcon,
      brandColor: "text-white",
      brandBg: "bg-white/10",
      brandBorder: "border-white/20 hover:border-white/50"
    },
    { 
      name: "Tailwind CSS", 
      category: "frontend", 
      level: "Expert", 
      context: "Tailored design systems, glassmorphism, responsive grid & fluid UX", 
      badge: "Design Engine",
      icon: TailwindIcon,
      brandColor: "text-[#06B6D4]",
      brandBg: "bg-[#06B6D4]/10",
      brandBorder: "border-[#06B6D4]/30 hover:border-[#06B6D4]/60"
    },
    { 
      name: "JavaScript (ES6+)", 
      category: "frontend", 
      level: "Expert", 
      context: "Event loops, closures, promises, functional pipelines & DOM engine", 
      badge: "Web Core",
      icon: JavaScriptIcon,
      brandColor: "text-[#F7DF1E]",
      brandBg: "bg-[#F7DF1E]/10",
      brandBorder: "border-[#F7DF1E]/30 hover:border-[#F7DF1E]/60"
    },

    // Backend & Systems
    { 
      name: "Rust", 
      category: "backend", 
      level: "Advanced", 
      context: "Memory safety, crates ecosystem, AST parser model & low latency engines", 
      badge: "Entropy Core",
      icon: RustIcon,
      brandColor: "text-[#DEA584]",
      brandBg: "bg-[#DEA584]/10",
      brandBorder: "border-[#DEA584]/30 hover:border-[#DEA584]/60"
    },
    { 
      name: "Node.js / Express", 
      category: "backend", 
      level: "Expert", 
      context: "High-concurrency microservices, JWT auth, rate limiting & middleware", 
      badge: "Backend Engine",
      icon: NodeIcon,
      brandColor: "text-[#5FA04E]",
      brandBg: "bg-[#5FA04E]/10",
      brandBorder: "border-[#5FA04E]/30 hover:border-[#5FA04E]/60"
    },
    { 
      name: "Python", 
      category: "backend", 
      level: "Advanced", 
      context: "Data science pipelines, IBM certified, machine learning automation", 
      badge: "Data Science",
      icon: PythonIcon,
      brandColor: "text-[#3776AB]",
      brandBg: "bg-[#3776AB]/10",
      brandBorder: "border-[#3776AB]/30 hover:border-[#3776AB]/60"
    },
    { 
      name: "C# / .NET", 
      category: "backend", 
      level: "Advanced", 
      context: "Structured backend architectures, enterprise OOP & algorithmic patterns", 
      badge: "BSc IT Degree",
      icon: CSharpIcon,
      brandColor: "text-[#9B4F96]",
      brandBg: "bg-[#9B4F96]/10",
      brandBorder: "border-[#9B4F96]/30 hover:border-[#9B4F96]/60"
    },
    { 
      name: "Java", 
      category: "backend", 
      level: "Advanced", 
      context: "Object-oriented design patterns, enterprise software foundations", 
      badge: "BSc IT Degree",
      icon: JavaIcon,
      brandColor: "text-[#ED8B00]",
      brandBg: "bg-[#ED8B00]/10",
      brandBorder: "border-[#ED8B00]/30 hover:border-[#ED8B00]/60"
    },
    { 
      name: "SQL & Relational DBs", 
      category: "backend", 
      level: "Advanced", 
      context: "Schema normalization, indexing, joins, ACID transactions & triggers", 
      badge: "Relational DB",
      icon: SqlIcon,
      brandColor: "text-[#38BDF8]",
      brandBg: "bg-[#38BDF8]/10",
      brandBorder: "border-[#38BDF8]/30 hover:border-[#38BDF8]/60"
    },
    { 
      name: "WebAssembly (Wasm)", 
      category: "backend", 
      level: "Proficient", 
      context: "Near-native client bytecode execution for AST parsing & IDE utilities", 
      badge: "Systems Wasm",
      icon: WasmIcon,
      brandColor: "text-[#654FF0]",
      brandBg: "bg-[#654FF0]/10",
      brandBorder: "border-[#654FF0]/30 hover:border-[#654FF0]/60"
    },

    // AI & Vector
    { 
      name: "Pinecone Vector DB", 
      category: "ai", 
      level: "Advanced", 
      context: "High-dimensional vector indexing, sub-100ms cosine similarity lookup", 
      badge: "Knolink Core",
      icon: PineconeIcon,
      brandColor: "text-[#10B981]",
      brandBg: "bg-[#10B981]/10",
      brandBorder: "border-[#10B981]/30 hover:border-[#10B981]/60"
    },
    { 
      name: "OpenAI API", 
      category: "ai", 
      level: "Advanced", 
      context: "text-embedding-3 vectors, LLM orchestration, structured tool execution", 
      badge: "AI Engineering",
      icon: OpenAIIcon,
      brandColor: "text-[#10A37F]",
      brandBg: "bg-[#10A37F]/10",
      brandBorder: "border-[#10A37F]/30 hover:border-[#10A37F]/60"
    },
    { 
      name: "Semantic Vector Search", 
      category: "ai", 
      level: "Advanced", 
      context: "Retrieval-augmented knowledge graphs, embedding clustering & search", 
      badge: "Vector AI",
      icon: Cpu,
      brandColor: "text-cyan-400",
      brandBg: "bg-cyan-500/10",
      brandBorder: "border-cyan-500/30 hover:border-cyan-500/60"
    },

    // Cloud & DBs
    { 
      name: "Microsoft Azure", 
      category: "cloud", 
      level: "Advanced", 
      context: "Azure App Services, Blob storage, Azure AD, AZ-900 certified", 
      badge: "AZ-900 Certified",
      icon: AzureIcon,
      brandColor: "text-[#008AD7]",
      brandBg: "bg-[#008AD7]/10",
      brandBorder: "border-[#008AD7]/30 hover:border-[#008AD7]/60"
    },
    { 
      name: "Firebase / Firestore", 
      category: "cloud", 
      level: "Expert", 
      context: "Real-time document synchronization, Firestore rules & auth security", 
      badge: "Cloud Storage",
      icon: FirebaseIcon,
      brandColor: "text-[#FFA000]",
      brandBg: "bg-[#FFA000]/10",
      brandBorder: "border-[#FFA000]/30 hover:border-[#FFA000]/60"
    },
    { 
      name: "MongoDB / Mongoose", 
      category: "cloud", 
      level: "Advanced", 
      context: "Document data models, complex aggregation pipelines, schema validation", 
      badge: "Roots Butchery",
      icon: MongoDbIcon,
      brandColor: "text-[#47A248]",
      brandBg: "bg-[#47A248]/10",
      brandBorder: "border-[#47A248]/30 hover:border-[#47A248]/60"
    },

    // Tools & DevOps
    { 
      name: "Git & GitHub", 
      category: "tools", 
      level: "Expert", 
      context: "Git trunk-based branching, PR reviews, CI workflows & release tags", 
      badge: "DevOps Core",
      icon: GitIcon,
      brandColor: "text-[#F05032]",
      brandBg: "bg-[#F05032]/10",
      brandBorder: "border-[#F05032]/30 hover:border-[#F05032]/60"
    },
    { 
      name: "Docker", 
      category: "tools", 
      level: "Advanced", 
      context: "Containerization of microservices, multi-stage builds, isolated runtime", 
      badge: "Infrastructure",
      icon: DockerIcon,
      brandColor: "text-[#2496ED]",
      brandBg: "bg-[#2496ED]/10",
      brandBorder: "border-[#2496ED]/30 hover:border-[#2496ED]/60"
    },
    { 
      name: "Stripe API Integration", 
      category: "tools", 
      level: "Advanced", 
      context: "Payment intent webhooks, customer billing pipelines & secure checkout", 
      badge: "Fintech",
      icon: StripeIcon,
      brandColor: "text-[#635BFF]",
      brandBg: "bg-[#635BFF]/10",
      brandBorder: "border-[#635BFF]/30 hover:border-[#635BFF]/60"
    },
    { 
      name: "Linux / Bash CLI", 
      category: "tools", 
      level: "Advanced", 
      context: "POSIX shell scripting, server administration, process management", 
      badge: "Systems Ops",
      icon: LinuxIcon,
      brandColor: "text-[#FFA500]",
      brandBg: "bg-[#FFA500]/10",
      brandBorder: "border-[#FFA500]/30 hover:border-[#FFA500]/60"
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Arsenal", icon: Layers },
    { id: "frontend", label: "Frontend & UI", icon: Code2 },
    { id: "backend", label: "Backend & Systems", icon: Server },
    { id: "ai", label: "AI & Vector Search", icon: Cpu },
    { id: "cloud", label: "Cloud & Databases", icon: Cloud },
    { id: "tools", label: "Tools & DevOps", icon: Wrench },
  ];

  const filteredSkills = activeFilter === "all"
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090b10] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>REAL-WORLD TOOLING & PROFICIENCY</span>
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text-cyan">Tech Matrix</span>
          </h2>
          <p className="section-subtitle">
            Authentic languages, runtimes, vector databases, and cloud systems utilized across Knolink, Apolemia, Entropy, and production platforms.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                    activeFilter === tab.id
                      ? "bg-slate-800 text-white border border-slate-700 shadow-md font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Cards Grid with Real Brand Icons & Authentic Colors */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`p-5 rounded-2xl bg-[#0e121a] border ${skill.brandBorder} transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${skill.brandBg} border border-slate-800/80 flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" size={20} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white group-hover:text-slate-100 transition-colors font-mono block">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {skill.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/80">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pl-0.5">
                    {skill.context}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${skill.brandBg} ${skill.brandColor} border border-current/20 font-medium`}>
                    {skill.badge}
                  </span>
                  <span className="text-slate-500 font-mono text-[10px] flex items-center gap-1">
                    <span>Active In Stack</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Ecosystem Badges */}
        <div className="p-6 rounded-2xl bg-[#0e121a]/80 border border-slate-800 text-center space-y-3">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Additional Ecosystem Libraries & Utilities
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Socket.io Realtime",
              "Radix UI Primitives",
              "Zod Validation",
              "TanStack React Query",
              "Vite Lightning Bundler",
              "Postman API Testing",
              "JWT Authentication",
              "Recharts Data Viz",
              "GitHub Actions CI/CD",
              "Vercel Edge Network",
              "VS Code Power Workspaces",
              "Markdown AST Engines",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-600 rounded-lg text-xs font-mono hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

