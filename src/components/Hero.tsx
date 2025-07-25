import { Button } from "../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import bg1 from "../assets/bg1.png";
import profilePhoto from "../assets/avatar.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 51, 0.8), rgba(34, 39, 51, 0.9)), url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto fade-in-up">
        <div className="glass-card p-8 md:p-12">
          {/* Profile and Title Section - Added Flex Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            {/* Profile Avatar */}
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary/20 shadow-2xl">
              <AvatarImage src={profilePhoto} alt="Thuso Ndou" />
              <AvatarFallback className="text-2xl font-bold">TN</AvatarFallback>
            </Avatar>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="section-title">Thuso Ndou</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code, 
            innovative design, and cutting-edge technologies. Specialized in React, Node.js, 
            and modern web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-button border-primary/30 text-foreground"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Thuso-Ndou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-button hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thuso-ndou-5113" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-button hover:text-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTTddwdbhQBFwXjrrQtpFDckhnHJVTknbCmMQSSlrjSmVgVjMNWwdFWNVjRbHmFHQwkg"
              className="p-3 glass-button hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-muted-foreground hover:text-primary"
        >
          <ArrowDown className="w-5 h-5 mb-1" />
          <span className="text-xs">Scroll Down</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;