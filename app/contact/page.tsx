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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted Data:", formData);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFDF7]">

      <Navbar />

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Yellow glow - top left */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow - right side */}
      <div className="pointer-events-none absolute -right-40 top-[25%] h-[520px] w-[520px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow - bottom center/right */}
      <div className="pointer-events-none absolute bottom-0 right-[15%] h-[420px] w-[420px] rounded-full bg-[#F47C20]/16 blur-3xl" />

      {/* Small yellow decorative shape */}
      <div className="pointer-events-none absolute right-[18%] top-32 hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring */}
      <div className="pointer-events-none absolute left-[4%] top-[48%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange decorative circle */}
      <div className="pointer-events-none absolute bottom-32 left-[18%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* =========================================================
          CONTACT AREA
      ========================================================= */}

      <div className="relative z-10 mt-10 flex w-full items-center justify-center py-[5rem] mt-20 md:mt-24 lg:min-h-[720px] lg:py-24">

        <div className="relative w-full max-w-7xl mx-auto lg:px-12 px-4 md:px-10">

          {/* Soft background glow behind card */}
          <div className="pointer-events-none absolute -inset-4 rounded-[42px] bg-[#00864A]/5 blur-2xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* =================================================
                  CONTACT FORM
              ================================================= */}

              <div className="relative flex flex-col justify-center overflow-hidden p-6 sm:p-8 md:p-12 lg:p-14 xl:p-16">

                {/* Small decorative glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F9C51C]/15 blur-3xl" />

                <div className="relative z-10">

                  {/* Badge */}

                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-bold text-[#00864A]">

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9C51C]">
                      <span className="h-2 w-2 rounded-full bg-[#00864A]" />
                    </span>

                    <span>Get In Touch</span>

                  </div>

                  {/* Heading */}

                  <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#151515] sm:text-5xl lg:text-[52px]">

                    Let's Talk About
                    <br />

                    <span className="text-[#00864A]">
                      Your Grocery Needs.
                    </span>

                  </h2>

                  {/* Yellow underline */}

                  <div className="relative mt-6 h-4 w-40">

                    <div className="absolute left-0 top-0 h-2 w-32 rounded-full bg-[#F9C51C]" />

                    <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />

                  </div>

                  <p className="mt-6 max-w-xl text-base leading-7 text-[#52606D] sm:text-lg">
                    Have a question about our African groceries, wholesale
                    orders, delivery, or anything else? Send us a message
                    and our team will be happy to help.
                  </p>

                  {/* Form */}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >

                    {/* Full Name */}

                    <div>
                      <CustomInput
                        label="Full name"
                        name="fullName"
                        onChange={handleChange}
                        value={formData.fullName}
                        placeholder="Enter your Full Name"
                        required={true}
                      />
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
                      />
                    </div>

                    {/* Message */}

                    <div className="flex flex-col gap-2">

                      <label
                        htmlFor="message"
                        className="text-sm font-bold text-[#151515]"
                      >
                        How can we help?
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Enter your message..."
                        className="w-full resize-none rounded-2xl border border-gray-200 bg-[#FFFDF7] p-4 text-sm text-[#151515] outline-none transition-all placeholder:text-gray-400 hover:border-[#00864A]/30 focus:border-[#00864A] focus:ring-4 focus:ring-[#00864A]/10"
                      />

                    </div>

                    {/* Terms */}

                    <p className="pt-1 text-xs leading-5 text-[#52606D]">

                      By selecting the button below, I agree to the{" "}

                      <span className="font-semibold text-[#00864A]">
                        Terms and Conditions
                      </span>{" "}
                      provided by Foody.

                    </p>

                    {/* Button */}

                    <Button
                      variant="primary"
                      className="!mt-2 w-full !rounded-2xl !py-4 !font-bold"
                    >
                      Submit Message
                    </Button>

                  </form>

                </div>
              </div>

              {/* =================================================
                  IMAGE SIDE
              ================================================= */}

              <div className="relative hidden min-h-[650px] overflow-hidden lg:block">

                {/* Image */}

                <Image
                  src="/assets/grocery9.jpg"
                  alt="African groceries"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Soft white overlay */}
                <div className="absolute inset-0 bg-white/5" />

                {/* Green translucent decoration */}

                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-[#00864A]/25" />

                {/* Yellow circle */}

                <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-[#F9C51C]/90 shadow-xl" />

                {/* Orange decorative shape */}

                <div className="absolute bottom-0 right-0 h-48 w-48 rounded-tl-[100px] bg-[#F47C20]/75" />

                {/* Information card */}

                <div className="absolute bottom-10 left-10 right-10">

                  <div className="rounded-[28px] border border-white/30 bg-white/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-md">

                    <div className="flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00864A]">

                        <span className="text-xl text-white">
                          ✦
                        </span>

                      </div>

                      <div>

                        <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00864A]">
                          Fresh • African • Trusted
                        </p>

                        <h3 className="mt-1 text-xl font-black text-[#151515]">
                          We're Here To Help
                        </h3>

                      </div>

                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#52606D]">
                      From everyday groceries to bulk orders, we're ready
                      to help you find exactly what you need.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Yellow bottom accent */}

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

          </div>

        </div>

      </div>

      <Footer />

    </section>
  );
}