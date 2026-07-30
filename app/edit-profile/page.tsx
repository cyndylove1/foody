"use client";

import Button from "@/app/components/button";
import ShopNavbar from "@/app/components/ui/shopNavbar";
import CustomInput from "../components/customInput";
import AvatarUpload from "../components/ui/avatarUpload"; 
import { useState, useEffect } from "react";
import { useProfile } from "../hooks/useProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

export default function EditProfile() {
  const queryClient = useQueryClient();
  const { data: userDetails, isLoading: isFetching } = useProfile();

  // Text Inputs State
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  // Image Mutation Handling Trackers
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAvatarRemoved, setIsAvatarRemoved] = useState(false);

  useEffect(() => {
    if (userDetails) {
      setFormData({
        first_name: userDetails.first_name || "",
        last_name: userDetails.last_name || "",
        email: userDetails.email || "",
        phone: userDetails.phone || "",
      });
      // Reset staging states on profile reload
      setSelectedFile(null);
      setIsAvatarRemoved(false);
    }
  }, [userDetails]);

  // Profile Update Mutation
  const updateProfileMutation = useMutation({
    mutationFn: async () => {
      const token = localStorage.getItem("auth_token");

      // Use Multipart FormData to accommodate payload + images
      const dataPayload = new FormData();
      dataPayload.append("first_name", formData.first_name);
      dataPayload.append("last_name", formData.last_name);
      dataPayload.append("email", formData.email);
      dataPayload.append("phone", formData.phone);

      // Append standard file payload structural transformations
      if (selectedFile) {
        dataPayload.append("avatar", selectedFile);
      } else if (isAvatarRemoved) {
        // Sends indicator string/null based on backend configurations
        dataPayload.append("avatar", "");
      }

      const response = await apiClient.put("/auth/profile", dataPayload, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "multipart/form-data",
          "x-show-toast": "true",
        },
      });
      return response.data;
    },
    onSuccess: (resData) => {
      // Dynamic fallback mapping reading from backend "data" structure
      const freshUserData = resData.data || resData;
      queryClient.setQueryData(["user-profile"], freshUserData);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateProfileMutation.mutate();
  };

  return (
    <>
      <ShopNavbar />
      <section className="bg-white px-4 md:px-0">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center gap-6 py-12 md:m-auto md:w-[755px] md:items-center md:px-16 md:py-12"
        >
          <h1 className="h1 md:self-start text-[20px] font-bold">
            Edit details
          </h1>

          {/* New External Image Upload Section Component */}
          <AvatarUpload
            firstName={formData.first_name}
            avatarUrl={userDetails?.avatar || null}
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

          {/* Inputs */}
          <div className="flex w-full flex-col gap-6">
            <div>
              <CustomInput
                label="First name"
                name="first_name"
                placeholder="Enter your First Name"
                required={true}
                value={formData.first_name}
                onChange={handleInputChange}
                disabled={isFetching || updateProfileMutation.isPending}
              />
            </div>
            <div>
              <CustomInput
                label="Last name"
                name="last_name"
                placeholder="Enter your Last Name"
                required={true}
                value={formData.last_name}
                onChange={handleInputChange}
                disabled={isFetching || updateProfileMutation.isPending}
              />
            </div>
            <div>
              <CustomInput
                label="Email"
                name="email"
                placeholder="Enter your Email"
                required={true}
                value={formData.email}
                onChange={handleInputChange}
                disabled={isFetching || updateProfileMutation.isPending}
              />
            </div>
            <div>
              <CustomInput
                label="Phone number"
                name="phone"
                placeholder="Enter your Phone number"
                required={true}
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isFetching || updateProfileMutation.isPending}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="primary"
              disabled={updateProfileMutation.isPending}
            >
              {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
