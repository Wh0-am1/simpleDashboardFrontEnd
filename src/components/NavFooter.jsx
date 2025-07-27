import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function NavFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Icon icon="devicon:nestjs" width="68" height="68" />
      <Typography>Node.js backend framework</Typography>
    </Box>
  );
}
