
import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy?: (projectId: string) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, onOpenCaseStudy }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Use small timeout for more reliable transition than RAF
      timer = setTimeout(() => setShowContent(true), 10);
    } else {
      setShowContent(false);
      document.body.style.overflow = 'unset';
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const isAiProject = project?.category === ProjectCategory.AI_ML;
  
  const handleViewCaseStudy = (e: React.MouseEvent) => {
    if (project.hasInternalPage && onOpenCaseStudy) {
      e.preventDefault();
      onOpenCaseStudy(project.id);
      onClose();
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 transition-all duration-300 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop - Solid color with slight transparency for depth */}
      <div 
        className="absolute inset-0 bg-white/98 dark:bg-black/98 backdrop-blur-xl" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`relative bg-white dark:bg-[#0f0f0f] w-full h-full md:h-auto md:max-w-5xl md:max-h-[90vh] overflow-y-auto md:rounded-2xl border-none md:border border-black/5 dark:border-white/10 shadow-2xl transform transition-all duration-500 ease-out ${showContent ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        <button 
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 z-50 p-3 bg-white/80 dark:bg-black/80 backdrop-blur rounded-full text-black dark:text-white shadow-lg border border-black/10 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {project && (
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full md:min-h-0">
            {/* Image Section */}
            <div className="h-64 lg:h-auto bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f0f0f] to-transparent lg:hidden"></div>
            </div>

            {/* Info Section */}
            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-between pb-24 md:pb-12 bg-white dark:bg-[#0f0f0f]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6 mt-4 md:mt-0">
                  <span className={`px-3 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase border 
                    ${isAiProject 
                      ? 'bg-green-100 border-green-500 text-green-700 dark:bg-green-900/30 dark:border-green-500/30 dark:text-green-400' 
                      : 'bg-indigo-100 border-indigo-500 text-indigo-700 dark:bg-[#2E2E48] dark:border-[#3E3E68] dark:text-[#8B8BFF]'
                    }`}>
                    {project.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {project.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                      <Layers size={12} className="text-gray-400" /> {tag}
                    </span>
                  ))}
                </div>

                <div className="prose dark:prose-invert mb-8">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-black/5 dark:border-white/10">
                <a 
                  href={project.link} 
                  target={project.hasInternalPage ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  onClick={handleViewCaseStudy}
                  className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300 w-full justify-center group"
                >
                  {project.hasInternalPage ? 'Open Case Study' : 'View External Project'}
                  {project.hasInternalPage ? (
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                  )}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
