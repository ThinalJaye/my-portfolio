import React from 'react';
import { motion } from 'framer-motion';

// Tech Stack Data (Same as before)
const techStack = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", className: "bg-white rounded-full" },
  { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      
      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-purple-500 font-medium mb-3 tracking-wider uppercase text-sm">My Skills</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Technologies I Work With
        </h2>
      </motion.div>

      {/* Scrolling Icons Container */}
      <div className="relative w-full overflow-hidden py-10">
        
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Moving Track */}
        <motion.div
          className="flex gap-10 min-w-max" // Gap reduced from 16 to 10
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Infinite Loop */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center gap-3 min-w-[80px] cursor-pointer"
            >
              {/* Icon Container - Size Reduced */}
              <div 
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
              >
                <img 
                  src={tech.img} 
                  alt={tech.name} 
                  className={`w-full h-full object-contain filter drop-shadow-lg group-hover:brightness-110 transition-all ${tech.className || ""}`}
                />
              </div>
              
              {/* Name Label */}
              <span className="text-gray-400 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;