import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, FileText, Play, Pause, Brain, Activity, AlertTriangle, Cpu, Star, Lightbulb, Heart, Users, ChevronRight } from 'lucide-react';

/* ─── Design Rationale ─────────────────────────────────────────────────── */
const RATIONALE = [
    {
        icon: <Brain size={18} />,
        title: "Bioluminescent Palette",
        desc: "Colour choices mirror real emotional states — teal for focused calm, amber for creative energy, pink for stress alerts. No arbitrary brand colours; every hue has emotional intent rooted in colour psychology.",
    },
    {
        icon: <Activity size={18} />,
        title: "Fluid Over Boxy",
        desc: "Every element uses glowing orbs, pulse rings, and fluid gradients instead of sharp card borders. The interface feels alive — matching the living, breathing nature of brainwave data from NeuroPods.",
    },
    {
        icon: <Heart size={18} />,
        title: "Empathetic Tone",
        desc: "Ethical alerts are framed as care ('Consider wellness notifications') not alarms. Intelligent suggestions use language like 'Let this feature rest' — reflecting an AI that cares about both users and the team.",
    },
    {
        icon: <Users size={18} />,
        title: "Persona-Driven Layers",
        desc: "CXOs see global heatmaps and ethical pulse. Devs/Ops see feature-level emotional ratings and system health. The Splash screen treats the tool itself as an empathetic AI persona welcoming the team.",
    },
];

/* ─── Features from Team Insight ──────────────────────────────────────── */
const FEATURES = [
    { name: "Focus Mode", users: "187K", rating: 4.8, color: "#22d3ee", dot: "bg-cyan-400", icon: "🎯", status: "thriving" },
    { name: "Creative Flow", users: "93K", rating: 4.6, color: "#f59e0b", dot: "bg-amber-400", icon: "💡", status: "thriving" },
    { name: "Meditation", users: "64K", rating: 4.4, color: "#a78bfa", dot: "bg-violet-400", icon: "🧘", status: "stable" },
    { name: "Sleep Assistant", users: "112K", rating: 4.7, color: "#818cf8", dot: "bg-indigo-400", icon: "🌙", status: "thriving" },
    { name: "Energy Boost", users: "48K", rating: 4.2, color: "#fb7185", dot: "bg-rose-400", icon: "⚡", status: "stable" },
    { name: "Social Mode", users: "12K", rating: 3.8, color: "#f43f5e", dot: "bg-pink-500", icon: "💬", status: "rest" },
    { name: "Nature Sounds", users: "156K", rating: 4.9, color: "#4ade80", dot: "bg-green-400", icon: "🌿", status: "thriving" },
    { name: "Study Mode", users: "78K", rating: 4.3, color: "#fbbf24", dot: "bg-yellow-400", icon: "📚", status: "stable" },
];

/* ─── Animated orb ─────────────────────────────────────────────────────── */
const Orb: React.FC<{ color: string; size: number; x: number; y: number; delay?: number }> = ({ color, size, x, y, delay = 0 }) => (
    <div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size, height: size,
            left: `${x}%`, top: `${y}%`,
            background: color,
            filter: `blur(${size * 0.45}px)`,
            opacity: 0.55,
            animation: `pulse ${3 + delay}s ease-in-out ${delay}s infinite alternate`,
        }}
    />
);

/* ─── Global Pulse mini-orb map ────────────────────────────────────────── */
const REGIONS = [
    { label: "NA", users: "874K", x: 18, y: 38, color: "#22d3ee", size: 54 },
    { label: "EU", users: "652K", x: 37, y: 42, color: "#f43f5e", size: 46 },
    { label: "AS", users: "782K", x: 56, y: 52, color: "#a78bfa", size: 50 },
    { label: "", users: "", x: 30, y: 28, color: "#22d3ee", size: 16 },
    { label: "", users: "", x: 46, y: 38, color: "#f59e0b", size: 20 },
    { label: "", users: "", x: 60, y: 30, color: "#22d3ee", size: 16 },
    { label: "", users: "", x: 62, y: 45, color: "#4ade80", size: 14 },
    { label: "", users: "", x: 12, y: 52, color: "#22d3ee", size: 16 },
    { label: "", users: "", x: 25, y: 58, color: "#f59e0b", size: 16 },
    { label: "", users: "", x: 50, y: 62, color: "#f43f5e", size: 20 },
    { label: "", users: "", x: 72, y: 40, color: "#818cf8", size: 14 },
];

