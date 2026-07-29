import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

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
          Technology-focused Computer Science Student
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl leading-relaxed">
          Experienced in software engineering, artificial intelligence, and venture capital analysis. Skilled in developing AI-driven applications while evaluating emerging technologies and startup opportunities. Passionate about leveraging technology to create scalable solutions with meaningful social impact.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-background font-semibold flex items-center gap-2 transition-all hover:scale-105"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a 
            href="image_folder/Ritheavatey_Chea_CV_v2.pdf" 
            download
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 font-semibold flex items-center gap-2 transition-all hover:scale-105"
          >
            Download CV <Download size={18} />
          </a>
          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com/CheaRitheavatey" target="_blank" rel="noreferrer" className="p-3 glass-card text-gray-400 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ritheavatey-chea-74456a2b5/" target="_blank" rel="noreferrer" className="p-3 glass-card text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
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
