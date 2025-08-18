'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TextReveal({ text, as = "h1", className, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const MotionTag = motion[as];

  return (
    <div className="flex w-fit items-center justify-center bg-gray-900">
      {/* Mask Wrapper */}
      <div className="overflow-hidden">
        <MotionTag
          ref={ref}
          className={className}
          style={{ display: "inline-block" }}
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : { y: "100%" }}
          transition={{
            delay,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {text}
        </MotionTag>
      </div>
    </div>
  );
}
