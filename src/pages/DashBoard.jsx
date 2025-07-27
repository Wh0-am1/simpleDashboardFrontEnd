import { Box, Divider, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import React from "react";
import Profile from "../components/Profile";
import NavBar from "../components/NavBar";
import NavFooter from "../components/NavFooter";
import Content from "../components/Content";

export default function DashBoard() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        height: "100vh",
        padding: "2rem",
        width: "100%",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "15%",
          justifyContent: "space-between",
        }}
      >
        {/* Company Name Tag */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Box>
            <Icon icon="devicon:angularmaterial" width="50" height="50" />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
            }}
          >
            Mr.Booster
          </Typography>
        </Box>

        {/* Profile and NavBar */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            flexGrow: 1,
            padding: "3rem",
          }}
        >
          {/* Profile iamge and name */}
          <Profile />
          <NavBar />
        </Box>

        <NavFooter />
      </Box>

      {/* Devider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: "100%",
        }}
      />

      {/* Right Side */}

      <Box
        sx={{
          flexGrow: "1",
          width: "85%",
        }}
      >
        <Content />
      </Box>
    </Box>
  );
}
