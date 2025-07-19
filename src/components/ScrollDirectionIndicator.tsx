'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useScroll } from './SmoothScrollProvider';

const ScrollDirectionIndicator: React.FC = () => {
  const { isScrolling, scrollDirection, scrollProgress } = useScroll();

  if (!isScrolling || scrollProgress < 5) return null;

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className={`transition-all duration-300 ${
        isScrolling ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="relative w-8 h-16 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 flex flex-col items-center justify-center">
          {/* Scroll direction indicator */}
          <div className={`transition-all duration-200 ${
            scrollDirection === 'up' 
              ? 'text-blue-400 -translate-y-1' 
              : scrollDirection === 'down' 
                ? 'text-purple-400 translate-y-1' 
                : 'text-gray-500'
          }`}>
            <Icon 
              icon={scrollDirection === 'up' 
                ? "material-symbols:keyboard-arrow-up-rounded" 
                : "material-symbols:keyboard-arrow-down-rounded"
              } 
              className="w-5 h-5" 
            />
          </div>
          
          {/* Scroll track */}
          <div className="absolute inset-y-2 w-0.5 bg-gray-700 rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-purple-500 to-purple-400 rounded-full transition-all duration-300"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDirectionIndicator;