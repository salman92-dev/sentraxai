"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxText({
  text,
  baseSpeed = -100, // negative = moves up faster than scroll
  className = "",
}) {
  const ref = useRef(null);

  // track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Map scroll progress to vertical movement
  const y = useTransform(scrollYProgress, [0, 1], [baseSpeed, -baseSpeed]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.h1
        style={{ y }}
        className={`text-6xl font-bold ${className}`}
      >
        {text}
      </motion.h1>
    </div>
  );
}
