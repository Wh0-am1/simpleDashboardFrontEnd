import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MoneyCard from "./MoneyCard";
import ChartCard from "./ChartCard";
import Schedule from "./Schedule";
import PopupCard from "./PopupCard";
import { Icon } from "@iconify/react";

export default function ProgressMain() {
  return (
    <Box>
      <Grid container spacing={10}>
        <Grid
          size={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h3">Dashbaord</Typography>
              <Typography>Welcome back buddy</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Icon icon="mdi:bell" width="24" height="24" />
              <Icon icon="mdi:settings" width="24" height="24" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MoneyCard PROFIT val={950.013} />
            <MoneyCard val={350.11} />
          </Box>
        </Grid>
        <Grid size={6}>
          <PopupCard />
        </Grid>
        <Grid size={6}>
          <ChartCard />
        </Grid>
        <Grid size={6}>
          <Schedule />
        </Grid>
      </Grid>
    </Box>
  );
}
