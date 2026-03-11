import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface VisualWorksProps {
    onBack: () => void;
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
        </div>
    </div>
);

const VisualWorks: React.FC<VisualWorksProps> = ({ onBack, onOpenCaseStudy }) => {
    const [activeTab, setActiveTab] = useState<string>('ALL');
    const [displayProjects, setDisplayProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Filter out Flagship AI Projects for traditional mapping, we separate the raw visuals below
    const visualProjects = PROJECTS.filter(p => p.category === ProjectCategory.UX || p.category === ProjectCategory.AI_ML);

    useEffect(() => {
        setIsExiting(true);
        setIsLoading(true);

        const timer = setTimeout(() => {
            setDisplayProjects(visualProjects);
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
            setIsExiting(false);
        }, 300);
    };

    const handleProjectClick = (project: Project) => {
        if (project.hasInternalPage) {
            onOpenCaseStudy(project.id);
        } else {
            setSelectedProject(project);
        }
    };

    const categories = [
        { label: 'All Works', value: 'ALL' },
        { label: 'UX / UI', value: 'UX / UI' },
        { label: 'AI/ML', value: 'AI/ML' },
        { label: 'Motion & Video', value: 'Motion' },
        { label: 'Brand & Layout', value: 'Brand' },
        { label: 'Manipulation', value: 'Manipulation' }
    ];

    return (
        <div className="bg-white dark:bg-[#080808] min-h-screen pt-32 pb-12 px-4 sm:px-6 transition-colors duration-500 overflow-x-hidden relative">

            {/* Fullscreen Image Modal Overlay */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-zoom-out" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Expanded View" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                </div>
            )}

            <div className="container mx-auto max-w-7xl relative z-10">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <header className="mb-16 animate-fade-in-up">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
                        <div className="max-w-2xl">
                            <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Creative Portfolio</span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                Visual Design & UX
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                A curated gallery of digital products, visual identities, motion graphics and complex photo manipulations.
                            </p>
                        </div>

                        <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto no-scrollbar mask-fade-right">
                            {categories.map((tab) => (
                                <button
                                    key={tab.value}
                                    onClick={() => handleFilterChange(tab.value)}
                                    className={`pb-2 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase border-b-2 transition-all duration-300 whitespace-nowrap ${activeTab === tab.value ? 'border-accent text-gray-900 dark:text-white' : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-400'}`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                <div className={`transition-all duration-500 ease-in-out ${isExiting ? 'opacity-0 translate-y-4 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'}`}>

                    {/* UX / UI and AI/ML Tab (Original Component Look) */}
                    {(activeTab === 'ALL' || activeTab === 'UX / UI' || activeTab === 'AI/ML') && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-16">
                            {isLoading ? (
                                Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
                            ) : (
                                displayProjects
                                    .filter(p => {
                                        if (activeTab === 'ALL') return true;
                                        if (activeTab === 'UX / UI') return p.category === ProjectCategory.UX;
                                        if (activeTab === 'AI/ML') return p.category === ProjectCategory.AI_ML;
                                        return true;
                                    })
                                    .map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            onClick={() => handleProjectClick(project)}
                                        />
                                    ))
                            )}
                        </div>
                    )}

                    {/* Motion & Video Tab */}
                    {(activeTab === 'ALL' || activeTab === 'Motion') && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                            <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm group">
                                <div className="aspect-video relative bg-black flex items-center justify-center">
                                    <video src="./visuals/Motiongraphic.mp4" controls autoPlay muted loop playsInline className="w-full h-full object-contain" />
                                </div>
                                <div className="p-8">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2 block">After Effects</span>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">Brand Motion Graphics</h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-light">Kinetic typography and shape layer animation exploring rhythmic layout transitions.</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm group">
                                <div className="aspect-video relative bg-black flex items-center justify-center">
                                    <video src="./visuals/Video.mp4" controls autoPlay muted loop playsInline className="w-full h-full object-contain" />
                                </div>
                                <div className="p-8">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2 block">Premiere Pro</span>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">Video Editing Reel</h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-light">Fast-paced cutting, color grading, and audio syncing demonstrating narrative flow.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Brand & Layout Tab (Banners, Logos, Packaging, Poster, Infographic) */}
                    {(activeTab === 'ALL' || activeTab === 'Brand') && (
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">

                            {/* Logo: Jags */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/JagsLogo.jpg')}>
                                <img src="./visuals/JagsLogo.jpg" alt="Jags Group Logo" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Identity</span>
                                    <h4 className="text-white font-bold text-xl">Jags Group</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                            {/* Poster: Sportswear */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/SportwearPoster.jpg')}>
                                <img src="./visuals/SportwearPoster.jpg" alt="Sportswear Poster" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Editorial Line</span>
                                    <h4 className="text-white font-bold text-xl">Sportswear Poster</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                            {/* Banner 4 */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/banner4/Benz Billboard copy.jpg')}>
                                <img src="./visuals/banner4/Benz Billboard copy.jpg" alt="Benz Billboard" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Large Format</span>
                                    <h4 className="text-white font-bold text-xl">Automotive Billboard</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                            {/* Logo: Waffle Pop */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/WaffleLogo.jpg')}>
                                <img src="./visuals/WaffleLogo.jpg" alt="Waffle Pop Logo" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Identity</span>
                                    <h4 className="text-white font-bold text-xl">Waffle Pop</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                            {/* Illustration */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/illustration2/arttworkArtboard 1-100.jpg')}>
                                <img src="./visuals/illustration2/arttworkArtboard 1-100.jpg" alt="Illustration" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Digital Vector</span>
                                    <h4 className="text-white font-bold text-xl">Character Illustration</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                            {/* Packaging */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/BottleMockup.jpg')}>
                                <img src="./visuals/BottleMockup.jpg" alt="Ceramic Zest Packaging" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Physical Model</span>
                                    <h4 className="text-white font-bold text-xl">Ceramic Zest Packaging</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                            {/* Banner 3 */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/banner3/Football Banner Relative.jpg')}>
                                <img src="./visuals/banner3/Football Banner Relative.jpg" alt="Football Banner" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Web Banner</span>
                                    <h4 className="text-white font-bold text-xl">Sports Layout</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                            {/* Infographic */}
                            <div className="break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 relative group cursor-zoom-in" onClick={() => setSelectedImage('./visuals/infographic2/Infographic.jpg')}>
                                <img src="./visuals/infographic2/Infographic.jpg" alt="Infographic" className="w-full h-auto object-cover" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Data Visualization</span>
                                    <h4 className="text-white font-bold text-xl">Information Architecture</h4>
                                </div>
                                <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg" size={20} />
                            </div>

                        </div>
                    )}

                    {/* Photo Manipulation Tab */}
                    {(activeTab === 'ALL' || activeTab === 'Manipulation') && (
                        <div className="space-y-16 mb-16">
                            <div className="bg-white dark:bg-[#111] p-8 sm:p-12 border border-black/5 dark:border-white/5 rounded-3xl shadow-sm">
                                <div className="max-w-3xl mb-10">
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Complex Photo Composition</h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-light text-lg">
                                        Merging distinct raw elements through advanced masking, lighting recreation, and color grading to produce a cohesive, cinematic final output.
                                    </p>
                                </div>

                                {/* The Output */}
                                <div className="mb-8 w-full rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 group relative cursor-zoom-in" onClick={() => setSelectedImage('./visuals/photomanip_output.jpg')}>
                                    <img src="./visuals/photomanip_output.jpg" alt="Final Composition Output" className="w-full h-auto object-cover max-h-[70vh]" />
                                    <div className="absolute top-4 right-4 bg-black/80 text-white backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                                        <Maximize2 size={16} /> <span className="text-xs font-bold tracking-widest uppercase">Final Output</span>
                                    </div>
                                </div>

                                {/* The Sources */}
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">Raw Source Elements Integrated</span>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-white/5 aspect-square relative cursor-zoom-in group" onClick={() => setSelectedImage('./visuals/photomanip/GettyImages-1209012213.jpg')}>
                                            <img src="./visuals/photomanip/GettyImages-1209012213.jpg" className="w-full h-full object-cover" alt="Source 1" />
                                            <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-[10px] uppercase font-bold backdrop-blur">Source 1</div>
                                        </div>
                                        <div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-white/5 aspect-square relative cursor-zoom-in group" onClick={() => setSelectedImage('./visuals/photomanip/TJP_3065.JPG')}>
                                            <img src="./visuals/photomanip/TJP_3065.JPG" className="w-full h-full object-cover" alt="Source 2" />
                                            <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-[10px] uppercase font-bold backdrop-blur">Source 2</div>
                                        </div>
                                        <div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-white/5 aspect-square relative cursor-zoom-in group" onClick={() => setSelectedImage('./visuals/photomanip/iStock-908046058.jpg')}>
                                            <img src="./visuals/photomanip/iStock-908046058.jpg" className="w-full h-full object-cover" alt="Source 3" />
                                            <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-[10px] uppercase font-bold backdrop-blur">Source 3</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ProjectModal
                project={selectedProject!}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                onOpenCaseStudy={onOpenCaseStudy}
            />
        </div>
    );
};

export default VisualWorks;
