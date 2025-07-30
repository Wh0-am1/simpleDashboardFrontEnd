import { Icon } from "@iconify/react";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function ExtraCard() {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4.2,
        borderRadius: 4,
        // position: "absolute",
        textAlign: "center",
        display: "flex",
        bgcolor: "#660B8C",
        flexDirection: { sx: "row", lg: "column" },
        color: "white",
        gap: 1,
        // right: 0,
        // bottom: 0,
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", lg: "block" },
          gap: { xs: 1, lg: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Full
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Seats
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            color: "black",
            borderRadius: 30,
            m: 0,
            p: 0,
          }}
        >
          <Icon icon="mingcute:right-fill" width="15" height="15" />
        </Box>
      </Typography>
    </Paper>
  );
}
