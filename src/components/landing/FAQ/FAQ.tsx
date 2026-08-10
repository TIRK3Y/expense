"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is ExpenseAI completely free?",
    answer:
      "Yes. ExpenseAI is designed to be completely free to use. You can track expenses, manage budgets, create savings goals, and access the core financial tools without a subscription.",
  },
  {
    question: "What can I track with ExpenseAI?",
    answer:
      "You can track income, daily expenses, recurring payments, budgets, savings goals, and spending categories. Everything is organized in one dashboard so you can quickly understand your financial activity.",
  },
  {
    question: "Does ExpenseAI automatically categorize expenses?",
    answer:
      "ExpenseAI is designed to organize transactions into useful spending categories and provide intelligent insights based on your financial activity. The goal is to minimize manual organization while keeping your data understandable.",
  },
  {
    question: "How do the AI financial insights work?",
    answer:
      "The AI analyzes patterns in your spending and looks for areas such as recurring expenses, unusual spending, budget changes, and potential savings opportunities. It then turns those patterns into practical recommendations.",
  },
  {
    question: "Can I create and track savings goals?",
    answer:
      "Yes. You can create savings targets, define how much you want to save, and monitor your progress over time. This makes larger financial goals easier to break into measurable steps.",
  },
  {
    question: "Can ExpenseAI help me create a budget?",
    answer:
      "Yes. You can create spending limits and compare your actual expenses against your planned budget. This helps you identify where you're staying on track and where spending may need attention.",
  },
  {
    question: "Is my financial information secure?",
    answer:
      "ExpenseAI is designed with security and privacy in mind. Financial information should be handled carefully, protected with appropriate security practices, and never exposed unnecessarily.",
  },
  {
    question: "Do I need a credit card to sign up?",
    answer:
      "No. You can create an ExpenseAI account without entering credit card information.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
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
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
            <HelpCircle size={13} />
            Frequently asked questions
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Questions?
            <span className="block text-blue-600">We have answers.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Everything you need to know about ExpenseAI, your finances, and how
            the platform works.
          </p>
        </motion.div>

        {/* FAQ Layout */}

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          {/* Side Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
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
              duration: 0.5,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MessageCircle size={19} />
            </div>

            <h3 className="mt-5 text-lg font-black text-slate-950">
              Still have questions?
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              We are building ExpenseAI to make personal finance easier to
              understand, not harder.
            </p>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-blue-600" />

                <span className="text-[10px] font-bold text-slate-700">
                  Built around simplicity
                </span>
              </div>

              <p className="mt-2 text-[10px] leading-4 text-slate-500">
                Clear dashboards, useful insights, and practical tools without
                unnecessary complexity.
              </p>
            </div>
          </motion.div>

          {/* Questions */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-2.5"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-200 ${
                    isOpen
                      ? "border-blue-200 shadow-[0_8px_30px_rgba(37,99,235,.06)]"
                      : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
                  >
                    <span
                      className={`text-sm font-bold transition-colors ${
                        isOpen ? "text-blue-600" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                        isOpen
                          ? "bg-blue-50 text-blue-600"
                          : "bg-slate-50 text-slate-400"
                      }`}
                    >
                      <ChevronDown size={15} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                          <p className="max-w-2xl text-xs leading-6 text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
