import { Theme } from "@mui/material";

function Input(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  };
}
export default Input;
