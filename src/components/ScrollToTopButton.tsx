'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useScroll } from './SmoothScrollProvider';

const ScrollToTopButton: React.FC = () => {
  const { scrollProgress, scrollToTop, isScrolling } = useScroll();

  const handleClick = () => {
    scrollToTop();
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-24 right-6 z-50 group transition-all duration-300 ${
        scrollProgress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <div className={`relative w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full shadow-lg shadow-purple-500/25 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 ${
        isScrolling ? 'animate-pulse' : ''
      }`}>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
        
        {/* Arrow Icon */}
        <Icon 
          icon="material-symbols:keyboard-arrow-up-rounded" 
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" 
        />
        
        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
      </div>
    </button>
  );
};

export default ScrollToTopButton;