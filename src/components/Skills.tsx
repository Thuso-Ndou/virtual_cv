import { useState } from "react";
import { 
  Code2, 
  Server, 
  Cpu, 
  Database, 
  Cloud, 
  Wrench, 
  Layers, 
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
    },
    { 
      name: "TypeScript", 
      category: "frontend", 
      level: "Expert", 
      context: "Strict static typing, interfaces, generics, async pipeline safety", 
      badge: "Core Language",
      icon: TypeScriptIcon,
    },
    { 
      name: "Next.js", 
      category: "frontend", 
      level: "Advanced", 
      context: "App router, SSR/SSG rendering, Edge deployment & route handlers", 
      badge: "Production Apps",
      icon: NextJsIcon,
    },
    { 
      name: "Tailwind CSS", 
      category: "frontend", 
      level: "Expert", 
      context: "Tailored design systems, glassmorphism, responsive grid & fluid UX", 
      badge: "Design Engine",
      icon: TailwindIcon,
    },
    { 
      name: "JavaScript (ES6+)", 
      category: "frontend", 
      level: "Expert", 
      context: "Event loops, closures, promises, functional pipelines & DOM engine", 
      badge: "Web Core",
      icon: JavaScriptIcon,
    },

    // Backend & Systems
    { 
      name: "Rust", 
      category: "backend", 
      level: "Advanced", 
      context: "Memory safety, crates ecosystem, AST parser model & low latency engines", 
      badge: "Entropy Core",
      icon: RustIcon,
    },
    { 
      name: "Node.js / Express", 
      category: "backend", 
      level: "Expert", 
      context: "High-concurrency microservices, JWT auth, rate limiting & middleware", 
      badge: "Backend Engine",
      icon: NodeIcon,
    },
    { 
      name: "Python", 
      category: "backend", 
      level: "Advanced", 
      context: "Data science pipelines, IBM certified, machine learning automation", 
      badge: "Data Science",
      icon: PythonIcon,
    },
    { 
      name: "C# / .NET", 
      category: "backend", 
      level: "Advanced", 
      context: "Structured backend architectures, enterprise OOP & algorithmic patterns", 
      badge: "BSc IT Degree",
      icon: CSharpIcon,
    },
    { 
      name: "Java", 
      category: "backend", 
      level: "Advanced", 
      context: "Object-oriented design patterns, enterprise software foundations", 
      badge: "BSc IT Degree",
      icon: JavaIcon,
    },
    { 
      name: "SQL & Relational DBs", 
      category: "backend", 
      level: "Advanced", 
      context: "Schema normalization, indexing, joins, ACID transactions & triggers", 
      badge: "Relational DB",
      icon: SqlIcon,
    },
    { 
      name: "WebAssembly (Wasm)", 
      category: "backend", 
      level: "Proficient", 
      context: "Near-native client bytecode execution for AST parsing & IDE utilities", 
      badge: "Systems Wasm",
      icon: WasmIcon,
    },

    // AI & Vector
    { 
      name: "Pinecone Vector DB", 
      category: "ai", 
      level: "Advanced", 
      context: "High-dimensional vector indexing, sub-100ms cosine similarity lookup", 
      badge: "Knolink Core",
      icon: PineconeIcon,
    },
    { 
      name: "OpenAI API", 
      category: "ai", 
      level: "Advanced", 
      context: "text-embedding-3 vectors, LLM orchestration, structured tool execution", 
      badge: "AI Engineering",
      icon: OpenAIIcon,
    },
    { 
      name: "Semantic Vector Search", 
      category: "ai", 
      level: "Advanced", 
      context: "Retrieval-augmented knowledge graphs, embedding clustering & search", 
      badge: "Vector AI",
      icon: Cpu,
    },

    // Cloud & DBs
    { 
      name: "Microsoft Azure", 
      category: "cloud", 
      level: "Advanced", 
      context: "Azure App Services, Blob storage, Azure AD, AZ-900 certified", 
      badge: "AZ-900 Certified",
      icon: AzureIcon,
    },
    { 
      name: "Firebase / Firestore", 
      category: "cloud", 
      level: "Expert", 
      context: "Real-time document synchronization, Firestore rules & auth security", 
      badge: "Cloud Storage",
      icon: FirebaseIcon,
    },
    { 
      name: "MongoDB / Mongoose", 
      category: "cloud", 
      level: "Advanced", 
      context: "Document data models, complex aggregation pipelines, schema validation", 
      badge: "Roots Butchery",
      icon: MongoDbIcon,
    },

    // Tools & DevOps
    { 
      name: "Git & GitHub", 
      category: "tools", 
      level: "Expert", 
      context: "Git trunk-based branching, PR reviews, CI workflows & release tags", 
      badge: "DevOps Core",
      icon: GitIcon,
    },
    { 
      name: "Docker", 
      category: "tools", 
      level: "Advanced", 
      context: "Containerization of microservices, multi-stage builds, isolated runtime", 
      badge: "Infrastructure",
      icon: DockerIcon,
    },
    { 
      name: "Stripe API Integration", 
      category: "tools", 
      level: "Advanced", 
      context: "Payment intent webhooks, customer billing pipelines & secure checkout", 
      badge: "Fintech",
      icon: StripeIcon,
    },
    { 
      name: "Linux / Bash CLI", 
      category: "tools", 
      level: "Advanced", 
      context: "POSIX shell scripting, server administration, process management", 
      badge: "Systems Ops",
      icon: LinuxIcon,
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>REAL-WORLD TOOLING & PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Engineering Tech Matrix
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Authentic languages, runtimes, vector databases, and cloud systems utilized across Knolink, Apolemia, Entropy, and production platforms.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                    activeFilter === tab.id
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" size={20} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white group-hover:text-neutral-200 transition-colors font-mono block">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">
                          {skill.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed pl-0.5">
                    {skill.context}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-neutral-800 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 font-medium">
                    {skill.badge}
                  </span>
                  <span className="text-neutral-500 font-mono text-[10px]">
                    Active In Stack
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Ecosystem Badges */}
        <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-neutral-800 text-center space-y-3 shadow-lg">
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
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
                className="px-3 py-1 bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-600 rounded-lg text-xs font-mono hover:text-white transition-colors cursor-default"
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
