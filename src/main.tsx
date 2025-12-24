import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext.tsx";
import { CssBaseline } from "@mui/material";

import { AppRoutes } from "./routes/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
