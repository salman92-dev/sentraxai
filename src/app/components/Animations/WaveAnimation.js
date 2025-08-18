'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WaveText({ text, className, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = text.split("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.h1
        ref={ref}
        className={`${className} flex`}
        aria-label={text}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={
              isInView
                ? {
                    y: [0, -10, 0], // bounce up & down
                  }
                : { y: 0 }
            }
            transition={{
              delay: delay + index * 0.1, // stagger bounce
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            {letter === " " ? "\u00A0" : letter} {/* keep spaces */}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
