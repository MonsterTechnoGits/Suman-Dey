'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollVelocityBlurProps {
  children: React.ReactNode;
  maxBlur?: number;
  threshold?: number;
  className?: string;
}

const ScrollVelocityBlur: React.FC<ScrollVelocityBlurProps> = ({
  children,
  maxBlur = 8,
  threshold = 5,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [blurAmount, setBlurAmount] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastScrollTop = useRef(0);
  const velocityHistory = useRef<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const currentScrollTop = scrollContainer.scrollTop;
      const rawVelocity = Math.abs(currentScrollTop - lastScrollTop.current);
      
      // Smooth velocity with history
      velocityHistory.current.push(rawVelocity);
      if (velocityHistory.current.length > 5) {
        velocityHistory.current.shift();
      }
      
      const avgVelocity = velocityHistory.current.reduce((a, b) => a + b, 0) / velocityHistory.current.length;
      setVelocity(avgVelocity);
      
      // Calculate blur amount based on velocity
      const normalizedVelocity = Math.min(avgVelocity / threshold, 1);
      const newBlurAmount = normalizedVelocity * maxBlur;
      setBlurAmount(newBlurAmount);
      
      lastScrollTop.current = currentScrollTop;
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [maxBlur, threshold]);

  // Gradually reduce blur when not scrolling
  useEffect(() => {
    const reduceBlur = () => {
      setBlurAmount(prev => Math.max(0, prev * 0.9));
    };

    const interval = setInterval(reduceBlur, 16); // 60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-velocity-blur transition-all duration-100 ${className}`}
      style={{
        filter: `blur(${blurAmount}px)`,
        transform: `scale(${1 + (velocity * 0.001)})`,
        willChange: 'filter, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollVelocityBlur;