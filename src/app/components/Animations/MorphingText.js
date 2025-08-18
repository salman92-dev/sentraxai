'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function MorphingText({
  words,
  interval = 2000,
  className = 'text-4xl font-bold'
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className="overflow-hidden inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ opacity: 0, y: -20, clipPath: 'inset(100% 0% 0% 0%)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={className}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
