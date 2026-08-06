import React from 'react';
import { GlowingEffect } from './ui/GlowingEffect';
import { Truck, ShoppingCart, CreditCard, GraduationCap, Trophy } from 'lucide-react';

const KeyAchievements: React.FC = () => {
    const achievements = [
        {
            title: 'Phillips Connect (IoT SaaS)',
            subtitle: 'Fleet Telematics Platform UI',
            metrics: ['5x Faster Response Times', '3x Faster Device Onboarding'],
            description: 'Redesigned the fleet telematics platform UI, architecting real-time analytics dashboards.',
            icon: <Truck size={24} className="mb-4 text-cyan-400" />,
            badge: 'IoT SaaS',
            borderColor: 'border-cyan-500/50 dark:border-cyan-400/50',
            highlightColor: 'text-cyan-400 dark:text-cyan-300'
        },
        {
            title: 'Nordstrom (Supply Chain & POS)',
            subtitle: 'Logistics Workflow & Support UI',
            metrics: ['< 5 Min Incident Resolution', 'US Retail Operations'],
            description: 'Designed application support and logistics workflow UI concepts focused on reducing incident resolution times across US retail operations.',
            icon: <ShoppingCart size={24} className="mb-4 text-yellow-400" />,
            badge: 'Supply Chain & POS',
            borderColor: 'border-yellow-500/50 dark:border-yellow-400/50',
            highlightColor: 'text-yellow-400 dark:text-yellow-300'
        },
        {
            title: 'Home Depot (Retail Modernization)',
            subtitle: 'POS Migration & Cloud Engine',
            metrics: ['POS Application Migration', 'Cloud Shipment Planning'],
            description: 'Formulated proposal-stage UI/UX concepts for POS application migration, checkout payment flows, and cloud-based shipment planning engines.',
            icon: <CreditCard size={24} className="mb-4 text-purple-400" />,
            badge: 'Retail Modernization',
            borderColor: 'border-purple-500/50 dark:border-purple-400/50',
            highlightColor: 'text-purple-400 dark:text-purple-300'
        },
        {
            title: 'Higher Education (US Portal)',
            subtitle: 'Modern Student Portal',
            metrics: ['15,000+ Active Users', 'Mobile-First Architecture'],
            description: 'Re-architected a modern student portal serving 15,000+ users, balancing complex back-end data processing with an accessible experience.',
            icon: <GraduationCap size={24} className="mb-4 text-green-400" />,
            badge: 'EdTech Portal',
            borderColor: 'border-green-500/50 dark:border-green-400/50',
            highlightColor: 'text-green-400 dark:text-green-300'
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-gray-50 dark:bg-[#080808] relative z-10 border-t border-black/5 dark:border-white/5 overflow-hidden">
            <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
                <div className="mb-14 max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Trophy className="text-yellow-500 w-7 h-7" />
                        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white">
                            Key Achievements
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-4">
                        I led visual and product design initiatives for high-stakes North American Fortune 500 sales pursuits. Working closely with cross-functional architecture and solution delivery teams, I conceptualized and prototyped data-heavy UI solutions tailored to complex operational ecosystems:
                    </p>
                </div>
            </div>

            {/* Broader card container with horizontal scrolling */}
            <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
                <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 snap-x snap-mandatory scrollbar-mobile" style={{ scrollPaddingLeft: '1rem' }}>
                    {achievements.map((card, idx) => (
                        <div key={idx} className="snap-start shrink-0 w-[88vw] sm:w-[450px] md:w-[480px] h-full block rounded-[2rem] border border-black/10 dark:border-white/10 p-1 transition-transform hover:-translate-y-1">
                            <GlowingEffect
                                blur={0}
                                borderWidth={2}
                                spread={40}
                                inactiveZone={0.5}
                                movementDuration={2}
                                glow={true}
                                disabled={false}
                            />
                            <div className="relative flex flex-col justify-between h-full min-h-[340px] rounded-[inherit] bg-white dark:bg-[#111111] p-8 overflow-hidden">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        {card.icon}
                                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                                            {card.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 tracking-wide z-10">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                                        {card.subtitle}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-light mb-6 z-10">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Highlighted key metrics banner */}
                                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-black/5 dark:border-white/10 z-10">
                                    {card.metrics.map((metric, mIdx) => (
                                        <div key={mIdx} className={`p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border ${card.borderColor} flex items-center justify-center text-center`}>
                                            <span className={`text-xs sm:text-sm font-bold ${card.highlightColor}`}>
                                                {metric}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyAchievements;
