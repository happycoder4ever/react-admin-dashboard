// components/layout/AppBar.tsx
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "../../theme/ThemeContext";

export const AppBar = () => {
  // Get current theme mode and toggle function
  const { mode, toggleTheme } = useThemeContext();

  return (
    <MuiAppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        {/* Left side: dashboard title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Dashboard
        </Typography>

        {/* Right side: theme toggle button */}
        <Box>
          <IconButton color="inherit" onClick={toggleTheme}>
            {/* Show sun or moon depending on current mode */}
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
