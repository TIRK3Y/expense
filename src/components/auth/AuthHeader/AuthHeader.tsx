import Link from "next/link";
import Image from "next/image";

const AuthHeader = () => {
  return (
    <header className="w-full text-center mb-10">
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-3 group"
      >
        {/* Replace with your logo */}
        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-blue-600 flex items-center justify-center">
          {/* Uncomment when logo is available */}
          {/* <Image
            src="/logo.svg"
            alt="ExpenseAI"
            fill
            className="object-contain p-2"
          /> */}

          <span className="text-white text-xl font-bold">₹</span>
        </div>

        <div className="text-left">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
            ExpenseAI
          </h1>

          <p className="text-sm text-gray-500">
            Smart Expense & Savings Tracker
          </p>
        </div>
      </Link>
    </header>
  );
};

export default AuthHeader;
