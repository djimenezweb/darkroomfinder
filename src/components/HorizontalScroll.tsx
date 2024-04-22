'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function HorizontalScroll({
  children
}: {
  children: React.ReactNode;
}) {
  const [translation, setTranslation] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      if (targetRef.current && carouselRef.current) {
        const targetWidth = targetRef.current.getBoundingClientRect().width;
        const carouselWidth = carouselRef.current.getBoundingClientRect().width;
        setTranslation(carouselWidth - targetWidth);
      }
    };

    // Call the updateWidth function initially
    updateWidth();

    // Listen to window resize events to update the width
    window.addEventListener('resize', updateWidth);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  const { scrollYProgress } = useScroll({
    target: targetRef,
    axis: 'y',
    // offset: ['startT startC', 'endT endC']
    offset: ['end 80%', 'start 20%']
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${translation}px`]);

  return (
    <>
      <p>{translation}</p>
      <div
        ref={targetRef}
        className="relative h-96 bg-gray-dark-100 border-y border-gray-dark-600">
        <div className="sticky h-96 top-16 flex items-center overflow-x-hidden">
          <motion.div style={{ x }} className="flex gap-16" ref={carouselRef}>
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
}
