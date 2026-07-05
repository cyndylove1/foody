"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useProfile } from "@/app/hooks/useProfile";

interface AvatarUploadProps {
  firstName: string;
  avatarUrl: string | null;
  selectedFile: File | null;
  isRemoved: boolean;
  onFileChange: (file: File | null) => void;
  onRemove: () => void;
}

export default function AvatarUpload({
  firstName,
  avatarUrl,
  selectedFile,
  isRemoved,
  onFileChange,
  onRemove,
}: AvatarUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const { data: userDetails } = useProfile();

  // Handle object URL creation and cleanup for memory management
  useEffect(() => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (avatarUrl && !isRemoved) {
      setPreviewUrl(avatarUrl);
    } else {
      setPreviewUrl("");
    }
  }, [selectedFile, avatarUrl, isRemoved]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center gap-6 w-full md:self-start border-b border-gray-100 pb-6">
      {/* Left side: Avatar Circle */}
      <div className="relative h-[108px] w-[108px] flex-shrink-0">
        {previewUrl ? (
          <Image
            className="h-[108px] w-[108px] rounded-full object-cover ring-4 ring-orange-500/10 border border-gray-200"
            src={previewUrl}
            width={108}
            height={108}
            alt="profile image"
          />
        ) : (
          <div className="h-[108px] w-[108px] rounded-full bg-(--color) border border-stone-300 flex items-center justify-center text-2xl font-bold text-white">
            {userDetails?.first_name
              ? userDetails.first_name.charAt(0).toUpperCase()
              : "U"}
          </div>
        )}
      </div>

      {/* Right side: Styled Buttons Layout */}
      <div className="flex flex-col gap-2.5 items-start">
        <h3 className="text-sm font-semibold text-gray-800">Profile Picture</h3>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-lg bg-(--main) px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#d63f26] active:scale-95"
          >
            {previewUrl ? "Change Image" : "Upload Image"}
          </button>

          {previewUrl && (
            <button
              type="button"
              onClick={onRemove}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-red-600 shadow-sm transition-all hover:bg-red-50 hover:border-red-200 active:scale-95"
            >
              Remove
            </button>
          )}
        </div>
        <p className="text-[11px] text-gray-500">JPG, PNG or WEBP. Max 2MB.</p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
