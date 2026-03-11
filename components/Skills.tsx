import React from 'react';
import { InfiniteSlider } from './ui/InfiniteSlider';

// Importing icons for the unified ecosystem
import {
  SiPytorch, SiTensorflow, SiPython, SiHuggingface,
  SiPandas, SiNumpy, SiFigma,
  SiWebflow, SiDocker, SiGit, SiFlask,
  SiMiro, SiHtml5, SiCss, SiFramer, SiNotion, SiSlack, SiHotjar, SiGooglecloud
} from 'react-icons/si';

import { Cpu, TerminalSquare, Box, Wand2, Layers, Network } from 'lucide-react';

const AdobeIcon = ({ text, color }: { text: string, color: string }) => (
  <div className="w-16 h-16 rounded-xl bg-transparent flex flex-col items-center justify-center border-2 border-transparent transition-all duration-300 relative group-hover:shadow-sm" style={{ ['--hover-color' as any]: color }}>
    <span className="font-bold text-3xl font-sans text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-[var(--hover-color)]">{text}</span>
  </div>
);

const Skills: React.FC = () => {

  const iconItems = [
    { name: 'Python', icon: <SiPython size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#3776AB] transition-colors" /> },
    { name: 'HTML & CSS', icon: <div className="flex gap-2"><SiHtml5 size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#E34F26] transition-colors" /><SiCss size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#1572B6] transition-colors" /></div> },
    { name: 'PyTorch', icon: <SiPytorch size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#EE4C2C] transition-colors" /> },
    { name: 'CUDA', icon: <Cpu size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#76B900] transition-colors" /> },
    { name: 'Transformers', icon: <Network size={64} className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors" /> },
    { name: 'Google Cloud', icon: <SiGooglecloud size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#4285F4] transition-colors" /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#FF6F00] transition-colors" /> },
    { name: 'LangChain', icon: <TerminalSquare size={64} className="text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors" /> },
    { name: 'HuggingFace', icon: <SiHuggingface size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#FFD21E] transition-colors" /> },
    { name: 'Pandas', icon: <SiPandas size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#150458] dark:hover:text-white transition-colors" /> },
    { name: 'NumPy', icon: <SiNumpy size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#013243] dark:hover:text-[#4d77cf] transition-colors" /> },
    { name: 'Photoshop', icon: <AdobeIcon text="Ps" color="#31A8FF" /> },
    { name: 'Illustrator', icon: <AdobeIcon text="Ai" color="#FF9A00" /> },
    { name: 'After Effects', icon: <AdobeIcon text="Ae" color="#9999FF" /> },
    { name: 'Premiere Pro', icon: <AdobeIcon text="Pr" color="#EA77FF" /> },
    { name: 'Figma', icon: <SiFigma size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#F24E1E] transition-colors" /> },
    { name: 'ProtoPie', icon: <Layers size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#F1557A] transition-colors" /> },
    { name: 'Framer', icon: <SiFramer size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#0055FF] transition-colors" /> },
    { name: 'Miro', icon: <SiMiro size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#FFD02F] transition-colors" /> },
    { name: 'Midjourney', icon: <Wand2 size={64} className="text-gray-400 dark:text-gray-500 hover:text-purple-500 transition-colors" /> },
    { name: 'Notion', icon: <SiNotion size={64} className="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors" /> },
    { name: 'Slack', icon: <SiSlack size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#E01E5A] transition-colors" /> },
    { name: 'Hotjar', icon: <SiHotjar size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#FD3A5C] transition-colors" /> },
    { name: 'Spline 3D', icon: <Box size={64} className="text-gray-400 dark:text-gray-500 hover:text-pink-500 transition-colors" /> },
    { name: 'Webflow', icon: <SiWebflow size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#4353FF] transition-colors" /> },
    { name: 'Docker', icon: <SiDocker size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#2496ED] transition-colors" /> },
    { name: 'Git', icon: <SiGit size={64} className="text-gray-400 dark:text-gray-500 hover:text-[#F05032] transition-colors" /> },
    { name: 'Flask', icon: <SiFlask size={64} className="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors" /> },
    { name: 'Optuna', icon: <Layers size={64} className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 transition-colors" /> }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-gray-50/50 dark:bg-dark border-y border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden w-full relative z-10">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl mb-16 sm:mb-24 text-center">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
          Tools & Systems Map
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          A comprehensive ecosystem spanning machine learning frameworks, visual design pipelines, and robust deployment architectures.
        </p>
      </div>

      {/* Unified Single Layer Full Width Icon Slider */}
      <div className="w-full relative">
        {/* Subtle fade edges for the slider */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none"></div>

        <InfiniteSlider duration={80} gap={60} durationOnHover={150} direction="horizontal" className="py-8">
          {iconItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center min-w-32 group cursor-pointer" title={item.name}>
              <div className="transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm mb-4">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase group-hover:text-accent transition-colors duration-300">
                {item.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default Skills;
