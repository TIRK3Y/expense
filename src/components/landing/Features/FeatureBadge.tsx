"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FeatureBadge = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex justify-center"
    >
      <motion.div
        whileHover={{
          y: -2,
        }}
        className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2 shadow-sm"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
          <Sparkles size={14} />
        </div>

        <span className="text-sm font-semibold tracking-wide text-blue-700">
          Powerful Features
        </span>
      </motion.div>
    </motion.div>
  );
};

export default FeatureBadge;
