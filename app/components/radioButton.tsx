import * as React from 'react';
import Radio from '@mui/material/Radio';

interface Props {
  checked: boolean;
  onChange: () => void;
}

export default function RadioButton({ checked, onChange }: Props) {
  return (
    <Radio
      checked={checked}
      onChange={onChange}
      disableRipple
      sx={{
        padding: 0,
        margin: 0,

        "& .MuiSvgIcon-root": {
          color: "#BABABA",
        },

        "&.Mui-checked .MuiSvgIcon-root": {
          color: "#c02b29",
        },
      }}
    />
  );
}
