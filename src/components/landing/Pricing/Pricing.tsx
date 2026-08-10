"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Lock,
  PiggyBank,
  Receipt,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Expense tracking",
    description: "Record and organize your spending in one place.",
  },
  {
    icon: Wallet,
    title: "Budget management",
    description: "Create budgets and keep spending under control.",
  },
  {
    icon: Target,
    title: "Savings goals",
    description: "Set targets and track your progress over time.",
  },
  {
    icon: BarChart3,
    title: "Financial analytics",
    description: "Understand your income, expenses, and trends.",
  },
  {
    icon: Brain,
    title: "AI insights",
    description: "Get intelligent recommendations from your spending.",
  },
  {
    icon: PiggyBank,
    title: "Savings opportunities",
    description: "Identify areas where you can potentially save more.",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-100/30 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-700">
            <Sparkles size={13} />
            Simple pricing
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Everything you need.
            <span className="block text-blue-600">Completely free.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            ExpenseAI is free to use. No subscriptions, no complicated plans,
            and no artificial limits standing between you and better financial
            habits.
          </p>
        </motion.div>

        {/* Pricing Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,.08)]">
            {/* Top Accent */}

            <div className="h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />

            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              {/* Price */}

              <div className="relative overflow-hidden bg-slate-950 p-7 text-white sm:p-9">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      <Lock size={11} />
                      Free forever
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                      <Wallet size={17} />
                    </div>
                  </div>

                  <p className="mt-10 text-sm font-medium text-slate-400">
                    ExpenseAI
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-6xl font-black tracking-tight">
                      ₹0
                    </span>

                    <span className="mb-2 text-sm text-slate-500">
                      / forever
                    </span>
                  </div>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                    Full access to the core ExpenseAI experience without a
                    monthly subscription.
                  </p>

                  <Link
                    href="/signup"
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500"
                  >
                    Create Free Account
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-slate-500">
                    <Check size={13} className="text-emerald-400" />
                    No credit card required
                  </div>
                </div>
              </div>

              {/* Features */}

              <div className="p-7 sm:p-9">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Included
                    </p>

                    <h3 className="mt-1 text-xl font-black text-slate-950">
                      Everything unlocked.
                    </h3>
                  </div>

                  <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700 sm:block">
                    100% Free
                  </span>
                </div>

                <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <motion.div
                        key={feature.title}
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
                          delay: index * 0.05,
                          duration: 0.35,
                        }}
                        whileHover={{
                          y: -2,
                        }}
                        className="group rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition-colors hover:border-blue-100 hover:bg-blue-50/40"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                            <Icon size={15} />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-slate-900">
                                {feature.title}
                              </h4>

                              <Check
                                size={12}
                                className="shrink-0 text-emerald-500"
                              />
                            </div>

                            <p className="mt-1 text-[10px] leading-4 text-slate-500">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Note */}

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <ShieldIcon />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      No hidden charges
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Use ExpenseAI without worrying about unexpected
                      subscription fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom reassurance */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
          }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-medium text-slate-400"
        >
          <span className="flex items-center gap-1.5">
            <Check size={13} className="text-emerald-500" />
            No monthly fee
          </span>

          <span className="flex items-center gap-1.5">
            <Check size={13} className="text-emerald-500" />
            No setup fee
          </span>

          <span className="flex items-center gap-1.5">
            <Check size={13} className="text-emerald-500" />
            No credit card
          </span>

          <span className="flex items-center gap-1.5">
            <Check size={13} className="text-emerald-500" />
            Free forever
          </span>
        </motion.div>
      </div>
    </section>
  );
};

const ShieldIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};

export default Pricing;
