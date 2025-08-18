"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ShatterReassembleText({
  text,
  duration = 2,
  className = "",
}) {
  const letters = text.split("");

  // Generate random offsets for each letter
  const randomOffsets = letters.map(() => ({
    x: (Math.random() - 0.5) * 300, // random between -150 and 150
    y: (Math.random() - 0.5) * 300, // random between -150 and 150
  }));

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = (i) => ({
    hidden: {
      opacity: 0,
      x: randomOffsets[i].x,
      y: randomOffsets[i].y,
      rotate: Math.random() * 360,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: duration / 2, ease: "easeOut" },
    },
  });

  return (
    <motion.div
      className={`h-[30rem] flex ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child(i)}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
