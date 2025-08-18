'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ZoomInText({ text, as = "h1", className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const MotionTag = motion[as];

  return (
    <div className="w-fit flex items-center justify-center bg-gray-900">
      <MotionTag
        ref={ref}
        className={className}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {text}
      </MotionTag>
    </div>
  );
}
