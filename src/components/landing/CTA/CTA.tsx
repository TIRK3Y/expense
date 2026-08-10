"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

const benefits = [
  "Track every expense",
  "Build smarter budgets",
  "Set savings goals",
  "Get AI-powered insights",
];

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[130px]" />

        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-[110px]" />

        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-violet-100/40 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,.12)]"
        >
          {/* Decorative Grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow */}

          <motion.div
            animate={{
              x: [-30, 30, -30],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]"
          />

          <motion.div
            animate={{
              x: [30, -30, 30],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-violet-600/15 blur-[100px]"
          />

          <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:p-12">
            {/* Content */}

            <div>
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
                  delay: 0.1,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-300 backdrop-blur-xl"
              >
                <Sparkles size={12} />
                Start today
              </motion.div>

              <motion.h2
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
                  delay: 0.15,
                }}
                className="mt-5 max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl"
              >
                Your money deserves
                <span className="block text-blue-400">a better system.</span>
              </motion.h2>

              <motion.p
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
                  delay: 0.2,
                }}
                className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
              >
                Stop wondering where your money went. Start understanding it,
                planning it, and building better financial habits with
                ExpenseAI.
              </motion.p>

              {/* Benefits */}

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
                  delay: 0.25,
                }}
                className="mt-7 grid gap-2 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-xs font-medium text-slate-300"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <Check size={11} strokeWidth={3} />
                    </span>

                    {benefit}
                  </div>
                ))}
              </motion.div>

              {/* Actions */}

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
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="/signup"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500"
                >
                  Create Free Account
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
                >
                  Explore ExpenseAI
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>

              <p className="mt-4 text-[10px] text-slate-500">
                Free to use • No credit card required • Start in minutes
              </p>
            </div>

            {/* Visual */}

            <div className="relative mx-auto w-full max-w-sm">
              {/* Main Card */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                whileHover={{
                  y: -4,
                }}
                className="relative rounded-[24px] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-slate-500">
                      Financial overview
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-white">
                      ₹84,520
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                    <Wallet size={17} />
                  </div>
                </div>

                {/* Mini Chart */}

                <div className="mt-6">
                  <div className="flex h-24 items-end gap-2">
                    {[38, 54, 45, 67, 58, 76, 68, 88, 78, 94].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            height: 0,
                          }}
                          whileInView={{
                            height: `${height}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: index * 0.04,
                          }}
                          className={`flex-1 rounded-sm ${
                            index === 9 ? "bg-blue-400" : "bg-white/10"
                          }`}
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-2 flex justify-between text-[8px] text-slate-600">
                    <span>JAN</span>
                    <span>FEB</span>
                    <span>MAR</span>
                    <span>APR</span>
                    <span>MAY</span>
                    <span>JUN</span>
                  </div>
                </div>

                {/* Metrics */}

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <MiniMetric
                    icon={<TrendingUp size={13} />}
                    label="Savings"
                    value="+₹18.4K"
                  />

                  <MiniMetric
                    icon={<Target size={13} />}
                    label="Goal"
                    value="74%"
                  />
                </div>

                {/* AI Insight */}

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
                    delay: 0.7,
                  }}
                  className="mt-2.5 rounded-xl border border-blue-500/15 bg-blue-500/10 p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600">
                      <Brain size={12} />
                    </div>

                    <span className="text-[10px] font-bold text-blue-300">
                      AI Insight
                    </span>
                  </div>

                  <p className="mt-2 text-[9px] leading-4 text-slate-400">
                    You could save approximately{" "}
                    <span className="font-bold text-white">₹4,820</span> this
                    month by reducing unnecessary spending.
                  </p>
                </motion.div>
              </motion.div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 top-10 hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2 shadow-xl sm:flex"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <TrendingUp size={13} />
                </div>

                <div>
                  <p className="text-[8px] text-slate-500">Savings</p>

                  <p className="text-[11px] font-bold text-white">+22.4%</p>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 bottom-12 hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2 shadow-xl sm:flex"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                  <Brain size={13} />
                </div>

                <div>
                  <p className="text-[8px] text-slate-500">AI Score</p>

                  <p className="text-[11px] font-bold text-white">94 / 100</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface MiniMetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const MiniMetric = ({ icon, label, value }: MiniMetricProps) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
      <div className="flex items-center gap-1.5 text-slate-500">
        {icon}
        <span className="text-[9px]">{label}</span>
      </div>

      <p className="mt-1 text-xs font-black text-white">{value}</p>
    </div>
  );
};

export default CTA;
