// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
  },
  shape: {
    borderRadius: 8,
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ce93d8",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#c7c7c7",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
  },
  shape: {
    borderRadius: 8,
  },
});
