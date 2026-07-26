import { useState } from "react";
import CustomInput from "../customInput";
import CustomSelect from "../customSelect";
import Button from "../button";

interface Props {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phoneCountry: string;
    PhoneNumber: string;
    city: string;
    state: string;
    zipCode: string;
    description: string;
  }) => void;
}

export default function CheckoutForm({ onSubmit }: Props) {
  // Centralized form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    description: "",
  }); // Generic handler for inputs and textareas

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }; // Handler for custom select components

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const countryOptions = [
    { value: "United States", label: "United States" },
    { value: "Nigeria", label: "Nigeria" },
  ];

  const cityOptions = [
    { value: "Oshodi", label: "Oshodi" },
    { value: "Apapa", label: "Apapa" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneCountry: formData.phoneCountry,
      PhoneNumber: formData.phoneNumber,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      description: formData.description,
    });
  };

  return (
    <div className="pt-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* First Name & Last Name */}
        <div className="">
          <CustomInput
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your First Name"
            required={true}
          />
        </div>
        <div>
          <CustomInput
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your Last Name"
            required={true}
          />
        </div>
        {/* Email & Phone Number */}
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
        {/* City, Country & Zip Code */}
        <div>
          <CustomSelect
            label="Select City"
            value={formData.city}
            options={cityOptions}
            onChange={(val) => handleSelectChange("city", val)}
            required={true}
          />
        </div>
        <div>
          <CustomSelect
            label="Select Country"
            value={formData.country}
            options={countryOptions}
            onChange={(val) => handleSelectChange("country", val)}
            required={true}
          />
        </div>
        <div>
          <CustomInput
            label="Address"
            name="address"
            value={formData.address }
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>
        <div>
          <CustomInput
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Enter your Zip Code"
          />
        </div>

        {/* Description Textarea */}
        <div className="">
          <label
            htmlFor="description"
            className="text-xs font-semibold text-gray-600"
          >
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a description..."
            className="w-full p-3 bg-white border-[1px] border-[#d8dadc] rounded-[8px] text-sm text-black focus:outline-none focus:ring-1 transition-all placeholder-[#6b7280] resize-none"
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-end py-6">
          <Button variant="primary">Save & Continue</Button>
        </div>
      </form>
    </div>
  );
}
