import { Theme } from "@mui/material";

function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
          borderRadius: "12px",
          padding: "16px",
        },
      },
    },
  };
}
export default Card;
