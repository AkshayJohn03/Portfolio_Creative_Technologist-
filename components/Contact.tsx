
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 3000);
      }, 1500);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black pt-20 sm:pt-32 pb-10 sm:pb-16 border-t border-white/5 relative z-10 transition-colors duration-500">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 sm:mb-32 gap-16 lg:gap-24">
          
          {/* Left: Heading & Info */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 text-white tracking-tighter leading-[1.1]">
              Let's build <br className="hidden sm:block" /> <span className="text-gray-500">something</span> <br className="hidden sm:block" /> intelligent<span className="text-accent">.</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-md text-lg sm:text-xl font-light leading-relaxed">
              Have a high-impact project in mind? Looking for a designer who codes? 
              Reach out and let's craft the future.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:flex lg:flex-col lg:gap-8">
              <a 
                href="mailto:akshay3rishi@gmail.com"
                className="group flex items-center gap-5 text-lg sm:text-xl text-white hover:text-accent transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
                   <Mail size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Email Me</span>
                  akshay3rishi@gmail.com
                </div>
              </a>
               <a 
                href="tel:+919791736311"
                className="group flex items-center gap-5 text-lg sm:text-xl text-white hover:text-accent transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
                   <Phone size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Call Me</span>
                  (+91) 97917 36311
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Send a brief message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-accent transition-all`}
                    placeholder="Enter name"
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5 font-medium"><AlertCircle size={14} /> {errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-accent transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5 font-medium"><AlertCircle size={14} /> {errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Message Details</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-accent transition-all resize-none`}
                  placeholder="Tell me about your project or vision..."
                />
                {errors.message && <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5 font-medium"><AlertCircle size={14} /> {errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full py-5 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-500 text-lg shadow-lg ${
                  isSent ? 'bg-green-600' : 'bg-accent hover:bg-indigo-500 hover:scale-[1.02] active:scale-95'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Processing...' : isSent ? (
                  <>
                    <CheckCircle size={22} /> Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/10 pt-12 text-center md:text-left">
            <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Find Me Online</span>
              <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
                {SOCIAL_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col md:items-end gap-2 text-gray-600 text-[11px] sm:text-xs font-bold uppercase tracking-widest">
               <p>© {new Date().getFullYear()} Akshay John.</p>
               <p className="text-gray-700">Powered by React & Gemini Flash 2.5</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
