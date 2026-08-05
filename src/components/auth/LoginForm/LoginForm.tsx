"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const remember = formData.get("remember") === "on";

    console.log({
      email,
      password,
      remember,
    });

    // TODO:
    // Login with Supabase
    // Redirect to Dashboard
    // Show toast messages
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          autoComplete="email"
          className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            required
            autoComplete="current-password"
            className="h-12 w-full rounded-xl border border-gray-300 px-4 pr-12 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            aria-label="Toggle Password Visibility"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-gray-300 accent-blue-600"
          />
          Remember Me
        </label>

        <Link
          href="/forgot-password"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading && <LoaderCircle size={18} className="animate-spin" />}

        {loading ? "Signing In..." : "Sign In"}
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">OR</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-50"
        >
          Google
        </button>

        <button
          type="button"
          className="rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-50"
        >
          GitHub
        </button>
      </div>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
