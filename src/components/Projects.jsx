import React, { useRef, useState, memo, useCallback, useEffect } from 'react';
import { Github, ExternalLink, Layers, Cloud, Cpu, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { animate } from "motion/react";

// --- 1. UTILITY FUNCTION (CN) ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- 2. GLOWING EFFECT COMPONENT (No Changes) ---
const GlowingEffect = memo(({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = "default",
  glow = false,
  className,
  movementDuration = 2,
  borderWidth = 1,
  disabled = false
}) => {
  const containerRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(0);

  const handleMove = useCallback((e) => {
    if (!containerRef.current) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const element = containerRef.current;
      if (!element) return;

      const { left, top, width, height } = element.getBoundingClientRect();
      const mouseX = e?.x ?? lastPosition.current.x;
      const mouseY = e?.y ?? lastPosition.current.y;

      if (e) {
        lastPosition.current = { x: mouseX, y: mouseY };
      }

      const center = [left + width * 0.5, top + height * 0.5];
      const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
      const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

      if (distanceFromCenter < inactiveRadius) {
        element.style.setProperty("--active", "0");
        return;
      }

      const isActive =
        mouseX > left - proximity &&
        mouseX < left + width + proximity &&
        mouseY > top - proximity &&
        mouseY < top + height + proximity;

      element.style.setProperty("--active", isActive ? "1" : "0");

      if (!isActive) return;

      const currentAngle =
        parseFloat(element.style.getPropertyValue("--start")) || 0;
      let targetAngle =
        (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
          Math.PI +
        90;

      const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
      const newAngle = currentAngle + angleDiff;

      animate(currentAngle, newAngle, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          element.style.setProperty("--start", String(value));
        },
      });
    });
  }, [inactiveZone, proximity, movementDuration]);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => handleMove();
    const handlePointerMove = (e) => handleMove(e);

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleMove, disabled]);

  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
          glow && "opacity-100",
          variant === "white" && "border-white",
          disabled && "!block"
        )} />
      <div
        ref={containerRef}
        style={{
          "--blur": `${blur}px`,
          "--spread": spread,
          "--start": "0",
          "--active": "0",
          "--glowingeffect-border-width": `${borderWidth}px`,
          "--repeating-conic-gradient-times": "5",
          "--gradient": variant === "white"
            ? `repeating-conic-gradient(from 236.84deg at 50% 50%, var(--black), var(--black) calc(25% / var(--repeating-conic-gradient-times)))`
            : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
              radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
              radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
              radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
              repeating-conic-gradient(from 236.84deg at 50% 50%, #dd7bbb 0%, #d79f1e calc(25% / var(--repeating-conic-gradient-times)), #5a922c calc(50% / var(--repeating-conic-gradient-times)), #4c7894 calc(75% / var(--repeating-conic-gradient-times)), #dd7bbb calc(100% / var(--repeating-conic-gradient-times)))`
        }}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
          glow && "opacity-100",
          blur > 0 && "blur-[var(--blur)] ",
          className,
          disabled && "!hidden"
        )}>
        <div
          className={cn(
            "glow",
            "rounded-[inherit]",
            'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
            "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
            "after:[background:var(--gradient)] after:[background-attachment:fixed]",
            "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
            "after:[mask-clip:padding-box,border-box]",
            "after:[mask-composite:intersect]",
            "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
          )} />
      </div>
    </>
  );
});
GlowingEffect.displayName = "GlowingEffect";


// --- 3. PROJECT DATA (No changes here, images are already defined) ---
const projects = [
  {
    id: 1,
    title: "Secure Cloud Storage",
    category: "WEB / SECURITY",
    desc: "A secure cloud storage system designed with client-side chunk-based encryption to enhance privacy and scalability using AWS S3.",
    tech: ["React.js", "Node.js", "AWS S3", "MongoDB"],
    image: "/project1.png", // Make sure this image exists in public folder
    live: "https://trysafe.vercel.app/",
    github: "#",
    hasLive: true,
    icon: <Cloud className="h-6 w-6 text-blue-400" />
  },
  {
    id: 2,
    title: "Smart Fan Control",
    category: "IOT / AI",
    desc: "A gesture-based fan control system providing touchless operation using Image Processing. (Top 5 - TCC2 Competition).",
    tech: ["Python", "OpenCV", "IoT"],
    image: "/project2.jpg", // Make sure this image exists in public folder
    live: null,
    github: "#",
    hasLive: false,
    icon: <Cpu className="h-6 w-6 text-green-400" />
  },
  {
    id: 3,
    title: "AI Career Guidance",
    category: "MACHINE LEARNING",
    desc: "System to help users identify suitable tech roles based on their personality traits and skills using Python & Flask.",
    tech: ["Python", "Flask", "ML"],
    image: "/project3.jpg", // Make sure this image exists in public folder
    live: "#",
    github: "#",
    hasLive: true,
    icon: <Brain className="h-6 w-6 text-purple-400" />
  }
];

// --- 4. MAIN PROJECTS COMPONENT ---
const Projects = () => {
  return (
    <section className="py-24 bg-black text-white px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <p className="text-purple-500 font-medium mb-2 tracking-widest uppercase">PORTFOLIO</p>
           <h2 className="text-4xl md:text-5xl font-bold">Selected Works</h2>
        </motion.div>

        {/* Grid Layout */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            // Added 'group' here for hover effects on child elements
            <li key={project.id} className="min-h-[14rem] list-none relative group h-full">
              
              {/* Card Container */}
              <div className="relative h-full rounded-3xl border border-gray-800 bg-black p-1">
                
                {/* GLOWING EFFECT */}
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />

                {/* Inner Content */}
                <div className="relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-gray-900/90 p-5">
                  
                  {/* Header: Icon & Links */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className="w-10 h-10 rounded-lg border border-gray-700 bg-gray-800/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                        <a href={project.github} className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-colors border border-gray-700/50 hover:border-gray-600"><Github size={16} /></a>
                        {project.hasLive && (
                          <a href={project.live} target="_blank" rel="noreferrer" className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-colors border border-gray-700/50 hover:border-gray-600"><ExternalLink size={16} /></a>
                        )}
                    </div>
                  </div>

                  {/* ----------- NEW IMAGE SECTION ADDED HERE ----------- */}
                  {/* We use the existing project.image data */}
                  <div className="relative w-full h-44 mt-2 rounded-xl overflow-hidden border border-gray-800/50 group-hover:border-gray-700/80 transition-colors duration-300">
                    {/* Image with hover zoom effect */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Subtle dark overlay gradient so text remains readable if it overlaps later */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                   {/* ----------- END IMAGE SECTION ----------- */}


                  {/* Middle: Title & Desc */}
                  <div className="space-y-2 relative z-10">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  {/* Bottom: Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-800/60 relative z-10">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] uppercase font-semibold bg-gray-800/80 text-gray-300 rounded-full border border-gray-700/50">
                          {t}
                        </span>
                    ))}
                  </div>

                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Projects;