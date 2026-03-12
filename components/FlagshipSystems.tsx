import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import ProjectModal from './ProjectModal';
import { Star, ArrowUpRight } from 'lucide-react';

interface FlagshipSystemsProps {
    onOpenCaseStudy: (projectId: string) => void;
}

const FlagshipSystems: React.FC<FlagshipSystemsProps> = ({ onOpenCaseStudy }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const flagshipIds = ['ai-zia', 'ai-rift', 'ai-1'];
    const flagshipProjects = flagshipIds
        .map(id => PROJECTS.find(p => p.id === id))
        .filter((p): p is Project => p !== undefined);

    const handleProjectClick = (project: Project) => {
        if (project.hasInternalPage) {
            onOpenCaseStudy(project.id);
        } else {
            setSelectedProject(project);
        }
    };

    return (
        <section id="flagship" className="py-24 sm:py-32 bg-gray-50/50 dark:bg-[#050505] relative z-10 border-t border-black/5 dark:border-white/5 overflow-hidden">
            <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
                <div className="mb-10 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Star className="text-accent w-6 h-6" />
                        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white">
                            Flagship Systems
                        </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-light leading-relaxed">
                        Major architectural experiments and fully-engineered AI models. Complex full-stack engineering meets advanced cognitive design.
                    </p>
                </div>
            </div>

            {/* Grid for desktop, horizontal scroll for mobile */}
            <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
                <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible pb-10 sm:pb-0 px-4 sm:px-0 snap-x snap-mandatory scrollbar-mobile" style={{ scrollPaddingLeft: '1rem' }}>
                    {flagshipProjects.map((project) => (
                        <button key={project.id} onClick={() => handleProjectClick(project)} className="snap-start shrink-0 w-[85vw] sm:w-auto h-full text-left group flex flex-col">
                            <div className="relative aspect-video w-full mb-5 rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#111] border border-black/5 dark:border-white/5">
                                <img
                                    src={project.imageUrl || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop'}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-3 right-3 bg-black/80 dark:bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-black/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <span className="text-[10px] text-white font-bold tracking-widest uppercase">Tech Doc</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center justify-between group-hover:text-accent transition-colors">
                                {project.title}
                                <ArrowUpRight size={18} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-accent transition-all duration-300" />
                            </h3>
                            <p className="text-sm text-gray-500 font-light line-clamp-2">{project.description}</p>
                        </button>
                    ))}
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

export default FlagshipSystems;
