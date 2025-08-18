"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// PathText.jsx
// Letters animate from the start of an SVG path to evenly spaced points along the path.
// Drop this file in your Next.js project (e.g. components/PathText.jsx) and import it.

export default function PathText({
  text = "Path-Based Text",
  // svg path `d` string. If not provided a default nice arc will be used.
  pathD = "M20,120 C120,20 280,20 380,120",
  viewBox = "0 0 400 160",
  duration = 0.9,
  stagger = 0.06,
  fontSize = 28,
  className = "",
  entranceEasing = [0.2, 0.8, 0.2, 1],
  followTangent = false, // rotate letters to follow path tangent
}) {
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [tangents, setTangents] = useState([]);

  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return;

    // Use SVG API to sample points along the path
    const length = pathEl.getTotalLength();
    const chars = Array.from(text);
    const n = chars.length;
    // avoid division by zero
    const step = n > 1 ? length / (n - 1) : length / 2;

    const pts = [];
    const tans = [];
    for (let i = 0; i < n; i++) {
      const pos = pathEl.getPointAtLength(i * step);
      pts.push({ x: pos.x, y: pos.y });

      // tangent: small delta forward on the path to compute angle
      const delta = 1; // 1px ahead
      const p2 = pathEl.getPointAtLength(Math.min(i * step + delta, length));
      const angle = Math.atan2(p2.y - pos.y, p2.x - pos.x) * (180 / Math.PI);
      tans.push(angle);
    }

    setPoints(pts);
    setTangents(tans);
  }, [text, pathD]);

  // If points not ready, render the SVG path so it's available for measurement
  const chars = Array.from(text);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden="true"
      >
        {/* visible path for debugging (comment out stroke to hide) */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="transparent"
          strokeWidth={2}
        />

        {/* Render each character as an absolutely positioned <text> via a <g> wrapper */}
        {points.length === chars.length &&
          chars.map((char, i) => {
            const p = points[i];
            const angle = tangents[i] || 0;

            const initial = {
              x: points[0]?.x ?? -20, // start at path start
              y: points[0]?.y ?? 0,
              opacity: 0,
              scale: 0.75,
            };

            const animate = {
              x: p.x,
              y: p.y,
              opacity: 1,
              scale: 1,
              rotate: followTangent ? angle : 0,
            };

            return (
              <motion.g
                key={`${char}-${i}`}
                initial={initial}
                animate={animate}
                transition={{
                  duration,
                  delay: i * stagger,
                  ease: entranceEasing,
                }}
              >
                <text
                  x={0}
                  y={0}
                  style={{
                    fontSize: fontSize,
                    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'",
                    dominantBaseline: "middle",
                    textAnchor: "middle",
                    userSelect: "none",
                    pointerEvents: "none",
                    paintOrder: "stroke fill markers",
                  }}
                  fill="currentColor"
                >
                  {char}
                </text>
              </motion.g>
            );
          })}
      </svg>

      {/* If we don't yet have points, render invisible letters so layout doesn't jump */}
      {points.length !== chars.length && (
        <div style={{ height: Number(fontSize) * 1.8 }} aria-hidden>
          {/* placeholder */}
        </div>
      )}
    </div>
  );
}
