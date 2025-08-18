'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function RotateInText({
  text,
  as = 'h1',            // tag or component
  className = '',
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Support both string tags (h1, p, span) and custom components
  const MotionTag = motion[as];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <MotionTag
        ref={ref}
        className={className}
        style={{ transformOrigin: 'center' }}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={isInView ? { rotateX: 0, opacity: 1 } : { rotateX: 90, opacity: 0 }}
        transition={{
          delay,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        {text}
      </MotionTag>
    </div>
  );
}
