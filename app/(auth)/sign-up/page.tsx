"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";

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
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full bg-[#fff1e1]/60 flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center mb-8 select-none">
        <Logo />
        <h1 className="text-[26px] md:text-[28px] font-semibold text-stone-900 tracking-tight mt-4">
          Create a free account
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        {/*  First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="">
            <CustomInput
              label="First name"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              placeholder="Enter your First Name"
              required={true}
            />
          </div>
          <div className="">
            <CustomInput
              label="Last name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              placeholder="Enter your Last Name"
              required={true}
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
          />
        </div>
        {/* Phone Number */}
        <div>
          <CustomInput
            label="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your Phone number"
            required={true}
          />
        </div>
        {/* Password & Confirm Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div>
            <CustomInput
              label="Confirm Password"
              onChange={handleChange}
              name="confirmPassword"
              placeholder="Enter your Password again"
              required={true}
            />
          </div>
        </div>
        {/* Button */}
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
