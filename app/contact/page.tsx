"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../components/button";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted Data:", formData);
  };

  return (
    <section className="bg-[#fff1e1]/60">
      <Navbar />
      <div className="py-16 w-full  px-4 md:px-8 lg:px-16 min-h-[600px] flex items-center justify-center">
        <div className="w-full max-w-7xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.015)] border border-gray-100/50 bg-white rounded-[24px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT PANEL: INTERACTIVE CONTACT FORM */}
            <div className="p-8 md:py-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-8">
                Contact
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="E.g Mark"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full h-14 px-4 bg-gray-100 border border-stone-200 rounded-[12px] text-gray-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400/60 focus:border-stone-400/60 transition-all text-[15px]"
                  />
                </div>

                {/* Email Address Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="E.g Foody@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-14 px-4 bg-gray-100 border border-stone-200 rounded-[12px] text-gray-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400/60 focus:border-stone-400/60 transition-all text-[15px]"
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
                    required
                    rows={5}
                    placeholder="E.g Tell us what you'd like us to help with"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-4 bg-gray-100 border border-stone-200 rounded-[12px] text-gray-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400/60 focus:border-stone-400/60 transition-all text-[15px]"
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

            {/* RIGHT PANEL: VISUAL HERO FRAME IMAGE */}
            <div className="relative min-h-[400px] lg:min-h-full w-full bg-[#f2e6d9] hidden lg:flex">
              <Image
                src="/assets/contact.jpg" 
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
