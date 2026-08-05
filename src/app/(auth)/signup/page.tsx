import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <>
      <AuthHeader />

      <AuthCard
        title="Create Your Account"
        subtitle="Start tracking your expenses, budgets, and savings in one place."
      >
        <SignupForm />
      </AuthCard>
    </>
  );
}
