"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  ChartNoAxesCombined,
  CircleDollarSign,
  PiggyBank,
  ShieldCheck,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

const BentoGrid = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-100/40 blur-[110px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
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
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm">
            <SparkIcon />
            Everything in one place
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Your entire financial life.
            <span className="block text-blue-600">One simple workspace.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From everyday transactions to long-term savings goals, ExpenseAI
            gives you the tools to understand, control, and improve your money.
          </p>
        </motion.div>

        {/* Bento */}

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Expense Tracking */}

          <BentoCard className="lg:col-span-2" delay={0}>
            <div className="flex items-start justify-between">
              <div>
                <IconBox icon={Wallet} className="bg-blue-600" />

                <h3 className="mt-5 text-xl font-black text-slate-950">
                  Track every expense
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  See exactly where your money goes with organized transactions
                  and automatic categories.
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-400 transition group-hover:text-blue-600"
              />
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              {[
                ["Food & Dining", "₹4,280", "38%"],
                ["Shopping", "₹2,940", "26%"],
                ["Transport", "₹1,860", "16%"],
              ].map(([name, amount, percentage], index) => (
                <motion.div
                  key={name}
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
                    delay: 0.1 + index * 0.08,
                  }}
                  className="flex items-center gap-3 border-b border-slate-200 py-2.5 last:border-0"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-600" />

                  <span className="flex-1 text-xs font-medium text-slate-700">
                    {name}
                  </span>

                  <span className="text-xs font-bold text-slate-900">
                    {amount}
                  </span>

                  <span className="w-8 text-right text-[10px] text-slate-400">
                    {percentage}
                  </span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Budget */}

          <BentoCard delay={0.1}>
            <IconBox icon={ChartNoAxesCombined} className="bg-violet-600" />

            <h3 className="mt-5 text-lg font-black text-slate-950">
              Smart budgets
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Set limits and know when you're getting close.
            </p>

            <div className="mt-6">
              <div className="flex justify-between text-[11px] font-semibold">
                <span className="text-slate-500">Monthly budget</span>
                <span className="text-slate-900">72%</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="h-full rounded-full bg-violet-600"
                />
              </div>

              <p className="mt-2 text-[10px] text-slate-500">
                ₹7,820 remaining
              </p>
            </div>
          </BentoCard>

          {/* Savings */}

          <BentoCard delay={0.2}>
            <IconBox icon={PiggyBank} className="bg-emerald-600" />

            <h3 className="mt-5 text-lg font-black text-slate-950">
              Build savings
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Turn goals into measurable progress.
            </p>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] text-slate-500">Emergency Fund</p>

                <p className="mt-1 text-xl font-black text-slate-950">₹36K</p>
              </div>

              <span className="text-xs font-bold text-emerald-600">68%</span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "68%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="h-full rounded-full bg-emerald-600"
              />
            </div>
          </BentoCard>

          {/* AI */}

          <BentoCard className="bg-slate-950" dark delay={0.3}>
            <IconBox icon={Brain} className="bg-blue-600" />

            <h3 className="mt-5 text-xl font-black">AI financial insights</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Discover spending patterns and practical ways to save more.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-400" />

                <span className="text-[10px] font-semibold text-blue-300">
                  Recommendation
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-300">
                Reduce food delivery by 18% to save approximately
                <span className="font-bold text-white"> ₹4,820/month.</span>
              </p>
            </div>
          </BentoCard>

          {/* Financial Health */}

          <BentoCard className="lg:col-span-2" delay={0.4}>
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_220px]">
              <div>
                <IconBox icon={ShieldCheck} className="bg-cyan-600" />

                <h3 className="mt-5 text-xl font-black text-slate-950">
                  Understand your financial health
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  Get a clear picture of your spending, savings, budget
                  performance, and financial habits.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Financial Health
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-black text-slate-950">94</span>

                  <span className="mb-1 text-xs font-semibold text-emerald-600">
                    Excellent
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Goals */}

          <BentoCard delay={0.5}>
            <IconBox icon={Target} className="bg-orange-500" />

            <h3 className="mt-5 text-lg font-black text-slate-950">
              Savings goals
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Stay focused on what you're saving for.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-orange-100 text-xs font-black text-orange-600">
                74%
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">New Laptop</p>

                <p className="text-[10px] text-slate-500">₹74K of ₹100K</p>
              </div>
            </div>
          </BentoCard>

          {/* Spending Forecast */}

          <BentoCard delay={0.6}>
            <IconBox icon={CircleDollarSign} className="bg-indigo-600" />

            <h3 className="mt-5 text-lg font-black text-slate-950">
              Spending forecast
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              See where your current habits are heading.
            </p>

            <div className="mt-6">
              <p className="text-[10px] font-medium text-slate-500">
                Predicted monthly spending
              </p>

              <p className="mt-1 text-2xl font-black text-slate-950">₹21,840</p>

              <div className="mt-3 flex items-center gap-2">
                <TrendingIcon />

                <span className="text-[10px] font-semibold text-emerald-600">
                  8.2% lower than last month
                </span>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  delay?: number;
}

const BentoCard = ({
  children,
  className = "",
  dark = false,
  delay = 0,
}: BentoCardProps) => {
  return (
    <motion.article
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
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -4,
      }}
      className={`group relative overflow-hidden rounded-[24px] border p-5 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)] ${
        dark
          ? "border-slate-800 text-white shadow-[0_15px_40px_rgba(15,23,42,.12)]"
          : "border-slate-200 bg-white"
      } ${className}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl transition-all duration-500 ${
          dark
            ? "bg-blue-500/10 group-hover:bg-blue-500/20"
            : "bg-blue-100/20 group-hover:bg-blue-100/40"
        }`}
      />

      <div className="relative">{children}</div>
    </motion.article>
  );
};

interface IconBoxProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  className: string;
}

const IconBox = ({ icon: Icon, className }: IconBoxProps) => {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md ${className}`}
    >
      <Icon size={18} strokeWidth={2} />
    </div>
  );
};

const SparkIcon = () => (
  <span className="text-blue-600">
    <Brain size={13} />
  </span>
);

const TrendingIcon = () => (
  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50">
    <TrendingUp size={10} className="text-emerald-600" />
  </span>
);

export default BentoGrid;
