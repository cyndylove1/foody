"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";
import { useAuth } from "@/app/hooks/useAuth"; 

export default function Login() {
  // const { login, isLoading } = useAuth(); 
  const { login, isLoggingIn: isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(formData);
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Login dispatch error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center mb-8 select-none">
        <Logo />
        <h1 className="text-[26px] md:text-[28px] font-semibold text-stone-900 tracking-tight mt-4">
          Welcome Back
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
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

        {/* Submit Button*/}
        <div className="pt-2">
          <Button
            variant="primary"
            className="w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </div>

        {/* Bottom Route */}
        <div className="flex items-center justify-between text-sm pt-1">
          <p className="text-stone-600 font-medium">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-(--main) hover:underline transition-all ml-0.5"
            >
              Sign up
            </Link>
          </p>
          <Link href="/forgot-password">
            <h2 className="text-(--main) hover:underline transition-all font-medium">
              Forgot Password
            </h2>
          </Link>
        </div>
      </form>
    </div>
  );
}
