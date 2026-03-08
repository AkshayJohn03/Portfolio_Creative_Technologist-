import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, ShoppingBag, Eye, Shield, Leaf, TrendingUp, Users, Heart, Zap, Globe, Package, ChevronRight, BarChart2, CheckCircle2, Search, Filter, MessageSquare, Menu, BookOpen, X, AlertTriangle, CheckCircle, Target, Star, Map } from 'lucide-react';

/* ─── Survey data ─────────────────────────────────────────────────────────── */
const SURVEY_DATA = {
    title: "Primary Research Survey — Second-Hand Products",
    url: "https://docs.google.com/forms/d/1R_WODkYpTHwSguKLl8jZH6QWz726h9GTgyhu2xZLZKM/edit#responses",
    respondents: 57,
    questions: [
        {
            question: "Would you buy second-hand / used products?",
            type: "pie",
            data: [
                { label: "Yes", value: 50.9, color: "#1C5D99" },
                { label: "Maybe / Conditionally", value: 29.8, color: "#639FAB" },
                { label: "No", value: 19.3, color: "#e5e7eb" },
            ],
            insight: "Over 50% are willing. The 'conditional' group is the primary conversion target — they need Trust & Quality signals."
        },
        {
            question: "What is your biggest concern when buying second-hand online?",
            type: "bar",
            data: [
                { label: "Product Condition & Originality", value: 72 },
                { label: "Trustworthiness of Seller", value: 61 },
                { label: "Pricing too high", value: 48 },
                { label: "Limited Range of Products", value: 44 },
                { label: "Difficult navigation / UX", value: 28 },
                { label: "Payment Security", value: 35 },
            ],
            insight: "Condition & Originality is the dominant pain point by far, directly validating ThriftHaven's NGO verification model."
        },
        {
            question: "Which product categories would you buy second-hand?",
            type: "bar",
            data: [
                { label: "Clothing & Accessories", value: 78 },
                { label: "Books & Media", value: 70 },
                { label: "Home Appliances & Furniture", value: 52 },
                { label: "Electronics", value: 45 },
                { label: "Vehicles / Cars", value: 18 },
            ],
            insight: "Clothing and Books confirm the initial product catalog strategy. Vehicles rank lowest — excluded from MVP scope."
        },
        {
            question: "What motivates you to use a second-hand platform?",
            type: "bar",
            data: [
                { label: "Saving Money / Price", value: 86 },
                { label: "Sustainability / Eco Impact", value: 54 },
                { label: "Unique / Vintage Items", value: 38 },
                { label: "Reducing Waste", value: 47 },
            ],
            insight: "Price remains the dominant driver. Sustainability ranks second — strong alignment with ThriftHaven's brand values."
        },
        {
            question: "Key features you expect from a second-hand app?",
            type: "bar",
            data: [
                { label: "Verified Sellers / Trust Badges", value: 80 },
                { label: "Wide Product Range", value: 75 },
                { label: "Competitive Pricing", value: 82 },
                { label: "Easy Returns & Refunds", value: 58 },
                { label: "Detailed Condition Report", value: 65 },
            ],
            insight: "All three ThriftHaven pillars (Trust, Range, Price) are top-ranked features, validating the core USP."
        }
    ]
};

/* ─── Wireframe screens ───────────────────────────────────────────────────── */
const WIREFRAMES = [
    { file: "Splash Screen.jpg", label: "Splash Screen" },
    { file: "Login Page.jpg", label: "Login" },
    { file: "sign up.jpg", label: "Sign Up" },
    { file: "Home Page.jpg", label: "Home" },
    { file: "Search.jpg", label: "Search" },
    { file: "Search Results.jpg", label: "Search Results" },
    { file: "Product Page.jpg", label: "Product Page" },
    { file: "Product- image zoom.jpg", label: "Image Zoom" },
    { file: "Favourite.jpg", label: "Favourites" },
    { file: "Notification.jpg", label: "Notifications" },
    { file: "Order History.jpg", label: "Order History" },
    { file: "Confirmation.jpg", label: "Confirmation" },
    { file: "Account Page - Buyer.jpg", label: "Buyer Account" },
    { file: "Account Page - Seller.jpg", label: "Seller Account" },
    { file: "My Products.jpg", label: "My Products" },
    { file: "Insights.jpg", label: "Insights" },
    { file: "Profile Setting.jpg", label: "Profile Settings" },
    { file: "Saved Cards.jpg", label: "Saved Cards" },
    { file: "Get Thrifted - Premium.jpg", label: "Premium Plan" },
    { file: "Notification-1.jpg", label: "Notification Alt" },
    { file: "Profile Setting-1.jpg", label: "Profile Alt" },
];

