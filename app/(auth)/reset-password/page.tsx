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
      setFormData((prev) => ({ ...prev, email: emailParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
      {/* Email Address */}
      {/* <div>
        <CustomInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your registered email"
          required={true}
          disabled={isResettingPassword}
        />
      </div> */}

      {/* Verification Code / OTP */}
      {/* <div>
        <CustomInput
          label="Verification Code (OTP)"
          name="otp"
          type="text"
          value={formData.otp}
          onChange={handleChange}
          placeholder="Enter verification code"
          required={true}
          disabled={isResettingPassword}
        />
      </div> */}

      {/* Password & Confirm Password */}
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
          className="w-full"
          type="submit"
          disabled={isResettingPassword}
        >
          {isResettingPassword ? "Updating Password..." : "Reset Password"}
        </Button>
      </div>
    </form>
  );
}

// 2. Main Entry Page safely protected by Suspense for Next.js builds
export default function ResetPassword() {
  return (
    <div className="min-h-screen w-full bg-[#fff1e1]/60 flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center mb-8 select-none">
        <Logo />
        <h1 className="text-[26px] md:text-[28px] font-semibold text-stone-900 tracking-tight mt-4">
          Reset Your Password
        </h1>
      </div>

      <Suspense
        fallback={
          <div className="text-stone-600 text-sm animate-pulse">
            Loading interface...
          </div>
        }
      >
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
