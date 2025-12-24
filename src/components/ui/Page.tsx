// src/components/ui/Page.tsx
import { Box, Typography } from "@mui/material";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

export const Page = ({ title, children }: PageProps) => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    {children}
  </Box>
);
