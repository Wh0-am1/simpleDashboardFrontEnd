import { Icon } from "@iconify/react";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Profile from "./Profile";
import NavFooter from "./NavFooter";
import NavBar from "./NavBar";

export default function SideBar() {
  const [menu, setMenu] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: { lg: "15%", xs: 0 },
      }}
    >
      <Box
        sx={{
          display: { sx: "block", lg: "none" },
          position: "absolute",
          zIndex: 99,
          top: 9,
          left: 9,
        }}
        onClick={() => setMenu((prev) => !prev)}
      >
        {!menu && <Icon icon="material-symbols:menu" width="23" height="24" />}{" "}
        {menu && (
          <Icon icon="material-symbols:close-rounded" width="23" height="24" />
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Icon icon="devicon:angularmaterial" width="49" height="50" />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bolder",
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
            gap: "1rem",
            flexGrow: 1,
            padding: "2rem",
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
    </Box>
  );
}
