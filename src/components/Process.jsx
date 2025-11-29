import React from 'react';
import { Search, Code, Rocket, Settings, Layout, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Understanding your requirements, goals, and target audience through detailed discussions to lay a solid foundation.",
    icon: <Search size={24} />,
    color: "text-blue-400",
    borderColor: "border-blue-500/50",
    shadow: "shadow-blue-500/20"
  },
  {
    id: "02",
    title: "Planning",
    desc: "Creating detailed specifications, wireframes, and architecture diagrams to visualize the structure of your project.",
    icon: <Layout size={24} />,
    color: "text-green-400",
    borderColor: "border-green-500/50",
    shadow: "shadow-green-500/20"
  },
  {
    id: "03",
    title: "Development",
    desc: "Building your solution with clean, efficient code following industry best practices and modern technologies.",
    icon: <Code size={24} />,
    color: "text-orange-400",
    borderColor: "border-orange-500/50",
    shadow: "shadow-orange-500/20"
  },
  {
    id: "04",
    title: "Testing & Launch",
    desc: "Rigorous testing across devices and environments to ensure a bug-free experience before the final deployment.",
    icon: <Rocket size={24} />,
    color: "text-purple-400",
    borderColor: "border-purple-500/50",
    shadow: "shadow-purple-500/20"
  },
  {
    id: "05",
    title: "Maintenance",
    desc: "Ongoing support, updates, and optimization to keep your solution running smoothly and efficiently.",
    icon: <Settings size={24} />,
    color: "text-red-400",
    borderColor: "border-red-500/50",
    shadow: "shadow-red-500/20"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
           <p className="text-orange-500 font-medium mb-3 tracking-widest uppercase"></p>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Process</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto">
             A proven methodology that ensures quality, efficiency, and client satisfaction at every stage of the project lifecycle.
           </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2"></div>

          {/* Steps Loop */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                {/* 1. TEXT CONTENT SIDE */}
                <div className={`pl-20 md:pl-0 md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                  <h3 className={`text-2xl font-bold mb-3 ${step.color}`}>{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

                {/* 2. CENTER ICON NODE */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-black border-4 border-gray-900 flex items-center justify-center relative z-10 ${step.shadow} shadow-lg`}>
                    <div className={`w-12 h-12 rounded-full border-2 ${step.borderColor} flex items-center justify-center bg-gray-900`}>
                      <span className={step.color}>{step.icon}</span>
                    </div>
                  </div>
                </div>

                {/* 3. EMPTY SPACE (For balance on desktop) */}
                <div className="hidden md:block md:w-5/12"></div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA Button at the Bottom */}
        <div className="mt-20 text-center">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            Start Your Project <ArrowRight size={20} />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Process;