import React, { useEffect, useRef, useState } from 'react';
import { Search, Code, Rocket, Settings, Layout, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- TIMELINE COMPONENT (Line Shifted to Left) ---
export const Timeline = ({ data }) => {
  const ref = useRef(null); 
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight); 
    }
    const handleResize = () => {
        if (ref.current) setHeight(ref.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["start 0.5", "end 0.5"], 
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    // Outer container keeps padding, Inner container restricts width and centers everything
    <div className="w-full bg-black font-sans px-6"> 
      {/* Making the main content flow narrow and centered (max-w-md) */}
      <div ref={ref} className="relative max-w-md mx-auto pb-20"> 
        
        {/* --- Line & Beam (Anchored to Left Edge of the max-w-md container) --- */}
        <div
          style={{ height: height + "px" }}
          // Anchor point is now LEFT edge (left-0)
          // Thickness increased to w-1 (4px)
          className="absolute left-0 top-0 overflow-hidden w-1 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated Beam */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-1 bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>


        {/* --- Steps Loop (Content Pushed Right) --- */}
        {data.map((item, index) => (
          // Steps are full width of the max-w-md container
          <div key={index} className="relative z-10 w-full py-10">
            
            {/* 1. Center Dot (Anchored to the left line, offset by -50%) */}
            <div className="absolute left-0 top-0 transform -translate-x-1/2 flex items-center justify-center -mt-2">
                <div className="h-10 w-10 rounded-full bg-black border border-neutral-600 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-600 p-2" />
                </div>
            </div>

            {/* 2. Title (Pushed right with padding) */}
            <h3 className="text-2xl md:text-3xl font-bold text-left text-neutral-300 mb-4 mt-8 pl-10"> 
                {item.title}
            </h3>
            
            {/* 3. Content Box (Pushed right with padding) */}
            <div className="relative pl-10">
                {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PROCESS COMPONENT ---
const Process = () => {

  // Data for the Timeline Component
  const timelineData = [
    {
      title: "Discovery",
      content: (
        <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-white/30 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                <Search size={24} />
             </div>
             <span className="text-sm font-mono text-gray-500">STEP 01</span>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed">
            Understanding your requirements, goals, and target audience through detailed discussions to lay a solid foundation.
          </p>
        </div>
      ),
    },
    {
      title: "Planning",
      content: (
        <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-white/30 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                <Layout size={24} />
             </div>
             <span className="text-sm font-mono text-gray-500">STEP 02</span>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed">
            Creating detailed specifications, wireframes, and architecture diagrams to visualize the structure of your project.
          </p>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-white/30 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                <Code size={24} />
             </div>
             <span className="text-sm font-mono text-gray-500">STEP 03</span>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed">
            Building your solution with clean, efficient code following industry best practices and modern technologies.
          </p>
        </div>
      ),
    },
    {
      title: "Testing",
      content: (
        <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-white/30 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                <Rocket size={24} />
             </div>
             <span className="text-sm font-mono text-gray-500">STEP 04</span>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed">
            Rigorous testing across devices and environments to ensure a bug-free experience before the final deployment.
          </p>
        </div>
      ),
    },
    {
      title: "Maintenance",
      content: (
        <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-white/30 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                <Settings size={24} />
             </div>
             <span className="text-sm font-mono text-gray-500">STEP 05</span>
          </div>
          <p className="text-neutral-300 text-base leading-relaxed">
            Ongoing support, updates, and optimization to keep your solution running smoothly and efficiently.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="bg-black text-white relative overflow-hidden pt-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black pointer-events-none"></div>

      <div className="relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 px-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Process</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto">
             A proven methodology that ensures quality, efficiency, and client satisfaction at every stage.
           </p>
        </motion.div>

        {/* TIMELINE COMPONENT */}
        <Timeline data={timelineData} />

        {/* CTA Button */}
        <div className="text-center pb-24">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all"
          >
            Start Your Project <ArrowRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;