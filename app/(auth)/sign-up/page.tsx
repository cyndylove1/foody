"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";
import { useAuth } from "@/app/hooks/useAuth";

export default function SignUp() {
  const { register, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    customer_type: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    const savedRole = localStorage.getItem("selected_vibe");

    if (savedRole) {
      setFormData((prev) => ({
        ...prev,
        customer_type: savedRole,
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validatePassword = (password: string): string => {
    if (password.length < 6)
      return "Password must be at least 6 characters long.";

    if (!/[A-Z]/.test(password))
      return "Password must include at least one uppercase letter.";

    if (!/[a-z]/.test(password))
      return "Password must include at least one lowercase letter.";

    if (!/[0-9]/.test(password))
      return "Password must include at least one number.";

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return "Password must include at least one special character.";

    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let localErrors = {
      password: "",
      password_confirmation: "",
    };

    let hasError = false;

    const passwordError = validatePassword(formData.password);

    if (passwordError) {
      localErrors.password = passwordError;
      hasError = true;
    }

    if (formData.password !== formData.password_confirmation) {
      localErrors.password_confirmation = "Passwords do not match.";
      hasError = true;
    }

    if (hasError) {
      setErrors(localErrors);
      return;
    }

    try {
      await register(formData);

      localStorage.removeItem("selected_vibe");

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        customer_type: "",
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7] px-4 py-12 sm:px-6">

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Yellow glow - top left */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow - top right */}
      <div className="pointer-events-none absolute -right-40 top-[18%] h-[500px] w-[500px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow - bottom left */}
      <div className="pointer-events-none absolute bottom-[-140px] left-[10%] h-[450px] w-[450px] rounded-full bg-[#F47C20]/15 blur-3xl" />

      {/* Yellow decorative shape */}
      <div className="pointer-events-none absolute right-[15%] top-[12%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring */}
      <div className="pointer-events-none absolute bottom-[20%] left-[5%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange circle */}
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* Large green ring */}
      <div className="pointer-events-none absolute bottom-[35%] right-[-60px] hidden h-40 w-40 rounded-full border-[18px] border-[#00864A]/5 lg:block" />

      {/* =========================================================
          SIGN UP AREA
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-2xl">

        {/* =====================================================
            LOGO ABOVE CARD
        ===================================================== */}

        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        {/* Soft green glow behind card */}
        <div className="pointer-events-none absolute inset-x-[-20px] top-16 bottom-[-20px] rounded-[44px] bg-[#00864A]/5 blur-2xl" />

        {/* =====================================================
            SIGN UP CARD
        ===================================================== */}

        <div className="relative mt-0 overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

          {/* Yellow top accent */}
          <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="flex flex-col items-center px-6 pb-5 pt-10 sm:px-10 sm:pt-12">

            <div className="text-center">

              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#00864A]">
                Join Our Community
              </p>

              <h1 className="text-[28px] font-black tracking-[-0.03em] text-[#151515] sm:text-[30px]">
                Create a Free Account
              </h1>

              {/* Yellow underline */}
              <div className="relative mx-auto mt-3 h-4 w-32">
                <div className="absolute left-0 top-0 h-2 w-24 rounded-full bg-[#F9C51C]" />

                <div className="absolute left-10 top-3 h-1 w-16 rounded-full bg-[#F9C51C]/50" />
              </div>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#52606D]">
                Create your account and enjoy a simple way to shop your
                favorite African groceries.
              </p>

            </div>
          </div>

          {/* =====================================================
              FORM
          ===================================================== */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 px-6 pb-10 sm:px-10"
          >

            {/* First & Last Name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <CustomInput
                  label="First name"
                  name="first_name"
                  onChange={handleChange}
                  value={formData.first_name}
                  placeholder="Enter your First Name"
                  required={true}
                  disabled={isLoading}
                />
              </div>

              <div>
                <CustomInput
                  label="Last name"
                  name="last_name"
                  onChange={handleChange}
                  value={formData.last_name}
                  placeholder="Enter your Last Name"
                  required={true}
                  disabled={isLoading}
                />
              </div>

            </div>

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

            {/* Phone */}
            <div>
              <CustomInput
                label="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone number"
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

              {errors.password && (
                <p className="ml-1 mt-1.5 text-xs font-medium text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <CustomInput
                label="Confirm Password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                type="password"
                placeholder="Enter your Password again"
                required={true}
                disabled={isLoading}
              />

              {errors.password_confirmation && (
                <p className="ml-1 mt-1.5 text-xs font-medium text-red-500">
                  {errors.password_confirmation}
                </p>
              )}
            </div>

            {/* Account information note */}
            <div className="rounded-2xl border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-3.5">
              <p className="text-xs leading-5 text-[#52606D]">
                Your information is used to create and manage your account
                and provide you with a better shopping experience.
              </p>
            </div>

            {/* Button */}
            <div className="pt-1">
              <Button
                variant="primary"
                className="w-full !rounded-2xl !font-bold"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
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

            {/* Login */}
            <div className="rounded-2xl border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-4 text-center">
              <p className="text-sm font-medium text-[#52606D]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#00864A] transition-colors hover:text-[#006F3D] hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>

          </form>

          {/* Green bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00864A]" />

        </div>
      </div>
    </main>
  );
}