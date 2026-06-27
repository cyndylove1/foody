"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full bg-[#fff1e1]/60 flex flex-col items-center justify-center px-4 py-12">
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
          />
        </div>
        {/* Password */}
        <div>
          <CustomInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            required={true}
          />
        </div>

        {/* Submit Button*/}
        <div className="pt-2">
          <Button variant="primary" className="w-full">
            Log in
          </Button>
        </div>

        {/* Bottom  Route */}
        <div className="flex items-center justify-between text-sm pt-1">
          <p className="text-stone-600 font-medium">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-(--color) hover:underline transition-all ml-0.5"
            >
              Sign up
            </Link>
          </p>
          <Link href="/forgot-password">
            <h2 className="text-(--color) hover:underline transition-all font-medium">
              Forgot Password
            </h2>
          </Link>
        </div>
      </form>
    </div>
  );
}
