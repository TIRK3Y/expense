import AuthFooter from "@/components/auth/AuthFooter";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center">
        {children}

        <AuthFooter />
      </div>
    </main>
  );
}
