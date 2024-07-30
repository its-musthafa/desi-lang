import React from "react";
import { Box, Typography } from "@mui/material";

const Documentation: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f8e9",
        minHeight: "100vh",
        width: "100vw", // Full viewport width
        padding: "16px",
        boxSizing: "border-box", // Include padding in width calculation
      }}
    >
      <Typography variant="h4" gutterBottom>
        Documentation
      </Typography>
      <Typography>Content for the Documentation page goes here.</Typography>
    </Box>
  );
};

export default Documentation;
