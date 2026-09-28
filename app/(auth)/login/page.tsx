"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";
import { useAuth } from "@/app/hooks/useAuth";

export default function Login() {
  const { login, isLoggingIn: isLoading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      await login(formData);

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Login dispatch error:", error);
    }
  };

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#FFFDF7] px-4 py-12 sm:px-6">

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Yellow glow - top left */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow - top right */}
      <div className="pointer-events-none absolute -right-40 top-[10%] h-[500px] w-[500px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow - bottom */}
      <div className="pointer-events-none absolute bottom-[-120px] left-[25%] h-[420px] w-[420px] rounded-full bg-[#F47C20]/15 blur-3xl" />

      {/* Small yellow shape */}
      <div className="pointer-events-none absolute right-[18%] top-[14%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring */}
      <div className="pointer-events-none absolute bottom-[18%] left-[6%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange circle */}
      <div className="pointer-events-none absolute bottom-[10%] right-[12%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* =========================================================
          LOGIN CARD
      ========================================================= */}

      <div className="relative z-10 w-full max-w-md">

        {/* Soft green glow behind card */}
        <div className="pointer-events-none absolute -inset-5 rounded-[42px] bg-[#00864A]/5 blur-2xl" />

        <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white px-6 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:px-10 sm:py-10">

          {/* Yellow top accent */}
          <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />

          {/* =====================================================
              LOGO + HEADING
          ===================================================== */}

          <div className="mb-8 flex select-none flex-col items-center">

            <div className="flex items-center justify-center">
              <Logo />
            </div>

            <div className="mt-5 text-center">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#00864A]">
                Welcome Back
              </p>

              <h1 className="text-[28px] font-black tracking-[-0.03em] text-[#151515] sm:text-[30px]">
                Welcome Back
              </h1>

              {/* Yellow underline */}
              <div className="relative mx-auto mt-3 h-4 w-28">
                <div className="absolute left-0 top-0 h-2 w-20 rounded-full bg-[#F9C51C]" />
                <div className="absolute left-8 top-3 h-1 w-14 rounded-full bg-[#F9C51C]/50" />
              </div>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[#52606D]">
                Log in to continue shopping your favorite African groceries.
              </p>
            </div>
          </div>

          {/* =====================================================
              FORM
          ===================================================== */}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <CustomInput
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required={true}
                disabled={isLoading}
              />
            </div>

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
                disabled={isLoading}
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end pt-0.5">
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-[#00864A] transition-colors hover:text-[#006F3D] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <div className="pt-1">
              <Button
                variant="primary"
                className="w-full !rounded-2xl  !font-bold"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Sign up */}
            <div className="rounded-2xl border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-4 text-center">
              <p className="text-sm font-medium text-[#52606D]">
                Don't have an account?{" "}
                <Link
                  href="/user-type"
                  className="font-bold text-[#00864A] transition-colors hover:text-[#006F3D] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>

          </form>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00864A]" />

        </div>
      </div>
    </main>
  );
}







