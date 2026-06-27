"use client";

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
  name?: string;
  value?: string;
  height?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  required = false,
  type = "text",
  defaultValue = "",
  name,
  value,
  height = "46px",
  onChange,
}) => {
  const jakartaFont = "'Plus Jakarta Sans', sans-serif";

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <TextField
        name={name}
        value={value}
        required={required}
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
        fullWidth
        variant="outlined"
        slotProps={{
          inputLabel: {
            shrink: type === "date" ? true : undefined,
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            height: height,
            borderRadius: "8px",
            fontFamily: jakartaFont,
            backgroundColor: "#fff",
          },
          "& .MuiInputBase-input": {
            color: "#111827",
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
            color: "#6b7280",
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
              borderColor: "#c02b29",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#c02b29",
              borderWidth: "2px",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
