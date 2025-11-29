import React from 'react';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Secure Cloud Storage",
    category: "WEB / SECURITY",
    desc: "A secure cloud storage system with client-side encryption. Ensures data privacy before uploading to AWS S3.",
    tech: ["React", "Node.js", "AWS S3", "MongoDB"],
    image: "/project1.png", // ඔයාගේ Image එකේ නම හරිද බලන්න
    github: "#",
    live: "https://trysafe.vercel.app/",
    hasLive: true 
  },
  {
    title: "Smart Fan Control",
    category: "IOT / AI",
    desc: "Gesture-based fan control system using Image Processing. Hands-free operation with OpenCV.",
    tech: ["Python", "OpenCV", "Raspberry Pi"],
    image: "/project2.jpg",
    github: "#",
    live: null,
    hasLive: false 
  },
  {
    title: "AI Career Guidance",
    category: "MACHINE LEARNING",
    desc: "Intelligent system predicting suitable tech roles based on user personality traits and skills.",
    tech: ["Python", "Flask", "Scikit-learn"],
    image: "/project3.jpg",
    github: "#",
    live: "#",
    hasLive: true
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-black text-white px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
           <p className="text-purple-500 font-medium mb-2 tracking-widest uppercase">My Work</p>
           <h2 className="text-4xl md:text-5xl font-bold">Selected Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }} // 1. Pop-up effect on hover
              className="group relative"
            >
              {/* --- 2. GLOW EFFECT LAYER --- */}
              {/* මේක තමයි Mouse එක ගෙනාවම කාඩ් එක වටේට පත්තු වෙන Gradient එක */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* --- MAIN CARD CONTENT --- */}
              <div className="relative h-full bg-gray-900 rounded-2xl overflow-hidden flex flex-col border border-gray-800 group-hover:border-transparent transition-all duration-300">
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {/* Category Tag floating on Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-purple-400 text-xs font-bold rounded-full border border-purple-500/30 flex items-center gap-1">
                      <Layers size={12} /> {project.category}
                    </span>
                  </div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay (Darkens image slightly until hover) */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] uppercase font-semibold bg-gray-800 text-gray-400 rounded-md border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons (Code & Live) */}
                  <div className="grid grid-cols-2 gap-4 mt-auto border-t border-gray-800 pt-4">
                    
                    {/* Code Button */}
                    <a href={project.github} className="flex items-center justify-center gap-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 py-2 rounded-lg transition-all">
                      <Code size={16} /> Code
                    </a>

                    {/* Live Button */}
                    {project.hasLive ? (
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 py-2 rounded-lg transition-all">
                         <ExternalLink size={16} /> Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 cursor-not-allowed py-2">
                        <ExternalLink size={16} /> N/A
                      </span>
                    )}

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;