import React, { useState } from 'react';
import { ExternalLink, Globe, Wifi, Plane, Star, ChevronRight, AlertTriangle, Zap, Users, Map, FileText, CheckCircle2, X } from 'lucide-react';

/* ─── Competitor data ────────────────────────────────────────────────────── */
const COMPETITORS = [
    { feature: "Primary Model", globotel: "Hybrid (eSIM + Physical)", saily: "eSIM Only", maya: "eSIM Only", airalo: "eSIM Only", airtel: "Hybrid" },
    { feature: "Pricing", globotel: "Low Cost Bundles 🏆", saily: "Mid Range", maya: "Budget Friendly", airalo: "Expensive", airtel: "Highly Expensive" },
    { feature: "Support", globotel: "24/7 AI + Multilingual", saily: "Chat/Help Center", maya: "Chat/Email", airalo: "24/7 Chat", airtel: "Call Center/App+AI" },
    { feature: "Travel Benefits", globotel: "Lounges, Cabs, Hotels 🏆", saily: "None", maya: "None", airalo: "Loyalty (Airmoney)", airtel: "None" },
    { feature: "Refunds", globotel: "Prorated (Fair Use) 🏆", saily: "30d unactivated", maya: "30d Guarantee", airalo: "Depends", airtel: "Difficult" },
    { feature: "Aadhaar KYC", globotel: "✅ Native", saily: "❌", maya: "❌", airalo: "❌", airtel: "✅ Basic" },
    { feature: "Coverage", globotel: "190+ Countries", saily: "150+", maya: "100+", airalo: "200+", airtel: "India Roaming" },
    { feature: "Best For", globotel: "Total Travel Comfort", saily: "Tech Nomads", maya: "Budget Data", airalo: "First-time eSIM", airtel: "Legacy Users" },
];

/* ─── Blueprint lanes ────────────────────────────────────────────────────── */
const BLUEPRINT = [
    {
        phase: "Acquisition", time: "< 10 Min",
        evidence: "Instagram Ad, Airport Standee",
        customer: "Sees targeted ad / consults at airport kiosk",
        frontstage: "AI Ad Engine (Meta/Google) · Sales Pitch",
        backstage: "CRM Capture · Confirm Leads",
        support: "Marketing Analytics Tools",
        automation: false,
        emotion: "😐 Confused / Hopeful",
        painPoint: "High Roaming Fear",
        opportunity: "First-time discount offer",
    },
    {
        phase: "Plan Selection", time: "< 5 Min",
        evidence: "Comparison UI · Benefit Cards",
        customer: "Compares plans, selects bundle",
        frontstage: "AI Plan Configurator ⚡",
        backstage: "Load CRM & Pricing Engine",
        support: "Cloud Infrastructure",
        automation: true,
        emotion: "🙂 Hopeful",
        painPoint: "Choice Paralysis",
        opportunity: "Smart recommendation engine",
    },
    {
        phase: "KYC", time: "2–5 Min",
        evidence: "ID Upload UI · Secure Badging",
        customer: "Uploads Aadhaar / Passport",
        frontstage: "30-Second OCR Verification ⚡",
        backstage: "Govt API Sync · Fraud Detection",
        support: "Compliance & Fraud Detection",
        automation: true,
        emotion: "😌 Relieved",
        painPoint: "Document Rejection",
        opportunity: "Video KYC fallback",
    },
    {
        phase: "Onboarding", time: "< 2 Min",
        evidence: "Welcome SMS · eSIM QR Code",
        customer: "Activates eSIM via QR / SMS",
        frontstage: "Auto-Activation System ⚡",
        backstage: "Global Carrier Provisioning",
        support: "Partner APIs & Networks",
        automation: true,
        emotion: "✈️ Excited",
        painPoint: "No Signal at Terminal",
        opportunity: "Free 100MB at landing terminal",
    },
    {
        phase: "Billing", time: "Realtime",
        evidence: "Invoice PDF · SMS · UPI receipts",
        customer: "Pays bill, monitors usage",
        frontstage: "Realtime Usage Alerts",
        backstage: "Billing & Usage Engine",
        support: "Payment Gateway",
        automation: false,
        emotion: "😊 Satisfied",
        painPoint: "Data Exhaustion",
        opportunity: "AI-suggested top-ups",
    },
    {
        phase: "Ongoing Support", time: "24/7",
        evidence: "Lounge Pass · Support Ticket",
        customer: "Requests help / accesses perks",
        frontstage: "Multilingual Chatbot ⚡",
        backstage: "Ticket Routing",
        support: "Analytics & QA",
        automation: true,
        emotion: "🥰 Delighted",
        painPoint: "Expensive Lounge Access",
        opportunity: "Integrated lounge & cab booking",
    },
];

