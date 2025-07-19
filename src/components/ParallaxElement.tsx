'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Parallax speed multiplier (0.1 - 2.0)
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  offset?: number; // Additional offset for positioning
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  offset = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer || !elementRef.current) return;

      const scrollTop = scrollContainer.scrollTop;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;
      const windowHeight = scrollContainer.clientHeight;

      // Calculate if element is in viewport
      const elementBottom = elementTop + elementHeight;
      const isInViewport = scrollTop < elementBottom && scrollTop + windowHeight > elementTop;

      if (isInViewport) {
        // Calculate parallax offset
        const parallaxValue = (scrollTop - elementTop + offset) * speed;

        let transformValue = '';
        switch (direction) {
          case 'up':
            transformValue = `translate3d(0, ${-parallaxValue}px, 0)`;
            break;
          case 'down':
            transformValue = `translate3d(0, ${parallaxValue}px, 0)`;
            break;
          case 'left':
            transformValue = `translate3d(${-parallaxValue}px, 0, 0)`;
            break;
          case 'right':
            transformValue = `translate3d(${parallaxValue}px, 0, 0)`;
            break;
        }

        setTransform(transformValue);
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
  }, [speed, direction, offset]);

  return (
    <div
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={{
        transform,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;