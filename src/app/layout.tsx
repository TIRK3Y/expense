import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ExpenseAI",
    template: "%s | ExpenseAI",
  },
  description:
    "Track your expenses, manage budgets, achieve savings goals, and make smarter financial decisions with ExpenseAI.",
  keywords: [
    "Expense Tracker",
    "Budget Planner",
    "Savings",
    "Personal Finance",
    "ExpenseAI",
    "Finance App",
    "Money Management",
  ],
  authors: [
    {
      name: "ExpenseAI",
    },
  ],
  creator: "ExpenseAI",
  metadataBase: new URL("http://localhost:3000"),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
