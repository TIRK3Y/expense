"use client";

import { motion } from "framer-motion";
import { Brain, CreditCard, PiggyBank, TrendingUp, Wallet } from "lucide-react";

const FeatureShowcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.8,
      }}
      className="relative mx-auto max-w-7xl"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[40px] bg-blue-500/5 blur-3xl" />

      {/* Container */}

      <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,.06)]">
        <div className="grid lg:grid-cols-[1fr_430px]">
          {/* Left */}

          <div className="border-b border-slate-200 p-8 lg:border-b-0 lg:border-r lg:p-12">
            {/* Window */}

            <div className="mb-8 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* Header */}

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Dashboard Overview
                </p>

                <h3 className="mt-1 text-3xl font-black text-slate-950">
                  ₹84,520
                </h3>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Wallet size={24} />
              </div>
            </div>

            {/* Cards */}

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
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
              ].map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {card.title}
                      </span>

                      <Icon size={18} className={card.color} />
                    </div>

                    <h4 className="mt-4 text-2xl font-black text-slate-900">
                      {card.value}
                    </h4>
                  </motion.div>
                );
              })}
            </div>

            {/* Graph */}

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">
                    Spending Analytics
                  </h4>

                  <p className="text-sm text-slate-500">Monthly Overview</p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                  +12.4%
                </span>
              </div>

              <svg viewBox="0 0 520 180" className="h-48 w-full">
                {[40, 90, 140].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="520"
                    y2={y}
                    stroke="#E2E8F0"
                    strokeDasharray="5 5"
                  />
                ))}

                <defs>
                  <linearGradient id="featureArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity=".22" />

                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="featureLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563EB" />

                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>

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
                    duration: 1.5,
                  }}
                  d="M20 140 L80 115 L140 120 L200 82 L260 92 L320 60 L380 72 L440 45 L500 58 L500 180 L20 180 Z"
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
                    duration: 1.4,
                  }}
                  d="M20 140 L80 115 L140 120 L200 82 L260 92 L320 60 L380 72 L440 45 L500 58"
                  stroke="url(#featureLine)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Right */}

          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black p-10 text-white">
            <div className="flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <Brain size={26} />
              </div>

              <h3 className="mt-8 text-3xl font-black leading-tight">
                AI analyzes
                <br />
                every expense.
              </h3>

              <p className="mt-6 text-slate-300 leading-8">
                ExpenseAI continuously studies your spending habits, identifies
                unnecessary expenses, predicts future spending, and recommends
                smarter financial decisions.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Automatic expense categorization",
                  "AI-powered savings recommendations",
                  "Budget forecasting",
                  "Monthly spending predictions",
                  "Financial health score",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      x: 4,
                    }}
                    className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />

                    <span className="font-medium text-slate-200">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto rounded-3xl bg-blue-600 p-6">
                <p className="text-sm text-blue-100">
                  Potential Monthly Savings
                </p>

                <h2 className="mt-2 text-4xl font-black">₹4,820</h2>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Based on your spending patterns and AI predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureShowcase;
