"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "25K+",
    label: "Active Users",
    description: "People managing their finances with ExpenseAI.",
    icon: Users,
    accent: "blue",
  },
  {
    value: "₹18M+",
    label: "Expenses Tracked",
    description: "Transactions organized and analyzed.",
    icon: TrendingUp,
    accent: "emerald",
  },
  {
    value: "94%",
    label: "AI Insight Score",
    description: "Personalized insights from spending patterns.",
    icon: Brain,
    accent: "violet",
  },
  {
    value: "256-bit",
    label: "Data Protection",
    description: "Financial information protected with encryption.",
    icon: ShieldCheck,
    accent: "orange",
  },
];

const accentStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    value: "text-blue-600",
    dot: "bg-blue-600",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    value: "text-emerald-600",
    dot: "bg-emerald-600",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    value: "text-violet-600",
    dot: "bg-violet-600",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    value: "text-orange-600",
    dot: "bg-orange-600",
  },
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      {/* Background */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-violet-100/30 blur-[100px]" />

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
            duration: 0.5,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm">
            <CheckCircle2 size={13} className="text-emerald-600" />
            Built for smarter financial habits
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Numbers that tell
            <span className="text-blue-600"> the story.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
            A clearer picture of your money, powered by organized data and
            intelligent financial insights.
          </p>
        </motion.div>

        {/* Stats Grid */}

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const style =
              accentStyles[stat.accent as keyof typeof accentStyles];

            return (
              <motion.article
                key={stat.label}
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
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -3,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,.035)] transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(15,23,42,.07)]"
              >
                {/* Accent */}

                <div
                  className={`absolute left-0 top-0 h-full w-0.5 ${style.dot} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Icon */}

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${style.icon}`}
                >
                  <Icon size={17} strokeWidth={2} />
                </div>

                {/* Value */}

                <div className="mt-4 flex items-end justify-between gap-2">
                  <h3
                    className={`text-3xl font-black tracking-tight text-slate-950`}
                  >
                    {stat.value}
                  </h3>

                  <span
                    className={`mb-1 text-[9px] font-bold uppercase tracking-wider ${style.value}`}
                  >
                    Verified
                  </span>
                </div>

                {/* Label */}

                <h4 className="mt-1.5 text-sm font-bold text-slate-900">
                  {stat.label}
                </h4>

                {/* Description */}

                <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}

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
          className="mx-auto mt-4 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <PiggyBank size={15} strokeWidth={2} />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-900">
                Designed around your financial goals
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500">
                Track spending, improve habits, and build savings.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <MiniStat value="50+" label="Categories" />

            <MiniStat value="24/7" label="Access" />

            <MiniStat value="AI" label="Insights" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface MiniStatProps {
  value: string;
  label: string;
}

const MiniStat = ({ value, label }: MiniStatProps) => {
  return (
    <div className="text-center">
      <p className="text-sm font-black text-slate-900">{value}</p>

      <p className="mt-0.5 text-[9px] font-medium text-slate-400">{label}</p>
    </div>
  );
};

export default Stats;
