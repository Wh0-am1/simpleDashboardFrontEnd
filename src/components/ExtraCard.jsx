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
        position: "relative",
        textAlign: "center",
        display: "flex",
        bgcolor: "#660B8C",
        flexDirection: "column",
        color: "white",
        gap: 1,
      }}
    >
      <Box>
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
