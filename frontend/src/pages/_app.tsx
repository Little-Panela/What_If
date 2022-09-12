// import '../styles/globals.css'
import { ThemeProvider } from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/theme/default";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="">
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
