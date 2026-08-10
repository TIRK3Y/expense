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
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[480px] sm:max-w-[520px]"
    >
      {/* Subtle glow */}

      <div className="pointer-events-none absolute inset-4 rounded-[24px] bg-blue-500/10 blur-3xl" />

      {/* Dashboard */}

      <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.09)]">
        {/* Header */}

        <div className="border-b border-slate-100 px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Total Balance
              </p>

              <h2 className="mt-0.5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                ₹84,520
              </h2>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white sm:h-10 sm:w-10">
              <Wallet size={18} />
            </div>
          </div>

          {/* Summary */}

          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <motion.div
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.2,
              }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Income
                </span>

                <TrendingUp size={14} className="text-emerald-600" />
              </div>

              <div className="mt-1 flex items-end justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  ₹52K
                </h3>

                <span className="text-[9px] font-semibold text-emerald-600">
                  +12.4%
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.2,
              }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Expenses
                </span>

                <TrendingDown size={14} className="text-red-500" />
              </div>

              <div className="mt-1 flex items-end justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  ₹18.4K
                </h3>

                <span className="text-[9px] font-semibold text-red-500">
                  +6.2%
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dashboard Content */}

        <div className="grid grid-cols-1 gap-3.5 p-3.5 sm:grid-cols-[1.12fr_.88fr] sm:p-4">
          {/* Left Column */}

          <div className="min-w-0">
            {/* Spending Trend */}

            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between px-3.5 pt-3">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Spending Trend
                  </h3>

                  <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
                    Last 6 months
                  </p>
                </div>

                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-50">
                  <ArrowUpRight size={13} className="text-slate-400" />
                </div>
              </div>

              <div className="px-3 pb-3 pt-2">
                <div className="rounded-lg bg-slate-50 px-2 py-1">
                  <svg
                    viewBox="0 0 300 120"
                    className="h-[92px] w-full sm:h-[105px]"
                    preserveAspectRatio="none"
                    aria-label="Spending trend chart"
                    role="img"
                  >
                    <defs>
                      <linearGradient
                        id="heroAreaGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2563eb"
                          stopOpacity=".16"
                        />

                        <stop
                          offset="100%"
                          stopColor="#2563eb"
                          stopOpacity="0"
                        />
                      </linearGradient>

                      <linearGradient
                        id="heroLineGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#2563eb" />

                        <stop offset="100%" stopColor="#6366f1" />
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
                        strokeWidth="1"
                        strokeDasharray="4 5"
                      />
                    ))}

                    <motion.path
                      initial={{
                        opacity: 0,
                        pathLength: 0,
                      }}
                      animate={{
                        opacity: 1,
                        pathLength: 1,
                      }}
                      transition={{
                        opacity: {
                          duration: 0.2,
                        },
                        pathLength: {
                          duration: 1.2,
                          ease: "easeOut",
                        },
                      }}
                      d="M10 92 L55 74 L100 82 L145 48 L190 60 L235 36 L280 46 L280 120 L10 120 Z"
                      fill="url(#heroAreaGradient)"
                    />

                    <motion.path
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength: 1,
                      }}
                      transition={{
                        duration: 1.25,
                        ease: "easeOut",
                      }}
                      d="M10 92 L55 74 L100 82 L145 48 L190 60 L235 36 L280 46"
                      stroke="url(#heroLineGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />

                    {chart.map((point, index) => (
                      <motion.circle
                        key={`${point.x}-${point.y}`}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.8 + index * 0.06,
                          duration: 0.25,
                        }}
                        cx={point.x}
                        cy={point.y}
                        r="3"
                        fill="#2563EB"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                    ))}
                  </svg>

                  <div className="flex justify-between px-1 text-[7px] font-medium text-slate-400 sm:text-[8px]">
                    <span>JAN</span>
                    <span>FEB</span>
                    <span>MAR</span>
                    <span>APR</span>
                    <span>MAY</span>
                    <span>JUN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}

            <div className="mt-3.5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                  Recent Activity
                </h3>

                <button
                  type="button"
                  className="text-[9px] font-semibold text-blue-600 hover:text-blue-700 sm:text-[10px]"
                >
                  View All
                </button>
              </div>

              <div className="space-y-1.5">
                {transactions.map((transaction) => (
                  <motion.div
                    key={transaction.name}
                    whileHover={{
                      x: 2,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${transaction.bg}`}
                      >
                        <CreditCard size={12} className="text-slate-700" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="truncate text-[10px] font-semibold text-slate-900 sm:text-[11px]">
                          {transaction.name}
                        </h4>

                        <p className="text-[8px] text-slate-500 sm:text-[9px]">
                          {transaction.category}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`ml-2 shrink-0 text-[10px] font-bold ${transaction.color}`}
                    >
                      {transaction.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}

          <div className="min-w-0">
            {/* Budget */}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100">
                    <PiggyBank size={13} className="text-blue-600" />
                  </div>

                  <span className="text-xs font-bold text-slate-900">
                    Budget
                  </span>
                </div>

                <span className="text-[9px] font-medium text-slate-400">
                  This month
                </span>
              </div>

              <div className="space-y-3">
                {budgets.map((budget) => (
                  <div key={budget.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[9px] font-medium text-slate-600">
                        {budget.name}
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {budget.value}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${budget.value}%`,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.25,
                        }}
                        className={`h-full rounded-full ${budget.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insight */}

            <motion.div
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.2,
              }}
              className="mt-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3.5 text-white shadow-lg shadow-blue-600/10"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-blue-100">
                AI Insight
              </p>

              <h3 className="mt-1.5 text-base font-black">Save ₹4,820</h3>

              <p className="mt-1.5 text-[9px] leading-4 text-blue-100">
                Reduce food delivery by 18% to stay on track with your savings
                goal.
              </p>

              <button
                type="button"
                className="mt-2.5 inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1.5 text-[9px] font-bold text-blue-600 transition-colors hover:bg-blue-50"
              >
                View Suggestions
                <ArrowUpRight size={10} />
              </button>
            </motion.div>

            {/* Savings Goal */}

            <motion.div
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.2,
              }}
              className="mt-3 rounded-xl border border-slate-200 bg-white p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-slate-500">
                  Savings Goal
                </span>

                <span className="text-[9px] font-bold text-blue-600">72%</span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "72%",
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  className="h-full rounded-full bg-blue-600"
                />
              </div>

              <p className="mt-2 text-[8px] leading-4 text-slate-500">
                Ahead of target by{" "}
                <span className="font-bold text-slate-700">₹2,340</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Status Bar */}

        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[8px] font-medium text-slate-500 sm:text-[9px]">
              All finances up to date
            </span>
          </div>

          <span className="text-[8px] font-medium text-slate-400 sm:text-[9px]">
            Updated just now
          </span>
        </div>
      </div>
    </motion.div>
  );
}
