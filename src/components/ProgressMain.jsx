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
      <Grid container spacing={{ lg: 10, xs: 6 }}>
        <Grid
          size={{ lg: 6, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, lg: 0 },
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
              flexDirection: { sm: "row", xs: "column" },
              gap: { md: 0, xs: 2 },
              justifyContent: "space-between",
            }}
          >
            <MoneyCard PROFIT val={950.013} />
            <MoneyCard val={350.11} />
          </Box>
        </Grid>
        <Grid size={{ lg: 6, xs: 12 }}>
          <PopupCard />
        </Grid>
        <Grid size={{ lg: 6, xs: 12 }}>
          <ChartCard />
        </Grid>
        <Grid size={{ lg: 6, xs: 12 }}>
          <Schedule />
        </Grid>
      </Grid>
    </Box>
  );
}
