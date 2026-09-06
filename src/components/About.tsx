import { Award, GraduationCap, CheckCircle, Terminal } from "lucide-react";
import { TypeScriptIcon, PineconeIcon, AzureIcon, StripeIcon } from "./icons/TechIcons";

const About = () => {
  const engineeringPillars = [
    {
      icon: TypeScriptIcon,
      title: "Clean, Typesafe Architecture",
      description: "Writing maintainable, predictable TypeScript and component structures with rigorous separation of concerns.",
      color: "border-neutral-800 bg-neutral-900 text-white",
    },
    {
      icon: PineconeIcon,
      title: "AI & Vector Search Integration",
      description: "Bridging modern LLMs with high-dimensional vector databases (Pinecone) to build intelligent workflows like Knolink.",
      color: "border-neutral-800 bg-neutral-900 text-white",
    },
    {
      icon: AzureIcon,
      title: "Reliability & Cloud Security",
      description: "Implementing robust token verification, rate limiting, and Azure cloud infrastructure with certified cybersecurity fundamentals.",
      color: "border-neutral-800 bg-neutral-900 text-white",
    },
    {
      icon: StripeIcon,
      title: "End-to-End Product Execution",
      description: "From database schema design to responsive UI deployment with Stripe payments and live production monitoring.",
      color: "border-neutral-800 bg-neutral-900 text-white",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>ENGINEERING PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            About Thuso Ndou
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            A software engineer focused on building robust, scalable web applications and intelligent knowledge tools that solve real-world problems.
          </p>
        </div>

        {/* Narrative & Technical Journey */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800 space-y-4 shadow-xl">
              <h3 className="text-xl font-display font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                The Software Engineering Journey
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p>
                  My development journey started over 5 years ago out of a deep fascination with how code turns abstract ideas into working systems. That drive led me to complete a BSc in Information Technology at North-West University, building a strong foundation in algorithms, OOP (C#, Java), Python, relational database modeling, and distributed cloud computing (Azure).
                </p>
                <p>
                  I am currently advancing my academic expertise by pursuing a BSc (Honours) in Data Science at Eduvos, specializing in machine learning pipelines, predictive modeling, and statistical computing to engineer intelligent, data-driven systems.
                </p>
                <p>
                  Today, I architect and build production-grade web applications using React, TypeScript, Node.js/Express, and Cloud Datastores. My portfolio includes 30+ completed systems most notably <a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-white ">Knolink</a>, an AI research workspace built with Pinecone vector search, OpenAI embeddings, and Firebase.
                </p>
                <p>
                  Beyond software engineering, I hold professional credentials in IBM Data Science, Microsoft Azure Cloud, and Cisco Cybersecurity.
                </p>
              </div>

              {/* Core Attributes Pills */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                  ✓ Data Science Honours (Eduvos)
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                  ✓ Systems Architecture
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                  ✓ Vector AI & Embeddings
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                  ✓ Production Shipped
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-neutral-800 space-y-5 shadow-xl">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-neutral-400" />
                Academic & Industry Foundations
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-black border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">BSc (Honours) in Data Science</span>
                    <span className="text-[11px] font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">In Progress</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Eduvos</p>
                  <p className="text-neutral-500 text-[11px]">Machine Learning, Statistical Modeling, Big Data Systems</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">BSc in Information Technology</span>
                    <span className="text-[11px] font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Graduated</span>
                  </div>
                  <p className="text-neutral-400 text-xs">North-West University (NWU)</p>
                  <p className="text-neutral-500 text-[11px]">Object-Oriented Programming, Data Structures, DB Systems</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">IBM Data Science Professional</span>
                    <span className="text-[11px] font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Certified</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Data analysis, Python, statistical computing</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Microsoft Azure Fundamentals</span>
                    <span className="text-[11px] font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Cloud</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Azure Compute, Storage, Identity & Governance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Engineering */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-all space-y-3 group shadow-lg"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-neutral-200 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;