/* ─── Personas ───────────────────────────────────────────────────────────── */
const PERSONAS = [
    {
        emoji: "👩‍💼", name: "Pangayavalli J.", age: "56F", type: "Mission-Driven Traveler",
        bio: "Frequent traveler to Europe for fundraising meetings (4–10 day trips).",
        currentBehavior: "Recharges Airtel via Thanks app; data expires too fast (within 48 hrs).",
        feels: "Anxious when data cuts mid-meeting — reliability is mission-critical.",
        need: "A 10-day 'unlimited' fundraising pack that doesn't throttle mid-meeting.",
        color: "#1a56db",
    },
    {
        emoji: "🧑‍💻", name: "Prabhaharan K.", age: "27M", type: "Leisure Seeker",
        bio: "Business owner using corporate flight perks for sightseeing and tourism.",
        currentBehavior: "Recharges temporary SIMs; heavy data for maps and photo sharing.",
        feels: "Wants to enjoy the 'free' vacation without hidden data costs.",
        need: "Easy top-ups + integrated cab booking (Uber/Ola) for stress-free sightseeing.",
        color: "#1C5D99",
    },
    {
        emoji: "⚓", name: "Navaneeth", age: "28M", type: "Long-Haul Seafarer",
        bio: "Sails for 3–4 months continuous; uses Starlink at sea, needs SIM at ports.",
        currentBehavior: "Avoids expensive roaming; uses WhatsApp VoIP for calls.",
        feels: "Needs a SIM that stays active 120 days without monthly recharges.",
        need: "Long-term validity plan with low-cost terrestrial VoIP integration.",
        color: "#0e4d7b",
    },
];

