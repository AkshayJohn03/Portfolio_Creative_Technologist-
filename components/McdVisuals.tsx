import React from 'react';
import { Download, FileText, MonitorPlay, ShoppingCart, LayoutTemplate } from 'lucide-react';

export const McdVisuals: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">

            {/* Download Presentation */}
            <section className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 sm:p-12 border border-black/5 dark:border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/5 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-yellow-400/5 rounded-full filter blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold uppercase tracking-widest border border-red-500/20">Enterprise UX</span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            McDonald's Burger Line - The Escalation Timeline
                        </h2>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-3xl">
                            This design addresses the need for managers to reconstruct a late/wrong order end-to-end and quickly identify the root cause. This concept distills complex data relationships into high-visibility, modular components designed for high-stress environments.
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.behance.net/gallery/237959519/The-Escalation-Timeline-McDonalds-Burger-Line"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-[#053eff] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#053eff]/20 hover:scale-105 transition-all"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.362 3.952c.094.488.135.982.111 1.48v.831h-7.905c.161 2.012 1.432 2.943 3.151 2.943 1.254 0 2.315-.659 2.766-1.503l1.714-.108zm-4.105-5.381c-.131-1.396-1.144-2.146-2.278-2.146-1.282 0-2.25.992-2.327 2.146h4.605zm-14.492-7.619h-5.129v16h5.836c3.166 0 5.09-1.298 5.09-3.954 0-1.636-1.121-2.92-2.528-3.415v-.063c1.231-.383 1.918-1.464 1.918-2.617 0-2.312-1.633-3.669-4.706-3.669-2.028-.016-3.525.044-4.223.097v3.666h-1.334v-6.045zm4.07 9.479h-2.735v-3.834h2.735c1.474 0 2.271.603 2.271 1.928 0 1.201-.735 1.906-2.271 1.906zm-.396-6.388h-2.339v-3.414h2.339c1.17 0 1.833.528 1.833 1.638 0 1.309-.762 1.776-1.833 1.776z" /></svg>
                                View on Behance
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* UX Details & Thoughts */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10">
                    <h3 className="text-lg font-bold text-red-500 mb-4 uppercase tracking-wider">Design & Thoughts</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white block mb-1">Stage-Based SLA Model</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Total order breach provides instant pop, while color-coded stage bars provide granular insight into time slippage.</p>
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white block mb-1">Gantt-like Swimlanes</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Horizontal layout separates responsibilities perfectly, showing duration, sequence and ownership.</p>
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white block mb-1">Desktop/Touch POS</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Design prioritizes horizontal space and large, clickable zones for managers.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10">
                    <h3 className="text-lg font-bold text-red-500 mb-4 uppercase tracking-wider">Edge Cases Covered</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white block mb-1">Offline Data Sync</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Visual cues applied to stage bars denote timestamps recorded offline and later synced, representing an intentional state.</p>
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white block mb-1">Branching & Rework</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Stages like 'Assembly' display "Rework x1" and show looping timeline segments, addressing order loop assumptions.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10">
                    <h3 className="text-lg font-bold text-red-500 mb-4 uppercase tracking-wider">Reasoned Trade-Offs</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white block mb-1">Visual Information Density</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">The timeline is horizontally dense, ensuring managers can spot problems via clear color-coding and icons before reading text.</p>
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white block mb-1">Interaction Model Constraints</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Requires a wider desktop screen to display timeline and detail panel simultaneously, avoiding multiple clicks to see evidence fast.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Mockups Grid */}
            <section className="space-y-8">

                {/* Main Dashboard view spanning full width */}
                <div className="bg-gray-100 dark:bg-[#080B13] rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl relative group">
                    <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-black/5 dark:border-white/10">
                        <LayoutTemplate size={16} className="text-red-500" />
                        <span className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-widest">Main Dashboard</span>
                    </div>
                    <img
                        src="./mcd/Dashboard.jpg"
                        alt="McDonald's Dashboard Interface"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Side-by-side modules */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 dark:bg-[#080B13] rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl relative group">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-black/5 dark:border-white/10">
                            <ShoppingCart size={16} className="text-red-500" />
                            <span className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-widest">Order Details Modular</span>
                        </div>
                        <img
                            src="./mcd/Order_Details.jpg"
                            alt="Order Details UI"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="bg-gray-100 dark:bg-[#080B13] rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl relative group">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-black/5 dark:border-white/10">
                            <MonitorPlay size={16} className="text-red-500" />
                            <span className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-widest">Integrated Camera Monitoring</span>
                        </div>
                        <img
                            src="./mcd/VideoPlayer.jpg"
                            alt="Drive-Thru Video Player UI"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
