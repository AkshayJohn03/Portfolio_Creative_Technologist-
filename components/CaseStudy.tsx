
import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, AlertTriangle, Monitor, Layers, Clock, Brain, 
  Lightbulb, ShieldCheck, Truck, Tag, BarChart3, ArrowRight, Activity, 
  Database, Settings, HardDrive, Target, TrendingUp, Cpu
} from 'lucide-react';
import { PROJECTS, CASE_STUDIES } from '../constants';
import ProjectCard from './ProjectCard';

interface CaseStudyProps {
  onBack: () => void;
  projectId?: string;
  isAiMode: boolean;
  onOpenCaseStudy: (projectId: string) => void;
}

// Helper component for scroll animations
interface RevealOnScrollProps {
  children?: React.ReactNode;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const MetricVisual: React.FC<{ value: string; label: string; description: string }> = ({ value, label, description }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const displayWidth = value.includes('%') ? numericValue : (numericValue / 10) * 100;
  
  return (
    <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-accent/40 transition-all group">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">{label}</h4>
          <span className="text-accent text-2xl sm:text-3xl font-bold">{value}</span>
        </div>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-accent transition-all duration-1000 ease-out delay-500"
          style={{ width: `${Math.min(displayWidth, 100)}%` }}
        ></div>
      </div>
      <p className="text-gray-500 text-[9px] sm:text-[10px] leading-tight font-light">{description}</p>
    </div>
  );
};

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack, projectId, isAiMode, onOpenCaseStudy }) => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
    return () => {
       document.body.style.overflow = 'unset';
    }
  }, [projectId]);

  const safeId = projectId && CASE_STUDIES[projectId] ? projectId : 'ux-mcd';
  const data = CASE_STUDIES[safeId];

  const relatedProjects = PROJECTS.filter(p => 
    p.id !== safeId && 
    (isAiMode ? p.category.includes('AI') : !p.category.includes('AI'))
  ).slice(0, 3);

  // New Grid-based flow for phases, removing connecting lines
  const ArchitectureFlow = ({ steps }: { steps: any[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 py-8">
      {steps.map((step, idx) => (
        <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-accent/40 transition-colors group flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-accent group-hover:text-white transition-all">
            {idx + 1}
          </div>
          <h4 className="text-white font-bold mb-2 text-[11px] uppercase tracking-wider">{step.title}</h4>
          <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">{step.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white dark:bg-dark min-h-screen pt-32 pb-12 px-4 sm:px-6 transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
         <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <header className="mb-24 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Header Image section - Only show if it's NOT the research project or explicitly provided */}
            {data.heroImage && (
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                  <img 
                    src={data.heroImage} 
                    alt={data.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
              </div>
            )}
            
            <div className={`w-full ${data.heroImage ? 'lg:w-1/2' : 'max-w-4xl mx-auto text-center'} order-1 lg:order-2`}>
              <span className={`text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block ${!data.heroImage && 'text-center'}`}>Scientific Case Study</span>
              <h1 className={`text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-gray-900 dark:text-white mb-8 leading-tight ${!data.heroImage && 'text-center'}`}>
                {data.title}
              </h1>
              <p className={`text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light ${!data.heroImage && 'text-center'} max-w-3xl mx-auto`}>
                {data.overview}
              </p>
              <div className={`flex flex-wrap items-center gap-3 sm:gap-4 mt-12 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-gray-500 ${!data.heroImage && 'justify-center'}`}>
                <span>Akshay John</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                <span>{data.role}</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Performance Metrics */}
        {isAiMode && data.performanceMetrics && (
          <RevealOnScroll>
            <section className="mb-32">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-10 text-center flex items-center justify-center gap-3">
                <BarChart3 className="text-accent" /> Quantitative Analysis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {data.performanceMetrics.map((metric, idx) => (
                  <MetricVisual 
                    key={idx} 
                    label={metric.name} 
                    value={metric.value} 
                    description={metric.description} 
                  />
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Input Parameters & Preprocessing */}
        {isAiMode && data.inputParameters && (
          <RevealOnScroll delay={100}>
            <section className="mb-32">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-10 text-center flex items-center justify-center gap-3">
                <Settings className="text-accent" /> Substrate & Dynamics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.inputParameters.map((param, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10">
                    <h3 className="text-lg font-bold text-accent mb-6 flex items-center gap-2 uppercase tracking-wider">
                       {idx === 0 ? <Database size={18}/> : idx === 1 ? <Activity size={18}/> : <HardDrive size={18}/>}
                       {param.category}
                    </h3>
                    <ul className="space-y-3">
                      {param.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-accent/40 rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Updated Experimental Phases Flow */}
        {isAiMode && data.modelArchitecture && (
          <RevealOnScroll delay={200}>
            <section className="mb-32 bg-[#080B13] rounded-[40px] p-8 sm:p-16 text-white relative overflow-hidden border border-white/5">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 flex items-center gap-3">
                   <Brain className="text-accent" /> Experimental Evolution
                 </h2>
                 <p className="text-gray-400 mb-12 max-w-3xl leading-relaxed text-base sm:text-lg font-light">
                   {data.modelArchitecture.overview}
                 </p>
                 <ArchitectureFlow steps={data.modelArchitecture.steps} />
               </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Tech Stack */}
        {data.techStack && (
          <RevealOnScroll delay={50}>
            <section className="mb-32">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-10 text-center">Implementation Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.techStack.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-accent/30 transition-colors">
                    <h3 className="text-base font-bold text-accent mb-4 border-b border-accent/20 pb-2 flex items-center gap-2">
                      <Cpu size={16} /> {item.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 bg-white dark:bg-black/20 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Challenges Grid */}
        <RevealOnScroll delay={100}>
          <section className="mb-32 px-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-12 text-center">Pathological Failure Modes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.challenges?.map((item, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-accent/30 transition-colors shadow-sm h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    {idx === 0 ? <ShieldCheck size={24} /> : idx === 1 ? <Activity size={24} /> : idx === 2 ? <Truck size={24} /> : <Tag size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light flex-1">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* Gallery - Only show if there are images left */}
        {data.uiGallery && data.uiGallery.length > 0 && (
          <RevealOnScroll delay={300}>
            <section className="mb-32">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-10 text-center">Visual Benchmarks</h2>
              <div className="flex gap-6 overflow-x-auto pb-10 snap-x scrollbar-none px-4 -mx-4">
                {data.uiGallery.map((item, idx) => (
                  <div key={idx} className="min-w-[320px] sm:min-w-[400px] snap-center group">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 aspect-video relative mb-6 transition-all duration-500 hover:-translate-y-2">
                       <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                       />
                    </div>
                    <div className="px-2">
                      <h4 className="text-lg font-bold text-accent mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Future Work */}
        {data.futureWork && (
          <RevealOnScroll delay={350}>
            <section className="mb-32 px-2">
               <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
                 <Lightbulb className="text-accent" /> Future Directions
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.futureWork.map((work, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 rounded-3xl p-10 relative overflow-hidden group hover:border-accent/40 transition-all flex flex-col h-full">
                       <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-all filter blur-3xl"></div>
                       <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                          <TrendingUp size={24} className="text-accent" /> {work.title}
                       </h3>
                       <p className="text-gray-400 text-base leading-relaxed font-light relative z-10 flex-1">{work.description}</p>
                    </div>
                  ))}
               </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Related Projects */}
        <RevealOnScroll delay={400}>
          <section className="mb-24 pt-20 border-t border-black/5 dark:border-white/5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-10">Related Investigations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map(p => (
                <ProjectCard key={p.id} project={p} onClick={() => onOpenCaseStudy(p.id)} />
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <div className="pt-12 border-t border-gray-200 dark:border-gray-800 text-center animate-fade-in-up pb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Scientific Integrity & Necessity</h2>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest">{data.title} Case Study • Akshay John • January 2026</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
