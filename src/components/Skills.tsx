interface Skill {
  name: string;
  description?: string;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    { name: "React", category: 'frontend' },
    { name: "TypeScript", category: 'frontend' },
    { name: "Next.js", category: 'frontend' },
    { name: "Tailwind CSS", category: 'frontend' },
    { name: "JavaScript", category: 'frontend' },
    { name: "HTML/CSS", category: 'frontend' },

    // Backend
    { name: "Node.js", category: 'backend' },
    { name: "Python", description: "data analysis, IBM cert", category: 'backend' },
    { name: "C#", description: "structured programming, apps", category: 'backend' },
    { name: "Java", description: "OOP, mobile dev", category: 'backend' },
    { name: "SQL", description: "database courses", category: 'backend' },
    { name: "REST APIs", description: "built in projects", category: 'backend' },
    { name: "Express.js", category: 'backend' },
    { name: "CosmosDB", category: 'backend' },
    { name: "MongoDB", category: 'backend' },

    // Tools
    { name: "Git", category: 'tools' },
    { name: "Docker", category: 'tools' },
    { name: "Azure", category: 'tools' },
    { name: "Notebook", category: 'tools' },
  ];

  const categories = {
    frontend: { title: "Frontend", color: "text-primary" },
    backend: { title: "Backend", color: "text-accent" },
    tools: { title: "Tools & Others", color: "text-purple-400" }
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="glass-card p-6 fade-in-up">
              <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {getSkillsByCategory(key).map((skill) => (
                  <div key={skill.name} className="group border-b border-border/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      {skill.description && (
                        <span className="text-xs text-muted-foreground mt-1">
                          {skill.description}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 text-center fade-in-up">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Also experienced with
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Flutter', 'Sass', 'Firebase', 'Scratch', 'Vercel', 'Linux', 'Redis'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted/30 text-muted-foreground rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
