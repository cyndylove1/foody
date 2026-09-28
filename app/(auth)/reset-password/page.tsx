"use client";

import React, { useState, useEffect, Suspense } from "react";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";

// 1. Core Form Component reading search parameters safely
function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetPassword, isResettingPassword } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });

  // Pre-fill the email context dynamically if passed down from the forgot password view
  useEffect(() => {
    const emailParam = searchParams.get("email");

    if (emailParam) {
      setFormData((prev) => ({
        ...prev,
        email: emailParam,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await resetPassword(formData);
      router.push("/login");
    } catch (error) {
      console.error("Password reset routine execution error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-5"
    >
      {/* Password */}
      <div>
        <CustomInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your Password"
          required={true}
          disabled={isResettingPassword}
        />
      </div>

      {/* Confirm Password */}
      <div>
        <CustomInput
          label="Confirm Password"
          name="password_confirmation"
          type="password"
          value={formData.password_confirmation}
          onChange={handleChange}
          placeholder="Enter your Password again"
          required={true}
          disabled={isResettingPassword}
        />
      </div>

      {/* Button */}
      <div className="pt-2">
        <Button
          variant="primary"
          className="w-full !rounded-2xl !font-bold"
          type="submit"
          disabled={isResettingPassword}
        >
          {isResettingPassword
            ? "Updating Password..."
            : "Reset Password"}
        </Button>
      </div>
    </form>
  );
}

// 2. Main Entry Page
export default function ResetPassword() {
  return (
    <main className="relative min-h-screen pt-10 w-full overflow-hidden bg-[#FFFDF7]">
      {/* ================= BACKGROUND DECORATIONS ================= */}

      {/* Yellow glow */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow */}
      <div className="pointer-events-none absolute -right-40 top-[15%] h-[520px] w-[520px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow */}
      <div className="pointer-events-none absolute bottom-[-160px] left-[25%] h-[480px] w-[480px] rounded-full bg-[#F47C20]/15 blur-3xl" />

      {/* Small yellow decorative shape */}
      <div className="pointer-events-none absolute right-[16%] top-[12%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring */}
      <div className="pointer-events-none absolute bottom-[18%] left-[5%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange circle */}
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* Large green ring */}
      <div className="pointer-events-none absolute right-[-60px] top-[42%] hidden h-40 w-40 rounded-full border-[18px] border-[#00864A]/5 lg:block" />

      {/* Small yellow circle */}
      <div className="pointer-events-none absolute left-[12%] top-[38%] hidden h-10 w-10 rounded-full bg-[#F9C51C]/20 lg:block" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="w-full max-w-lg">
          {/* ================= LOGO ================= */}

          <div className="mb-8 flex justify-center select-none">
            <Logo />
          </div>

          {/* ================= RESET CARD ================= */}

          <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            {/* Yellow top accent */}
            <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />

            <div className="flex flex-col items-center px-6 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-12">
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-bold text-[#00864A]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9C51C]">
                  <span className="h-2 w-2 rounded-full bg-[#00864A]" />
                </span>

                <span>Account Security</span>
              </div>

              {/* Heading */}
              <h1 className="text-center text-3xl font-black tracking-[-0.03em] text-[#151515] sm:text-4xl">
                Reset Your{" "}
                <span className="text-[#00864A]">Password</span>
              </h1>

              {/* Yellow underline */}
              <div className="relative mt-4 h-4 w-36">
                <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />
                <div className="absolute left-10 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />
              </div>

              {/* Description */}
              <p className="mt-5 max-w-sm text-center text-sm leading-6 text-[#52606D] sm:text-base">
                Create a new password for your account and keep your
                grocery shopping experience secure.
              </p>

              {/* Decorative icon area */}
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
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                    />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>

              {/* ================= FORM ================= */}

              <Suspense
                fallback={
                  <div className="py-10 text-sm font-medium text-[#52606D]">
                    Loading interface...
                  </div>
                }
              >
                <ResetPasswordForm />
              </Suspense>

              {/* Security note */}
              <div className="mt-7 w-full rounded-2xl border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00864A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 text-white"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>

                  <p className="text-xs leading-5 text-[#52606D]">
                    Choose a strong password that you don't use on other
                    websites to help protect your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Green bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00864A]" />
          </div>

          {/* Bottom text */}
          <p className="mt-6 text-center text-xs font-medium text-[#52606D]">
            Your account security matters to us.
          </p>
        </div>
      </div>
    </main>
  );
}