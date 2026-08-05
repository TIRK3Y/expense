import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import AuthFooter from "@/components/auth/AuthFooter";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-10">
      <div className="w-full max-w-md">
        <AuthHeader />

        <AuthCard
          title="Welcome Back"
          subtitle="Sign in to continue managing your expenses."
        >
          <LoginForm />
        </AuthCard>

        <AuthFooter />
      </div>
    </main>
  );
}
