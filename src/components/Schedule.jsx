import { Box, Typography } from "@mui/material";
import React from "react";
import ScheduleCard from "./ScheduleCard";

export default function Schedule() {
  const data = [
    {
      serial: 1,
      text: {
        title: "UI/UX Design",
        sub: "figma designing",
      },
      price: 1400,
    },
    {
      serial: 2,
      text: {
        title: "Full Stack Engineer",
        sub: "Backend and fronted Development",
      },
      price: 2000,
    },
    {
      serial: 3,
      text: {
        title: "Tester",
        sub: "Testing Give application",
      },
      price: 1200,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
          }}
        >
          Schedule
        </Typography>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          See more
        </Typography>
      </Box>
      {data.map((e) => (
        <ScheduleCard
          serial={e.serial}
          text={e.text}
          price={e.price}
          key={e.serial}
        />
      ))}
    </Box>
  );
}
