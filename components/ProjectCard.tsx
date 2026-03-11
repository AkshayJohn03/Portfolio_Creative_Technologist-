
import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable parallax on touch devices to prevent jumping
    if (!cardRef.current || window.matchMedia('(pointer: coarse)').matches) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const moveX = (0.5 - x) * 15;
    const moveY = (0.5 - y) * 15;
    setTransform({ x: moveX, y: moveY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onClick(project)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-accent/40 cursor-pointer flex flex-col transition-all duration-700 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] hover:-translate-y-2 h-full"
    >
      <div className="aspect-[16/10] w-full overflow-hidden relative">
        <div
          className="w-full h-full transition-transform duration-1000 ease-out"
          style={{ transform: `scale(${isHovered ? 1.1 : 1})` }}
        >
          {project.imageUrl === 'multi' ? (
            <div
              className="w-full h-full grid grid-cols-2 grid-rows-2 gap-[2px] p-0 bg-transparent transition-transform duration-150 ease-linear"
              style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}
            >
              <img src="./visuals/BottleMockup.jpg" className="w-full h-full object-cover" loading="lazy" />
              <img src="./visuals/JagsLogo.jpg" className="w-full h-full object-cover" loading="lazy" />
              <img src="./visuals/SportwearPoster.jpg" className="w-full h-full object-cover" loading="lazy" />
              <img src="./visuals/WaffleLogo.jpg" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ) : (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-150 ease-linear"
              style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}
              loading="lazy"
            />
          )}
        </div>

        {/* Overlay - Desktop only or touch reveal */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
            {project.id === 'visual-gallery' ? 'Explore Full Gallery' : 'Explore Case Study'} <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase bg-accent/10 px-2 py-1 rounded border border-accent/20">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6 line-clamp-2 sm:line-clamp-3 flex-1 leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] px-3 py-1 bg-gray-50 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 border border-black/5 dark:border-white/10 group-hover:border-accent/20 transition-all"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && <span className="text-[10px] text-gray-400 self-center">+{project.tags.length - 3}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
