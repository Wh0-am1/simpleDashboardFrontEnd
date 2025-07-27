import { Box } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCards";
import ProgressMain from "./ProgressMain";

export default function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        px: 2,
      }}
    >
      <ProgressMain />
      <ChannelCard />
    </Box>
  );
}
