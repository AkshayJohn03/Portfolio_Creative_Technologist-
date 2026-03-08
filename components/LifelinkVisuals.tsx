import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Activity, Users, Clock, MessageSquare, ZoomIn, FileText } from 'lucide-react';

/* ─── Lifelink Images ─────────────────────────────────────────────────── */
const APP_SCENES = [
    "Login Screen.jpg",
    "Dashboard.jpg",
    "Dashboard External.jpg",
    "Transfer Request.jpg",
    "Transfer Approval.jpg",
    "Calender.jpg",
    "Monitor transfer.jpg",
    "Monitor transfer-1.jpg",
    "Communication.jpg",
    "Reporting Analytics.jpg"
];

/* ─── Lifelink Mobile Images ───────────────────────────────────────────── */
const MOBILE_SCENES = [
    "Sign In.jpg",
    "Dashboard.jpg",
    "Transfer Request.jpg",
    "Approving Transfers.jpg",
    "Approving Transfers-1.jpg",
    "Monitor Transfer.jpg",
    "Communication.jpg",
    "Communication-1.jpg"
];

/* ─── Main Component ──────────────────────────────────────────────────────── */
export const LifelinkVisuals: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    React.useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedImage]);

    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">

            {/* ── Context Header ───────────────────────────────────────────────── */}
            <section className="bg-blue-50 dark:bg-[#0c1328] border border-blue-200 dark:border-blue-900/50 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full filter blur-[100px]" />

                <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
                        Healthcare · Enterprise Product Design
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-blue-50 mb-6">
                        Lifelink Platform Ecosystem
                    </h3>

                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl">
                        This healthcare system application is designed to streamline and manage various aspects of patient transfers, communication among healthcare professionals, and overall patient management.
                        The application consists of multiple modules, each catering to specific functions essential for efficient healthcare operations.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: <Users size={20} />, title: "Patient Transfers", desc: "End-to-end request & approval tracking." },
                            { icon: <MessageSquare size={20} />, title: "Team Comm.", desc: "Integrated chat for doctors & staff." },
                            { icon: <Activity size={20} />, title: "Monitor Transfer", desc: "Live visualization and status updates." },
                            { icon: <FileText size={20} />, title: "Reporting", desc: "In-depth analytics and clinical metrics." }
                        ].map((p, i) => (
                            <div key={i} className="bg-white dark:bg-black/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-500/20 shadow-sm">
                                <div className="text-blue-500 dark:text-blue-400 mb-3">{p.icon}</div>
                                <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{p.title}</h4>
                                <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── App Modules Gallery ───────────────────────────────────────────── */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                            <Activity className="text-blue-500" size={24} />
                            Key Modules & Screens
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            A showcase of the application's interface and complex user flows
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {APP_SCENES.map((scene, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer bg-gray-50 dark:bg-[#111] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
                            onClick={() => setSelectedImage(`./lifelink/App/${encodeURIComponent(scene)}`)}
                        >
                            <div className="aspect-[4/3] w-full relative overflow-hidden bg-white dark:bg-black p-4">
                                <img
                                    src={`./lifelink/App/${encodeURIComponent(scene)}`}
                                    alt={`Scene ${index + 1}`}
                                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded-lg shadow-sm"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                                        <ZoomIn size={16} /> Expand
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-[#151515] border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                <span className="font-bold text-gray-900 dark:text-white text-sm">{scene.replace('.jpg', '')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Mobile App Screens Gallery ───────────────────────────────────────────── */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            Mobile Application
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Companion mobile app screens for on-the-go doctors and staff
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 md:gap-6">
                    {MOBILE_SCENES.map((scene, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer bg-gray-50 dark:bg-[#111] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
                            onClick={() => setSelectedImage(`./lifelink/${encodeURIComponent(scene)}`)}
                        >
                            <div className="aspect-[9/16] w-full relative overflow-hidden bg-white dark:bg-[#151515]">
                                <img
                                    src={`./lifelink/${encodeURIComponent(scene)}`}
                                    alt={`Mobile Scene ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white/90 text-gray-900 px-3 py-1.5 rounded-full font-bold text-xs shadow-xl flex items-center gap-1.5">
                                        <ZoomIn size={14} /> View
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-white dark:bg-[#151515] border-t border-gray-100 dark:border-white/5 text-center">
                                <span className="font-bold text-gray-900 dark:text-white text-[10px] md:text-xs truncate block">{scene.replace('.jpg', '')}</span>
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
                    <div className="relative w-full h-full flex items-center justify-center p-4">

                        {/* Image Container */}
                        <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage}
                                alt="Expanded view"
                                style={{ maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))', borderRadius: '12px' }}
                            />
                        </div>
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
