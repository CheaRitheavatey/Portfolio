import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center relative">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 mb-6 rounded-full glass border-primary/20 text-primary text-sm font-medium">
          Available for Internships
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">Chea Rithea Vatey</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-8">
          Computer Science & Entrepreneur Enthusiast
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl leading-relaxed">
          A dedicated and motivated student seeking to leverage my achievements and broaden my horizon through valuable experiences. With a strong commitment to academics, I aspire to make a meaningful impact in my chosen field.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-background font-semibold flex items-center gap-2 transition-all hover:scale-105"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 glass-card text-gray-400 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:ritheavateychea@gmail.com" className="p-3 glass-card text-gray-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
