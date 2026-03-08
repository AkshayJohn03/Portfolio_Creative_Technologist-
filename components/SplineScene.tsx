'use client'

import React, { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error("Spline error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex items-center justify-center bg-black/10 dark:bg-white/5 rounded-3xl">
                    <span className="text-gray-500 text-sm">Interactive 3D scene temporarily unavailable.</span>
                </div>
            );
        }
        return this.props.children;
    }
}

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <ErrorBoundary>
            <Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></span>
                    </div>
                }
            >
                <Spline
                    scene={scene}
                    className={className}
                />
            </Suspense>
        </ErrorBoundary>
    )
}
