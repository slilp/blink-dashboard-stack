import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "layout";
import theme from "../styles/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import createEmotionCache from "styles/createEmotionCache";

type ExtendedAppProps = AppProps & {
  emotionCache?: EmotionCache;
  session: Session;
};
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
  session,
  ...appProps
}: ExtendedAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <CssBaseline />
          {["/login", "/register"].includes(appProps.router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
