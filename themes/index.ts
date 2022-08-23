import { PaletteMode } from "@mui/material";
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#187DF1",
            contrastText: "#fff",
          },
          secondary: {
            main: "#ffffff",
            contrastText: "#187DF1",
          },
          warning: {
            main: "#FFB320",
          },
          success: {
            main: "#2B343B",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#187DF1",
            contrastText: "#fff",
          },
          secondary: {
            main: "#2B343B",
            contrastText: "#fff",
          },
          warning: {
            main: "#fff",
          },
          success: {
            main: "#FFB320",
          },
        }),
  },
  typography: {
    fontFamily: "Vazirmatn",
  },
  transition: {
    transform: "rotate(180deg)",
  },
});
