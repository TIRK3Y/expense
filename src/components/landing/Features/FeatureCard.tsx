"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ChartNoAxesCombined,
  PiggyBank,
  Target,
  Wallet,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "wallet" | "chart" | "brain" | "target";
}

const icons = {
  wallet: Wallet,
  chart: ChartNoAxesCombined,
  brain: Brain,
  target: Target,
};

const gradients = {
  wallet: "from-blue-600 to-cyan-500",
  chart: "from-violet-600 to-fuchsia-500",
  brain: "from-emerald-500 to-green-600",
  target: "from-orange-500 to-red-500",
};

const backgrounds = {
  wallet: "bg-blue-50",
  chart: "bg-violet-50",
  brain: "bg-emerald-50",
  target: "bg-orange-50",
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const Icon = icons[icon];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,.05)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,.12)]"
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-100/20 blur-3xl transition-all duration-500 group-hover:bg-blue-200/30" />

      {/* Icon */}

      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.25,
        }}
        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[icon]} text-white shadow-lg`}
      >
        <Icon size={28} />
      </motion.div>

      {/* Content */}

      <div className="relative mt-8">
        <h3 className="text-2xl font-black tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          {description}
        </p>
      </div>

      {/* Bottom Section */}

      <div className="relative mt-8">
        <div
          className={`rounded-2xl ${backgrounds[icon]} border border-slate-100 p-4 transition-all duration-300 group-hover:scale-[1.02]`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">
              Performance
            </span>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-600 shadow-sm">
              Optimized
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "88%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className={`h-full rounded-full bg-gradient-to-r ${gradients[icon]}`}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs font-medium text-slate-500">
            <span>Efficiency</span>

            <span>88%</span>
          </div>
        </div>
      </div>

      {/* Decorative Accent */}

      <div className="absolute bottom-0 left-0 h-1 w-0 rounded-r-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
};

export default FeatureCard;
