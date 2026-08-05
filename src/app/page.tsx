import Link from "next/link";
import { ArrowRight, Wallet } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 shadow-lg">
          <Wallet size={40} className="text-white" />
        </div>

        <span className="mb-5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          Smart Personal Finance Platform
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">
          Take Control of Your
          <span className="block text-blue-600">Expenses & Savings</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Track every expense, create budgets, achieve savings goals, and soon
          get AI-powered recommendations to reduce spending and grow your
          savings.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-white font-semibold transition hover:bg-blue-700"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Expense Tracking
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Organize your daily, weekly, and monthly expenses with ease.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Budget Planning
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Set spending limits and monitor your progress in real time.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">AI Insights</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Coming soon—personalized suggestions to save more and spend
              smarter.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
