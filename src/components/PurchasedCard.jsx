import { Box, Typography } from "@mui/material";
import React from "react";

export default function PurchasedCard({ product }) {
    return (
        <Box bgcolor={"beige"} p={1} borderRadius={4}>
            <Typography>{product.name}</Typography>
            <Typography>Rating : {product.rating}</Typography>
        </Box>
    );
}
