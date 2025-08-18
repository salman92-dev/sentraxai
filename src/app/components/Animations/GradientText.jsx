'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function GradientText({ text, className, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.h1
        ref={ref}
        className={`${className}`}
        style={{
          backgroundSize: "200% auto", // make gradient wider for movement
        }}
        initial={{ backgroundPosition: "0% center" }}
        animate={
          isInView
            ? { backgroundPosition: ["0% center", "100% center", "0% center"] }
            : { backgroundPosition: "0% center" }
        }
        transition={{
          delay,
          duration: 4,
          ease: "linear",
          repeat: Infinity, // loop forever
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
