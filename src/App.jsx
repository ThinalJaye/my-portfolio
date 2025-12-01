import React from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

// Components
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
// Process Component import එක ඉවත් කළා
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Animation Component
import RevealOnScroll from './components/RevealOnScroll';

function App() {

  // Smooth Scroll Settings
  const lenisOptions = {
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  };

  return (
    <ReactLenis root options={lenisOptions}>
      
      <div className="min-h-screen w-full bg-black text-white selection:bg-purple-500 selection:text-white">
        
        {/* 1. Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* 2. About Me */}
        <section id="about" className="flex justify-center">
          <RevealOnScroll width="100%">
            <About />
          </RevealOnScroll>
        </section>

        {/* 3. Skills / TechStack */}
        <section id="skills" className="flex justify-center">
          <RevealOnScroll width="100%">
            <TechStack />
          </RevealOnScroll>
        </section>

        {/* 4. Services */}
        <section id="services" className="flex justify-center">
          <RevealOnScroll width="100%">
            <Services />
          </RevealOnScroll>
        </section>
        
        {/* 5. Projects */}
        <section id="projects" className="flex justify-center">
          <RevealOnScroll width="100%">
            <Projects />
          </RevealOnScroll>
        </section>

        {/* (Process Section එක මෙතනින් ඉවත් කළා) */}

        {/* 6. Contact */}
        <section id="contact" className="flex justify-center">
          <RevealOnScroll width="100%">
            <Contact />
          </RevealOnScroll>
        </section>

        <Footer />

      </div>
    </ReactLenis>
  );
}

export default App;