import AuthFooter from "@/components/auth/AuthFooter";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">{children}</div>
      </div>

      <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <AuthFooter />
        </div>
      </footer>
    </main>
  );
}
