"use client";
import { motion } from "framer-motion";
import React from "react";

export default function NeonGlowText({
  text,
  color = "#0ff",
  pulseColor = "#f0f",
  duration = 1.5,
  className = "",
}) {
  return (
    <motion.span
      className={className}
      animate={{
        textShadow: [
          `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`,
          `0 0 10px ${pulseColor}, 0 0 20px ${pulseColor}, 0 0 40px ${pulseColor}, 0 0 80px ${pulseColor}`,
          `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`,
        ],
        color: [color, pulseColor, color],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.span>
  );
}
