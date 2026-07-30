"use client";

import { useState, useContext } from "react";
import Logo from "../../components/logo";
import Button from "../../components/button";
import CustomInput from "@/app/components/customInput";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";



export default function ForgotPassword() {
  const router = useRouter();
  const { forgotPassword, isRequestingReset } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(formData);
      // Route over to your reset password screen following successful token/OTP delivery
      router.push(
        `/reset-password?email=${encodeURIComponent(formData.email)}`,
      );
    } catch (error) {
      console.error("Forgot password request failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center mb-8 select-none">
        <Logo />
        <h1 className="text-[26px] md:text-[28px] font-semibold text-stone-900 tracking-tight mt-4">
          Forgot Password?
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        {/* Email Address */}
        <div>
          <CustomInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            required={true}
            disabled={isRequestingReset}
          />
        </div>
        {/* Submit Button */}
        <div className="pt-2">
          <Button
            variant="primary"
            className="w-full"
            type="submit"
            disabled={isRequestingReset}
          >
            {isRequestingReset ? "Processing..." : "Proceed"}
          </Button>
        </div>
      </form>
    </div>
  );
}
