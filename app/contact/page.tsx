"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../components/button";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import CustomInput from "../components/customInput";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted Data:", formData);
  };

  return (
    <section className="bg-white">
      <Navbar />
      <div className="py-16 w-full px-4 md:px-8 lg:px-16 min-h-[600px] flex items-center justify-center">
        <div className="w-full max-w-7xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.015)] border border-gray-300 rounded-[24px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CONTACT FORM */}
            <div className="md:p-8 p-6 md:py-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-8">
                Contact
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Input */}
                <div className="">
                  <CustomInput
                    label="Full name"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="Enter your Full Name"
                    required={true}
                  />
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

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter a your message..."
                    className="w-full p-3 bg-white border-[1px] border-[#d8dadc] rounded-[8px] text-sm text-black hover:border-(--main) focus:outline-none focus:ring-1 focus:ring-(--main) transition-all placeholder-[#6b7280] resize-none"
                  />
                </div>

                {/* Terms and Conditions Note */}
                <p className="text-[12px] text-gray-500 leading-normal pt-2">
                  By selecting the button below, I agree to the{" "}
                  <span className="text-(--main) font-medium cursor-pointer hover:underline">
                    terms and Conditions
                  </span>{" "}
                  Provided by Foody.
                </p>

                {/* Submit Button */}
                <Button variant="primary" className="w-full">
                  Submit Message
                </Button>
              </form>
            </div>

            {/* IMAGE */}
            <div className="relative min-h-[400px] lg:min-h-full w-full bg-[#f2e6d9] hidden lg:flex">
              <Image
                src="/assets/grocery9.jpg"
                alt="Cozy ambient interior decoration"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
