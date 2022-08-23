import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  PaletteMode,
} from "@mui/material";
import React from "react";
import { ColorContext } from "../context";
import { getDesignTokens } from "../themes";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
        <CssBaseline enableColorScheme />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default MyApp;
