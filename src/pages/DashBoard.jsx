import { Box, Divider, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import React from "react";
import Profile from "../components/Profile";
import NavBar from "../components/NavBar";
import NavFooter from "../components/NavFooter";
import Content from "../components/Content";
import { useState } from "react";

export default function DashBoard() {
  const [menu, setMenu] = useState(false);

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
      <Box
        sx={{
          display: { sx: "block", lg: "none" },
          position: "absolute",
          zIndex: 3,
          top: 10,
          left: 10,
        }}
        onClick={() => setMenu((prev) => !prev)}
      >
        {!menu && <Icon icon="material-symbols:menu" width="24" height="24" />}{" "}
        {menu && (
          <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        )}{" "}
      </Box>
      {/* Left Side */}
      <Box
        sx={{
          display: { lg: "flex", xs: `${menu ? "flex" : "none"}` },
          inset: 0,
          zIndex: 1,
          bgcolor: "white",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          position: { xs: "absolute", lg: "static" },
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
          display: { lg: "inline", xs: "none" },
        }}
      />

      {/* Right Side */}

      <Box
        sx={{
          flexGrow: "1",
          width: "85%",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Content />
      </Box>
    </Box>
  );
}
