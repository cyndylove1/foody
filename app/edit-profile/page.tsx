"use client";

import Button from "@/app/components/button";
import ShopNavbar from "@/app/components/ui/shopNavbar";
import CustomInput from "../components/customInput";
import AvatarUpload from "../components/ui/avatarUpload";

import { useState, useEffect } from "react";
import { useProfile } from "../hooks/useProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

import {
  User,
  Mail,
  Phone,
  Store,
  Sparkles,
  ShieldCheck,
  Save,
  ArrowLeft,
} from "lucide-react";

import Link from "next/link";

export default function EditProfile() {
  const queryClient = useQueryClient();

  const {
    data: userDetails,
    isLoading: isFetching,
  } = useProfile();

  // ==========================================================
  // FORM STATE
  // ==========================================================

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    customer_type: "",
  });

  // ==========================================================
  // AVATAR STATE
  // ==========================================================

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [isAvatarRemoved, setIsAvatarRemoved] =
    useState(false);

  // ==========================================================
  // LOAD USER DETAILS
  // ==========================================================

  useEffect(() => {
    if (userDetails) {
      setFormData({
        first_name: userDetails.first_name || "",
        last_name: userDetails.last_name || "",
        email: userDetails.email || "",
        phone: userDetails.phone || "",
        customer_type: userDetails.customer_type || "",
      });

      setSelectedFile(null);
      setIsAvatarRemoved(false);
    }
  }, [userDetails]);

  // ==========================================================
  // PROFILE UPDATE MUTATION
  // ==========================================================

  const updateProfileMutation = useMutation({
    mutationFn: async () => {
      const token = localStorage.getItem("auth_token");

      const dataPayload = new FormData();

      dataPayload.append(
        "first_name",
        formData.first_name
      );

      dataPayload.append(
        "last_name",
        formData.last_name
      );

      dataPayload.append(
        "email",
        formData.email
      );

      dataPayload.append(
        "phone",
        formData.phone
      );

      dataPayload.append(
        "customer_type",
        formData.customer_type
      );

      // ======================================================
      // AVATAR
      // ======================================================

      if (selectedFile) {
        dataPayload.append(
          "avatar",
          selectedFile
        );
      } else if (isAvatarRemoved) {
        dataPayload.append(
          "avatar",
          ""
        );
      }

      const response = await apiClient.put(
        "/auth/profile",
        dataPayload,
        {
          headers: {
            Authorization: token
              ? `Bearer ${token}`
              : "",
            "Content-Type":
              "multipart/form-data",
            "x-show-toast": "true",
          },
        }
      );

      return response.data;
    },

    onSuccess: (resData) => {
      const freshUserData =
        resData.data || resData;

      queryClient.setQueryData(
        ["user-profile"],
        freshUserData
      );
    },
  });

  // ==========================================================
  // INPUT CHANGE
  // ==========================================================

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================================
  // SUBMIT
  // ==========================================================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    updateProfileMutation.mutate();
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7]">
      {/* ======================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Yellow glow */}

      <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow */}

      <div className="pointer-events-none absolute -right-48 top-[15%] h-[560px] w-[560px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow */}

      <div className="pointer-events-none absolute bottom-[-180px] left-[25%] h-[500px] w-[500px] rounded-full bg-[#F47C20]/15 blur-3xl" />

      {/* Yellow decorative shape */}

      <div className="pointer-events-none absolute right-[13%] top-[18%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring */}

      <div className="pointer-events-none absolute bottom-[20%] left-[4%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange circle */}

      <div className="pointer-events-none absolute bottom-[12%] right-[7%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* Large green ring */}

      <div className="pointer-events-none absolute right-[-70px] top-[42%] hidden h-44 w-44 rounded-full border-[20px] border-[#00864A]/5 lg:block" />

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <div className="relative z-50">
        <ShopNavbar />
      </div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 lg:px-12 md:px-10 lg:pb-28 pt-42">
        {/* ====================================================
            TOP HEADING
        ==================================================== */}

        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#00864A]">
            <Sparkles className="h-3.5 w-3.5" />

            Account Settings
          </div>

          <h1 className="text-3xl font-black tracking-[-0.04em] text-[#151515] sm:text-4xl">
            Edit Your{" "}
            <span className="text-[#00864A]">
              Profile
            </span>
          </h1>

          {/* Yellow underline */}

          <div className="relative mx-auto mt-4 h-4 w-32">
            <div className="absolute left-0 top-0 h-2 w-24 rounded-full bg-[#F9C51C]" />

            <div className="absolute left-10 top-3 h-1 w-16 rounded-full bg-[#F9C51C]/50" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#52606D] sm:text-base">
            Keep your personal information up to date so we
            can provide you with a smoother grocery shopping
            experience.
          </p>
        </div>

        {/* ====================================================
            MAIN PROFILE CARD
        ==================================================== */}

        <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.07)]">
          {/* Internal decorations */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F9C51C]/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-[#00864A]/10 blur-3xl" />

          <div className="pointer-events-none absolute right-[25%] bottom-10 h-20 w-20 rounded-full bg-[#F47C20]/8" />

          {/* Top accent */}

          <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />

          {/* ==================================================
              CARD CONTENT
          ================================================== */}

          <form
            onSubmit={handleSubmit}
            className="relative z-10 px-5 py-10 sm:px-8 sm:py-12 lg:px-12"
          >
            {/* =================================================
                PROFILE INTRO
            ================================================= */}

            <div className="mb-10 flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5EC]">
                <User className="h-5 w-5 text-[#00864A]" />
              </div>

              <h2 className="text-xl font-black text-[#151515]">
                Personal Details
              </h2>

              <p className="mt-1 max-w-md text-sm text-[#52606D]">
                Update your profile photo and personal
                information below.
              </p>
            </div>

            {/* =================================================
                AVATAR SECTION
            ================================================= */}

            <div className="mb-10 rounded-[28px] border border-[#E5E9E6] bg-[#FFFDF7] p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4D0]">
                  <User className="h-4 w-4 text-[#F47C20]" />
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#151515]">
                    Profile Photo
                  </h3>

                  <p className="text-xs text-[#52606D]">
                    Choose a photo that represents you.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#00864A]/10 bg-white p-4">
                <AvatarUpload
                  firstName={formData.first_name}
                  avatarUrl={
                    userDetails?.avatar || null
                  }
                  selectedFile={selectedFile}
                  isRemoved={isAvatarRemoved}
                  onFileChange={(file) => {
                    setSelectedFile(file);
                    setIsAvatarRemoved(false);
                  }}
                  onRemove={() => {
                    setSelectedFile(null);
                    setIsAvatarRemoved(true);
                  }}
                />
              </div>
            </div>

            {/* =================================================
                FORM INPUTS
            ================================================= */}

            <div className="mb-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5EC]">
                  <User className="h-4 w-4 text-[#00864A]" />
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#151515]">
                    Account Information
                  </h3>

                  <p className="text-xs text-[#52606D]">
                    Make sure your details are correct.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* First Name */}

                <div className="rounded-2xl border border-[#E5E9E6] bg-[#FFFDF7] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <User className="h-4 w-4 text-[#00864A]" />

                    <span className="text-xs font-bold text-[#52606D]">
                      First Name
                    </span>
                  </div>

                  <CustomInput
                    label="First name"
                    name="first_name"
                    placeholder="Enter your First Name"
                    required={true}
                    value={formData.first_name}
                    onChange={handleInputChange}
                    disabled={
                      isFetching ||
                      updateProfileMutation.isPending
                    }
                  />
                </div>

                {/* Last Name */}

                <div className="rounded-2xl border border-[#E5E9E6] bg-[#FFFDF7] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <User className="h-4 w-4 text-[#00864A]" />

                    <span className="text-xs font-bold text-[#52606D]">
                      Last Name
                    </span>
                  </div>

                  <CustomInput
                    label="Last name"
                    name="last_name"
                    placeholder="Enter your Last Name"
                    required={true}
                    value={formData.last_name}
                    onChange={handleInputChange}
                    disabled={
                      isFetching ||
                      updateProfileMutation.isPending
                    }
                  />
                </div>

                {/* Email */}

                <div className="rounded-2xl border border-[#E5E9E6] bg-[#FFFDF7] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#00864A]" />

                    <span className="text-xs font-bold text-[#52606D]">
                      Email Address
                    </span>
                  </div>

                  <CustomInput
                    label="Email"
                    name="email"
                    placeholder="Enter your Email"
                    required={true}
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={
                      isFetching ||
                      updateProfileMutation.isPending
                    }
                  />
                </div>

                {/* Phone */}

                <div className="rounded-2xl border border-[#E5E9E6] bg-[#FFFDF7] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#00864A]" />

                    <span className="text-xs font-bold text-[#52606D]">
                      Phone Number
                    </span>
                  </div>

                  <CustomInput
                    label="Phone number"
                    name="phone"
                    placeholder="Enter your Phone number"
                    required={true}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={
                      isFetching ||
                      updateProfileMutation.isPending
                    }
                  />
                </div>

                {/* Customer Type */}

                <div className="rounded-2xl border border-[#E5E9E6] bg-[#FFFDF7] p-4 md:col-span-2">
                  <div className="mb-3 flex items-center gap-2">
                    <Store className="h-4 w-4 text-[#00864A]" />

                    <span className="text-xs font-bold text-[#52606D]">
                      Customer Type
                    </span>
                  </div>

                  <CustomInput
                    label="Customer Type"
                    name="customer_type"
                    placeholder="Enter your Customer type"
                    required={true}
                    value={formData.customer_type}
                    onChange={handleInputChange}
                    disabled={
                      isFetching ||
                      updateProfileMutation.isPending
                    }
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                SECURITY NOTE
            ================================================= */}

            <div className="mb-8 flex items-start gap-3 rounded-2xl border border-[#00864A]/10 bg-[#EAF5EC] p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
                <ShieldCheck className="h-4 w-4 text-[#00864A]" />
              </div>

              <div>
                <p className="text-sm font-black text-[#151515]">
                  Your information is protected
                </p>

                <p className="mt-1 text-xs leading-5 text-[#52606D]">
                  Your account information is used to manage
                  your orders, deliveries, and shopping
                  experience.
                </p>
              </div>
            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Back */}

              <Link
                href="/profile"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00864A]/15 bg-[#FFFDF7] px-5 py-3 text-sm font-bold text-[#52606D] transition-all hover:border-[#00864A]/30 hover:text-[#00864A]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Profile
              </Link>

              {/* Save */}

              <Button
                type="submit"
                variant="primary"
                disabled={
                  isFetching ||
                  updateProfileMutation.isPending
                }
                className="!rounded-xl !px-7 !font-black"
              >
                <span className="flex items-center justify-center gap-2">
                  <Save className="h-4 w-4" />

                  {updateProfileMutation.isPending
                    ? "Saving..."
                    : "Save Changes"}
                </span>
              </Button>
            </div>
          </form>

          {/* Bottom green accent */}

          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#00864A]" />
        </div>

        {/* ====================================================
            SMALL BOTTOM MESSAGE
        ==================================================== */}

        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[#52606D]">
          <ShieldCheck className="h-3.5 w-3.5 text-[#00864A]" />

          <span>
            Keep your profile information accurate for a
            better shopping experience.
          </span>
        </div>
      </section>

      {/* ======================================================
          BOTTOM PAGE ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />
    </main>
  );
}