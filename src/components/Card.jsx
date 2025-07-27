import { Icon } from "@iconify/react";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function Card({ title, def, val }) {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: 4,
        position: "relative",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        color: "#432457",
        gap: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -13,
          right: 54,
        }}
      >
        <Icon icon="material-symbols:add-reaction" width="35" height="35" />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "gray",
          }}
        >
          {def}
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
        }}
      >
        {val > 0 ? `+${val}%` : `${val}%`}
      </Typography>
    </Paper>
  );
}
