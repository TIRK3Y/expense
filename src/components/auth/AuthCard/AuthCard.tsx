import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthCard = ({ children, title, subtitle }: AuthCardProps) => {
  return (
    <section className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">{subtitle}</p>
      </div>

      {children}
    </section>
  );
};

export default AuthCard;
