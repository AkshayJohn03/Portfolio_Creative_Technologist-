import React from 'react';
import RadialOrbitalTimeline, { TimelineItem } from './ui/RadialOrbitalTimeline';
import { Palette, Layers, Cpu, Brain, Sparkles } from 'lucide-react';

const EvolutionTimeline: React.FC = () => {
    const timelineData: TimelineItem[] = [
        {
            id: 1,
            title: "Visual Designer",
            date: "2018",
            category: "Design",
            icon: Palette,
            relatedIds: [2],
            content: "Started by exploring pure visual aesthetics, typography, and motion design, mastering the fundamentals of visual storytelling.",
            status: "completed",
            energy: 60
        },
        {
            id: 2,
            title: "UX/UI Designer",
            date: "2019",
            category: "Product",
            icon: Layers,
            relatedIds: [1, 3],
            content: "Transitioned into functional design, creating scalable design systems and improving user experiences across enterprise applications.",
            status: "completed",
            energy: 75
        },
        {
            id: 3,
            title: "AI Systems Exploration",
            date: "2023",
            category: "Engineering",
            icon: Brain,
            relatedIds: [2, 4],
            content: "Bridging architectural design frameworks and deep development methodologies to forge advanced interface understandings.",
            status: "completed",
            energy: 85
        },
        {
            id: 4,
            title: "LLM Training & Quant Systems",
            date: "2025",
            category: "Data",
            icon: Cpu,
            relatedIds: [3, 5],
            content: "Engineered small language models from scratch and built deep learning trading algorithms (BiLSTMs, Conv1D).",
            status: "in-progress",
            energy: 95
        },
        {
            id: 5,
            title: "Experimental AI Research",
            date: "2026",
            category: "Research",
            icon: Sparkles,
            relatedIds: [4],
            content: "Currently diving deep into embodied cognitive intelligence, phase-locked oscillators, and geometric causality.",
            status: "in-progress",
            energy: 100
        }
    ];

    return (
        <section className="bg-gray-50 dark:bg-dark relative border-t border-black/5 dark:border-white/5 z-10 w-full overflow-hidden">
            <RadialOrbitalTimeline timelineData={timelineData} />
        </section>
    );
};

export default EvolutionTimeline;
