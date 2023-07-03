import type { AppProps } from "next/app";
import ThemeProvider from "styles";
import Layout from "layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import createEmotionCache from "styles/createEmotionCache";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from "@tanstack/react-query";
import { useState } from "react";

type ExtendedAppProps = AppProps & {
  dehydratedState: DehydratedState;
  emotionCache?: EmotionCache;
  session: Session;
};
const clientSideEmotionCache = createEmotionCache();

function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
  session,
  dehydratedState,
  ...appProps
}: ExtendedAppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      })
  );
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState || null}>
          <Provider store={store}>
            <SessionProvider session={session}>
              <ThemeProvider
                isMainLayout={
                  !["/login", "/register"].includes(appProps.router.pathname)
                }
              >
                {["/login", "/register"].includes(appProps.router.pathname) ? (
                  <Component {...pageProps} />
                ) : (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                )}
              </ThemeProvider>
            </SessionProvider>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(App);
