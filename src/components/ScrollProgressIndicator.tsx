'use client';

import React from 'react';
import { useScroll } from './SmoothScrollProvider';

const ScrollProgressIndicator: React.FC = () => {
  const { scrollProgress, isScrolling } = useScroll();

  return (
    <>
      {/* Top Progress Bar */}
      <div 
        className={`fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 z-[100] transition-opacity duration-300 ${
          isScrolling ? 'opacity-100' : 'opacity-60'
        }`}
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Circular Progress Indicator */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        scrollProgress > 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="relative w-12 h-12">
          {/* Background Circle */}
          <svg
            className="w-12 h-12 transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-gray-700/50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Progress Circle */}
          <svg
            className="absolute top-0 left-0 w-12 h-12 transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-purple-500"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-white">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollProgressIndicator;