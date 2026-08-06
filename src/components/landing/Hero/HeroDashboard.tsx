"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CreditCard,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

const chart = [
  { x: 10, y: 92 },
  { x: 55, y: 74 },
  { x: 100, y: 82 },
  { x: 145, y: 48 },
  { x: 190, y: 60 },
  { x: 235, y: 36 },
  { x: 280, y: 46 },
];

const transactions = [
  {
    name: "Salary",
    category: "Income",
    amount: "+₹52,000",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    name: "Amazon",
    category: "Shopping",
    amount: "-₹2,499",
    color: "text-red-500",
    bg: "bg-orange-100",
  },
  {
    name: "Netflix",
    category: "Entertainment",
    amount: "-₹649",
    color: "text-red-500",
    bg: "bg-red-100",
  },
];

const budgets = [
  {
    name: "Food",
    value: 72,
    color: "bg-blue-600",
  },
  {
    name: "Shopping",
    value: 56,
    color: "bg-violet-600",
  },
  {
    name: "Travel",
    value: 34,
    color: "bg-cyan-600",
  },
];

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        y: -3,
      }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div className="absolute inset-0 rounded-[30px] bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)]">
        {/* Header */}

        <div className="border-b border-slate-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Total Balance
              </p>

              <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
                ₹84,520
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Wallet size={20} />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <motion.div
              whileHover={{
                y: -2,
                boxShadow: "0 12px 24px rgba(15,23,42,.08)",
              }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Income
                </span>

                <TrendingUp size={15} className="text-emerald-600" />
              </div>

              <h3 className="mt-2 text-xl font-bold text-slate-900">₹52K</h3>

              <p className="text-xs text-emerald-600">+12.4%</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                boxShadow: "0 12px 24px rgba(15,23,42,.08)",
              }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Expense
                </span>

                <TrendingDown size={15} className="text-red-500" />
              </div>

              <h3 className="mt-2 text-xl font-bold text-slate-900">₹18.4K</h3>

              <p className="text-xs text-red-500">+6.2%</p>
            </motion.div>
          </div>
        </div>

        {/* Content */}

        <div className="grid grid-cols-[1.15fr_.85fr] gap-5 p-5">
          {/* LEFT */}

          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Spending Trend
                </h3>

                <p className="text-xs text-slate-500">Last 6 months</p>
              </div>

              <ArrowUpRight size={16} className="text-slate-400" />
            </div>

            <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <svg viewBox="0 0 300 120" className="h-32 w-full">
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563eb" />

                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>

                {[20, 50, 80].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="300"
                    y2={y}
                    stroke="#E2E8F0"
                    strokeDasharray="5 5"
                  />
                ))}

                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                  d="M10 92 L55 74 L100 82 L145 48 L190 60 L235 36 L280 46 L280 120 L10 120 Z"
                  fill="url(#area)"
                />

                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4 }}
                  d="M10 92 L55 74 L100 82 L145 48 L190 60 L235 36 L280 46"
                  stroke="url(#line)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />

                {chart.map((p, i) => (
                  <motion.circle
                    key={i}
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    cx={p.x}
                    cy={p.y}
                    r="4.5"
                    fill="#2563EB"
                  />
                ))}
              </svg>
            </div>

            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Recent Activity
                </h3>

                <button className="text-xs font-semibold text-blue-600">
                  View All
                </button>
              </div>

              <div className="space-y-2">
                {transactions.map((t) => (
                  <motion.div
                    key={t.name}
                    whileHover={{
                      y: -2,
                      boxShadow: "0 10px 20px rgba(15,23,42,.08)",
                    }}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${t.bg}`}
                      >
                        <CreditCard size={15} className="text-slate-700" />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          {t.name}
                        </h4>

                        <p className="text-xs text-slate-500">{t.category}</p>
                      </div>
                    </div>

                    <span className={`text-sm font-bold ${t.color}`}>
                      {t.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center gap-2">
                <PiggyBank size={17} className="text-blue-600" />

                <span className="text-sm font-semibold text-slate-900">
                  Budget
                </span>
              </div>

              <div className="space-y-4">
                {budgets.map((budget) => (
                  <div key={budget.name}>
                    <div className="mb-1 flex justify-between">
                      <span className="text-xs font-medium text-slate-600">
                        {budget.name}
                      </span>

                      <span className="text-xs font-semibold text-slate-500">
                        {budget.value}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${budget.value}%`,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className={`h-full rounded-full ${budget.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{
                y: -2,
                boxShadow: "0 15px 35px rgba(37,99,235,.25)",
              }}
              className="mt-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4 text-white"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                AI Insight
              </p>

              <h3 className="mt-2 text-lg font-bold">Save ₹4,820</h3>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                Reducing food delivery by just 18% this month keeps you within
                your savings goal.
              </p>

              <button className="mt-4 inline-flex items-center rounded-lg bg-white px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50">
                View Suggestions
              </button>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                boxShadow: "0 12px 24px rgba(15,23,42,.08)",
              }}
              className="mt-4 rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Savings Goal
                </span>

                <span className="text-xs font-semibold text-blue-600">72%</span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "72%",
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className="h-full rounded-full bg-blue-600"
                />
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                You're ahead of your monthly target by
                <span className="font-semibold text-slate-700"> ₹2,340</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
