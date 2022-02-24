import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../lib/theme";
import * as S from "../styles/global.styled";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <S.Root id="root">
        <Header />

        <S.Body>
          <Component {...pageProps} />
        </S.Body>

        <Footer />
      </S.Root>
    </ThemeProvider>
  );
}

export default App;
