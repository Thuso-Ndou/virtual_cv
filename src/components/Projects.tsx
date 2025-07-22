import { Button } from "../components/ui/button";
import { ExternalLink, Github, Zap, Shield, Smartphone } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
  icon: any;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI and secure payments",
      longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, payment integration with Stripe, and admin dashboard for inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      featured: true,
      category: "Full Stack",
      icon: Zap
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      longDescription: "A collaborative task management application featuring real-time updates, team collaboration, project tracking, deadline management, and interactive dashboards built with React and Socket.io.",
      tech: ["React", "Socket.io", "PostgreSQL", "Express", "Tailwind"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://taskmanager-demo.com",
      featured: true,
      category: "Web App",
      icon: Shield
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      longDescription: "A responsive weather dashboard that provides current weather conditions, 7-day forecasts, interactive maps, and location-based weather alerts using OpenWeatherMap API.",
      tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: "https://weather-demo.com",
      featured: false,
      category: "Frontend",
      icon: Smartphone
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      longDescription: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms, provides insights, scheduling tools, and performance metrics visualization.",
      tech: ["Next.js", "PostgreSQL", "Chart.js", "REST APIs"],
      githubUrl: "https://github.com/username/social-dashboard",
      liveUrl: "https://social-demo.com",
      featured: false,
      category: "Dashboard",
      icon: Zap
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`project-card fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-accent">{project.category}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.longDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="fade-in-up">
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="glass-card p-6 hover:bg-project-hover/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <div className="flex gap-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1 hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center fade-in-up">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;