"use client";

import { motion } from "framer-motion";

const lights = [
  {
    className: "-top-40 left-[-10%] h-[650px] w-[650px] bg-blue-500/12",
    duration: 18,
  },
  {
    className: "top-[5%] right-[-8%] h-[520px] w-[520px] bg-violet-500/10",
    duration: 22,
  },
  {
    className: "bottom-[-20%] left-[30%] h-[500px] w-[500px] bg-cyan-400/10",
    duration: 20,
  },
];

const HeroBackground = () => {
  return (
    <>
      {/* Base */}

      <div className="absolute inset-0 -z-50 bg-[#F8FAFC]" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-40 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,.12) 1px,transparent 1px),
            linear-gradient(90deg,rgba(15,23,42,.12) 1px,transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Aurora */}

      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 -z-30 opacity-60"
        style={{
          background:
            "linear-gradient(120deg,#ffffff 0%,#dbeafe 25%,#ffffff 50%,#eef2ff 75%,#ffffff 100%)",
          backgroundSize: "250% 250%",
        }}
      />

      {/* Floating Lights */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        {lights.map((light, index) => (
          <motion.div
            key={index}
            animate={{
              x: [-40, 40, -40],
              y: [-20, 25, -20],
              scale: [1, 1.12, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: light.duration,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full blur-[140px] ${light.className}`}
          />
        ))}
      </div>

      {/* Spotlight */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute left-1/2 top-[20%] -z-10 h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-blue-400/8 blur-[180px]"
      />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent" />

      {/* Noise */}

      <svg
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </>
  );
};

export default HeroBackground;
