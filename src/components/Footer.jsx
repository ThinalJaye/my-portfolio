import React from 'react';
import { Mail, Github, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* 1. Social Icons (Now at the top) */}
        <div className="flex gap-8 mb-8">
          <a href="https://github.com/ThinalJaye" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thinal-jayamanna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Facebook size={20} />
          </a>
          <a href="mailto:thinaljaye5621@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>

        {/* 2. Copyright & Privacy */}
        <div className="text-xs text-gray-600 flex flex-col md:flex-row gap-4 items-center">
          <p>© 2025 Thinal Jayamanna. All rights reserved.</p>
          <div className="hidden md:block w-1 h-1 bg-gray-800 rounded-full"></div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;