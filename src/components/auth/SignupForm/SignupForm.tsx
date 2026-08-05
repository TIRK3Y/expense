"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      terms: formData.get("terms") === "on",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            required
            className="h-11 w-full rounded-xl border border-gray-300 px-4 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
            required
            className="h-11 w-full rounded-xl border border-gray-300 px-4 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            className="h-11 w-full rounded-xl border border-gray-300 px-4 pr-11 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>

        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            className="h-11 w-full rounded-xl border border-gray-300 px-4 pr-11 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <label className="flex items-start gap-2 text-xs text-gray-600">
        <input
          type="checkbox"
          name="terms"
          required
          className="mt-0.5 accent-blue-600"
        />

        <span>
          I agree to the{" "}
          <Link
            href="/terms-and-conditions"
            className="font-medium text-blue-600"
          >
            Terms
          </Link>{" "}
          &{" "}
          <Link href="/privacy-policy" className="font-medium text-blue-600">
            Privacy Policy
          </Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
      >
        {loading && <LoaderCircle size={18} className="animate-spin" />}
        {loading ? "Creating..." : "Create Account"}
      </button>

      <div className="relative py-1">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-gray-500">OR</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="h-11 rounded-xl border border-gray-300 text-sm font-medium transition hover:bg-gray-50"
        >
          Google
        </button>

        <button
          type="button"
          className="h-11 rounded-xl border border-gray-300 text-sm font-medium transition hover:bg-gray-50"
        >
          GitHub
        </button>
      </div>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
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
export default SignupForm;
