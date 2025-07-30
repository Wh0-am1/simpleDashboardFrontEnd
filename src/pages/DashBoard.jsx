import { Box } from "@mui/material";
import React from "react";
import Content from "../components/Content";

export default function DashBoard() {
  return (
    <Box
      sx={{
        flexGrow: "1",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Content />
    </Box>
  );
}
