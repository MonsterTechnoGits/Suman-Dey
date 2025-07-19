'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ScrollParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const ScrollParticles: React.FC<ScrollParticlesProps> = ({
  count = 20,
  colors = ['#8b5cf6', '#a855f7', '#9333ea', '#7c3aed'],
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollVelocityRef = useRef(0);
  const lastScrollTopRef = useRef(0);
  const animationFrameRef = useRef<number | undefined>(undefined);

  const createParticle = useCallback((x?: number, y?: number): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Particle;

    return {
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 200 + 100,
    };
  }, [colors]);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      // Update particle based on scroll velocity
      particle.x += particle.vx + scrollVelocityRef.current * 0.1;
      particle.y += particle.vy + Math.sin(particle.life * 0.01) * 0.5;
      particle.life++;

      // Apply scroll velocity to particle movement
      const scrollInfluence = Math.abs(scrollVelocityRef.current) * 0.01;
      particle.opacity = Math.min(particle.opacity + scrollInfluence, 0.8);

      // Boundary checking
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.save();
      ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Draw connections to nearby particles
      particlesRef.current.forEach(otherParticle => {
        if (particle === otherParticle) return;
        
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - distance / 100) * 0.1 * particle.opacity;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      });

      return particle.life < particle.maxLife;
    });

    // Add new particles based on scroll velocity
    const scrollIntensity = Math.abs(scrollVelocityRef.current);
    if (scrollIntensity > 1 && particlesRef.current.length < count * 2) {
      const newParticleCount = Math.min(3, Math.floor(scrollIntensity / 5));
      for (let i = 0; i < newParticleCount; i++) {
        particlesRef.current.push(createParticle());
      }
    }

    // Maintain minimum particle count
    while (particlesRef.current.length < count) {
      particlesRef.current.push(createParticle());
    }

    // Decay scroll velocity
    scrollVelocityRef.current *= 0.95;

    animationFrameRef.current = requestAnimationFrame(updateParticles);
  }, [count, createParticle]);

  const handleScroll = useCallback(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const currentScrollTop = scrollContainer.scrollTop;
    scrollVelocityRef.current = currentScrollTop - lastScrollTopRef.current;
    lastScrollTopRef.current = currentScrollTop;
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }, []);

  useEffect(() => {
    resizeCanvas();

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => createParticle());

    // Start animation loop
    updateParticles();

    // Set up scroll listener
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Set up resize listener
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [count, createParticle, updateParticles, handleScroll, resizeCanvas]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          mixBlendMode: 'screen',
          opacity: 0.3,
        }}
      />
    </div>
  );
};

export default ScrollParticles;