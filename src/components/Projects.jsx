import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce for Cambodia's Products",
      description: "A full-stack e-commerce platform enabling local producers to showcase products online. Includes an automated product upload via a Telegram bot.",
      tech: ["Spring Boot", "React", "PostgreSQL"],
      github: "https://chearitheavatey.github.io/ecomBetterNotFlop/",
      image: "images/project1.png"
    },
    {
      title: "Sign Language to Subtitle Converter",
      description: "A real-time sign language to subtitle system using computer vision and LLM (SEA-LION) for instant translation to English. Designed for ed-tech accessibility.",
      tech: ["Python", "LSTM", "Computer Vision"],
      github: "https://chearitheavatey.github.io/signlanguage-to-subtitle-converter/",
      image: "images/project2.png"
    },
    {
      title: "Cambodia Tourism Website",
      description: "A full-stack travel showcase responsive website presenting Cambodia’s attractions through interactive galleries using an MVC architecture.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://explore-cambodia.netlify.app/",
      image: "images/project3.png"
    },
    {
      title: "Cambodia Travel App Prototype",
      description: "",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://explore-cambodia.netlify.app/",
      image: "images/project3.png"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary">02.</span> Featured Projects
        <div className="h-px bg-white/10 flex-grow ml-4"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card overflow-hidden flex flex-col h-full group">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10"></div>
              {/* Fallback gradient if image not found */}
              <div className="w-full h-full bg-surface">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {/* <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Github size={20} />
                </a> */}
                <a href={project.github} className="text-gray-400 hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
