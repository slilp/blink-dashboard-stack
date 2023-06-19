import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { Theme, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import OverridesComponents from "./overrides";

export const kanitFont = localFont({
  src: [
    {
      path: "../../public/fonts/Kanit/Kanit-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.

const theme: any = createTheme({
  palette: {
    // primary: {
    //   main: "#000000",
    // },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

theme.components = OverridesComponents(theme);

export default theme;
