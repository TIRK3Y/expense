import Link from "next/link";

const currentYear = new Date().getFullYear();

const AuthFooter = () => {
  return (
    <footer className="mt-10 flex flex-col items-center gap-3 text-center">
      <p className="text-sm text-gray-500">
        Securely manage your expenses, budgets, and savings with ExpenseAI.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
        <Link
          href="/privacy-policy"
          className="text-gray-600 transition-colors hover:text-blue-600"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms-and-conditions"
          className="text-gray-600 transition-colors hover:text-blue-600"
        >
          Terms & Conditions
        </Link>

        <Link
          href="/contact"
          className="text-gray-600 transition-colors hover:text-blue-600"
        >
          Contact
        </Link>
      </div>

      <p className="text-xs text-gray-400">
        © {currentYear} ExpenseAI. All rights reserved.
      </p>
    </footer>
  );
};

export default AuthFooter;
