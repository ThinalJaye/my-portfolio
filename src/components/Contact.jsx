import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  // Form States
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // ඔයාගේ Access Key එක
    formData.append("access_key", "be888e18-41e0-451e-bb71-27c02d177149");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✅");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong! ❌");
      }
    } catch (error) {
      setResult("Connection Error! Please try again.");
    }

    setIsSubmitting(false);
    setTimeout(() => { setResult(""); }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Glow - Moved to Left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: Contact Info (Left Aligned) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <p className="text-purple-500 font-medium mb-4 tracking-wider uppercase text-sm">Get in Touch</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              together.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
            Have a project in mind or just want to say hi? Fill out the form, and I'll get back to you as soon as possible.
          </p>

          {/* Contact Details (Vertical List for Left Align) */}
          <div className="space-y-6 mb-12">
            
            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-purple-400 border border-gray-800 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:thinaljaye5621@gmail.com" className="font-semibold text-lg hover:text-white transition-colors">thinaljaye5621@gmail.com</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-green-500 border border-gray-800 shrink-0">
                <FaWhatsapp size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
                <a href="https://wa.me/94718731798" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-white transition-colors">+94 71 873 1798</a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-purple-400 border border-gray-800 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="font-semibold text-lg">Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Social Icons (Left Aligned) */}
          <div className="flex gap-5">
             <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-800"><Github size={20} /></a>
             <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-800"><Linkedin size={20} /></a>
             <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-800"><Facebook size={20} /></a>
          </div>
        </motion.div>


        {/* --- RIGHT SIDE: THE FORM (Compact) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-lg bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 relative overflow-hidden shadow-2xl ml-auto"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>

          <form onSubmit={onSubmit} className="space-y-5 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" required
                  placeholder="John Doe" 
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 ml-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" required
                  placeholder="john@example.com" 
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 ml-1">Phone Number</label>
              <input 
                type="text" 
                name="subject" required
                placeholder="Moblie" 
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 ml-1">Message</label>
              <textarea 
                rows="4" 
                name="message" required
                placeholder="Tell me about your project..." 
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
            </button>

            {result && (
                <p className={`text-center text-sm mt-4 font-medium ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                    {result}
                </p>
            )}
          </form>
        </motion.div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-24 border-t border-gray-900 pt-6 text-center text-gray-600 text-xs flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>© 2025 Thinal Jayamanna. All rights reserved.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-3 md:mt-0 flex items-center gap-2 hover:text-white transition-colors"
        >
          Back to Top <ArrowUp size={14} />
        </button>
      </div>

    </section>
  );
};

export default Contact;