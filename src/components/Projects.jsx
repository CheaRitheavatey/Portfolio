import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce for Cambodia's Products",
      description: "A full-stack e-commerce platform enabling local producers to showcase products online. Includes an automated product upload via a Telegram bot.",
      tech: ["Spring Boot", "React", "PostgreSQL"],
      github: "https://chearitheavatey.github.io/ecomBetterNotFlop/",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/embed/PLdFL_5gT0s?autoplay=1&mute=1&loop=1&playlist=PLdFL_5gT0s"
    },
    {
      title: "Sign Language to Subtitle Converter",
      description: "A real-time sign language to subtitle system using computer vision and LLM (SEA-LION) for instant translation to English. Designed for ed-tech accessibility.",
      tech: ["Python", "LSTM", "Computer Vision"],
      github: "https://chearitheavatey.github.io/signlanguage-to-subtitle-converter/",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/embed/2CLyPytsZwk?start=120&autoplay=1&mute=1&loop=1&playlist=2CLyPytsZwk"
    },
    {
      title: "Cambodia Tourism Website",
      description: "A full-stack travel showcase responsive website presenting Cambodia’s attractions through interactive galleries using an MVC architecture.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://explore-cambodia.netlify.app/",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/embed/VdMIhoYYaDs?autoplay=1&mute=1&loop=1&playlist=VdMIhoYYaDs"
    },
    {
      title: "Cambodia Travel App Prototype",
      description: "An innovative travel app designed to help travelers discover unique and low-key spots in Cambodia often missed by tourists. It features a detailed local map, a curated list of activities with booking and registration capabilities, and integrated translation services.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://explore-cambodia.netlify.app/",
      mediaType: "video",
      mediaSrc: "image_folder/project4/IMG_9963.MP4"
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
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10 pointer-events-none"></div>
              <div className="w-full h-full bg-surface">
                {project.mediaType === 'image' && (
                  <img src={project.mediaSrc} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" onError={(e) => { e.target.style.display = 'none'; }} />
                )}
                {project.mediaType === 'video' && (
                  <video src={project.mediaSrc} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" autoPlay loop muted playsInline />
                )}
                {project.mediaType === 'youtube' && (
                  <iframe src={project.mediaSrc} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 pointer-events-none" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                )}
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
