import React from "react";
import { Box, Typography } from "@mui/material";

const PlayGround: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        width: "100vw", // Full viewport width
        padding: "16px",
        boxSizing: "border-box", // Include padding in width calculation
      }}
    >
      <Typography variant="h4" gutterBottom>
        Play Ground
      </Typography>
      <Typography>Content for the Play Ground page goes here.</Typography>
    </Box>
  );
};

export default PlayGround;
