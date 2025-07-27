import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";

export default function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        alt="img"
        sx={{
          width: 80,
          height: 80,
        }}
      />
      <Typography
        sx={{
          fontWeight: "700",
        }}
      >
        Robert Carlose
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.2rem",
        }}
      >
        <Icon icon="emojione:star" width="16" height="16" />
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
          }}
        >
          4.3
        </Typography>
      </Box>
    </Box>
  );
}
