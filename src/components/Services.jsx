import React from 'react';
import { Code, Smartphone, Palette, Video, Layers, Globe } from 'lucide-react';

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

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <p className="text-purple-500 font-medium mb-2 tracking-widest uppercase">What I Do</p>
           <h2 className="text-4xl md:text-5xl font-bold">My Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;