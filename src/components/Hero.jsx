import React, { useState } from 'react';
import { Mail, ArrowRight, Github, Linkedin, Facebook, ChevronDown, Download } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { clsx } from "clsx"; 
import { twMerge } from "tailwind-merge";

// Brand Icons
import { FaReact, FaJava, FaNodeJs, FaPython, FaDocker, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb, SiJavascript, SiGraphql } from "react-icons/si";

// --- UTILS ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- NAVBAR COMPONENT ---
function Navbar() {
  const [active, setActive] = useState(null);
  const navItems = ['Home', 'Projects', 'Services', 'Skills', 'Process', 'About', 'Contact'];

  // --- SCROLL LOGIC ---
  const { scrollY } = useScroll();
  const sideOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const sidePointerEvents = useTransform(scrollY, (y) => (y > 100 ? "none" : "auto"));
  const sideY = useTransform(scrollY, [0, 100], [0, -20]);

  return (
    <div className="fixed top-6 inset-x-0 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      <nav className="w-full max-w-7xl flex items-center justify-between">
        
        {/* PART 1: LEFT - Email Section */}
        <motion.div 
          style={{ opacity: sideOpacity, y: sideY, pointerEvents: sidePointerEvents }}
          className="hidden lg:flex items-center gap-3 group cursor-pointer pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300">
            <Mail size={16} className="text-gray-300 group-hover:text-white" />
          </div>
          <a href="mailto:thinaljaye5621@gmail.com" className="text-gray-300 font-medium text-sm tracking-wide hover:text-white transition-colors drop-shadow-md">
            thinaljaye5621@gmail.com
          </a>
        </motion.div>
        
        <div className="lg:hidden"></div>

        {/* PART 2: CENTER - Navigation Links with "LAWATA" (Subtle) RGB EFFECT */}
        <div className="hidden md:block pointer-events-auto relative z-50">
            {/* Border padding set to 1.5px for a fine line */}
            <div className="relative p-[1.5px] rounded-full overflow-hidden">
                
                {/* UPDATES HERE:
                   - opacity-30: Increased slightly so it shows "tikak lawata" (visible but soft).
                   - blur-[8px]: Keeps the glow smooth.
                   - animate-[spin_8s...]: Smooth rotation.
                */}
                <div className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_17%,#00FF00_33%,#00FFFF_50%,#0000FF_67%,#FF00FF_83%,#FF0000_100%)] opacity-30 blur-[8px]" />

                {/* Inner Menu */}
                <ul className="relative h-full w-full bg-black/80 backdrop-blur-2xl rounded-full flex items-center gap-1 px-3 py-2">
                    {navItems.map((item) => (
                        <li key={item}>
                        <a 
                            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                            onMouseEnter={() => setActive(item)}
                            onMouseLeave={() => setActive(null)}
                            className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors block"
                        >
                            <span className="relative z-10">{item}</span>
                            {active === item && (
                            <motion.div
                                layoutId="active-nav"
                                className="absolute inset-0 bg-white/10 rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            )}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* PART 3: RIGHT - Download CV Button */}
        <motion.a
          style={{ opacity: sideOpacity, y: sideY, pointerEvents: sidePointerEvents }}
          href="/cv.pdf"
          download="Thinal_Jayamanna_CV.pdf"
          className="pointer-events-auto group flex items-center gap-2 px-6 py-3 bg-[#1e2330] border border-orange-500/30 rounded-full text-sm font-bold text-[#f97316] hover:bg-[#f97316] hover:text-white hover:border-transparent transition-colors duration-300 shadow-lg shadow-orange-900/10 backdrop-blur-md"
        >
           <Download size={16} className="group-hover:scale-110 transition-transform" />
           <span>Download CV</span>
        </motion.a>

      </nav>
    </div>
  );
}

const Hero = () => {
  // --- MOUSE ANIMATION SETUP ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  // Stars Generation
  const stars = [...Array(50)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatAnimation = (duration, delay = 0) => ({
    y: [0, -10, 0],
    transition: { duration: duration, delay: delay, repeat: Infinity, ease: "easeInOut" }
  });

  const bounceAnimation = {
    y: [0, 8, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  };

  // --- ICON POSITIONS ---
  const iconConfigs = [
    { Icon: FaReact, color: "cyan", size: 28, position: { top: "10%", left: "25%" }, depth: "close", delay: 0 },
    { Icon: FaJava, color: "red", size: 24, position: { top: "12%", right: "30%" }, depth: "far", delay: 0.5 },
    { Icon: FaNodeJs, color: "green", size: 32, position: { top: "30%", right: "10%" }, depth: "close", delay: 0.2 },
    { Icon: FaPython, color: "blue", size: 26, position: { top: "55%", right: "5%" }, depth: "medium", delay: 0.8 },
    { Icon: FaDocker, color: "blue", size: 30, position: { bottom: "20%", right: "12%" }, depth: "close", delay: 0.3 },
    { Icon: FaPhp, color: "indigo", size: 22, position: { bottom: "10%", right: "35%" }, depth: "far", delay: 0.7 },
    { Icon: SiTypescript, color: "blue", size: 20, position: { bottom: "5%", right: "50%" }, depth: "far", delay: 0.4 }, 
    { Icon: SiMysql, color: "blue", size: 28, position: { bottom: "10%", left: "35%" }, depth: "medium", delay: 0.6 },
    { Icon: SiMongodb, color: "green", size: 26, position: { bottom: "20%", left: "15%" }, depth: "medium", delay: 0.9 },
    { Icon: SiJavascript, color: "yellow", size: 32, position: { bottom: "40%", left: "8%" }, depth: "close", delay: 0.1 },
    { Icon: SiGraphql, color: "pink", size: 24, position: { top: "35%", left: "10%" }, depth: "far", delay: 0.5 },
    { Icon: FaLaravel, color: "red", size: 28, position: { top: "15%", left: "15%" }, depth: "medium", delay: 0.3 },
  ];

  return (
    <div 
      className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col relative overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      
      {/* --- MOUSE SPOTLIGHT EFFECT --- */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
              radial-gradient(
                600px circle at ${smoothX}px ${smoothY}px,
                rgba(139, 92, 246, 0.15),
                transparent 80%
              )
            `,
        }}
      />

      {/* --- BRIGHTER STARS LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: '0 0 6px 1px rgba(255, 255, 255, 0.6)'
            }}
            animate={{ 
              opacity: [0.3, 1, 0.3], 
              scale: [1, 1.2, 1] 
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* --- DARK GRADIENTS --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* --- NAVBAR --- */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 pt-24 md:pt-0">
        
        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="h-[1px] w-8 bg-purple-500"></div>
             <p className="text-purple-400 font-medium tracking-wide text-sm uppercase">Creative Developer</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              <TypeAnimation
                sequence={[
                  'experiences.', 1000,
                  'products.',    1000,
                  'brands.',      1000,
                  'solutions.',   1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            Hi, I’m <span className="text-white font-semibold">Thinal Jayamanna</span>. 
            A Software Engineering Undergraduate creating modern, user-friendly solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-all"
            >
              Let's Talk <ArrowRight size={18} />
            </motion.a>
            
            <div className="flex gap-4">
               <motion.a whileHover={{ y: -5 }} href="https://github.com/ThinalJaye" target="_blank" className="p-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white text-gray-400 transition-all"><Github size={20} /></motion.a>
               <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/thinal-jayamanna" target="_blank" className="p-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white text-gray-400 transition-all"><Linkedin size={20} /></motion.a>
               <motion.a whileHover={{ y: -5 }} href="https://web.facebook.com/" target="_blank" className="p-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white text-gray-400 transition-all"><Facebook size={20} /></motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center items-center relative py-10"
        >
          <div className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px] flex justify-center items-center">
            
            <div className="absolute inset-0 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] z-10 flex justify-center items-center">
               <img 
                 src="/profile.png" 
                 alt="Thinal Jayamanna" 
                 className="w-full h-full object-contain drop-shadow-2xl" 
               />
            </div>

            {iconConfigs.map((config, index) => {
              const { Icon, color, size, position, depth, delay } = config;
              
              const colorStyles = {
                cyan: { text: "text-cyan-400", border: { close: "border-cyan-500/50", medium: "border-cyan-500/40", far: "border-cyan-500/30" }, shadow: { close: "shadow-lg shadow-cyan-500/40", medium: "shadow-md shadow-cyan-500/30", far: "shadow shadow-cyan-500/20" } },
                red: { text: depth === "close" ? "text-red-500" : "text-red-400", border: { close: "border-red-500/50", medium: "border-red-500/40", far: "border-red-500/30" }, shadow: { close: "shadow-lg shadow-red-500/40", medium: "shadow-md shadow-red-500/30", far: "shadow shadow-red-500/20" } },
                green: { text: "text-green-500", border: { close: "border-green-500/50", medium: "border-green-500/40", far: "border-green-500/30" }, shadow: { close: "shadow-lg shadow-green-500/40", medium: "shadow-md shadow-green-500/30", far: "shadow shadow-green-500/20" } },
                blue: { text: depth === "close" ? "text-blue-500" : "text-blue-400", border: { close: "border-blue-500/50", medium: "border-blue-500/40", far: "border-blue-500/30" }, shadow: { close: "shadow-lg shadow-blue-500/40", medium: "shadow-md shadow-blue-500/30", far: "shadow shadow-blue-500/20" } },
                indigo: { text: "text-indigo-400", border: { close: "border-indigo-500/50", medium: "border-indigo-500/40", far: "border-indigo-500/30" }, shadow: { close: "shadow-lg shadow-indigo-500/40", medium: "shadow-md shadow-indigo-500/30", far: "shadow shadow-indigo-500/20" } },
                yellow: { text: "text-yellow-400", border: { close: "border-yellow-500/50", medium: "border-yellow-500/40", far: "border-yellow-500/30" }, shadow: { close: "shadow-lg shadow-yellow-500/40", medium: "shadow-md shadow-yellow-500/30", far: "shadow shadow-yellow-500/20" } },
                pink: { text: "text-pink-500", border: { close: "border-pink-500/50", medium: "border-pink-500/40", far: "border-pink-500/30" }, shadow: { close: "shadow-lg shadow-pink-500/40", medium: "shadow-md shadow-pink-500/30", far: "shadow shadow-pink-500/20" } }
              };

              const depthStyles = {
                close: { opacity: 1, zIndex: 30, scale: 1, padding: "p-3.5" },
                medium: { opacity: 0.85, zIndex: 25, scale: 0.9, padding: "p-3" },
                far: { opacity: 0.7, zIndex: 20, scale: 0.75, padding: "p-2.5" }
              };

              const style = depthStyles[depth];
              const colorStyle = colorStyles[color];
              const duration = 3 + (index * 0.3) % 2;

              return (
                <motion.div
                  key={index}
                  animate={floatAnimation(duration, delay)}
                  className={`absolute ${style.padding} bg-gray-900/90 backdrop-blur-sm rounded-full ${colorStyle.border[depth]} border ${colorStyle.shadow[depth]}`}
                  style={{
                    ...position,
                    opacity: style.opacity,
                    transform: `scale(${style.scale})`,
                    zIndex: style.zIndex,
                  }}
                >
                  <Icon size={size} className={colorStyle.text} />
                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </main>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToProjects}
        animate={bounceAnimation}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors z-30 cursor-pointer group"
        aria-label="Scroll to projects"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center"
        >
          <ChevronDown size={24} className="text-[#f97316] group-hover:text-[#fb923c] transition-colors" />
        </motion.div>
        <span className="text-sm font-medium tracking-wide">Explore My Work</span>
      </motion.button>
    </div>
  );
};

export default Hero;