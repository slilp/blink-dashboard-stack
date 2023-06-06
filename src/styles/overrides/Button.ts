import { ButtonProps, Theme } from "@mui/material";

function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ state }: { state: ButtonProps }) => ({
          borderRadius: "12px",
          padding: "0.5rem",
        }),
      },
    },
  };
}
export default Button;
