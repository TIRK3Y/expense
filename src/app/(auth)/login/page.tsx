import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <AuthHeader />

      <AuthCard
        title="Welcome Back"
        subtitle="Sign in to continue managing your expenses."
      >
        <LoginForm />
      </AuthCard>
    </>
  );
}
