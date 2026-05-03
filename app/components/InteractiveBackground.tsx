"use client";

import { useEffect, useRef } from "react";

type Orb = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  phase: number;
};

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let pixelRatio = 1;
    let orbs: Orb[] = [];

    const createOrbs = () => {
      const count = Math.min(34, Math.max(16, Math.floor(width / 46)));
      orbs = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: 1.8 + Math.random() * 4.5,
        hue: index % 3 === 0 ? 192 : index % 3 === 1 ? 146 : 268,
        phase: Math.random() * Math.PI * 2
      }));
    };

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createOrbs();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        pointer.active ? pointer.x : width * 0.55,
        pointer.active ? pointer.y : height * 0.42,
        0,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, "rgba(88, 214, 255, 0.12)");
      gradient.addColorStop(0.42, "rgba(122, 92, 255, 0.06)");
      gradient.addColorStop(1, "rgba(5, 6, 8, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const orb of orbs) {
        if (!reduceMotion.matches) {
          const drift = Math.sin(time * 0.0007 + orb.phase) * 0.12;
          orb.x += orb.vx + drift;
          orb.y += orb.vy + Math.cos(time * 0.0006 + orb.phase) * 0.08;
        }

        if (pointer.active) {
          const dx = orb.x - pointer.x;
          const dy = orb.y - pointer.y;
          const distance = Math.max(Math.hypot(dx, dy), 1);
          if (distance < 180) {
            const push = (180 - distance) / 180;
            orb.x += (dx / distance) * push * 1.8;
            orb.y += (dy / distance) * push * 1.8;
          }
        }

        if (orb.x < -20) orb.x = width + 20;
        if (orb.x > width + 20) orb.x = -20;
        if (orb.y < -20) orb.y = height + 20;
        if (orb.y > height + 20) orb.y = -20;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${orb.hue}, 86%, 68%, 0.58)`;
        ctx.shadowColor = `hsla(${orb.hue}, 86%, 68%, 0.34)`;
        ctx.shadowBlur = 18;
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      for (let index = 0; index < orbs.length; index += 1) {
        for (let next = index + 1; next < orbs.length; next += 1) {
          const a = orbs[index];
          const b = orbs[next];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 135) {
            ctx.strokeStyle = `rgba(180, 230, 255, ${0.08 * (1 - distance / 135)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const movePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const leavePointer = () => {
      pointer.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", movePointer);
    window.addEventListener("pointerleave", leavePointer);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("pointerleave", leavePointer);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="interactive-bg" />;
}
