import { Box, Typography } from "@mui/material";
import React from "react";

export default function LabelAndData({ label, value }) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
            }}
        >
            <Typography fontWeight={"bolder"}>{label} : </Typography>
            <Typography>{value}</Typography>
        </Box>
    );
}
