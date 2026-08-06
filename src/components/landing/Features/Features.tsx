"use client";

import FeatureBadge from "./FeatureBadge";
import FeatureShowcase from "./FeatureShowcase";
import FeatureStats from "./FeatureStats";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-28 lg:py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="absolute right-0 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-100/40 blur-[120px]" />

      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
          linear-gradient(to right,#CBD5E1 1px,transparent 1px),
          linear-gradient(to bottom,#CBD5E1 1px,transparent 1px)
        `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Content */}

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <FeatureBadge />

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Everything you need
            <span className="block text-blue-600">to manage your money.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            ExpenseAI combines expense tracking, intelligent budgeting, savings
            automation, and AI-powered financial guidance into one modern
            workspace.
          </p>
        </div>

        {/* Showcase */}

        <div className="mt-24">
          <FeatureShowcase />
        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            icon="wallet"
            title="Smart Expense Tracking"
            description="Automatically categorize expenses, organize transactions, and understand exactly where your money goes."
          />

          <FeatureCard
            icon="chart"
            title="Budget Planning"
            description="Create monthly budgets, monitor spending limits, and receive alerts before you overspend."
          />

          <FeatureCard
            icon="brain"
            title="AI Financial Insights"
            description="Receive personalized recommendations that help reduce unnecessary spending and improve savings."
          />

          <FeatureCard
            icon="target"
            title="Savings Goals"
            description="Set goals, track progress visually, and stay motivated with intelligent milestone tracking."
          />
        </div>

        {/* Stats */}

        <div className="mt-24">
          <FeatureStats />
        </div>
      </div>
    </section>
  );
};

export default Features;
