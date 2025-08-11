import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Icon } from "@iconify/react";
import AlertDialog from "../components/Alert";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductSystem() {
    const products = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState(null);
    return (
        <Container>
            <Box>
                <Box
                    sx={{
                        position: "relative",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "center",
                            fontWeight: "bolder",
                        }}
                    >
                        Products
                    </Typography>
                    <Box
                        sx={{
                            position: "absolute",
                            right: 0,
                            top: -5,
                            cursor: "pointer",
                        }}
                    >
                        <Link to="/cart">
                            <Icon icon="mdi:cart" width="30" height="30" />
                            {cart.length > 0 && (
                                <Box
                                    sx={{
                                        bgcolor: "tan",
                                        p: 0.64,
                                        borderRadius: "50%",
                                        textAlign: "center",
                                        fontSize: "0.8rem",
                                        position: "absolute",
                                        right: 0,
                                        top: 15,
                                        fontWeight: 700,
                                    }}
                                >
                                    {cart.length}
                                </Box>
                            )}
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <AlertDialog open={open} setOpen={setOpen} select={select} />
                    {products.map((e, index) => (
                        <ProductCard
                            product={e}
                            key={index}
                            setOpen={setOpen}
                            setSelect={setSelect}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
