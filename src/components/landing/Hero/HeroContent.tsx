"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stats = [
  {
    value: "25K+",
    label: "Users",
  },
  {
    value: "₹18M",
    label: "Tracked",
  },
  {
    value: "98%",
    label: "Saved More",
  },
];

const HeroContent = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative max-w-2xl"
    >
      {/* Badge */}

      <motion.div variants={item}>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <Sparkles size={15} className="text-blue-600" />

          <span className="text-sm font-medium text-slate-700">
            AI-Powered Personal Finance
          </span>
        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl xl:text-7xl"
      >
        Know where
        <span className="block">your money goes.</span>
        <span className="mt-3 block text-blue-600">Before it disappears.</span>
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={item}
        className="mt-7 max-w-xl text-lg leading-8 text-slate-600"
      >
        Track every expense, build realistic budgets, achieve savings goals, and
        receive intelligent recommendations that help you spend with confidence.
      </motion.p>

      {/* Buttons */}

      <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
        <motion.div
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <Link
            href="/signup"
            className="group inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            Get Started
            <motion.div
              whileHover={{
                x: 3,
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            y: -2,
          }}
        >
          <Link
            href="#features"
            className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            View Demo
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats */}

      <motion.div
        variants={item}
        className="mt-12 grid max-w-lg grid-cols-3 border-t border-slate-200 pt-8"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="pr-4">
            <h3 className="text-3xl font-black text-slate-950">{stat.value}</h3>

            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
