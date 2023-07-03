import { GlobalStyles } from "@mui/material";

export default function MuiGlobalStyles() {
  return (
    <GlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          oadding: 0,
          width: "100%",
          height: "100%",
        },
        body: {
          margin: 0,
          oadding: 0,
          width: "100%",
          height: "100%",
        },
        a: {
          textDecoration: "none",
        },
      }}
    />
  );
}
