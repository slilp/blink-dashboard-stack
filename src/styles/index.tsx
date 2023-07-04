import { useAppSelector, useAppDispatch } from "redux/hook";
import themeMode from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./globalStyles";
import { useEffect } from "react";
import { changeTheme } from "redux/darkMode";

const AppThemeProvider = ({
  children,
  isMainLayout,
}: {
  children: React.ReactNode;
  isMainLayout: boolean;
}) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const diapatch = useAppDispatch();
  const themeSelected = themeMode(isMainLayout ? darkMode.theme : "light");

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    diapatch(changeTheme(mode === "dark" ? true : false));
  }, []);

  return (
    <ThemeProvider theme={themeSelected}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
