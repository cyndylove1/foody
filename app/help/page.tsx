"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { faqData } from "../constant";
import Title from "../components/title";

export default function Help() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#FFFDF7]">
        <Navbar />

        {/* =========================================================
            BACKGROUND DECORATIONS
        ========================================================= */}

        {/* Yellow glow - top left */}
        <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

        {/* Green glow - top/right */}
        <div className="pointer-events-none absolute -right-40 top-[20%] h-[520px] w-[520px] rounded-full bg-[#00864A]/12 blur-3xl" />

        {/* Orange glow - bottom/right */}
        <div className="pointer-events-none absolute bottom-0 right-[12%] h-[420px] w-[420px] rounded-full bg-[#F47C20]/15 blur-3xl" />

        {/* Small yellow decorative shape */}
        <div className="pointer-events-none absolute right-[16%] top-36 hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

        {/* Green ring - left */}
        <div className="pointer-events-none absolute left-[4%] top-[45%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

        {/* Orange circle */}
        <div className="pointer-events-none absolute bottom-28 left-[15%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

        {/* Green decorative ring - right */}
        <div className="pointer-events-none absolute right-[4%] bottom-[18%] hidden h-36 w-36 rounded-full border-[18px] border-[#00864A]/5 lg:block" />

        {/* =========================================================
            HELP / FAQ SECTION
        ========================================================= */}

            <div className="relative z-10 mx-auto max-w-7xl mt-[10rem] pb-20 md:mt-42 lg:mt-[12rem] lg:pb-28 px-4 md:px-10 lg:px-12">

          {/* Header */}
          <div className="mb-10  text-center sm:mb-12">

            {/* Existing Title */}
            <div className="flex justify-center">
              <Title
                text="Help and FAQ"
                className="items-center pt-0 pb-0"
              />
            </div>

            {/* Yellow underline */}
            <div className="relative mx-auto mt-4 h-4 w-40">
              <div className="absolute left-0 top-0 h-2 w-32 rounded-full bg-[#F9C51C]" />
              <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#52606D] sm:text-lg">
              Find answers to common questions about our African groceries,
              orders, deliveries, wholesale purchases, and more.
            </p>
          </div>

          {/* FAQ Container */}
          <div className="relative mx-auto w-full max-w-5xl">

            {/* Soft green glow behind card */}
            <div className="pointer-events-none absolute -inset-4 rounded-[42px] bg-[#00864A]/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.07)]">

              {/* Small top accent */}
              <div className="h-2 w-full bg-[#F9C51C]" />

              <div className="p-5 sm:p-8 md:p-12 lg:p-14">

                <div className="flex flex-col">
                  {faqData.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                      <div
                        key={item.id}
                        className="border-b border-gray-200 last:border-b-0"
                      >

                        <button
                          type="button"
                          onClick={() => toggleFaq(item.id)}
                          className="group flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left focus:outline-none sm:py-7"
                        >

                          {/* Question */}
                          <span
                            className={`text-[16px] font-bold tracking-tight transition-colors duration-200 sm:text-[18px] ${
                              isOpen
                                ? "text-[#00864A]"
                                : "text-[#151515] group-hover:text-[#00864A]"
                            }`}
                          >
                            {item.question}
                          </span>

                          {/* Plus Icon */}
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 ${
                              isOpen
                                ? "border-[#00864A] bg-[#00864A]"
                                : "border-[#00864A]/10 bg-[#EAF5EC] group-hover:border-[#00864A]/30"
                            }`}
                          >
                            <Plus
                              className={`h-5 w-5 transition-transform duration-300 ${
                                isOpen
                                  ? "rotate-45 text-white"
                                  : "text-[#00864A]"
                              }`}
                            />
                          </div>

                        </button>

                        {/* Answer */}
                        <div
                          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="pb-6 pr-10 sm:pb-7 sm:pr-16">
                              <p className="max-w-4xl text-[14px] leading-7 text-[#52606D] sm:text-[15px]">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bottom accent */}
              <div className="h-2 w-full bg-[#00864A]" />

            </div>
          </div>

          {/* Bottom Help Card */}
          <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-[30px] border border-[#F9C51C]/30 bg-[#FFF4D0] p-6 sm:mt-12 sm:p-8">

            {/* Decorative orange circle */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F47C20]/10" />

            <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00864A]">
                  Still Need Help?
                </p>

                <h3 className="mt-2 text-xl font-black text-[#151515] sm:text-2xl">
                  We’re happy to help you.
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#52606D]">
                  If you couldn't find the answer you're looking for,
                  feel free to contact our team.
                </p>
              </div>

              <a
                href="/contact"
                className="shrink-0 rounded-2xl bg-[#00864A] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(0,134,74,0.18)] transition-all duration-200 hover:bg-[#006F3D]"
              >
                Contact Us
              </a>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}