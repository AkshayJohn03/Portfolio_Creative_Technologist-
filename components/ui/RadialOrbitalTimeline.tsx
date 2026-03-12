"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";

const Badge = ({ children, className }: any) => <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${className}`}>{children}</span>;
const Button = ({ children, className, onClick }: any) => <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ${className}`} onClick={onClick}>{children}</button>;
const Card = ({ children, className }: any) => <div className={`rounded-xl border shadow ${className}`}>{children}</div>;
const CardHeader = ({ children, className }: any) => <div className={`flex flex-col space-y-1.5 p-4 ${className}`}>{children}</div>;
const CardTitle = ({ children, className }: any) => <h3 className={`font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
const CardContent = ({ children, className }: any) => <div className={`p-4 pt-0 ${className}`}>{children}</div>;

export interface TimelineItem {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
    icon: React.ElementType;
    relatedIds: number[];
    status: "completed" | "in-progress" | "pending";
    energy: number;
}

interface RadialOrbitalTimelineProps {
    timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
    timelineData,
}: RadialOrbitalTimelineProps) {
    const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
        {}
    );
    const [viewMode, setViewMode] = useState<"orbital">("orbital");
    const [rotationAngle, setRotationAngle] = useState<number>(0);
    const [autoRotate, setAutoRotate] = useState<boolean>(true);
    const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
    const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };

    const toggleItem = (id: number) => {
        setExpandedItems((prev) => {
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) {
                    newState[parseInt(key)] = false;
                }
            });

            newState[id] = !prev[id];

            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);

                const relatedItems = getRelatedItems(id);
                const newPulseEffect: Record<number, boolean> = {};
                relatedItems.forEach((relId) => {
                    newPulseEffect[relId] = true;
                });
                setPulseEffect(newPulseEffect);

                centerViewOnNode(id);
            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }

            return newState;
        });
    };

    useEffect(() => {
        let rotationTimer: ReturnType<typeof setInterval>;
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

        if (autoRotate && viewMode === "orbital" && !isMobile) {
            rotationTimer = setInterval(() => {
                setRotationAngle((prev) => (prev + 0.3) % 360);
            }, 50);
        }

        return () => {
            if (rotationTimer) {
                clearInterval(rotationTimer);
            }
        };
    }, [autoRotate, viewMode]);

    const centerViewOnNode = (nodeId: number) => {
        if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

        const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
        const totalNodes = timelineData.length;
        const targetAngle = (nodeIndex / totalNodes) * 360;

        setRotationAngle(270 - targetAngle);
    };

    const calculateNodePosition = (index: number, total: number) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const radius = isMobile ? 180 : 310;
        const radian = (angle * Math.PI) / 180;

        const x = radius * Math.cos(radian) + centerOffset.x;
        const y = radius * Math.sin(radian) + centerOffset.y;

        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(
            0.4,
            Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
        );

        return { x, y, angle, zIndex, opacity };
    };

    const getRelatedItems = (itemId: number): number[] => {
        const currentItem = timelineData.find((item) => item.id === itemId);
        return currentItem ? currentItem.relatedIds : [];
    };

    const isRelatedToActive = (itemId: number): boolean => {
        if (!activeNodeId) return false;
        const relatedItems = getRelatedItems(activeNodeId);
        return relatedItems.includes(itemId);
    };

    const getStatusStyles = (status: TimelineItem["status"]): string => {
        switch (status) {
            case "completed":
                return "text-white bg-black border-white";
            case "in-progress":
                return "text-black bg-white border-black";
            case "pending":
                return "text-white bg-black/40 border-white/50";
            default:
                return "text-white bg-black/40 border-white/50";
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark overflow-hidden relative"
            ref={containerRef}
            onClick={handleContainerClick}
        >
            <div className="absolute top-10 text-center z-10 w-full px-4">
                <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Evolution & Trajectory</h2>
                <p className="text-gray-500 font-light text-lg max-w-xl mx-auto">From visual aesthetics to cognitive systems. A living map of disciplines.</p>
            </div>

            <div className="relative w-full max-w-6xl h-full flex items-center justify-center pt-32">
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    ref={orbitRef}
                    style={{
                        perspective: "1000px",
                        transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
                    }}
                >
                    <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
                        <div className="absolute w-20 h-20 rounded-full border border-black/10 dark:border-white/20 animate-ping opacity-70"></div>
                        <div
                            className="absolute w-24 h-24 rounded-full border border-black/5 dark:border-white/10 animate-ping opacity-50"
                            style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-black backdrop-blur-md"></div>
                    </div>

                    <div className="absolute w-[320px] h-[320px] md:w-[560px] md:h-[560px] rounded-full border border-black/5 dark:border-white/10"></div>

                    {timelineData.map((item, index) => {
                        const position = calculateNodePosition(index, timelineData.length);
                        const isExpanded = expandedItems[item.id];
                        const isRelated = isRelatedToActive(item.id);
                        const isPulsing = pulseEffect[item.id];
                        const Icon = item.icon;

                        const nodeStyle = {
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            zIndex: isExpanded ? 200 : position.zIndex,
                            opacity: isExpanded ? 1 : position.opacity,
                        };

                        return (
                            <div
                                key={item.id}
                                ref={(el) => (nodeRefs.current[item.id] = el)}
                                className="absolute transition-all duration-700 cursor-pointer"
                                style={nodeStyle}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(item.id);
                                }}
                            >
                                <div
                                    className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""
                                        }`}
                                    style={{
                                        background: `radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0) 70%)`,
                                        width: `${item.energy * 0.5 + 40}px`,
                                        height: `${item.energy * 0.5 + 40}px`,
                                        left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                        top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                    }}
                                ></div>

                                <div
                                    className={`
                  w-12 h-12 rounded-full flex items-center justify-center relative
                  ${isExpanded
                                            ? "bg-accent text-white"
                                            : isRelated
                                                ? "bg-black/10 dark:bg-white/50 text-black"
                                                : "bg-white dark:bg-black text-gray-900 dark:text-white"
                                        }
                  border-2 
                  ${isExpanded
                                            ? "border-accent shadow-lg shadow-accent/30"
                                            : isRelated
                                                ? "border-accent animate-pulse"
                                                : "border-black/5 dark:border-white/40"
                                        }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                                >
                                    <Icon size={20} />
                                    {/* Always show the year */}
                                    <div className="absolute -top-6 text-sm md:text-base font-bold text-accent tracking-widest whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]">
                                        {item.date}
                                    </div>
                                </div>

                                <div
                                    className={`
                  absolute top-16 whitespace-nowrap
                  text-sm md:text-md font-bold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-gray-900 dark:text-white scale-110" : "text-gray-500 dark:text-white/70"}
                `}
                                >
                                    {item.title}
                                </div>

                                {isExpanded && (
                                    <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-black/10 dark:border-white/20 shadow-xl overflow-visible">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-black/20 dark:bg-white/50"></div>
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-center">
                                                <Badge
                                                    className={`px-2 text-[10px] ${getStatusStyles(
                                                        item.status
                                                    )}`}
                                                >
                                                    {item.status === "completed"
                                                        ? "COMPLETED"
                                                        : item.status === "in-progress"
                                                            ? "IN PROGRESS"
                                                            : "PENDING"}
                                                </Badge>
                                                <span className="text-[10px] font-mono text-gray-400 dark:text-white/50 border border-black/5 dark:border-white/10 px-2 py-0.5 rounded-full">
                                                    {item.date}
                                                </span>
                                            </div>
                                            <CardTitle className="text-sm mt-3 text-black dark:text-white">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-xs text-gray-600 dark:text-white/80 pb-4">
                                            <p className="leading-relaxed">{item.content}</p>

                                            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10">
                                                <div className="flex justify-between items-center text-[10px] mb-2 uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                                    <span className="flex items-center">
                                                        <Zap size={10} className="mr-1 text-accent" />
                                                        Intensity
                                                    </span>
                                                    <span className="font-mono">{item.energy}%</span>
                                                </div>
                                                <div className="w-full h-1 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-accent to-purple-500"
                                                        style={{ width: `${item.energy}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {item.relatedIds.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
                                                    <div className="flex items-center mb-2">
                                                        <Link size={10} className="text-gray-400 dark:text-white/70 mr-1" />
                                                        <h4 className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 dark:text-white/70">
                                                            Connected Eras
                                                        </h4>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {item.relatedIds.map((relatedId) => {
                                                            const relatedItem = timelineData.find(
                                                                (i) => i.id === relatedId
                                                            );
                                                            return (
                                                                <button
                                                                    key={relatedId}
                                                                    className="flex items-center h-6 px-2 py-0 text-[10px] rounded border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-transparent hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-white/80 transition-all font-medium"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        toggleItem(relatedId);
                                                                    }}
                                                                >
                                                                    {relatedItem?.title}
                                                                    <ArrowRight
                                                                        size={8}
                                                                        className="ml-1 opacity-50"
                                                                    />
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
