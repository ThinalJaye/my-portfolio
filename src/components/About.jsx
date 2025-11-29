import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Text Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-500 font-medium mb-4 tracking-wider uppercase">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bridging the gap between <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Code & Creativity.
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a **Software Engineering Undergraduate** at **SLTC Research University** with a passion for building secure and scalable digital solutions. 
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            My journey isn't just about coding; it's about solving real-world problems. With experience in **Full Stack Development** and a creative background in **Video Editing & Content Creation**, I bring a unique perspective to every project I touch.
          </p>

          {/* Quick Stats */}
          <div className="flex gap-8">
            <div>
              <h4 className="text-3xl font-bold text-white">3+</h4>
              <p className="text-sm text-gray-500">Years Coding</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">10+</h4>
              <p className="text-sm text-gray-500">Projects Done</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">5+</h4>
              <p className="text-sm text-gray-500">Volunteering</p>
            </div>
          </div>
        </motion.div>


        {/* RIGHT SIDE: Timeline / Info Cards */}
        <div className="space-y-6">
          
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/30 transition-all flex gap-4"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400 shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Education</h4>
              <p className="text-gray-300 font-medium">BSc (Hons) in Software Engineering</p>
              <p className="text-gray-500 text-sm">SLTC Research University (2022 - Present)</p>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/30 transition-all flex gap-4"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 shrink-0">
              <Briefcase size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Experience</h4>
              <p className="text-gray-300 font-medium">Trainee / Intern</p>
              <p className="text-gray-500 text-sm">People's Bank (IT Support & Banking) | 2022</p>
            </div>
          </motion.div>

          {/* Volunteering Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/30 transition-all flex gap-4"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-red-400 shrink-0">
              <Heart size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Volunteering</h4>
              <p className="text-gray-300 font-medium">Content Creation Team</p>
              <p className="text-gray-500 text-sm">IEEE GISLA & Codemania</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;