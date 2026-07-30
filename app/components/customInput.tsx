"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  name?: string;
  value?: string;
  height?: string | number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  required = false,
  type = "text",
  name,
  value,
  height = "46px",
  disabled = false,
  onChange,
}) => {
  const jakartaFont = "'Plus Jakarta Sans', sans-serif";

  // Local state to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  // Determine the actual type of the HTML input dynamically
  const isPasswordType = type === "password";
  const inputType = isPasswordType
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <TextField
        name={name}
        value={value}
        required={required}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        type={inputType}
        onChange={onChange}
        fullWidth
        variant="outlined"
        slotProps={{
          inputLabel: {
            shrink: type === "date" ? true : undefined,
          },
          // Inject the end adornment (eye icon) inside slotProps for newer MUI versions
          input: {
            endAdornment: isPasswordType ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  disabled={disabled}
                  sx={{ color: "#6b7280", mr: 0.5 }}
                >
                  {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                </IconButton>
              </InputAdornment>
            ) : undefined,
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            height: height,
            borderRadius: "8px",
            fontFamily: jakartaFont,
            // backgroundColor: disabled ? "#f3f4f6" : "#fff",
          },
          "& .MuiInputBase-input": {
            color: disabled ? "#9ca3af" : "#111827",
            fontSize: "0.875rem",
            fontFamily: jakartaFont,
            "&::placeholder": {
              fontFamily: jakartaFont,
              fontSize: "0.75rem",
              opacity: 0.7,
              color: "#9ca3af",
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: jakartaFont,
            fontSize: "0.85rem",
            color: disabled ? "#9ca3af" : "#6b7280",
            "&.Mui-focused, &.MuiFormLabel-filled": {
              color: "#000",
              fontSize: "0.89rem",
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#d8dadc",
            },
            "&:hover fieldset": {
              borderColor: disabled ? "#d8dadc" : "#016738",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#016738",
              borderWidth: "2px",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
