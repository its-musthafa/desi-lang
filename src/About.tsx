import React from "react";
import { Box, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffebee",
        minHeight: "100vh",
        width: "100vw", // Full viewport width
        padding: "16px",
        boxSizing: "border-box", // Include padding in width calculation
      }}
    >
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography>Content for the About page goes here.</Typography>
    </Box>
  );
};

export default About;
