import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthHeader />

      <AuthCard
        title="Forgot Password?"
        subtitle="Enter your email address and we'll send you a link to reset your password."
      >
        <ForgotPasswordForm />
      </AuthCard>
    </>
  );
}
