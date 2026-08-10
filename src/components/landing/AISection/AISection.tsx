"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  Lightbulb,
  ScanSearch,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const insights = [
  {
    icon: TrendingDown,
    title: "Reduce food spending",
    description:
      "Your dining expenses are 18% higher than your usual monthly average.",
    value: "Save ₹2,400",
    type: "saving",
  },
  {
    icon: TrendingUp,
    title: "Savings are improving",
    description:
      "You saved 14% more this month compared with the previous month.",
    value: "+14%",
    type: "positive",
  },
  {
    icon: Lightbulb,
    title: "Subscription review",
    description:
      "You have 4 recurring subscriptions with limited activity this month.",
    value: "Review ₹1,299",
    type: "neutral",
  },
];

const checks = [
  "Spending pattern analysis",
  "Automatic expense categorization",
  "Budget forecasting",
  "Savings recommendations",
  "Financial health insights",
];

const AISection = () => {
  return (
    <section
      id="ai-insights"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-100/40 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#64748B 1px,transparent 1px),
            linear-gradient(to bottom,#64748B 1px,transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* Header */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
            <Sparkles size={13} />
            Intelligent financial guidance
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Your money has patterns.
            <span className="block text-blue-600">Let AI find them.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            ExpenseAI turns your everyday financial activity into useful
            insights, helping you understand your habits and make better
            decisions.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="mx-auto mt-14 grid max-w-6xl items-center gap-8 lg:grid-cols-[.85fr_1.15fr]">
          {/* Left Copy */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Brain size={20} />
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
              From raw transactions
              <span className="block text-blue-600">to useful decisions.</span>
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">
              Instead of simply showing numbers, ExpenseAI looks at how your
              money moves and surfaces patterns that are easy to act on.
            </p>

            <div className="mt-6 space-y-2.5">
              {checks.map((check, index) => (
                <motion.div
                  key={check}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.3,
                  }}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check size={11} strokeWidth={3} />
                  </span>

                  <span className="text-xs font-medium text-slate-700">
                    {check}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/signup"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
            >
              Start understanding your money
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* AI Interface */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[30px] bg-blue-500/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,.08)]">
              {/* Top Bar */}

              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Brain size={15} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      ExpenseAI
                    </p>

                    <p className="text-[9px] text-slate-400">
                      Personal financial intelligence
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Analysis ready
                </span>
              </div>

              {/* Balance Strip */}

              <div className="grid grid-cols-3 border-b border-slate-200">
                <Metric label="Balance" value="₹84,520" icon={Wallet} />

                <Metric
                  label="Saved"
                  value="₹18,450"
                  icon={TrendingUp}
                  positive
                />

                <Metric label="AI Score" value="94" icon={Sparkles} positive />
              </div>

              {/* Insights */}

              <div className="p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Personal insights
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      Based on your recent activity
                    </p>
                  </div>

                  <ScanSearch size={15} className="text-slate-400" />
                </div>

                <div className="space-y-2.5">
                  {insights.map((insight, index) => {
                    const Icon = insight.icon;

                    const iconStyles =
                      insight.type === "saving"
                        ? "bg-red-50 text-red-500"
                        : insight.type === "positive"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-amber-50 text-amber-600";

                    const valueStyles =
                      insight.type === "saving"
                        ? "text-blue-600"
                        : insight.type === "positive"
                          ? "text-emerald-600"
                          : "text-amber-600";

                    return (
                      <motion.div
                        key={insight.title}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.15 + index * 0.1,
                        }}
                        whileHover={{
                          x: 3,
                        }}
                        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors hover:bg-white"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconStyles}`}
                        >
                          <Icon size={16} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="truncate text-[11px] font-bold text-slate-900">
                              {insight.title}
                            </h4>

                            <span
                              className={`shrink-0 text-[10px] font-bold ${valueStyles}`}
                            >
                              {insight.value}
                            </span>
                          </div>

                          <p className="mt-1 text-[9px] leading-4 text-slate-500">
                            {insight.description}
                          </p>
                        </div>

                        <ChevronRight
                          size={13}
                          className="shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-500"
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* AI Recommendation */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="mt-3 rounded-xl bg-slate-950 p-3.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Sparkles size={14} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-blue-300">
                        AI recommendation
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-slate-300">
                        Cutting food delivery by 18% could free up approximately{" "}
                        <span className="font-bold text-white">₹4,820</span>{" "}
                        every month.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface MetricProps {
  label: string;
  value: string;
  icon: React.ComponentType<{ size?: number }>;
  positive?: boolean;
}

const Metric = ({ label, value, icon: Icon, positive }: MetricProps) => {
  return (
    <div className="flex items-center gap-2 border-r border-slate-200 px-3 py-3 last:border-r-0">
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
          positive
            ? "bg-emerald-50 text-emerald-600"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        <Icon size={13} />
      </div>

      <div className="min-w-0">
        <p className="text-[8px] font-medium text-slate-400">{label}</p>

        <p className="truncate text-[11px] font-black text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
};

export default AISection;
