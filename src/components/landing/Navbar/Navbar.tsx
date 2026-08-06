"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Wallet, X } from "lucide-react";

const navItems = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How It Works",
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
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed left-0 top-0 z-50 w-full px-5 py-5"
      >
        <div
          className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-6 transition-all duration-300 ${
            scrolled
              ? "border-white/30 bg-white/80 shadow-xl backdrop-blur-xl"
              : "border-transparent bg-white/40 backdrop-blur-md"
          }`}
        >
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
              <Wallet size={22} className="text-white" />
            </div>

            <div>
              <h2 className="text-lg font-bold">ExpenseAI</h2>

              <p className="text-xs text-gray-500">Smart Finance</p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
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
            className="fixed left-5 right-5 top-24 z-40 rounded-2xl border border-white/20 bg-white p-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-gray-700"
                >
                  {item.title}
                </Link>
              ))}

              <hr />

              <Link href="/login" className="font-medium text-gray-700">
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