/* ─── BlueprintLane row ──────────────────────────────────────────────────── */
const PhaseCard: React.FC<{ bp: typeof BLUEPRINT[0]; idx: number }> = ({ bp, idx }) => (
    <div className={`rounded-2xl border overflow-hidden ${bp.automation ? 'border-yellow-400/40 bg-yellow-400/5' : 'border-black/5 dark:border-white/10 bg-gray-50 dark:bg-white/5'}`}>
        <div className={`px-5 py-3 flex items-center justify-between ${bp.automation ? 'bg-yellow-400/10' : 'bg-gray-100 dark:bg-white/5'}`}>
            <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white`} style={{ background: '#1C5D99' }}>{idx + 1}</span>
                <span className="font-bold text-sm text-gray-900 dark:text-white">{bp.phase}</span>
                {bp.automation && <span className="text-[9px] font-bold bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full uppercase tracking-widest">⚡ Auto</span>}
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{bp.time}</span>
        </div>
        <div className="p-4 space-y-2 text-xs">
            <div><span className="font-bold text-gray-500 dark:text-gray-400 uppercase text-[9px] tracking-widest block">Evidence</span><span className="text-gray-700 dark:text-gray-300">{bp.evidence}</span></div>
            <div><span className="font-bold text-[#1C5D99] uppercase text-[9px] tracking-widest block">Customer Action</span><span className="text-gray-700 dark:text-gray-300">{bp.customer}</span></div>
            <div><span className="font-bold text-green-600 uppercase text-[9px] tracking-widest block">Frontstage</span><span className="text-gray-700 dark:text-gray-300">{bp.frontstage}</span></div>
            <div><span className="font-bold text-gray-400 uppercase text-[9px] tracking-widest block">Backstage</span><span className="text-gray-500 dark:text-gray-400">{bp.backstage}</span></div>
            <div><span className="font-bold text-gray-400 uppercase text-[9px] tracking-widest block">Support Process</span><span className="text-gray-500 dark:text-gray-400">{bp.support}</span></div>
            <div className="pt-1 mt-1 border-t border-black/5 dark:border-white/5 flex items-center gap-1">
                <span className="text-red-500 font-bold text-[9px] uppercase">⚡ Pain:</span>
                <span className="text-gray-600 dark:text-gray-400">{bp.painPoint}</span>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-green-500 font-bold text-[9px] uppercase">→ Fix:</span>
                <span className="text-gray-600 dark:text-gray-400">{bp.opportunity}</span>
            </div>
        </div>
        <div className="px-4 pb-3 text-center text-lg">{bp.emotion}</div>
    </div>
);

/* ─── Main component ─────────────────────────────────────────────────────── */
export const GlobotelVisuals: React.FC = () => {
    const [activePersona, setActivePersona] = useState(0);

    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0e1f4d] to-[#1a3a7c] p-8 sm:p-12 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="text-blue-300" size={32} />
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">GloboTel</h2>
                                <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">Service Blueprint V1.0</p>
                            </div>
                        </div>
                        <p className="text-white/80 max-w-xl text-sm leading-relaxed mb-6">
                            A travel-centric hybrid telecom provider fusing global connectivity (190+ countries) with a value-added travel ecosystem — designed to eliminate <strong className="text-white">"Landing Anxiety"</strong> experienced by Indian international travelers.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["190+ Countries", "eSIM + Physical Hybrid", "NGO/Aadhaar KYC", "Lounges & Cabs", "< 20 Min Total Onboarding", "95% KYC Automation"].map((t) => (
                                <span key={t} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                        <a
                            href="./globotel/GloboTel_Service_Blueprint.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white text-[#0e1f4d] font-bold text-sm rounded-xl hover:scale-105 transition-all shadow-lg flex items-center gap-2 justify-center"
                        >
                            <FileText size={16} /> Download Presentation
                        </a>
                        <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-center">
                            <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">Engagement</p>
                            <p className="text-sm font-bold text-white">EY · Senior Staff Designer</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission ────────────────────────────────────────────────────────── */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: <AlertTriangle size={20} />, label: "Primary Challenge", color: "#ef4444", content: '"Landing Anxiety" — the acute fear and data cost-shock experienced by Indian travelers the moment they land internationally with no reliable connectivity.' },
                    { icon: <Zap size={20} />, label: "Core Innovation", color: "#f59e0b", content: 'Hybrid eSIM + Physical SIM with Aadhaar-integrated KYC. Competitors cannot easily replicate this for the Indian market — a structural moat.' },
                    { icon: <Star size={20} />, label: "Competitive Edge", color: "#22c55e", content: 'The only provider combining non-telecom travel perks (lounges, cabs, hotels) with transparent prorated billing and 24/7 multilingual AI support.' },
                ].map((c, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/10">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: c.color + '20', color: c.color }}>{c.icon}</div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: c.color }}>{c.label}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{c.content}</p>
                    </div>
                ))}
            </section>

            {/* ── Competitor Table ────────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Globe className="text-blue-500" size={20} /> Competitive Landscape
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">GloboTel vs. Saily, Maya, Airalo & Airtel Roaming</p>
                <div className="rounded-3xl overflow-hidden border border-black/5 dark:border-white/10">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[750px] text-sm">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#0e1f4d] to-[#1a3a7c] text-white">
                                    {["Feature", "GloboTel ★", "Saily", "Maya", "Airalo", "Airtel Roaming"].map((h, i) => (
                                        <th key={i} className={`px-5 py-4 text-left font-bold text-xs uppercase tracking-wider ${i === 1 ? 'bg-white/15' : ''}`}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {COMPETITORS.map((row, ri) => (
                                    <tr key={ri} className={`border-t border-black/5 dark:border-white/5 ${ri % 2 === 0 ? 'bg-white dark:bg-white/[0.03]' : 'bg-gray-50 dark:bg-white/[0.01]'}`}>
                                        <td className="px-5 py-3.5 font-medium text-gray-900 dark:text-white">{row.feature}</td>
                                        <td className="px-5 py-3.5 font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10">{row.globotel}</td>
                                        <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400">{row.saily}</td>
                                        <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400">{row.maya}</td>
                                        <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400">{row.airalo}</td>
                                        <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400">{row.airtel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── Personas ───────────────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Users className="text-blue-500" size={20} /> Persona Research
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Based on interviews with 6 frequent Indian international travelers (outbound)</p>
                <div className="flex gap-3 mb-6">
                    {PERSONAS.map((p, i) => (
                        <button
                            key={i}
                            onClick={() => setActivePersona(i)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${activePersona === i ? 'text-white shadow-lg' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'}`}
                            style={activePersona === i ? { background: p.color } : {}}
                        >
                            <span>{p.emoji}</span> {p.type}
                        </button>
                    ))}
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="p-8 text-white flex flex-col gap-4" style={{ background: PERSONAS[activePersona].color }}>
                            <div className="text-5xl">{PERSONAS[activePersona].emoji}</div>
                            <div>
                                <h4 className="text-xl font-bold">{PERSONAS[activePersona].name}</h4>
                                <p className="text-white/70 text-sm">{PERSONAS[activePersona].age} · {PERSONAS[activePersona].type}</p>
                            </div>
                            <p className="text-sm text-white/80 leading-relaxed">{PERSONAS[activePersona].bio}</p>
                        </div>
                        <div className="col-span-3 p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-black/20 rounded-2xl p-5 border border-black/5 dark:border-white/10">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-3">CURRENT BEHAVIOR</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{PERSONAS[activePersona].currentBehavior}</p>
                            </div>
                            <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-2xl p-5">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-3">PAIN / EMOTION</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{PERSONAS[activePersona].feels}</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-2xl p-5">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-3">CORE NEED</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{PERSONAS[activePersona].need}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Journey Map ────────────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Map className="text-blue-500" size={20} /> End-to-End Journey Map
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Critical journey phases — the "Landing" moment is the peak anxiety point</p>
                <div className="overflow-x-auto pb-2">
                    <div className="flex gap-0 min-w-max">
                        {[
                            { phase: "Acquisition", emoji: "📱", state: "Researching at home/airport", emotion: "😐 Confused / Hopeful", action: "Sees targeted GloboTel ad", opportunity: "First-time discount" },
                            { phase: "KYC & Plan", emoji: "🪪", state: "Uploading ID (Aadhaar/Passport)", emotion: "😌 Relieved", action: "30s OCR AI Verification", opportunity: "Video KYC fallback" },
                            { phase: "The Landing ⚠️", emoji: "✈️", state: "Landing in Paris — critical!", emotion: "😰 Peak Anxiety", action: "Auto-activation + perks triggered", opportunity: "Free 100MB at terminal" },
                            { phase: "Ongoing Use", emoji: "🌍", state: "Moving between cities", emotion: "😊 Satisfied", action: "Usage alerts, top-up suggestions", opportunity: "Integrated lounge access" },
                        ].map((j, i, arr) => (
                            <div key={i} className="flex items-stretch">
                                <div className={`w-52 p-5 flex flex-col gap-3 border border-black/5 dark:border-white/10 ${i === 0 ? 'rounded-l-2xl' : ''} ${i === arr.length - 1 ? 'rounded-r-2xl' : ''} border-r-0 last:border-r ${j.phase.includes('⚠️') ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-500/30' : 'bg-gray-50 dark:bg-white/5'}`}>
                                    <span className="text-3xl">{j.emoji}</span>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${j.phase.includes('⚠️') ? 'text-red-500' : 'text-blue-500'}`}>{j.phase}</span>
                                    <p className="text-xs text-gray-700 dark:text-gray-300 flex-1 leading-relaxed">{j.state}</p>
                                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{j.action}</p>
                                    <p className="text-xs">{j.emotion}</p>
                                    <span className="text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full font-bold">→ {j.opportunity}</span>
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="flex items-center -mx-px z-10">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${i === 1 ? 'bg-red-500' : 'bg-blue-600'}`}>
                                            <ChevronRight size={12} className="text-white" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Service Blueprint ──────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Wifi className="text-blue-500" size={20} /> Service Blueprint V1.0
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-6 text-xs">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-yellow-400 rounded-full" /> Automation Opportunity</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-red-400 rounded-full" /> Failure / Pain Point</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-green-500 rounded-full" /> Design Opportunity</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {BLUEPRINT.map((bp, i) => <PhaseCard key={i} bp={bp} idx={i} />)}
                </div>

                {/* Blueprint image */}
                <div className="mt-8 rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-xl">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 px-6 pt-5 pb-2">Full Service Blueprint Document</p>
                    <img src="./globotel/blueprint.jpg" alt="GloboTel Service Blueprint" className="w-full h-auto object-contain" />
                </div>
            </section>

            {/* ── Key Metrics ────────────────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-[#0e1f4d] to-[#1a3a7c] rounded-3xl p-8 sm:p-12 text-white">
                <h3 className="text-xl font-bold mb-8 text-center">Operational Targets</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { value: "< 20 Min", label: "Total Journey Time", sub: "Acquisition to Active SIM" },
                        { value: "95%", label: "KYC Automation", sub: "30-second OCR target" },
                        { value: "190+", label: "Countries", sub: "Via Global Carrier Sync" },
                        { value: "24/7", label: "AI Support", sub: "Multilingual chatbot" },
                    ].map((m, i) => (
                        <div key={i} className="text-center bg-white/10 border border-white/10 rounded-2xl p-6">
                            <div className="text-3xl font-bold text-blue-300 mb-2">{m.value}</div>
                            <div className="text-sm font-bold text-white mb-1">{m.label}</div>
                            <div className="text-xs text-white/60">{m.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Design Rationale ───────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Senior Design Rationale</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Why Hybrid (eSIM + Physical)?",
                            icon: "📡",
                            content: "eSIM-only solutions fail India's mass market — older devices, rural procurement, and airport kiosk expectations all require physical SIM fallback. The hybrid model captures both premium and legacy user segments without sacrificing the speed of eSIM onboarding."
                        },
                        {
                            title: "Why Aadhaar KYC?",
                            icon: "🪪",
                            content: "International eSIM providers (Airalo, Saily) cannot offer native Aadhaar verification — this creates a structural moat for GloboTel in the Indian market. AI OCR + Aadhaar sync reduces KYC time from 10 minutes to under 30 seconds, directly addressing the highest drop-off point in competitor funnels."
                        },
                        {
                            title: "Why Travel Perks?",
                            icon: "🛋️",
                            content: "Connectivity is commoditized. Lounge access, cab booking, and hotel discounts create a differentiated value ecosystem where GloboTel becomes part of the travel experience, not just an infrastructure provider. This increases LTV and reduces churn."
                        },
                        {
                            title: "Why Prorated Refunds?",
                            icon: "💰",
                            content: "Airtel's refund difficulty is consistently cited as a top complaint in its app reviews. By offering fair-use prorated refunds, GloboTel converts a competitor weakness into a retention driver — lower commercial risk perception directly increases conversion from comparison pages."
                        },
                    ].map((r, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">{r.icon}</span>
                                <h4 className="font-bold text-gray-900 dark:text-white">{r.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
