"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "ExpenseAI finally gave me a simple way to understand where my money was going. I stopped guessing and started making decisions based on actual spending.",
    name: "Rohan Mehta",
    role: "Product Designer",
    initials: "RM",
    rating: 5,
    result: "Saved ₹8,400",
  },
  {
    quote:
      "The budget tracking is incredibly easy to use. I can see what I have spent, what is left, and whether I am still on track without digging through spreadsheets.",
    name: "Ananya Sharma",
    role: "Software Engineer",
    initials: "AS",
    rating: 5,
    result: "32% less spending",
  },
  {
    quote:
      "What I like most is that it doesn't overwhelm me with numbers. The insights actually tell me what I should pay attention to.",
    name: "Arjun Nair",
    role: "Marketing Manager",
    initials: "AN",
    rating: 5,
    result: "₹12K monthly saved",
  },
  {
    quote:
      "My savings goals feel much more achievable now. Seeing the progress every month keeps me accountable without making finances feel complicated.",
    name: "Priya Kapoor",
    role: "Freelance Consultant",
    initials: "PK",
    rating: 5,
    result: "Goal reached 2 months early",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-100/30 blur-[120px]" />

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
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-600 shadow-sm">
            <Star size={13} className="fill-yellow-400 text-yellow-400" />
            Built for everyday money decisions
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Less financial stress.
            <span className="block text-blue-600">More confidence.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            See how ExpenseAI helps turn confusing financial activity into
            simple, actionable progress.
          </p>
        </motion.div>

        {/* Main Testimonial */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.06)] lg:grid-cols-[.72fr_1.28fr]">
            {/* Profile Panel */}

            <div className="relative overflow-hidden bg-slate-950 p-7 sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Quote size={20} />
                  </div>

                  <div className="text-xs font-bold text-slate-500">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-auto pt-12">
                  <motion.div
                    key={testimonial.initials}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-lg font-black text-white"
                  >
                    {testimonial.initials}
                  </motion.div>

                  <motion.div
                    key={`${testimonial.name}-info`}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="mt-4"
                  >
                    <h3 className="font-bold text-white">{testimonial.name}</h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {testimonial.role}
                    </p>
                  </motion.div>

                  <div className="mt-5 flex items-center gap-1">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                    <TrendingUp size={12} className="text-emerald-400" />

                    <span className="text-[10px] font-bold text-emerald-400">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Panel */}

            <div className="flex flex-col justify-between p-7 sm:p-9">
              <motion.div
                key={testimonial.quote}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <div className="flex gap-1">
                  {Array.from({
                    length: 5,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="mt-6 max-w-2xl text-2xl font-bold leading-[1.35] tracking-tight text-slate-950 sm:text-3xl">
                  “{testimonial.quote}”
                </blockquote>
              </motion.div>

              <div className="mt-10 flex flex-col gap-5 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  Real financial progress, made simpler.
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <ArrowLeft size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}

          <div className="mt-5 flex justify-center gap-1.5">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View testimonial ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-7 bg-blue-600"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm">
          <TrustStat value="4.9/5" label="Average rating" />

          <TrustStat value="25K+" label="Users building habits" />

          <TrustStat value="24/7" label="Financial visibility" />
        </div>
      </div>
    </section>
  );
};

interface TrustStatProps {
  value: string;
  label: string;
}

const TrustStat = ({ value, label }: TrustStatProps) => {
  return (
    <div className="px-2 text-center">
      <p className="text-lg font-black tracking-tight text-slate-950 sm:text-xl">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-medium text-slate-400 sm:text-[10px]">
        {label}
      </p>
    </div>
  );
};

export default Testimonials;
