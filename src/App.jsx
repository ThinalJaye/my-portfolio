import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white no-scrollbar">
      
      {/* Hero Section */}
      <section id="home" className="h-screen w-full snap-start">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen w-full snap-start flex items-center justify-center">
        <Services />
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="min-h-screen w-full snap-start flex items-center justify-center">
        <TechStack />
      </section>

      {/* Process Section */}
      <section id="process" className="min-h-screen w-full snap-start flex items-center justify-center">
        <Process />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen w-full snap-start flex items-center justify-center">
        <Projects />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen w-full snap-start flex items-center justify-center">
        <About />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen w-full snap-start flex items-center justify-center">
        <Contact />
      </section>

    </div>
  );
}

export default App;