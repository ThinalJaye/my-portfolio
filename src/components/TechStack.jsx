import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React", "Node.js", "AWS", "Python", "Java", "MongoDB", "Figma", "Tailwind CSS", "Git", "Dart", "Flutter"
];

const TechStack = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 mb-12 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 30, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-purple-500 font-medium mb-2">MY SKILLS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technologies I Work With</h2>
      </motion.div>

      {/* Scrolling Animation */}
      <div className="flex relative w-full overflow-hidden mask-gradient">
        {/* Gradients on sides to fade out */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 15, // වේගය වෙනස් කරන්න මෙතන වෙනස් කරන්න
            ease: "linear",
          }}
        >
          {/* List is duplicated to create seamless loop */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span 
              key={index} 
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-black stroke-text hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 cursor-default"
              style={{ WebkitTextStroke: '1px #333' }} // Outline effect
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;