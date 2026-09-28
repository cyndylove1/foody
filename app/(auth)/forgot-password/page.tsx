"use client";

import { useState } from "react";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";

export default function ForgotPassword() {
  const router = useRouter();
  const { forgotPassword, isRequestingReset } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await forgotPassword(formData);

      router.push(
        `/reset-password?email=${encodeURIComponent(formData.email)}`,
      );
    } catch (error) {
      console.error("Forgot password request failed:", error);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7]">
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Yellow glow */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow */}
      <div className="pointer-events-none absolute -right-40 top-[15%] h-[520px] w-[520px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow */}
      <div className="pointer-events-none absolute bottom-[-160px] left-[25%] h-[480px] w-[480px] rounded-full bg-[#F47C20]/15 blur-3xl" />

      {/* Yellow decorative shape */}
      <div className="pointer-events-none absolute right-[16%] top-[12%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring */}
      <div className="pointer-events-none absolute bottom-[18%] left-[5%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange circle */}
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* Large green ring */}
      <div className="pointer-events-none absolute right-[-60px] top-[42%] hidden h-40 w-40 rounded-full border-[18px] border-[#00864A]/5 lg:block" />

      {/* Small yellow circle */}
      <div className="pointer-events-none absolute left-[12%] top-[38%] hidden h-10 w-10 rounded-full bg-[#F9C51C]/20 lg:block" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="w-full max-w-lg">

          {/* Logo */}
          <div className="mb-8 flex justify-center select-none">
            <Logo />
          </div>

          {/* =================================================
              FORGOT PASSWORD CARD
          ================================================== */}

          <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

            {/* Yellow top accent */}
            <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />

            <div className="flex flex-col items-center px-6 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-12">

              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-bold text-[#00864A]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9C51C]">
                  <span className="h-2 w-2 rounded-full bg-[#00864A]" />
                </span>

                <span>Account Recovery</span>
              </div>

              {/* Heading */}
              <h1 className="text-center text-3xl font-black tracking-[-0.03em] text-[#151515] sm:text-4xl">
                Forgot Your{" "}
                <span className="text-[#00864A]">Password?</span>
              </h1>

              {/* Yellow underline */}
              <div className="relative mt-4 h-4 w-36">
                <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                <div className="absolute left-10 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />
              </div>

              {/* Description */}
              <p className="mt-5 max-w-sm text-center text-sm leading-6 text-[#52606D] sm:text-base">
                No worries. Enter the email address connected to your
                account and we'll help you get back in.
              </p>

              {/* Email Icon */}
              <div className="my-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#F9C51C]/40 bg-[#FFF4D0]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00864A] shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 text-white"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    />

                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-5"
              >
                {/* Email Address */}
                <div>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    required={true}
                    disabled={isRequestingReset}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    className="w-full !rounded-2xl !font-bold"
                    type="submit"
                    disabled={isRequestingReset}
                  >
                    {isRequestingReset ? "Processing..." : "Proceed"}
                  </Button>
                </div>
              </form>

              {/* =================================================
                  INFORMATION BOX
              ================================================== */}

              <div className="mt-7 w-full rounded-2xl border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-4">
                <div className="flex items-start gap-3">

                  {/* Info Icon */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00864A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 text-white"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8h.01" />
                      <path d="M11 12h1v4h1" />
                    </svg>
                  </div>

                  <p className="text-xs leading-5 text-[#52606D]">
                    Make sure you enter the email address you used when
                    creating your account. We'll use it to continue the
                    password recovery process.
                  </p>
                </div>
              </div>
            </div>

            {/* Green bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00864A]" />
          </div>

          {/* Bottom message */}
          <p className="mt-6 text-center text-xs font-medium text-[#52606D]">
            We'll help you get back to your account securely.
          </p>
        </div>
      </div>
    </main>
  );
}