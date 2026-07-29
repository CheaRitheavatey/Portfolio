import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      <Navbar />
      <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="border-t border-white/5 py-8 mt-24 text-center text-gray-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Chea Rithea Vatey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
