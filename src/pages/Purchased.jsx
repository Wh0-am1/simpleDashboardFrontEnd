import { Container, Box, Typography } from "@mui/material";
import React from "react";
import PurchasedCard from "../components/PurchasedCard";
import { useSelector } from "react-redux";
import GlobalDialogue from "../components/GlobalDialogue";

export default function Purchased() {
    const purchased = useSelector((state) => state.purchased);
    return (
        <Container>
            <Typography variant="h3" mb={2}>
                Purchased
            </Typography>
            {purchased.length > 0 ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    {purchased.map((e) => (
                        <PurchasedCard product={e} />
                    ))}
                </Box>
            ) : (
                <Box>
                    <Typography>Nothing in Purchased</Typography>
                </Box>
            )}
            <GlobalDialogue />
        </Container>
    );
}
