import { useAppSelector } from "redux/hook";
import themeMode from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./globalStyles";
import { useRouter } from "next/router";

const AppThemeProvider = ({
  children,
  isMainLayout,
}: {
  children: React.ReactNode;
  isMainLayout: boolean;
}) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const router = useRouter();
  const themeSelected = themeMode(isMainLayout ? darkMode.theme : "light");

  return (
    <ThemeProvider theme={themeSelected}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
