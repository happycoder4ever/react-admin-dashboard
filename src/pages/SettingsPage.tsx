import {
  Box,
  Typography,
  Paper,
  Stack,
  FormControlLabel,
  Switch,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useThemeContext } from "../theme/ThemeContext";
import { Page } from "../components/ui/Page";
export const SettingsPage = () => {
  // Global theme state
  const { mode, toggleTheme } = useThemeContext();

  // Local settings (mocked)
  const [notifications, setNotifications] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <Page title="Settings">
      <Box>
        <Paper sx={{ p: 3, maxWidth: 500 }}>
          <Stack spacing={2}>
            {/* Appearance */}
            <Typography variant="h6">Appearance</Typography>

            <FormControlLabel
              control={
                <Switch checked={mode === "dark"} onChange={toggleTheme} />
              }
              label="Dark mode"
            />

            <Divider />

            {/* System */}
            <Typography variant="h6">System</Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={maintenanceMode}
                  onChange={() => setMaintenanceMode((prev) => !prev)}
                />
              }
              label="Maintenance mode"
            />

            <Divider />

            {/* Notifications */}
            <Typography variant="h6">Notifications</Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={() => setNotifications((prev) => !prev)}
                />
              }
              label="Email notifications"
            />
          </Stack>
        </Paper>
      </Box>
    </Page>
  );
};
