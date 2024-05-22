"use client";

import { ThemeProvider, createTheme } from "@mui/system";

import tailwindConfig from "../tailwind.config"; // Adjust the path as per your Tailwind config file location


const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.dark.primary,
    },
  },
});
export function MuiThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
