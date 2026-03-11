import React from 'react';
import { Terminal, Lightbulb, Database, FileCode2 } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';

const AIExperiments: React.FC = () => {
    const experiments = [
        {
            title: 'Transformer Training on Consumer Hardware',
            type: 'Model Training Logs',
            icon: <Terminal size={20} className="text-accent" />,
            date: 'Dec 2025',
            content: 'Experimenting with memory constraints, gradient accumulation, and custom BPE tokenizers on a GTX 1050 Ti to observe "babbling" phases of raw decoders.'
        },
        {
            title: 'Quant Signal Experiments',
            type: 'Prototype Systems',
            icon: <Database size={20} className="text-cyan-500" />,
            date: 'March 2025',
            content: 'Early-stage backtesting using Conv1D and BiLSTMs against NIFTY50 tick data. Testing custom attention heads for local trend recognition against noisy indicators.'
        },
        {
            title: 'Recursive Image Generation Concepts',
            type: 'Generative Design Tests',
            icon: <Lightbulb size={20} className="text-yellow-500" />,
            date: 'Feb 2026',
            content: 'Exploring latent-space diffusion models configured in recursive loops to evolve architectural and UI generation without standard prompt conditioning.'
        },
        {
            title: 'Conversational Intent Parsing',
            type: 'Interaction Experiments',
            icon: <FileCode2 size={20} className="text-purple-500" />,
            date: 'Nov 2025',
            content: 'Utilizing RASA NLU NLP to construct an offline-first talk-back voice assistant for Apple CarPlay and in-car infotainment systems.'
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-gray-50 dark:bg-dark relative border-t border-black/5 dark:border-white/5">
            <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
                        Lab & Experiments
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl font-light">
                        Raw prototypes, model training logs, and interaction proofs-of-concept. Unpolished work providing a transparent look into technical R&D and thinking processes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    {/* Vertical Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-black/10 dark:bg-white/10 -translate-x-1/2"></div>

                    {experiments.map((exp, idx) => (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:flex-row-reverse' : 'md:pl-12 md:ml-auto'}`}>

                            {/* Timeline Dot */}
                            <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-gray-50 dark:border-dark z-10 ${idx % 2 === 0 ? '-right-2' : '-left-2'}`}></div>

                            <div className="w-full relative rounded-3xl border border-black/5 dark:border-white/5 hover:border-accent/30 transition-colors shadow-sm p-1">
                                <GlowingEffect
                                    blur={0}
                                    borderWidth={2}
                                    spread={40}
                                    inactiveZone={0.5}
                                    movementDuration={2}
                                    glow={true}
                                    disabled={false}
                                />
                                <div className="relative rounded-[inherit] bg-white dark:bg-[#111] p-7 text-left overflow-hidden h-full">
                                    <div className="flex items-center gap-3 mb-4 z-10 relative">
                                        <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5">
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 block">{exp.type}</span>
                                            <span className="text-xs text-gray-500 font-medium">{exp.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 z-10 relative">{exp.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light z-10 relative">{exp.content}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIExperiments;
