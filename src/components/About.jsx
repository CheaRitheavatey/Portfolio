import React from 'react';
import { BookOpen, Award, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary">01.</span> About Me
        <div className="h-px bg-white/10 flex-grow ml-4"></div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            Hello! I'm Chea Rithea Vatey, a Technology-focused Computer Science student at the University of Pécs, based in Hungary. My journey started with a strong curiosity for how things work, and it evolved into a passion for software development, AI, and venture capital analysis.
          </p>
          <p>
            I am skilled in developing AI-driven applications while evaluating emerging technologies, startup opportunities, and market trends. I'm passionate about leveraging technology to create scalable solutions with meaningful social impact.
          </p>
          
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <Code size={20} className="text-primary" /> Technical Skills
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {['Python', 'Java', 'JavaScript', 'React', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'TensorFlow / Keras', 'PyTorch', 'NLP'].map(skill => (
                <li key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <Briefcase size={20} className="text-primary" /> Experience
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-300">Technology Analyst @ Match VC</h4>
                <p className="text-sm text-primary">Feb 2026 - Present</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-300">DT Excellence Center Intern @ Deutsche Telekom IT</h4>
                <p className="text-sm text-primary">Sept - Dec 2025</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-300">Project Intern @ Ministry of Post and Communication</h4>
                <p className="text-sm text-primary">Jun 2025 - Aug 2025</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <Award size={20} className="text-primary" /> Achievements
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><span className="text-primary mr-2">2025:</span> Innovative Award From PAN-SEA AI Competition (Singapore)</li>
              <li><span className="text-primary mr-2">2024:</span> 1st Winner of HEINEKEN Sustainathon</li>
              <li><span className="text-primary mr-2">2024:</span> 3rd Winner of Fort Hays Faulkner Challenge</li>
              <li><span className="text-primary mr-2">2024:</span> Innovation Award of ASEAN-China-India Youth Leadership</li>
              <li><span className="text-primary mr-2">2021:</span> Gold Medal in Math Competition</li>
              <li><span className="text-primary mr-2">2019:</span> Gold Medal in Math Kangaroo Competition</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
