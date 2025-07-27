import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function MoneyCard({ PROFIT, val }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{
          p: 1.5,
          background: "#D6D6D6",
          borderRadius: 2,
        }}
      >
        {PROFIT && <Icon icon="famicons:download" width="31" height="31" />}
        {!PROFIT && <Icon icon="mingcute:upload-fill" width="31" height="31" />}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          {PROFIT ? "Profit" : "Expense"}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontSize: "1.5rem",
          }}
        >
          {`$${val}`}
        </Typography>
      </Box>
    </Box>
  );
}
