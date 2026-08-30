"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  type: "ai" | "language" | "data" | "human" | "core";
  color: string;
  pulse: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 650;
    };

    window.addEventListener("resize", handleResize);

    // Core central node + Satellite nodes
    const centerNode: Node = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      radius: 28,
      label: "WELONIX CORE",
      type: "core",
      color: "#3b82f6",
      pulse: 0,
    };

    const categories: Array<{ label: string; type: Node["type"]; color: string }> = [
      { label: "AI Models", type: "ai", color: "#6366f1" },
      { label: "Language Context", type: "language", color: "#8b5cf6" },
      { label: "Structured Data", type: "data", color: "#06b6d4" },
      { label: "Human Judgment", type: "human", color: "#10b981" },
      { label: "LLM Eval", type: "ai", color: "#3b82f6" },
      { label: "Multilingual OCR", type: "language", color: "#ec4899" },
      { label: "RLHF Dataset", type: "data", color: "#14b8a6" },
      { label: "Domain Experts", type: "human", color: "#f59e0b" },
    ];

    const nodes: Node[] = categories.map((cat, idx) => {
      const angle = (idx / categories.length) * Math.PI * 2;
      const distance = Math.min(width, height) * 0.28 + (idx % 2 === 0 ? 30 : -20);
      return {
        x: width / 2 + Math.cos(angle) * distance,
        y: height / 2 + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 14 + Math.random() * 4,
        label: cat.label,
        type: cat.type,
        color: cat.color,
        pulse: Math.random() * Math.PI,
      };
    });

    // Data stream particles along paths
    interface Particle {
      sourceIdx: number;
      progress: number;
      speed: number;
      size: number;
    }

    const particles: Particle[] = Array.from({ length: 40 }, () => ({
      sourceIdx: Math.floor(Math.random() * nodes.length),
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      size: 2 + Math.random() * 2,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Keep center stationary
      centerNode.x = width / 2;
      centerNode.y = height / 2;
      centerNode.pulse += 0.03;

      // Update nodes physics
      nodes.forEach((node) => {
        node.pulse += 0.04;
        node.x += node.vx;
        node.y += node.vy;

        // Soft tethering to original orbit
        const dx = node.x - centerNode.x;
        const dy = node.y - centerNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > width * 0.45) {
          node.vx -= (dx / dist) * 0.02;
          node.vy -= (dy / dist) * 0.02;
        }

        // Mouse repulse/attract interaction
        const mdx = mouseX - node.x;
        const mdy = mouseY - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          node.x -= (mdx / mdist) * 1.5;
          node.y -= (mdy / mdist) * 1.5;
        }
      });

      // Draw Connection Lines between nodes and central core
      nodes.forEach((node) => {
        const dx = centerNode.x - node.x;
        const dy = centerNode.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const gradient = ctx.createLinearGradient(node.x, node.y, centerNode.x, centerNode.y);
        gradient.addColorStop(0, `${node.color}55`);
        gradient.addColorStop(1, `${centerNode.color}22`);

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(centerNode.x, centerNode.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Draw inter-satellite links if close
        nodes.forEach((other) => {
          if (node === other) return;
          const odx = other.x - node.x;
          const ody = other.y - node.y;
          const odist = Math.sqrt(odx * odx + ody * ody);

          if (odist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Draw Data Particles travelling along lines
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.sourceIdx = Math.floor(Math.random() * nodes.length);
        }

        const source = nodes[p.sourceIdx];
        const px = source.x + (centerNode.x - source.x) * p.progress;
        const py = source.y + (centerNode.y - source.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = source.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = source.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const pSize = Math.sin(node.pulse) * 2;

        // Outer glow aura
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 6 + pSize, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}15`;
        ctx.fill();

        // Solid circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0c101d";
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        // Inner core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Label text
        ctx.font = "11px monospace";
        ctx.fillStyle = "#cbd5e1";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + node.radius + 16);
      });

      // Draw Core Central Node
      const cPulse = Math.sin(centerNode.pulse) * 4;

      // Pulse ring
      ctx.beginPath();
      ctx.arc(centerNode.x, centerNode.y, centerNode.radius + 18 + cPulse, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Main core body
      ctx.beginPath();
      ctx.arc(centerNode.x, centerNode.y, centerNode.radius, 0, Math.PI * 2);
      const coreGrad = ctx.createRadialGradient(
        centerNode.x,
        centerNode.y,
        0,
        centerNode.x,
        centerNode.y,
        centerNode.radius
      );
      coreGrad.addColorStop(0, "#60a5fa");
      coreGrad.addColorStop(0.6, "#2563eb");
      coreGrad.addColorStop(1, "#1d4ed8");
      ctx.fillStyle = coreGrad;
      ctx.shadowBlur = 25;
      ctx.shadowColor = "#3b82f6";
      ctx.fill();
      ctx.shadowBlur = 0;

      // Label inside Core
      ctx.font = "bold 10px monospace";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("WELONIX", centerNode.x, centerNode.y + 3);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-auto opacity-75 md:opacity-100">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
