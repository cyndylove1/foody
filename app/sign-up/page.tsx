"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../components/logo";
import Button from "../components/button";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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
          Create a free account
        </h1>
      </div>

      {/* Container max-width carefully adapted down to max-w-md */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        {/* Row: First & Last Name Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-[15px] font-medium text-stone-800"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="E.g John"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-white border border-stone-200/60 text-gray-900 placeholder-stone-400 text-[15px] px-5 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-colors shadow-xs"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-[15px] font-medium text-stone-800"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="E.g Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-white border border-stone-200/60 text-stone-900 placeholder-stone-400 text-[15px] px-5 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-colors shadow-xs"
            />
          </div>
        </div>

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

        {/* Input Block: Phone Number */}
        <div className="space-y-2">
          <label
            htmlFor="phoneNumber"
            className="block text-[15px] font-medium text-stone-800"
          >
            Phone number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            placeholder="E.g +1 (555) 000-0000"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full bg-white border border-stone-200/60 text-stone-900 placeholder-stone-400 text-[15px] px-5 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-colors shadow-xs"
          />
        </div>

        {/* Row: Password & Confirm Password Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-[15px] font-medium text-stone-800"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-white border border-stone-200/60 text-stone-900 placeholder-stone-400 text-[15px] px-5 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Thick Pill Submit Action Button Matching Style in signup.PNG */}
        <div className="pt-2">
          <Button variant="primary" className="w-full">
            Sign Up
          </Button>
        </div>

        {/* Bottom Switch Route Option */}
        <div className="text-center text-sm pt-1">
          <p className="text-stone-600 font-medium">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-(--color) hover:underline transition-all ml-0.5"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
