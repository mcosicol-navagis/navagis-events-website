"use client";

import { motion } from "motion/react";

const DRAW_EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const LINES = [
  // Yellow — top-left, swoops deep DOWN, rises back to exit top-right → crosses both above
  {
    color: "#FBBC04",
    d: "M10,25 C230,25 370,415 665,380 C960,345 1130,95 1490,62",
    drawDelay: 0.1,
    drawDuration: 4.72,
    floatAmp: 10,
    floatDuration: 4.8,
    width: 2.4,
    tipWidth: 8,
  },
  // Green — upper-left, deep dip, exits lower-right → crosses yellow
  {
    color: "#34A853",
    d: "M10,65 C170,65 390,400 700,362 C1010,324 1205,162 1490,305",
    drawDelay: 0.45,
    drawDuration: 4.56,
    floatAmp: 7,
    floatDuration: 5.8,
    width: 2.4,
    tipWidth: 8,
  },
  // Blue 2 — enters from RIGHT, sweeps left → exits lower-left (reversed path)
  {
    color: "#4285F4",
    d: "M1490,405 C1305,405 1105,52 845,88 C585,124 285,318 -50,215",
    drawDelay: 0.62,
    drawDuration: 4.65,
    floatAmp: 5,
    floatDuration: 6.6,
    width: 2.0,
    tipWidth: 6,
  },
  // Red 2 — complex S: starts mid-left, dives deep, rockets up to exit top-right
  {
    color: "#EA4335",
    d: "M-50,205 C125,205 285,445 600,385 C915,325 1062,32 1490,52",
    drawDelay: 0.5,
    drawDuration: 4.62,
    floatAmp: 9,
    floatDuration: 5.2,
    width: 2.0,
    tipWidth: 6,
  },
  // Yellow 2 — thin diagonal top-right → bottom-left, thin, cuts across everything
];

const CYCLE = 5; // seconds per full loop
const TOTAL_DRAW = Math.max(...LINES.map((l) => l.drawDelay + l.drawDuration));

export default function AnimatedLines() {
  return (
    <div
      className="w-full overflow-hidden pointer-events-none select-none"
      style={{ height: 460 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Subtle glow around lines */}
          <filter id="lineGlow" x="-15%" y="-60%" width="130%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong glow for the moving tip */}
          <filter id="tipGlow" x="-40%" y="-150%" width="180%" height="400%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {LINES.map((line, i) => (
          <g key={i}>
            {/* Ghost — whisper of where the line will be */}
            <path
              d={line.d}
              stroke={line.color}
              strokeWidth={line.width}
              fill="none"
              strokeLinecap="round"
              opacity={0.07}
            />

            {/* Main drawing line with seamless fade + post-draw float */}
            <motion.path
              d={line.d}
              stroke={line.color}
              strokeWidth={line.width}
              fill="none"
              strokeLinecap="round"
              filter="url(#lineGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0, 1, 1, 0],
                y: -line.floatAmp,
              }}
              transition={{
                pathLength: {
                  duration: line.drawDuration,
                  ease: DRAW_EASE,
                  delay: line.drawDelay,
                  repeat: Infinity,
                  repeatDelay: CYCLE - line.drawDuration,
                },
                opacity: {
                  duration: line.drawDuration,
                  delay: line.drawDelay,
                  times: [0, 0.04, 0.82, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: CYCLE - line.drawDuration,
                },
                y: {
                  duration: line.floatDuration / 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: TOTAL_DRAW + 0.25 + i * 0.18,
                },
              }}
            />

            {/* Moving glowing tip — short 4% segment that races ahead */}
            <motion.path
              d={line.d}
              stroke={line.color}
              strokeWidth={line.tipWidth}
              fill="none"
              strokeLinecap="round"
              filter="url(#tipGlow)"
              initial={{ pathLength: 0.04, pathOffset: 0, opacity: 0 }}
              animate={{
                pathOffset: 0.96,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                pathOffset: {
                  duration: line.drawDuration,
                  ease: DRAW_EASE,
                  delay: line.drawDelay,
                  repeat: Infinity,
                  repeatDelay: CYCLE - line.drawDuration,
                },
                opacity: {
                  duration: line.drawDuration,
                  delay: line.drawDelay,
                  times: [0, 0.06, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: CYCLE - line.drawDuration,
                },
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
