import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: The Image (Clean & Minimal) --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group w-full max-w-md">
            
            {/* Subtle Glow Behind Image (Optional) */}
            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
          
            <img 
              src="about-photo.png" 
              alt="Thinal Jayamanna" 
              className="relative w-full h-auto object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 mask-image-linear-gradient"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </motion.div>


        {/* --- RIGHT SIDE: Text Content & Info Cards --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Header Section */}
          <motion.div 
            className="mb-10"
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
            
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey involves a unique blend of front-End Development and Creative Content Creation. I don't just write code; I tell stories through technology.
            </p>
          </motion.div>

          {/* Info Cards (Timeline) */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            
            {/* Education */}
            <motion.div 
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/30 transition-all flex gap-5 hover:bg-gray-900"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Education</h4>
                <p className="text-gray-300">BSc (Hons) in Software Engineering</p>
                <p className="text-gray-500 text-sm mt-1">SLTC Research University (2022 - Present)</p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/30 transition-all flex gap-5 hover:bg-gray-900"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Experience</h4>
                <p className="text-gray-300">Trainee / Intern</p>
                <p className="text-gray-500 text-sm mt-1">People's Bank (IT Support & Banking) | 2022</p>
              </div>
            </motion.div>

            {/* Volunteering */}
            <motion.div 
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-red-500/30 transition-all flex gap-5 hover:bg-gray-900"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-red-400 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Volunteering</h4>
                <p className="text-gray-300">Content Creation Team</p>
                <p className="text-gray-500 text-sm mt-1">IEEE GISLA & Codemania</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="flex gap-8 mt-10 border-t border-gray-800 pt-8"
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