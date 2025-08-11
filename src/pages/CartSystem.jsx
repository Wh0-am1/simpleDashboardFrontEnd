import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";

export default function CartSystem() {
    const cart = useSelector((state) => state.cart);
    return (
        <Container>
            <Typography variant="h3" mb={2}>
                Cart
            </Typography>
            {cart.length > 0 ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    {cart.map((e) => (
                        <CartCard product={e} />
                    ))}
                </Box>
            ) : (
                <Box>
                    <Typography>Nothing in Cart</Typography>
                </Box>
            )}
        </Container>
    );
}