/* ─── Hi-Fi screens ───────────────────────────────────────────────────────── */
const HIFI = [
    { file: "Splash Screen.jpg", label: "Splash" },
    { file: "Splash Screen-1.jpg", label: "Splash Alt" },
    { file: "Login Page.jpg", label: "Login" },
    { file: "sign up.jpg", label: "Sign Up" },
    { file: "Home Page.png", label: "Home" },
    { file: "Search.png", label: "Search" },
    { file: "Search Results.jpg", label: "Search Results" },
    { file: "product page Final.png", label: "Product Page" },
    { file: "Favourite.jpg", label: "Favourites" },
    { file: "Order History.jpg", label: "Order History" },
    { file: "Confirmation.jpg", label: "Confirmation" },
    { file: "Account Page - Buyer.jpg", label: "Buyer Account" },
    { file: "NGO.jpg", label: "NGO Hub" },
    { file: "NGO - Navigate.jpg", label: "NGO Navigate" },
    { file: "Profile Setting.jpg", label: "Profile" },
];

/* ─── Mini Bar chart component ───────────────────────────────────────────── */
const MiniBar: React.FC<{ label: string; value: number; max?: number }> = ({ label, value, max = 100 }) => (
    <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-700 dark:text-gray-300 truncate mr-2">{label}</span>
            <span className="text-xs font-bold text-[#1C5D99] whitespace-nowrap">{value}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full bg-gradient-to-r from-[#1C5D99] to-[#639FAB] transition-all duration-1000"
                style={{ width: `${(value / max) * 100}%` }}
            />
        </div>
    </div>
);

/* ─── Mini Pie chart (SVG) ────────────────────────────────────────────────── */
const MiniPie: React.FC<{ data: { label: string; value: number; color: string }[] }> = ({ data }) => {
    let cumulative = 0;
    const total = data.reduce((a, b) => a + b.value, 0);
    const cx = 50, cy = 50, r = 40;

    const slices = data.map((d) => {
        const startAngle = (cumulative / total) * 2 * Math.PI - Math.PI / 2;
        cumulative += d.value;
        const endAngle = (cumulative / total) * 2 * Math.PI - Math.PI / 2;
        const x1 = cx + r * Math.cos(startAngle);
        const y1 = cy + r * Math.sin(startAngle);
        const x2 = cx + r * Math.cos(endAngle);
        const y2 = cy + r * Math.sin(endAngle);
        const large = d.value / total > 0.5 ? 1 : 0;
        return { ...d, d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z` };
    });

    return (
        <div className="flex items-center gap-6">
            <svg viewBox="0 0 100 100" className="w-28 h-28 flex-shrink-0">
                {slices.map((s, i) => <path key={i} d={s.d} fill={s.color} stroke="white" strokeWidth="1" />)}
            </svg>
            <div className="space-y-2">
                {data.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: d.color }} />
                        <span className="text-gray-700 dark:text-gray-300">{d.label}</span>
                        <span className="font-bold ml-auto pl-2">{d.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ─── Survey Modal ────────────────────────────────────────────────────────── */
const SurveyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div
        className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-16"
        onClick={onClose}
    >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div
            className="relative bg-white dark:bg-[#0d1117] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-black/10 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-[#0d1117] border-b border-black/5 dark:border-white/10 px-8 py-6 flex items-center justify-between z-10">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5D99] block mb-1">Primary Research · N={SURVEY_DATA.respondents} Respondents</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{SURVEY_DATA.title}</h3>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href={SURVEY_DATA.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#1C5D99] border border-[#1C5D99]/30 px-4 py-2 rounded-xl hover:bg-[#1C5D99]/10 transition-colors flex items-center gap-2"
                    >
                        <ExternalLink size={12} /> View Live Form
                    </a>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Questions */}
            <div className="p-8 space-y-10">
                {SURVEY_DATA.questions.map((q, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/10">
                        <div className="flex items-start gap-3 mb-5">
                            <div className="w-7 h-7 rounded-full bg-[#1C5D99] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">Q{i + 1}</div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-base leading-snug">{q.question}</h4>
                        </div>

                        {q.type === "pie" && q.data && (
                            <MiniPie data={q.data as { label: string; value: number; color: string }[]} />
                        )}
                        {q.type === "bar" && q.data && (
                            <div className="mt-2">
                                {q.data.map((d, j) => (
                                    <MiniBar key={j} label={d.label} value={d.value} />
                                ))}
                            </div>
                        )}

                        <div className="mt-4 flex items-start gap-2 bg-[#1C5D99]/10 rounded-xl p-4 border border-[#1C5D99]/20">
                            <CheckCircle size={14} className="text-[#1C5D99] mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-[#1C5D99] font-medium leading-relaxed">{q.insight}</p>
                        </div>
                    </div>
                ))}

                {/* Secondary research note */}
                <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={16} className="text-amber-600" />
                        <span className="font-bold text-amber-800 dark:text-amber-300 text-sm uppercase tracking-widest">Secondary Research Findings</span>
                    </div>
                    <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
                        <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-0.5 flex-shrink-0" /> India's second-hand market is projected to grow significantly, driven by the rise of eco-conscious Gen Z consumers.</li>
                        <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-0.5 flex-shrink-0" /> Platforms like OLX, Quikr, and Meesho dominate, but they lack specialist quality guarantees for clothing and books.</li>
                        <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-0.5 flex-shrink-0" /> Vehicle re-selling platforms have the highest dispute rate and were excluded from ThriftHaven's MVP scope based on this data.</li>
                        <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-0.5 flex-shrink-0" /> NGO-mediated exchange models have shown higher buyer trust scores compared to pure P2P models.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

/* ─── Main Component ──────────────────────────────────────────────────────── */
export const ThriftHavenVisuals: React.FC = () => {
    const [showSurvey, setShowSurvey] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    React.useEffect(() => {
        if (selectedImage || showSurvey) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedImage, showSurvey]);

    return (
        <div className="w-full flex flex-col gap-16 mb-24 animate-fade-in-up">
            {showSurvey && <SurveyModal onClose={() => setShowSurvey(false)} />}

            {/* ── Hero brand bar ─────────────────────────────────────────────────── */}
            <section className="bg-[#1C5D99] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4 filter blur-3xl" />
                <div className="relative z-10">
                    <img src="./thrifthaven/logo.png" alt="ThriftHaven Logo" className="h-14 mb-4 object-contain" />
                    <p className="text-white/80 max-w-lg leading-relaxed text-sm">
                        A sustainable second-hand marketplace connecting eco-conscious buyers and sellers in India — anchored by NGO-verified trust infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        {["Clothing & Accessories", "Books & Media", "NGO Verified", "Zero-Waste Commerce"].map((t) => (
                            <span key={t} className="px-3 py-1 bg-white/15 border border-white/20 rounded-full text-xs font-bold">{t}</span>
                        ))}
                    </div>
                </div>
                <div className="relative z-10 flex flex-col gap-3 items-stretch min-w-[200px]">
                    <button
                        onClick={() => setShowSurvey(true)}
                        className="px-6 py-3 bg-white text-[#1C5D99] font-bold text-sm rounded-xl hover:scale-105 transition-all shadow-lg flex items-center gap-2 justify-center"
                    >
                        <BarChart2 size={16} /> View Research Survey
                    </button>
                    <a
                        href="./thrifthaven/Research.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/15 border border-white/25 text-white font-bold text-sm rounded-xl hover:bg-white/25 transition-all flex items-center gap-2 justify-center"
                    >
                        <ExternalLink size={16} /> Full Research PDF
                    </a>
                </div>
            </section>

            {/* ── Problem Space & Brainstorm ─────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <AlertTriangle className="text-amber-500" size={20} /> Problem Space
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <ShieldCheck size={20} />, title: "Trust & Safety", desc: "Buyers hesitate to purchase from unknown sellers. Sellers fear non-payment or fraud." },
                        { icon: <Star size={20} />, title: "Quality Control", desc: "Product quality varies widely with little standardization or accountability." },
                        { icon: <Map size={20} />, title: "Logistics", desc: "Cross-city shipping costs, fragmented pickups and delivery failures." },
                        { icon: <TrendingUp size={20} />, title: "Pricing", desc: "Sellers overprice or underprice. Dynamic pricing strategies needed to capture fair value." },
                    ].map((p, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/10 hover:border-[#1C5D99]/30 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-[#1C5D99]/10 text-[#1C5D99] flex items-center justify-center mb-4">{p.icon}</div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{p.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Competitor Analysis ────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Target className="text-[#1C5D99]" size={20} /> Competitor Analysis
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Feature comparison: ThriftHaven vs. OLX, Quikr, Cashify & Facebook Marketplace</p>

                <div className="rounded-3xl overflow-hidden border border-black/5 dark:border-white/10">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-sm">
                            <thead>
                                <tr className="bg-[#1C5D99] text-white">
                                    {["Feature", "ThriftHaven", "OLX", "Quikr", "Cashify", "Facebook Marketplace"].map((h, i) => (
                                        <th key={i} className={`px-5 py-4 text-left font-bold text-xs uppercase tracking-wider ${i === 1 ? 'bg-white/15' : ''}`}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Second-hand products", "✅", "✅", "✅", "✅", "✅"],
                                    ["Online platform", "✅", "✅", "✅", "✅", "✅"],
                                    ["Mobile application", "✅", "✅", "✅", "✅", "✅"],
                                    ["Wide range of categories", "Niche (Clothing & Books)", "✅ 40+", "✅ 40+", "Electronics only", "✅"],
                                    ["Chat functionality", "✅", "✅", "✅", "❌", "✅"],
                                    ["Verification process", "✅ NGO-Verified", "✅ Basic", "✅ Basic", "✅ Device-check", "❌ Minimal"],
                                    ["Online payment options", "✅ UPI/Card", "✅", "✅", "❌", "❌"],
                                    ["Commission fee", "0–10% 🏆", "0–5%", "0–5%", "Varies", "Free"],
                                    ["Brand recognition", "Growing 🚀", "High", "High", "High", "Massive"],
                                    ["Customer base", "Growing", "Established", "Established", "Growing", "Largest"],
                                    ["Buyer protection", "✅ NGO Model", "⚠️ Limited", "⚠️ Limited", "⚠️", "❌"],
                                    ["Sustainability focus", "✅ Core USP", "❌", "❌", "❌", "❌"],
                                ].map((row, ri) => (
                                    <tr key={ri} className={`border-t border-black/5 dark:border-white/5 ${ri % 2 === 0 ? 'bg-white dark:bg-white/[0.03]' : 'bg-gray-50 dark:bg-white/[0.01]'}`}>
                                        {row.map((cell, ci) => (
                                            <td key={ci} className={`px-5 py-3.5 text-gray-700 dark:text-gray-300 ${ci === 0 ? 'font-medium text-gray-900 dark:text-white' : ''} ${ci === 1 ? 'font-semibold text-[#1C5D99] bg-[#1C5D99]/5' : ''}`}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {[
                        { title: "Targeted Niche", icon: "🎯", desc: "Unlike OLX/Quikr with 40+ categories, ThriftHaven launches with Clothing & Books — enabling deep quality control in each vertical." },
                        { title: "Weakness Opportunity", icon: "🔓", desc: "Competitors lack buyer protection. ThriftHaven's NGO Verified model directly solves the #1 competitor weakness across every platform surveyed." },
                        { title: "Competitive Commission", icon: "💰", desc: "Commission of 0–10% is competitive vs. industry 5–15%. Lower take-rate justified by enhanced trust infrastructure that generates higher repeat purchase rates." },
                    ].map((c, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/10">
                            <span className="text-2xl mb-3 block">{c.icon}</span>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{c.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* ── Survey CTA strip ──────────────────────────────────────────────── */}
            <section className="bg-[#639FAB]/10 dark:bg-[#1C5D99]/10 border border-[#1C5D99]/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5D99] block mb-1">Primary Research · N=57 Respondents</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Survey: Second-Hand Product Attitudes</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl">
                        50.9% of respondents aged 20–55 expressed willingness to buy second-hand. Condition & Originality is the #1 pain point. Full interactive analysis inside.
                    </p>
                </div>
                <button
                    onClick={() => setShowSurvey(true)}
                    className="px-8 py-4 bg-[#1C5D99] text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#1C5D99]/20 flex items-center gap-2 whitespace-nowrap"
                >
                    <BarChart2 size={16} /> View Survey Analysis
                </button>
            </section>

            {/* ── Persona ───────────────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Users className="text-[#1C5D99]" size={20} /> User Persona
                </h3>
                <div className="bg-gray-50 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Persona Identity */}
                        <div className="bg-[#1C5D99] text-white p-8 flex flex-col justify-between">
                            <div>
                                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-4xl mb-4">👩‍💼</div>
                                <h4 className="text-2xl font-bold mb-1">Anjali M.</h4>
                                <p className="text-white/70 text-sm mb-4">Marketing Executive · Bangalore</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs"><span className="text-white/60">Age</span><span className="font-bold">27</span></div>
                                    <div className="flex justify-between text-xs"><span className="text-white/60">Income</span><span className="font-bold">₹45,000/mo</span></div>
                                    <div className="flex justify-between text-xs"><span className="text-white/60">Apps Used</span><span className="font-bold">OLX, Myntra</span></div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs text-white/60 font-bold uppercase tracking-wider mb-2">Quote</p>
                                <p className="text-sm text-white/90 italic leading-relaxed">"I want affordable, high-quality second-hand clothing that aligns with my values without compromising on trust."</p>
                            </div>
                        </div>

                        {/* Empathy Map */}
                        <div className="col-span-2 p-8 grid grid-cols-2 gap-4">
                            {[
                                { icon: "💬", label: "SAYS", color: "blue", content: "Talks about sustainable fashion and the need to promote circular economy. Seeks recommendations for reliable resale platforms." },
                                { icon: "🧠", label: "THINKS", color: "purple", content: "Concerned about fast fashion's environmental impact. Wonders if second-hand platforms are trustworthy enough to replace new purchases." },
                                { icon: "🏃", label: "DOES", color: "green", content: "Visits thrift stores, joins clothing swaps, filters by condition & price. Uses detailed product descriptions as trust signals." },
                                { icon: "❤️", label: "FEELS", color: "red", content: "Responsible toward the environment. Frustrated by greenwashing. Wants to positively impact circular fashion." },
                            ].map((e, i) => (
                                <div key={i} className="bg-white dark:bg-black/20 rounded-2xl p-5 border border-black/5 dark:border-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xl">{e.icon}</span>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest text-[#1C5D99]`}>{e.label}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{e.content}</p>
                                </div>
                            ))}
                            {/* Needs & Pain Points */}
                            <div className="col-span-2 grid grid-cols-2 gap-4">
                                <div className="bg-[#1C5D99]/5 border border-[#1C5D99]/20 rounded-2xl p-5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1C5D99] mb-2">NEEDS</p>
                                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">Reliable platform with high-quality pre-loved items, detailed condition reports, seller verification, and sustainable brand positioning.</p>
                                </div>
                                <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-2xl p-5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">PAIN POINTS</p>
                                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">Excessive fast fashion waste, lack of trust in P2P platforms, poor condition transparency, difficulty finding items by size/condition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── User Journey ─────────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="text-[#1C5D99]" size={20} /> User Journey Map
                </h3>
                <div className="overflow-x-auto pb-2">
                    <div className="flex gap-0 min-w-max">
                        {[
                            { stage: "Awareness", emoji: "👀", action: "Sees ThriftHaven ad on Instagram", thought: "\"This might help me find sustainable clothes.\"", feel: "😐 Curious", touchpoint: "Social Ad" },
                            { stage: "Onboarding", emoji: "📲", action: "Downloads app, signs up with Google", thought: "\"Registration should be quick.\"", feel: "🙂 Hopeful", touchpoint: "App Store, Sign Up Flow" },
                            { stage: "Discovery", emoji: "🔍", action: "Browses Clothing, filters by size & condition", thought: "\"Nice range. Are these verified?\"", feel: "😊 Engaged", touchpoint: "Home + Search" },
                            { stage: "Trust Eval", emoji: "🛡️", action: "Views 'NGO Verified' badge on product", thought: "\"This seems trustworthy.\"", feel: "😌 Reassured", touchpoint: "Product Detail Page" },
                            { stage: "Purchase", emoji: "💳", action: "Adds to cart, pays via UPI", thought: "\"Hope the quality matches description.\"", feel: "🤞 Hopeful", touchpoint: "Cart + Payment" },
                            { stage: "Fulfillment", emoji: "📦", action: "Picks up from NGO centre or gets delivery", thought: "\"Convenient and eco-friendly.\"", feel: "😀 Satisfied", touchpoint: "NGO Hub / Delivery" },
                            { stage: "Advocacy", emoji: "🌱", action: "Shares purchase; refers a friend", thought: "\"I actually like this!\"", feel: "🥰 Delighted", touchpoint: "Confirmation Screen" },
                        ].map((j, i, arr) => (
                            <div key={i} className="flex items-stretch">
                                <div className={`w-44 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 flex flex-col gap-3 ${i === 0 ? 'rounded-l-2xl' : ''} ${i === arr.length - 1 ? 'rounded-r-2xl' : ''} border-r-0 last:border-r`}>
                                    <span className="text-2xl">{j.emoji}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5D99]">{j.stage}</span>
                                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed flex-1">{j.action}</p>
                                    <p className="text-[10px] italic text-gray-500 leading-relaxed">{j.thought}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs">{j.feel}</span>
                                    </div>
                                    <span className="text-[9px] bg-[#1C5D99]/10 text-[#1C5D99] px-2 py-1 rounded-full font-bold truncate">{j.touchpoint}</span>
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="flex items-center -mx-px z-10">
                                        <div className="w-6 h-6 bg-[#1C5D99] rounded-full flex items-center justify-center flex-shrink-0">
                                            <ChevronRight size={12} className="text-white" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Wireframes horizontal scroll ──────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <BookOpen className="text-[#1C5D99]" size={20} /> Wireframes
                    <span className="text-sm font-normal text-gray-500 ml-1">({WIREFRAMES.length} screens)</span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Low-fidelity layout explorations focusing on navigation, trust signals, and NGO integration flows.</p>
                <div className="flex gap-5 overflow-x-auto pb-4 snap-x scrollbar-none -mx-4 px-4">
                    {WIREFRAMES.map((wf) => (
                        <div key={wf.file} className="flex-shrink-0 snap-center w-36 sm:w-44 group">
                            <div className="bg-gray-100 dark:bg-white/5 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 aspect-[9/16] relative hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:border-[#1C5D99]/40">
                                <img
                                    src={`./thrifthaven/wireframes/${encodeURIComponent(wf.file)}`}
                                    alt={wf.label}
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => setSelectedImage(`./thrifthaven/wireframes/${encodeURIComponent(wf.file)}`)}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                                    <span className="text-white text-[10px] font-bold">{wf.label}</span>
                                </div>
                            </div>
                            <p className="text-center text-[10px] text-gray-500 mt-2 font-medium truncate">{wf.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Hi-Fi screens 3×3 grid ─────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Leaf className="text-[#639FAB]" size={20} /> High-Fidelity Screens
                    <span className="text-sm font-normal text-gray-500 ml-1">({HIFI.length} screens)</span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Final polished UI screens using the ThriftHaven design system — deep blue + sustainable teal palette.</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                    {HIFI.map((s) => (
                        <div key={s.file} className="group relative bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden border border-black/5 dark:border-white/10 aspect-[9/16] hover:scale-[1.04] hover:shadow-xl hover:border-[#1C5D99]/40 transition-all duration-300">
                            <img
                                src={`./thrifthaven/hifi/${encodeURIComponent(s.file)}`}
                                alt={s.label}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => setSelectedImage(`./thrifthaven/hifi/${encodeURIComponent(s.file)}`)}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                <span className="text-white text-[9px] font-bold leading-tight">{s.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Visual Attention Heatmap ───────────────────────────────────────── */}
            <section className="bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#639FAB] block mb-2">Eyetracking Simulation</span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visual Attention Heatmap</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            A predictive AI heatmap was run on the redesigned Product Page to validate visual hierarchy. The results demonstrate optimal gaze distribution across high-trust elements before proceeding to commerce actions.
                        </p>
                        <div className="space-y-4">
                            {[
                                { icon: "🔥", title: "NGO Trust Badge", desc: "The 'NGO Verified Quality' section commands strong secondary attention, validating our hypothesis that users actively seek out verification signals." },
                                { icon: "📈", title: "Information Hierarchy", desc: "Attention flows naturally from the primary product image down to the pricing and condition scales without friction." },
                                { icon: "🎯", title: "Conversion Optimization", desc: "The 'Add to Cart' and 'Buy Now' buttons retain isolated hot-spots, ensuring the primary conversion path remains visually distinct from educational content." }
                            ].map((h, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-white dark:bg-black/20 rounded-2xl border border-black/5 dark:border-white/10">
                                    <span className="text-xl flex-shrink-0">{h.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{h.title}</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{h.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center group relative cursor-pointer" onClick={() => setSelectedImage('./thrifthaven/heatmap_product.png')}>
                        <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                            <img src="./thrifthaven/heatmap_product.png" alt="Product Page Heatmap" className="max-w-[280px] w-full h-auto" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white bg-black/50 px-4 py-2 rounded-full font-bold text-sm backdrop-blur-md">View Fullscreen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Growth Roadmap ─────────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="text-[#1C5D99]" size={20} /> Growth Roadmap
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { phase: "Short Term", color: "#1C5D99", icon: "🚀", items: ["Expand catalog to more cities", "Build loyalty rewards program", "Virtual try-on for clothing", "Personalized recommendations with AI"] },
                        { phase: "Mid Term", color: "#639FAB", icon: "📈", items: ["Diversify revenue via ads & subscriptions", "NGO supply chain partnerships", "In-app live chat support", "Expand to neighboring states"] },
                        { phase: "Long Term", color: "rgb(45, 106, 79)", icon: "🌍", items: ["AR/AI-powered product discovery", "International expansion", "Brick-and-mortar ThriftHaven stores", "Set industry standards for circular fashion"] },
                    ].map((g, i) => (
                        <div key={i} className="rounded-2xl border overflow-hidden" style={{ borderColor: g.color + "30" }}>
                            <div className="px-6 py-4 flex items-center gap-3" style={{ background: g.color + "15" }}>
                                <span className="text-xl">{g.icon}</span>
                                <span className="font-bold text-sm" style={{ color: g.color }}>{g.phase}</span>
                            </div>
                            <div className="p-6 space-y-2 bg-gray-50 dark:bg-white/5">
                                {g.items.map((item, j) => (
                                    <div key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: g.color }} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Why the NGO Model ──────────────────────────────────────────────── */}
            <section className="bg-[#1C5D99]/5 dark:bg-[#1C5D99]/10 border border-[#1C5D99]/20 rounded-3xl p-8 sm:p-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5D99] block mb-2">Design Rationale · Senior Insight</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏛️ The "Why" Behind the NGO Model</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            In India, <strong className="text-gray-900 dark:text-white">NGOs such as Kudumbam have vast local networks</strong> that span hundreds of villages and urban neighbourhoods — but they consistently lack digital revenue streams to fund their social mission.
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            ThriftHaven's NGO partnership was not designed as a marketing feature. It solves a structural problem: <strong className="text-[#1C5D99]">a digital-only startup cannot afford physical quality control at scale.</strong> The NGO hub becomes a decentralised inspection and fulfilment layer — eliminating the biggest barrier to trust in P2P commerce while simultaneously funding social causes.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: "🔍", title: "Physical QC at zero marginal cost", desc: "NGOs inspect and verify products at their centres before shipping, replacing expensive in-house verification teams." },
                            { icon: "💼", title: "Employment + funding for social causes", desc: "A percentage of each NGO-routed transaction goes back to the NGO, creating a self-sustaining economic model." },
                            { icon: "🏘️", title: "Hyperlocal trust signal", desc: "Buyers pick up from a known NGO in their neighbourhood — a physical trust anchor no purely digital competitor can replicate." },
                        ].map((b, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                                <div>
                                    <p className="font-bold text-sm text-gray-900 dark:text-white mb-1">{b.title}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Safi AI Feature ────────────────────────────────────────────────── */}
            <section className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#639FAB]/20 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#639FAB] block mb-3">AI Feature Concept · Technical Edge</span>
                        <h3 className="text-2xl font-bold text-white mb-4">✨ Meet Safi — The AI Thrift Assistant</h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Standard filters (Size, Price, Category) force users to know exactly what they want — breaking discovery for thrift shopping. <strong className="text-white">Safi</strong> replaces rigid filters with a natural-language intent engine, dramatically reducing the discovery friction identified in user journey research.
                        </p>
                        <div className="space-y-3">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#639FAB]">Example Queries Safi Understands</p>
                            {[
                                '"Find me a sustainable dress for a Bangalore summer wedding under ₹2000"',
                                '"Show books on productivity, gently used, near Koramangala NGO hub"',
                                '"I need men\'s office wear, size M, NGO-verified seller only"',
                            ].map((q, i) => (
                                <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-sm text-gray-200 italic font-light">{q}</div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#639FAB] mb-3">Why It Matters</p>
                            <div className="space-y-3">
                                {[
                                    { icon: "🔎", text: "Replaces 5-step filter flow with a single natural-language input" },
                                    { icon: "🌱", text: "Understands sustainability preferences (eco-fabric, low-carbon shipping)" },
                                    { icon: "🛡️", text: "Integrated with NGO-verified flag to prioritise trusted listings by default" },
                                    { icon: "📊", text: "Learns from purchase history to personalise thrift recommendations over time" },
                                ].map((p, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <span className="flex-shrink-0">{p.icon}</span><span>{p.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#639FAB]/10 border border-[#639FAB]/30 rounded-2xl p-4 text-xs text-[#639FAB] leading-relaxed">
                            <strong>Implementation note:</strong> Powered by Gemini API with a domain-specific system prompt pre-loaded with ThriftHaven's product taxonomy and NGO location data. Queries resolve to structured facet filters before hitting the product database.
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Condition Scale ────────────────────────────────────────────────── */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-[#1C5D99]" size={20} /> The Condition Scale — Solving Quality Transparency
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    Survey data showed 72% of users cite Condition &amp; Originality as their #1 concern. Rather than a binary "Good / Bad" label, ThriftHaven implements a structured 1–10 Transparency Scale backed by AI photo verification.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#1C5D99] mb-6">Product Condition Scale (1–10)</p>
                        <div className="space-y-3">
                            {[
                                { range: "9–10", label: "Like New / Unopened", color: "#22c55e" },
                                { range: "7–8", label: "Excellent — Minor Signs of Use", color: "#84cc16" },
                                { range: "5–6", label: "Good — Visible Wear, Fully Functional", color: "#eab308" },
                                { range: "3–4", label: "Fair — Noticeable Flaws, Discounted", color: "#f97316" },
                                { range: "1–2", label: "For Parts / Heavy Wear", color: "#ef4444" },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-14 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: s.color }}>{s.range}</div>
                                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#1C5D99] mb-4">AI-Assisted Photo Verification</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                When a seller uploads product photos, a lightweight vision model scans for visible defects, fading, stains, or missing parts — then auto-suggests a condition score. The seller accepts, adjusts, or contests. NGO staff override with a physical inspection score for verified listings.
                            </p>
                            <div className="space-y-2">
                                {[
                                    "Auto-detects stains, tears, missing buttons",
                                    "Compares to reference images from brand catalogue",
                                    "Generates a natural-language Condition Report",
                                    "NGO staff can override with physical inspection score",
                                ].map((f, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1C5D99] flex-shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-2xl p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">Design Decision</p>
                            <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">The 1–10 scale was chosen over binary "Good/Bad" because research showed buyers want granularity to price-shop across similar conditions — a feature no competitor currently provides.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Image Modal using Portal */}
            {selectedImage && typeof document !== 'undefined' && createPortal(
                <div
                    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', cursor: 'pointer' }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-7xl max-h-[95vh] w-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Fullscreen view"
                            style={{ maxHeight: '95vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '0.75rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-all"
                            style={{ zIndex: 100000 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};
