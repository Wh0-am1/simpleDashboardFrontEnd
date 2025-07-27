import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function ScheduleCard({ serial, text, price }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            p: 1,
            borderRadius: 10,
            border: "4px solid #D6D6D6",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            {serial > 9 ? serial : "0" + serial}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">{text.title}</Typography>
          <Typography
            sx={{
              color: "gray",
            }}
          >
            {text.sub}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Icon icon="streamline-block:money-coin" width="16" height="16" />
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );
}
