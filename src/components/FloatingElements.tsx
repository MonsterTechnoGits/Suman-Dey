'use client';

import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

interface FloatingElementsProps {
  count?: number;
  speed?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 6,
  speed = 0.3,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const floatingIcons = [
    'material-symbols:code-rounded',
    'material-symbols:laptop-mac-rounded',
    'material-symbols:rocket-launch-rounded',
    'material-symbols:lightbulb-rounded',
    'material-symbols:psychology-rounded',
    'material-symbols:terminal-rounded',
    'material-symbols:memory-rounded',
    'material-symbols:cloud-rounded',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer || !containerRef.current) return;

      const scrollTop = scrollContainer.scrollTop;
      const scrollProgress = scrollTop * speed;

      elementsRef.current.forEach((element, index) => {
        if (!element) return;

        // Different movement patterns for each element
        const offset = index * 100;
        const amplitude = 30 + (index * 10);
        const frequency = 0.005 + (index * 0.002);

        // Calculate wave-like movement
        const x = Math.sin((scrollProgress + offset) * frequency) * amplitude;
        const y = Math.cos((scrollProgress + offset) * frequency * 0.7) * (amplitude * 0.6);
        
        // Additional rotation based on scroll
        const rotation = (scrollProgress + offset) * 0.1;

        element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
      });
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [speed]);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-[5] ${className}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) elementsRef.current[index] = el;
          }}
          className="absolute opacity-10 text-purple-400 transition-all duration-1000 ease-out"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
            willChange: 'transform',
          }}
        >
          <Icon 
            icon={floatingIcons[index % floatingIcons.length]} 
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;