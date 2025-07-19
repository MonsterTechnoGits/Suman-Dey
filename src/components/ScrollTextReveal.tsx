'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  stagger?: number;
  triggerOffset?: number;
}

const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text,
  className = '',
  speed = 1,
  direction = 'up',
  stagger = 50,
  triggerOffset = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollContainerRect = scrollContainer.getBoundingClientRect();
      
      // Calculate if element is in viewport
      const elementTop = containerRect.top - scrollContainerRect.top + scrollContainer.scrollTop;
      const elementHeight = containerRect.height;
      const scrollTop = scrollContainer.scrollTop;
      const viewportHeight = scrollContainer.clientHeight;

      // Trigger point
      const triggerPoint = elementTop - (viewportHeight * (1 - triggerOffset));
      
      if (scrollTop >= triggerPoint) {
        setIsVisible(true);
        
        // Calculate progress for individual character animations
        const progress = Math.min(
          (scrollTop - triggerPoint) / (elementHeight * speed),
          1
        );
        setScrollProgress(progress);
      } else {
        setIsVisible(false);
        setScrollProgress(0);
      }
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [speed, triggerOffset]);

  const getCharacterStyle = (index: number, totalChars: number) => {
    const delay = (index / totalChars) * stagger;
    const progress = Math.max(0, scrollProgress - (index / totalChars) * 0.5);
    
    let transform = '';
    const opacity = isVisible ? Math.min(progress * 2, 1) : 0;

    switch (direction) {
      case 'up':
        transform = `translateY(${(1 - progress) * 30}px)`;
        break;
      case 'down':
        transform = `translateY(${-(1 - progress) * 30}px)`;
        break;
      case 'left':
        transform = `translateX(${(1 - progress) * 30}px)`;
        break;
      case 'right':
        transform = `translateX(${-(1 - progress) * 30}px)`;
        break;
    }

    return {
      transform,
      opacity,
      transitionDelay: `${delay}ms`,
    };
  };

  const characters = text.split('');

  return (
    <div ref={containerRef} className={`scroll-text-reveal ${className}`}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 ease-out"
          style={getCharacterStyle(index, characters.length)}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default ScrollTextReveal;