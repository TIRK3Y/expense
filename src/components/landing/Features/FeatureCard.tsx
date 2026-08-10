"use client";

import { motion } from "framer-motion";
import { Brain, ChartNoAxesCombined, Target, Wallet } from "lucide-react";

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
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(37,99,235,.09)]"
    >
      {/* Subtle Glow */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100/30 blur-3xl transition-all duration-500 group-hover:bg-blue-200/40" />

      {/* Header */}

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[icon]} text-white shadow-md`}
        >
          <Icon size={20} />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${backgrounds[icon]} text-slate-600`}
        >
          Active
        </span>
      </div>

      {/* Content */}

      <div className="relative mt-5">
        <h3 className="text-lg font-bold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      {/* Compact Progress */}

      <div className="relative mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-slate-500">
            Efficiency
          </span>

          <span className="text-[11px] font-bold text-slate-700">88%</span>
        </div>

        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
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
              duration: 0.8,
              delay: 0.15,
            }}
            className={`h-full rounded-full bg-gradient-to-r ${gradients[icon]}`}
          />
        </div>
      </div>

      {/* Bottom Accent */}

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
};

export default FeatureCard;
