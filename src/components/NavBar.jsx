import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const Nav = ["Dashboard", "Insighsts", "Rewards", "users", "Chances"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        textTransform: "capitalize",
      }}
      className="NavBar"
    >
      {Nav.map((e, i) => (
        <Link to="/users" key={i}>
          {e}
        </Link>
      ))}
    </Box>
  );
}
