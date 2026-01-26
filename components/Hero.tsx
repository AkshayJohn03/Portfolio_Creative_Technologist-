
import React from 'react';
import { ArrowDown, Brain, Palette } from 'lucide-react';

interface HeroProps {
  isAiMode: boolean;
  toggleMode: () => void;
}

const Hero: React.FC<HeroProps> = ({ isAiMode, toggleMode }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50/30 dark:bg-dark/50 px-5 transition-colors duration-500">
      {/* Background Blobs */}
      <div className="absolute top-[10%] left-[5%] sm:left-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] sm:blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[5%] sm:right-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] sm:blur-[120px] animate-pulse animation-delay-2000"></div>

      <div className="z-10 text-center max-w-6xl mx-auto w-full pt-20 md:pt-0">
        <div className="mb-6 sm:mb-8 inline-block px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm animate-fade-in-up">
          <p className="text-accent font-bold tracking-[0.25em] text-[10px] sm:text-xs lg:text-sm uppercase">
            {isAiMode ? 'AI/ML Engineer • Product Designer' : 'Product Designer • AI/ML Engineer'}
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold leading-[1.1] sm:leading-tight mb-6 sm:mb-10 text-gray-900 dark:text-white transition-all duration-500 tracking-tighter">
          Bridging Intelligence <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-700 via-gray-900 to-black dark:from-white dark:via-gray-400 dark:to-gray-600">
            & Human Design.
          </span>
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed font-light px-4 sm:px-0">
          {isAiMode 
            ? "Engineering scalable deep learning architectures and custom LLMs. Transforming data into intelligent, human-centered solutions."
            : "Crafting intuitive digital experiences and pixel-perfect interfaces. Where aesthetic precision meets functional clarity."
          }
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none">
          <a 
            href="#work" 
            className="w-full sm:w-auto px-10 py-4.5 bg-gray-900 dark:bg-white text-white dark:text-dark font-bold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 hover:scale-[1.03] active:scale-95 transition-all duration-300 text-center shadow-lg dark:shadow-white/10 min-w-[180px]"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4.5 border border-black/10 dark:border-white/20 text-gray-900 dark:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 text-center min-w-[180px]"
          >
            Contact Me
          </a>
        </div>

        <button
          onClick={toggleMode}
          className="mt-12 group flex items-center justify-center gap-3 mx-auto text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 hover:text-accent transition-colors p-3"
        >
          <span className="p-2 rounded-full bg-gray-100 dark:bg-white/5 group-hover:bg-accent/10 transition-colors">
            {isAiMode ? <Palette size={14} /> : <Brain size={14} />}
          </span>
          {isAiMode ? 'Designer Mode' : 'AI Engineer Mode'}
        </button>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 animate-bounce cursor-pointer hidden sm:flex flex-col items-center gap-2" onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scroll</span>
        <ArrowDown className="text-gray-300 dark:text-gray-600 w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
