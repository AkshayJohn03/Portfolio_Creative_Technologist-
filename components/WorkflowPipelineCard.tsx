import React, { useState, useEffect, useRef } from 'react';
import { Layers, Cpu, Sparkles, Code2, ArrowRight, CheckCircle2, Terminal, Zap, RefreshCw } from 'lucide-react';

interface PipelineStep {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  badge: string;
  color: string;
  borderColor: string;
  glowColor: string;
  icon: React.ReactNode;
  details: {
    title: string;
    description: string;
    codeSnippet: string;
    lang: string;
    metrics: string;
  };
}

export const WorkflowPipelineCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const steps: PipelineStep[] = [
    {
      id: 'figma',
      number: '01',
      name: 'Figma Variables',
      subtitle: 'Design Token Primitives',
      badge: 'DTCG AST',
      color: 'text-amber-400',
      borderColor: 'border-amber-400/40',
      glowColor: 'rgba(251, 191, 36, 0.25)',
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      details: {
        title: 'Design Token Architecture',
        description: 'Semantic design variables defined in Figma (colors, typography, spacing, radii) structured in W3C DTCG format.',
        codeSnippet: `{\n  "color": {\n    "brand": { "primary": { "$value": "#0052cc", "$type": "color" } },\n    "accent": { "amber": { "$value": "#f59e0b", "$type": "color" } }\n  },\n  "radius": { "card": { "$value": "16px", "$type": "dimension" } }\n}`,
        lang: 'json',
        metrics: '100% Token Coverage'
      }
    },
    {
      id: 'mcp',
      number: '02',
      name: 'Figma MCP Bridge',
      subtitle: 'Model Context Protocol',
      badge: 'JSON-RPC 2.0',
      color: 'text-blue-400',
      borderColor: 'border-blue-400/40',
      glowColor: 'rgba(96, 165, 250, 0.25)',
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      details: {
        title: 'Headless Context Serialization',
        description: 'Custom MCP server reading Figma REST endpoints and vector nodes into structured AST context for LLM consumption.',
        codeSnippet: `// MCP tool: get_figma_components\n{\n  "method": "tools/call",\n  "params": {\n    "name": "extract_figma_tokens",\n    "arguments": { "nodeId": "412:89", "format": "dtcg_v1" }\n  }\n}`,
        lang: 'json',
        metrics: 'Sub-second AST sync'
      }
    },
    {
      id: 'cursor',
      number: '03',
      name: 'Cursor + Claude',
      subtitle: 'Agentic Code Synthesis',
      badge: 'Context Orchestration',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400/40',
      glowColor: 'rgba(34, 211, 238, 0.25)',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      details: {
        title: 'AI Component Synthesis',
        description: 'Cursor IDE with Claude transforming token AST and vector hierarchy into fully accessible, typed React 19 components.',
        codeSnippet: `// Cursor Agent prompt\n"Synthesize <MetricTelemetryCard /> using tokens from MCP.\nApply strict TypeScript types, Framer Motion transitions,\nand responsive viewport constraints."`,
        lang: 'text',
        metrics: '3x Faster Handoff'
      }
    },
    {
      id: 'react',
      number: '04',
      name: 'React 19 + Tailwind',
      subtitle: 'Production Handoff',
      badge: 'Zero-Drift Live UI',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/40',
      glowColor: 'rgba(52, 211, 153, 0.25)',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      details: {
        title: 'Zero-Drift Production Delivery',
        description: 'Atomic Tailwind v4 utility tokens and modern React 19 hooks with zero visual drift between design file and browser code.',
        codeSnippet: `export const TelemetryCard: React.FC<Props> = ({ metric }) => (\n  <div className="rounded-2xl border border-white/10 bg-[#0c1222]/90 p-6 backdrop-blur-xl shadow-2xl">\n    <span className="text-xs uppercase text-amber-400 tracking-wider font-mono">{metric.label}</span>\n    <div className="text-3xl font-bold text-white mt-2">{metric.value}</div>\n  </div>\n);`,
        lang: 'tsx',
        metrics: 'Zero Design Drift'
      }
    }
  ];

  // Auto cycle steps every 4.5 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  // Canvas particle pulse effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    const particles: Array<{ x: number; y: number; speed: number; radius: number; alpha: number }> = [];
    for (let i = 0; i < 24; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.3 + Math.random() * 0.7,
        radius: 1 + Math.random() * 1.5,
        alpha: 0.2 + Math.random() * 0.5
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid dots
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      const step = 28;
      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw animated particles
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha * 0.4})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentStep = steps[activeStep];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between rounded-3xl bg-[#070b14] border border-blue-500/20 text-white overflow-hidden p-5 sm:p-6 select-none shadow-2xl transition-all ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Subtle radial glow */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none filter blur-[90px] transition-all duration-700 opacity-25"
        style={{ backgroundColor: currentStep.glowColor }}
      />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full pointer-events-none filter blur-[90px]" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold text-gray-300">
            Pipeline Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[10px] font-mono font-bold text-blue-300">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>3x Faster Handoff</span>
        </div>
      </div>

      {/* Central Pipeline Step Navigator */}
      <div className="relative z-10 my-3">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-3">
          {steps.map((s, idx) => {
            const isCurrent = idx === activeStep;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className={`relative group flex flex-col items-center p-2 rounded-xl text-center transition-all duration-300 border ${
                  isCurrent
                    ? `${s.borderColor} bg-white/10 shadow-[0_0_15px_${s.glowColor}]`
                    : 'border-white/5 bg-white/5 hover:bg-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="mb-1">{s.icon}</div>
                <span className="text-[10px] font-mono font-bold text-gray-300 leading-tight truncate w-full">
                  {s.name.split(' ')[0]}
                </span>
                <span className="text-[9px] text-gray-400 hidden sm:block">
                  {s.number}
                </span>

                {isCurrent && (
                  <div
                    className="absolute -bottom-1 w-6 h-0.5 rounded-full"
                    style={{ backgroundColor: s.glowColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Step Detail Card */}
        <div className="rounded-2xl border border-white/10 bg-[#0d1527]/80 p-4 backdrop-blur-md transition-all duration-500">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-amber-400">{currentStep.number}</span>
              <h4 className="text-sm font-bold text-white">{currentStep.details.title}</h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
              {currentStep.details.metrics}
            </span>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            {currentStep.details.description}
          </p>

          {/* Code preview snippet */}
          <div className="rounded-xl bg-black/60 border border-white/5 p-2.5 font-mono text-[10px] sm:text-[11px] text-blue-200 overflow-x-auto max-h-24 scrollbar-thin">
            <pre className="whitespace-pre">{currentStep.details.codeSnippet}</pre>
          </div>
        </div>
      </div>

      {/* Footer Pipeline Chain */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-gray-400 overflow-x-auto">
          <span className="text-amber-400 font-bold">Figma</span>
          <ArrowRight className="w-3 h-3 text-gray-600" />
          <span className="text-blue-400 font-bold">MCP</span>
          <ArrowRight className="w-3 h-3 text-gray-600" />
          <span className="text-cyan-400 font-bold">Cursor</span>
          <ArrowRight className="w-3 h-3 text-gray-600" />
          <span className="text-emerald-400 font-bold">React 19</span>
        </div>

        <button
          onClick={() => setActiveStep(prev => (prev + 1) % steps.length)}
          className="flex items-center gap-1 text-[10px] font-mono text-gray-400 hover:text-white transition-colors pl-2"
          title="Cycle through workflow"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden sm:inline">Next</span>
        </button>
      </div>
    </div>
  );
};
