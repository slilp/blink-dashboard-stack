import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "layout";
import theme from "../styles/theme";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {["/login", "/register"].includes(appProps.router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}
