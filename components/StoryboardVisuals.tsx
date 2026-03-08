import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sun, Wind, Hand, Eye, Minimize2, ZoomIn, Info, Presentation, ChevronRight, ChevronLeft, Download } from 'lucide-react';

/* ─── Storyboard Images ─────────────────────────────────────────────────── */
const STORYBOARD_SCENES = [
    "The Thermal Silhouette - Storyboard 1.jpg",
    "The Thermal Silhouette - Storyboard 2.jpg",
    "The Thermal Silhouette - Storyboard 3.jpg",
    "The Thermal Silhouette - Storyboard 4.jpg",
    "The Thermal Silhouette - Storyboard 5.jpg",
    "The Thermal Silhouette - Storyboard 6.jpg",
    "The Thermal Silhouette - Storyboard 7.jpg",
    "The Thermal Silhouette - Storyboard 8.jpg"
];

/* ─── Main Component ──────────────────────────────────────────────────────── */
export const StoryboardVisuals: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string, index: number } | null>(null);

    React.useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedImage]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage && selectedImage.index < STORYBOARD_SCENES.length - 1) {
            setSelectedImage({
                src: `/storyboard/${encodeURIComponent(STORYBOARD_SCENES[selectedImage.index + 1])}`,
                index: selectedImage.index + 1
            });
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage && selectedImage.index > 0) {
            setSelectedImage({
                src: `/storyboard/${encodeURIComponent(STORYBOARD_SCENES[selectedImage.index - 1])}`,
                index: selectedImage.index - 1
            });
        }
    };

    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">

            {/* ── Context Header ───────────────────────────────────────────────── */}
            <section className="bg-orange-50 dark:bg-[#1a1511] border border-orange-200 dark:border-orange-900/50 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-400/20 dark:bg-orange-500/10 rounded-full filter blur-[100px]" />

                <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block mb-2">
                        Sensory Translation · Empathy-Driven Design
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-orange-50 mb-6 font-serif">
                        Explaining "Shadow" to the Visually Impaired
                    </h3>

                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
                        This storyboard outlines a calm, one-to-one thermal experimental session (about 10–15 minutes) with a blind adult who has no visual memory of light or dark.
                        The goal is to build an intuitive understanding of a "shadow" as an absence or blockage that creates noticeable contrast in the environment,
                        using senses they already rely on deeply: <strong className="text-orange-600 dark:text-orange-400">touch, temperature, sound, proprioception, and spatial awareness</strong>.
                    </p>

                    <div className="flex gap-4 mt-6 mb-8">
                        <a href="/storyboard/Storyboard.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg hover:scale-105 transition-transform"><Download size={16} /> Concept PDF</a>
                        <a href="/storyboard/StoryBoard - The Thermal Silhouette.pptx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white dark:bg-black/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors"><Download size={16} /> Storyboard PPTX</a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: <Sun size={20} />, title: "Directional Heat", desc: "A strong desk lamp provides focused thermal energy." },
                            { icon: <Wind size={20} />, title: "Airflow Shift", desc: "A small fan creates sensory contrast via breeze." },
                            { icon: <Hand size={20} />, title: "Tactile Blocking", desc: "Using hands and objects to physically block heat." },
                            { icon: <Eye size={20} />, title: "Empathy Blindfold", desc: "Explainer operates in the same sensory world." }
                        ].map((p, i) => (
                            <div key={i} className="bg-white dark:bg-black/20 p-5 rounded-2xl border border-orange-100 dark:border-orange-500/20 shadow-sm">
                                <div className="text-orange-500 dark:text-orange-400 mb-3">{p.icon}</div>
                                <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{p.title}</h4>
                                <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Storyboard Frames ───────────────────────────────────────────── */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                            <Presentation className="text-orange-500" size={24} />
                            The Journey Boards
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            8-part visual narrative of the thermal experiment
                        </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-gray-100 dark:bg-white/5 py-2 px-4 rounded-full border border-gray-200 dark:border-white/10">
                        <ZoomIn size={14} /> Click any frame to expand
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {STORYBOARD_SCENES.map((scene, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer bg-gray-50 dark:bg-[#111] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-900/20 transition-all duration-300"
                            onClick={() => setSelectedImage({ src: `/storyboard/${encodeURIComponent(scene)}`, index })}
                        >
                            <div className="aspect-[16/9] w-full relative overflow-hidden bg-white dark:bg-black">
                                <img
                                    src={`/storyboard/${encodeURIComponent(scene)}`}
                                    alt={`Storyboard Frame ${index + 1}`}
                                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                                        <ZoomIn size={16} /> View Frame {index + 1}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-[#151515] border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                <span className="font-bold text-gray-900 dark:text-white text-sm">Frame {index + 1} of {STORYBOARD_SCENES.length}</span>
                                <span className="text-[10px] uppercase tracking-wider text-orange-600 dark:text-orange-400 font-bold bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full">Explore</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Image Modal using Portal ────────────────────────────────────── */}
            {selectedImage && typeof document !== 'undefined' && createPortal(
                <div
                    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full h-full flex items-center justify-between px-4 sm:px-12 pointer-events-none">

                        {/* Prev Button */}
                        <button
                            className={`pointer-events-auto w-12 h-12 rounded-full flex flex-shrink-0 items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all ${selectedImage.index === 0 ? 'opacity-30 cursor-not-allowed hidden sm:flex' : 'opacity-100'}`}
                            onClick={handlePrev}
                            disabled={selectedImage.index === 0}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Image Container */}
                        <div className="relative flex-1 flex items-center justify-center h-[90vh] pointer-events-auto px-4" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage.src}
                                alt={`Frame ${selectedImage.index + 1}`}
                                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}
                            />

                            {/* Frame counter badge */}
                            <div className="absolute top-0 mt-4 bg-black/60 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10">
                                Frame {selectedImage.index + 1} / {STORYBOARD_SCENES.length}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            className={`pointer-events-auto w-12 h-12 rounded-full flex flex-shrink-0 items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all ${selectedImage.index === STORYBOARD_SCENES.length - 1 ? 'opacity-30 cursor-not-allowed hidden sm:flex' : 'opacity-100'}`}
                            onClick={handleNext}
                            disabled={selectedImage.index === STORYBOARD_SCENES.length - 1}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Close Button */}
                    <button
                        className="pointer-events-auto absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-all shadow-lg"
                        style={{ zIndex: 100000 }}
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                    >
                        ×
                    </button>
                </div>,
                document.body
            )}
        </div>
    );
};
