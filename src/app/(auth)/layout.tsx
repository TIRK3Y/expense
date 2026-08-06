import AuthFooter from "@/components/auth/AuthFooter";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1 items-center justify-center px-6 py-6">
        <div className="w-full max-w-md">{children}</div>
      </div>

      <div className="pb-6">
        <AuthFooter />
      </div>
    </main>
  );
}
