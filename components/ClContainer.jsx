"use client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/theme";

export const ClContainer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
