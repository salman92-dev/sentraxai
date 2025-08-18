"use client";

import React, { useId, useMemo } from "react";
import { motion } from "framer-motion";

export default function LiquidFillText({
  text = "Liquid Fill",
  fontSize = 80,
  waveColor = "#4FC3F7",
  textColor = "#222",
  fillDuration = 3, // seconds for the vertical fill (bottom->top)
  waveDuration = 1.6, // seconds for one horizontal wave loop
  amplitude = 8,
  wavelength = 120,
  className = "",
}) {
  const id = useId();

  // Simple svg sizing based on text length. Tweak if you need exact precision.
  const width = Math.max(220, Math.round(text.length * fontSize * 0.6));
  const height = Math.round(fontSize * 1.2);

  // Wave path that spans "w" width. We generate a path a bit wider than the viewBox
  // so horizontal looping looks seamless.
  const wavePath = useMemo(() => createWavePath(width + wavelength * 2, wavelength, amplitude, height), [width, wavelength, amplitude, height]);

  // How many copies of the wave to draw (cover width + some buffer)
  const copies = Math.ceil((width + wavelength * 2) / wavelength) + 1;

  // Vertical positions (SVG Y is positive downwards). Start below the viewBox, end at 0
  const startY = height + amplitude * 12;
  const endY = 0;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={false}
      role="img"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Text mask: white reveals, black hides */}
        <mask id={`mask-${id}`} maskUnits="userSpaceOnUse">
          <rect x={0} y={0} width={width} height={height} fill="black" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize={fontSize}
            fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'"
            fill="white"
          >
            {text}
          </text>
        </mask>
      </defs>

      {/* Background text (color when not filled) */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={fontSize}
        fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'"
        fill={textColor}
        pointerEvents="none"
      >
        {text}
      </text>

      {/* Fill group: masked by the text. We animate this group's Y to create the rising effect. */}
      <g mask={`url(#mask-${id})`}>
        <motion.g
          initial={{ y: startY }}
          animate={{ y: endY }}
          transition={{ duration: fillDuration, ease: "easeInOut" }}
        >
          {/* Solid base fill so the letters have a body color beneath waves */}
          <rect x={-wavelength} y={-height} width={width + wavelength * 2} height={height * 3} fill={waveColor} />

          {/* Repeating wave set which will slide horizontally in an infinite loop */}
          <motion.g
            initial={{ x: 0 }}
            animate={{ x: [-0, -wavelength] }}
            transition={{ repeat: Infinity, duration: waveDuration, ease: "linear" }}
          >
            {Array.from({ length: copies }).map((_, i) => (
              <path
                key={`wave-${i}-${id}`}
                d={wavePath}
                transform={`translate(${i * wavelength - wavelength}, ${height * 0.5})`}
                fill={waveColor}
                fillOpacity={i % 2 === 0 ? 0.95 : 0.7}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </motion.g>
        </motion.g>
      </g>
    </svg>
  );
}

function createWavePath(totalWidth, wavelength, amplitude, baseline = 0) {
  // Build a horizontal wave path starting at x=0
  // We generate a sequence of quadratic curves (q) spanning `totalWidth`.
  const half = wavelength / 2;
  let d = `M 0 ${baseline}`;
  let x = 0;
  while (x <= totalWidth + wavelength) {
    d += ` q ${half / 2} ${-amplitude} ${half} 0`;
    d += ` q ${half / 2} ${amplitude} ${half} 0`;
    x += wavelength;
  }
  // close shape to bottom so it can act as a filled wave
  d += ` v ${amplitude * 3} h ${-totalWidth - wavelength} z`;
  return d;
}
