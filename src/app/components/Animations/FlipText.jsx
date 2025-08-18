"use client";

import React from "react";
import { motion } from "framer-motion";


export default function FlipText({
  text = "3D Flip Text",
  by = "words",
  duration = 0.7,
  stagger = 0.05,
  perspective = 800,
  depth = 90,
  direction = "in",
  className = "",
  onComplete,
  style = {},
}) {
  const segments = by === "words" ? text.split(" ") : Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  // Each child flips around Y axis from depth -> 0
  const child = {
    hidden: {
      rotateY: direction === "in" ? depth : 0,
      opacity: direction === "in" ? 0 : 1,
      transformPerspective: perspective,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  // For exit or reverse flips you can add variants for "exit" state if needed.

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      onAnimationComplete={onComplete}
      style={{ perspective: `${perspective}px`, WebkitPerspective: `${perspective}px`, transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d", ...style }}
      className={`flip-text inline-flex flex-wrap gap-1 ${className}`}
    >
      {segments.map((seg, i) => (
        <motion.span
          key={`${seg}-${i}`}
          variants={child}
          style={{ display: "inline-block", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="inline-block"
        >
          {seg === " " ? (by === "words" ? "\u00A0" : "\u00A0") : seg}
        </motion.span>
      ))}
    </motion.div>
  );
}

/*
Example usage in a Next.js client page:

"use client";
import FlipText from '@/components/FlipText';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white p-8">
      <FlipText
        text="Showcase Your Work"
        by="letters"
        duration={0.8}
        stagger={0.04}
        depth={120}
        perspective={900}
        className="text-5xl font-extrabold"
      />
    </div>
  );
}


*/