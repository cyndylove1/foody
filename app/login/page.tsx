"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../components/logo";
import Button from "../components/button";

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
    // Handle signup registration logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full bg-[#fff1e1]/60 flex flex-col items-center justify-center px-4 py-12">
      {/* Brand Identity Header Matching signup.PNG */}
      <div className="flex flex-col items-center mb-8 select-none">
        <Logo />
        <h1 className="text-[26px] md:text-[28px] font-semibold text-stone-900 tracking-tight mt-4">
          Welcome Back
        </h1>
      </div>

      {/* Reduced container maximum width to max-w-md for a sleeker look */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        {/* Input Block: Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-[15px] font-medium text-stone-800"
          >
            Enter your email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="E.g Suft@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white border border-stone-200/60 text-stone-900 placeholder-stone-400 text-[15px] px-5 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-colors shadow-xs"
          />
        </div>

        {/* Input Block: Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-[15px] font-medium text-stone-800"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-white border border-stone-200/60 text-stone-900 placeholder-stone-400 text-[15px] px-5 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-colors shadow-xs"
          />
        </div>

        {/* Thick Pill Submit Action Button Matching Style in signup.PNG */}
        <div className="pt-2">
          <Button variant="primary" className="w-full">
            Log in
          </Button>
        </div>

        {/* Bottom Switch Route Option */}
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
