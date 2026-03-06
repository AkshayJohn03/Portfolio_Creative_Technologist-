import React from 'react';
import { Database, GitCommit, Layers, Activity, Cpu, Box, Share2, Server } from 'lucide-react';

export const ZiaVisuals: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">
            {/* Architecture Diagram */}
            <section className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 sm:p-12 border border-black/5 dark:border-white/10">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <Layers className="text-accent" /> Architecture Pipeline
                </h3>

                <div className="flex flex-col items-center max-w-2xl mx-auto space-y-4">
                    <div className="w-full bg-white dark:bg-[#0a0d14] p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm relative z-10">
                        Input Text
                    </div>
                    <div className="h-6 w-0.5 bg-accent/40"></div>

                    <div className="w-full bg-white dark:bg-[#0a0d14] p-4 rounded-xl border border-accent/30 text-center relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <span className="text-xs text-accent font-bold tracking-widest uppercase block mb-1">Tokenizer</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">60k Custom BPE</span>
                    </div>
                    <div className="h-6 w-0.5 bg-accent/40"></div>

                    <div className="w-full bg-white dark:bg-[#0a0d14] p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center relative z-10 shadow-sm">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Token Embeddings (384 dim) + Positional Embeddings</span>
                    </div>
                    <div className="h-6 w-0.5 bg-accent/40"></div>

                    <div className="w-full bg-accent/5 dark:bg-accent/10 p-6 rounded-2xl border border-accent/20 relative z-10">
                        <div className="absolute -top-3 left-6 bg-gray-50 dark:bg-[#080B13] px-2 text-xs font-bold text-accent tracking-widest uppercase">Transformer Blocks (x8)</div>

                        <div className="space-y-3 mt-2">
                            <div className="bg-white dark:bg-black/40 p-3 rounded-lg border border-black/5 dark:border-white/5 text-center text-xs text-gray-600 dark:text-gray-400">LayerNorm</div>
                            <div className="bg-white dark:bg-black/40 p-3 rounded-lg border border-black/5 dark:border-white/5 text-center font-medium text-sm text-gray-800 dark:text-gray-200 shadow-sm">Multi-Head Self Attention (6 heads)</div>
                            <div className="text-center text-accent/50 text-xs">⊕ Residual Connection</div>
                            <div className="bg-white dark:bg-black/40 p-3 rounded-lg border border-black/5 dark:border-white/5 text-center text-xs text-gray-600 dark:text-gray-400">LayerNorm</div>
                            <div className="bg-white dark:bg-black/40 p-3 rounded-lg border border-black/5 dark:border-white/5 text-center font-medium text-sm text-gray-800 dark:text-gray-200 shadow-sm">Feed Forward (1536 dim)</div>
                            <div className="text-center text-accent/50 text-xs">⊕ Residual Connection</div>
                        </div>
                    </div>

                    <div className="h-6 w-0.5 bg-accent/40"></div>
                    <div className="w-full bg-white dark:bg-[#0a0d14] p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                        Final LayerNorm
                    </div>
                    <div className="h-6 w-0.5 bg-accent/40"></div>

                    <div className="w-full bg-white dark:bg-[#0a0d14] p-4 rounded-xl border border-accent/20 text-center shadow-sm">
                        <span className="text-sm text-gray-700 dark:text-gray-300 block mb-1">Linear Projection (Weight Tied)</span>
                        <span className="text-xs text-gray-500 block mb-2">↓ Softmax</span>
                        <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full mt-1 tracking-wider uppercase">Next Token Prediction</span>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Dataset Breakdown */}
                <section className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10 h-full">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Database size={20} className="text-accent" /> Dataset Composition
                    </h3>
                    <div className="space-y-5">
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wider">KNOWLEDGE (Wikipedia)</span>
                                <span className="text-xs font-bold text-accent">35%</span>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-800">
                                <div style={{ width: "35%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wider">WEB TEXT (FineWeb)</span>
                                <span className="text-xs font-bold text-blue-400">30%</span>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-800">
                                <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wider">DIALOGUE (UltraChat/ShareGPT)</span>
                                <span className="text-xs font-bold text-teal-400">20%</span>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-800">
                                <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-400"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wider">INSTRUCTIONS (Alpaca/OASST)</span>
                                <span className="text-xs font-bold text-indigo-400">10%</span>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-800">
                                <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-400"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wider">TECHNICAL (StackExchange)</span>
                                <span className="text-xs font-bold text-purple-400">5%</span>
                            </div>
                            <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-800">
                                <div style={{ width: "5%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parameter Breakdown */}
                <section className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                        <Box size={20} className="text-accent" /> Parameter Distribution
                    </h3>

                    <div className="flex w-full h-8 rounded-full overflow-hidden mb-6 shadow-sm">
                        <div className="bg-accent flex items-center justify-center text-[10px] text-white font-bold transition-all hover:opacity-90 cursor-pointer w-[61.5%]" title="Token Embedding (~23M)">23M</div>
                        <div className="bg-blue-400 flex items-center justify-center text-[10px] text-white font-bold transition-all hover:opacity-90 cursor-pointer border-l border-white/20 w-[37.4%]" title="Transformer Blocks (~14M)">14M</div>
                        <div className="bg-teal-400 flex items-center justify-center text-[0px] text-transparent hover:text-white hover:text-[8px] transition-all cursor-pointer w-[1.1%]" title="Positional Embedding (~100k)">100k</div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><span className="w-3 h-3 rounded-full bg-accent"></span> Token Embeddings</div>
                            <span className="font-bold text-gray-900 dark:text-white text-sm">~ 23,000,000</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><span className="w-3 h-3 rounded-full bg-blue-400"></span> Transformer Blocks</div>
                            <span className="font-bold text-gray-900 dark:text-white text-sm">~ 14,000,000</span>
                        </div>
                        <div className="flex items-center justify-between mb-4 border-b border-gray-200 dark:border-gray-800 pb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><span className="w-3 h-3 rounded-full bg-teal-400"></span> Positional Embeddings</div>
                            <span className="font-bold text-gray-900 dark:text-white text-sm">~ 100,000</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-bold text-gray-900 dark:text-white">Total Parameters</div>
                            <span className="text-xl font-bold text-accent">37.4M</span>
                        </div>
                    </div>
                </section>
            </div>

            {/* Model Scaling Timeline */}
            <section className="bg-[#080B13] rounded-3xl p-8 sm:p-12 border border-white/5 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <h3 className="text-xl font-bold mb-10 flex items-center gap-2 relative z-10">
                    <Activity size={20} className="text-accent" /> Scaling & Development Timeline
                </h3>

                <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 md:gap-4">
                    {/* Line connecting stages */}
                    <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-800 z-0"></div>

                    {[
                        { stage: 1, title: 'Dense Pretraining', context: 'Context: 4k', desc: 'Syntax and basic grammar learned.' },
                        { stage: 2, title: 'Instruction Tuning', context: 'Structure Aligned', desc: 'Conversational format enforced.' },
                        { stage: 3, title: 'RoPE Scaling', context: 'Context: 8k → 16k', desc: 'Context successfully driven to 16k.' },
                        { stage: 4, title: 'Long Context R&D', context: 'Target: 32k', desc: 'Pushing memory limits causing plateau.' }
                    ].map((phase, i) => (
                        <div key={i} className="flex-1 relative z-10 flex flex-row md:flex-col items-center text-left md:text-center gap-4 group">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-xl font-bold text-gray-400 group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all flex-shrink-0 shadow-xl">
                                {phase.stage}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm md:text-base text-gray-200 mb-1">{phase.title}</h4>
                                <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-[10px] text-accent tracking-widest font-bold uppercase mb-2">{phase.context}</span>
                                <p className="text-xs text-gray-400 max-w-[180px] mx-auto leading-relaxed">{phase.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Loss Training Curve - SVG representation based on normal transformer curves */}
            <section className="bg-white dark:bg-[#0a0d14] rounded-3xl p-8 sm:p-12 border border-black/5 dark:border-white/5 relative shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 relative z-10">
                    <Share2 size={20} className="text-accent" /> Training Loss Convergence
                </h3>
                <p className="text-sm text-gray-500 mb-8 max-w-2xl">
                    A representative visualization of the ~400+ hour training loss curve across extensive optimization steps, plateauing perfectly across context expansions (1.34 → 1.50 → 1.61 loss).
                </p>

                <div className="w-full h-64 relative border-l border-b border-gray-200 dark:border-gray-800 pb-2 pl-4">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 -ml-8 bottom-0 text-[10px] text-gray-400">1.0</div>
                    <div className="absolute left-0 -ml-8 bottom-[33%] text-[10px] text-gray-400">3.0</div>
                    <div className="absolute left-0 -ml-8 bottom-[66%] text-[10px] text-gray-400">5.0</div>
                    <div className="absolute left-0 -ml-8 top-0 text-[10px] text-gray-400">7.0</div>
                    <div className="absolute left-0 -ml-16 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold tracking-widest text-gray-400 uppercase">Loss</div>

                    {/* X-axis labels */}
                    <div className="absolute left-0 -bottom-6 text-[10px] text-gray-400">0k</div>
                    <div className="absolute left-1/4 -bottom-6 text-[10px] text-gray-400">80k</div>
                    <div className="absolute left-1/2 -bottom-6 text-[10px] text-gray-400 text-center -ml-2">160k</div>
                    <div className="absolute left-3/4 -bottom-6 text-[10px] text-gray-400">240k</div>
                    <div className="absolute right-0 -bottom-6 text-[10px] text-gray-400">322k</div>
                    <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 text-xs font-bold tracking-widest text-gray-400 uppercase">Training Steps</div>

                    {/* Grid */}
                    <div className="absolute inset-0 pt-2 pb-2 pl-4 pointer-events-none">
                        <div className="w-full h-1/3 border-t border-gray-100 dark:border-gray-800/50 border-dashed"></div>
                        <div className="w-full h-1/3 border-t border-gray-100 dark:border-gray-800/50 border-dashed"></div>
                        <div className="w-full h-1/3 border-t border-gray-100 dark:border-gray-800/50 border-dashed"></div>
                    </div>

                    {/* Curve matching the plateau descriptions */}
                    <div className="absolute inset-0 pl-4 w-full h-full overflow-hidden">
                        <svg viewBox="0 0 1000 250" preserveAspectRatio="none" className="w-full h-full stroke-accent fill-none drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
                            <path d="M 0,10 Q 50,150 150,180 T 350,210 T 600,215 T 1000,215" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Fill gradient */}
                            <path d="M 0,10 Q 50,150 150,180 T 350,210 T 600,215 T 1000,215 L 1000,250 L 0,250 Z" className="fill-accent/5 stroke-none" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Example Outputs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10 h-full flex flex-col">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Prompt: "What is a neural network?"</h4>

                    <div className="flex-1 space-y-4">
                        <div className="relative pl-4 border-l-2 border-red-400/50">
                            <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1 block">Phase 1: Babbling</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">"What is a neural network and what is the purpose of a neural network in a network of neural networks..."</p>
                            <p className="text-[10px] text-gray-500 mt-2">Syntactically valid but trapped in a repetitive prediction loop.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10 h-full flex flex-col">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Prompt: "What is a neural network?"</h4>

                    <div className="flex-1 space-y-4">
                        <div className="relative pl-4 border-l-2 border-accent/50">
                            <span className="text-xs font-bold text-accent uppercase tracking-wider mb-1 block">Phase 2: IFT Tuned</span>
                            <p className="text-sm text-gray-800 dark:text-gray-200">"A neural network is a computational system model designed to recognize patterns. It interprets sensory data through a kind of machine perception..."</p>
                            <p className="text-[10px] text-gray-500 mt-2">Structured, semantic coherence restored via instruction data.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
