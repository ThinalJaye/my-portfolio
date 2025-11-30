import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILITY FUNCTION ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- HOVER EFFECT COMPONENT (Ultra Smooth Version) ---
const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 py-4", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                
                // --- SMOOTH ANIMATION SETTINGS ---
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
                // This makes the gliding movement buttery smooth using Spring Physics
                transition={{
                  type: "spring",
                  stiffness: 400, // Controls the "snap" speed (Lower = Softer)
                  damping: 30,    // Controls the "bounciness" (Higher = Less bounce, smoother stop)
                  mass: 1,
                }}
              />
            )}
          </AnimatePresence>
          
          {/* Card Content */}
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/10 relative z-20 hover:border-white/20 transition-colors duration-500 group-hover:border-transparent">
            <div className="relative z-50">
              <div className="p-2 flex items-start gap-5">
                
                {/* Icon (Simple & Clean) */}
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 shrink-0 group-hover:border-white/20 transition-colors duration-300">
                   <item.icon size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-white tracking-wide mb-1 group-hover:text-purple-300 transition-colors duration-300">{item.title}</h4>
                  <p className="text-gray-400 font-medium text-sm tracking-wide">{item.description}</p>
                  <p className="text-gray-500 text-xs mt-2 group-hover:text-gray-400 transition-colors duration-300">{item.subDescription}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- MAIN ABOUT COMPONENT ---
const About = () => {

  const aboutItems = [
    {
      title: "Education",
      description: "BSc (Hons) in Software Engineering",
      subDescription: "SLTC Research University (2022 - Present)",
      icon: GraduationCap,
    },
    {
      title: "Experience",
      description: "Trainee / Intern",
      subDescription: "People's Bank (IT Support & Banking) | 2022",
      icon: Briefcase,
    },
    {
      title: "Volunteering",
      description: "Content Creation Team",
      subDescription: "IEEE GISLA & Codemania",
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-24 bg-black text-white px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: The Image --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group w-full max-w-md">
            {/* Subtle Glow Behind Image */}
            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            <img 
              src="about-photo.png" 
              alt="Thinal Jayamanna" 
              className="relative w-full h-auto object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </motion.div>


        {/* --- RIGHT SIDE: Text Content & Hover Effect --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Header Section */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-purple-500 font-medium mb-3 tracking-wider uppercase">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bridging the gap between <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Code & Creativity.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a Software Engineering Undergraduate at SLTC Research University with a passion for building secure and scalable digital solutions. 
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              My journey involves a unique blend of Front-End Development and Creative Content Creation. I don't just write code; I tell stories through technology.
            </p>
          </motion.div>

          {/* --- SMOOTH HOVER EFFECT --- */}
          <div className="-mx-2 mb-8"> 
             <HoverEffect items={aboutItems} />
          </div>

          {/* Quick Stats */}
          <motion.div 
            className="flex gap-8 border-t border-gray-800 pt-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <div>
              <h4 className="text-3xl font-bold text-white">3+</h4>
              <p className="text-sm text-gray-500">Years Coding</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">10+</h4>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">5+</h4>
              <p className="text-sm text-gray-500">Volunteering</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;