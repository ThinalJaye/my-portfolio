import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services'; // අලුත්
import TechStack from './components/TechStack';
import Process from './components/Process';   // අලුත්
import Projects from './components/Projects';
import About from './components/About';       // අලුත්
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      
      {/* 1. Services Section */}
      <Services />
      
      {/* 2. Skills Section (TechStack) */}
      <TechStack />
      
      {/* 3. Process Section */}
      <Process />
      
      {/* 4. Projects Section */}
      <Projects />
      
      {/* 5. About Section */}
      <About />
      
      {/* 6. Contact Section (Footer එකත් මේකෙම තියෙනවා) */}
      <Contact /> 
    </div>
  );
}

export default App;