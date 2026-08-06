"use client";

import Link from "next/link";
import { LoaderCircle, Mail } from "lucide-react";
import { useState } from "react";

const ForgotPasswordForm = () => {
  const [loading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;

    console.log({ email });

    // TODO:
    // Send password reset email using Supabase
    // Redirect to confirmation page or show success toast
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
            required
            className="h-11 w-full rounded-xl border border-gray-300 pl-11 pr-4 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading && <LoaderCircle size={18} className="animate-spin" />}

        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Remember your password?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
