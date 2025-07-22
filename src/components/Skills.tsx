import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 95, category: 'frontend' },
    { name: "TypeScript", level: 90, category: 'frontend' },
    { name: "Next.js", level: 85, category: 'frontend' },
    { name: "Tailwind CSS", level: 90, category: 'frontend' },
    { name: "JavaScript", level: 95, category: 'frontend' },
    { name: "HTML/CSS", level: 95, category: 'frontend' },
    
    // Backend
    { name: "Node.js", level: 85, category: 'backend' },
    { name: "Express.js", level: 80, category: 'backend' },
    { name: "CosmosDB", level: 75, category: 'backend' },
    { name: "MongoDB", level: 70, category: 'backend' },
    
    // Tools
    { name: "Git", level: 90, category: 'tools' },
    { name: "Docker", level: 75, category: 'tools' },
    { name: "Azure", level: 70, category: 'tools' },
  ];

  const categories = {
    frontend: { title: "Frontend", color: "text-primary" },
    backend: { title: "Backend", color: "text-accent" },
    tools: { title: "Tools & Others", color: "text-purple-400" }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

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
                {getSkillsByCategory(key).map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="skill-bar h-2">
                      <div 
                        className="skill-progress h-full"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
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
            {['Flutter', 'Sass', 'Firebase', 'Scratch', 'Vercel', 'Linux', 'Nginx', 'Redis'].map((tech) => (
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