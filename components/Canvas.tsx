import React, { useEffect, useRef } from 'react';

// @ts-ignore
function n(e) {
    // @ts-ignore
    this.init(e || {});
}
n.prototype = {
    // @ts-ignore
    init: function (e) {
        // @ts-ignore
        this.phase = e.phase || 0;
        // @ts-ignore
        this.offset = e.offset || 0;
        // @ts-ignore
        this.frequency = e.frequency || 0.001;
        // @ts-ignore
        this.amplitude = e.amplitude || 1;
    },
    update: function () {
        return (
            // @ts-ignore
            (this.phase += this.frequency),
            // @ts-ignore
            (this.e = this.offset + Math.sin(this.phase) * this.amplitude)
        );
    },
    value: function () {
        // @ts-ignore
        return this.e;
    },
};

export const LiquidCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // @ts-ignore
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        // @ts-ignore
        ctx.running = true;
        // @ts-ignore
        ctx.frame = 1;
        const f = new (n as any)({
            phase: Math.random() * 2 * Math.PI,
            amplitude: 85,
            frequency: 0.0015,
            offset: 285,
        });

        const E = {
            debug: true,
            friction: 0.5,
            trails: 80,
            size: 50,
            dampening: 0.025,
            tension: 0.99,
        };

        const pos = { x: 0, y: 0 };
        let lines: any[] = [];

        function Node() {
            // @ts-ignore
            this.x = 0;
            // @ts-ignore
            this.y = 0;
            // @ts-ignore
            this.vy = 0;
            // @ts-ignore
            this.vx = 0;
        }

        // @ts-ignore
        function Line(e) {
            // @ts-ignore
            this.init(e || {});
        }

        Line.prototype = {
            // @ts-ignore
            init: function (e) {
                // @ts-ignore
                this.spring = e.spring + 0.1 * Math.random() - 0.05;
                // @ts-ignore
                this.friction = E.friction + 0.01 * Math.random() - 0.005;
                // @ts-ignore
                this.nodes = [];
                for (var t, n = 0; n < E.size; n++) {
                    // @ts-ignore
                    t = new Node();
                    // @ts-ignore
                    t.x = pos.x;
                    // @ts-ignore
                    t.y = pos.y;
                    // @ts-ignore
                    this.nodes.push(t);
                }
            },
            update: function () {
                // @ts-ignore
                let e = this.spring,
                    // @ts-ignore
                    t = this.nodes[0];
                // @ts-ignore
                t.vx += (pos.x - t.x) * e;
                // @ts-ignore
                t.vy += (pos.y - t.y) * e;
                // @ts-ignore
                for (var n, i = 0, a = this.nodes.length; i < a; i++) {
                    // @ts-ignore
                    t = this.nodes[i];
                    if (i > 0) {
                        // @ts-ignore
                        n = this.nodes[i - 1];
                        // @ts-ignore
                        t.vx += (n.x - t.x) * e;
                        // @ts-ignore
                        t.vy += (n.y - t.y) * e;
                        // @ts-ignore
                        t.vx += n.vx * E.dampening;
                        // @ts-ignore
                        t.vy += n.vy * E.dampening;
                    }
                    // @ts-ignore
                    t.vx *= this.friction;
                    // @ts-ignore
                    t.vy *= this.friction;
                    // @ts-ignore
                    t.x += t.vx;
                    // @ts-ignore
                    t.y += t.vy;
                    e *= E.tension;
                }
            },
            draw: function () {
                let e, t;
                // @ts-ignore
                let n = this.nodes[0].x,
                    // @ts-ignore
                    i = this.nodes[0].y;
                // @ts-ignore
                ctx.beginPath();
                // @ts-ignore
                ctx.moveTo(n, i);
                // @ts-ignore
                for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
                    // @ts-ignore
                    e = this.nodes[a];
                    // @ts-ignore
                    t = this.nodes[a + 1];
                    n = 0.5 * (e.x + t.x);
                    i = 0.5 * (e.y + t.y);
                    // @ts-ignore
                    ctx.quadraticCurveTo(e.x, e.y, n, i);
                }
                // @ts-ignore
                e = this.nodes[a];
                // @ts-ignore
                t = this.nodes[a + 1];
                // @ts-ignore
                ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
                // @ts-ignore
                ctx.stroke();
                // @ts-ignore
                ctx.closePath();
            },
        };

        // @ts-ignore
        function onMousemove(e) {
            function o() {
                lines = [];
                for (let e = 0; e < E.trails; e++) {
                    // @ts-ignore
                    lines.push(new Line({ spring: 0.45 + (e / E.trails) * 0.025 }));
                }
            }
            // @ts-ignore
            function c(e) {
                if (e.touches) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                } else {
                    pos.x = e.clientX;
                    pos.y = e.clientY;
                }
                // Only prevent default on touch if needed, but not mouse to prevent breaking click events
                if (e.type !== "mousemove") {
                    e.preventDefault();
                }
            }
            // @ts-ignore
            function l(e) {
                if (e.touches.length === 1) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                }
            }

            // @ts-ignore
            canvas.removeEventListener("mousemove", onMousemove);
            // @ts-ignore
            canvas.removeEventListener("touchstart", onMousemove);

            // @ts-ignore
            canvas.addEventListener("mousemove", c);
            // @ts-ignore
            canvas.addEventListener("touchmove", c);
            // @ts-ignore
            canvas.addEventListener("touchstart", l);

            c(e);
            o();
            render();
        }

        function render() {
            // @ts-ignore
            if (ctx.running) {
                // @ts-ignore
                ctx.globalCompositeOperation = "source-over";
                // @ts-ignore
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                // @ts-ignore
                ctx.globalCompositeOperation = "lighter";
                // @ts-ignore
                ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.05)";
                // @ts-ignore
                ctx.lineWidth = 2;
                for (var e, t = 0; t < E.trails; t++) {
                    // @ts-ignore
                    e = lines[t];
                    if (e) {
                        e.update();
                        e.draw();
                    }
                }
                // @ts-ignore
                ctx.frame++;
                animationFrameId = window.requestAnimationFrame(render);
            }
        }

        function resizeCanvas() {
            // @ts-ignore
            ctx.canvas.width = window.innerWidth;
            // @ts-ignore
            ctx.canvas.height = window.innerHeight;
        }

        // Initialize
        resizeCanvas();
        // @ts-ignore
        canvas.addEventListener("mousemove", onMousemove);
        // @ts-ignore
        canvas.addEventListener("touchstart", onMousemove);
        window.addEventListener("resize", resizeCanvas);

        return () => {
            // @ts-ignore
            ctx.running = false;
            window.cancelAnimationFrame(animationFrameId);
            // @ts-ignore
            canvas.removeEventListener("mousemove", onMousemove);
            // @ts-ignore
            canvas.removeEventListener("touchstart", onMousemove);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0" style={{ touchAction: 'none' }} />;
};
