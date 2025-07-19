'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

interface ScrollContextType {
  scrollProgress: number;
  isScrolling: boolean;
  scrollDirection: 'up' | 'down' | null;
  scrollToTop: () => void;
  scrollToSection: (sectionId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  
  const lastScrollTop = useRef(0);
  const scrollTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolling(true);

      // Determine scroll direction
      if (scrollTop > lastScrollTop.current) {
        setScrollDirection('down');
      } else if (scrollTop < lastScrollTop.current) {
        setScrollDirection('up');
      }
      lastScrollTop.current = scrollTop;

      // Clear existing timer
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }

      // Set scrolling to false after 150ms of no scrolling
      scrollTimer.current = setTimeout(() => {
        setIsScrolling(false);
        setScrollDirection(null);
      }, 150);
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
        }
      };
    }
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const scrollContainer = document.querySelector('.scroll-container');
    const targetElement = document.getElementById(sectionId);
    
    if (scrollContainer && targetElement) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const offsetTop = targetRect.top - containerRect.top + scrollContainer.scrollTop;
      
      scrollContainer.scrollTo({
        top: offsetTop - 20, // 20px offset from top
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollContext.Provider value={{
      scrollProgress,
      isScrolling,
      scrollDirection,
      scrollToTop,
      scrollToSection
    }}>
      {children}
    </ScrollContext.Provider>
  );
};