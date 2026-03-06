
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface PortfolioSectionProps {
  onOpenCaseStudy: (projectId: string) => void;
}

const SkeletonCard: React.FC = () => (
  <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm">
    <div className="aspect-w-16 aspect-h-10 w-full h-56 sm:h-64 bg-gray-200 dark:bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '1000px 100%' }}></div>
    </div>

    <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-4">
      <div className="h-4 w-24 bg-gray-200 dark:bg-white/10 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '1000px 100%' }}></div>
      </div>
      <div className="h-7 w-3/4 bg-gray-200 dark:bg-white/10 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '1000px 100%' }}></div>
      </div>
      <div className="space-y-2 pt-2">
        <div className="h-3 w-full bg-gray-100 dark:bg-white/5 rounded relative overflow-hidden"></div>
        <div className="h-3 w-5/6 bg-gray-100 dark:bg-white/5 rounded relative overflow-hidden"></div>
      </div>
    </div>
  </div>
);

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [displayProjects, setDisplayProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsExiting(true);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setDisplayProjects(PROJECTS);
      setActiveTab('ALL');
      setIsLoading(false);
      setIsExiting(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (category: string) => {
    if (category === activeTab) return;
    setIsExiting(true);
    setActiveTab(category);
    setTimeout(() => {
      const newProjects = category === 'ALL'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === category);

      setDisplayProjects(newProjects);
      setIsExiting(false);
    }, 300);
  };

  const handleProjectClick = (project: Project) => {
    // If it's a featured case study, go directly to it
    if (project.hasInternalPage) {
      onOpenCaseStudy(project.id);
    } else {
      // Otherwise open the summary modal
      setSelectedProject(project);
    }
  };

  const categories = [
    { label: 'All Works', value: 'ALL' },
    { label: 'UX / UI', value: ProjectCategory.UX },
    { label: 'Visual', value: ProjectCategory.VISUAL },
    { label: 'AI/ML', value: ProjectCategory.AI_ML }
  ];

  return (
    <section id="work" className="py-20 sm:py-32 bg-white dark:bg-dark relative z-10 transition-colors duration-500">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 sm:mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
              Selected Works
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
              A fusion of strategic visual storytelling, pixel-perfect digital interaction, and AI innovation.
            </p>
          </div>

          <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto no-scrollbar mask-fade-right">
            {categories.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleFilterChange(tab.value)}
                className={`pb-2 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase border-b-2 transition-all duration-300 whitespace-nowrap ${activeTab === tab.value ? 'border-accent text-gray-900 dark:text-white' : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 transition-all duration-500 ease-in-out ${isExiting ? 'opacity-0 translate-y-4 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'}`}>
          {isLoading ? (
            Array(3).fill(0).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            displayProjects.map((project) => (
              <ProjectCard
                key={`${project.id}-${activeTab}`}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))
          )}
        </div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenCaseStudy={onOpenCaseStudy}
      />
    </section>
  );
};

export default PortfolioSection;
