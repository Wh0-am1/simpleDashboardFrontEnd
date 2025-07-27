import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import ExtraCard from "./ExtraCard";

export default function ChannelCards() {
  const data = [
    {
      title: "Card1",
      def: "definition",
      val: -2,
    },
    {
      title: "Card2",
      def: "definition",
      val: 2,
    },
    {
      title: "Card3",
      def: "definition",
      val: 8,
    },
    {
      title: "Card4",
      def: "definition",
      val: -7,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "1rem",
        bgcolor: "#EDEDED",
        position: "relative",
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#8638B0",
          }}
        >
          Channels
        </Typography>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          Paths for communication or transmission
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mr: 11,
        }}
      >
        {data.map((e, i) => (
          <Card title={e.title} val={e.val} def={e.def} key={i} />
        ))}
        <Box
          sx={{
            position: "absolute",
            right: -30,
          }}
        >
          <ExtraCard />
        </Box>
      </Box>
    </Box>
  );
}
