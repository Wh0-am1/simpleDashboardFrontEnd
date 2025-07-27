import React from "react";
import { Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";

export default function ChartCard() {
  const series = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];

  let options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ["#D2DE2C", "#722085"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
        }}
      >
        Total hours spent
      </Typography>
      <Chart options={options} type="bar" series={series} height={300} />
    </Box>
  );
}
