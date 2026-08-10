"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleDollarSign,
  Receipt,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your finances",
    description:
      "Bring your financial activity into one organized workspace and get a clear view of where your money stands.",
    icon: Wallet,
    color: "bg-blue-600",
    light: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "Track and organize",
    description:
      "Record expenses, categorize transactions, and keep your spending structured without unnecessary complexity.",
    icon: Receipt,
    color: "bg-violet-600",
    light: "bg-violet-50 text-violet-600",
  },
  {
    number: "03",
    title: "Set smarter goals",
    description:
      "Create budgets and savings goals that turn your financial plans into measurable progress.",
    icon: Target,
    color: "bg-emerald-600",
    light: "bg-emerald-50 text-emerald-600",
  },
  {
    number: "04",
    title: "Understand your money",
    description:
      "Use analytics and AI-powered insights to discover patterns and make better financial decisions.",
    icon: Sparkles,
    color: "bg-orange-500",
    light: "bg-orange-50 text-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-100/30 blur-[130px]" />

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
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
            <CircleDollarSign size={13} />
            Simple by design
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            A better way to
            <span className="text-blue-600"> manage money.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            ExpenseAI keeps the process simple: understand where your money
            goes, decide what matters, and build better habits over time.
          </p>
        </motion.div>

        {/* Steps */}

        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* Connecting Line */}

          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-slate-200 lg:block">
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="h-full origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,.07)]"
                >
                  {/* Step Icon */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm ${step.color}`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <span className="text-[10px] font-black tracking-widest text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {step.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-[10px] font-bold text-slate-400 transition-colors group-hover:text-blue-600">
                    <span>Step {index + 1}</span>

                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Interactive Preview */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,.1)]"
        >
          <div className="grid lg:grid-cols-[1fr_.8fr]">
            {/* Left */}

            <div className="p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                    Your financial workflow
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    From spending to progress.
                  </h3>
                </div>

                <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-blue-300 sm:flex">
                  <BarChart3 size={17} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2.5">
                <PreviewMetric label="Tracked" value="₹18.4K" />

                <PreviewMetric label="Saved" value="₹8.2K" />

                <PreviewMetric label="Goal" value="74%" />
              </div>

              {/* Progress */}

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold text-slate-400">
                      Monthly savings goal
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      ₹34,000 / ₹46,000
                    </p>
                  </div>

                  <span className="text-xs font-bold text-emerald-400">
                    74%
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "74%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                  />
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="border-t border-white/10 bg-white/[0.03] p-6 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Sparkles size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    AI recommendation
                  </p>

                  <p className="text-[9px] text-slate-500">
                    Based on recent activity
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-300">
                You're spending more on food delivery than usual. Reducing it by
                18% could save approximately{" "}
                <span className="font-bold text-white">₹4,820</span> every
                month.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Check size={11} strokeWidth={3} />
                </span>

                <span className="text-[10px] font-medium text-slate-400">
                  One practical action at a time.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}

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
            delay: 0.3,
          }}
          className="mt-10 text-center"
        >
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition-colors hover:bg-blue-700"
          >
            Start managing your money
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

interface PreviewMetricProps {
  label: string;
  value: string;
}

const PreviewMetric = ({ label, value }: PreviewMetricProps) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
      <p className="text-[9px] font-medium text-slate-500">{label}</p>

      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </div>
  );
};

export default HowItWorks;
