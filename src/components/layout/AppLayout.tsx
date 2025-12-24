// components/layout/AppLayout.tsx
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Sidebar } from "./Sidebar";

const drawerWidth = 240;

export const AppLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Top AppBar */}
      <AppBar />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
          ml: `${drawerWidth}px`, // space for permanent drawer
        }}
      >
        {/* Toolbar spacing so content starts below AppBar */}
        <Toolbar />
        {/* Page content rendered here via react-router Outlet */}
        <Outlet />
      </Box>
    </Box>
  );
};
