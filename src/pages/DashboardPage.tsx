import { Box, Paper, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonOffIcon from "@mui/icons-material/PersonOff";

import { Page } from "../components/ui/Page";
import { CryptoChart } from "../components/business/CryptoChart";

const stats = [
  {
    label: "Total Users",
    value: 128,
    icon: <PeopleIcon sx={{ fontSize: 64 }} />,
    bgGradient: "linear-gradient(135deg, #4e73df 0%, #224abe 100%)",
  },
  {
    label: "Total Products",
    value: 42,
    icon: <ShoppingCartIcon sx={{ fontSize: 64 }} />,
    bgGradient: "linear-gradient(135deg, #1cc88a 0%, #17a673 100%)",
  },
  {
    label: "Active Products",
    value: 36,
    icon: <InventoryIcon sx={{ fontSize: 64 }} />,
    bgGradient: "linear-gradient(135deg, #36b9cc 0%, #2c9faf 100%)",
  },
  {
    label: "Inactive Users",
    value: 12,
    icon: <PersonOffIcon sx={{ fontSize: 64 }} />,
    bgGradient: "linear-gradient(135deg, #e74a3b 0%, #be2617 100%)",
  },
];

export const DashboardPage = () => {
  return (
    <Page title="Dashboard">
      <Box
        display="flex"
        gap={3}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {stats.map((stat) => (
          <Paper
            key={stat.label}
            sx={{
              flex: "1 1 22%",
              minWidth: 220,
              p: 4,
              borderRadius: 2,
              background: stat.bgGradient,
              color: "white",
              position: "relative",
              overflow: "hidden",
              boxShadow: 4,
            }}
          >
            {/* Faint decorative bubbles */}
            <Box
              sx={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 100,
                height: 100,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.1)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: -20,
                width: 60,
                height: 60,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.08)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -20,
                right: 10,
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.05)",
                pointerEvents: "none",
              }}
            />
            <Box display="flex" alignItems="center" mb={2}>
              <Box sx={{ fontSize: 64, flex: "0 0 50%" }}>{stat.icon}</Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  flex: "1",
                  textAlign: "right",
                }}
              >
                {stat.value}
              </Typography>
            </Box>
            {/* Bottom row: label */}
            <Typography
              variant="subtitle1"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1.2,
                opacity: 0.85,
                textAlign: "center",
              }}
            >
              {stat.label}
            </Typography>
          </Paper>
        ))}
      </Box>
      <Box>
        <CryptoChart />
      </Box>
    </Page>
  );
};
