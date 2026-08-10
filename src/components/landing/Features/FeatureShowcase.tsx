"use client";

import { motion } from "framer-motion";
import { Brain, CreditCard, PiggyBank, TrendingUp, Wallet } from "lucide-react";

const summaryCards = [
  {
    title: "Income",
    value: "₹52K",
    color: "text-emerald-600",
    icon: TrendingUp,
  },
  {
    title: "Expenses",
    value: "₹18K",
    color: "text-red-500",
    icon: CreditCard,
  },
  {
    title: "Savings",
    value: "₹34K",
    color: "text-blue-600",
    icon: PiggyBank,
  },
];

const insights = [
  "Automatic expense categorization",
  "AI savings recommendations",
  "Budget forecasting",
  "Spending predictions",
  "Financial health score",
];

const FeatureShowcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative mx-auto max-w-5xl"
    >
      {/* Glow */}

      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-blue-500/5 blur-3xl" />

      {/* Main Card */}

      <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.07)]">
        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          {/* Dashboard */}

          <div className="p-5 sm:p-6">
            {/* Window */}

            <div className="mb-5 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <span className="ml-2 text-[10px] font-medium text-slate-400">
                Dashboard
              </span>
            </div>

            {/* Balance */}

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-slate-500">
                  Total Balance
                </p>

                <h3 className="mt-0.5 text-2xl font-black tracking-tight text-slate-950">
                  ₹84,520
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Wallet size={18} />
              </div>
            </div>

            {/* Summary Cards */}

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {summaryCards.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-500">
                        {card.title}
                      </span>

                      <Icon size={14} className={card.color} />
                    </div>

                    <p className="mt-2 text-base font-black text-slate-900">
                      {card.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Chart */}

            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Spending Analytics
                  </h4>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Monthly Overview
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold text-blue-600">
                  +12.4%
                </span>
              </div>

              <svg
                viewBox="0 0 520 150"
                className="mt-2 h-24 w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="featureArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity=".16" />

                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="featureLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563EB" />

                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>

                {[35, 75, 115].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="520"
                    y2={y}
                    stroke="#E2E8F0"
                    strokeDasharray="4 5"
                  />
                ))}

                <motion.path
                  initial={{
                    pathLength: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.1,
                  }}
                  d="M10 115 L80 92 L140 98 L200 62 L260 74 L320 45 L380 58 L440 30 L510 48 L510 150 L10 150 Z"
                  fill="url(#featureArea)"
                />

                <motion.path
                  initial={{
                    pathLength: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  d="M10 115 L80 92 L140 98 L200 62 L260 74 L320 45 L380 58 L440 30 L510 48"
                  stroke="url(#featureLine)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* AI Panel */}

          <div className="bg-slate-950 p-5 text-white sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                <Brain size={17} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                  AI Insights
                </p>

                <h3 className="text-lg font-black">Smarter spending.</h3>
              </div>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-400">
              Analyze spending patterns, identify unnecessary expenses, and
              discover practical ways to save more.
            </p>

            {/* Insights */}

            <div className="mt-4 space-y-1.5">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight}
                  initial={{
                    opacity: 0,
                    x: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                  className="flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-2"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <span className="text-[10px] font-medium text-slate-300">
                    {insight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Savings */}

            <motion.div
              whileHover={{
                y: -2,
              }}
              className="mt-4 rounded-xl bg-blue-600 p-4"
            >
              <p className="text-[10px] font-medium text-blue-100">
                Potential Monthly Savings
              </p>

              <h3 className="mt-1 text-2xl font-black">₹4,820</h3>

              <p className="mt-1 text-[10px] leading-4 text-blue-100">
                Based on your spending patterns and AI predictions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureShowcase;
