"use client";

import { motion } from "framer-motion";
import { Brain, PiggyBank, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "25K+",
    label: "Active Users",
    description: "People managing their finances with ExpenseAI.",
    icon: TrendingUp,
    color: "from-blue-600 to-cyan-500",
  },
  {
    value: "₹18M+",
    label: "Expenses Tracked",
    description: "Transactions organized and analyzed.",
    icon: PiggyBank,
    color: "from-emerald-500 to-green-600",
  },
  {
    value: "94%",
    label: "AI Accuracy",
    description: "Personalized insights based on spending patterns.",
    icon: Brain,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    value: "256-bit",
    label: "Secure",
    description: "Your financial information stays protected.",
    icon: ShieldCheck,
    color: "from-orange-500 to-red-500",
  },
];

const FeatureStats = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
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
        duration: 0.6,
      }}
      className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,.12)] sm:p-8"
    >
      {/* Header */}

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
          Why ExpenseAI
        </span>

        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          Built for better
          <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            financial habits.
          </span>
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
          Everything you need to understand your spending, control your budget,
          and build better saving habits.
        </p>
      </div>

      {/* Stats */}

      <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -3,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}
                >
                  <Icon size={18} />
                </div>

                <span className="text-xs font-medium text-slate-500">2026</span>
              </div>

              <h3 className="mt-5 text-2xl font-black tracking-tight">
                {stat.value}
              </h3>

              <h4 className="mt-1 text-sm font-semibold text-white">
                {stat.label}
              </h4>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Strip */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="mt-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-xl">
          <h3 className="text-lg font-bold text-white">
            Smarter money management starts here.
          </h3>

          <p className="mt-1.5 text-sm leading-6 text-slate-400">
            Track expenses, manage budgets, build savings, and get personalized
            financial insights from one dashboard.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-6 sm:gap-8">
          <div>
            <h4 className="text-xl font-black text-blue-400">50+</h4>
            <p className="mt-0.5 text-[11px] text-slate-500">Categories</p>
          </div>

          <div>
            <h4 className="text-xl font-black text-cyan-400">AI</h4>
            <p className="mt-0.5 text-[11px] text-slate-500">Insights</p>
          </div>

          <div>
            <h4 className="text-xl font-black text-violet-400">24/7</h4>
            <p className="mt-0.5 text-[11px] text-slate-500">Access</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureStats;
