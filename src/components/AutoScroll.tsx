"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface AutoScrollProps {
  /** Array of items to display */
  items: React.ReactNode[];
  /** Scrolling speed in pixels per second */
  speed?: number;
}

const AutoScroll: React.FC<AutoScrollProps> = ({ items, speed = 50 }) => {
  const [itemsData,setItemsData] = useState<React.ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Motion value to track horizontal position
  const x = useMotionValue(0);

  // Measure the container and content widths
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && contentRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        const content = contentRef.current.getBoundingClientRect();
        setContainerWidth(container.width);
        setContentWidth(content.width);
      }
    };

    

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [itemsData]);

  useEffect(()=>{
    if(items.length>0){
      setItemsData([...items,...items,...items]);
    }
  },[items])

  // Animation loop for scrolling
  useAnimationFrame((_, delta) => {
    if (!contentWidth) return;

    // Calculate the displacement for this frame (delta is in ms)
    const moveBy = (speed * delta) / 1000;
    let newX = x.get() - moveBy;

    // Adjust position to create seamless infinite scrolling
    while (newX <= -contentWidth) {
      newX += contentWidth;
    }

    x.set(newX);
  });

  // Only render if we have items
  if (itemsData.length === 0) return null;

  // Calculate how many copies we need to fill the container with a buffer
  const requiredSets = Math.max(3, Math.ceil((containerWidth * 2) / contentWidth) + 1);

  // Create arrays of duplicated item sets
  const duplicatedSets = Array.from({ length: requiredSets }, (_, i) => (
    <div key={i} className="flex">
      {itemsData.map((item, index) => (
        <div key={`${i}-${index}`} className="mr-4 inline-block">
          {item}
        </div>
      ))}
    </div>
  ));

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex">
        {/* First copy to measure width */}
        <div ref={contentRef} className="flex">
          {itemsData.map((item, index) => (
            <div key={`original-${index}`} className="mr-4 inline-block">
              {item}
            </div>
          ))}
        </div>

        {/* Additional copies to ensure seamless scrolling */}
        {duplicatedSets}
      </motion.div>
    </div>
  );
};

export default AutoScroll;