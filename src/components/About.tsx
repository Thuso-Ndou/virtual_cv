import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Passionate about continuous learning and improvement"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I started teaching myself to code about 5 years ago. That curiosity led me to complete a BSc in IT at North-West University, where I built a strong foundation in C#, Java, Python, and cloud computing (Azure).

            Today, I focus on full-stack development with React, Node.js, and TypeScript. My GitHub shows 30+ projects, including Knolink (a research workspace with AI) and a full e‑commerce platform with Stripe payments.

            I'm looking for my first role in software development – I'm ready to learn, contribute, and grow alongside experienced engineers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="fade-in-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  I built a research workspace web app (Knolink) with React, Firebase, and OpenAI
                  while earning my BSc IT from North-West University. I also hold certificates in
                  IBM Data Science, Cisco Cybersecurity, and Azure cloud.
                </p>
                <p>
                  My toolkit: Python, SQL, C#, Java, React, Node.js, Azure (compute, storage, identity).
                  I've completed 30+ projects – from full‑stack apps to data analysis pipelines.
                </p>
                <p>
                  I'm targeting entry‑level roles in software development, data analytics, or cloud support.
                  I learn fast, document my work, and I'm ready to contribute on day one.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="fade-in-right">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 glass-card p-6">
              <h4 className="text-lg font-semibold mb-4 text-center">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;