/* ─── Inline pulse CSS ─────────────────────────────────────────────────── */
const PulseStyle = () => (
    <style>{`
    @keyframes pulse {
      from { transform: scale(1); opacity: 0.5; }
      to   { transform: scale(1.15); opacity: 0.7; }
    }
    @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-12px); }
    }
    @keyframes progress-fill {
      from { width: 0%; }
      to   { width: var(--w); }
    }
    .animate-float { animation: float 4s ease-in-out infinite; }
    .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  `}</style>
);

/* ─── Main Component ────────────────────────────────────────────────────── */
export const NeuropodsVisuals: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState<'splash' | 'pulse' | 'team'>('splash');
    const [videoPlaying, setVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (videoPlaying) { videoRef.current.pause(); }
            else { videoRef.current.play(); }
            setVideoPlaying(!videoPlaying);
        }
    };

    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">
            <PulseStyle />

            {/* ── Hero ────────────────────────────────────────────────────────── */}
            <section className="relative rounded-3xl overflow-hidden bg-[#0a0e27] p-8 sm:p-12 text-white">
                <Orb color="#4f46e5" size={400} x={60} y={-20} delay={0} />
                <Orb color="#7c3aed" size={300} x={-10} y={50} delay={1} />
                <Orb color="#0891b2" size={200} x={80} y={70} delay={2} />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl shadow-lg shadow-purple-900/50">🧠</div>
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">NeuroPods Insight</h2>
                                <p className="text-purple-400 text-sm font-bold uppercase tracking-widest">Emotional Intelligence Dashboard · EY Engagement</p>
                            </div>
                        </div>
                        <p className="text-white/70 max-w-xl text-sm leading-relaxed mb-6">
                            An internal insight tool for the team building NeuroPods — a brainwave-adaptive wearable that interprets neural activity to adapt audio environments. The dashboard goes beyond data: it <strong className="text-white">feels</strong> like the product it serves.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["3 Deliverables", "Global Pulse View", "Team & Tool Insight", "Splash Animation", "Emotional UI", "Dark Mode System"].map(t => (
                                <span key={t} className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-bold">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                        <a href="./neuropods/global-pulse.pdf" target="_blank" rel="noopener noreferrer"
                            className="px-5 py-3 bg-white text-[#0a0e27] font-bold text-sm rounded-xl hover:scale-105 transition-all flex items-center gap-2 justify-center">
                            <FileText size={14} /> Global Pulse PDF
                        </a>
                        <a href="./neuropods/team-insight.pdf" target="_blank" rel="noopener noreferrer"
                            className="px-5 py-3 bg-white/10 border border-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 justify-center">
                            <FileText size={14} /> Team Insight PDF
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Screen navigator ─────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">The Three Deliverables</h3>
                <div className="flex gap-3 mb-6 flex-wrap">
                    {([
                        { key: 'splash', label: '🌙 Splash / Loading', desc: 'Emotional entry' },
                        { key: 'pulse', label: '🌍 Global Pulse View', desc: 'CXO dashboard' },
                        { key: 'team', label: '🛠️ Team & Tool Insight', desc: 'Dev/Ops view' },
                    ] as const).map(s => (
                        <button key={s.key} onClick={() => setActiveScreen(s.key)}
                            className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all border ${activeScreen === s.key
                                ? 'bg-[#0a0e27] text-white border-purple-500/50 shadow-lg shadow-purple-900/30'
                                : 'bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-black/5 dark:border-white/10 hover:border-purple-500/30'}`}>
                            {s.label}
                            <span className={`ml-2 text-[10px] font-normal ${activeScreen === s.key ? 'text-purple-300' : 'text-gray-400'}`}>{s.desc}</span>
                        </button>
                    ))}
                </div>

                {/* Screens */}
                {activeScreen === 'splash' && (
                    <div className="space-y-6">
                        <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-[#0a0e27] shadow-2xl shadow-purple-900/20 group">
                            <img src="./neuropods/splash.jpg" alt="NeuroPods Splash Screen" className="w-full h-auto object-cover rounded-3xl" />
                            {/* Video overlay button */}
                            <div className="absolute inset-0 flex items-end justify-center pb-8">
                                <button onClick={toggleVideo}
                                    className="flex items-center gap-2 px-6 py-3 bg-purple-600/80 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-purple-600 transition-all border border-purple-400/30 text-sm">
                                    {videoPlaying ? <Pause size={16} /> : <Play size={16} />}
                                    {videoPlaying ? 'Pause Animation' : '▶ Play Splash Animation (MP4)'}
                                </button>
                            </div>
                        </div>
                        {/* Hidden video — plays when button is clicked */}
                        <video ref={videoRef} src="./neuropods/splash.mp4" className="w-full rounded-3xl border border-purple-500/20 hidden"
                            onEnded={() => setVideoPlaying(false)} />
                        {videoPlaying && (
                            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-[#0a0e27] shadow-2xl shadow-purple-900/20">
                                <video ref={videoRef} src="./neuropods/splash.mp4" autoPlay className="w-full h-auto"
                                    onEnded={() => setVideoPlaying(false)} />
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: "🧠", title: "Tool as Persona", desc: "The tool itself is the AI persona — welcoming the team with 'Connecting to emotional intelligence', setting a mindful tone before any data is shown." },
                                { icon: "🌊", title: "Ambient Orbs", desc: "Floating translucent orbs evoke brainwave states — blue for calm, purple for creativity — calibrating the team's emotional expectations before the dashboard loads." },
                                { icon: "⏳", title: "Loading as Ritual", desc: "The progress bar and step text ('Calibrating neural networks · Syncing emotional data') make loading feel intentional, not just a system delay." },
                            ].map((c, i) => (
                                <div key={i} className="bg-[#0a0e27]/80 dark:bg-[#0a0e27] rounded-2xl p-5 border border-purple-500/20">
                                    <span className="text-2xl mb-3 block">{c.icon}</span>
                                    <h4 className="font-bold text-white mb-2 text-sm">{c.title}</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeScreen === 'pulse' && (
                    <div className="space-y-6">
                        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/10">
                            <img src="./neuropods/global-pulse.jpg" alt="Global Pulse View" className="w-full h-auto object-cover" />
                        </div>
                        {/* Live mock recreation */}
                        <div className="bg-[#0d1130] rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                            <Orb color="#0891b2" size={300} x={50} y={20} delay={0} />
                            <Orb color="#7c3aed" size={200} x={80} y={60} delay={1.5} />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Global Emotional Pulse</h4>
                                        <p className="text-xs text-gray-400">Real-time consciousness landscape across 127 regions</p>
                                    </div>
                                    <div className="flex gap-4">
                                        {[
                                            { val: "2.4M", label: "Active Users" },
                                            { val: "89%", label: "Health Score" },
                                            { val: "127", label: "Live Regions" },
                                        ].map((m, i) => (
                                            <div key={i} className="text-center bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                                                <div className="text-lg font-bold text-purple-300">{m.val}</div>
                                                <div className="text-[10px] text-gray-500 uppercase tracking-widest">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Map area */}
                                <div className="relative h-64 bg-[#080c22] rounded-2xl overflow-hidden border border-white/5 mb-6">
                                    {REGIONS.map((r, i) => (
                                        <div key={i} className="absolute flex items-center justify-center"
                                            style={{ left: `${r.x}%`, top: `${r.y}%`, transform: 'translate(-50%,-50%)' }}>
                                            <div className="rounded-full flex items-center justify-center text-white font-bold"
                                                style={{
                                                    width: r.size, height: r.size, background: r.color + '30', border: `2px solid ${r.color}60`,
                                                    boxShadow: `0 0 ${r.size * 0.8}px ${r.color}40`,
                                                    animation: `pulse ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite alternate`
                                                }}>
                                                {r.label && (
                                                    <div className="text-center">
                                                        <div className="text-[9px] font-bold" style={{ color: r.color }}>{r.label}</div>
                                                        <div className="text-[8px] text-white/80">{r.users}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="absolute bottom-3 left-3 flex gap-3">
                                        {[
                                            { label: "Deep Focus", color: "#22d3ee" },
                                            { label: "Creative Flow", color: "#f59e0b" },
                                            { label: "Relaxation", color: "#818cf8" },
                                            { label: "Fatigue", color: "#f43f5e" },
                                        ].map((l, i) => (
                                            <div key={i} className="flex items-center gap-1.5">
                                                <div className="w-2 h-2 rounded-full" style={{ background: l.color, boxShadow: `0 0 6px ${l.color}` }} />
                                                <span className="text-[9px] text-gray-400">{l.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* State distribution + Ethical Pulse */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                        <h5 className="text-sm font-bold text-white mb-4">State Distribution</h5>
                                        {[
                                            { label: "Deep Focus", val: 42, color: "#22d3ee" },
                                            { label: "Creative Flow", val: 28, color: "#f59e0b" },
                                            { label: "Relaxation", val: 18, color: "#818cf8" },
                                            { label: "Fatigue", val: 12, color: "#f43f5e" },
                                        ].map((s, i) => (
                                            <div key={i} className="mb-3">
                                                <div className="flex justify-between text-xs mb-1">
                                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: s.color }} /><span className="text-gray-300">{s.label}</span></div>
                                                    <span className="font-bold" style={{ color: s.color }}>{s.val}%</span>
                                                </div>
                                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full" style={{ width: `${s.val}%`, background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                        <h5 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle size={14} className="text-red-400" /> Ethical Pulse</h5>
                                        <div className="space-y-3">
                                            <div className="border-l-2 border-red-500 pl-3 bg-red-500/10 rounded-r-xl py-2 pr-3">
                                                <p className="text-xs font-bold text-red-400 flex items-center justify-between">🔴 Burnout Risk: Tokyo Region <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full">HIGH</span></p>
                                                <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">23% increase in fatigue states over 48hrs. Consider wellness notification and gentle break reminders.</p>
                                            </div>
                                            <div className="border-l-2 border-amber-500 pl-3 bg-amber-500/10 rounded-r-xl py-2 pr-3">
                                                <p className="text-xs font-bold text-amber-400 flex items-center justify-between">🟡 Extended Usage: NYC <span className="bg-amber-500 text-white text-[9px] px-2 py-0.5 rounded-full">MEDIUM</span></p>
                                                <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">Users averaging 8+ hours daily. Recommend adaptive break patterns and mindfulness prompts.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeScreen === 'team' && (
                    <div className="space-y-6">
                        <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/10">
                            <img src="./neuropods/team-insight.jpg" alt="Team & Tool Insight" className="w-full h-auto object-cover" />
                        </div>
                        {/* Live mock */}
                        <div className="bg-[#0d1130] rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                            <Orb color="#7c3aed" size={300} x={70} y={-20} delay={0.5} />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-white flex items-center gap-2"><Cpu size={18} className="text-purple-400" /> Feature Emotional Impact</h4>
                                        <p className="text-xs text-gray-400">Emotional resonance per feature — this week</p>
                                    </div>
                                    <div className="flex gap-2 text-xs font-bold">
                                        {["Weekly", "Monthly", "All Time"].map((t, i) => (
                                            <span key={i} className={`px-3 py-1.5 rounded-lg ${i === 0 ? 'bg-purple-600 text-white' : 'text-gray-500'}`}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                                    {FEATURES.map((f, i) => (
                                        <div key={i} className={`rounded-2xl p-4 border relative overflow-hidden ${f.status === 'rest' ? 'border-pink-500/30 bg-pink-950/20' : 'border-white/5 bg-white/5'}`}>
                                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full" style={{ background: f.color, boxShadow: `0 0 6px ${f.color}` }} />
                                            <div className="text-2xl mb-2">{f.icon}</div>
                                            <p className="text-xs font-bold text-white mb-1">{f.name}</p>
                                            <p className="text-lg font-bold" style={{ color: f.color }}>{f.users}</p>
                                            <p className="text-[9px] text-gray-500 mb-2">USERS</p>
                                            <div className="flex items-center justify-between">
                                                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden mr-2">
                                                    <div className="h-full rounded-full" style={{ width: `${(f.rating / 5) * 100}%`, background: f.color }} />
                                                </div>
                                                <span className="text-[10px] font-bold" style={{ color: f.color }}>{f.rating}</span>
                                            </div>
                                            {f.status === 'rest' && (
                                                <span className="mt-2 block text-[9px] text-pink-400 font-bold">⚠ Low engagement</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {/* System Health + Suggestions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                        <h5 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Heart size={14} className="text-pink-400" /> System Health</h5>
                                        {[
                                            { label: "API Response Time", val: "42ms", pct: 92, color: "#4ade80", note: "Excellent performance." },
                                            { label: "Neural Processing Load", val: "67%", pct: 67, color: "#f59e0b", note: "Moderate. Consider scaling at peak." },
                                            { label: "User Satisfaction", val: "4.6/5", pct: 92, color: "#818cf8", note: "Strong emotional connection." },
                                        ].map((m, i) => (
                                            <div key={i} className="mb-4">
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="text-gray-300">{m.label}</span>
                                                    <span className="font-bold" style={{ color: m.color }}>{m.val}</span>
                                                </div>
                                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                                                    <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: m.color, boxShadow: `0 0 8px ${m.color}60` }} />
                                                </div>
                                                <p className="text-[9px] text-gray-500">{m.note}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                        <h5 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Lightbulb size={14} className="text-yellow-400" /> Intelligent Suggestions</h5>
                                        <div className="space-y-3">
                                            <div className="bg-[#1e0535] border border-purple-500/30 rounded-xl p-4">
                                                <p className="text-xs font-bold text-purple-300 mb-1">💬 Let Social Mode Rest</p>
                                                <p className="text-[10px] text-gray-400 leading-relaxed mb-2">Low engagement and mixed emotional response. Consider pausing development to focus on Focus Mode and Nature Sounds.</p>
                                                <div className="flex gap-2"><span className="text-[9px] border border-purple-500/50 text-purple-300 px-2 py-1 rounded-lg cursor-pointer hover:bg-purple-900/30">Review Analytics</span><span className="text-[9px] border border-purple-500/50 text-purple-300 px-2 py-1 rounded-lg cursor-pointer hover:bg-purple-900/30">Schedule Discussion</span></div>
                                            </div>
                                            <div className="bg-[#041a10] border border-green-500/30 rounded-xl p-4">
                                                <p className="text-xs font-bold text-green-300 mb-1">🎯 Amplify Focus Mode</p>
                                                <p className="text-[10px] text-gray-400 leading-relaxed mb-2">Users report 92% emotional satisfaction. Consider adding customisation options and expanding to workplace scenarios.</p>
                                                <div className="flex gap-2"><span className="text-[9px] border border-green-500/50 text-green-300 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-900/30">View User Stories</span><span className="text-[9px] border border-green-500/50 text-green-300 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-900/30">Plan Sprint</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* ── Design Rationale ─────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Brain className="text-purple-500" size={20} /> Design Rationale
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Core decisions and emotional reasoning behind the NeuroPods Insight Tool</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {RATIONALE.map((r, i) => (
                        <div key={i} className="bg-[#0d1130] border border-purple-500/20 rounded-2xl p-6 group hover:border-purple-500/40 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors">{r.icon}</div>
                            <h4 className="font-bold text-white mb-2">{r.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Personas considered ──────────────────────────────────────────── */}
            <section className="bg-[#0d1130] rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden">
                <Orb color="#4f46e5" size={300} x={80} y={50} delay={0} />
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Users size={20} className="text-purple-400" /> Personas Considered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { emoji: "👔", role: "CXO / Team Leader", color: "#818cf8", screen: "Global Pulse View", needs: ["Global insight at a glance", "Ethical pulse of usage", "Stress zone monitoring", "Trend visibility across regions"] },
                            { emoji: "🧑‍💻", role: "Developer / Designer / Ops", color: "#22d3ee", screen: "Team & Tool Insight", needs: ["Feature-level emotional feedback", "Bug emotional impact reports", "System health monitoring", "Intelligent workload suggestions"] },
                            { emoji: "🤖", role: "The Tool itself (AI Persona)", color: "#a78bfa", screen: "Splash / Loading Screen", needs: ["Empathetic welcome message", "Calm loading experience", "Emotional tone-setting", "Mindful transition into data"] },
                        ].map((p, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                                <div className="text-3xl mb-3">{p.emoji}</div>
                                <h4 className="font-bold text-white mb-0.5">{p.role}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: p.color }}>→ {p.screen}</p>
                                <ul className="space-y-1.5">
                                    {p.needs.map((n, j) => (
                                        <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />{n}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
