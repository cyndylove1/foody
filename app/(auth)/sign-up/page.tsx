"use client";

import React, { useState } from "react";
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
  });
  const [errors, setErrors] = useState({
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validatePassword = (password: string): string => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must include at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must include at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must include at least one number.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must include at least one special character.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let localErrors = { password: "", password_confirmation: "" };
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

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center mb-8 select-none">
        <Logo />
        <h1 className="text-[26px] md:text-[28px] font-semibold text-stone-900 tracking-tight mt-4">
          Create a free account
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        {/* Email Address */}
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
        {/* Phone Number */}
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
            <p className="text-red-500 text-xs font-medium mt-1 ml-1">
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
            <p className="text-red-500 text-xs font-medium mt-1 ml-1">
              {errors.password_confirmation}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="pt-2">
          <Button
            variant="primary"
            className="w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
        </div>

        {/* Bottom Route */}
        <div className="text-center text-sm pt-1">
          <p className="text-stone-600 font-medium">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-(--main) hover:underline transition-all ml-0.5"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
