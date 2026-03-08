import React from 'react';
import { Network, Activity, ShieldAlert, BrainCircuit, Waves, GitMerge, Target, FileText, Download } from 'lucide-react';

export const RiftVisuals: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">

            {/* Paper Header & Download */}
            <section className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 sm:p-12 border border-black/5 dark:border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest border border-accent/20">Preprint Publication</span>
                            <span className="text-xs text-gray-500 font-mono">DOI: 10.5281/zenodo.18616421</span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            Project RIFT: A Self-Evolving Memory-Driven Architecture for Autonomous Intelligence
                        </h2>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-3xl">
                            A minimal validation environment (RIFT-A) confirms a sharp dissociation: geometric commitment agents achieve non-trivial survival while predictive agents fail despite identical information access and training exposure. This result suggests a fundamental limitation of prediction-driven intelligence under irreversible conditions and motivates an alternative foundation for artificial intelligence grounded in physics, embodiment, and constraint-driven necessity.
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="./rift/Project_RIFT_Paper.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-bold text-sm shadow-lg shadow-accent/20 hover:scale-105 transition-all"
                            >
                                <Download size={16} /> Download Full Paper (PDF)
                            </a>
                            <a
                                href="https://doi.org/10.5281/zenodo.18616421"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white rounded-xl font-bold text-sm hover:border-accent/40 transition-all"
                            >
                                <FileText size={16} /> View on Zenodo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Assets */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#080B13] rounded-3xl overflow-hidden border border-accent/20 shadow-lg group relative">
                    <video
                        src="./rift/Project_RIFT.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-accent border border-white/10">
                        Phase VI Simulation
                    </div>
                </div>
                <div className="bg-gray-100 dark:bg-[#080B13] rounded-3xl overflow-hidden border border-black/5 dark:border-accent/20 shadow-lg group relative">
                    <img
                        src="./rift/3d_Model.png"
                        alt="RIFT 3D Model"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 dark:text-accent border border-black/10 dark:border-white/10">
                        Structural Model
                    </div>
                </div>
            </section>

            {/* Structural Concept Diagram */}
            <section className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 sm:p-12 border border-black/5 dark:border-white/10">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <Target className="text-accent" /> The RIFT Embodiment Cycle
                </h3>

                <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-4">

                    <div className="w-full md:w-1/3 bg-white dark:bg-[#0a0d14] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center relative z-10 shadow-sm flex flex-col items-center">
                        <ShieldAlert size={32} className="text-orange-500 mb-4" />
                        <span className="text-sm font-bold block mb-2 text-gray-800 dark:text-gray-200 uppercase tracking-widest">Stimulus (Cue)</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Faint causal signal detected in the environment long before lethal impact.</p>
                    </div>

                    <div className="hidden md:flex h-0.5 w-16 bg-accent/40 items-center justify-center">
                        <span className="text-[10px] bg-gray-50 dark:bg-black/90 px-2 text-accent uppercase font-bold tracking-widest absolute">Forces</span>
                    </div>

                    <div className="w-full md:w-1/3 bg-accent/5 dark:bg-accent/10 p-6 rounded-2xl border border-accent/20 text-center relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.1)] flex flex-col items-center">
                        <Activity size={32} className="text-accent mb-4" />
                        <span className="text-sm font-bold block mb-2 text-accent uppercase tracking-widest">Morphological Shift</span>
                        <ul className="text-xs text-left space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Pays Balance Cost</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Commits to new Geometry</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Takes time (Inertia)</li>
                        </ul>
                    </div>

                    <div className="hidden md:flex h-0.5 w-16 bg-accent/40 items-center justify-center">
                        <span className="text-[10px] bg-gray-50 dark:bg-black/90 px-2 text-accent uppercase font-bold tracking-widest absolute">Solves</span>
                    </div>

                    <div className="w-full md:w-1/3 bg-white dark:bg-[#0a0d14] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center relative z-10 shadow-sm flex flex-col items-center">
                        <Waves size={32} className="text-purple-400 mb-4" />
                        <span className="text-sm font-bold block mb-2 text-gray-800 dark:text-gray-200 uppercase tracking-widest">Late Impact</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Survival achieved only if the body is already structurally positioned to absorb.</p>
                    </div>
                </div>
            </section>

            {/* Failure Mode Demos */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-red-500/5 dark:bg-red-500/10 rounded-3xl p-8 border border-red-500/20 h-full flex flex-col">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-red-500 uppercase mb-4 flex items-center gap-2"><BrainCircuit size={14} /> The Paranoia Trap (Phase II)</h4>

                    <div className="flex-1 space-y-4">
                        <div className="w-full h-32 relative border-b border-l border-red-500/30">
                            {/* Simulation line */}
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-red-500/80 fill-none">
                                <path d="M 0,90 L 30,90 L 30,10 L 100,10" strokeWidth="2" />
                            </svg>
                            <div className="absolute bottom-0 left-[30%] -mb-5 text-[10px] text-gray-500 font-bold uppercase">Cue</div>
                            <div className="absolute bottom-0 left-[80%] -mb-5 text-[10px] text-gray-500 font-bold uppercase">Impact</div>
                        </div>
                        <div className="pt-4">
                            <p className="text-sm text-gray-800 dark:text-gray-200">The agent survives by snapping to 100% tension instantly at the cue and staying there.</p>
                            <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase">Result: Biological Laziness, not intelligence.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-500/5 dark:bg-orange-500/10 rounded-3xl p-8 border border-orange-500/20 h-full flex flex-col">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase mb-4 flex items-center gap-2"><Network size={14} /> The Engram Delusion (Phase VIII)</h4>

                    <div className="flex-1 space-y-4">
                        <div className="w-full h-32 relative border-b border-l border-orange-500/30">
                            {/* Simulation logic lines */}
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-none">
                                <path d="M 0,90 C 20,40 30,10 100,10" strokeWidth="2" className="stroke-orange-500/80" strokeDasharray="4" />
                                <path d="M 0,90 L 80,90 L 80,10 L 100,10" strokeWidth="1" className="stroke-red-500/50" />
                            </svg>
                            <div className="absolute top-2 left-2 text-[10px] text-orange-500/80 font-bold">Neural State</div>
                            <div className="absolute bottom-2 left-2 text-[10px] text-red-500/80 font-bold">Physical Posture</div>
                        </div>
                        <div className="pt-4">
                            <p className="text-sm text-gray-800 dark:text-gray-200">Given ungrounded memory, the neural state saturates to a "safe" thought early, divorcing reality while the physical body takes lethal damage.</p>
                            <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase">Result: Hallucinated Agency & Death.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Morphological Breakthrough Visualization */}
            <section className="bg-[#080B13] rounded-3xl p-8 sm:p-12 border border-accent/20 text-white relative shadow-sm overflow-hidden flex flex-col items-center">

                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full filter blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 relative z-10 self-start text-white">
                    <GitMerge size={20} className="text-accent" /> Phase VI: Morphological Anticipation (The Breakthrough)
                </h3>

                <div className="w-full max-w-3xl h-64 relative border-l border-b border-gray-700 pb-2 pl-4 z-10 mt-4">

                    {/* Labels */}
                    <div className="absolute left-0 -ml-12 bottom-[10%] text-[10px] text-gray-500">Center</div>
                    <div className="absolute left-0 -ml-12 top-[10%] text-[10px] text-accent font-bold">Safe Zone (-X)</div>
                    <div className="absolute left-0 -ml-20 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold tracking-widest text-gray-500 uppercase">Posture Shift</div>

                    <div className="absolute left-[30%] -bottom-6 text-[10px] text-orange-400 font-bold">Cue Detected</div>
                    <div className="absolute left-[80%] -bottom-6 text-[10px] text-red-400 font-bold">Impact</div>

                    {/* Reference Lines */}
                    <div className="absolute left-[30%] bottom-0 w-px h-full bg-orange-500/30 border-dashed border-l"></div>
                    <div className="absolute left-[80%] bottom-0 w-px h-full bg-red-500/30 border-dashed border-l"></div>

                    {/* The Morphology Curve */}
                    <div className="absolute inset-0 pl-4 w-full h-full overflow-hidden">
                        <svg viewBox="0 0 1000 250" preserveAspectRatio="none" className="w-full h-full stroke-accent fill-none drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
                            {/* Body starts center, at cue smoothly shifts to safe zone paying inertia delay cost, holding steady against balance cost */}
                            <path d="M 0,225 L 300,225 C 450,225 550,25 650,25 L 1000,25" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <div className="w-full max-w-3xl mt-12 bg-black/40 border border-white/5 rounded-2xl p-6 text-sm text-gray-300 leading-relaxed relative z-10">
                    <p>When the system was subjected to <strong>Inertia</strong> (time cost) and <strong>Balance</strong> (metabolic cost), paranoia was mathematically eliminated from the fitness landscape. To minimize metabolic burn while surviving, the agent was forced to discover <strong className="text-accent">Anticipation</strong>: It calculated the exact minimum time required to move its mass out of danger, waited until the absolute last moment, initiated the shift, and locked its new geometry to absorb the hit.</p>
                </div>
            </section>

        </div>
    );
};
