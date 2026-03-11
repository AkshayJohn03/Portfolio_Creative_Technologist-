import React from 'react';
import { GlowingEffect } from './ui/GlowingEffect';
import { Brain, Code, Cpu, Sparkles, UserCheck } from 'lucide-react';

const IdentityLayer: React.FC = () => {
    const cards = [
        {
            title: 'AI Systems',
            description: 'Building custom small language models, trading algorithms, and evaluating foundation models for specific operational constraints.',
            icon: <Brain size={24} className="mb-4 text-purple-400" />,
            link: '#work'
        },
        {
            title: 'Creative Technology',
            description: 'Fusing engineering with aesthetic precision. Prototyping interactive 3D scenes, motion UI, and generative digital experiences.',
            icon: <Sparkles size={24} className="mb-4 text-yellow-400" />,
            link: '#work'
        },
        {
            title: 'Quantitative & R&D',
            description: 'Developing data-driven models for intraday forecasting and researching embodied intelligence and geometric physics engines.',
            icon: <Cpu size={24} className="mb-4 text-cyan-400" />,
            link: '#work'
        },
        {
            title: 'Human–AI Interaction',
            description: 'Designing conversational systems, latent interfaces, and workflows that gracefully bridge complex AI capabilities with human intuition.',
            icon: <UserCheck size={24} className="mb-4 text-green-400" />,
            link: '#work'
        },
        {
            title: 'Generative Media',
            description: 'Leveraging diffusion models, prompt engineering, and visual latent spaces for generating functional assets and storyboards.',
            icon: <Code size={24} className="mb-4 text-pink-400" />,
            link: '#work'
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-gray-50/50 dark:bg-[#050505] relative z-10">
            <div className="container mx-auto px-5 sm:px-8">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
                        Identity & Focus
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-light leading-relaxed">
                        I operate at the intersection of intelligence and design. The goal is not just to use AI, but to engineer its interaction paradigms, interface logic, and systemic workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <a key={idx} href={card.link} className="relative h-full block rounded-[2rem] border border-black/5 dark:border-white/5 p-1 transition-transform hover:-translate-y-1">
                            <GlowingEffect
                                blur={0}
                                borderWidth={2}
                                spread={40}
                                inactiveZone={0.5}
                                movementDuration={2}
                                glow={true}
                                disabled={false}
                            />
                            <div className="relative flex flex-col h-full rounded-[inherit] bg-white dark:bg-[#0f0f0f] p-7 overflow-hidden">
                                {card.icon}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide z-10">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light z-10">{card.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IdentityLayer;
