import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "views/layout";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
