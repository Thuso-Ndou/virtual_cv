import { GraduationCap, Award, Briefcase, Calendar, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";
import { AzureIcon, PythonIcon } from "./icons/TechIcons";

interface Milestone {
  year: string;
  role: string;
  organization: string;
  category: "Leadership / Building" | "Degree" | "Certification";
  description: string;
  details: string[];
  badgeColor: string;
  cardBorder: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
}

export const ExperienceTimeline = () => {
  const milestones: Milestone[] = [
    {
      year: "2025 — Present",
      role: "BSc (Honours) in Data Science",
      organization: "Eduvos",
      category: "Degree",
      description: "Postgraduate specialization in machine learning algorithms, statistical computing, predictive modeling, and large-scale data architectures to build intelligent software systems.",
      details: [
        "Advanced predictive analytics and machine learning algorithm design",
        "Statistical computing and big data engineering architectures",
        "Deep research integration with Python, NumPy, Pandas, and cloud compute",
      ],
      badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-500/40",
      cardBorder: "border-slate-800 hover:border-cyan-500/40",
      icon: GraduationCap,
    },
    {
      year: "2024 — Present",
      role: "Architect & Lead Engineer",
      organization: "Knolink (knolink.co.za)",
      category: "Leadership / Building",
      description: "Conceived, architected, and shipped Knolink and its machine intelligence systems (Apolemia, Entropy, Praxis). Implemented Pinecone vector embeddings for semantic search, Node/Express backend routing, and reactive markdown canvas.",
      details: [
        "Shipped full production systems with sub-100ms vector retrieval",
        "Integrated text-embedding-3 vectors with Pinecone vector indices",
        "Architected Apolemia inference runtime and Entropy AST compiler",
      ],
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
      cardBorder: "border-slate-800 hover:border-emerald-500/40",
      icon: Briefcase,
    },
    {
      year: "Graduate",
      role: "BSc in Information Technology",
      organization: "North-West University (NWU)",
      category: "Degree",
      description: "Rigorous computer science curriculum covering object-oriented programming (C#, Java), algorithms, data structures, relational database engineering (SQL), and cloud compute (Azure).",
      details: [
        "Advanced software engineering and architecture coursework",
        "Database normalization, ACID transactions, and query optimization",
        "Software project lifecycles, testing, and agile methodologies",
      ],
      badgeColor: "bg-indigo-950/80 text-indigo-300 border-indigo-500/40",
      cardBorder: "border-slate-800 hover:border-indigo-500/40",
      icon: GraduationCap,
    },
    {
      year: "Certified",
      role: "IBM Data Science Professional",
      organization: "IBM",
      category: "Certification",
      description: "Comprehensive data science certification covering Python programming, NumPy/Pandas data pipelines, exploratory data analysis, and predictive modeling.",
      details: [
        "Built data cleaning and automated analysis scripts",
        "Applied statistical methods and data visualization techniques",
      ],
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
      cardBorder: "border-slate-800 hover:border-emerald-500/40",
      icon: PythonIcon,
    },
    {
      year: "Certified",
      role: "Microsoft Azure Cloud Fundamentals",
      organization: "Microsoft",
      category: "Certification",
      description: "Core cloud architecture concepts including virtual machines, blob storage, cloud identity (Azure AD / Entra ID), network security groups, and cloud governance.",
      details: [
        "Cloud resource deployment and cost management",
        "High-availability architectures and disaster recovery principles",
      ],
      badgeColor: "bg-blue-950/80 text-blue-300 border-blue-500/40",
      cardBorder: "border-slate-800 hover:border-blue-500/40",
      icon: AzureIcon,
    },
    {
      year: "Certified",
      role: "Cisco Cybersecurity Essentials",
      organization: "Cisco",
      category: "Certification",
      description: "Foundations of threat modeling, confidentiality-integrity-availability (CIA) triads, network defense protocols, and vulnerability mitigation.",
      details: [
        "Defensive strategies against web and network attack vectors",
        "Principles of secure code design and cryptographic key management",
      ],
      badgeColor: "bg-purple-950/80 text-purple-300 border-purple-500/40",
      cardBorder: "border-slate-800 hover:border-purple-500/40",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090b10] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIALS & TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="section-subtitle">
            A track record of continuous learning, certified cloud & security expertise, and independent system building.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {milestones.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#0e121a] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />

                {/* Timeline Card */}
                <div className={`p-6 rounded-2xl bg-[#0e121a] border ${item.cardBorder} transition-all duration-300 space-y-3 shadow-xl`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 mt-0.5 shrink-0">
                        <IconComponent className="w-4 h-4" size={16} />
                      </div>
                      <div>
                        <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${item.badgeColor} mb-1`}>
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold font-display text-white group-hover:text-slate-100 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-xs font-mono text-cyan-400 font-medium">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-0.5">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800/60">
                    <ul className="space-y-1 text-xs text-slate-400">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
