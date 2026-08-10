"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  GitBranch,
  LinkIcon,
  Mail,
  Sparkles,
  Wallet,
} from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const accountLinks = [
  { label: "Sign In", href: "/login" },
  { label: "Create Account", href: "/signup" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient Background */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* CTA */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="border-b border-white/10 py-16 sm:py-20"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-10 text-center backdrop-blur-xl sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[80px]" />

            <div className="relative">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
                <Sparkles size={19} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Your money. Your future.
              </p>

              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Start building better
                <span className="text-blue-400"> financial habits.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
                Track your spending, manage your goals, and understand your
                money with ExpenseAI.
              </p>

              <Link
                href="/signup"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500"
              >
                Get Started Free
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main Footer */}

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}

          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Wallet size={19} />
              </div>

              <div>
                <p className="text-base font-black tracking-tight">ExpenseAI</p>

                <p className="text-[10px] text-slate-500">
                  Smart Personal Finance
                </p>
              </div>
            </Link>

            <p className="mt-5 text-xs leading-6 text-slate-400">
              A simpler way to track expenses, manage budgets, build savings,
              and make smarter financial decisions.
            </p>

            {/* AI Status */}

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <Brain size={12} className="text-blue-300" />

              <span className="text-[10px] font-medium text-slate-400">
                AI-powered financial insights
              </span>
            </div>
          </div>

          {/* Product */}

          <FooterColumn title="Product" links={productLinks} />

          {/* Account */}

          <FooterColumn title="Account" links={accountLinks} />

          {/* Company */}

          <FooterColumn title="Company" links={companyLinks} />
        </div>

        {/* Bottom */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] text-slate-500">
              © {new Date().getFullYear()} ExpenseAI. All rights reserved.
            </p>

            <p className="mt-1 text-[9px] text-slate-600">
              Built to make personal finance simpler.
            </p>
          </div>

          {/* Social */}

          <div className="flex items-center gap-2">
            <SocialLink href="https://github.com" label="GitHub">
              <GitBranch size={14} />
            </SocialLink>

            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <LinkIcon size={14} />
            </SocialLink>

            <SocialLink href="https://instagram.com" label="Instagram">
              <LinkIcon size={14} />
            </SocialLink>

            <SocialLink href="mailto:hello@expenseai.com" label="Email">
              <Mail size={14} />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
        {title}
      </h3>

      <nav className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="w-fit text-xs text-slate-500 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, label, children }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-500 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {children}
    </motion.a>
  );
};

export default Footer;
