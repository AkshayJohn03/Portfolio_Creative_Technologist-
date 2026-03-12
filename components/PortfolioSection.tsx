import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface PortfolioSectionProps {
  onOpenCaseStudy: (projectId: string) => void;
  onOpenVisualWorks: () => void;
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

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenCaseStudy, onOpenVisualWorks }) => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [displayProjects, setDisplayProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Order for Selected Works (3x3 grid)
  const orderedIds = [
    'ux-2', // ThriftHaven
    'ux-mcd', // McDonalds
    'ux-globotel', // Service blueprint
    'ux-neuropods', // Neuropod
    'ux-storyboard', // Story board
    'ux-lifelink', // Lifelynk
    'ai-zia', // Zia llm
    'ai-rift', // RIFT
    'visual-gallery' // Visual Gallery
  ];

  const regularProjects = orderedIds.map(id => {
    if (id === 'visual-gallery') {
      return {
        id: 'visual-gallery',
        title: "View All Visual Gallery",
        category: ProjectCategory.VISUAL,
        description: 'A dedicated collection of pure visual explorations, motion graphics, and static design.',
        fullDescription: '',
        imageUrl: 'multi',
        link: '#',
        tags: ['Visual Design', 'Illustrations', 'Motion'],
        hasInternalPage: false
      } as any;
    }
    return PROJECTS.find(p => p.id === id);
  }).filter(Boolean) as Project[];

  useEffect(() => {
    setIsExiting(true);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setDisplayProjects(regularProjects);
      setActiveTab('ALL');
      setIsLoading(false);
      setIsExiting(false);
    }, 400);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterChange = (category: string) => {
    if (category === activeTab) return;
    setIsExiting(true);
    setActiveTab(category);
    setTimeout(() => {
      const newProjects = category === 'ALL'
        ? regularProjects
        : regularProjects.filter(p => p.category === category);

      setDisplayProjects(newProjects);
      setIsExiting(false);
    }, 300);
  };

  const handleProjectClick = (project: Project) => {
    if (project.id === 'visual-gallery') {
      onOpenVisualWorks();
      return;
    }
    if (project.hasInternalPage) {
      onOpenCaseStudy(project.id);
    } else {
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
    <section id="work" className="py-20 sm:py-32 bg-gray-100 dark:bg-[#111] relative z-10 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 sm:mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
              Selected Works
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
              A fusion of strategic visual storytelling, pixel-perfect digital interaction, and AI innovation.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
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

            <button
              onClick={onOpenVisualWorks}
              className="px-6 py-2 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-xs font-semibold flex items-center gap-2 group whitespace-nowrap shadow-sm"
            >
              View Full Visual Gallery
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        <div className={`flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 overflow-x-auto sm:overflow-visible pb-10 sm:pb-0 snap-x snap-mandatory scrollbar-mobile transition-all duration-500 ease-in-out ${isExiting ? 'opacity-0 translate-y-4 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'}`}>
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="snap-start shrink-0 w-[85vw] sm:w-auto">
                <SkeletonCard />
              </div>
            ))
          ) : (
            displayProjects.map((project) => (
              <div key={`${project.id}-${activeTab}`} className="snap-start shrink-0 w-[85vw] sm:w-auto h-[450px] sm:h-auto">
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
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
