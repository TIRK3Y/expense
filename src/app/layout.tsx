import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "ExpenseAI",
    template: "%s | ExpenseAI",
  },

  description:
    "Track expenses, manage budgets, build savings goals, and receive AI-powered financial insights with ExpenseAI.",

  applicationName: "ExpenseAI",

  keywords: [
    "Expense Tracker",
    "Budget Planner",
    "Money Manager",
    "Savings",
    "Finance",
    "ExpenseAI",
    "AI Finance",
    "Personal Finance",
  ],

  authors: [
    {
      name: "ExpenseAI",
    },
  ],

  creator: "ExpenseAI",

  openGraph: {
    title: "ExpenseAI",
    description:
      "AI-powered personal finance platform for tracking expenses and growing savings.",
    type: "website",
    locale: "en_US",
    siteName: "ExpenseAI",
  },

  twitter: {
    card: "summary_large_image",
    title: "ExpenseAI",
    description: "Track expenses, build budgets, and save smarter with AI.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  colorScheme: "light",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
