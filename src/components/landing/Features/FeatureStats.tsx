"use client";

import { motion } from "framer-motion";
import { Brain, PiggyBank, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "25K+",
    label: "Active Users",
    description: "Individuals managing their finances with ExpenseAI.",
    icon: TrendingUp,
    color: "from-blue-600 to-cyan-500",
  },
  {
    value: "₹18M+",
    label: "Expenses Tracked",
    description: "Transactions analyzed to help users understand spending.",
    icon: PiggyBank,
    color: "from-emerald-500 to-green-600",
  },
  {
    value: "94%",
    label: "AI Accuracy",
    description: "Personalized insights generated from spending behavior.",
    icon: Brain,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    value: "256-bit",
    label: "Bank-Level Security",
    description: "Your financial information stays encrypted and protected.",
    icon: ShieldCheck,
    color: "from-orange-500 to-red-500",
  },
];

const FeatureStats = () => {
  return (
    <section className="relative">
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
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
        }}
        className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,.18)] lg:p-12"
      >
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">
            Why ExpenseAI?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
            Trusted by people who
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              want better financial habits.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Everything is built to help you spend less, save more, and make
            confident financial decisions every day.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-4xl font-black tracking-tight">
                  {stat.value}
                </h3>

                <h4 className="mt-2 text-lg font-semibold">{stat.label}</h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl lg:flex-row"
        >
          <div>
            <h3 className="text-2xl font-bold">
              Smarter money management starts today.
            </h3>

            <p className="mt-2 text-slate-300">
              Track expenses, control budgets, build savings, and receive
              AI-powered financial guidance—all from one beautifully designed
              dashboard.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="text-center">
              <h4 className="text-3xl font-black text-blue-400">50+</h4>

              <p className="mt-1 text-sm text-slate-400">Categories</p>
            </div>

            <div className="text-center">
              <h4 className="text-3xl font-black text-cyan-400">AI</h4>

              <p className="mt-1 text-sm text-slate-400">Insights</p>
            </div>

            <div className="text-center">
              <h4 className="text-3xl font-black text-violet-400">24/7</h4>

              <p className="mt-1 text-sm text-slate-400">Access</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureStats;
