import React, { useRef, useState } from 'react';
import { Code, Smartphone, Palette, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code size={32} />,
    title: "Full Stack Development",
    desc: "Building robust web applications using React, Node.js, and modern databases."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Dev",
    desc: "Creating cross-platform mobile apps with Flutter & Dart for iOS and Android."
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    desc: "Designing intuitive and aesthetic user interfaces using Figma."
  },
  {
    icon: <Video size={32} />,
    title: "Content Creation",
    desc: "Professional video editing and tech content creation for social media."
  }
];

// --- MODIFIED CARD COMPONENT ---
const ServiceCard = ({ service, index }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-full rounded-2xl border border-gray-800 bg-gray-900 p-[2px] overflow-hidden group"
    >
      {/* --- ASH/GRAY SPOTLIGHT GLOW (Changed Section) --- */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl z-10"
        style={{
          opacity,
          // RGB වර්ණ ඉවත් කර සියුම් අළු/සුදු පැහැයක් (Ash Color) යෙදුවා
          // rgba(255, 255, 255, 0.15) මගින් ඉතා සියුම් ආලෝකයක් ලබා දේ
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`,
        }}
      />
      
      {/* INNER CONTENT */}
      <div className="relative h-full rounded-[14px] bg-[#0a0a0a] p-8 flex flex-col justify-between z-20 h-full">
        
        {/* Inner Colorful Blob (Subtle background) */}
        <div className="absolute top-0 right-0 -mr-3 -mt-3 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div>
          {/* Icon Container */}
          <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-500 mb-6 shadow-lg border border-gray-800 group-hover:border-gray-600 group-hover:scale-110 relative overflow-hidden">
            {/* Icon Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                {service.icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <p className="text-purple-500 font-medium mb-2 tracking-widest uppercase">What I Do</p>
           <h2 className="text-4xl md:text-5xl font-bold">My Services</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;