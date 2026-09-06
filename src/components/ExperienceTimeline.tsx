import { GraduationCap, Award, Briefcase, Calendar, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";
import { AzureIcon, PythonIcon } from "./icons/TechIcons";

interface Milestone {
  year: string;
  role: string;
  organization: string;
  category: "Leadership / Building" | "Degree" | "Certification";
  description: string;
  details: string[];
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
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black border-t border-neutral-800">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-white" />
            <span>CREDENTIALS & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Education & Experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            A track record of continuous learning, certified cloud & security expertise, and independent system building.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-800 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {milestones.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-black border-2 border-neutral-600 group-hover:border-white group-hover:bg-white transition-all duration-300 shadow-sm" />

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 space-y-3 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white mt-0.5 shrink-0">
                        <IconComponent className="w-4 h-4" size={16} />
                      </div>
                      <div>
                        <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 mb-1">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold font-display text-white group-hover:text-neutral-200 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-xs font-mono text-neutral-400 font-medium">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800 self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      {item.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-0.5">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-neutral-800/80">
                    <ul className="space-y-1 text-xs text-neutral-400">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
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
