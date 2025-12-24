import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Sidebar } from "./Sidebar";

const drawerWidth = 240;

export const AppLayout = () => {
  return (
    <>
      <AppBar position="fixed" />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          mt: "64px", // AppBar height
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
