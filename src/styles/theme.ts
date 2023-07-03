import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { Theme, createTheme } from "@mui/material/styles";
import { deepOrange, green, grey, red } from "@mui/material/colors";
import OverridesComponents from "./overrides";

export const rubikFont = localFont({
  src: [
    {
      path: "../../public/fonts/Rubik/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik/Rubik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

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

const COMMON_STYLES = {
  primary: {
    main: "#087EA4",
    light: "#cde5ec",
    dark: "#077193",
  },
};

const DARK_STYLES = {
  ...COMMON_STYLES,
  text: {
    primary: "#ffffff",
    secondary: grey[500],
  },
  background: {
    default: "#161C24",
    paper: "#212B36",
  },
};

const LIGHT_STYLES = {
  ...COMMON_STYLES,
};

export default (mode: "dark" | "light") => {
  const selectedPalette = mode === "dark" ? DARK_STYLES : LIGHT_STYLES;

  const theme: any = createTheme({
    palette: {
      mode,
      ...selectedPalette,
    },
    typography: {
      fontFamily: kanitFont.style.fontFamily,
    },
  });

  theme.components = OverridesComponents(theme);

  return theme;
};
