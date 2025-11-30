import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Components
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. Footer එක Import කළා

// Animation Component
import RevealOnScroll from './components/RevealOnScroll';

function App() {

  // Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-purple-500 selection:text-white">
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="flex justify-center">
        <RevealOnScroll width="100%">
          <Services />
        </RevealOnScroll>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="flex justify-center">
        <RevealOnScroll width="100%">
          <TechStack />
        </RevealOnScroll>
      </section>

      {/* Process Section */}
      <section id="process" className="flex justify-center">
        <RevealOnScroll width="100%">
          <Process />
        </RevealOnScroll>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex justify-center">
        <RevealOnScroll width="100%">
          <Projects />
        </RevealOnScroll>
      </section>

      {/* About Section */}
      <section id="about" className="flex justify-center">
        <RevealOnScroll width="100%">
          <About />
        </RevealOnScroll>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="flex justify-center">
        <RevealOnScroll width="100%">
          <Contact />
        </RevealOnScroll>
      </section>

      {/* 2. Footer Section (අන්තිමටම එකතු කළා) */}
      <Footer />

    </div>
  );
}

export default App;