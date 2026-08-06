"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Wallet, X } from "lucide-react";

const navItems = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How it Works",
    href: "#how-it-works",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -60,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto flex h-[72px] max-w-[1440px] items-center justify-between rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-slate-200 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-2xl"
              : "border-white/60 bg-white/40 backdrop-blur-xl"
          }`}
        >
          {/* Left */}

          <Link href="/" className="group flex items-center gap-4 pl-5">
            <motion.div
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg"
            >
              <Wallet size={20} />
            </motion.div>

            <div>
              <h2 className="text-lg font-black tracking-tight text-slate-900">
                ExpenseAI
              </h2>

              <p className="text-xs font-medium text-slate-500">
                AI Personal Finance
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center rounded-full border border-slate-200 bg-white/70 px-2 py-2 backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-3 pr-5 lg:flex">
            <Link
              href="/login"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </Link>

            <motion.div
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="mr-5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-4 right-4 top-24 z-40 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,.08)] lg:hidden"
          >
            <div className="p-6">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              <div className="my-5 border-t border-slate-200" />

              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-slate-200 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 font-semibold text-white transition hover:bg-blue-600"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
