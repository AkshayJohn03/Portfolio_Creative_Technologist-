'use client'

import React, { Suspense, lazy, useState, useEffect } from 'react'
import { WorkflowPipelineCard } from './WorkflowPipelineCard'
import { Layers, Box } from 'lucide-react'

const Spline = lazy(() => import('@splinetool/react-spline'))

class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback?: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.warn("Spline 3D scene load skipped or unavailable, switching to Workflow visual card:", error);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <WorkflowPipelineCard className="w-full h-full" />;
        }
        return this.props.children;
    }
}

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const [viewMode, setViewMode] = useState<'3d' | 'workflow'>('workflow');
    const [splineLoaded, setSplineLoaded] = useState(false);
    const [splineTimedOut, setSplineTimedOut] = useState(false);

    // If 3D doesn't load within 3 seconds on restricted corporate networks, keep workflow view active
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!splineLoaded) {
                setSplineTimedOut(true);
            }
        }, 3500);
        return () => clearTimeout(timer);
    }, [splineLoaded]);

    return (
        <div className="relative w-full h-full group">
            {/* View Mode Toggle Pill */}
            <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-lg text-[10px] font-mono">
                <button
                    onClick={() => setViewMode('workflow')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
                        viewMode === 'workflow'
                            ? 'bg-blue-600 text-white font-bold shadow-sm'
                            : 'text-gray-400 hover:text-white'
                    }`}
                    title="View Figma -> MCP -> Cursor -> React 19 Workflow"
                >
                    <Layers size={12} />
                    <span className="hidden sm:inline">Pipeline</span>
                </button>
                <button
                    onClick={() => setViewMode('3d')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
                        viewMode === '3d'
                            ? 'bg-blue-600 text-white font-bold shadow-sm'
                            : 'text-gray-400 hover:text-white'
                    }`}
                    title="View 3D Scene"
                >
                    <Box size={12} />
                    <span className="hidden sm:inline">3D</span>
                </button>
            </div>

            {viewMode === 'workflow' ? (
                <WorkflowPipelineCard className="w-full h-full" />
            ) : (
                <ErrorBoundary fallback={<WorkflowPipelineCard className="w-full h-full" />}>
                    <Suspense
                        fallback={
                            <div className="w-full h-full flex flex-col items-center justify-center bg-[#070b14] rounded-3xl border border-white/5 gap-3">
                                <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span>
                                <span className="text-xs font-mono text-gray-400">Loading 3D asset...</span>
                            </div>
                        }
                    >
                        {splineTimedOut ? (
                            <WorkflowPipelineCard className="w-full h-full" />
                        ) : (
                            <Spline
                                scene={scene}
                                className={className}
                                onLoad={() => setSplineLoaded(true)}
                            />
                        )}
                    </Suspense>
                </ErrorBoundary>
            )}
        </div>
    )
}
export default SplineScene;
