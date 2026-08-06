"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Bell,
  Brain,
  PiggyBank,
  Target,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Budget",
    value: "82%",
    icon: Target,
    color: "bg-blue-600",
    position: "-left-24 top-10",
    delay: 0,
  },
  {
    title: "AI Score",
    value: "94",
    icon: Brain,
    color: "bg-violet-600",
    position: "-right-24 top-20",
    delay: 0.15,
  },
  {
    title: "Savings",
    value: "+₹18K",
    icon: PiggyBank,
    color: "bg-emerald-600",
    position: "-left-20 bottom-28",
    delay: 0.3,
  },
  {
    title: "Growth",
    value: "+22%",
    icon: TrendingUp,
    color: "bg-cyan-600",
    position: "-right-20 bottom-20",
    delay: 0.45,
  },
  {
    title: "Bills",
    value: "2 Due",
    icon: Bell,
    color: "bg-amber-500",
    position: "left-1/2 -top-10 -translate-x-1/2",
    delay: 0.6,
  },
  {
    title: "Income",
    value: "₹52K",
    icon: BadgeDollarSign,
    color: "bg-indigo-600",
    position: "left-1/2 -bottom-10 -translate-x-1/2",
    delay: 0.75,
  },
];

const FloatingCards = () => {
  return (
    <>
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                delay: card.delay,
                duration: 0.5,
              },
              scale: {
                delay: card.delay,
                duration: 0.5,
              },
              y: {
                delay: card.delay,
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4 + Math.random(),
                ease: "easeInOut",
              },
            }}
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            className={`absolute hidden lg:block ${card.position}`}
          >
            <div className="group flex min-w-[165px] items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,.08)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg ${card.color} transition-all duration-300 group-hover:scale-105`}
              >
                <Icon size={18} />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-0.5 text-lg font-bold text-slate-900">
                  {card.value}
                </h3>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default FloatingCards;
